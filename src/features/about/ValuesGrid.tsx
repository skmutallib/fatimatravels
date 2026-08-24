"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type Value = { name: string; desc: string; icon: ReactNode };

function ValueCard({ v, i }: { v: Value; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect || !cardRef.current) return;
    cardRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      className="value-card hover-glow group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-white p-8"
    >
      {/* cursor-follow spotlight */}
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), rgba(11,180,181,0.12), transparent 70%)",
        }}
      />

      {/* giant watermark numeral */}
      <span className="pointer-events-none absolute -right-3 -top-7 select-none text-[6.5rem] font-black leading-none text-zinc-50 transition-colors duration-500 group-hover:text-primary/5">
        {String(i + 1).padStart(2, "0")}
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary/15 to-primary/5 text-primary transition-all duration-500 group-hover:scale-110 group-hover:from-primary group-hover:to-[#0a9fa0] group-hover:text-white group-hover:shadow-[0_14px_28px_-10px_rgba(11,180,181,0.7)]">
        {v.icon}
      </span>

      <h3 className="relative mt-7 text-lg font-bold text-[#132238]">{v.name}</h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
        {v.desc}
      </p>

      <span className="relative mt-6 h-px w-full origin-left scale-x-0 bg-linear-to-r from-primary via-primary/60 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />
    </div>
  );
}

export default function ValuesGrid({ values }: { values: Value[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cards = rootRef.current?.querySelectorAll(".value-card");
    if (!cards?.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 46, scale: 0.94, rotate: -1.2 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: rootRef.current, start: "top 82%" },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, [values.length]);

  return (
    <div
      ref={rootRef}
      className="relative mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      <div className="pointer-events-none absolute -left-16 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      {values.map((v, i) => (
        <ValueCard key={v.name} v={v} i={i} />
      ))}
    </div>
  );
}
