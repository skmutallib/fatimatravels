"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock3, MessageCircleHeart, Route, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Stat = {
  target: number;
  decimals: number;
  suffix: string;
  label: string;
  icon: ReactNode;
};

const iconProps = { className: "h-5 w-5", strokeWidth: 1.9 };

const stats: Stat[] = [
  { target: 4.9, decimals: 1, suffix: "/5", label: "Google Rating", icon: <Star {...iconProps} /> },
  { target: 55, decimals: 0, suffix: "+", label: "Verified Reviews", icon: <MessageCircleHeart {...iconProps} /> },
  { target: 3059, decimals: 0, suffix: "+", label: "Trips Completed", icon: <Route {...iconProps} /> },
  { target: 24, decimals: 0, suffix: "/7", label: "Always Available", icon: <Clock3 {...iconProps} /> },
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
      className="mx-auto w-[90vw] px-6 py-16 sm:px-10 lg:px-16"
    >
      <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-[#0b1220] via-[#132238] to-[#0b1220] px-6 py-14 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] sm:px-10 sm:py-16 lg:px-14">
        {/* ambient glow */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-3 rounded-[2rem] border border-white/10 sm:inset-4" />

        <div className="relative text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-primary/70" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              By the numbers
            </span>
            <span className="h-px w-8 bg-primary/70" />
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by Travelers Everywhere
          </h2>
          <p className="mt-2 text-white/55">
            Numbers that speak for our service.
          </p>
        </div>

        <div className="relative mt-12 grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group flex flex-col items-center gap-3 text-center sm:px-6 ${
                i !== 0 ? "sm:border-l sm:border-white/10" : ""
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                {stat.icon}
              </span>
              <div
                data-count={stat.target}
                data-decimals={stat.decimals}
                data-suffix={stat.suffix}
                className="text-3xl font-bold tracking-tight text-white sm:text-5xl"
              >
                0{stat.suffix}
              </div>
              <div className="text-sm font-medium text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
