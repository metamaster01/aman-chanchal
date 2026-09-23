// // "use client";

// // import { useLayoutEffect, useRef } from "react";
// // import Image from "next/image";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // const GRID_COLS = 8;
// // const GRID_ROWS = 6;
// // const TOTAL_BLOCKS = GRID_COLS * GRID_ROWS;

// // const BLOCK_COLORS = Array.from({ length: TOTAL_BLOCKS }, (_, i) =>
// //   i % 9 === 0 ? "#161616" : "#F97316"
// // );

// // // demo content — replace freely
// // const STATS = [
// //   { value: "30+", label: "Product Shipped" },
// //   { value: "5+", label: "Years Of Exp" },
// // ];

// // const SERVICES = [
// //   "Digital Marketing",
// //   "Video Editing",
// //   "Web Development",
// //   "SaaS Products",
// //   "Brand Endorsement",
// //   "Advertisement",
// // ];

// // interface WorkItem {
// //   title: string;
// //   tag: string;
// //   image: string;
// // }

// // const WORK: WorkItem[] = [
// //   { title: "Project One", tag: "Web Design", image: "/work/project-1.jpg" },
// //   { title: "Project Two", tag: "SaaS Platform", image: "/work/project-2.jpg" },
// //   { title: "Project Three", tag: "Brand Campaign", image: "/work/project-3.jpg" },
// //   { title: "Project Four", tag: "Video Production", image: "/work/project-4.jpg" },
// //   { title: "Project Five", tag: "App Design", image: "/work/project-5.jpg" },
// // ];

// // // the "selected work" canvas is much wider than the viewport — each
// // // project gets its own SLOT_VW-wide slot, and the whole thing pans
// // // horizontally as the user scrolls through this phase
// // const SLOT_VW = 55;
// // const CARD_WIDTH_VW = 30;
// // const CANVAS_WIDTH_VW = WORK.length * SLOT_VW + 20;
// // const CARD_POSITIONS = WORK.map((_, i) => ({
// //   left: i * SLOT_VW + 10,
// //   top: i % 2 === 0 ? 28 : 62, // alternating high/low, in % — gives the zigzag path
// // }));
// // const PATH_D = CARD_POSITIONS.map(
// //   (c, i) => `${i === 0 ? "M" : "L"}${c.left + CARD_WIDTH_VW / 2},${c.top}`
// // ).join(" ");

// // const PIN_VIEWPORTS = 7;

// // function clamp01(n: number) {
// //   return Math.min(1, Math.max(0, n));
// // }

// // function fadeInHoldOut(
// //   p: number,
// //   inStart: number,
// //   inEnd: number,
// //   outStart: number,
// //   outEnd: number
// // ) {
// //   if (p < inStart || p > outEnd) return 0;
// //   if (p < inEnd) return clamp01((p - inStart) / (inEnd - inStart));
// //   if (p < outStart) return 1;
// //   return 1 - clamp01((p - outStart) / (outEnd - outStart));
// // }

// // const FILL_IN_END = 0.12;
// // const FILL_OUT_START = 0.88;
// // const WORK_START = 0.3;
// // const WORK_END = 0.85;

// // // shared notch — a diagonally-cut top-right corner, echoing the
// // // interlocking-panel look of the reference without full jigsaw geometry
// // const NOTCH =
// //   "[clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)]";

// // export function WorkShowcase() {
// //   const sectionRef = useRef<HTMLElement>(null);
// //   const contentRef = useRef<HTMLDivElement>(null);
// //   const workWrapRef = useRef<HTMLDivElement>(null);
// //   const workTrackRef = useRef<HTMLDivElement>(null);

// //   useLayoutEffect(() => {
// //     const section = sectionRef.current;
// //     if (!section) return;

// //     const ctx = gsap.context(() => {
// //       const blocks = gsap.utils.toArray<HTMLElement>(".fill-block");

// //       // directional sweep — bottom-right corner first, sweeping toward
// //       // the top-left — with a little per-block jitter so it doesn't
// //       // read as a perfectly mechanical diagonal
// //       const revealAt = new Map<HTMLElement, number>();
// //       blocks.forEach((block, i) => {
// //         const col = i % GRID_COLS;
// //         const row = Math.floor(i / GRID_COLS);
// //         const wave =
// //           (GRID_COLS - 1 - col + row) / (GRID_COLS - 1 + GRID_ROWS - 1);
// //         const jitter = (Math.random() - 0.5) * 0.12;
// //         revealAt.set(block, clamp01(wave + jitter));
// //       });

// //       gsap.set(blocks, { scale: 0, opacity: 0 });
// //       gsap.set(contentRef.current, { opacity: 0 });
// //       gsap.set(workWrapRef.current, { opacity: 0 });

// //       ScrollTrigger.create({
// //         trigger: section,
// //         start: "top top",
// //         end: `+=${window.innerHeight * PIN_VIEWPORTS}px`,
// //         pin: true,
// //         pinSpacing: true,
// //         scrub: 1,
// //         onUpdate: (self) => {
// //           const p = self.progress;

// //           // blocks filling in (bottom-right → top-left)
// //           if (p <= FILL_IN_END) {
// //             const local = p / FILL_IN_END;
// //             blocks.forEach((block) => {
// //               const at = revealAt.get(block) ?? 0;
// //               const shown = local >= at;
// //               gsap.set(block, { scale: shown ? 1 : 0, opacity: shown ? 1 : 0 });
// //             });
// //           } else if (p < FILL_OUT_START) {
// //             gsap.set(blocks, { scale: 1, opacity: 1 });
// //           } else {
// //             // closing — SAME direction (bottom-right first to
// //             // disappear), not mirrored
// //             const local = clamp01((p - FILL_OUT_START) / (1 - FILL_OUT_START));
// //             blocks.forEach((block) => {
// //               const at = revealAt.get(block) ?? 0;
// //               const shown = local < at;
// //               gsap.set(block, { scale: shown ? 1 : 0, opacity: shown ? 1 : 0 });
// //             });
// //           }

// //           // stats + services
// //           gsap.set(contentRef.current, {
// //             opacity: fadeInHoldOut(p, 0.12, 0.17, 0.25, 0.3),
// //           });

