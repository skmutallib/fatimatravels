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
  const scrollPositions = useRef<Record<string, number>>({});
  const isBackForward = useRef(false);

  // Track browser back/forward navigation so the route-change effect below
  // can restore the scroll position instead of always jumping to the top.
  // Scroll position is read from window.scrollY rather than ScrollSmoother's
  // onUpdate callback — with normalizeScroll enabled, window.scrollY tracks
  // the smoothed position in sync, but onUpdate does not reliably fire.
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const onPopState = () => {
      isBackForward.current = true;
    };
    const onScroll = () => {
      scrollPositions.current[window.location.pathname] = window.scrollY;
    };
    window.addEventListener("popstate", onPopState);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // On route change, jump to the top (or a #hash target) and recalc
  // triggers for the new page. ScrollSmoother owns scroll position, so a
  // plain browser hash-scroll on load doesn't work — it has to be driven
  // through the smoother explicitly. Back/forward navigation restores the
  // scroll position the user was previously at on that page instead.
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
      isBackForward.current = false;
      return;
    }

    const savedY = scrollPositions.current[pathname];
    if (isBackForward.current && savedY !== undefined) {
      const restore = () => {
        ScrollTrigger.refresh();
        if (smoother) smoother.scrollTop(savedY);
        else window.scrollTo(0, savedY);
      };
      // Images and lazy content settle after the first paint, which can
      // shrink the scrollable height and clamp the restored position — so
      // retry a couple of times as layout finishes.
      requestAnimationFrame(restore);
      setTimeout(restore, 150);
      setTimeout(restore, 500);
    } else {
      if (smoother) smoother.scrollTop(0);
      else window.scrollTo(0, 0);
      ScrollTrigger.refresh();
    }
    isBackForward.current = false;
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
