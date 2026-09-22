// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import lottie, { AnimationItem } from "lottie-web";

// gsap.registerPlugin(ScrollTrigger);

// const BEE_SIZE = 90;
// const SHADOW_SIZE = 68;
// // how high the bee arcs while hopping between two stops, in px
// const HOP_HEIGHT = 26;

// interface Waypoint {
//   /** 0–1, this stop's position within the container's total scroll range */
//   progress: number;
//   /** px, relative to the container's own top-left corner */
//   x: number;
//   y: number;
// }

// /**
//  * Given the measured waypoints and the current scroll progress (0–1
//  * across the whole container), returns where the bee should be right
//  * now, plus a 0–1 "hop" value that peaks exactly halfway between two
//  * stops and returns to 0 as it lands on each one. The interpolation
//  * itself is a plain smoothstep — the same easing curve used in the
//  * reference project's sampleKeyframes — so motion between stops eases
//  * in and out instead of moving at a constant speed.
//  */
// function getBeeState(waypoints: Waypoint[], progress: number) {
//   if (waypoints.length === 0) return { x: 0, y: 0, hop: 0 };
//   if (waypoints.length === 1 || progress <= waypoints[0].progress) {
//     return { x: waypoints[0].x, y: waypoints[0].y, hop: 0 };
//   }

//   for (let i = 0; i < waypoints.length - 1; i++) {
//     const from = waypoints[i];
//     const to = waypoints[i + 1];
//     if (progress >= from.progress && progress <= to.progress) {
//       const span = to.progress - from.progress || 1;
//       const t = (progress - from.progress) / span;
//       const eased = t * t * (3 - 2 * t); // smoothstep
//       return {
//         x: from.x + (to.x - from.x) * eased,
//         y: from.y + (to.y - from.y) * eased,
//         hop: Math.sin(t * Math.PI),
//       };
//     }
//   }

//   const last = waypoints[waypoints.length - 1];
//   return { x: last.x, y: last.y, hop: 0 };
// }

// interface ScrollBeeProps {
//   /** The section/column the bee should fly through. Must be `position: relative`. */
//   containerRef: React.RefObject<HTMLElement>;
//   /** Selector for the elements the bee should visit, in document order. */
//   targetSelector?: string;
//   /** Path to the Lottie JSON. */
//   lottiePath?: string;
// }

// export function ScrollBee({
//   containerRef,
//   targetSelector = ".bee-target",
//   lottiePath = "/bee.json",
// }: ScrollBeeProps) {
//   const beeRef = useRef<HTMLDivElement>(null);
//   const shadowRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     let beeAnim: AnimationItem | undefined;
//     let shadowAnim: AnimationItem | undefined;

//     if (beeRef.current) {
//       beeAnim = lottie.loadAnimation({
//         container: beeRef.current,
//         renderer: "svg",
//         loop: true,
//         autoplay: true,
//         path: lottiePath,
//       });
//     }

//     // reuse the same file for the shadow, flattened to a blurred black
//     // silhouette via CSS — the same trick the reference project uses,
//     // so we don't need a second asset
//     if (shadowRef.current) {
//       shadowAnim = lottie.loadAnimation({
//         container: shadowRef.current,
//         renderer: "svg",
//         loop: true,
//         autoplay: true,
//         path: lottiePath,
//       });
//     }

//     let waypoints: Waypoint[] = [];

//     const buildWaypoints = () => {
//       const targets = Array.from(
//         container.querySelectorAll<HTMLElement>(targetSelector)
//       );
//       const containerRect = container.getBoundingClientRect();
//       const containerHeight = containerRect.height || 1;

//       waypoints = targets.map((target) => {
//         const rect = target.getBoundingClientRect();
//         const relativeTop = rect.top - containerRect.top;
//         const relativeLeft = rect.left - containerRect.left;
//         return {
//           progress: Math.min(1, Math.max(0, relativeTop / containerHeight)),
//           x: relativeLeft + rect.width / 2 - BEE_SIZE / 2,
//           y: relativeTop + rect.height / 2 - BEE_SIZE / 2,
//         };
//       });
//     };

//     const positionBee = (progress: number) => {
//       if (waypoints.length === 0) return;
//       const { x, y, hop } = getBeeState(waypoints, progress);