// //           // selected work — fades in, pans horizontally through its
// //           // scattered cards, fades out as the closing blocks return
// //           gsap.set(workWrapRef.current, {
// //             opacity: fadeInHoldOut(p, 0.28, 0.32, 0.86, 0.88),
// //           });
// //           const workLocal = clamp01((p - WORK_START) / (WORK_END - WORK_START));
// //           gsap.set(workTrackRef.current, {
// //             x: `${-workLocal * (CANVAS_WIDTH_VW - 100)}vw`,
// //           });
// //         },
// //       });
// //     }, section);

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <section
// //       ref={sectionRef}
// //       id="work"
// //       className="relative overflow-hidden rounded-t-[2rem] bg-neutral-950 shadow-[0_-40px_80px_rgba(0,0,0,0.55)] sm:rounded-t-[3rem]"
// //       style={{ height: "100svh" }}
// //     >
// //       {/* the block-wipe transition layer */}
// //       <div
// //         className="absolute inset-0 grid"
// //         style={{
// //           gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
// //           gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
// //         }}
// //       >
// //         {BLOCK_COLORS.map((color, i) => (
// //           <div key={i} className="fill-block" style={{ backgroundColor: color }} />
// //         ))}
// //       </div>

// //       {/* stats + services — a bento-style mosaic of notched panels */}
// //       <div
// //         ref={contentRef}
// //         className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 px-6"
// //       >
// //         <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/70">
// //           WHAT WE DO
// //         </span>

// //         <div className="grid w-full max-w-3xl grid-cols-4 gap-3 sm:gap-4">
// //           {STATS.map((stat, i) => (
// //             <div
// //               key={stat.label}
// //               className={`${NOTCH} col-span-2 flex flex-col justify-between bg-orange-500 p-5 text-neutral-950 sm:p-6 ${
// //                 i === 0 ? "" : ""
// //               }`}
// //             >
// //               <span className="text-4xl font-bold sm:text-5xl">{stat.value}</span>
// //               <span className="mt-2 text-xs font-semibold uppercase tracking-wide sm:text-sm">
// //                 {stat.label}
// //               </span>
// //             </div>
// //           ))}

// //           {SERVICES.map((service, i) => (
// //             <div
// //               key={service}
// //               className={`${NOTCH} col-span-2 flex items-center justify-center p-5 text-center text-sm font-semibold sm:col-span-1 sm:p-6 sm:text-base ${
// //                 i === 2
// //                   ? "bg-neutral-50 text-neutral-950"
// //                   : "bg-orange-500/90 text-neutral-950"
// //               }`}
// //             >
// //               {service}
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* selected work — a wide, scattered canvas of project cards
// //           connected by a dashed path, panned horizontally on scroll */}
// //       <div
// //         ref={workWrapRef}
// //         className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 overflow-hidden"
// //       >
// //         <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
// //           SELECTED WORK
// //         </span>

// //         <div className="relative h-[62vh] w-full overflow-hidden">
// //           <div
// //             ref={workTrackRef}
// //             className="absolute inset-y-0 left-0 h-full"
// //             style={{ width: `${CANVAS_WIDTH_VW}vw` }}
// //           >
// //             <svg
// //               className="absolute inset-0 h-full w-full"
// //               viewBox={`0 0 ${CANVAS_WIDTH_VW} 100`}
// //               preserveAspectRatio="none"
// //             >
// //               <path
// //                 d={PATH_D}
// //                 fill="none"
// //                 stroke="rgba(255,255,255,0.25)"
// //                 strokeWidth="0.25"
// //                 strokeDasharray="1.2 1.4"
// //                 vectorEffect="non-scaling-stroke"
// //               />
// //             </svg>

// //             {WORK.map((item, i) => (
// //               <div
// //                 key={item.title}
// //                 className="absolute -translate-y-1/2"
// //                 style={{
// //                   left: `${CARD_POSITIONS[i].left}vw`,
// //                   top: `${CARD_POSITIONS[i].top}%`,
// //                   width: `${CARD_WIDTH_VW}vw`,
// //                 }}
// //               >
// //                 <div
// //                   aria-hidden="true"
// //                   className="absolute -left-4 top-1/2 z-10 h-3 w-3 -translate-y-1/2 rotate-45 border border-white/50"
// //                 />
// //                 <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-800 shadow-xl">
// //                   <Image
// //                     src={item.image}
// //                     alt={item.title}
// //                     fill
// //                     sizes="30vw"
// //                     className="object-cover"
// //                   />
// //                 </div>
// //                 <div className="mt-2 flex items-center justify-between gap-3">
// //                   <p className="text-sm font-medium text-white sm:text-base">
// //                     {item.title}
// //                   </p>
// //                   <span className="shrink-0 text-xs text-white/50">{item.tag}</span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// "use client";

// import { useLayoutEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const GRID_COLS = 10;
// const GRID_ROWS = 7;
// const TOTAL_BLOCKS = GRID_COLS * GRID_ROWS;

// // deterministic (not Math.random()) so server/client markup always
// // matches — three shades for texture instead of a flat two-tone grid
// const BLOCK_COLORS = Array.from({ length: TOTAL_BLOCKS }, (_, i) => {
//   if (i % 13 === 0) return "#111111";
//   if (i % 5 === 0) return "#FB923C";
//   return "#F97316";
// });

// // demo content — replace freely
// const STATS = [
//   { value: "30+", label: "Product Shipped" },
//   { value: "5+", label: "Years Of Exp" },
//   { value: "20+", label: "Global Companies" },
//   { value: "6", label: "Core Services" },
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
//   { title: "Project Six", tag: "E-commerce", image: "/work/project-6.jpg" },
//   { title: "Project Seven", tag: "Social Campaign", image: "/work/project-7.jpg" },
//   { title: "Project Eight", tag: "Product Launch", image: "/work/project-8.jpg" },
// ];

// const SLOT_VW = 50;
// const CARD_WIDTH_VW = 28;
// const CANVAS_WIDTH_VW = WORK.length * SLOT_VW + 20;
// const CARD_POSITIONS = WORK.map((_, i) => ({
//   left: i * SLOT_VW + 10,
//   top: i % 2 === 0 ? 26 : 64,
// }));
// const PATH_D = CARD_POSITIONS.map(
//   (c, i) => `${i === 0 ? "M" : "L"}${c.left + CARD_WIDTH_VW / 2},${c.top}`
// ).join(" ");

// const PIN_VIEWPORTS = 8;

// function clamp01(n: number) {
//   return Math.min(1, Math.max(0, n));
// }

// function fadeInHoldOut(p: number, inStart: number, inEnd: number, outStart: number, outEnd: number) {
//   if (p < inStart || p > outEnd) return 0;
//   if (p < inEnd) return clamp01((p - inStart) / (inEnd - inStart));
//   if (p < outStart) return 1;
//   return 1 - clamp01((p - outStart) / (outEnd - outStart));
// }

// /** fade + a right-to-left slide, instead of a flat crossfade — slides
//  *  in from the right on the way in, out to the left on the way out. */
// function slideFade(
//   p: number,
//   inStart: number,
//   inEnd: number,
//   outStart: number,
//   outEnd: number,
//   distance = 14
// ) {
//   const opacity = fadeInHoldOut(p, inStart, inEnd, outStart, outEnd);
//   let xPercent = 0;
//   if (p < inEnd) {
//     const t = clamp01((p - inStart) / (inEnd - inStart));
//     xPercent = (1 - t) * distance;
//   } else if (p > outStart) {
//     const t = clamp01((p - outStart) / (outEnd - outStart));
//     xPercent = -t * distance;
//   }
//   return { opacity, xPercent };
// }

