// "use client";

// import { useLayoutEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";

// /**
//  * Scattered end-positions for the floating icons (icon-1.png … icon-6.png).
//  * Values are viewport-relative so the spread scales naturally across
//  * screen sizes. Tune freely — these just need to feel "orbiting" the logo.
//  */
// const ICON_TARGETS = [
//   { x: "-22vw", y: "-26vh", rotation: -18 },
//   { x: "20vw", y: "-20vh", rotation: 14 },
//   { x: "-30vw", y: "16vh", rotation: 10 },
//   { x: "26vw", y: "24vh", rotation: -12 },
//   { x: "-8vw", y: "-32vh", rotation: 8 },
//   { x: "10vw", y: "30vh", rotation: -16 },
// ];

// // how much further out the icons fly as they exit, relative to their
// // scattered position above (matches the reference site's "fling off" beat)
// const EXIT_DISTANCE = 3.5;

// interface PreloaderProps {
//   /** Called once the reveal timeline finishes; use it to flip the hero into its "shown" state. */
//   onComplete: () => void;
// }

// export function Preloader({ onComplete }: PreloaderProps) {
//   const rootRef = useRef<HTMLDivElement>(null);

//   // Keep the latest onComplete in a ref instead of the effect's deps array.
//   // This is what actually stopped the original double-play: if the parent
//   // passes an inline `() => setRevealed(true)}`, its reference changes on
//   // every parent re-render — if that were in the deps array, the whole
//   // effect (and therefore the whole timeline) would re-run and replay
//   // every time the parent re-rendered. With `[]` deps + this ref, the
//   // effect body runs exactly once per real mount, no matter how many times
//   // onComplete's identity changes.
//   const onCompleteRef = useRef(onComplete);
//   onCompleteRef.current = onComplete;

//   useLayoutEffect(() => {
//     const node = rootRef.current;
//     if (!node) return;

//     const prevOverflow = document.documentElement.style.overflow;
//     document.documentElement.style.overflow = "hidden";

//     const ctx = gsap.context(() => {
//       const items = gsap.utils.toArray<HTMLElement>(".preloader-item");
//       const floatingTweens: Array<gsap.core.Tween | undefined> = [];

//       const itemExits = ICON_TARGETS.map((t) => ({
//         x: `${parseFloat(t.x) * EXIT_DISTANCE}vw`,
//         y: `${parseFloat(t.y) * EXIT_DISTANCE}vh`,
//         rotation: t.rotation * 2.5,
//       }));

//       gsap.set(node, { display: "block", opacity: 1 });
//       gsap.set(".preloader-logo", { scale: 0 });
//       gsap.set(items, { x: 0, y: 0, scale: 0, rotation: 0, opacity: 1 });
//       gsap.set(".preloader-revealer", { clipPath: "circle(0% at 50% 50%)" });

//       const tl = gsap.timeline({
//         delay: 0.15,
//         defaults: { overwrite: "auto" },
//       });

//       // logo pops in first
//       tl.to(".preloader-logo", {
//         scale: 1,
//         duration: 0.6,
//         ease: "back.out(1.7)",
//       });

//       // icons fly out to their scattered spots and start a gentle float loop
//       items.forEach((item, i) => {
//         const target = ICON_TARGETS[i];
//         const image = item.querySelector("img");

//         tl.to(
//           item,
//           {
//             x: target.x,
//             y: target.y,
//             rotation: target.rotation,
//             scale: 1,
//             duration: 0.8,
//             ease: "power3.out",
//             onStart: () => {
//               if (image) {
//                 floatingTweens[i] = gsap.to(image, {
//                   y: gsap.utils.random(-15, -25),
//                   duration: gsap.utils.random(1.5, 2.5),
//                   ease: "sine.inOut",
//                   yoyo: true,
//                   repeat: -1,
//                   delay: gsap.utils.random(0, 0.5),
//                 });
//               }
//             },
//           },
//           i === 0 ? "-=0.2" : "<0.08"
//         );
//       });

//       // hold on the "flow" for a beat so it actually reads
//       tl.to({}, { duration: 0.6 });

