"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wrap your ROOT layout with this once — e.g. in app/layout.tsx:
 *
 *   <body>
 *     <SmoothScrollProvider>{children}</SmoothScrollProvider>
 *   </body>
 *
 * Don't add a second one inside individual pages/sections. Lenis
 * intercepts wheel/touch scrolling for the whole document, so one
 * instance needs to own the entire page — a second instance would fight
 * the first one for control of the scroll.
 *
 * This also wires Lenis into GSAP's own ticker (instead of
 * requestAnimationFrame directly) and tells ScrollTrigger to recalculate
 * on every Lenis scroll tick — which is what makes ScrollTrigger's
 * scrub-based animations (like the bee below) track the smoothed scroll
 * position instead of the raw, un-smoothed one.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}