// const FILL_IN_END = 0.1;
// const FILL_OUT_START = 0.9;
// const WORK_START = 0.3;
// const WORK_END = 0.86;

// const NOTCH = "[clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)]";

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

//       // directional sweep — bottom-right first, toward the top-left,
//       // with a little per-block jitter so it isn't a perfectly
//       // mechanical diagonal
//       const revealAt = new Map<HTMLElement, number>();
//       blocks.forEach((block, i) => {
//         const col = i % GRID_COLS;
//         const row = Math.floor(i / GRID_COLS);
//         const wave = (GRID_COLS - 1 - col + row) / (GRID_COLS - 1 + GRID_ROWS - 1);
//         const jitter = (Math.random() - 0.5) * 0.1;
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
//             const local = clamp01((p - FILL_OUT_START) / (1 - FILL_OUT_START));
//             blocks.forEach((block) => {
//               const at = revealAt.get(block) ?? 0;
//               const shown = local < at;
//               gsap.set(block, { scale: shown ? 1 : 0, opacity: shown ? 1 : 0 });
//             });
//           }

//           const contentState = slideFade(p, 0.1, 0.16, 0.24, 0.3, 14);
//           gsap.set(contentRef.current, contentState);

//           const workState = slideFade(p, 0.28, 0.33, FILL_OUT_START - 0.02, FILL_OUT_START, 14);
//           gsap.set(workWrapRef.current, { opacity: workState.opacity, xPercent: workState.xPercent });

//           const workLocal = clamp01((p - WORK_START) / (WORK_END - WORK_START));
//           gsap.set(workTrackRef.current, { x: `${-workLocal * (CANVAS_WIDTH_VW - 100)}vw` });
//         },
//       });
//     }, section);

//     const handleLoad = () => ScrollTrigger.refresh();
//     window.addEventListener("load", handleLoad);

//     return () => {
//       window.removeEventListener("load", handleLoad);
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="work"
//       className="relative overflow-hidden rounded-t-[2rem] bg-neutral-950 sm:rounded-t-[3rem]"
//       style={{ height: "100svh" }}
//     >
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

//       {/* stats + services — two separate, clearly-structured groups
//           instead of one mixed grid */}
//       <div
//         ref={contentRef}
//         className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 px-6"
//       >
//         <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/70">
//           WHAT WE DO
//         </span>

//         <div className="grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
//           {STATS.map((stat) => (
//             <div
//               key={stat.label}
//               className={`${NOTCH} flex flex-col justify-between bg-orange-500 p-5 text-neutral-950 sm:p-6`}
//             >
//               <span className="text-3xl font-bold sm:text-4xl">{stat.value}</span>
//               <span className="mt-2 text-xs font-semibold uppercase tracking-wide sm:text-sm">
//                 {stat.label}
//               </span>
//             </div>
//           ))}
//         </div>

//         <div className="grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
//           {SERVICES.map((service, i) => (
//             <div
//               key={service}
//               className={`${NOTCH} flex min-h-[72px] items-center justify-center p-4 text-center text-sm font-semibold sm:p-5 sm:text-base ${
//                 i === 2 ? "bg-orange-500 text-neutral-950" : "bg-white/10 text-white"
//               }`}
//             >
//               {service}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* selected work — a wide, scattered canvas connected by a
//           dashed path, panned horizontally on scroll */}
//       <div
//         ref={workWrapRef}
//         className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 overflow-hidden"
//       >
//         <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white">
//           SELECTED WORK
//         </span>

//         <div className="relative h-[60vh] w-full overflow-hidden">
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
//                   <Image src={item.image} alt={item.title} fill sizes="28vw" className="object-cover" />
//                 </div>
//                 <div className="mt-2 flex items-center justify-between gap-3">
//                   <p className="text-sm font-medium text-white sm:text-base">{item.title}</p>
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

// "use client";

// import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowUpRight } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// /* ============================================================================
//    What changed this pass:
//    - Reverted the stats/skills grid to seven evenly-sized 2×1 chips staggered
//      one column per row (row1 at cols 1-2/3-4/5-6, row2 shifted one column
//      right, row3 shifted again) — a diagonal cascade, matching the reference
//      — instead of the oversized 3×2 "hero" block, which read as a structural
//      mistake rather than a composition.
//    - The whole section is one light, warm background now — no more switch
//      to a dark canvas once Selected Work appears. Chips are plain white,
//      the field around them is warm orange/amber, and Selected Work sits on
//      that same warm page instead of black.
//    - "Selected Work" is now a medium-sized heading, not a big display one.
//    - Hover motion is calmer: cards lift, the image scales a little, and the
//      title row rises — no more per-card tilt/rotation, which was adding
//      visual noise rather than polish.
//    ========================================================================= */

// /* ============================================================================
//    CONTENT — edit freely. Everything below reflows automatically.
//    ========================================================================= */

// interface Stat {
//   value: string;
//   label: string;
// }
// const STATS: Stat[] = [
//   { value: "30+", label: "Product Shipped" },
//   { value: "10+", label: "Years Of Exp" },
//   { value: "7+", label: "Global Companies" },
// ];

// interface Skill {
//   label: string;
// }
// const SKILLS: Skill[] = [{ label: "Figma" }, { label: "Claude" }, { label: "Photoshop" }, { label: "Illustrator" }];

// interface WorkItem {
//   title: string;
//   tag: string;
//   image: string;
//   href?: string;
//   size: "sm" | "md" | "lg";
//   anchor: "top" | "mid" | "bottom";
// }

// const WORK: WorkItem[] = [
//   { title: "Opswat", tag: "Case Study", image: "/work/project-1.jpg", size: "lg", anchor: "top", href: "#" },
//   { title: "PCOS Cysterhood", tag: "App Design", image: "/work/project-2.jpg", size: "sm", anchor: "mid", href: "#" },
//   { title: "Skymavis", tag: "Case Study", image: "/work/project-3.jpg", size: "md", anchor: "bottom", href: "#" },
//   { title: "Firekamp", tag: "Web Design", image: "/work/project-4.jpg", size: "sm", anchor: "top", href: "#" },
//   { title: "iTrackBites", tag: "App Design", image: "/work/project-5.jpg", size: "md", anchor: "mid", href: "#" },
//   { title: "Tekcom", tag: "Web Design", image: "/work/project-6.jpg", size: "lg", anchor: "bottom", href: "#" },
//   { title: "Vinh Tuong", tag: "Web Design", image: "/work/project-7.jpg", size: "md", anchor: "top", href: "#" },
//   { title: "Sortly", tag: "App Design", image: "/work/project-8.jpg", size: "sm", anchor: "mid", href: "#" },
// ];

