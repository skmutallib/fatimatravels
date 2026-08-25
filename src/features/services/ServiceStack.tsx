"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
      <path
        d="M5 12.5l4 4 10-10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type StackService = {
  tag: string;
  name: string;
  desc: string;
  points: string[];
  icon: ReactNode;
};

export default function ServiceStack({
  services,
  whatsapp,
}: {
  services: StackService[];
  whatsapp: string;
}) {
  const wa = whatsapp.replace(/\D/g, "");
  const book = (service: string) =>
    `https://wa.me/${wa}?text=${encodeURIComponent(
      `Hi Fatima Travels, I'd like to book: ${service}.`,
    )}`;

  const wrapRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    const cards = cardsRef.current.filter((c): c is HTMLDivElement => !!c);
    if (cards.length < 2) return;

    // Pinned card-stack effect only applies at sm+ — mobile gets a normal
    // flowing stack of full cards instead (no pin, no scroll-jacking).
    const mm = gsap.matchMedia();

    mm.add("(min-width: 640px)", () => {
      const ctx = gsap.context(() => {
        gsap.set(cards, { yPercent: 0, scale: 1, filter: "brightness(1)" });
        gsap.set(cards.slice(1), { yPercent: 100 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top top+=88",
            end: () => `+=${(cards.length - 1) * 480}`,
            scrub: 0.6,
            pin: true,
            pinType: "transform",
            anticipatePin: 1,
          },
        });

        for (let i = 1; i < cards.length; i++) {
          tl.to(cards[i], { yPercent: 0, duration: 1, ease: "none" }, i - 1);
          for (let j = 0; j < i; j++) {
            const depth = i - j;
            tl.to(
              cards[j],
              {
                yPercent: -depth * 5,
                scale: 1 - depth * 0.045,
                filter: `brightness(${Math.max(0.6, 1 - depth * 0.12)})`,
                duration: 1,
                ease: "none",
              },
              i - 1,
            );
          }
        }
      }, wrapRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [services.length]);

  return (
    <div
      ref={wrapRef}
      className="relative z-10 flex w-full flex-col gap-6 bg-white sm:block sm:h-screen sm:min-h-[640px] sm:gap-0 sm:overflow-hidden"
    >
      {services.map((s, i) => (
        <div
          key={s.name}
          ref={(el) => {
            cardsRef.current[i] = el;
          }}
          className="relative flex items-center justify-center px-6 sm:absolute sm:inset-0 sm:pt-20"
          style={{ zIndex: i + 1 }}
        >
          <a
            href={book(s.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-glow group/btn relative flex min-h-[420px] w-full flex-col justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-primary py-12 pl-8 pr-24 shadow-premium sm:min-h-[500px] sm:py-16 sm:pl-16 sm:pr-36"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
                {s.icon}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                {s.tag}
              </span>
            </div>

            <h3 className="mt-8 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {s.name}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {s.desc}
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                    <CheckIcon />
                  </span>
                  <span className="text-sm leading-snug text-white/90 sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Right-side circular CTA */}
            <span className="absolute right-6 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-[0_16px_32px_-12px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover/btn:translate-x-1 sm:right-10 sm:h-20 sm:w-20">
              <ArrowRight />
            </span>

            <span className="pointer-events-none absolute bottom-6 left-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:bottom-8 sm:left-16">
              {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}
