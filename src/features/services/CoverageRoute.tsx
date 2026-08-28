"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MapPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
      <path
        d="M12 21c5-4.5 7.5-8 7.5-11.5A7.5 7.5 0 0 0 4.5 9.5C4.5 13 7 16.5 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export type CoverageStop = { title: string; note: string };

export default function CoverageRoute({ stops }: { stops: CoverageStop[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const pinsRef = useRef<Array<HTMLLIElement | null>>([]);

  useLayoutEffect(() => {
    const pins = pinsRef.current.filter((p): p is HTMLLIElement => !!p);

    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.4,
            ease: "power2.inOut",
            scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
          },
        );
      }

      gsap.fromTo(
        pins,
        { opacity: 0, y: 24, scale: 0.6 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.8)",
          stagger: 0.18,
          delay: 0.3,
          scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, [stops.length]);

  // Pin size grows with each stop (bigger reach = bigger ring cluster). The
  // desktop connector line stays fixed, so every pin reserves a box matching
  // the largest stop's footprint and centers within it — keeping every pin's
  // visual center locked to the line regardless of its own ring count.
  const maxRingCount = stops.length;
  const maxCoreSize = 32 + (stops.length - 1) * 6;
  const maxBoxSize = maxCoreSize + maxRingCount * 18;
  const pinCenterY = maxBoxSize / 2;

  return (
    <div ref={rootRef} className="relative mt-24 sm:mt-28">
      {/* connecting route (desktop) */}
      <div
        className="pointer-events-none absolute inset-x-[18%] hidden h-px overflow-hidden sm:block"
        style={{ top: pinCenterY }}
      >
        <div className="h-full w-full border-t-2 border-dashed border-zinc-200" />
      </div>
      <div
        ref={lineRef}
        className="pointer-events-none absolute inset-x-[18%] hidden h-px origin-left bg-linear-to-r from-primary/70 via-primary to-primary/70 sm:block"
        style={{ top: pinCenterY }}
      />

      {/* connecting route (mobile, vertical) */}
      <div className="pointer-events-none absolute left-4 top-4 bottom-4 w-px border-l-2 border-dashed border-zinc-200 sm:hidden" />

      <ol className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-0">
        {stops.map((c, i) => {
          const ringCount = i + 1;
          const coreSize = 32 + i * 6;
          const boxSize = coreSize + ringCount * 18;
          return (
          <li
            key={c.title}
            ref={(el) => {
              pinsRef.current[i] = el;
            }}
            className="group relative flex items-start gap-5 pl-0 sm:flex-col sm:items-center sm:text-center"
          >
            {/* pin marker — expanding radar rings signal growing coverage.
                Fixed-width outer slot keeps the pin's visual center locked to
                the connecting line on mobile even as the rings grow. */}
            <div
              className="flex shrink-0 items-center justify-center sm:mb-7 sm:h-(--pin-max) sm:w-(--pin-max)"
              style={{
                width: 32,
                height: boxSize,
                ["--pin-max" as string]: `${maxBoxSize}px`,
              }}
            >
              <span
                className="relative z-10 flex items-center justify-center"
                style={{ height: boxSize, width: boxSize }}
              >
                {Array.from({ length: ringCount }).map((_, r) => (
                  <span
                    key={r}
                    aria-hidden
                    className="absolute rounded-full border border-primary/25 transition-colors duration-300 group-hover:border-primary/50"
                    style={{
                      height: coreSize + (r + 1) * 18,
                      width: coreSize + (r + 1) * 18,
                    }}
                  />
                ))}
                <span className="absolute inline-flex rounded-full bg-primary/30 opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-100" style={{ height: coreSize, width: coreSize }} />
                <span
                  className="hover-glow relative flex items-center justify-center rounded-full bg-white text-primary shadow-[0_6px_18px_-6px_rgba(11,180,181,0.9)] ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-hover:ring-primary"
                  style={{ height: coreSize, width: coreSize }}
                >
                  <MapPin />
                </span>
              </span>
            </div>

            <div>
              <span className="text-sm font-semibold tracking-[0.2em] text-primary">
                0{i + 1}
              </span>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-[#132238] transition-colors duration-300 group-hover:text-primary sm:mt-2 sm:text-3xl">
                {c.title}
              </h3>
              <p className="mt-1 text-zinc-500 sm:mt-2 sm:max-w-[15rem]">{c.note}</p>
            </div>
          </li>
          );
        })}
      </ol>
    </div>
  );
}