// /* ============================================================================
//    TUNING
//    ========================================================================= */

// const PIN_VIEWPORTS = 3 + Math.ceil(WORK.length / 2.5);

// const T = {
//   gridInEnd: 0.11,
//   statsOutStart: 0.34,
//   statsOutEnd: 0.42,
//   workPanStart: 0.44,
//   workPanEnd: 0.94,
// };

// const SLOT_WIDTH: Record<WorkItem["size"], number> = { sm: 19, md: 26, lg: 33 };
// const SLOT_ASPECT: Record<WorkItem["size"], string> = {
//   sm: "aspect-[3/4]",
//   md: "aspect-[4/3]",
//   lg: "aspect-[16/11]",
// };
// const LANE_TOP: Record<WorkItem["anchor"], number> = { top: 10, mid: 34, bottom: 56 };
// const CARD_HEIGHT_PCT: Record<WorkItem["size"], number> = { sm: 34, md: 26, lg: 30 };
// const GAP_VW = 4;
// const PAD_VW = 6;

// /* ============================================================================
//    DERIVED LAYOUT (computed once at module scope — deterministic, SSR-safe)
//    ========================================================================= */

// const SLOTS = (() => {
//   let cursor = PAD_VW;
//   return WORK.map((item) => {
//     const width = SLOT_WIDTH[item.size];
//     const left = cursor;
//     cursor += width + GAP_VW;
//     return { left, width, top: LANE_TOP[item.anchor], height: CARD_HEIGHT_PCT[item.size] };
//   });
// })();
// const TRACK_WIDTH_VW = SLOTS[SLOTS.length - 1].left + SLOTS[SLOTS.length - 1].width + PAD_VW;

// const CONNECTOR_D = SLOTS.slice(1)
//   .map((slot, i) => {
//     const prev = SLOTS[i];
//     const x1 = prev.left + prev.width;
//     const y1 = prev.top + prev.height / 2;
//     const x2 = slot.left;
//     const y2 = slot.top + slot.height / 2;
//     const midX = (x1 + x2) / 2;
//     return `M${x1},${y1} L${midX},${y1} L${midX},${y2} L${x2},${y2}`;
//   })
//   .join(" ");

// /* ============================================================================
//    STATS + SKILLS GRID — seven even-sized chips, staggered one column per
//    row (a diagonal cascade), on a 6×4 grid. Matches the reference's rhythm
//    instead of forcing one oversized block.
//    ========================================================================= */

// const GRID_COLS = 6;
// const GRID_ROWS = 4;

// type Cell =
//   | { kind: "stat"; col: number; span: number; row: number; stat: Stat }
//   | { kind: "skill"; col: number; span: number; row: number; skill: Skill }
//   | { kind: "filler"; col: number; span: number; row: number; fillerIndex: number };

// const CONTENT_CELLS: Cell[] = [
//   { kind: "stat", col: 1, span: 2, row: 1, stat: STATS[0] },
//   { kind: "skill", col: 3, span: 2, row: 1, skill: SKILLS[0] },
//   { kind: "skill", col: 5, span: 2, row: 1, skill: SKILLS[1] },
//   { kind: "stat", col: 2, span: 2, row: 2, stat: STATS[1] },
//   { kind: "skill", col: 4, span: 2, row: 2, skill: SKILLS[2] },
//   { kind: "stat", col: 3, span: 2, row: 3, stat: STATS[2] },
//   { kind: "skill", col: 5, span: 2, row: 3, skill: SKILLS[3] },
// ];

// const GRID_CELLS: Cell[] = (() => {
//   const occupied = new Set<string>();
//   CONTENT_CELLS.forEach((c) => {
//     for (let i = 0; i < c.span; i++) occupied.add(`${c.col + i}-${c.row}`);
//   });
//   const filler: Cell[] = [];
//   let fillerIndex = 0;
//   for (let row = 1; row <= GRID_ROWS; row++) {
//     for (let col = 1; col <= GRID_COLS; col++) {
//       if (!occupied.has(`${col}-${row}`)) {
//         filler.push({ kind: "filler", col, span: 1, row, fillerIndex: fillerIndex++ });
//       }
//     }
//   }
//   return [...CONTENT_CELLS, ...filler];
// })();

// /** Bottom-right-first reveal order: 0 = reveals earliest, 1 = reveals last. */
// function waveOf(cell: Cell) {
//   const centerCol = cell.col - 1 + cell.span / 2;
//   const centerRow = cell.row - 1 + 0.5;
//   const fromRight = GRID_COLS - centerCol;
//   const fromBottom = GRID_ROWS - centerRow;
//   return clamp01((fromRight + fromBottom) / (GRID_COLS + GRID_ROWS));
// }

// function clamp01(n: number) {
//   return Math.min(1, Math.max(0, n));
// }

// /** Small deterministic jitter so the reveal wave isn't perfectly mechanical. */
// function jitterFor(seed: number) {
//   const x = Math.sin(seed * 999.7) * 43758.5453;
//   return (x - Math.floor(x) - 0.5) * 0.16;
// }

// const FILLER_BG = ["bg-orange-400", "bg-orange-500", "bg-orange-600", "bg-amber-400", "bg-amber-500"];
// const FILLER_GLYPH_EVERY = 4;

// function DotSwatch({ tone = "dark", dense = false }: { tone?: "dark" | "light"; dense?: boolean }) {
//   const dot = tone === "dark" ? "rgba(23,15,5,0.4)" : "rgba(255,255,255,0.55)";
//   const size = dense ? 6 : 9;
//   const style: CSSProperties = {
//     backgroundImage: `radial-gradient(circle, ${dot} 1.1px, transparent 1.6px)`,
//     backgroundSize: `${size}px ${size}px`,
//   };
//   return <div aria-hidden className="h-8 w-8 shrink-0 rounded-md" style={style} />;
// }

// export function WorkShowcase() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const gridLayerRef = useRef<HTMLDivElement>(null);
//   const workLayerRef = useRef<HTMLDivElement>(null);
//   const trackRef = useRef<HTMLDivElement>(null);
//   const [reduced, setReduced] = useState(false);

//   useEffect(() => {
//     const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
//     setReduced(mq.matches);
//     const onChange = () => setReduced(mq.matches);
//     mq.addEventListener("change", onChange);
//     return () => mq.removeEventListener("change", onChange);
//   }, []);

//   useLayoutEffect(() => {
//     if (reduced) return;

//     const section = sectionRef.current;
//     const gridLayer = gridLayerRef.current;
//     const workLayer = workLayerRef.current;
//     const track = trackRef.current;
//     if (!section || !gridLayer || !workLayer || !track) return;