//       gsap.set(beeRef.current, { x, y: y - hop * HOP_HEIGHT });
//       gsap.set(shadowRef.current, {
//         x: x + (BEE_SIZE - SHADOW_SIZE) / 2,
//         y: y + (BEE_SIZE - SHADOW_SIZE) / 2 + 8,
//         scale: 1 - hop * 0.25,
//         opacity: 0.45 - hop * 0.2,
//       });
//     };

//     buildWaypoints();
//     positionBee(0);

//     const st = ScrollTrigger.create({
//       trigger: container,
//       start: "top center",
//       end: "bottom bottom",
//       scrub: true,
//       onUpdate: (self) => positionBee(self.progress),
//     });

//     const handleResize = () => {
//       buildWaypoints();
//       positionBee(st.progress);
//       ScrollTrigger.refresh();
//     };

//     // recalculate once more after everything (images, fonts) has
//     // definitely settled, in addition to on resize
//     window.addEventListener("resize", handleResize);
//     window.addEventListener("load", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("load", handleResize);
//       st.kill();
//       beeAnim?.destroy();
//       shadowAnim?.destroy();
//     };
//   }, [containerRef, targetSelector, lottiePath]);

//   return (
//     <>
//       <div
//         ref={shadowRef}
//         aria-hidden="true"
//         className="pointer-events-none absolute left-0 top-0 z-0"
//         style={{
//           width: SHADOW_SIZE,
//           height: SHADOW_SIZE,
//           filter: "brightness(0) blur(3px)",
//         }}
//       />
//       <div
//         ref={beeRef}
//         aria-hidden="true"
//         className="pointer-events-none absolute left-0 top-0 z-20"
//         style={{ width: BEE_SIZE, height: BEE_SIZE }}
//       />
//     </>
//   );
// }








// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import lottie, { AnimationItem } from "lottie-web";

// gsap.registerPlugin(ScrollTrigger);

// const BEE_SIZE = 90;
// const SHADOW_SIZE = 68;
// // how high the bee arcs while hopping between two stops, in px — kept
// // small on purpose, this is a settle, not a bounce
// const HOP_HEIGHT = 14;

// interface Waypoint {
//   /** 0–1, this stop's position on ScrollTrigger's OWN progress scale */
//   progress: number;
//   /** px, relative to the container's own top-left corner */
//   x: number;
//   y: number;
// }

// function getBeeState(waypoints: Waypoint[], progress: number) {
//   if (waypoints.length === 0) return { x: 0, y: 0, hop: 0 };
//   if (waypoints.length === 1 || progress <= waypoints[0].progress) {
//     return { x: waypoints[0].x, y: waypoints[0].y, hop: 0 };
//   }

//   for (let i = 0; i < waypoints.length - 1; i++) {
//     const from = waypoints[i];
//     const to = waypoints[i + 1];
//     if (progress >= from.progress && progress <= to.progress) {
//       const span = to.progress - from.progress || 1;
//       const t = (progress - from.progress) / span;
//       const eased = t * t * (3 - 2 * t); // smoothstep
//       return {
//         x: from.x + (to.x - from.x) * eased,
//         y: from.y + (to.y - from.y) * eased,
//         hop: Math.sin(t * Math.PI),
//       };
//     }
//   }

//   const last = waypoints[waypoints.length - 1];
//   return { x: last.x, y: last.y, hop: 0 };
// }

// interface ScrollBeeProps {
//   containerRef: React.RefObject<HTMLElement>;
//   targetSelector?: string;
//   lottiePath?: string;
// }

// export function ScrollBee({
//   containerRef,
//   targetSelector = ".bee-target",
//   lottiePath = "/bee.json",
// }: ScrollBeeProps) {
//   const beeRef = useRef<HTMLDivElement>(null);
//   const shadowRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     let beeAnim: AnimationItem | undefined;
//     let shadowAnim: AnimationItem | undefined;

//     if (beeRef.current) {
//       beeAnim = lottie.loadAnimation({
//         container: beeRef.current,
//         renderer: "svg",
//         loop: true,
//         autoplay: true,
//         path: lottiePath,
//       });
//     }
//     if (shadowRef.current) {
//       shadowAnim = lottie.loadAnimation({
//         container: shadowRef.current,
//         renderer: "svg",
//         loop: true,
//         autoplay: true,
//         path: lottiePath,
//       });
//     }

//     let waypoints: Waypoint[] = [];

