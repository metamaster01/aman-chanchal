// // "use client";

// // import { useState } from "react";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import { Star, Check, Copy } from "lucide-react";
// // import { DraggableCardContainer, DraggableCard } from "@/components/ui/draggable-card";

// // const EMAIL = "amanchanchal02@gmail.com";

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 24 },
// //   show: (i: number = 0) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
// //   }),
// // };

// // export function Hero() {
// //   const [copied, setCopied] = useState(false);

// //   const copyEmail = async () => {
// //     try {
// //       await navigator.clipboard.writeText(EMAIL);
// //       setCopied(true);
// //       setTimeout(() => setCopied(false), 1800);
// //     } catch {
// //       // clipboard not available – ignore silently
// //     }
// //   };

// //   return (
// //     <section id="top" className="relative overflow-hidden px-5 pb-28 pt-16 sm:px-8 sm:pt-24">
// //       <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
// //         <motion.span
// //           variants={fadeUp}
// //           initial="hidden"
// //           animate="show"
// //           custom={0}
// //           className="rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-500"
// //         >
// //           FOUNDER OR CEO OF META MASTER
// //         </motion.span>

// //         <motion.h1
// //           variants={fadeUp}
// //           initial="hidden"
// //           animate="show"
// //           custom={1}
// //           className="mt-6 text-4xl font-bold leading-tight text-neutral-950 sm:text-5xl md:text-6xl"
// //         >
// //           Hii, I&apos;m{" "}
// //           <span className="font-serif-display italic text-orange-500">
// //             Aman Chanchal
// //           </span>
// //         </motion.h1>

// //         <motion.p
// //           variants={fadeUp}
// //           initial="hidden"
// //           animate="show"
// //           custom={2}
// //           className="mt-5 max-w-xl text-balance text-base text-neutral-500 sm:text-lg"
// //         >
// //           Building brands, crafting digital experiences, and leading teams to
// //           create products people love.
// //         </motion.p>

// //         <motion.div
// //           variants={fadeUp}
// //           initial="hidden"
// //           animate="show"
// //           custom={3}
// //           className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
// //         >
// //           <a
// //             href="#contact"
// //             className="rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
// //           >
// //             Contact Me
// //           </a>

// //           <button
// //             onClick={copyEmail}
// //             className="group flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-3.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
// //           >
// //             {EMAIL}
// //             <span className="text-neutral-400 transition-colors group-hover:text-neutral-700">
// //               {copied ? <Check size={15} /> : <Copy size={15} />}
// //             </span>
// //           </button>
// //         </motion.div>

// //         {/* photo stack + stat */}
// //         <div className="relative mt-20 flex w-full max-w-4xl flex-col items-center gap-10 sm:mt-28 sm:flex-row sm:items-end sm:justify-between">
// //           <DraggableCardContainer className="h-[280px] w-full max-w-[340px] sm:h-[320px] sm:max-w-[560px] md:h-[380px] md:max-w-[640px]">
// //             <DraggableCard
// //               rotate={-8}
// //               zIndex={10}
// //               className="left-[2%] top-[14%] w-[42%] sm:left-[4%] sm:top-[10%] sm:w-[34%]"
// //             >
// //               <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-900">
// //                 <Image
// //                   src="/photos/photo-1.png"
// //                   alt="Aman outdoors at night"
// //                   fill
// //                   sizes="(max-width: 640px) 40vw, 220px"
// //                   className="pointer-events-none object-cover"
// //                   draggable={false}
// //                 />
// //               </div>
// //             </DraggableCard>

// //             <DraggableCard
// //               rotate={0}
// //               zIndex={30}
// //               className="left-[29%] top-0 w-[44%] sm:left-[33%] sm:w-[34%]"
// //             >
// //               <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-200">
// //                 <Image
// //                   src="/photos/photo-2.png"
// //                   alt="Aman sitting with his dog"
// //                   fill
// //                   sizes="(max-width: 640px) 42vw, 230px"
// //                   className="pointer-events-none object-cover"
// //                   draggable={false}
// //                 />
// //               </div>
// //               <p className="font-hand pt-2 text-center text-sm italic text-neutral-700">
// //                 Hii, i&apos;m <span className="text-orange-500">aman</span>
// //               </p>
// //             </DraggableCard>

// //             <DraggableCard
// //               rotate={8}
// //               zIndex={20}
// //               className="right-[2%] top-[16%] w-[42%] sm:right-[4%] sm:top-[8%] sm:w-[34%]"
// //             >
// //               <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-300">
// //                 <Image
// //                   src="/photos/photo-3.png"
// //                   alt="Aman standing near a garden terrace"
// //                   fill
// //                   sizes="(max-width: 640px) 40vw, 220px"
// //                   className="pointer-events-none object-cover"
// //                   draggable={false}
// //                 />
// //               </div>
// //             </DraggableCard>
// //           </DraggableCardContainer>

// //           {/* <motion.div
// //             variants={fadeUp}
// //             initial="hidden"
// //             animate="show"
// //             custom={4}
// //             className="flex shrink-0 flex-col items-center gap-1 sm:items-end"
// //           >
// //             <div className="flex gap-1 text-neutral-300">
// //               {Array.from({ length: 5 }).map((_, i) => (
// //                 <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
// //               ))}
// //             </div>
// //             <p className="text-3xl font-bold text-neutral-950">+3 Years</p>
// //             <p className="text-sm text-neutral-500">Experience</p>
// //           </motion.div> */}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }






// // "use client";

// // import { useState } from "react";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import { Star, Check, Copy } from "lucide-react";
// // import { DraggableCardContainer, DraggableCard } from "@/components/ui/draggable-card";

// // const EMAIL = "aman@metamaster.in";

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 24 },
// //   show: (i: number = 0) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
// //   }),
// // };

// // export function Hero() {
// //   const [copied, setCopied] = useState(false);

// //   const copyEmail = async () => {
// //     try {
// //       await navigator.clipboard.writeText(EMAIL);
// //       setCopied(true);
// //       setTimeout(() => setCopied(false), 1800);
// //     } catch {
// //       // clipboard not available – ignore silently
// //     }
// //   };

// //   return (
// //     <section id="top" className="relative overflow-hidden px-5 pb-28 pt-16 sm:px-8 sm:pt-24 md:pt-8 md:pb-4">
// //       <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
// //         <motion.span
// //           variants={fadeUp}
// //           initial="hidden"
// //           animate="show"
// //           custom={0}
// //           className="rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-500"
// //         >
// //           FOUNDER OR CEO OF META MASTER
// //         </motion.span>

// //         <motion.h1
// //           variants={fadeUp}
// //           initial="hidden"
// //           animate="show"
// //           custom={1}
// //           className="mt-6 text-4xl font-bold leading-tight text-neutral-950 sm:text-5xl md:text-6xl"
// //         >
// //           Hii, I&apos;m{" "}
// //           <span className="font-serif-display italic text-orange-500">
// //             Aman Chanchal
// //           </span>
// //         </motion.h1>

// //         <motion.p
// //           variants={fadeUp}
// //           initial="hidden"
// //           animate="show"
// //           custom={2}
// //           className="mt-5 max-w-xl text-balance text-base text-neutral-500 sm:text-lg"
// //         >
// //           Building brands, crafting digital experiences, and leading teams to
// //           create products people love.
// //         </motion.p>

// //         <motion.div
// //           variants={fadeUp}
// //           initial="hidden"
// //           animate="show"
// //           custom={3}
// //           className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
// //         >
// //           <a
// //             href="/contact"
// //             className="rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
// //           >
// //             Contact Me
// //           </a>

// //           <button
// //             onClick={copyEmail}
// //             className="group flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-3.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
// //           >
// //             {EMAIL}
// //             <span className="text-neutral-400 transition-colors group-hover:text-neutral-700">
// //               {copied ? <Check size={15} /> : <Copy size={15} />}
// //             </span>
// //           </button>
// //         </motion.div>

// //         {/* photo stack + stat — independent of each other now: the photo
// //             stack always centers on its own, the stat is pinned to the
// //             left edge and vertically centered against it on desktop */}
// //         <div className="relative mt-12 w-full sm:mt-28 md:mt-14">
// //           <DraggableCardContainer className="mx-auto h-[280px] w-full max-w-[340px] sm:h-[320px] sm:max-w-[560px] md:h-[380px] md:max-w-[640px]">
// //             <DraggableCard
// //               rotate={-8}
// //               zIndex={10}
// //               className="left-[2%] top-[14%] w-[42%] sm:left-[4%] sm:top-[10%] sm:w-[34%]"
// //             >
// //               <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-900">
// //                 <Image
// //                   src="/photos/photo-1.png"
// //                   alt="Aman outdoors at night"
// //                   fill
// //                   sizes="(max-width: 640px) 40vw, 220px"
// //                   className="pointer-events-none object-cover"
// //                   draggable={false}
// //                 />
// //               </div>
// //             </DraggableCard>

// //             <DraggableCard
// //               rotate={0}
// //               zIndex={30}
// //               className="left-[29%] top-0 w-[44%] sm:left-[33%] sm:w-[34%]"
// //             >
// //               <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-200">
// //                 <Image
// //                   src="/photos/photo-2.png"
// //                   alt="Aman sitting with his dog"
// //                   fill
// //                   sizes="(max-width: 640px) 42vw, 230px"
// //                   className="pointer-events-none object-cover"
// //                   draggable={false}
// //                 />
// //               </div>
// //               <p className="font-hand pt-2 text-center text-sm italic text-neutral-700">
// //                 Hii, i&apos;m <span className="text-orange-500">aman</span>
// //               </p>
// //             </DraggableCard>

// //             <DraggableCard
// //               rotate={8}
// //               zIndex={20}
// //               className="right-[2%] top-[16%] w-[42%] sm:right-[4%] sm:top-[8%] sm:w-[34%]"
// //             >
// //               <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-300">
// //                 <Image
// //                   src="/photos/photo-3.png"
// //                   alt="Aman standing near a garden terrace"
// //                   fill
// //                   sizes="(max-width: 640px) 40vw, 220px"
// //                   className="pointer-events-none object-cover"
// //                   draggable={false}
// //                 />
// //               </div>
// //             </DraggableCard>
// //           </DraggableCardContainer>

// //           <motion.div
// //             variants={fadeUp}
// //             initial="hidden"
// //             animate="show"
// //             custom={4}
// //             className="group mt-10 flex flex-col items-center gap-1 sm:absolute sm:left-0 sm:top-1/2 sm:mt-0 sm:w-40 sm:-translate-y-1/2 sm:items-start sm:text-left"
// //           >
// //             <div className="flex gap-1">
// //               {Array.from({ length: 5 }).map((_, i) => (
// //                 <Star
// //                   key={i}
// //                   size={18}
// //                   fill="currentColor"
// //                   strokeWidth={0}
// //                   style={{ transitionDelay: `${i * 60}ms` }}
// //                   className="text-neutral-300 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-yellow-400"
// //                 />
// //               ))}
// //             </div>
// //             <p className="text-3xl font-bold text-neutral-950">+3 Years</p>
// //             <p className="text-sm text-neutral-500">Experience</p>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }




// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Star, Check, Copy } from "lucide-react";
// import { DraggableCardContainer, DraggableCard } from "@/components/ui/draggable-card";
// import { WebcamPixelGrid } from "@/components/ui/webcam-pixel-grid";

