"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Stat = {
  target: number;
  decimals: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { target: 4.9, decimals: 1, suffix: "/5", label: "Google Rating" },
  { target: 55, decimals: 0, suffix: "+", label: "Verified Reviews" },
  { target: 359, decimals: 0, suffix: "+", label: "Trips Completed" },
  { target: 24, decimals: 0, suffix: "/7", label: "Always Available" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nums = gsap.utils.toArray<HTMLElement>("[data-count]");
      nums.forEach((el) => {
        const target = parseFloat(el.dataset.count ?? "0");
        const decimals = parseInt(el.dataset.decimals ?? "0", 10);
        const suffix = el.dataset.suffix ?? "";
        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = counter.val.toFixed(decimals) + suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto w-[90vw] px-6 py-14 sm:px-10 lg:px-16"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[#132238]">
          Trusted by Travelers Everywhere
        </h2>
        <p className="mt-2 text-zinc-500">
          Numbers that speak for our service.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div
              data-count={stat.target}
              data-decimals={stat.decimals}
              data-suffix={stat.suffix}
              className="text-4xl font-bold text-primary sm:text-5xl"
            >
              0{stat.suffix}
            </div>
            <div className="mt-2 text-sm font-medium text-zinc-700">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