//       // stop the idle float before the exit animation takes over
//       tl.add(() => floatingTweens.forEach((t) => t?.kill()));

//       tl.addLabel("wipe");

//       // icons fling further out + fade as the circle wipe begins
//       items.forEach((item, i) => {
//         tl.to(
//           item,
//           {
//             x: itemExits[i].x,
//             y: itemExits[i].y,
//             rotation: itemExits[i].rotation,
//             opacity: 0,
//             duration: 0.9,
//             ease: "power2.in",
//           },
//           i === 0 ? "wipe" : "<0.05"
//         );
//       });

//       tl.to(
//         ".preloader-logo",
//         { scale: 0, opacity: 0, duration: 0.5, ease: "power2.in" },
//         "wipe"
//       );

//       // concentric circle-wipe reveal — four stacked colour panels growing
//       // in sequence produces the ringed colour-cycle before settling to
//       // the hero's own background colour.
//       tl.to(
//         ".preloader-revealer",
//         {
//           clipPath: "circle(150% at 50% 50%)",
//           duration: 1,
//           stagger: 0.22,
//           ease: "power2.inOut",
//         },
//         "wipe+=0.2"
//       );

//       // --- smooth hand-off, instead of a hard cut ---
//       // The final panel already matches the hero's own background, so the
//       // moment it's fully grown we (a) tell the parent we're done — which
//       // flips `revealed` and starts the hero's own reveal underneath —
//       // and (b) cross-fade this whole layer's opacity out over it, rather
//       // than snapping to display:none the instant the wipe finishes.
//       tl.add(() => {
//         document.documentElement.style.overflow = prevOverflow;
//         onCompleteRef.current();
//       }, "-=0.15");

//       tl.to(node, { opacity: 0, duration: 0.6, ease: "power1.out" }, "<");
//       tl.set(node, { display: "none" });
//     }, node);

//     return () => {
//       ctx.revert();
//       document.documentElement.style.overflow = prevOverflow;
//     };
//   }, []);

//   return (
//     <div
//       ref={rootRef}
//       className="pointer-events-none fixed inset-0 z-[100] overflow-hidden bg-neutral-950"
//       aria-hidden="true"
//     >
//       {/* stacked colour panels for the circle-wipe; later = higher = last to grow.
//           swap these colours for your own brand ramp if needed */}
//       <div className="preloader-revealer absolute inset-0 bg-[#d4a373]" />
//       <div className="preloader-revealer absolute inset-0 bg-orange-500" />
//       <div className="preloader-revealer absolute inset-0 bg-red-600" />
//       <div className="preloader-revealer absolute inset-0 bg-neutral-950" />

//       <div className="absolute left-1/2 top-1/2 h-0 w-0">
//         <div className="preloader-logo absolute -translate-x-1/2 -translate-y-1/2">
//           <Image
//             src="/logo.png"
//             alt=""
//             width={140}
//             height={140}
//             priority
//             className="h-auto w-28 sm:w-36"
//           />
//         </div>

//         {[1, 2, 3, 4, 5, 6].map((n) => (
//           <div
//             key={n}
//             className="preloader-item absolute -translate-x-1/2 -translate-y-1/2"
//           >
//             <Image
//               src={`/icon-${n}.png`}
//               alt=""
//               width={64}
//               height={64}
//               className="h-auto w-10 sm:w-14"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useLayoutEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";

// const ICON_TARGETS = [
//   { x: "-22vw", y: "-26vh", rotation: -18 },
//   { x: "20vw", y: "-20vh", rotation: 14 },
//   { x: "-30vw", y: "16vh", rotation: 10 },
//   { x: "26vw", y: "24vh", rotation: -12 },
//   { x: "-8vw", y: "-32vh", rotation: 8 },
//   { x: "10vw", y: "30vh", rotation: -16 },
// ];

// const EXIT_DISTANCE = 3.5;

// interface PreloaderProps {
//   onComplete: () => void;
// }

// // swap this to false once things are confirmed working — it just logs to
// // the console so we can tell "images 404ing" apart from "timeline never ran"
// const DEBUG = true;

