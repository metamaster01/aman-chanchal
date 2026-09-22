// "use client";

// import { useLayoutEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const GRID_COLS = 8;
// const GRID_ROWS = 6;
// const TOTAL_BLOCKS = GRID_COLS * GRID_ROWS;

// const BLOCK_COLORS = Array.from({ length: TOTAL_BLOCKS }, (_, i) =>
//   i % 9 === 0 ? "#161616" : "#F97316"
// );

// // demo content — replace freely
// const STATS = [
//   { value: "30+", label: "Product Shipped" },
//   { value: "5+", label: "Years Of Exp" },
// ];

// const SERVICES = [
//   "Digital Marketing",
//   "Video Editing",
//   "Web Development",
//   "SaaS Products",
//   "Brand Endorsement",
//   "Advertisement",
// ];

// interface WorkItem {
//   title: string;
//   tag: string;
//   image: string;
// }

// const WORK: WorkItem[] = [
//   { title: "Project One", tag: "Web Design", image: "/work/project-1.jpg" },
//   { title: "Project Two", tag: "SaaS Platform", image: "/work/project-2.jpg" },
//   { title: "Project Three", tag: "Brand Campaign", image: "/work/project-3.jpg" },
//   { title: "Project Four", tag: "Video Production", image: "/work/project-4.jpg" },
//   { title: "Project Five", tag: "App Design", image: "/work/project-5.jpg" },
// ];

// // the "selected work" canvas is much wider than the viewport — each
// // project gets its own SLOT_VW-wide slot, and the whole thing pans
// // horizontally as the user scrolls through this phase
// const SLOT_VW = 55;
// const CARD_WIDTH_VW = 30;
// const CANVAS_WIDTH_VW = WORK.length * SLOT_VW + 20;
// const CARD_POSITIONS = WORK.map((_, i) => ({
//   left: i * SLOT_VW + 10,
//   top: i % 2 === 0 ? 28 : 62, // alternating high/low, in % — gives the zigzag path
// }));
// const PATH_D = CARD_POSITIONS.map(
//   (c, i) => `${i === 0 ? "M" : "L"}${c.left + CARD_WIDTH_VW / 2},${c.top}`
// ).join(" ");

// const PIN_VIEWPORTS = 7;

// function clamp01(n: number) {
//   return Math.min(1, Math.max(0, n));
// }

// function fadeInHoldOut(
//   p: number,
//   inStart: number,
//   inEnd: number,
//   outStart: number,
//   outEnd: number
// ) {
//   if (p < inStart || p > outEnd) return 0;
//   if (p < inEnd) return clamp01((p - inStart) / (inEnd - inStart));
//   if (p < outStart) return 1;
//   return 1 - clamp01((p - outStart) / (outEnd - outStart));
// }

// const FILL_IN_END = 0.12;
// const FILL_OUT_START = 0.88;
// const WORK_START = 0.3;
// const WORK_END = 0.85;

// // shared notch — a diagonally-cut top-right corner, echoing the
// // interlocking-panel look of the reference without full jigsaw geometry
// const NOTCH =
//   "[clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)]";

// export function WorkShowcase() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const workWrapRef = useRef<HTMLDivElement>(null);
//   const workTrackRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const ctx = gsap.context(() => {
//       const blocks = gsap.utils.toArray<HTMLElement>(".fill-block");

//       // directional sweep — bottom-right corner first, sweeping toward
//       // the top-left — with a little per-block jitter so it doesn't
//       // read as a perfectly mechanical diagonal
//       const revealAt = new Map<HTMLElement, number>();
//       blocks.forEach((block, i) => {
//         const col = i % GRID_COLS;
//         const row = Math.floor(i / GRID_COLS);
//         const wave =
//           (GRID_COLS - 1 - col + row) / (GRID_COLS - 1 + GRID_ROWS - 1);
//         const jitter = (Math.random() - 0.5) * 0.12;
//         revealAt.set(block, clamp01(wave + jitter));
//       });

//       gsap.set(blocks, { scale: 0, opacity: 0 });
//       gsap.set(contentRef.current, { opacity: 0 });
//       gsap.set(workWrapRef.current, { opacity: 0 });

//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         end: `+=${window.innerHeight * PIN_VIEWPORTS}px`,
//         pin: true,
//         pinSpacing: true,
//         scrub: 1,
//         onUpdate: (self) => {
//           const p = self.progress;