//     const ctx = gsap.context(() => {
//       const cells = gsap.utils.toArray<HTMLElement>(".gs-cell");
//       const revealAt = new Map<HTMLElement, number>();
//       cells.forEach((el, i) => {
//         const cell = GRID_CELLS[i];
//         revealAt.set(el, clamp01(waveOf(cell) + jitterFor(i + 1)));
//       });

//       gsap.set(cells, { scale: 0.4, opacity: 0, y: 12 });
//       gsap.set(workLayer, { opacity: 0 });

//       const setGrid = (visibleFrac: number) => {
//         cells.forEach((el) => {
//           const at = revealAt.get(el) ?? 0;
//           const on = visibleFrac >= at;
//           gsap.set(el, { scale: on ? 1 : 0.4, opacity: on ? 1 : 0, y: on ? 0 : 12 });
//         });
//       };

//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         end: () => `+=${window.innerHeight * PIN_VIEWPORTS}`,
//         pin: true,
//         pinSpacing: true,
//         scrub: 1,
//         invalidateOnRefresh: true,
//         onUpdate: (self) => {
//           const p = self.progress;

//           if (p <= T.gridInEnd) {
//             setGrid(p / T.gridInEnd);
//           } else if (p < T.statsOutStart) {
//             setGrid(1);
//           } else if (p < T.statsOutEnd) {
//             const local = 1 - (p - T.statsOutStart) / (T.statsOutEnd - T.statsOutStart);
//             setGrid(local);
//           } else {
//             setGrid(0);
//           }

//           const workOpacity = clamp01((p - (T.statsOutStart + 0.03)) / (T.statsOutEnd - T.statsOutStart));
//           gsap.set(workLayer, { opacity: workOpacity, pointerEvents: workOpacity > 0.5 ? "auto" : "none" });

//           const panLocal = clamp01((p - T.workPanStart) / (T.workPanEnd - T.workPanStart));
//           const maxShift = Math.max(0, TRACK_WIDTH_VW - 100);
//           gsap.set(track, { x: `${-panLocal * maxShift}vw` });
//         },
//       });
//     }, section);

//     const onLoad = () => ScrollTrigger.refresh();
//     window.addEventListener("load", onLoad);
//     return () => {
//       window.removeEventListener("load", onLoad);
//       ctx.revert();
//     };
//   }, [reduced]);

//   return (
//     <section
//       ref={sectionRef}
//       id="work"
//       className="relative overflow-hidden bg-orange-100"
//       style={{ height: reduced ? "auto" : "100svh" }}
//     >
//       {reduced ? (
//         <ReducedShowcase />
//       ) : (
//         <>
//           {/* ---------- Layer A: the jigsaw grid (stats + skills) ---------- */}
//           <div ref={gridLayerRef} className="absolute inset-0 z-20">
//             <div
//               className="grid h-full w-full gap-1.5 p-1.5"
//               style={{
//                 gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
//                 gridTemplateRows: `repeat(${GRID_ROWS}, minmax(0, 1fr))`,
//               }}
//             >
//               {GRID_CELLS.map((cell, i) => (
//                 <GridCell key={i} cell={cell} />
//               ))}
//             </div>
//           </div>

//           {/* ---------- Layer B: Selected Work — panning bento canvas ---------- */}
//           <div ref={workLayerRef} className="absolute inset-0 z-10 flex flex-col">
//             <div className="flex items-end justify-between px-6 pt-8 sm:px-10 sm:pt-10">
//               <h2 className="flex items-center gap-2.5 text-xl font-semibold text-neutral-950 sm:text-2xl">
//                 <span aria-hidden className="h-2 w-2 shrink-0 rounded-sm bg-orange-500" />
//                 Selected Work
//               </h2>
//               <span className="hidden text-sm text-neutral-950/45 sm:block">Scroll to browse →</span>
//             </div>

//             <div className="relative mt-6 flex-1 overflow-hidden sm:mt-10">
//               <div ref={trackRef} className="absolute inset-y-0 left-0" style={{ width: `${TRACK_WIDTH_VW}vw` }}>
//                 <svg
//                   className="absolute inset-0 h-full w-full"
//                   viewBox={`0 0 ${TRACK_WIDTH_VW} 100`}
//                   preserveAspectRatio="none"
//                   aria-hidden
//                 >
//                   <path
//                     d={CONNECTOR_D}
//                     fill="none"
//                     stroke="rgba(20,15,10,0.2)"
//                     strokeWidth="0.15"
//                     strokeDasharray="0.8 1"
//                     vectorEffect="non-scaling-stroke"
//                   />
//                 </svg>

//                 {WORK.map((item, i) => (
//                   <WorkCard key={item.title} item={item} slot={SLOTS[i]} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </section>
//   );
// }

// /* ============================================================================
//    Grid cell — either a readable content chip or a decorative filler panel
//    ========================================================================= */

// function GridCell({ cell }: { cell: Cell }) {
//   const style = { gridColumn: `${cell.col} / span ${cell.span}`, gridRow: `${cell.row} / span 1` };

//   if (cell.kind === "stat") {
//     return (
//       <div
//         style={style}
//         className="gs-cell flex flex-col justify-between rounded-xl border border-black/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] sm:p-5"
//       >
//         <span className="text-4xl font-bold text-neutral-950 sm:text-5xl">{cell.stat.value}</span>
//         <span className="mt-1 text-sm font-medium text-neutral-600 sm:text-base">{cell.stat.label}</span>
//       </div>
//     );
//   }

//   if (cell.kind === "skill") {
//     return (
//       <div
//         style={style}
//         className="gs-cell flex items-center justify-between gap-3 rounded-xl border border-black/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] sm:p-5"
//       >
//         <span className="text-lg font-semibold text-neutral-950 sm:text-xl">{cell.skill.label}</span>
//         <DotSwatch tone="dark" />
//       </div>
//     );
//   }

//   const showGlyph = cell.fillerIndex % FILLER_GLYPH_EVERY === 0;
//   return (
//     <div
//       style={style}
//       className={`gs-cell flex items-center justify-center rounded-lg border border-black/10 transition-transform duration-300 hover:scale-[1.03] ${FILLER_BG[cell.fillerIndex % FILLER_BG.length]}`}
//     >
//       {showGlyph && <DotSwatch tone="light" dense />}
//     </div>
//   );
// }

// /* ============================================================================
//    Work card — one slot of the bento canvas
//    ========================================================================= */

// function WorkCard({ item, slot }: { item: WorkItem; slot: (typeof SLOTS)[number] }) {
//   const positionStyle: CSSProperties = {
//     left: `${slot.left}vw`,
//     width: `${slot.width}vw`,
//     top: `${slot.top}%`,
//     height: `${slot.height}%`,
//   };