// // TEMPORARY: set this to true to skip GSAP entirely. With this on, the
// // logo + all 6 icons should render as plain, fully-visible, un-animated
// // images stacked on top of each other at dead center of the screen — pure
// // browser rendering, nothing GSAP-related involved at all. If you don't
// // see them even like this, the problem isn't animation logic — it's
// // something about the images/paths/stacking itself, and we should look
// // there instead. Set back to false once this test is done.
// const DISABLE_ANIMATION_FOR_DEBUG = false;

// export function Preloader({ onComplete }: PreloaderProps) {
//   const rootRef = useRef<HTMLDivElement>(null);
//   const onCompleteRef = useRef(onComplete);
//   onCompleteRef.current = onComplete;

//   useLayoutEffect(() => {
//     const node = rootRef.current;
//     if (!node) return;

//     if (DISABLE_ANIMATION_FOR_DEBUG) {
//       console.log(
//         "[Preloader] DISABLE_ANIMATION_FOR_DEBUG is on — rendering statically, no GSAP involved."
//       );
//       return;
//     }

//     if (DEBUG) console.log("[Preloader] effect running, building timeline…");

//     const prevOverflow = document.documentElement.style.overflow;
//     document.documentElement.style.overflow = "hidden";

//     const ctx = gsap.context(() => {
//       const items = gsap.utils.toArray<HTMLElement>(".preloader-item");
//       const floatingTweens: Array<gsap.core.Tween | undefined> = [];

//       if (DEBUG) console.log(`[Preloader] found ${items.length} .preloader-item elements`);

//       const itemExits = ICON_TARGETS.map((t) => ({
//         x: `${parseFloat(t.x) * EXIT_DISTANCE}vw`,
//         y: `${parseFloat(t.y) * EXIT_DISTANCE}vh`,
//         rotation: t.rotation * 2.5,
//       }));

//       gsap.set(node, { display: "block", opacity: 1 });
//       gsap.set(".preloader-logo", { scale: 0, opacity: 1 });
//       gsap.set(items, { x: 0, y: 0, scale: 0, rotation: 0, opacity: 1 });
//       gsap.set(".preloader-revealer", { clipPath: "circle(0% at 50% 50%)" });

//       const tl = gsap.timeline({
//         delay: 0.15,
//         defaults: { overwrite: "auto" },
//         onStart: () => {
//           if (DEBUG) console.log("[Preloader] timeline STARTED");
//         },
//         onComplete: () => {
//           if (DEBUG) console.log("[Preloader] timeline COMPLETE");
//         },
//       });

//       tl.to(".preloader-logo", {
//         scale: 1,
//         duration: 0.6,
//         ease: "back.out(1.7)",
//       });

//       items.forEach((item, i) => {
//         const target = ICON_TARGETS[i];
//         const image = item.querySelector("img");

//         tl.to(
//           item,
//           {
//             x: target.x,
//             y: target.y,
//             rotation: target.rotation,
//             scale: 1,
//             duration: 0.8,
//             ease: "power3.out",
//             onStart: () => {
//               if (image) {
//                 floatingTweens[i] = gsap.to(image, {
//                   y: gsap.utils.random(-15, -25),
//                   duration: gsap.utils.random(1.5, 2.5),
//                   ease: "sine.inOut",
//                   yoyo: true,
//                   repeat: -1,
//                   delay: gsap.utils.random(0, 0.5),
//                 });
//               }
//             },
//           },
//           i === 0 ? "-=0.2" : "<0.08"
//         );
//       });

//       tl.to({}, { duration: 0.6 });
//       tl.add(() => floatingTweens.forEach((t) => t?.kill()));
//       tl.addLabel("wipe");

//       items.forEach((item, i) => {
//         tl.to(
//           item,
//           {
//             x: itemExits[i].x,
//             y: itemExits[i].y,
//             rotation: itemExits[i].rotation,
//             opacity: 0,
//             duration: 0.9,
//             ease: "power2.in",
//           },
//           i === 0 ? "wipe" : "<0.05"
//         );
//       });

//       tl.to(
//         ".preloader-logo",
//         { scale: 0, opacity: 0, duration: 0.5, ease: "power2.in" },
//         "wipe"
//       );

