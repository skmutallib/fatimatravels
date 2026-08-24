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
      className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
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
  }, [services.length]);

  return (
    <div ref={wrapRef} className="relative h-screen min-h-[640px] w-full bg-white">
      {services.map((s, i) => (
        <div
          key={s.name}
          ref={(el) => {
            cardsRef.current[i] = el;
          }}
          className="absolute inset-0 flex items-center justify-center px-6 pt-20"
          style={{ zIndex: i + 1 }}
        >
          <a
            href={book(s.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-glow group/btn relative flex w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-primary/15 bg-white p-8 shadow-premium sm:p-14"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {s.icon}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/70">
                {s.tag}
              </span>
            </div>

            <h3 className="mt-8 text-2xl font-bold tracking-tight text-[#132238] sm:text-4xl">
              {s.name}
            </h3>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {s.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckIcon />
                  </span>
                  <span className="text-sm leading-snug text-[#132238]">{point}</span>
                </li>
              ))}
            </ul>

            <span className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary">
              Book this
              <ArrowRight />
            </span>

            <span className="pointer-events-none absolute bottom-6 right-8 hidden text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/30 sm:block">
              {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}