//           // blocks filling in (bottom-right → top-left)
//           if (p <= FILL_IN_END) {
//             const local = p / FILL_IN_END;
//             blocks.forEach((block) => {
//               const at = revealAt.get(block) ?? 0;
//               const shown = local >= at;
//               gsap.set(block, { scale: shown ? 1 : 0, opacity: shown ? 1 : 0 });
//             });
//           } else if (p < FILL_OUT_START) {
//             gsap.set(blocks, { scale: 1, opacity: 1 });
//           } else {
//             // closing — SAME direction (bottom-right first to
//             // disappear), not mirrored
//             const local = clamp01((p - FILL_OUT_START) / (1 - FILL_OUT_START));
//             blocks.forEach((block) => {
//               const at = revealAt.get(block) ?? 0;
//               const shown = local < at;
//               gsap.set(block, { scale: shown ? 1 : 0, opacity: shown ? 1 : 0 });
//             });
//           }

//           // stats + services
//           gsap.set(contentRef.current, {
//             opacity: fadeInHoldOut(p, 0.12, 0.17, 0.25, 0.3),
//           });

//           // selected work — fades in, pans horizontally through its
//           // scattered cards, fades out as the closing blocks return
//           gsap.set(workWrapRef.current, {
//             opacity: fadeInHoldOut(p, 0.28, 0.32, 0.86, 0.88),
//           });
//           const workLocal = clamp01((p - WORK_START) / (WORK_END - WORK_START));
//           gsap.set(workTrackRef.current, {
//             x: `${-workLocal * (CANVAS_WIDTH_VW - 100)}vw`,
//           });
//         },
//       });
//     }, section);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="work"
//       className="relative overflow-hidden rounded-t-[2rem] bg-neutral-950 shadow-[0_-40px_80px_rgba(0,0,0,0.55)] sm:rounded-t-[3rem]"
//       style={{ height: "100svh" }}
//     >
//       {/* the block-wipe transition layer */}
//       <div
//         className="absolute inset-0 grid"
//         style={{
//           gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
//           gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
//         }}
//       >
//         {BLOCK_COLORS.map((color, i) => (
//           <div key={i} className="fill-block" style={{ backgroundColor: color }} />
//         ))}
//       </div>

//       {/* stats + services — a bento-style mosaic of notched panels */}
//       <div
//         ref={contentRef}
//         className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 px-6"
//       >
//         <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/70">
//           WHAT WE DO
//         </span>

//         <div className="grid w-full max-w-3xl grid-cols-4 gap-3 sm:gap-4">
//           {STATS.map((stat, i) => (
//             <div
//               key={stat.label}
//               className={`${NOTCH} col-span-2 flex flex-col justify-between bg-orange-500 p-5 text-neutral-950 sm:p-6 ${
//                 i === 0 ? "" : ""
//               }`}
//             >
//               <span className="text-4xl font-bold sm:text-5xl">{stat.value}</span>
//               <span className="mt-2 text-xs font-semibold uppercase tracking-wide sm:text-sm">
//                 {stat.label}
//               </span>
//             </div>
//           ))}

//           {SERVICES.map((service, i) => (
//             <div
//               key={service}
//               className={`${NOTCH} col-span-2 flex items-center justify-center p-5 text-center text-sm font-semibold sm:col-span-1 sm:p-6 sm:text-base ${
//                 i === 2
//                   ? "bg-neutral-50 text-neutral-950"
//                   : "bg-orange-500/90 text-neutral-950"
//               }`}
//             >
//               {service}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* selected work — a wide, scattered canvas of project cards
//           connected by a dashed path, panned horizontally on scroll */}
//       <div
//         ref={workWrapRef}
//         className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 overflow-hidden"
//       >
//         <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
//           SELECTED WORK
//         </span>

//         <div className="relative h-[62vh] w-full overflow-hidden">
//           <div
//             ref={workTrackRef}
//             className="absolute inset-y-0 left-0 h-full"
//             style={{ width: `${CANVAS_WIDTH_VW}vw` }}
//           >
//             <svg
//               className="absolute inset-0 h-full w-full"
//               viewBox={`0 0 ${CANVAS_WIDTH_VW} 100`}
//               preserveAspectRatio="none"
//             >
//               <path
//                 d={PATH_D}
//                 fill="none"
//                 stroke="rgba(255,255,255,0.25)"
//                 strokeWidth="0.25"
//                 strokeDasharray="1.2 1.4"
//                 vectorEffect="non-scaling-stroke"
//               />
//             </svg>