// const EMAIL = "ceo.metamaster@gmail.com";

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: (i: number = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
//   }),
// };

// export function Hero() {
//   const [copied, setCopied] = useState(false);

//   const copyEmail = async () => {
//     try {
//       await navigator.clipboard.writeText(EMAIL);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1800);
//     } catch {
//       // clipboard not available – ignore silently
//     }
//   };

//   return (
//     <section
//       id="top"
//       className="relative overflow-hidden bg-neutral-950 px-5 pb-28 pt-16 sm:px-8 sm:pt-24 md:pt-32 md:pb-4"
//     >
//       {/* Live webcam pixel-grid background — props matched 1:1 to the
//           reference demo (60x40 grid, maxElevation 50, real webcam
//           colors, darken 0.6, near-black backgroundColor). bg-neutral-950
//           on the <section> itself is just a fallback so the layout never
//           flashes white before the canvas fades in / if camera access is
//           denied. Absolutely positioned + this section's own
//           `relative overflow-hidden` keeps it scoped to the hero only. */}
//       <div className="absolute inset-0 z-0">
//         <WebcamPixelGrid
//           gridCols={60}
//           gridRows={40}
//           maxElevation={50}
//           motionSensitivity={0.25}
//           elevationSmoothing={0.2}
//           colorMode="webcam"
//           backgroundColor="#030303"
//           mirror={true}
//           gapRatio={0.05}
//           invertColors={false}
//           darken={0.6}
//           borderColor="#ffffff"
//           borderOpacity={0.06}
//           className="h-full w-full"
//         />
//       </div>

//       {/* Gradient overlay for text readability, same as the reference */}
//       <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/60" />

//       <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
//         <motion.span
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           custom={0}
//           className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm"
//         >
//           FOUNDER OR CEO OF META MASTER
//         </motion.span>

//         <motion.h1
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           custom={1}
//           className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
//         >
//           Hii, I&apos;m{" "}
//           <span className="font-serif-display italic text-orange-500">
//             Aman Chanchal
//           </span>
//         </motion.h1>

//         <motion.p
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           custom={2}
//           className="mt-5 max-w-xl text-balance text-base text-white/60 sm:text-lg"
//         >
//           Building brands, crafting digital experiences, and leading teams to
//           create products people love.
//         </motion.p>

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           custom={3}
//           className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
//         >
//           <a
//             href="/contact"
//             className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all hover:scale-105 hover:bg-white/90"
//           >
//             Contact Me
//           </a>

//           <button
//             onClick={copyEmail}
//             className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10"
//           >
//             {EMAIL}
//             <span className="text-white/50 transition-colors group-hover:text-white">
//               {copied ? <Check size={15} /> : <Copy size={15} />}
//             </span>
//           </button>
//         </motion.div>

//         {/* photo stack + stat — independent of each other now: the photo
//             stack always centers on its own, the stat is pinned to the
//             left edge and vertically centered against it on desktop */}
//         <div className="relative mt-12 w-full sm:mt-28 md:mt-14">
//           <DraggableCardContainer className="mx-auto h-[280px] w-full max-w-[340px] sm:h-[320px] sm:max-w-[560px] md:h-[380px] md:max-w-[640px]">
//             <DraggableCard
//               rotate={-8}
//               zIndex={10}
//               className="left-[2%] top-[14%] w-[42%] sm:left-[4%] sm:top-[10%] sm:w-[34%]"
//             >
//               <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-900">
//                 <Image
//                   src="/photos/photo-1.png"
//                   alt="Aman outdoors at night"
//                   fill
//                   sizes="(max-width: 640px) 40vw, 220px"
//                   className="pointer-events-none object-cover"
//                   draggable={false}
//                 />
//               </div>
//             </DraggableCard>

//             <DraggableCard
//               rotate={0}
//               zIndex={30}
//               className="left-[29%] top-0 w-[44%] sm:left-[33%] sm:w-[34%]"
//             >
//               <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-200">
//                 <Image
//                   src="/photos/photo-2.png"
//                   alt="Aman sitting with his dog"
//                   fill
//                   sizes="(max-width: 640px) 42vw, 230px"
//                   className="pointer-events-none object-cover"
//                   draggable={false}
//                 />
//               </div>
//               <p className="font-hand pt-2 text-center text-sm italic text-neutral-700">
//                 Hii, i&apos;m <span className="text-orange-500">aman</span>
//               </p>
//             </DraggableCard>

//             <DraggableCard
//               rotate={8}
//               zIndex={20}
//               className="right-[2%] top-[16%] w-[42%] sm:right-[4%] sm:top-[8%] sm:w-[34%]"
//             >
//               <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-300">
//                 <Image
//                   src="/photos/photo-3.png"
//                   alt="Aman standing near a garden terrace"
//                   fill
//                   sizes="(max-width: 640px) 40vw, 220px"
//                   className="pointer-events-none object-cover"
//                   draggable={false}
//                 />
//               </div>
//             </DraggableCard>
//           </DraggableCardContainer>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="show"
//             custom={4}
//             className="group mt-10 flex flex-col items-center gap-1 sm:absolute sm:left-0 sm:top-1/2 sm:mt-0 sm:w-40 sm:-translate-y-1/2 sm:items-start sm:text-left"
//           >
//             <div className="flex gap-1">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <Star
//                   key={i}
//                   size={18}
//                   fill="currentColor"
//                   strokeWidth={0}
//                   style={{ transitionDelay: `${i * 60}ms` }}
//                   className="text-white/25 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-yellow-400"
//                 />
//               ))}
//             </div>
//             <p className="text-3xl font-bold text-white">+3 Years</p>
//             <p className="text-sm text-white/60">Experience</p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }










// "use client";

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { SplitText } from "gsap/SplitText";
// import { Star, Check, Copy } from "lucide-react";
// import { DraggableCardContainer, DraggableCard } from "@/components/ui/draggable-card";
// import { WebcamPixelGrid } from "@/components/ui/webcam-pixel-grid";

// gsap.registerPlugin(SplitText);

// const EMAIL = "ceo.metamaster@gmail.com";

// interface HeroProps {
//   /** Set by the parent page once the Preloader's reveal timeline finishes.
//    *  Defaults to true so the component still animates on its own if used
//    *  without a Preloader anywhere. */
//   revealed?: boolean;
// }

// export function Hero({ revealed = true }: HeroProps) {
//   const [copied, setCopied] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);
//   const playRef = useRef<(() => void) | null>(null);
//   const playedRef = useRef(false);

//   // always holds the LATEST `revealed` value — read this from inside async
//   // callbacks instead of closing over the prop directly, otherwise a
//   // callback created on an early render (revealed still false) would keep
//   // checking that stale false forever.
//   const revealedRef = useRef(revealed);

//   const copyEmail = async () => {
//     try {
//       await navigator.clipboard.writeText(EMAIL);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1800);
//     } catch {
//       // clipboard not available – ignore silently
//     }
//   };

//   // Hide everything synchronously (before paint) so there's never a flash
//   // of fully-visible content. SplitText itself is created once fonts are
//   // ready (recommended, so char widths aren't measured against a
//   // fallback font) — wrapped in try/catch so if it ever fails for any
//   // reason, the affected element just falls back to a plain fade instead
//   // of staying invisible forever.
//   useLayoutEffect(() => {
//     let active = true;
//     let heading: SplitText | undefined;
//     let paragraph: SplitText | undefined;

//     const node = sectionRef.current;
//     if (!node) return;

//     const ctx = gsap.context(() => {
//       gsap.set(".hero-badge", { y: -12, opacity: 0 });
//       gsap.set(".hero-heading", { opacity: 0 });
//       gsap.set(".hero-paragraph", { opacity: 0 });
//       gsap.set(".hero-cta", { y: 16, opacity: 0 });
//       gsap.set(".hero-photos", { scale: 0.92, opacity: 0 });
//       gsap.set(".hero-stat", { y: 16, opacity: 0 });
//       gsap.set(".hero-star", { scale: 0 });

//       document.fonts.ready.then(() => {
//         if (!active) return;

//         try {
//           heading = SplitText.create(".hero-heading", {
//             type: "chars, words",
//             mask: "chars",
//             charsClass: "hero-char",
//             wordsClass: "hero-word",
//           });
//           gsap.set(".hero-heading", { opacity: 1 });
//           gsap.set(heading.chars, { yPercent: 100, opacity: 0 });
//         } catch (err) {
//           console.error("[Hero] SplitText failed on heading, falling back to a plain fade:", err);
//           heading = undefined;
//         }

//         try {
//           paragraph = SplitText.create(".hero-paragraph", {
//             type: "lines",
//             mask: "lines",
//             linesClass: "hero-line",
//           });
//           gsap.set(".hero-paragraph", { opacity: 1 });
//           gsap.set(paragraph.lines, { yPercent: 100 });
//         } catch (err) {
//           console.error("[Hero] SplitText failed on paragraph, falling back to a plain fade:", err);
//           paragraph = undefined;
//         }

//         playRef.current = () => {
//           if (playedRef.current) return;
//           playedRef.current = true;

//           const tl = gsap.timeline({ delay: 0.05 });

//           tl.to(".hero-badge", {
//             y: 0,
//             opacity: 1,
//             duration: 0.5,
//             ease: "power3.out",
//           });

//           if (heading) {
//             tl.to(
//               heading.chars,
//               { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.015, ease: "power3.out" },
//               "<0.05"
//             );
//           } else {
//             tl.to(".hero-heading", { opacity: 1, duration: 0.6, ease: "power3.out" }, "<0.05");
//           }

//           if (paragraph) {
//             tl.to(
//               paragraph.lines,
//               { yPercent: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" },
//               "<0.35"
//             );
//           } else {
//             tl.to(".hero-paragraph", { opacity: 1, duration: 0.6, ease: "power3.out" }, "<0.35");
//           }

//           tl.to(".hero-cta", { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "<0.2")
//             .to(".hero-photos", { scale: 1, opacity: 1, duration: 0.9, ease: "power3.out" }, "<0.1")
//             .to(".hero-stat", { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "<0.3")
//             .to(".hero-star", { scale: 1, duration: 0.4, stagger: 0.06, ease: "back.out(2)" }, "<");
//         };

//         // in case `revealed` was already true by the time fonts settled
//         if (revealedRef.current) playRef.current();
//       });
//     }, node);

//     return () => {
//       active = false;
//       heading?.revert();
//       paragraph?.revert();
//       ctx.revert();
//     };
//     // deliberately empty — this builds the split/timeline exactly once
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // keep the ref current, and fire the reveal the moment the preloader
//   // hands off, whichever order that lands in relative to the fonts/
//   // SplitText setup above
//   useEffect(() => {
//     revealedRef.current = revealed;
//     if (revealed) playRef.current?.();
//   }, [revealed]);

//   return (
//     <section
//       ref={sectionRef}
//       id="top"
//       className="relative overflow-hidden bg-neutral-950 px-5 pb-28 pt-16 sm:px-8 sm:pt-24 md:pt-32 md:pb-4"
//     >
//       {/* Live webcam pixel-grid background — props matched 1:1 to the
//           reference demo (60x40 grid, maxElevation 50, real webcam
//           colors, darken 0.6, near-black backgroundColor). bg-neutral-950
//           on the <section> itself is just a fallback so the layout never
//           flashes white before the canvas fades in / if camera access is
//           denied. Absolutely positioned + this section's own
//           `relative overflow-hidden` keeps it scoped to the hero only. */}
//       <div className="absolute inset-0 z-0">
//         <WebcamPixelGrid
//           gridCols={60}
//           gridRows={40}
//           maxElevation={50}
//           motionSensitivity={0.25}
//           elevationSmoothing={0.2}
//           colorMode="webcam"
//           backgroundColor="#030303"
//           mirror={true}
//           gapRatio={0.05}
//           invertColors={false}
//           darken={0.6}
//           borderColor="#ffffff"
//           borderOpacity={0.06}
//           className="h-full w-full"
//         />
//       </div>

//       {/* Gradient overlay for text readability, same as the reference */}
//       <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/60" />

//       <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
//         <span className="hero-badge rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm">
//           FOUNDER OR CEO OF META MASTER
//         </span>

//         <h1 className="hero-heading mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
//           Hii, I&apos;m{" "}
//           <span className="font-serif-display italic text-orange-500">
//             Aman Chanchal
//           </span>
//         </h1>

//         <p className="hero-paragraph mt-5 max-w-xl text-balance text-base text-white/60 sm:text-lg">
//           Building brands, crafting digital experiences, and leading teams to
//           create products people love.
//         </p>

//         <div className="hero-cta mt-8 flex flex-col items-center gap-3 sm:flex-row">
//           <a
//             href="/contact"
//             className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all hover:scale-105 hover:bg-white/90"
//           >
//             Contact Me
//           </a>

//           <button
//             onClick={copyEmail}
//             className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10"
//           >
//             {EMAIL}
//             <span className="text-white/50 transition-colors group-hover:text-white">
//               {copied ? <Check size={15} /> : <Copy size={15} />}
//             </span>
//           </button>
//         </div>

//         {/* photo stack + stat — independent of each other now: the photo
//             stack always centers on its own, the stat is pinned to the
//             left edge and vertically centered against it on desktop */}
//         <div className="relative mt-12 w-full sm:mt-28 md:mt-14">
//           <div className="hero-photos mx-auto">
//             <DraggableCardContainer className="mx-auto h-[280px] w-full max-w-[340px] sm:h-[320px] sm:max-w-[560px] md:h-[380px] md:max-w-[640px]">
//               <DraggableCard
//                 rotate={-8}
//                 zIndex={10}
//                 className="left-[2%] top-[14%] w-[42%] sm:left-[4%] sm:top-[10%] sm:w-[34%]"
//               >
//                 <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-900">
//                   <Image
//                     src="/photos/photo-1.png"
//                     alt="Aman outdoors at night"
//                     fill
//                     sizes="(max-width: 640px) 40vw, 220px"
//                     className="pointer-events-none object-cover"
//                     draggable={false}
//                   />
//                 </div>
//               </DraggableCard>

//               <DraggableCard
//                 rotate={0}
//                 zIndex={30}
//                 className="left-[29%] top-0 w-[44%] sm:left-[33%] sm:w-[34%]"
//               >
//                 <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-200">
//                   <Image
//                     src="/photos/photo-2.png"
//                     alt="Aman sitting with his dog"
//                     fill
//                     sizes="(max-width: 640px) 42vw, 230px"
//                     className="pointer-events-none object-cover"
//                     draggable={false}
//                   />
//                 </div>
//                 <p className="font-hand pt-2 text-center text-sm italic text-neutral-700">
//                   Hii, i&apos;m <span className="text-orange-500">aman</span>
//                 </p>
//               </DraggableCard>

//               <DraggableCard
//                 rotate={8}
//                 zIndex={20}
//                 className="right-[2%] top-[16%] w-[42%] sm:right-[4%] sm:top-[8%] sm:w-[34%]"
//               >
//                 <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-300">
//                   <Image
//                     src="/photos/photo-3.png"
//                     alt="Aman standing near a garden terrace"
//                     fill
//                     sizes="(max-width: 640px) 40vw, 220px"
//                     className="pointer-events-none object-cover"
//                     draggable={false}
//                   />
//                 </div>
//               </DraggableCard>
//             </DraggableCardContainer>
//           </div>

//           <div className="hero-stat group mt-10 flex flex-col items-center gap-1 sm:absolute sm:left-0 sm:top-1/2 sm:mt-0 sm:w-40 sm:-translate-y-1/2 sm:items-start sm:text-left">
//             <div className="flex gap-1">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <Star
//                   key={i}
//                   size={18}
//                   fill="currentColor"
//                   strokeWidth={0}
//                   style={{ transitionDelay: `${i * 60}ms` }}
//                   className="hero-star text-white/25 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-yellow-400"
//                 />
//               ))}
//             </div>
//             <p className="text-3xl font-bold text-white">+3 Years</p>
//             <p className="text-sm text-white/60">Experience</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// "use client";

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { SplitText } from "gsap/SplitText";
// import { Star, Check, Copy } from "lucide-react";
// import { DraggableCardContainer, DraggableCard } from "@/components/ui/draggable-card";
// import { WebcamPixelGrid } from "@/components/ui/webcam-pixel-grid";

// gsap.registerPlugin(SplitText);

// const EMAIL = "ceo.metamaster@gmail.com";

// interface HeroProps {
//   revealed?: boolean;
// }

// export function Hero({ revealed = true }: HeroProps) {
//   const [copied, setCopied] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);
//   const playRef = useRef<(() => void) | null>(null);
//   const playedRef = useRef(false);
//   const revealedRef = useRef(revealed);

//   const copyEmail = async () => {
//     try {
//       await navigator.clipboard.writeText(EMAIL);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1800);
//     } catch {
//       // clipboard not available – ignore silently
//     }
//   };

//   useLayoutEffect(() => {
//     let active = true;
//     let heading: SplitText | undefined;
//     let paragraph: SplitText | undefined;

//     const node = sectionRef.current;
//     if (!node) return;

//     const ctx = gsap.context(() => {
//       gsap.set(".hero-badge", { y: -12, opacity: 0 });
//       gsap.set(".hero-heading", { opacity: 0 });
//       gsap.set(".hero-paragraph", { opacity: 0 });
//       gsap.set(".hero-cta", { y: 16, opacity: 0 });
//       gsap.set(".hero-photos", { scale: 0.92, opacity: 0 });
//       gsap.set(".hero-stat", { y: 16, opacity: 0 });
//       gsap.set(".hero-star", { scale: 0 });

//       document.fonts.ready.then(() => {
//         if (!active) return;

//         try {
//           heading = SplitText.create(".hero-heading", {
//             type: "chars, words",
//             mask: "chars",
//             charsClass: "hero-char",
//             wordsClass: "hero-word",
//           });
//           gsap.set(".hero-heading", { opacity: 1 });
//           gsap.set(heading.chars, { yPercent: 100, opacity: 0 });
//         } catch (err) {
//           console.error("[Hero] SplitText failed on heading, falling back to a plain fade:", err);
//           heading = undefined;
//           gsap.set(".hero-heading", { opacity: 0 });
//         }

//         try {
//           paragraph = SplitText.create(".hero-paragraph", {
//             type: "lines",
//             mask: "lines",
//             linesClass: "hero-line",
//           });
//           gsap.set(".hero-paragraph", { opacity: 1 });
//           gsap.set(paragraph.lines, { yPercent: 100 });
//         } catch (err) {
//           console.error("[Hero] SplitText failed on paragraph, falling back to a plain fade:", err);
//           paragraph = undefined;
//           gsap.set(".hero-paragraph", { opacity: 0 });
//         }

//         playRef.current = () => {
//           if (playedRef.current) return;
//           playedRef.current = true;

//           const tl = gsap.timeline({ delay: 0.05 });

//           tl.to(".hero-badge", { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" });

//           if (heading) {
//             tl.to(
//               heading.chars,
//               { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.015, ease: "power3.out" },
//               "<0.05"
//             );
//           } else {
//             tl.to(".hero-heading", { opacity: 1, duration: 0.6, ease: "power3.out" }, "<0.05");
//           }

//           if (paragraph) {
//             tl.to(
//               paragraph.lines,
//               { yPercent: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" },
//               "<0.35"
//             );
//           } else {
//             tl.to(".hero-paragraph", { opacity: 1, duration: 0.6, ease: "power3.out" }, "<0.35");
//           }

//           tl.to(".hero-cta", { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "<0.2")
//             .to(".hero-photos", { scale: 1, opacity: 1, duration: 0.9, ease: "power3.out" }, "<0.1")
//             .to(".hero-stat", { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "<0.3")
//             .to(".hero-star", { scale: 1, duration: 0.4, stagger: 0.06, ease: "back.out(2)" }, "<");
//         };

//         if (revealedRef.current) playRef.current();
//       });
//     }, node);

//     return () => {
//       active = false;
//       heading?.revert();
//       paragraph?.revert();
//       ctx.revert();
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     revealedRef.current = revealed;
//     if (revealed) playRef.current?.();
//   }, [revealed]);

//   return (
//     <section
//       ref={sectionRef}
//       id="top"
//       className="relative overflow-hidden bg-neutral-950 px-5 pb-28 pt-16 sm:px-8 sm:pt-24 md:pt-32 md:pb-4"
//     >
//       <div className="absolute inset-0 z-0">
//         <WebcamPixelGrid
//           gridCols={60}
//           gridRows={40}
//           maxElevation={50}
//           motionSensitivity={0.25}
//           elevationSmoothing={0.2}
//           colorMode="webcam"
//           backgroundColor="#030303"
//           mirror={true}
//           gapRatio={0.05}
//           invertColors={false}
//           darken={0.6}
//           borderColor="#ffffff"
//           borderOpacity={0.06}
//           className="h-full w-full"
//         />
//       </div>

//       <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/60" />

//       <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
//         <span className="hero-badge rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm">
//           FOUNDER OR CEO OF META MASTER
//         </span>

//         <h1 className="hero-heading mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
//           Hii, I&apos;m{" "}
//           <span className="font-serif-display italic text-orange-500">
//             Aman Chanchal
//           </span>
//         </h1>

//         <p className="hero-paragraph mt-5 max-w-xl text-balance text-base text-white/60 sm:text-lg">
//           Building brands, crafting digital experiences, and leading teams to
//           create products people love.
//         </p>

//         <div className="hero-cta mt-8 flex flex-col items-center gap-3 sm:flex-row">
//           <a
//             href="/contact"
//             className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all hover:scale-105 hover:bg-white/90"
//           >
//             Contact Me
//           </a>

//           <button
//             onClick={copyEmail}
//             className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10"
//           >
//             {EMAIL}
//             <span className="text-white/50 transition-colors group-hover:text-white">
//               {copied ? <Check size={15} /> : <Copy size={15} />}
//             </span>
//           </button>
//         </div>

//         <div className="relative mt-12 w-full sm:mt-28 md:mt-14">
//           <div className="hero-photos mx-auto">
//             <DraggableCardContainer className="mx-auto h-[280px] w-full max-w-[340px] sm:h-[320px] sm:max-w-[560px] md:h-[380px] md:max-w-[640px]">
//               <DraggableCard
//                 rotate={-8}
//                 zIndex={10}
//                 className="left-[2%] top-[14%] w-[42%] sm:left-[4%] sm:top-[10%] sm:w-[34%]"
//               >
//                 <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-900">
//                   <Image
//                     src="/photos/photo-1.png"
//                     alt="Aman outdoors at night"
//                     fill
//                     sizes="(max-width: 640px) 40vw, 220px"
//                     className="pointer-events-none object-cover"
//                     draggable={false}
//                   />
//                 </div>
//               </DraggableCard>

//               <DraggableCard
//                 rotate={0}
//                 zIndex={30}
//                 className="left-[29%] top-0 w-[44%] sm:left-[33%] sm:w-[34%]"
//               >
//                 <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-200">
//                   <Image
//                     src="/photos/photo-2.png"
//                     alt="Aman sitting with his dog"
//                     fill
//                     sizes="(max-width: 640px) 42vw, 230px"
//                     className="pointer-events-none object-cover"
//                     draggable={false}
//                   />
//                 </div>
//                 <p className="font-hand pt-2 text-center text-sm italic text-neutral-700">
//                   Hii, i&apos;m <span className="text-orange-500">aman</span>
//                 </p>
//               </DraggableCard>

//               <DraggableCard
//                 rotate={8}
//                 zIndex={20}
//                 className="right-[2%] top-[16%] w-[42%] sm:right-[4%] sm:top-[8%] sm:w-[34%]"
//               >
//                 <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-300">
//                   <Image
//                     src="/photos/photo-3.png"
//                     alt="Aman standing near a garden terrace"
//                     fill
//                     sizes="(max-width: 640px) 40vw, 220px"
//                     className="pointer-events-none object-cover"
//                     draggable={false}
//                   />
//                 </div>
//               </DraggableCard>
//             </DraggableCardContainer>
//           </div>

//           <div className="hero-stat group mt-10 flex flex-col items-center gap-1 sm:absolute sm:left-0 sm:top-1/2 sm:mt-0 sm:w-40 sm:-translate-y-1/2 sm:items-start sm:text-left">
//             <div className="flex gap-1">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <Star
//                   key={i}
//                   size={18}
//                   fill="currentColor"
//                   strokeWidth={0}
//                   style={{ transitionDelay: `${i * 60}ms` }}
//                   className="hero-star text-white/25 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-yellow-400"
//                 />
//               ))}
//             </div>
//             <p className="text-3xl font-bold text-white">+3 Years</p>
//             <p className="text-sm text-white/60">Experience</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








// "use client";
// /* eslint-disable @next/next/no-img-element */

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
// import Lenis from "lenis";
// import { Star, Check, Copy } from "lucide-react";
// import { DraggableCardContainer, DraggableCard } from "@/components/ui/draggable-card";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// /* -------------------------------------------------------------------------- */
// /*  Config – tweak these, don't touch the logic below                         */
// /* -------------------------------------------------------------------------- */

// const EMAIL = "ceo.metamaster@gmail.com";

// // /public/frames/frame_001.jpg … frame_080.jpg
// const FRAME_COUNT = 160;
// const frameSrc = (index: number) =>
//   `/frames/frame_${String(index + 1).padStart(3, "0")}.jpg`;

// // /public/icons/icon-1 … icon-6  (change the extension if yours are .svg / .webp)
// const LOGOS = Array.from({ length: 6 }, (_, i) => `/icons/icon-${i + 1}.png`);
// const LOGOS_LABEL = "Trusted by";

// // How many viewport-heights the user scrolls while the hero is pinned.
// const SCROLL_SCREENS = 5;
// // Frames finish playing at 90% of the pin; the last 10% is a hold (like the reference).
// const FRAMES_END = 0.9;
// // Seconds for the logo strip to loop once.
// const MARQUEE_SECONDS = 40;

// /* -------------------------------------------------------------------------- */

// const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
// /** Maps v from [a, b] to [0, 1], clamped. */
// const range = (v: number, a: number, b: number) => clamp01((v - a) / (b - a));
// const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

// interface HeroProps {
//   revealed?: boolean;
// }

// export function Hero({ revealed = true }: HeroProps) {
//   const [copied, setCopied] = useState(false);

//   const sectionRef = useRef<HTMLElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const introRef = useRef<HTMLDivElement>(null);
//   const revealRef = useRef<HTMLDivElement>(null);
//   const scrimRef = useRef<HTMLDivElement>(null);

//   const lenisRef = useRef<Lenis | null>(null);
//   const playRef = useRef<(() => void) | null>(null);
//   const playedRef = useRef(false);
//   const revealedRef = useRef(revealed);

//   const copyEmail = async () => {
//     try {
//       await navigator.clipboard.writeText(EMAIL);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1800);
//     } catch {
//       // clipboard not available – ignore silently
//     }
//   };

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     const canvas = canvasRef.current;
//     const intro = introRef.current;
//     const reveal = revealRef.current;
//     const scrim = scrimRef.current;
//     const ctx2d = canvas?.getContext("2d");
//     if (!section || !canvas || !intro || !reveal || !scrim || !ctx2d) return;

//     let active = true;
//     let heading: SplitText | undefined;
//     let paragraph: SplitText | undefined;

//     const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//     /* ------------------------------ Lenis + GSAP ------------------------------ */
//     // Lenis drives ScrollTrigger; GSAP's ticker drives Lenis (same as the reference).
//     const lenis = reduceMotion ? null : new Lenis();
//     lenisRef.current = lenis;
//     // Hold scrolling while the preloader is still showing.
//     if (lenis && !revealedRef.current) lenis.stop();

//     const tick = (time: number) => lenis?.raf(time * 1000);
//     if (lenis) {
//       lenis.on("scroll", ScrollTrigger.update);
//       gsap.ticker.add(tick);
//       gsap.ticker.lagSmoothing(0);
//     }

//     /* ------------------------------ Canvas frames ----------------------------- */
//     const images: HTMLImageElement[] = [];
//     let disposed = false;
//     let size = { w: 0, h: 0 };
//     let currentFrame = 0; // fractional – integer part = base frame, fraction = crossfade

//     const isReady = (img?: HTMLImageElement) =>
//       !!img && img.complete && img.naturalWidth > 0;

//     // If a frame hasn't loaded yet, fall back to the closest earlier one.
//     const nearestLoaded = (index: number) => {
//       for (let i = index; i >= 0; i--) if (isReady(images[i])) return images[i];
//       return null;
//     };

//     const drawCover = (img: HTMLImageElement, alpha: number) => {
//       const { w, h } = size;
//       const imageAspect = img.naturalWidth / img.naturalHeight;
//       const canvasAspect = w / h;
//       let dw: number, dh: number, dx: number, dy: number;

//       if (imageAspect > canvasAspect) {
//         dh = h;
//         dw = dh * imageAspect;
//         dx = (w - dw) / 2;
//         dy = 0;
//       } else {
//         dw = w;
//         dh = dw / imageAspect;
//         dx = 0;
//         dy = (h - dh) / 2;
//       }

//       ctx2d.globalAlpha = alpha;
//       ctx2d.drawImage(img, dx, dy, dw, dh);
//     };

//     const render = (exact: number = currentFrame) => {
//       currentFrame = exact;
//       if (!size.w || !size.h) return;

//       const base = Math.min(Math.floor(exact), FRAME_COUNT - 1);
//       const frac = exact - base;

//       const baseImg = nearestLoaded(base);
//       if (!baseImg) return;
//       drawCover(baseImg, 1);

//       // Blend into the next frame – makes 80 frames feel far smoother than 80 hard cuts.
//       const next = images[base + 1];
//       if (frac > 0.02 && isReady(next)) drawCover(next, frac);

//       ctx2d.globalAlpha = 1;
//     };

//     const setCanvasSize = () => {
//       const dpr = Math.min(window.devicePixelRatio || 1, 2);
//       const w = section.clientWidth;
//       const h = section.clientHeight;
//       size = { w, h };
//       canvas.width = Math.round(w * dpr);
//       canvas.height = Math.round(h * dpr);
//       ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
//       ctx2d.imageSmoothingQuality = "high";
//     };

//     setCanvasSize();

//     for (let i = 0; i < FRAME_COUNT; i++) {
//       const img = new window.Image();
//       img.decoding = "async";
//       img.onload = () => {
//         if (disposed) return;
//         const base = Math.floor(currentFrame);
//         if (i === base || i === base + 1) render();
//       };
//       img.onerror = () => {
//         if (i === 0) console.warn(`[Hero] Could not load ${frameSrc(i)} – check /public/frames`);
//       };
//       img.src = frameSrc(i);
//       images.push(img);
//     }

//     const resizeObserver = new ResizeObserver(() => {
//       setCanvasSize();
//       render();
//     });
//     resizeObserver.observe(section);

//     /* ---------------------------- GSAP + ScrollTrigger ------------------------- */
//     const gsapCtx = gsap.context((self) => {
//       // Intro (title block) – entrance state, played after the preloader.
//       gsap.set(".hero-badge", { y: -12, opacity: 0 });
//       gsap.set(".hero-heading", { opacity: 0 });
//       gsap.set(".hero-paragraph", { opacity: 0 });
//       gsap.set(".hero-cta", { y: 16, opacity: 0 });
//       gsap.set(".hero-logos", { y: 16, opacity: 0 });
//       gsap.set(".hero-hint", { opacity: 0 });

//       // Reveal (photos) – hidden until the scroll brings it in.
//       gsap.set(".hero-star", { scale: 0 });
//       gsap.set(reveal, { opacity: 0, z: -900, pointerEvents: "none" });

//       // Infinite logo flow.
//       const track = section.querySelector(".hero-marquee-track");
//       if (track && !reduceMotion) {
//         gsap.to(track, {
//           xPercent: -50,
//           duration: MARQUEE_SECONDS,
//           ease: "none",
//           repeat: -1,
//         });
//       }

//       // Stars pop in when the photos arrive, and un-pop when scrolling back up.
//       const starsTl = gsap
//         .timeline({ paused: true })
//         .to(".hero-star", { scale: 1, duration: 0.4, stagger: 0.06, ease: "back.out(2)" });
//       let starsOn = false;

//       const update = (p: number) => {
//         // 1) Background frames
//         const exact = Math.min(p / FRAMES_END, 1) * (FRAME_COUNT - 1);
//         if (exact !== currentFrame) render(exact);

//         // 2) Intro block recedes into the scene (translateZ) then fades out
//         const introFade = 1 - range(p, 0.12, 0.25);
//         gsap.set(intro, {
//           z: -500 * range(p, 0, 0.25),
//           opacity: introFade,
//           pointerEvents: introFade > 0.15 ? "auto" : "none",
//         });

//         // 3) Photos fly in from depth
//         const s = easeOutCubic(range(p, 0.5, 0.8));
//         const revealOpacity = range(p, 0.5, 0.68);
//         gsap.set(reveal, {
//           z: -900 * (1 - s),
//           opacity: revealOpacity,
//           pointerEvents: revealOpacity > 0.6 ? "auto" : "none",
//         });

//         // 4) Slightly darken the scene behind the photos
//         gsap.set(scrim, { opacity: 0.15 + 0.4 * s });

//         // 5) Stars
//         const shouldShowStars = p > 0.65;
//         if (shouldShowStars !== starsOn) {
//           starsOn = shouldShowStars;
//           if (starsOn) starsTl.play();
//           else starsTl.reverse();
//         }
//       };

//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         end: () => `+=${section.offsetHeight * SCROLL_SCREENS}`,
//         pin: true,
//         pinSpacing: true,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//         // No `scrub` needed: Lenis already smooths the scroll, so progress is buttery.
//         onUpdate: (st) => update(st.progress),
//       });
//       update(0);

//       // Fonts → split text → prepare the entrance played by the preloader.
//       document.fonts.ready.then(() => {
//         if (!active) return;

//         try {
//           heading = SplitText.create(".hero-heading", {
//             type: "chars, words",
//             mask: "chars",
//             charsClass: "hero-char",
//             wordsClass: "hero-word",
//           });
//           gsap.set(".hero-heading", { opacity: 1 });
//           gsap.set(heading.chars, { yPercent: 100, opacity: 0 });
//         } catch (err) {
//           console.error("[Hero] SplitText failed on heading, falling back to a plain fade:", err);
//           heading = undefined;
//           gsap.set(".hero-heading", { opacity: 0 });
//         }

//         try {
//           paragraph = SplitText.create(".hero-paragraph", {
//             type: "lines",
//             mask: "lines",
//             linesClass: "hero-line",
//           });
//           gsap.set(".hero-paragraph", { opacity: 1 });
//           gsap.set(paragraph.lines, { yPercent: 100 });
//         } catch (err) {
//           console.error("[Hero] SplitText failed on paragraph, falling back to a plain fade:", err);
//           paragraph = undefined;
//           gsap.set(".hero-paragraph", { opacity: 0 });
//         }

//         playRef.current = () => {
//           if (playedRef.current) return;
//           playedRef.current = true;

//           // self.add keeps this timeline inside the context so it's cleaned up on unmount.
//           self.add(() => {
//             const tl = gsap.timeline({ delay: 0.05 });

//             tl.to(".hero-badge", { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" });

//             if (heading) {
//               tl.to(
//                 heading.chars,
//                 { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.015, ease: "power3.out" },
//                 "<0.05"
//               );
//             } else {
//               tl.to(".hero-heading", { opacity: 1, duration: 0.6, ease: "power3.out" }, "<0.05");
//             }

//             if (paragraph) {
//               tl.to(
//                 paragraph.lines,
//                 { yPercent: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" },
//                 "<0.35"
//               );
//             } else {
//               tl.to(".hero-paragraph", { opacity: 1, duration: 0.6, ease: "power3.out" }, "<0.35");
//             }

//             tl.to(".hero-cta", { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "<0.2")
//               .to(".hero-logos", { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "<0.15")
//               .to(".hero-hint", { opacity: 1, duration: 0.6, ease: "power2.out" }, "<0.3");
//           });
//         };

//         if (revealedRef.current) playRef.current();
//       });
//     }, section);

//     return () => {
//       active = false;
//       disposed = true;
//       resizeObserver.disconnect();
//       images.forEach((img) => {
//         img.onload = null;
//         img.onerror = null;
//       });
//       heading?.revert();
//       paragraph?.revert();
//       gsapCtx.revert(); // also kills the ScrollTrigger + marquee tween

//       if (lenis) {
//         gsap.ticker.remove(tick);
//         gsap.ticker.lagSmoothing(500, 33); // restore GSAP defaults
//         lenis.destroy();
//       }
//       lenisRef.current = null;
//       playRef.current = null;
//       playedRef.current = false;
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Preloader finished → unlock scroll and play the intro.
//   useEffect(() => {
//     revealedRef.current = revealed;
//     if (revealed) {
//       lenisRef.current?.start();
//       playRef.current?.();
//     }
//   }, [revealed]);

//   return (
//     <section
//       ref={sectionRef}
//       id="top"
//       className="relative h-svh w-full overflow-hidden bg-neutral-950"
//     >
//       {/* Scroll-scrubbed frame sequence (replaces the webcam pixel grid) */}
//       <canvas ref={canvasRef} aria-hidden className="absolute inset-0 z-0 h-full w-full" />

//       {/* Readability overlays */}
//       <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/10 to-black/60" />
//       <div ref={scrimRef} className="pointer-events-none absolute inset-0 z-[1] bg-black opacity-[0.15]" />

//       {/* Perspective stage – both layers travel along Z inside it */}
//       <div className="absolute inset-0 z-10" style={{ perspective: "1000px" }}>
//         {/* ───────── Layer 1: intro (title, CTAs, logo flow) ───────── */}
//         <div
//           ref={introRef}
//           className="absolute inset-0 flex flex-col items-center justify-center px-5 pb-10 pt-20 text-center sm:px-8"
//         >
//           <span className="hero-badge rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm">
//             FOUNDER OR CEO OF META MASTER
//           </span>

//           <h1 className="hero-heading mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
//             Hii, I&apos;m{" "}
//             <span className="font-serif-display italic text-orange-500">Aman Chanchal</span>
//           </h1>

//           <p className="hero-paragraph mt-5 max-w-xl text-balance text-base text-white/60 sm:text-lg">
//             Building brands, crafting digital experiences, and leading teams to create products
//             people love.
//           </p>

//           <div className="hero-cta mt-8 flex flex-col items-center gap-3 sm:flex-row">
//             <a
//               href="/contact"
//               className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all hover:scale-105 hover:bg-white/90"
//             >
//               Contact Me
//             </a>

//             <button
//               onClick={copyEmail}
//               className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10"
//             >
//               {EMAIL}
//               <span className="text-white/50 transition-colors group-hover:text-white">
//                 {copied ? <Check size={15} /> : <Copy size={15} />}
//               </span>
//             </button>
//           </div>

//           {/* Logo flow */}
//           <div className="hero-logos mt-12 flex w-full max-w-2xl flex-col items-center gap-4 md:mt-14">
//             <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/50">
//               {LOGOS_LABEL}
//             </p>

//             <div
//               className="w-full overflow-hidden"
//               style={{
//                 maskImage:
//                   "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
//                 WebkitMaskImage:
//                   "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
//               }}
//             >
//               {/* Two identical groups → moving the track by -50% loops seamlessly */}
//               <div className="hero-marquee-track flex w-max">
//                 {[0, 1].map((group) => (
//                   <div
//                     key={group}
//                     aria-hidden={group === 1}
//                     className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16"
//                   >
//                     {[...LOGOS, ...LOGOS].map((src, i) => (
//                       <img
//                         key={`${group}-${i}`}
//                         src={src}
//                         alt=""
//                         draggable={false}
//                         // brightness-0 + invert turns any logo into clean white.
//                         // Remove those two classes to keep original logo colours.
//                         className="h-6 w-auto shrink-0 select-none opacity-70 brightness-0 invert md:h-7"
//                       />
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="hero-hint pointer-events-none absolute inset-x-0 bottom-6 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
//             Scroll
//             <span className="h-7 w-px bg-gradient-to-b from-white/50 to-transparent" />
//           </div>
//         </div>

//         {/* ───────── Layer 2: photos + stat (flies in on scroll) ───────── */}
//         <div
//           ref={revealRef}
//           className="pointer-events-none absolute inset-0 flex items-center justify-center px-5 opacity-0 sm:px-8"
//         >
//           <div className="relative w-full max-w-6xl">
//             <div className="mx-auto">
//               <DraggableCardContainer className="mx-auto h-[280px] w-full max-w-[340px] sm:h-[320px] sm:max-w-[560px] md:h-[440px] md:max-w-[760px]">
//                 <DraggableCard
//                   rotate={-8}
//                   zIndex={10}
//                   className="left-[2%] top-[14%] w-[42%] sm:left-[4%] sm:top-[10%] sm:w-[34%]"
//                 >
//                   <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-900">
//                     <Image
//                       src="/photos/photo-1.png"
//                       alt="Aman outdoors at night"
//                       fill
//                       sizes="(max-width: 640px) 40vw, 260px"
//                       className="pointer-events-none object-cover"
//                       draggable={false}
//                     />
//                   </div>
//                 </DraggableCard>

//                 <DraggableCard
//                   rotate={0}
//                   zIndex={30}
//                   className="left-[29%] top-0 w-[44%] sm:left-[33%] sm:w-[34%]"
//                 >
//                   <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-200">
//                     <Image
//                       src="/photos/photo-2.png"
//                       alt="Aman sitting with his dog"
//                       fill
//                       sizes="(max-width: 640px) 42vw, 270px"
//                       className="pointer-events-none object-cover"
//                       draggable={false}
//                     />
//                   </div>
//                   <p className="font-hand pt-2 text-center text-sm italic text-neutral-700">
//                     Hii, i&apos;m <span className="text-orange-500">aman</span>
//                   </p>
//                 </DraggableCard>

//                 <DraggableCard
//                   rotate={8}
//                   zIndex={20}
//                   className="right-[2%] top-[16%] w-[42%] sm:right-[4%] sm:top-[8%] sm:w-[34%]"
//                 >
//                   <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-300">
//                     <Image
//                       src="/photos/photo-3.png"
//                       alt="Aman standing near a garden terrace"
//                       fill
//                       sizes="(max-width: 640px) 40vw, 260px"
//                       className="pointer-events-none object-cover"
//                       draggable={false}
//                     />
//                   </div>
//                 </DraggableCard>
//               </DraggableCardContainer>
//             </div>

//             <div className="hero-stat group mt-10 flex flex-col items-center gap-1 sm:absolute sm:left-0 sm:top-1/2 sm:mt-0 sm:w-40 sm:-translate-y-1/2 sm:items-start sm:text-left">
//               <div className="flex gap-1">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <Star
//                     key={i}
//                     size={18}
//                     fill="currentColor"
//                     strokeWidth={0}
//                     style={{ transitionDelay: `${i * 60}ms` }}
//                     // transition only translate + colour, so it never fights GSAP's transform
//                     className="hero-star text-white/25 transition-[translate,color] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-yellow-400"
//                   />
//                 ))}
//               </div>
//               <p className="text-3xl font-bold text-white">+3 Years</p>
//               <p className="text-sm text-white/60">Experience</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }















// "use client";
// /* eslint-disable @next/next/no-img-element */

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
// import Lenis from "lenis";
// import { Check, Copy } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// /* -------------------------------------------------------------------------- */
// /*  Config                                                                    */
// /* -------------------------------------------------------------------------- */

// const EMAIL = "ceo.metamaster@gmail.com";

// // /public/frames/frame_001.jpg … frame_160.jpg
// const FRAME_COUNT = 160;
// const frameSrc = (index: number) =>
//   `/frames/frame_${String(index + 1).padStart(3, "0")}.jpg`;

// // /public/icons/icon-1 … icon-6  (change the extension if yours differ)
// const LOGOS = Array.from({ length: 6 }, (_, i) => `icons/icon-${i + 1}.png`);
// const LOGOS_LABEL = "Trusted by";

// // Viewport-heights of scrolling while the frames play.
// // (One extra screen is added automatically for the glide-up hand-off.)
// const SCROLL_SCREENS = 4;
// // Seconds for the logo strip to loop once.
// const MARQUEE_SECONDS = 40;

// /* -------------------------------------------------------------------------- */

// const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
// /** Maps v from [a, b] to [0, 1], clamped. */
// const range = (v: number, a: number, b: number) => clamp01((v - a) / (b - a));
// const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

// interface HeroProps {
//   /** Flip to true once the preloader has completely finished. */
//   revealed?: boolean;
// }

// /**
//  * Layout trick (no GSAP pin): a tall "track" holds a sticky, viewport-sized
//  * hero. The track is pulled 100svh over the next section with a negative
//  * bottom margin, so during the last screen of scrolling the next section
//  * glides up OVER the hero, which stays perfectly still underneath.
//  *
//  * Requirements: the section after <Hero /> must be `position: relative` (or
//  * any positioned) with an opaque background, and no ancestor of <Hero />
//  * may have `overflow: hidden/auto` (that would break `position: sticky`).
//  */
// export function Hero({ revealed = true }: HeroProps) {
//   const [copied, setCopied] = useState(false);

//   const trackRef = useRef<HTMLDivElement>(null);
//   const sectionRef = useRef<HTMLElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const introRef = useRef<HTMLDivElement>(null);
//   const scrimRef = useRef<HTMLDivElement>(null);

//   const lenisRef = useRef<Lenis | null>(null);
//   const playRef = useRef<(() => void) | null>(null);
//   const playedRef = useRef(false);
//   const revealedRef = useRef(revealed);

//   const copyEmail = async () => {
//     try {
//       await navigator.clipboard.writeText(EMAIL);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1800);
//     } catch {
//       // clipboard not available – ignore silently
//     }
//   };

//   useLayoutEffect(() => {
//     const track = trackRef.current;
//     const section = sectionRef.current;
//     const canvas = canvasRef.current;
//     const intro = introRef.current;
//     const scrim = scrimRef.current;
//     const ctx2d = canvas?.getContext("2d");
//     if (!track || !section || !canvas || !intro || !scrim || !ctx2d) return;

//     let active = true;
//     let heading: SplitText | undefined;
//     let paragraph: SplitText | undefined;

//     const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//     /* ------------------------------ Lenis + GSAP ------------------------------ */
//     const lenis = reduceMotion ? null : new Lenis();
//     lenisRef.current = lenis;
//     // Hold scrolling until the preloader has completely finished.
//     if (lenis && !revealedRef.current) lenis.stop();

//     const tick = (time: number) => lenis?.raf(time * 1000);
//     if (lenis) {
//       lenis.on("scroll", ScrollTrigger.update);
//       gsap.ticker.add(tick);
//       gsap.ticker.lagSmoothing(0);
//     }

//     /* ------------------------------ Canvas frames ----------------------------- */
//     const images: HTMLImageElement[] = [];
//     let disposed = false;
//     let size = { w: 0, h: 0 };
//     let currentFrame = 0; // fractional: integer = base frame, fraction = crossfade

//     const isReady = (img?: HTMLImageElement) =>
//       !!img && img.complete && img.naturalWidth > 0;

//     const nearestLoaded = (index: number) => {
//       for (let i = index; i >= 0; i--) if (isReady(images[i])) return images[i];
//       return null;
//     };

//     const drawCover = (img: HTMLImageElement, alpha: number) => {
//       const { w, h } = size;
//       const imageAspect = img.naturalWidth / img.naturalHeight;
//       const canvasAspect = w / h;
//       let dw: number, dh: number, dx: number, dy: number;

//       if (imageAspect > canvasAspect) {
//         dh = h;
//         dw = dh * imageAspect;
//         dx = (w - dw) / 2;
//         dy = 0;
//       } else {
//         dw = w;
//         dh = dw / imageAspect;
//         dx = 0;
//         dy = (h - dh) / 2;
//       }

//       ctx2d.globalAlpha = alpha;
//       ctx2d.drawImage(img, dx, dy, dw, dh);
//     };

//     const render = (exact: number = currentFrame) => {
//       currentFrame = exact;
//       if (!size.w || !size.h) return;

//       const base = Math.min(Math.floor(exact), FRAME_COUNT - 1);
//       const frac = exact - base;

//       const baseImg = nearestLoaded(base);
//       if (!baseImg) return;
//       drawCover(baseImg, 1);

//       // Blend into the next frame so 80 frames feel smoother than 80 hard cuts.
//       const next = images[base + 1];
//       if (frac > 0.02 && isReady(next)) drawCover(next, frac);

//       ctx2d.globalAlpha = 1;
//     };

//     const setCanvasSize = () => {
//       const dpr = Math.min(window.devicePixelRatio || 1, 2);
//       const w = section.clientWidth;
//       const h = section.clientHeight;
//       size = { w, h };
//       canvas.width = Math.round(w * dpr);
//       canvas.height = Math.round(h * dpr);
//       ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
//       ctx2d.imageSmoothingQuality = "high";
//     };

//     setCanvasSize();

//     for (let i = 0; i < FRAME_COUNT; i++) {
//       const img = new window.Image();
//       img.decoding = "async";
//       img.onload = () => {
//         if (disposed) return;
//         const base = Math.floor(currentFrame);
//         if (i === base || i === base + 1) render();
//       };
//       img.onerror = () => {
//         if (i === 0) console.warn(`[Hero] Could not load ${frameSrc(i)} – check /public/frames`);
//       };
//       img.src = frameSrc(i);
//       images.push(img);
//     }

//     const resizeObserver = new ResizeObserver(() => {
//       setCanvasSize();
//       render();
//     });
//     resizeObserver.observe(section);

//     /* ---------------------------- GSAP + ScrollTrigger ------------------------- */
//     const gsapCtx = gsap.context((self) => {
//       // Everything starts hidden; the intro is played once `revealed` is true.
//       gsap.set(".hero-canvas", { scale: 1.12 });
//       gsap.set(".hero-badge", { y: -12, opacity: 0 });
//       gsap.set(".hero-heading", { opacity: 0 });
//       gsap.set(".hero-paragraph", { opacity: 0 });
//       gsap.set(".hero-cta", { y: 16, opacity: 0 });
//       gsap.set(".hero-logos", { y: 16, opacity: 0 });
//       gsap.set(".hero-hint", { opacity: 0 });

//       // Infinite logo flow.
//       const marquee = track.querySelector(".hero-marquee-track");
//       if (marquee && !reduceMotion) {
//         gsap.to(marquee, { xPercent: -50, duration: MARQUEE_SECONDS, ease: "none", repeat: -1 });
//       }

//       const update = (st: ScrollTrigger) => {
//         const span = st.end - st.start;
//         if (span <= 0) return;

//         // The track scrolls (SCROLL_SCREENS + 1) screens while pinned by `sticky`:
//         // the first SCROLL_SCREENS play the frames, the final one is the glide-up.
//         const px = st.progress * span;
//         const frameSpan = span * (SCROLL_SCREENS / (SCROLL_SCREENS + 1));
//         const frameP = clamp01(px / frameSpan);
//         const glideP = range(px, frameSpan, span);

//         // 1) Background frames
//         const exact = frameP * (FRAME_COUNT - 1);
//         if (exact !== currentFrame) render(exact);

//         // 2) Intro block recedes into the scene (translateZ), then fades out
//         const introFade = 1 - range(frameP, 0.1, 0.22);
//         gsap.set(intro, {
//           z: -500 * range(frameP, 0, 0.25),
//           opacity: introFade,
//           pointerEvents: introFade > 0.15 ? "auto" : "none",
//         });

//         // 3) While the next section glides up over us, the hero stays put and
//         //    just dims, like a curtain being drawn
//         gsap.set(scrim, { opacity: 0.12 + 0.55 * easeInOut(glideP) });
//       };

//       const st = ScrollTrigger.create({
//         trigger: track,
//         start: "top top",
//         end: "bottom bottom",
//         invalidateOnRefresh: true,
//         onUpdate: update,
//         onRefresh: update,
//       });
//       update(st);

//       // Fonts → split text → prepare the entrance. It only PLAYS when the
//       // preloader tells us it has fully finished (`revealed`).
//       document.fonts.ready.then(() => {
//         if (!active) return;

//         try {
//           heading = SplitText.create(".hero-heading", {
//             type: "chars, words",
//             mask: "chars",
//             charsClass: "hero-char",
//             wordsClass: "hero-word",
//           });
//           gsap.set(".hero-heading", { opacity: 1 });
//           gsap.set(heading.chars, {
//             yPercent: 120,
//             rotate: 7,
//             opacity: 0,
//             transformOrigin: "0% 100%",
//           });
//         } catch (err) {
//           console.error("[Hero] SplitText failed on heading, falling back to a plain fade:", err);
//           heading = undefined;
//           gsap.set(".hero-heading", { opacity: 0 });
//         }

//         try {
//           paragraph = SplitText.create(".hero-paragraph", {
//             type: "lines",
//             mask: "lines",
//             linesClass: "hero-line",
//           });
//           gsap.set(".hero-paragraph", { opacity: 1 });
//           gsap.set(paragraph.lines, { yPercent: 100 });
//         } catch (err) {
//           console.error("[Hero] SplitText failed on paragraph, falling back to a plain fade:", err);
//           paragraph = undefined;
//           gsap.set(".hero-paragraph", { opacity: 0 });
//         }

//         playRef.current = () => {
//           if (playedRef.current) return;
//           playedRef.current = true;

//           self.add(() => {
//             const tl = gsap.timeline({ delay: 0.1 });

//             // scene settles in from a slight zoom
//             tl.to(".hero-canvas", { scale: 1, duration: 2.4, ease: "expo.out" }, 0);

//             tl.to(".hero-badge", { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, 0.1);

//             if (heading) {
//               const inName = (el: Element) => !!el.closest(".hero-name");
//               const plain = heading.chars.filter((c) => !inName(c));
//               const name = heading.chars.filter(inName);

//               // "Hii, I'm" rises letter by letter…
//               tl.to(
//                 plain,
//                 {
//                   yPercent: 0,
//                   rotate: 0,
//                   opacity: 1,
//                   duration: 1,
//                   stagger: 0.03,
//                   ease: "expo.out",
//                 },
//                 0.25
//               );
//               // …then the name follows, a touch slower so it lands as the highlight
//               tl.to(
//                 name,
//                 {
//                   yPercent: 0,
//                   rotate: 0,
//                   opacity: 1,
//                   duration: 1.2,
//                   stagger: 0.045,
//                   ease: "expo.out",
//                 },
//                 "<0.3"
//               );
//             } else {
//               tl.to(".hero-heading", { opacity: 1, duration: 0.9, ease: "power3.out" }, 0.25);
//             }

//             if (paragraph) {
//               tl.to(
//                 paragraph.lines,
//                 { yPercent: 0, duration: 0.9, stagger: 0.09, ease: "power3.out" },
//                 1.0
//               );
//             } else {
//               tl.to(".hero-paragraph", { opacity: 1, duration: 0.8, ease: "power3.out" }, 1.0);
//             }

//             tl.to(".hero-cta", { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, 1.25)
//               .to(".hero-logos", { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, 1.45)
//               .to(".hero-hint", { opacity: 1, duration: 0.7, ease: "power2.out" }, 1.8);
//           });
//         };

//         if (revealedRef.current) playRef.current();
//       });
//     }, track);

//     return () => {
//       active = false;
//       disposed = true;
//       resizeObserver.disconnect();
//       images.forEach((img) => {
//         img.onload = null;
//         img.onerror = null;
//       });
//       heading?.revert();
//       paragraph?.revert();
//       gsapCtx.revert(); // kills the ScrollTrigger, marquee and intro timeline

//       if (lenis) {
//         gsap.ticker.remove(tick);
//         gsap.ticker.lagSmoothing(500, 33); // restore GSAP defaults
//         lenis.destroy();
//       }
//       lenisRef.current = null;
//       playRef.current = null;
//       playedRef.current = false;
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Preloader completely gone → unlock scroll, re-measure, play the intro.
//   useEffect(() => {
//     revealedRef.current = revealed;
//     if (revealed) {
//       lenisRef.current?.start();
//       ScrollTrigger.refresh();
//       playRef.current?.();
//     }
//   }, [revealed]);

//   return (
//     <div
//       ref={trackRef}
//       id="top"
//       className="relative"
//       // +2 = the sticky hero's own screen + the glide-up screen.
//       // marginBottom pulls the next section up over the hero's last screen.
//       style={{ height: `${(SCROLL_SCREENS + 2) * 100}svh`, marginBottom: "-100svh" }}
//     >
//       <section
//         ref={sectionRef}
//         className="sticky top-0 h-svh w-full overflow-hidden bg-neutral-950"
//       >
//         {/* Scroll-scrubbed frame sequence */}
//         <canvas
//           ref={canvasRef}
//           aria-hidden
//           className="hero-canvas absolute inset-0 z-0 h-full w-full"
//         />

//         {/* Readability overlays */}
//         <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/10 to-black/60" />
//         <div
//           ref={scrimRef}
//           className="pointer-events-none absolute inset-0 z-[1] bg-black opacity-[0.12]"
//         />

//         {/* Perspective stage – the intro block travels along Z inside it */}
//         <div className="absolute inset-0 z-10" style={{ perspective: "1000px" }}>
//           <div
//             ref={introRef}
//             className="absolute inset-0 flex flex-col items-center justify-center px-5 pb-10 pt-20 text-center sm:px-8"
//           >
//             <span className="hero-badge rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm">
//               FOUNDER OR CEO OF META MASTER
//             </span>

//             <h1 className="hero-heading mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
//               Hii, I&apos;m{" "}
//               <span className="hero-name font-serif-display italic text-orange-500">
//                 Aman Chanchal
//               </span>
//             </h1>

//             <p className="hero-paragraph mt-5 max-w-xl text-balance text-base text-white/60 sm:text-lg">
//               Building brands, crafting digital experiences, and leading teams to create products
//               people love.
//             </p>

//             <div className="hero-cta mt-8 flex flex-col items-center gap-3 sm:flex-row">
//               <a
//                 href="/contact"
//                 className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all hover:scale-105 hover:bg-white/90"
//               >
//                 Contact Me
//               </a>

//               <button
//                 onClick={copyEmail}
//                 className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10"
//               >
//                 {EMAIL}
//                 <span className="text-white/50 transition-colors group-hover:text-white">
//                   {copied ? <Check size={15} /> : <Copy size={15} />}
//                 </span>
//               </button>
//             </div>

//             {/* Logo flow */}
//             <div className="hero-logos mt-12 flex w-full max-w-2xl flex-col items-center gap-4 md:mt-14">
//               <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/50">
//                 {LOGOS_LABEL}
//               </p>

//               <div
//                 className="w-full overflow-hidden"
//                 style={{
//                   maskImage:
//                     "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
//                   WebkitMaskImage:
//                     "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
//                 }}
//               >
//                 {/* Two identical groups → moving the track by -50% loops seamlessly */}
//                 <div className="hero-marquee-track flex w-max">
//                   {[0, 1].map((group) => (
//                     <div
//                       key={group}
//                       aria-hidden={group === 1}
//                       className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16"
//                     >
//                       {[...LOGOS, ...LOGOS].map((src, i) => (
//                         <img
//                           key={`${group}-${i}`}
//                           src={src}
//                           alt=""
//                           draggable={false}
//                           // brightness-0 + invert = clean white logos.
//                           // Remove those two classes to keep original colours.
//                           className="h-6 w-auto shrink-0 select-none opacity-70 brightness-0 invert md:h-9"
//                         />
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="hero-hint pointer-events-none absolute inset-x-0 bottom-6 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
//               Scroll
//               <span className="h-7 w-px bg-gradient-to-b from-white/50 to-transparent" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }











"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import { Check, Copy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

/* -------------------------------------------------------------------------- */
/*  Config                                                                    */
/* -------------------------------------------------------------------------- */

const EMAIL = "ceo.metamaster@gmail.com";

// /public/frames/frame_001.jpg … frame_080.jpg
const FRAME_COUNT = 80;
const frameSrc = (index: number) =>
  `/frames/frame_${String(index + 1).padStart(3, "0")}.jpg`;

// /public/icons/icon-1 … icon-7  (change the extension if yours differ)
const LOGOS = Array.from({ length: 7 }, (_, i) => `/icons/icon-${i + 1}.png`);
const LOGOS_LABEL = "Trusted by";

// The typewriter line: "I craft <role>" – types, holds, deletes, next role…
const TYPED_PREFIX = "I craft";
const ROLES = [
  "premium websites",
  "brand identities",
  "SaaS platforms",
  "mobile app designs",
  "digital products",
];
const LONGEST_ROLE = ROLES.reduce((a, b) => (b.length > a.length ? b : a), "");
const TYPE_SPEED = 0.07; // seconds per letter while typing
const DELETE_SPEED = 0.035; // seconds per letter while deleting
const HOLD_SECONDS = 1.6; // how long a finished role stays on screen

// Viewport-heights of scrolling while the frames play.
// (One extra screen is added automatically for the glide-up hand-off.)
const SCROLL_SCREENS = 4;
// Seconds for the logo strip to loop once.
const MARQUEE_SECONDS = 40;

/* -------------------------------------------------------------------------- */

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
/** Maps v from [a, b] to [0, 1], clamped. */
const range = (v: number, a: number, b: number) => clamp01((v - a) / (b - a));
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

interface HeroProps {
  /** Flip to true once the preloader has completely finished. */
  revealed?: boolean;
}

/**
 * Layout trick (no GSAP pin): a tall "track" holds a sticky, viewport-sized
 * hero. The track is pulled 100svh over the next section with a negative
 * bottom margin, so during the last screen of scrolling the next section
 * glides up OVER the hero, which stays perfectly still underneath.
 *
 * Requirements: the section after <Hero /> must be `position: relative` (or
 * any positioned) with an opaque background, and no ancestor of <Hero />
 * may have `overflow: hidden/auto` (that would break `position: sticky`).
 */
export function Hero({ revealed = true }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);

  const lenisRef = useRef<Lenis | null>(null);
  const playRef = useRef<(() => void) | null>(null);
  const playedRef = useRef(false);
  const revealedRef = useRef(revealed);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard not available – ignore silently
    }
  };

  useLayoutEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const intro = introRef.current;
    const scrim = scrimRef.current;
    const ctx2d = canvas?.getContext("2d");
    if (!track || !section || !canvas || !intro || !scrim || !ctx2d) return;

    let active = true;
    let heading: SplitText | undefined;
    let paragraph: SplitText | undefined;
    const cleanups: Array<() => void> = [];

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Cursor-driven effects only make sense with a real pointer.
    const finePointer = !reduceMotion && window.matchMedia("(pointer: fine)").matches;

    /* ------------------------------ Lenis + GSAP ------------------------------ */
    const lenis = reduceMotion ? null : new Lenis();
    lenisRef.current = lenis;
    // Hold scrolling until the preloader has completely finished.
    if (lenis && !revealedRef.current) lenis.stop();

    const tick = (time: number) => lenis?.raf(time * 1000);
    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }

    /* ------------------------------ Canvas frames ----------------------------- */
    const images: HTMLImageElement[] = [];
    let disposed = false;
    let size = { w: 0, h: 0 };
    let currentFrame = 0; // fractional: integer = base frame, fraction = crossfade

    const isReady = (img?: HTMLImageElement) =>
      !!img && img.complete && img.naturalWidth > 0;

    const nearestLoaded = (index: number) => {
      for (let i = index; i >= 0; i--) if (isReady(images[i])) return images[i];
      return null;
    };

    const drawCover = (img: HTMLImageElement, alpha: number) => {
      const { w, h } = size;
      const imageAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = w / h;
      let dw: number, dh: number, dx: number, dy: number;

      if (imageAspect > canvasAspect) {
        dh = h;
        dw = dh * imageAspect;
        dx = (w - dw) / 2;
        dy = 0;
      } else {
        dw = w;
        dh = dw / imageAspect;
        dx = 0;
        dy = (h - dh) / 2;
      }

      ctx2d.globalAlpha = alpha;
      ctx2d.drawImage(img, dx, dy, dw, dh);
    };

    const render = (exact: number = currentFrame) => {
      currentFrame = exact;
      if (!size.w || !size.h) return;

      const base = Math.min(Math.floor(exact), FRAME_COUNT - 1);
      const frac = exact - base;

      const baseImg = nearestLoaded(base);
      if (!baseImg) return;
      drawCover(baseImg, 1);

      // Blend into the next frame so 80 frames feel smoother than 80 hard cuts.
      const next = images[base + 1];
      if (frac > 0.02 && isReady(next)) drawCover(next, frac);

      ctx2d.globalAlpha = 1;
    };

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = section.clientWidth;
      const h = section.clientHeight;
      size = { w, h };
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx2d.imageSmoothingQuality = "high";
    };

    setCanvasSize();

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      img.decoding = "async";
      img.onload = () => {
        if (disposed) return;
        const base = Math.floor(currentFrame);
        if (i === base || i === base + 1) render();
      };
      img.onerror = () => {
        if (i === 0) console.warn(`[Hero] Could not load ${frameSrc(i)} – check /public/frames`);
      };
      img.src = frameSrc(i);
      images.push(img);
    }

    const resizeObserver = new ResizeObserver(() => {
      setCanvasSize();
      render();
    });
    resizeObserver.observe(section);

    /* ---------------------------- GSAP + ScrollTrigger ------------------------- */
    const gsapCtx = gsap.context((self) => {
      // The canvas settles to this scale after the intro. With a real pointer it
      // rests slightly zoomed-in so the cursor parallax never shows an edge.
      const restScale = finePointer ? 1.04 : 1;

      // Everything starts hidden; the intro is played once `revealed` is true.
      gsap.set(".hero-canvas", { scale: 1.12 });
      gsap.set(".hero-badge", { y: -12, opacity: 0 });
      gsap.set(".hero-heading", { opacity: 0 });
      gsap.set(".hero-typed", { y: 14, opacity: 0 });
      gsap.set(".hero-paragraph", { opacity: 0 });
      gsap.set(".hero-cta", { y: 16, opacity: 0 });
      gsap.set(".hero-logos", { y: 16, opacity: 0 });
      gsap.set(".hero-hint", { opacity: 0 });

      /* ---- Infinite logo flow (slows to a crawl on hover) ---- */
      const marquee = track.querySelector(".hero-marquee-track");
      const logosEl = track.querySelector<HTMLElement>(".hero-logos");
      const marqueeTween =
        marquee && !reduceMotion
          ? gsap.to(marquee, { xPercent: -50, duration: MARQUEE_SECONDS, ease: "none", repeat: -1 })
          : null;

      if (marqueeTween && logosEl) {
        const slow = () => gsap.to(marqueeTween, { timeScale: 0.2, duration: 0.6, overwrite: true });
        const normal = () => gsap.to(marqueeTween, { timeScale: 1, duration: 0.6, overwrite: true });
        logosEl.addEventListener("pointerenter", slow);
        logosEl.addEventListener("pointerleave", normal);
        cleanups.push(() => {
          logosEl.removeEventListener("pointerenter", slow);
          logosEl.removeEventListener("pointerleave", normal);
        });
      }

      /* ---- Scroll hint: the line gently breathes ---- */
      if (!reduceMotion) {
        gsap.to(".hero-hint-line", {
          scaleY: 0.35,
          transformOrigin: "top center",
          duration: 0.9,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      /* ---- Typewriter: "I craft <role>" – types, holds, deletes, repeats ---- */
      const typedEl = track.querySelector<HTMLElement>(".hero-typed-text");
      let typedTl: gsap.core.Timeline | null = null;

      if (typedEl) {
        if (reduceMotion) {
          typedEl.textContent = ROLES[0];
        } else {
          const state = { n: 0 };
          typedTl = gsap.timeline({ repeat: -1, paused: true });

          ROLES.forEach((word) => {
            const paint = () => {
              typedEl.textContent = word.slice(0, Math.round(state.n));
            };
            typedTl!
              .set(state, { n: 0 })
              .to(state, {
                n: word.length,
                duration: word.length * TYPE_SPEED,
                ease: "none",
                onUpdate: paint,
              })
              .to({}, { duration: HOLD_SECONDS })
              .to(state, {
                n: 0,
                duration: word.length * DELETE_SPEED,
                ease: "none",
                onUpdate: paint,
              })
              .to({}, { duration: 0.35 });
          });

          // blinking caret
          gsap.to(".hero-cursor", {
            opacity: 0,
            duration: 0.5,
            ease: "steps(1)",
            yoyo: true,
            repeat: -1,
          });
        }
      }

      /* ---- Pointer-driven life: tilt, glow, parallax, magnetic CTAs, letter wave ---- */
      let waveReady = false;
      const chars: { el: Element; base: string; hot: string }[] = [];

      if (finePointer) {
        const tilt = track.querySelector<HTMLElement>(".hero-tilt");
        const glow = track.querySelector<HTMLElement>(".hero-glow");
        const headingEl = track.querySelector<HTMLElement>(".hero-heading");
        const magnetEls = Array.from(track.querySelectorAll<HTMLElement>(".hero-magnet"));

        if (tilt) gsap.set(tilt, { transformPerspective: 900 });
        if (glow) gsap.set(glow, { xPercent: -50, yPercent: -50 });

        const tiltX = tilt && gsap.quickTo(tilt, "rotationX", { duration: 0.9, ease: "power3.out" });
        const tiltY = tilt && gsap.quickTo(tilt, "rotationY", { duration: 0.9, ease: "power3.out" });
        const glowX = glow && gsap.quickTo(glow, "x", { duration: 0.6, ease: "power3.out" });
        const glowY = glow && gsap.quickTo(glow, "y", { duration: 0.6, ease: "power3.out" });
        const bgX = gsap.quickTo(canvas, "x", { duration: 1.2, ease: "power3.out" });
        const bgY = gsap.quickTo(canvas, "y", { duration: 1.2, ease: "power3.out" });

        const magnets = magnetEls.map((el) => ({
          el,
          xTo: gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" }),
          yTo: gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" }),
        }));

        const pointer = { x: 0, y: 0 };
        let raf = 0;
        let waveActive = false;

        const resetWave = () => {
          waveActive = false;
          chars.forEach((c) =>
            gsap.to(c.el, { y: 0, color: c.base, duration: 0.5, ease: "power3.out", overwrite: "auto" })
          );
        };

        const process = () => {
          raf = 0;
          const r = section.getBoundingClientRect();
          const { x, y } = pointer;
          const nx = (x - r.left) / r.width - 0.5; // -0.5 … 0.5
          const ny = (y - r.top) / r.height - 0.5;

          // 1) title block tilts toward the cursor, glow follows it
          tiltY?.(nx * 7);
          tiltX?.(-ny * 5);
          glowX?.(x - r.left);
          glowY?.(y - r.top);

          // 2) scene drifts the opposite way (≤ 1% of the screen)
          bgX(-nx * r.width * 0.02);
          bgY(-ny * r.height * 0.02);

          // 3) CTAs are pulled toward the cursor when it gets close
          for (const m of magnets) {
            const b = m.el.getBoundingClientRect();
            const curX = Number(gsap.getProperty(m.el, "x")) || 0;
            const curY = Number(gsap.getProperty(m.el, "y")) || 0;
            const cx = b.left + b.width / 2 - curX;
            const cy = b.top + b.height / 2 - curY;
            const dx = x - cx;
            const dy = y - cy;
            const near = Math.hypot(dx, dy) < b.width / 2 + 50;
            m.xTo(near ? dx * 0.22 : 0);
            m.yTo(near ? dy * 0.22 : 0);
          }

          // 4) letters of the title lift & warm up as the cursor passes over them
          if (waveReady && headingEl) {
            const h = headingEl.getBoundingClientRect();
            const pad = 140;
            const inside =
              x > h.left - pad && x < h.right + pad && y > h.top - pad && y < h.bottom + pad;

            if (inside) {
              waveActive = true;
              for (const c of chars) {
                const b = c.el.getBoundingClientRect();
                const d = Math.hypot(x - (b.left + b.width / 2), y - (b.top + b.height / 2));
                const inf = clamp01(1 - d / 130);
                gsap.to(c.el, {
                  y: -6 * inf,
                  color: gsap.utils.interpolate(c.base, c.hot, inf),
                  duration: 0.35,
                  ease: "power2.out",
                  overwrite: "auto",
                });
              }
            } else if (waveActive) {
              resetWave();
            }
          }
        };

        const onMove = (e: PointerEvent) => {
          pointer.x = e.clientX;
          pointer.y = e.clientY;
          if (!raf) raf = window.requestAnimationFrame(process);
        };

        const onEnter = () => {
          if (glow) gsap.to(glow, { opacity: 1, duration: 0.6, overwrite: "auto" });
        };

        const onLeave = () => {
          if (glow) gsap.to(glow, { opacity: 0, duration: 0.6, overwrite: "auto" });
          tiltX?.(0);
          tiltY?.(0);
          bgX(0);
          bgY(0);
          magnets.forEach((m) => {
            m.xTo(0);
            m.yTo(0);
          });
          resetWave();
        };

        section.addEventListener("pointermove", onMove);
        section.addEventListener("pointerenter", onEnter);
        section.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          section.removeEventListener("pointermove", onMove);
          section.removeEventListener("pointerenter", onEnter);
          section.removeEventListener("pointerleave", onLeave);
          if (raf) window.cancelAnimationFrame(raf);
        });
      }

      /* ---- Scroll-driven part ---- */
      const update = (st: ScrollTrigger) => {
        const span = st.end - st.start;
        if (span <= 0) return;

        // The track scrolls (SCROLL_SCREENS + 1) screens while held by `sticky`:
        // the first SCROLL_SCREENS play the frames, the final one is the glide-up.
        const px = st.progress * span;
        const frameSpan = span * (SCROLL_SCREENS / (SCROLL_SCREENS + 1));
        const frameP = clamp01(px / frameSpan);
        const glideP = range(px, frameSpan, span);

        // 1) Background frames
        const exact = frameP * (FRAME_COUNT - 1);
        if (exact !== currentFrame) render(exact);

        // 2) Intro block recedes into the scene (translateZ), then fades out
        const introFade = 1 - range(frameP, 0.1, 0.22);
        gsap.set(intro, {
          z: -500 * range(frameP, 0, 0.25),
          opacity: introFade,
          pointerEvents: introFade > 0.15 ? "auto" : "none",
        });

        // 3) While the next section glides up over us, the hero stays put and
        //    just dims, like a curtain being drawn
        gsap.set(scrim, { opacity: 0.12 + 0.55 * easeInOut(glideP) });
      };

      const st = ScrollTrigger.create({
        trigger: track,
        start: "top top",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        onUpdate: update,
        onRefresh: update,
      });
      update(st);

      // Fonts → split text → prepare the entrance. It only PLAYS when the
      // preloader tells us it has fully finished (`revealed`).
      document.fonts.ready.then(() => {
        if (!active) return;

        try {
          heading = SplitText.create(".hero-heading", {
            type: "chars, words",
            mask: "chars",
            charsClass: "hero-char",
            wordsClass: "hero-word",
          });
          gsap.set(".hero-heading", { opacity: 1 });
          gsap.set(heading.chars, {
            yPercent: 120,
            rotate: 7,
            opacity: 0,
            transformOrigin: "0% 100%",
          });

          // remember each letter's resting colour for the hover wave
          heading.chars.forEach((el) => {
            const isName = !!el.closest(".hero-name");
            chars.push({
              el,
              base: getComputedStyle(el).color,
              hot: isName ? "rgb(255, 237, 213)" : "rgb(253, 186, 116)",
            });
          });
        } catch (err) {
          console.error("[Hero] SplitText failed on heading, falling back to a plain fade:", err);
          heading = undefined;
          gsap.set(".hero-heading", { opacity: 0 });
        }

        try {
          paragraph = SplitText.create(".hero-paragraph", {
            type: "lines",
            mask: "lines",
            linesClass: "hero-line",
          });
          gsap.set(".hero-paragraph", { opacity: 1 });
          gsap.set(paragraph.lines, { yPercent: 100 });
        } catch (err) {
          console.error("[Hero] SplitText failed on paragraph, falling back to a plain fade:", err);
          paragraph = undefined;
          gsap.set(".hero-paragraph", { opacity: 0 });
        }

        playRef.current = () => {
          if (playedRef.current) return;
          playedRef.current = true;

          self.add(() => {
            const tl = gsap.timeline({ delay: 0.1 });

            // scene settles in from a slight zoom
            tl.to(".hero-canvas", { scale: restScale, duration: 2.4, ease: "expo.out" }, 0);

            tl.to(".hero-badge", { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, 0.1);

            if (heading) {
              const inName = (el: Element) => !!el.closest(".hero-name");
              const plain = heading.chars.filter((c) => !inName(c));
              const name = heading.chars.filter(inName);

              // "Hii, I'm" rises letter by letter…
              tl.to(
                plain,
                { yPercent: 0, rotate: 0, opacity: 1, duration: 1, stagger: 0.03, ease: "expo.out" },
                0.25
              );
              // …then the name follows, a touch slower so it lands as the highlight
              tl.to(
                name,
                { yPercent: 0, rotate: 0, opacity: 1, duration: 1.2, stagger: 0.045, ease: "expo.out" },
                "<0.3"
              );
            } else {
              tl.to(".hero-heading", { opacity: 1, duration: 0.9, ease: "power3.out" }, 0.25);
            }

            // typewriter line appears, then starts typing
            tl.to(".hero-typed", { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, 1.0);
            tl.add(() => typedTl?.play(), 1.35);

            if (paragraph) {
              tl.to(
                paragraph.lines,
                { yPercent: 0, duration: 0.9, stagger: 0.09, ease: "power3.out" },
                1.2
              );
            } else {
              tl.to(".hero-paragraph", { opacity: 1, duration: 0.8, ease: "power3.out" }, 1.2);
            }

            tl.to(".hero-cta", { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, 1.4)
              .to(".hero-logos", { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, 1.6)
              .to(".hero-hint", { opacity: 1, duration: 0.7, ease: "power2.out" }, 1.95)
              // letters only react to the cursor once they've finished arriving
              .add(() => {
                waveReady = true;
              }, 2.4);
          });
        };

        if (revealedRef.current) playRef.current();
      });
    }, track);

    return () => {
      active = false;
      disposed = true;
      cleanups.forEach((fn) => fn());
      resizeObserver.disconnect();
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
      heading?.revert();
      paragraph?.revert();
      gsapCtx.revert(); // kills ScrollTrigger, marquee, typewriter, quickTo's, intro timeline

      if (lenis) {
        gsap.ticker.remove(tick);
        gsap.ticker.lagSmoothing(500, 33); // restore GSAP defaults
        lenis.destroy();
      }
      lenisRef.current = null;
      playRef.current = null;
      playedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Preloader completely gone → unlock scroll, re-measure, play the intro.
  useEffect(() => {
    revealedRef.current = revealed;
    if (revealed) {
      lenisRef.current?.start();
      ScrollTrigger.refresh();
      playRef.current?.();
    }
  }, [revealed]);

  return (
    <div
      ref={trackRef}
      id="top"
      className="relative"
      // +2 = the sticky hero's own screen + the glide-up screen.
      // marginBottom pulls the next section up over the hero's last screen.
      style={{ height: `${(SCROLL_SCREENS + 2) * 100}svh`, marginBottom: "-100svh" }}
    >
      <section
        ref={sectionRef}
        className="sticky top-0 h-svh w-full overflow-hidden bg-neutral-950"
      >
        {/* Scroll-scrubbed frame sequence */}
        <canvas
          ref={canvasRef}
          aria-hidden
          className="hero-canvas absolute inset-0 z-0 h-full w-full"
        />

        {/* Readability overlays */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/10 to-black/60" />
        <div
          ref={scrimRef}
          className="pointer-events-none absolute inset-0 z-[1] bg-black opacity-[0.12]"
        />

        {/* Perspective stage – the intro block travels along Z inside it */}
        <div className="absolute inset-0 z-10" style={{ perspective: "1000px" }}>
          <div
            ref={introRef}
            className="absolute inset-0 flex items-center justify-center px-5 pb-10 pt-20 sm:px-8"
          >
            {/* soft warm light that follows the cursor (fine pointers only) */}
            <div
              aria-hidden
              className="hero-glow pointer-events-none absolute left-0 top-0 h-[520px] w-[520px] rounded-full opacity-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(249,115,22,0.22) 0%, rgba(249,115,22,0) 65%)",
              }}
            />

            <div className="hero-tilt relative flex w-full flex-col items-center text-center">
              <span className="hero-badge inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-500" />
                </span>
                FOUNDER OR CEO OF META MASTER
              </span>

              <h1 className="hero-heading mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                Hii, I&apos;m{" "}
                <span className="hero-name font-serif-display italic text-orange-500">
                  Aman Chanchal
                </span>
              </h1>

              {/* Typewriter line. The invisible longest role reserves the width, so the
                  line never jitters sideways while words change. */}
              <p className="hero-typed mt-4 text-lg font-medium text-white/85 sm:text-xl md:text-2xl">
                <span className="sr-only">
                  {TYPED_PREFIX} {ROLES.join(", ")}
                </span>
                <span aria-hidden>{TYPED_PREFIX} </span>
                <span aria-hidden className="inline-grid text-left">
                  <span className="invisible col-start-1 row-start-1 whitespace-pre">
                    {LONGEST_ROLE}
                  </span>
                  <span className="col-start-1 row-start-1 whitespace-pre text-orange-400">
                    <span className="hero-typed-text" />
                    <span className="hero-cursor ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-orange-400" />
                  </span>
                </span>
              </p>

              <p className="hero-paragraph mt-5 max-w-xl text-balance text-base text-white/60 sm:text-lg">
                Building brands, crafting digital experiences, and leading teams to create products
                people love.
              </p>

              <div className="hero-cta mt-8 flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href="/contact"
                  // transition only scale + bg so it never fights GSAP's magnetic transform
                  className="hero-magnet group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-[scale,background-color] duration-300 hover:scale-105 hover:bg-white/90"
                >
                  Contact Me
                </a>

                <button
                  onClick={copyEmail}
                  className="hero-magnet group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-[background-color,border-color] hover:border-white/30 hover:bg-white/10"
                >
                  {EMAIL}
                  <span className="text-white/50 transition-colors group-hover:text-white">
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                  </span>
                </button>
              </div>

              {/* Logo flow */}
              <div className="hero-logos mt-12 flex w-full max-w-2xl flex-col items-center gap-4 md:mt-14">
                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/50">
                  {LOGOS_LABEL}
                </p>

                <div
                  className="w-full overflow-hidden"
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                  }}
                >
                  {/* Two identical groups → moving the track by -50% loops seamlessly */}
                  <div className="hero-marquee-track flex w-max">
                    {[0, 1].map((group) => (
                      <div
                        key={group}
                        aria-hidden={group === 1}
                        className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16"
                      >
                        {[...LOGOS, ...LOGOS].map((src, i) => (
                          <img
                            key={`${group}-${i}`}
                            src={src}
                            alt=""
                            draggable={false}
                            // brightness-0 + invert = clean white logos.
                            // Remove those two classes to keep original colours.
                            className="h-6 w-auto shrink-0 select-none opacity-70 brightness-0 invert md:h-9"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-hint pointer-events-none absolute inset-x-0 bottom-6 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
              Scroll
              <span className="hero-hint-line h-7 w-px bg-gradient-to-b from-white/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}