//   const inner = (
//     <div
//       className={`relative h-full w-full overflow-hidden rounded-2xl border border-black/10 bg-neutral-900 transition-transform duration-500 ease-out group-hover:-translate-y-1.5 ${SLOT_ASPECT[item.size]}`}
//     >
//       <Image
//         src={item.image}
//         alt={item.title}
//         fill
//         sizes="34vw"
//         className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
//       />
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/0 opacity-70 transition-opacity duration-500 group-hover:opacity-95" />

//       {/* light-theme tag chip, matching the stats/skills side */}
//       <span className="absolute left-3 top-3 rounded-md border border-black/10 bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-950 backdrop-blur-sm">
//         {item.tag}
//       </span>

//       <div className="absolute inset-x-3 bottom-3">
//         <div className="flex translate-y-1 items-center justify-between opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
//           <p className="text-base font-semibold text-white sm:text-lg">{item.title}</p>
//           {item.href && (
//             <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950 transition-transform duration-500 group-hover:rotate-45">
//               <ArrowUpRight size={15} />
//             </span>
//           )}
//         </div>
//         <span className="mt-1.5 block h-[2px] w-0 rounded-full bg-orange-500 transition-all duration-500 ease-out group-hover:w-full" />
//       </div>
//     </div>
//   );

//   if (item.href) {
//     return (
//       <a href={item.href} target="_blank" rel="noopener noreferrer" className="group absolute" style={positionStyle}>
//         {inner}
//       </a>
//     );
//   }

//   return (
//     <div className="group absolute" style={positionStyle}>
//       {inner}
//     </div>
//   );
// }

// /* ============================================================================
//    Reduced-motion fallback — same content, no pin/scrub, fully readable
//    ========================================================================= */

// function ReducedShowcase() {
//   return (
//     <div className="space-y-16 px-6 py-16 sm:px-10 sm:py-20">
//       <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
//         {STATS.map((s) => (
//           <div key={s.label} className="rounded-xl border border-black/10 bg-white p-5">
//             <p className="text-4xl font-bold text-neutral-950">{s.value}</p>
//             <p className="mt-1 text-sm text-neutral-600">{s.label}</p>
//           </div>
//         ))}
//         {SKILLS.map((s) => (
//           <div
//             key={s.label}
//             className="flex items-center justify-between gap-3 rounded-xl border border-black/10 bg-white p-5"
//           >
//             <span className="text-lg font-semibold text-neutral-950">{s.label}</span>
//             <DotSwatch tone="dark" />
//           </div>
//         ))}
//       </div>

//       <div>
//         <h2 className="flex items-center gap-2.5 text-xl font-semibold text-neutral-950 sm:text-2xl">
//           <span aria-hidden className="h-2 w-2 shrink-0 rounded-sm bg-orange-500" />
//           Selected Work
//         </h2>
//         <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {WORK.map((item) => (
//             <a
//               key={item.title}
//               href={item.href ?? "#"}
//               className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-neutral-900"
//             >
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 fill
//                 sizes="33vw"
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
//               <span className="absolute left-3 top-3 rounded-md border border-black/10 bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-950">
//                 {item.tag}
//               </span>
//               <p className="absolute bottom-3 left-3 text-base font-semibold text-white">{item.title}</p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================================
   What changed this pass:
   - Cards are bigger and fewer per screen. Width/height ranges are tuned so
     roughly 3 sit in view at once (see the SLOTS math below), each one
     using most of the canvas's height instead of sitting small and
     centred in a narrow horizontal band.
   - The static per-card rotation is gone — cards sit flat now. Everything
     else about the "can't predict where the next one lands" layout
     (seeded-random width/height/position/aspect ratio per card) is
     unchanged from last time.
   - Still deterministic (same SEED → same layout on every load, server and
     browser match), and cards still never overlap — each one is placed
     after the previous one's right edge.
   - Change SEED, or the WIDTH_RANGE/HEIGHT_RANGE/GAP_RANGE constants below,
     to reshuffle or resize the whole arrangement.
   ========================================================================= */

/* ============================================================================
   CONTENT — edit freely. Everything below reflows automatically.
   ========================================================================= */

interface Stat {
  value: string;
  label: string;
}
const STATS: Stat[] = [
  { value: "30+", label: "Product Shipped" },
  { value: "10+", label: "Years Of Exp" },
  { value: "7+", label: "Global Companies" },
];

interface Skill {
  label: string;
}
const SKILLS: Skill[] = [{ label: "Digital Marketing" }, { label: "Web/SAAS Development" }, { label: "Graphics/Video Editing" }, { label: "Brand Promotion" }];

interface WorkItem {
  title: string;
  tag: string;
  image: string;
  href?: string;
}

const WORK: WorkItem[] = [
  { title: "Opswat", tag: "Case Study", image: "/works/work-1.jpg", href: "#" },
  { title: "PCOS Cysterhood", tag: "App Design", image: "/works/work-2.jpg", href: "#" },
  { title: "Skymavis", tag: "Case Study", image: "/works/work-3.jpg", href: "#" },
  { title: "Firekamp", tag: "Web Design", image: "/works/work-4.jpg", href: "#" },
  { title: "iTrackBites", tag: "App Design", image: "/works/work-5.jpg", href: "#" },
  { title: "Tekcom", tag: "Web Design", image: "/works/work-6.jpg", href: "#" },
  { title: "Vinh Tuong", tag: "Web Design", image: "/works/work-7.jpg", href: "#" },
  { title: "Sortly", tag: "App Design", image: "/works/work-8.jpg", href: "#" },
];

/* ============================================================================
   TUNING
   ========================================================================= */

const PIN_VIEWPORTS = 3 + Math.ceil(WORK.length / 2.5);

const T = {
  gridInEnd: 0.11,
  statsOutStart: 0.34,
  statsOutEnd: 0.42,
  workPanStart: 0.44,
  workPanEnd: 0.94,
};

// change this to reshuffle every card's size, position and tilt
const SEED = 1337;

// wide + tall enough that only ~3 cards sit in view at once, each one
// using most of the canvas instead of floating small in the middle of it
const WIDTH_RANGE: [number, number] = [28, 40]; // vw
const HEIGHT_RANGE: [number, number] = [46, 88]; // % of the canvas
const GAP_RANGE: [number, number] = [2.5, 6]; // vw, between one card and the next
const VERTICAL_MARGIN = 3; // % kept clear at the very top/bottom of the canvas
const PAD_VW = 6; // leading/trailing padding of the whole track

const ASPECTS = ["aspect-[3/4]", "aspect-[4/3]", "aspect-square", "aspect-[4/5]", "aspect-[16/10]", "aspect-[3/5]"];

/* ============================================================================
   DERIVED LAYOUT (computed once at module scope — deterministic, SSR-safe)
   ========================================================================= */