//             {WORK.map((item, i) => (
//               <div
//                 key={item.title}
//                 className="absolute -translate-y-1/2"
//                 style={{
//                   left: `${CARD_POSITIONS[i].left}vw`,
//                   top: `${CARD_POSITIONS[i].top}%`,
//                   width: `${CARD_WIDTH_VW}vw`,
//                 }}
//               >
//                 <div
//                   aria-hidden="true"
//                   className="absolute -left-4 top-1/2 z-10 h-3 w-3 -translate-y-1/2 rotate-45 border border-white/50"
//                 />
//                 <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-800 shadow-xl">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     sizes="30vw"
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="mt-2 flex items-center justify-between gap-3">
//                   <p className="text-sm font-medium text-white sm:text-base">
//                     {item.title}
//                   </p>
//                   <span className="shrink-0 text-xs text-white/50">{item.tag}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GRID_COLS = 10;
const GRID_ROWS = 7;
const TOTAL_BLOCKS = GRID_COLS * GRID_ROWS;

// deterministic (not Math.random()) so server/client markup always
// matches — three shades for texture instead of a flat two-tone grid
const BLOCK_COLORS = Array.from({ length: TOTAL_BLOCKS }, (_, i) => {
  if (i % 13 === 0) return "#111111";
  if (i % 5 === 0) return "#FB923C";
  return "#F97316";
});

// demo content — replace freely
const STATS = [
  { value: "30+", label: "Product Shipped" },
  { value: "5+", label: "Years Of Exp" },
  { value: "20+", label: "Global Companies" },
  { value: "6", label: "Core Services" },
];

const SERVICES = [
  "Digital Marketing",
  "Video Editing",
  "Web Development",
  "SaaS Products",
  "Brand Endorsement",
  "Advertisement",
];

interface WorkItem {
  title: string;
  tag: string;
  image: string;
}

const WORK: WorkItem[] = [
  { title: "Project One", tag: "Web Design", image: "/work/project-1.jpg" },
  { title: "Project Two", tag: "SaaS Platform", image: "/work/project-2.jpg" },
  { title: "Project Three", tag: "Brand Campaign", image: "/work/project-3.jpg" },
  { title: "Project Four", tag: "Video Production", image: "/work/project-4.jpg" },
  { title: "Project Five", tag: "App Design", image: "/work/project-5.jpg" },
  { title: "Project Six", tag: "E-commerce", image: "/work/project-6.jpg" },
  { title: "Project Seven", tag: "Social Campaign", image: "/work/project-7.jpg" },
  { title: "Project Eight", tag: "Product Launch", image: "/work/project-8.jpg" },
];

const SLOT_VW = 50;
const CARD_WIDTH_VW = 28;
const CANVAS_WIDTH_VW = WORK.length * SLOT_VW + 20;
const CARD_POSITIONS = WORK.map((_, i) => ({
  left: i * SLOT_VW + 10,
  top: i % 2 === 0 ? 26 : 64,
}));
const PATH_D = CARD_POSITIONS.map(
  (c, i) => `${i === 0 ? "M" : "L"}${c.left + CARD_WIDTH_VW / 2},${c.top}`
).join(" ");

const PIN_VIEWPORTS = 8;

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function fadeInHoldOut(p: number, inStart: number, inEnd: number, outStart: number, outEnd: number) {
  if (p < inStart || p > outEnd) return 0;
  if (p < inEnd) return clamp01((p - inStart) / (inEnd - inStart));
  if (p < outStart) return 1;
  return 1 - clamp01((p - outStart) / (outEnd - outStart));
}

/** fade + a right-to-left slide, instead of a flat crossfade — slides
 *  in from the right on the way in, out to the left on the way out. */
function slideFade(
  p: number,
  inStart: number,
  inEnd: number,
  outStart: number,
  outEnd: number,
  distance = 14
) {
  const opacity = fadeInHoldOut(p, inStart, inEnd, outStart, outEnd);
  let xPercent = 0;
  if (p < inEnd) {
    const t = clamp01((p - inStart) / (inEnd - inStart));
    xPercent = (1 - t) * distance;
  } else if (p > outStart) {
    const t = clamp01((p - outStart) / (outEnd - outStart));
    xPercent = -t * distance;
  }
  return { opacity, xPercent };
}

const FILL_IN_END = 0.1;
const FILL_OUT_START = 0.9;
const WORK_START = 0.3;
const WORK_END = 0.86;

const NOTCH = "[clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)]";