//       tl.to(
//         ".preloader-revealer",
//         {
//           clipPath: "circle(150% at 50% 50%)",
//           duration: 1,
//           stagger: 0.22,
//           ease: "power2.inOut",
//         },
//         "wipe+=0.2"
//       );

//       tl.add(() => {
//         document.documentElement.style.overflow = prevOverflow;
//         onCompleteRef.current();
//       }, "-=0.15");

//       tl.to(node, { opacity: 0, duration: 0.6, ease: "power1.out" }, "<");
//       tl.set(node, { display: "none" });
//     }, node);

//     return () => {
//       ctx.revert();
//       document.documentElement.style.overflow = prevOverflow;
//     };
//   }, []);

//   const logImgError = (label: string) => (e: React.SyntheticEvent<HTMLImageElement>) => {
//     console.error(`[Preloader] FAILED TO LOAD "${label}":`, e.currentTarget.src);
//   };

//   return (
//     <div
//       ref={rootRef}
//       className="pointer-events-none fixed inset-0 z-[100] overflow-hidden bg-neutral-950"
//       aria-hidden="true"
//     >
//       <div className="preloader-revealer absolute inset-0 bg-[#d4a373]" />
//       <div className="preloader-revealer absolute inset-0 bg-orange-500" />
//       <div className="preloader-revealer absolute inset-0 bg-red-600" />
//       <div className="preloader-revealer absolute inset-0 bg-neutral-950" />

//       <div className="absolute inset-0">
//         <div className="preloader-logo absolute inset-0 m-auto h-fit w-fit">
//           <Image
//             src="/logo.png"
//             alt="logo"
//             width={140}
//             height={140}
//             priority
//             onError={logImgError("logo.png")}
//             className="h-auto w-28 sm:w-36"
//           />
//         </div>

//         {[1, 2, 3, 4, 5, 6].map((n) => (
//           <div key={n} className="preloader-item absolute inset-0 m-auto h-fit w-fit">
//             <Image
//               src={`/icon-${n}.png`}
//               alt={`icon-${n}`}
//               width={64}
//               height={64}
//               priority
//               onError={logImgError(`icon-${n}.png`)}
//               className="h-auto w-10 sm:w-14"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }









"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const ICON_TARGETS = [
  { x: "-22vw", y: "-26vh", rotation: -18 },
  { x: "20vw", y: "-20vh", rotation: 14 },
  { x: "-30vw", y: "16vh", rotation: 10 },
  { x: "26vw", y: "24vh", rotation: -12 },
  { x: "-8vw", y: "-32vh", rotation: 8 },
  { x: "10vw", y: "30vh", rotation: -16 },
];

const EXIT_DISTANCE = 3.5;

interface PreloaderProps {
  onComplete: () => void;
}

// swap this to false once things are confirmed working — it just logs to
// the console so we can tell "images 404ing" apart from "timeline never ran"
const DEBUG = true;

// TEMPORARY: set this to true to skip GSAP entirely. With this on, the
// logo + all 6 icons should render as plain, fully-visible, un-animated
// images stacked on top of each other at dead center of the screen — pure
// browser rendering, nothing GSAP-related involved at all. If you don't
// see them even like this, the problem isn't animation logic — it's
// something about the images/paths/stacking itself, and we should look
// there instead. Set back to false once this test is done.
const DISABLE_ANIMATION_FOR_DEBUG = false;