/** Small seeded PRNG so the "random" layout is identical every render, on
 *  the server and in the browser, instead of reshuffling on every load. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const lerp = (min: number, max: number, t: number) => min + (max - min) * t;

const SLOTS = (() => {
  let cursor = PAD_VW;
  return WORK.map((_, i) => {
    const rng = mulberry32(SEED + i * 7919);
    const width = lerp(...WIDTH_RANGE, rng());
    const height = lerp(...HEIGHT_RANGE, rng());
    const top = lerp(VERTICAL_MARGIN, 100 - VERTICAL_MARGIN - height, rng());
    const aspect = ASPECTS[Math.floor(rng() * ASPECTS.length)];
    const gap = i === 0 ? 0 : lerp(...GAP_RANGE, rng());

    cursor += gap;
    const left = cursor;
    cursor += width;

    return { left, width, top, height, aspect };
  });
})();
const TRACK_WIDTH_VW = SLOTS[SLOTS.length - 1].left + SLOTS[SLOTS.length - 1].width + PAD_VW;

const CONNECTOR_D = SLOTS.slice(1)
  .map((slot, i) => {
    const prev = SLOTS[i];
    const x1 = prev.left + prev.width;
    const y1 = prev.top + prev.height / 2;
    const x2 = slot.left;
    const y2 = slot.top + slot.height / 2;
    const midX = (x1 + x2) / 2;
    return `M${x1},${y1} L${midX},${y1} L${midX},${y2} L${x2},${y2}`;
  })
  .join(" ");

/* ============================================================================
   STATS + SKILLS GRID — seven even-sized chips, staggered one column per
   row (a diagonal cascade), on a 6×4 grid.
   ========================================================================= */

const GRID_COLS = 6;
const GRID_ROWS = 4;

type Cell =
  | { kind: "stat"; col: number; span: number; row: number; stat: Stat }
  | { kind: "skill"; col: number; span: number; row: number; skill: Skill }
  | { kind: "filler"; col: number; span: number; row: number; fillerIndex: number };

const CONTENT_CELLS: Cell[] = [
  { kind: "stat", col: 1, span: 2, row: 1, stat: STATS[0] },
  { kind: "skill", col: 3, span: 2, row: 1, skill: SKILLS[0] },
  { kind: "skill", col: 5, span: 2, row: 1, skill: SKILLS[1] },
  { kind: "stat", col: 2, span: 2, row: 2, stat: STATS[1] },
  { kind: "skill", col: 4, span: 2, row: 2, skill: SKILLS[2] },
  { kind: "stat", col: 3, span: 2, row: 3, stat: STATS[2] },
  { kind: "skill", col: 5, span: 2, row: 3, skill: SKILLS[3] },
];

const GRID_CELLS: Cell[] = (() => {
  const occupied = new Set<string>();
  CONTENT_CELLS.forEach((c) => {
    for (let i = 0; i < c.span; i++) occupied.add(`${c.col + i}-${c.row}`);
  });
  const filler: Cell[] = [];
  let fillerIndex = 0;
  for (let row = 1; row <= GRID_ROWS; row++) {
    for (let col = 1; col <= GRID_COLS; col++) {
      if (!occupied.has(`${col}-${row}`)) {
        filler.push({ kind: "filler", col, span: 1, row, fillerIndex: fillerIndex++ });
      }
    }
  }
  return [...CONTENT_CELLS, ...filler];
})();