//     // `st` is assigned right after creation below; buildWaypoints needs
//     // its real start/end scroll pixel values, so it's called with the
//     // ScrollTrigger instance passed in rather than closing over it.
//     const buildWaypoints = (st: ScrollTrigger) => {
//       const targets = Array.from(
//         container.querySelectorAll<HTMLElement>(targetSelector)
//       );
//       const containerRect = container.getBoundingClientRect();
//       const viewportHeight = window.innerHeight;
//       const hasRange = st.end > st.start;

//       waypoints = targets
//         .map((target) => {
//           const rect = target.getBoundingClientRect();

//           // LOCAL coords for actually placing the bee — the offset
//           // between target and container stays constant no matter the
//           // current scroll position, since both scroll together.
//           const x = rect.left - containerRect.left + rect.width / 2 - BEE_SIZE / 2;
//           const y = rect.top - containerRect.top + rect.height / 2 - BEE_SIZE / 2;

//           // ABSOLUTE document coords, to work out the real scrollY at
//           // which this image is centered in the viewport, then convert
//           // that into ScrollTrigger's own 0–1 progress scale (its start/
//           // end already account for the "top center"/"bottom bottom"
//           // offsets, which a plain height-fraction guess does not).
//           const absoluteCenterY = rect.top + window.scrollY + rect.height / 2;
//           const desiredScrollY = absoluteCenterY - viewportHeight / 2;
//           const progress = hasRange
//             ? Math.min(1, Math.max(0, (desiredScrollY - st.start) / (st.end - st.start)))
//             : 0;

//           return { progress, x, y };
//         })
//         .sort((a, b) => a.progress - b.progress);
//     };

//     const positionBee = (progress: number) => {
//       if (waypoints.length === 0) return;
//       const { x, y, hop } = getBeeState(waypoints, progress);

//       gsap.set(beeRef.current, { x, y: y - hop * HOP_HEIGHT });
//       gsap.set(shadowRef.current, {
//         x: x + (BEE_SIZE - SHADOW_SIZE) / 2,
//         y: y + (BEE_SIZE - SHADOW_SIZE) / 2 + 8,
//         scale: 1 - hop * 0.15,
//         opacity: 0.4 - hop * 0.12,
//       });
//     };

//     const st = ScrollTrigger.create({
//       trigger: container,
//       start: "top center",
//       end: "bottom bottom",
//       // a little inertia instead of rigid 1:1 with scroll — reads as
//       // calmer, especially paired with Lenis's own smoothing
//       scrub: 1.2,
//       onUpdate: (self) => positionBee(self.progress),
//       onRefresh: (self) => {
//         buildWaypoints(self);
//         positionBee(self.progress);
//       },
//     });

//     buildWaypoints(st);
//     positionBee(st.progress);

//     const handleResize = () => ScrollTrigger.refresh();
//     window.addEventListener("resize", handleResize);
//     window.addEventListener("load", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("load", handleResize);
//       st.kill();
//       beeAnim?.destroy();
//       shadowAnim?.destroy();
//     };
//   }, [containerRef, targetSelector, lottiePath]);

//   return (
//     <>
//       <div
//         ref={shadowRef}
//         aria-hidden="true"
//         className="pointer-events-none absolute left-0 top-0 z-0"
//         style={{
//           width: SHADOW_SIZE,
//           height: SHADOW_SIZE,
//           filter: "brightness(0) blur(3px)",
//         }}
//       />
//       <div
//         ref={beeRef}
//         aria-hidden="true"
//         className="pointer-events-none absolute left-0 top-0 z-20"
//         style={{ width: BEE_SIZE, height: BEE_SIZE }}
//       />
//     </>
//   );
// }








"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie, { AnimationItem } from "lottie-web";

gsap.registerPlugin(ScrollTrigger);

const BEE_SIZE = 150;
const SHADOW_SIZE = 110;
// how high the bee arcs while hopping between two stops, in px
const HOP_HEIGHT = 16;
// breathing room between an image's edge and where the bee lands beside it
const EDGE_GAP = 28;

interface Waypoint {
  /** 0–1, this stop's position on ScrollTrigger's OWN progress scale */
  progress: number;
  /** px, relative to the container's own top-left corner */
  x: number;
  y: number;
}