export function Preloader({ onComplete }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useLayoutEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    if (DISABLE_ANIMATION_FOR_DEBUG) {
      console.log(
        "[Preloader] DISABLE_ANIMATION_FOR_DEBUG is on — rendering statically, no GSAP involved."
      );
      return;
    }

    if (DEBUG) console.log("[Preloader] effect running, building timeline…");

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".preloader-item");
      const floatingTweens: Array<gsap.core.Tween | undefined> = [];

      if (DEBUG) console.log(`[Preloader] found ${items.length} .preloader-item elements`);

      const itemExits = ICON_TARGETS.map((t) => ({
        x: `${parseFloat(t.x) * EXIT_DISTANCE}vw`,
        y: `${parseFloat(t.y) * EXIT_DISTANCE}vh`,
        rotation: t.rotation * 2.5,
      }));

      gsap.set(node, { display: "block", opacity: 1 });
      gsap.set(".preloader-logo", { scale: 0, opacity: 1 });
      gsap.set(items, { x: 0, y: 0, scale: 0, rotation: 0, opacity: 1 });
      gsap.set(".preloader-revealer", { clipPath: "circle(0% at 50% 50%)" });

      const tl = gsap.timeline({
        delay: 0.15,
        defaults: { overwrite: "auto" },
        onStart: () => {
          if (DEBUG) console.log("[Preloader] timeline STARTED");
        },
        onComplete: () => {
          if (DEBUG) console.log("[Preloader] timeline COMPLETE");
        },
      });

      tl.to(".preloader-logo", {
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      });

      items.forEach((item, i) => {
        const target = ICON_TARGETS[i];
        const image = item.querySelector("img");

        tl.to(
          item,
          {
            x: target.x,
            y: target.y,
            rotation: target.rotation,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            onStart: () => {
              if (image) {
                floatingTweens[i] = gsap.to(image, {
                  y: gsap.utils.random(-15, -25),
                  duration: gsap.utils.random(1.5, 2.5),
                  ease: "sine.inOut",
                  yoyo: true,
                  repeat: -1,
                  delay: gsap.utils.random(0, 0.5),
                });
              }
            },
          },
          i === 0 ? "-=0.2" : "<0.08"
        );
      });

      tl.to({}, { duration: 0.6 });
      tl.add(() => floatingTweens.forEach((t) => t?.kill()));
      tl.addLabel("wipe");

      items.forEach((item, i) => {
        tl.to(
          item,
          {
            x: itemExits[i].x,
            y: itemExits[i].y,
            rotation: itemExits[i].rotation,
            opacity: 0,
            duration: 0.9,
            ease: "power2.in",
          },
          i === 0 ? "wipe" : "<0.05"
        );
      });

      tl.to(
        ".preloader-logo",
        { scale: 0, opacity: 0, duration: 0.5, ease: "power2.in" },
        "wipe"
      );

      tl.to(
        ".preloader-revealer",
        {
          clipPath: "circle(150% at 50% 50%)",
          duration: 1,
          stagger: 0.22,
          ease: "power2.inOut",
        },
        "wipe+=0.2"
      );

      // Fade the whole layer out over the tail of the wipe...
      tl.to(node, { opacity: 0, duration: 0.6, ease: "power1.out" }, "-=0.15");
      tl.set(node, { display: "none" });

      // ...and only THEN hand off. This used to fire while the layer was
      // still fading, so the hero's intro (title letters etc.) played
      // underneath it and the first part was never seen. Now `onComplete`
      // means "the preloader is completely gone".
      tl.add(() => {
        document.documentElement.style.overflow = prevOverflow;
        onCompleteRef.current();
      });
    }, node);

    return () => {
      ctx.revert();
      document.documentElement.style.overflow = prevOverflow;
    };
  }, []);

  const logImgError = (label: string) => (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`[Preloader] FAILED TO LOAD "${label}":`, e.currentTarget.src);
  };

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden bg-neutral-950"
      aria-hidden="true"
    >
      <div className="preloader-revealer absolute inset-0 bg-[#d4a373]" />
      <div className="preloader-revealer absolute inset-0 bg-orange-500" />
      <div className="preloader-revealer absolute inset-0 bg-red-600" />
      <div className="preloader-revealer absolute inset-0 bg-neutral-950" />

      <div className="absolute inset-0">
        <div className="preloader-logo absolute inset-0 m-auto h-fit w-fit">
          <Image
            src="/logo.png"
            alt="logo"
            width={140}
            height={140}
            priority
            onError={logImgError("logo.png")}
            className="h-auto w-28 sm:w-42"
          />
        </div>

        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="preloader-item absolute inset-0 m-auto h-fit w-fit">
            <Image
              src={`/icon-${n}.png`}
              alt={`icon-${n}`}
              width={64}
              height={64}
              priority
              onError={logImgError(`icon-${n}.png`)}
              className="h-auto w-10 sm:w-18"
            />
          </div>
        ))}
      </div>
    </div>
  );
}