/** Bottom-right-first reveal order: 0 = reveals earliest, 1 = reveals last. */
function waveOf(cell: Cell) {
  const centerCol = cell.col - 1 + cell.span / 2;
  const centerRow = cell.row - 1 + 0.5;
  const fromRight = GRID_COLS - centerCol;
  const fromBottom = GRID_ROWS - centerRow;
  return clamp01((fromRight + fromBottom) / (GRID_COLS + GRID_ROWS));
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

/** Small deterministic jitter so the reveal wave isn't perfectly mechanical. */
function jitterFor(seed: number) {
  const x = Math.sin(seed * 999.7) * 43758.5453;
  return (x - Math.floor(x) - 0.5) * 0.16;
}

const FILLER_BG = ["bg-orange-400", "bg-orange-500", "bg-orange-600", "bg-amber-400", "bg-amber-500"];
const FILLER_GLYPH_EVERY = 4;

function DotSwatch({ tone = "dark", dense = false }: { tone?: "dark" | "light"; dense?: boolean }) {
  const dot = tone === "dark" ? "rgba(23,15,5,0.4)" : "rgba(255,255,255,0.55)";
  const size = dense ? 6 : 9;
  const style: CSSProperties = {
    backgroundImage: `radial-gradient(circle, ${dot} 1.1px, transparent 1.6px)`,
    backgroundSize: `${size}px ${size}px`,
  };
  return <div aria-hidden className="h-8 w-8 shrink-0 rounded-md" style={style} />;
}

export function WorkShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridLayerRef = useRef<HTMLDivElement>(null);
  const workLayerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(() => {
    if (reduced) return;

    const section = sectionRef.current;
    const gridLayer = gridLayerRef.current;
    const workLayer = workLayerRef.current;
    const track = trackRef.current;
    if (!section || !gridLayer || !workLayer || !track) return;

    const ctx = gsap.context(() => {
      const cells = gsap.utils.toArray<HTMLElement>(".gs-cell");
      const revealAt = new Map<HTMLElement, number>();
      cells.forEach((el, i) => {
        const cell = GRID_CELLS[i];
        revealAt.set(el, clamp01(waveOf(cell) + jitterFor(i + 1)));
      });

      gsap.set(cells, { scale: 0.4, opacity: 0, y: 12 });
      gsap.set(workLayer, { opacity: 0 });

      const setGrid = (visibleFrac: number) => {
        cells.forEach((el) => {
          const at = revealAt.get(el) ?? 0;
          const on = visibleFrac >= at;
          gsap.set(el, { scale: on ? 1 : 0.4, opacity: on ? 1 : 0, y: on ? 0 : 12 });
        });
      };

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * PIN_VIEWPORTS}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;

          if (p <= T.gridInEnd) {
            setGrid(p / T.gridInEnd);
          } else if (p < T.statsOutStart) {
            setGrid(1);
          } else if (p < T.statsOutEnd) {
            const local = 1 - (p - T.statsOutStart) / (T.statsOutEnd - T.statsOutStart);
            setGrid(local);
          } else {
            setGrid(0);
          }

          const workOpacity = clamp01((p - (T.statsOutStart + 0.03)) / (T.statsOutEnd - T.statsOutStart));
          gsap.set(workLayer, { opacity: workOpacity, pointerEvents: workOpacity > 0.5 ? "auto" : "none" });

          const panLocal = clamp01((p - T.workPanStart) / (T.workPanEnd - T.workPanStart));
          const maxShift = Math.max(0, TRACK_WIDTH_VW - 100);
          gsap.set(track, { x: `${-panLocal * maxShift}vw` });
        },
      });
    }, section);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => {
      window.removeEventListener("load", onLoad);
      ctx.revert();
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative overflow-hidden bg-orange-100"
      style={{ height: reduced ? "auto" : "100svh" }}
    >
      {reduced ? (
        <ReducedShowcase />
      ) : (
        <>
          {/* ---------- Layer A: the jigsaw grid (stats + skills) ---------- */}
          <div ref={gridLayerRef} className="absolute inset-0 z-20">
            <div
              className="grid h-full w-full gap-1.5 p-1.5"
              style={{
                gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${GRID_ROWS}, minmax(0, 1fr))`,
              }}
            >
              {GRID_CELLS.map((cell, i) => (
                <GridCell key={i} cell={cell} />
              ))}
            </div>
          </div>

          {/* ---------- Layer B: Selected Work — panning bento canvas ---------- */}
          <div ref={workLayerRef} className="absolute inset-0 z-10 flex flex-col">
            <div className="flex items-end justify-between px-6 pt-8 sm:px-10 sm:pt-10">
              <h2 className="flex items-center gap-2.5 text-xl font-semibold text-neutral-950 sm:text-2xl">
                <span aria-hidden className="h-2 w-2 shrink-0 rounded-sm bg-orange-500" />
                Selected Work
              </h2>
              <span className="hidden text-sm text-neutral-950/45 sm:block">Scroll to browse →</span>
            </div>

            <div className="relative mt-6 flex-1 overflow-hidden sm:mt-10">
              <div ref={trackRef} className="absolute inset-y-0 left-0" style={{ width: `${TRACK_WIDTH_VW}vw` }}>
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox={`0 0 ${TRACK_WIDTH_VW} 100`}
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d={CONNECTOR_D}
                    fill="none"
                    stroke="rgba(20,15,10,0.2)"
                    strokeWidth="0.15"
                    strokeDasharray="0.8 1"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                {WORK.map((item, i) => (
                  <WorkCard key={item.title} item={item} slot={SLOTS[i]} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

/* ============================================================================
   Grid cell — either a readable content chip or a decorative filler panel
   ========================================================================= */

function GridCell({ cell }: { cell: Cell }) {
  const style = { gridColumn: `${cell.col} / span ${cell.span}`, gridRow: `${cell.row} / span 1` };

  if (cell.kind === "stat") {
    return (
      <div
        style={style}
        className="gs-cell flex flex-col justify-between rounded-xl border border-black/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] sm:p-5"
      >
        <span className="text-4xl font-bold text-neutral-950 sm:text-5xl">{cell.stat.value}</span>
        <span className="mt-1 text-sm font-medium text-neutral-600 sm:text-base">{cell.stat.label}</span>
      </div>
    );
  }

  if (cell.kind === "skill") {
    return (
      <div
        style={style}
        className="gs-cell flex items-center justify-between gap-3 rounded-xl border border-black/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] sm:p-5"
      >
        <span className="text-lg font-semibold text-neutral-950 sm:text-xl">{cell.skill.label}</span>
        <DotSwatch tone="dark" />
      </div>
    );
  }

  const showGlyph = cell.fillerIndex % FILLER_GLYPH_EVERY === 0;
  return (
    <div
      style={style}
      className={`gs-cell flex items-center justify-center rounded-lg border border-black/10 transition-transform duration-300 hover:scale-[1.03] ${FILLER_BG[cell.fillerIndex % FILLER_BG.length]}`}
    >
      {showGlyph && <DotSwatch tone="light" dense />}
    </div>
  );
}

/* ============================================================================
   Work card — one slot of the bento canvas. Position/size/tilt come from
   `slot` (seeded-random, see SLOTS above); this component just renders it.
   ========================================================================= */

function WorkCard({ item, slot }: { item: WorkItem; slot: (typeof SLOTS)[number] }) {
  // the outer element places and sizes the card — no rotation, cards sit
  // flat, just at unpredictable sizes/positions
  const outerStyle: CSSProperties = {
    left: `${slot.left}vw`,
    width: `${slot.width}vw`,
    top: `${slot.top}%`,
    height: `${slot.height}%`,
  };

  // the inner element owns the HOVER transform (lift/scale) so it never
  // has to fight the outer element's static rotate for the same property
  const inner = (
    <div
      className={`relative h-full w-full overflow-hidden rounded-2xl border border-black/10 bg-neutral-900 transition-transform duration-500 ease-out group-hover:-translate-y-1.5 ${slot.aspect}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="40vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/0 opacity-70 transition-opacity duration-500 group-hover:opacity-95" />

      <span className="absolute left-3 top-3 rounded-md border border-black/10 bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-950 backdrop-blur-sm">
        {item.tag}
      </span>

      <div className="absolute inset-x-3 bottom-3">
        <div className="flex translate-y-1 items-center justify-between opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-base font-semibold text-white sm:text-lg">{item.title}</p>
          {item.href && (
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950 transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight size={15} />
            </span>
          )}
        </div>
        <span className="mt-1.5 block h-[2px] w-0 rounded-full bg-orange-500 transition-all duration-500 ease-out group-hover:w-full" />
      </div>
    </div>
  );

  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="group absolute" style={outerStyle}>
        {inner}
      </a>
    );
  }

  return (
    <div className="group absolute" style={outerStyle}>
      {inner}
    </div>
  );
}

/* ============================================================================
   Reduced-motion fallback — same content, no pin/scrub, fully readable
   ========================================================================= */

function ReducedShowcase() {
  return (
    <div className="space-y-16 px-6 py-16 sm:px-10 sm:py-20">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-xl border border-black/10 bg-white p-5">
            <p className="text-4xl font-bold text-neutral-950">{s.value}</p>
            <p className="mt-1 text-sm text-neutral-600">{s.label}</p>
          </div>
        ))}
        {SKILLS.map((s) => (
          <div
            key={s.label}
            className="flex items-center justify-between gap-3 rounded-xl border border-black/10 bg-white p-5"
          >
            <span className="text-lg font-semibold text-neutral-950">{s.label}</span>
            <DotSwatch tone="dark" />
          </div>
        ))}
      </div>

      <div>
        <h2 className="flex items-center gap-2.5 text-xl font-semibold text-neutral-950 sm:text-2xl">
          <span aria-hidden className="h-2 w-2 shrink-0 rounded-sm bg-orange-500" />
          Selected Work
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WORK.map((item) => (
            <a
              key={item.title}
              href={item.href ?? "#"}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-neutral-900"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <span className="absolute left-3 top-3 rounded-md border border-black/10 bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-950">
                {item.tag}
              </span>
              <p className="absolute bottom-3 left-3 text-base font-semibold text-white">{item.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}