function getBeeState(waypoints: Waypoint[], progress: number) {
  if (waypoints.length === 0) return { x: 0, y: 0, hop: 0 };
  if (waypoints.length === 1 || progress <= waypoints[0].progress) {
    return { x: waypoints[0].x, y: waypoints[0].y, hop: 0 };
  }

  for (let i = 0; i < waypoints.length - 1; i++) {
    const from = waypoints[i];
    const to = waypoints[i + 1];
    if (progress >= from.progress && progress <= to.progress) {
      const span = to.progress - from.progress || 1;
      const t = (progress - from.progress) / span;
      const eased = t * t * (3 - 2 * t); // smoothstep
      return {
        x: from.x + (to.x - from.x) * eased,
        y: from.y + (to.y - from.y) * eased,
        hop: Math.sin(t * Math.PI),
      };
    }
  }

  const last = waypoints[waypoints.length - 1];
  return { x: last.x, y: last.y, hop: 0 };
}

interface ScrollBeeProps {
  containerRef: React.RefObject<HTMLElement>;
  targetSelector?: string;
  lottiePath?: string;
}

export function ScrollBee({
  containerRef,
  targetSelector = ".bee-target",
  lottiePath = "/Bee.json",
}: ScrollBeeProps) {
  const beeRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let beeAnim: AnimationItem | undefined;
    let shadowAnim: AnimationItem | undefined;

    if (beeRef.current) {
      beeAnim = lottie.loadAnimation({
        container: beeRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: lottiePath,
      });
    }
    if (shadowRef.current) {
      shadowAnim = lottie.loadAnimation({
        container: shadowRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: lottiePath,
      });
    }

    let waypoints: Waypoint[] = [];

    const buildWaypoints = (st: ScrollTrigger) => {
      const targets = Array.from(
        container.querySelectorAll<HTMLElement>(targetSelector)
      );
      const containerRect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const hasRange = st.end > st.start;

      waypoints = targets
        .map((target, i) => {
          const rect = target.getBoundingClientRect();
          const relativeTop = rect.top - containerRect.top;
          const relativeLeft = rect.left - containerRect.left;
          const imageCenterX = relativeLeft + rect.width / 2;
          const isLeftLeaning = imageCenterX < containerRect.width / 2;

          // land beside the image, in whichever side has the open space
          // — not stamped on top of it, which is what caused the harsh
          // left/right zigzag before
          let x = isLeftLeaning
            ? relativeLeft + rect.width + EDGE_GAP
            : relativeLeft - BEE_SIZE - EDGE_GAP;
          x = Math.min(Math.max(x, 0), containerRect.width - BEE_SIZE);

          // alternate a little between upper and lower thirds of the
          // image so consecutive stops don't all land at exactly the
          // same relative height
          const y =
            relativeTop + rect.height * (i % 2 === 0 ? 0.28 : 0.62) - BEE_SIZE / 2;

          const absoluteCenterY = rect.top + window.scrollY + rect.height / 2;
          const desiredScrollY = absoluteCenterY - viewportHeight / 2;
          const progress = hasRange
            ? Math.min(1, Math.max(0, (desiredScrollY - st.start) / (st.end - st.start)))
            : 0;

          return { progress, x, y };
        })
        .sort((a, b) => a.progress - b.progress);
    };

    const positionBee = (progress: number) => {
      if (waypoints.length === 0) return;
      const { x, y, hop } = getBeeState(waypoints, progress);

      gsap.set(beeRef.current, { x, y: y - hop * HOP_HEIGHT });
      gsap.set(shadowRef.current, {
        x: x + (BEE_SIZE - SHADOW_SIZE) / 2,
        y: y + (BEE_SIZE - SHADOW_SIZE) / 2 + 10,
        scale: 1 - hop * 0.15,
        opacity: 0.4 - hop * 0.12,
      });
    };

    const st = ScrollTrigger.create({
      trigger: container,
      start: "top center",
      end: "bottom bottom",
      scrub: 1.2,
      onUpdate: (self) => positionBee(self.progress),
      onRefresh: (self) => {
        buildWaypoints(self);
        positionBee(self.progress);
      },
    });

    buildWaypoints(st);
    positionBee(st.progress);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      st.kill();
      beeAnim?.destroy();
      shadowAnim?.destroy();
    };
  }, [containerRef, targetSelector, lottiePath]);

  return (
    <>
      <div
        ref={shadowRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0"
        style={{
          width: SHADOW_SIZE,
          height: SHADOW_SIZE,
          filter: "brightness(0) blur(3px)",
        }}
      />
      <div
        ref={beeRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-20"
        style={{ width: BEE_SIZE, height: BEE_SIZE }}
      />
    </>
  );
}