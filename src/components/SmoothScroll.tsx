"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapper = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // On route change, jump to the top (or a #hash target) and recalc
  // triggers for the new page. ScrollSmoother owns scroll position, so a
  // plain browser hash-scroll on load doesn't work — it has to be driven
  // through the smoother explicitly.
  useLayoutEffect(() => {
    const smoother = ScrollSmoother.get();
    const hash = window.location.hash;
    const target = hash ? document.querySelector(hash) : null;

    if (target) {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        if (smoother) {
          const y = Math.max(0, smoother.offset(target, "top") - 96);
          smoother.scrollTo(y, true);
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
      return;
    }

    if (smoother) smoother.scrollTop(0);
    else window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [pathname]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP smooth scrolling
      ScrollSmoother.create({
        wrapper: wrapper.current!,
        content: content.current!,
        smooth: 1.2,
        effects: true,
        normalizeScroll: true,
      });

      // Reveal-on-scroll for tagged elements
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>
        {children}
      </div>
    </div>
  );
}