export function WorkShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const workWrapRef = useRef<HTMLDivElement>(null);
  const workTrackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLElement>(".fill-block");

      // directional sweep — bottom-right first, toward the top-left,
      // with a little per-block jitter so it isn't a perfectly
      // mechanical diagonal
      const revealAt = new Map<HTMLElement, number>();
      blocks.forEach((block, i) => {
        const col = i % GRID_COLS;
        const row = Math.floor(i / GRID_COLS);
        const wave = (GRID_COLS - 1 - col + row) / (GRID_COLS - 1 + GRID_ROWS - 1);
        const jitter = (Math.random() - 0.5) * 0.1;
        revealAt.set(block, clamp01(wave + jitter));
      });

      gsap.set(blocks, { scale: 0, opacity: 0 });
      gsap.set(contentRef.current, { opacity: 0 });
      gsap.set(workWrapRef.current, { opacity: 0 });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${window.innerHeight * PIN_VIEWPORTS}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;

          if (p <= FILL_IN_END) {
            const local = p / FILL_IN_END;
            blocks.forEach((block) => {
              const at = revealAt.get(block) ?? 0;
              const shown = local >= at;
              gsap.set(block, { scale: shown ? 1 : 0, opacity: shown ? 1 : 0 });
            });
          } else if (p < FILL_OUT_START) {
            gsap.set(blocks, { scale: 1, opacity: 1 });
          } else {
            const local = clamp01((p - FILL_OUT_START) / (1 - FILL_OUT_START));
            blocks.forEach((block) => {
              const at = revealAt.get(block) ?? 0;
              const shown = local < at;
              gsap.set(block, { scale: shown ? 1 : 0, opacity: shown ? 1 : 0 });
            });
          }

          const contentState = slideFade(p, 0.1, 0.16, 0.24, 0.3, 14);
          gsap.set(contentRef.current, contentState);

          const workState = slideFade(p, 0.28, 0.33, FILL_OUT_START - 0.02, FILL_OUT_START, 14);
          gsap.set(workWrapRef.current, { opacity: workState.opacity, xPercent: workState.xPercent });

          const workLocal = clamp01((p - WORK_START) / (WORK_END - WORK_START));
          gsap.set(workTrackRef.current, { x: `${-workLocal * (CANVAS_WIDTH_VW - 100)}vw` });
        },
      });
    }, section);

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative overflow-hidden rounded-t-[2rem] bg-neutral-950 sm:rounded-t-[3rem]"
      style={{ height: "100svh" }}
    >
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
        }}
      >
        {BLOCK_COLORS.map((color, i) => (
          <div key={i} className="fill-block" style={{ backgroundColor: color }} />
        ))}
      </div>

      {/* stats + services — two separate, clearly-structured groups
          instead of one mixed grid */}
      <div
        ref={contentRef}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 px-6"
      >
        <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/70">
          WHAT WE DO
        </span>

        <div className="grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className={`${NOTCH} flex flex-col justify-between bg-orange-500 p-5 text-neutral-950 sm:p-6`}
            >
              <span className="text-3xl font-bold sm:text-4xl">{stat.value}</span>
              <span className="mt-2 text-xs font-semibold uppercase tracking-wide sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {SERVICES.map((service, i) => (
            <div
              key={service}
              className={`${NOTCH} flex min-h-[72px] items-center justify-center p-4 text-center text-sm font-semibold sm:p-5 sm:text-base ${
                i === 2 ? "bg-orange-500 text-neutral-950" : "bg-white/10 text-white"
              }`}
            >
              {service}
            </div>
          ))}
        </div>
      </div>

      {/* selected work — a wide, scattered canvas connected by a
          dashed path, panned horizontally on scroll */}
      <div
        ref={workWrapRef}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 overflow-hidden"
      >
        <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
          SELECTED WORK
        </span>

        <div className="relative h-[60vh] w-full overflow-hidden">
          <div
            ref={workTrackRef}
            className="absolute inset-y-0 left-0 h-full"
            style={{ width: `${CANVAS_WIDTH_VW}vw` }}
          >
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox={`0 0 ${CANVAS_WIDTH_VW} 100`}
              preserveAspectRatio="none"
            >
              <path
                d={PATH_D}
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="0.25"
                strokeDasharray="1.2 1.4"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {WORK.map((item, i) => (
              <div
                key={item.title}
                className="absolute -translate-y-1/2"
                style={{
                  left: `${CARD_POSITIONS[i].left}vw`,
                  top: `${CARD_POSITIONS[i].top}%`,
                  width: `${CARD_WIDTH_VW}vw`,
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute -left-4 top-1/2 z-10 h-3 w-3 -translate-y-1/2 rotate-45 border border-white/50"
                />
                <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-800 shadow-xl">
                  <Image src={item.image} alt={item.title} fill sizes="28vw" className="object-cover" />
                </div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white sm:text-base">{item.title}</p>
                  <span className="shrink-0 text-xs text-white/50">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}