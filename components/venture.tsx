// // "use client";

// // import Image from "next/image";
// // import { motion } from "framer-motion";

// // /**
// //  * Positions are percentages of the collage container's width/height,
// //  * lifted directly from the reference layout — this keeps the scattered
// //  * arrangement proportional at every screen size instead of relying on
// //  * fixed pixel values.
// //  */
// // const COLLAGE_IMAGES = [
// //   { src: "/images/metamaster/image-1.png", alt: "City street with bicycle", left: "13.1%", top: "5.1%", width: "9.8%", height: "22.4%" },
// //   { src: "/images/metamaster/image-2.png", alt: "Commuter on a train platform", left: "32.6%", top: "16.1%", width: "7.5%", height: "9.3%" },
// //   { src: "/images/metamaster/image-3.png", alt: "Portrait against an orange wall", left: "45.8%", top: "19.2%", width: "8.4%", height: "13.9%" },
// //   { src: "/images/metamaster/image-4.png", alt: "Kyoto street with pagoda", left: "58.1%", top: "7.4%", width: "13.5%", height: "18.6%" },
// //   { src: "/images/metamaster/image-5.png", alt: "Portrait with curly hair", left: "79.6%", top: "27.9%", width: "9.3%", height: "13.9%" },
// //   { src: "/images/metamaster/image-6.png", alt: "Green mountain village street", left: "14.5%", top: "40.1%", width: "6.1%", height: "13.9%" },
// //   { src: "/images/metamaster/image-7.png", alt: "Portrait wearing sunglasses", left: "21.3%", top: "62.8%", width: "5.6%", height: "8.5%" },
// //   { src: "/images/metamaster/image-8.png", alt: "Moody mirror portrait", left: "17.0%", top: "81.3%", width: "5.3%", height: "10.5%" },
// //   { src: "/images/metamaster/image-9.png", alt: "Hiker on a mountain bridge", left: "33.1%", top: "73.8%", width: "6.4%", height: "15.5%" },
// //   { src: "/images/metamaster/image-10.png", alt: "Building with a green roof", left: "44.8%", top: "78.9%", width: "13.3%", height: "14.7%" },
// //   { src: "/images/metamaster/image-11.png", alt: "City building with a street sign", left: "75.8%", top: "70.0%", width: "11.0%", height: "18.3%" },
// // ];

// // export function Venture() {
// //   return (
// //     <section id="meta-master" className="px-5 py-20 sm:px-8 sm:py-28">
// //       <div className="mx-auto max-w-6xl">
// //         {/* Desktop / tablet — scattered collage with centered copy overlay */}
// //         <div className="relative mx-auto hidden aspect-[1071/646] w-full lg:block">
// //           {COLLAGE_IMAGES.map((img, i) => (
// //             <motion.div
// //               key={img.src}
// //               initial={{ opacity: 0, scale: 0.8 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               viewport={{ once: true, amount: 0.4 }}
// //               transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
// //               whileHover={{ scale: 1.05 }}
// //               className="absolute overflow-hidden rounded-lg bg-neutral-100 shadow-sm"
// //               style={{ left: img.left, top: img.top, width: img.width, height: img.height }}
// //             >
// //               <Image
// //                 src={img.src}
// //                 alt={img.alt}
// //                 fill
// //                 sizes="180px"
// //                 className="object-cover"
// //               />
// //             </motion.div>
// //           ))}

// //           <div className="absolute inset-0 flex items-center justify-center px-8">
// //             <VentureCopy />
// //           </div>
// //         </div>

// //         {/* Mobile — copy first, then a clean responsive grid of the same photos */}
// //         <div className="lg:hidden">
// //           <VentureCopy />

// //           <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4">
// //             {COLLAGE_IMAGES.map((img, i) => (
// //               <motion.div
// //                 key={img.src}
// //                 initial={{ opacity: 0, y: 16 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, amount: 0.4 }}
// //                 transition={{ duration: 0.45, delay: (i % 6) * 0.06, ease: "easeOut" }}
// //                 className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100"
// //               >
// //                 <Image
// //                   src={img.src}
// //                   alt={img.alt}
// //                   fill
// //                   sizes="(max-width: 640px) 33vw, 25vw"
// //                   className="object-cover"
// //                 />
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function VentureCopy() {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 16 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true, amount: 0.5 }}
// //       transition={{ duration: 0.6, ease: "easeOut" }}
// //       className="mx-auto max-w-xl text-center"
// //     >
// //       <span className="inline-block rounded-full border border-orange-300 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-500">
// //         VENTURE
// //       </span>

// //       <p className="mt-6 text-xl leading-snug text-neutral-900 sm:text-2xl">
// //         Built Meta Master into a creative design agency helping startups and
// //         businesses craft exceptional digital experiences through UI/UX
// //         design, branding, websites, SaaS products, and development.
// //       </p>

// //       <a
// //         href="https://metamaster.in"
// //         className="group mt-6 inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-sm font-medium text-neutral-900"
// //       >
// //         know more about Meta master
// //         <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
// //           ↗
// //         </span>
// //       </a>
// //     </motion.div>
// //   );
// // }








// "use client";

// import { useLayoutEffect, useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// /**
//  * Positions are percentages of the collage container's width/height,
//  * lifted directly from the reference layout — this keeps the scattered
//  * arrangement proportional at every screen size instead of relying on
//  * fixed pixel values.
//  */
// const COLLAGE_IMAGES = [
//   { src: "/images/metamaster/image-1.png", alt: "City street with bicycle", left: "13.1%", top: "5.1%", width: "9.8%", height: "22.4%" },
//   { src: "/images/metamaster/image-2.png", alt: "Commuter on a train platform", left: "32.6%", top: "16.1%", width: "7.5%", height: "9.3%" },
//   { src: "/images/metamaster/image-3.png", alt: "Portrait against an orange wall", left: "45.8%", top: "19.2%", width: "8.4%", height: "13.9%" },
//   { src: "/images/metamaster/image-4.png", alt: "Kyoto street with pagoda", left: "58.1%", top: "7.4%", width: "13.5%", height: "18.6%" },
//   { src: "/images/metamaster/image-5.png", alt: "Portrait with curly hair", left: "79.6%", top: "27.9%", width: "9.3%", height: "13.9%" },
//   { src: "/images/metamaster/image-6.png", alt: "Green mountain village street", left: "14.5%", top: "40.1%", width: "6.1%", height: "13.9%" },
//   { src: "/images/metamaster/image-7.png", alt: "Portrait wearing sunglasses", left: "21.3%", top: "62.8%", width: "5.6%", height: "8.5%" },
//   { src: "/images/metamaster/image-8.png", alt: "Moody mirror portrait", left: "17.0%", top: "81.3%", width: "5.3%", height: "10.5%" },
//   { src: "/images/metamaster/image-9.png", alt: "Hiker on a mountain bridge", left: "33.1%", top: "73.8%", width: "6.4%", height: "15.5%" },
//   { src: "/images/metamaster/image-10.png", alt: "Building with a green roof", left: "44.8%", top: "78.9%", width: "13.3%", height: "14.7%" },
//   { src: "/images/metamaster/image-11.png", alt: "City building with a street sign", left: "75.8%", top: "70.0%", width: "11.0%", height: "18.3%" },
// ];

// const HEADLINE =
//   "Built Meta Master into a creative design agency helping startups and businesses craft exceptional digital experiences through UI/UX design, branding, websites, SaaS products, and development.";

// // how much scroll (in viewport-heights) the pinned sequence gets to play
// // out over — bump this up if the zoom feels rushed, down if it drags
// const PIN_VIEWPORTS = 4;

// export function Venture() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const imagesRef = useRef<HTMLDivElement>(null);
//   const headerRef = useRef<HTMLHeadingElement>(null);
//   const maskRef = useRef<HTMLDivElement>(null);
//   const maskVideoRef = useRef<HTMLVideoElement>(null);
//   const ctaRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     // desktop only — see the component doc comment for why
//     if (!window.matchMedia("(min-width: 1024px)").matches) return;

//     let headlineSplit: SplitText | undefined;
//     let st: ScrollTrigger | undefined;
//     let active = true;

//     const ctx = gsap.context(() => {
//       gsap.set(ctaRef.current, { opacity: 0, y: 16 });
//       maskRef.current?.style.setProperty("--mask-size", "0%");
//       gsap.set(maskVideoRef.current, { scale: 1.5 });

//       document.fonts.ready.then(() => {
//         if (!active || !headerRef.current) return;

//         headlineSplit = SplitText.create(headerRef.current, {
//           type: "words",
//           wordsClass: "venture-word",
//         });
//         gsap.set(headlineSplit.words, { opacity: 0 });
//         const totalWords = headlineSplit.words.length;

//         st = ScrollTrigger.create({
//           trigger: section,
//           start: "top top",
//           end: `+=${window.innerHeight * PIN_VIEWPORTS}px`,
//           pin: true,
//           pinSpacing: true,
//           scrub: 1,
//           onUpdate: (self) => {
//             const progress = self.progress;

//             // 1. background collage — gentle parallax, fades out once
//             //    the mask starts taking over
//             gsap.set(imagesRef.current, {
//               y: `${-progress * 12}%`,
//               opacity: 1 - Math.min(1, progress / 0.35),
//             });

//             // 2. headline — reveals word-by-word early, holds, then
//             //    fades before the mask grows over it
//             if (progress <= 0.18) {
//               const revealProgress = progress / 0.18;
//               headlineSplit?.words.forEach((word, index) => {
//                 const wordThreshold = index / totalWords;
//                 gsap.set(word, { opacity: revealProgress >= wordThreshold ? 1 : 0 });
//               });
//               gsap.set(headerRef.current, { opacity: 1 });
//             } else if (progress < 0.3) {
//               gsap.set(headlineSplit!.words, { opacity: 1 });
//               gsap.set(headerRef.current, { opacity: 1 });
//             } else if (progress < 0.42) {
//               const fadeProgress = (progress - 0.3) / 0.12;
//               gsap.set(headerRef.current, { opacity: 1 - fadeProgress });
//             } else {
//               gsap.set(headerRef.current, { opacity: 0 });
//             }

//             // 3. the core illusion — mask grows while the video scales
//             //    down by roughly the same amount, so the shape's edge
//             //    feels like it's rushing toward the camera
//             if (progress >= 0.3 && progress <= 0.8) {
//               const maskProgress = (progress - 0.3) / 0.5;
//               const eased = maskProgress * maskProgress * (3 - 2 * maskProgress);
//               maskRef.current?.style.setProperty("--mask-size", `${eased * 420}%`);
//               gsap.set(maskVideoRef.current, { scale: 1.5 - eased * 0.5 });
//             } else if (progress < 0.3) {
//               maskRef.current?.style.setProperty("--mask-size", "0%");
//               gsap.set(maskVideoRef.current, { scale: 1.5 });
//             } else {
//               maskRef.current?.style.setProperty("--mask-size", "420%");
//               gsap.set(maskVideoRef.current, { scale: 1 });
//             }

//             // 4. CTA — only once the video has fully taken over
//             if (progress > 0.82) {
//               const ctaProgress = Math.min(1, (progress - 0.82) / 0.18);
//               gsap.set(ctaRef.current, {
//                 opacity: ctaProgress,
//                 y: 16 * (1 - ctaProgress),
//               });
//             } else {
//               gsap.set(ctaRef.current, { opacity: 0, y: 16 });
//             }
//           },
//         });
//       });
//     }, section);

//     return () => {
//       active = false;
//       headlineSplit?.revert();
//       st?.kill();
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <>
//       {/* DESKTOP — the full pinned zoom-through-the-logo sequence */}
//       <section
//         id="meta-master"
//         ref={sectionRef}
//         className="relative hidden overflow-hidden rounded-t-[2rem] bg-neutral-950 shadow-[0_-40px_80px_rgba(0,0,0,0.55)] lg:block lg:rounded-t-[3rem]"
//         style={{ height: "100svh" }}
//       >
//         {/* scattered collage */}
//         <div ref={imagesRef} className="absolute inset-0">
//           {COLLAGE_IMAGES.map((img) => (
//             <div
//               key={img.src}
//               className="absolute overflow-hidden rounded-lg bg-neutral-800"
//               style={{ left: img.left, top: img.top, width: img.width, height: img.height }}
//             >
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 fill
//                 sizes="180px"
//                 className="object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* headline */}
//         <div className="absolute inset-0 z-[1] flex items-center justify-center px-10">
//           <h2
//             ref={headerRef}
//             className="max-w-3xl text-center text-2xl font-semibold leading-snug text-white sm:text-4xl md:text-5xl"
//           >
//             {HEADLINE}
//           </h2>
//         </div>

//         {/* the mask reveal — a growing cutout of /venture/logo-mask.svg
//             with the video showing through it */}
//         <div
//           ref={maskRef}
//           className="pointer-events-none absolute inset-0 z-10 [mask-image:url('/venture/logo-mask.svg')] [-webkit-mask-image:url('/venture/logo-mask.svg')] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-position:center] [mask-size:var(--mask-size)] [-webkit-mask-size:var(--mask-size)]"
//           style={{ "--mask-size": "0%" } as React.CSSProperties}
//         >
//           <video
//             ref={maskVideoRef}
//             className="h-full w-full object-cover"
//             src="/venture/showreel.mp4"
//             poster="/venture/showreel-poster.jpg"
//             autoPlay
//             muted
//             loop
//             playsInline
//           />
//         </div>

//         {/* CTA — appears once the video has taken over the screen */}
//         <div
//           ref={ctaRef}
//           className="absolute inset-x-0 bottom-16 z-20 flex justify-center px-6"
//         >
//           <a
//             href="https://metamaster.in"
//             className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105"
//           >
//             know more about Meta Master
//             <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//               ↗
//             </span>
//           </a>
//         </div>
//       </section>

//       {/* MOBILE — simple static fallback, no pinning/scroll-jacking */}
//       <section className="relative overflow-hidden rounded-t-[2rem] bg-neutral-950 px-5 py-20 shadow-[0_-40px_80px_rgba(0,0,0,0.55)] lg:hidden">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="mx-auto max-w-xl text-center"
//         >
//           <span className="inline-block rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-400">
//             VENTURE
//           </span>
//           <p className="mt-6 text-xl leading-snug text-white sm:text-2xl">
//             {HEADLINE}
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.96 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
//           className="relative mx-auto mt-10 aspect-video w-full max-w-2xl overflow-hidden rounded-2xl bg-neutral-800"
//         >
//           <video
//             className="h-full w-full object-cover"
//             src="/venture/showreel.mp4"
//             poster="/venture/showreel-poster.jpg"
//             autoPlay
//             muted
//             loop
//             playsInline
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
//           className="mt-8 flex justify-center"
//         >
//           <a
//             href="https://metamaster.in"
//             className="group inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm font-medium text-white"
//           >
//             know more about Meta Master
//             <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//               ↗
//             </span>
//           </a>
//         </motion.div>
//       </section>
//     </>
//   );
// }








// "use client";

// import { useLayoutEffect, useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// const COLLAGE_IMAGES = [
//   { src: "/images/metamaster/image-1.png", alt: "City street with bicycle", left: "13.1%", top: "5.1%", width: "9.8%", height: "22.4%" },
//   { src: "/images/metamaster/image-2.png", alt: "Commuter on a train platform", left: "32.6%", top: "16.1%", width: "7.5%", height: "9.3%" },
//   { src: "/images/metamaster/image-3.png", alt: "Portrait against an orange wall", left: "45.8%", top: "19.2%", width: "8.4%", height: "13.9%" },
//   { src: "/images/metamaster/image-4.png", alt: "Kyoto street with pagoda", left: "58.1%", top: "7.4%", width: "13.5%", height: "18.6%" },
//   { src: "/images/metamaster/image-5.png", alt: "Portrait with curly hair", left: "79.6%", top: "27.9%", width: "9.3%", height: "13.9%" },
//   { src: "/images/metamaster/image-6.png", alt: "Green mountain village street", left: "14.5%", top: "40.1%", width: "6.1%", height: "13.9%" },
//   { src: "/images/metamaster/image-7.png", alt: "Portrait wearing sunglasses", left: "21.3%", top: "62.8%", width: "5.6%", height: "8.5%" },
//   { src: "/images/metamaster/image-8.png", alt: "Moody mirror portrait", left: "17.0%", top: "81.3%", width: "5.3%", height: "10.5%" },
//   { src: "/images/metamaster/image-9.png", alt: "Hiker on a mountain bridge", left: "33.1%", top: "73.8%", width: "6.4%", height: "15.5%" },
//   { src: "/images/metamaster/image-10.png", alt: "Building with a green roof", left: "44.8%", top: "78.9%", width: "13.3%", height: "14.7%" },
//   { src: "/images/metamaster/image-11.png", alt: "City building with a street sign", left: "75.8%", top: "70.0%", width: "11.0%", height: "18.3%" },
// ];

// const HEADLINE =
//   "From a single freelance project to a creative agency helping brands grow.";

// // how much scroll (in viewport-heights) the pinned sequence gets to play
// // out over — raised from 4 to 6 specifically to slow the zoom down
// const PIN_VIEWPORTS = 6;

// export function Venture() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const imagesRef = useRef<HTMLDivElement>(null);
//   const headerRef = useRef<HTMLHeadingElement>(null);
//   const maskRef = useRef<HTMLDivElement>(null);
//   const maskVideoRef = useRef<HTMLVideoElement>(null);
//   const ctaRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     // desktop only — see the component doc comment for why
//     if (!window.matchMedia("(min-width: 1024px)").matches) return;

//     let headlineSplit: SplitText | undefined;
//     let st: ScrollTrigger | undefined;
//     let active = true;

//     const ctx = gsap.context(() => {
//       gsap.set(ctaRef.current, { opacity: 0, y: 16 });
//       maskRef.current?.style.setProperty("--mask-size", "0%");
//       gsap.set(maskVideoRef.current, { scale: 1.5 });

//       document.fonts.ready.then(() => {
//         if (!active || !headerRef.current) return;

//         headlineSplit = SplitText.create(headerRef.current, {
//           type: "words",
//           wordsClass: "venture-word",
//         });
//         gsap.set(headlineSplit.words, { opacity: 0 });
//         const totalWords = headlineSplit.words.length;

//         st = ScrollTrigger.create({
//           trigger: section,
//           start: "top top",
//           end: `+=${window.innerHeight * PIN_VIEWPORTS}px`,
//           pin: true,
//           pinSpacing: true,
//           scrub: 1,
//           onUpdate: (self) => {
//             const progress = self.progress;

//             // 1. background collage — gentle parallax, fades out once
//             //    the mask starts taking over
//             gsap.set(imagesRef.current, {
//               y: `${-progress * 12}%`,
//               opacity: 1 - Math.min(1, progress / 0.35),
//             });

//             // 2. headline — reveals word-by-word early, holds, then
//             //    fades before the mask grows over it
//             if (progress <= 0.18) {
//               const revealProgress = progress / 0.18;
//               headlineSplit?.words.forEach((word, index) => {
//                 const wordThreshold = index / totalWords;
//                 gsap.set(word, { opacity: revealProgress >= wordThreshold ? 1 : 0 });
//               });
//               gsap.set(headerRef.current, { opacity: 1 });
//             } else if (progress < 0.32) {
//               gsap.set(headlineSplit!.words, { opacity: 1 });
//               gsap.set(headerRef.current, { opacity: 1 });
//             } else if (progress < 0.45) {
//               const fadeProgress = (progress - 0.32) / 0.13;
//               gsap.set(headerRef.current, { opacity: 1 - fadeProgress });
//             } else {
//               gsap.set(headerRef.current, { opacity: 0 });
//             }

//             // 3. the core illusion — mask grows while the video scales
//             //    down by roughly the same amount. Widened to 0.35–0.88
//             //    (was 0.3–0.8) so, combined with the longer pin above,
//             //    the whole zoom reads noticeably more gradual.
//             if (progress >= 0.35 && progress <= 0.88) {
//               const maskProgress = (progress - 0.35) / 0.53;
//               const eased = maskProgress * maskProgress * (3 - 2 * maskProgress);
//               maskRef.current?.style.setProperty("--mask-size", `${eased * 420}%`);
//               gsap.set(maskVideoRef.current, { scale: 1.5 - eased * 0.5 });
//             } else if (progress < 0.35) {
//               maskRef.current?.style.setProperty("--mask-size", "0%");
//               gsap.set(maskVideoRef.current, { scale: 1.5 });
//             } else {
//               maskRef.current?.style.setProperty("--mask-size", "420%");
//               gsap.set(maskVideoRef.current, { scale: 1 });
//             }

//             // 4. CTA — only once the video has fully taken over
//             if (progress > 0.9) {
//               const ctaProgress = Math.min(1, (progress - 0.9) / 0.1);
//               gsap.set(ctaRef.current, {
//                 opacity: ctaProgress,
//                 y: 16 * (1 - ctaProgress),
//               });
//             } else {
//               gsap.set(ctaRef.current, { opacity: 0, y: 16 });
//             }
//           },
//         });
//       });
//     }, section);

//     return () => {
//       active = false;
//       headlineSplit?.revert();
//       st?.kill();
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <>
//       {/* DESKTOP — the full pinned zoom-through-the-logo sequence */}
//       <section
//         id="meta-master"
//         ref={sectionRef}
//         // dark radial gradient instead of a flat fill — flat black next
//         // to a full-bleed video read empty; this gives it some depth
//         // without breaking the alternating light/dark rhythm with About.
//         className="relative hidden overflow-hidden rounded-t-[2rem] bg-[radial-gradient(ellipse_at_top,#1C1A17_0%,#0D0C0A_70%)] shadow-[0_-40px_80px_rgba(0,0,0,0.55)] lg:block lg:rounded-t-[3rem]"
//         style={{ height: "100svh" }}
//       >
//         {/* scattered collage */}
//         <div ref={imagesRef} className="absolute inset-0">
//           {COLLAGE_IMAGES.map((img) => (
//             <div
//               key={img.src}
//               className="absolute overflow-hidden rounded-lg bg-neutral-800"
//               style={{ left: img.left, top: img.top, width: img.width, height: img.height }}
//             >
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 fill
//                 sizes="180px"
//                 className="object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* headline */}
//         <div className="absolute inset-0 z-[1] flex items-center justify-center px-10">
//           <h2
//             ref={headerRef}
//             className="max-w-2xl text-center text-3xl font-semibold leading-snug text-white sm:text-4xl md:text-5xl"
//           >
//             {HEADLINE}
//           </h2>
//         </div>

//         {/* the mask reveal — a growing cutout of /venture/logo-mask.svg
//             with the video showing through it */}
//         <div
//           ref={maskRef}
//           className="pointer-events-none absolute inset-0 z-10 [mask-image:url('/venture/logo-mask.svg')] [-webkit-mask-image:url('/venture/logo-mask.svg')] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-position:center] [mask-size:var(--mask-size)] [-webkit-mask-size:var(--mask-size)]"
//           style={{ "--mask-size": "0%" } as React.CSSProperties}
//         >
//           <video
//             ref={maskVideoRef}
//             className="h-full w-full object-cover"
//             src="/venture/showreel.mp4"
//             poster="/venture/showreel-poster.jpg"
//             autoPlay
//             muted
//             loop
//             playsInline
//           />
//         </div>

//         {/* CTA — appears once the video has taken over the screen */}
//         <div
//           ref={ctaRef}
//           className="absolute inset-x-0 bottom-16 z-20 flex justify-center px-6"
//         >
//           <a
//             href="https://metamaster.in"
//             className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105"
//           >
//             know more about Meta Master
//             <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//               ↗
//             </span>
//           </a>
//         </div>
//       </section>

//       {/* MOBILE — simple static fallback, no pinning/scroll-jacking */}
//       <section className="relative overflow-hidden rounded-t-[2rem] bg-[radial-gradient(ellipse_at_top,#1C1A17_0%,#0D0C0A_70%)] px-5 py-20 shadow-[0_-40px_80px_rgba(0,0,0,0.55)] lg:hidden">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="mx-auto max-w-xl text-center"
//         >
//           <span className="inline-block rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-400">
//             VENTURE
//           </span>
//           <p className="mt-6 text-xl leading-snug text-white sm:text-2xl">
//             {HEADLINE}
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.96 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
//           className="relative mx-auto mt-10 aspect-video w-full max-w-2xl overflow-hidden rounded-2xl bg-neutral-800"
//         >
//           <video
//             className="h-full w-full object-cover"
//             src="/venture/showreel.mp4"
//             poster="/venture/showreel-poster.jpg"
//             autoPlay
//             muted
//             loop
//             playsInline
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
//           className="mt-8 flex justify-center"
//         >
//           <a
//             href="https://metamaster.in"
//             className="group inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm font-medium text-white"
//           >
//             know more about Meta Master
//             <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//               ↗
//             </span>
//           </a>
//         </motion.div>
//       </section>
//     </>
//   );
// }



"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const COLLAGE_IMAGES = [
  { src: "/images/metamaster/image-1.png", alt: "City street with bicycle", left: "13.1%", top: "5.1%", width: "9.8%", height: "22.4%" },
  { src: "/images/metamaster/image-2.png", alt: "Commuter on a train platform", left: "32.6%", top: "16.1%", width: "7.5%", height: "9.3%" },
  { src: "/images/metamaster/image-3.png", alt: "Portrait against an orange wall", left: "45.8%", top: "19.2%", width: "8.4%", height: "13.9%" },
  { src: "/images/metamaster/image-4.png", alt: "Kyoto street with pagoda", left: "58.1%", top: "7.4%", width: "13.5%", height: "18.6%" },
  { src: "/images/metamaster/image-5.png", alt: "Portrait with curly hair", left: "79.6%", top: "27.9%", width: "9.3%", height: "13.9%" },
  { src: "/images/metamaster/image-6.png", alt: "Green mountain village street", left: "14.5%", top: "40.1%", width: "6.1%", height: "13.9%" },
  { src: "/images/metamaster/image-7.png", alt: "Portrait wearing sunglasses", left: "21.3%", top: "62.8%", width: "5.6%", height: "8.5%" },
  { src: "/images/metamaster/image-8.png", alt: "Moody mirror portrait", left: "17.0%", top: "81.3%", width: "5.3%", height: "10.5%" },
  { src: "/images/metamaster/image-9.png", alt: "Hiker on a mountain bridge", left: "33.1%", top: "73.8%", width: "6.4%", height: "15.5%" },
  { src: "/images/metamaster/image-10.png", alt: "Building with a green roof", left: "44.8%", top: "78.9%", width: "13.3%", height: "14.7%" },
  { src: "/images/metamaster/image-11.png", alt: "City building with a street sign", left: "75.8%", top: "70.0%", width: "11.0%", height: "18.3%" },
];

const HEADLINE =
  "From a single freelance project to a creative agency helping brands grow.";

const PIN_VIEWPORTS = 8;

export function Venture() {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const maskVideoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // desktop only — see the component doc comment for why
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    let headlineSplit: SplitText | undefined;
    let active = true;

    const ctx = gsap.context(() => {
      gsap.set(ctaRef.current, { opacity: 0, y: 16 });
      gsap.set(titleRef.current, { opacity: 0, y: 12 });
      gsap.set(frameRef.current, { scale: 1, borderRadius: 0 });
      maskRef.current?.style.setProperty("--mask-size", "0%");
      gsap.set(maskVideoRef.current, { scale: 1.5 });

      // build the word-split whenever fonts settle — but critically,
      // this does NOT gate pin creation below. The pin has to exist
      // synchronously on mount so the page's scrollable height is
      // correct before any section after this one calculates its own
      // ScrollTrigger start position.
      document.fonts.ready.then(() => {
        if (!active || !headerRef.current) return;
        headlineSplit = SplitText.create(headerRef.current, {
          type: "words",
          wordsClass: "venture-word",
        });
        gsap.set(headlineSplit.words, { opacity: 0 });
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${window.innerHeight * PIN_VIEWPORTS}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          // 1. background collage — gentle parallax, fades out early
          gsap.set(imagesRef.current, {
            y: `${-progress * 12}%`,
            opacity: 1 - Math.min(1, progress / 0.28),
          });

          // 2. headline — reveals word-by-word, holds, fades. Safe to
          //    read headlineSplit even before it exists (optional
          //    chaining) since the pin itself doesn't wait on it.
          const words = headlineSplit?.words;
          if (progress <= 0.14) {
            const revealProgress = progress / 0.14;
            if (words) {
              const total = words.length;
              words.forEach((word, index) => {
                gsap.set(word, { opacity: revealProgress >= index / total ? 1 : 0 });
              });
            }
            gsap.set(headerRef.current, { opacity: 1 });
          } else if (progress < 0.22) {
            if (words) gsap.set(words, { opacity: 1 });
            gsap.set(headerRef.current, { opacity: 1 });
          } else if (progress < 0.3) {
            const fadeProgress = (progress - 0.22) / 0.08;
            gsap.set(headerRef.current, { opacity: 1 - fadeProgress });
          } else {
            gsap.set(headerRef.current, { opacity: 0 });
          }

          // 3. the core illusion — mask grows while the video scales
          //    down. Starts at 0.26, OVERLAPPING the headline's fade
          //    (which ends at 0.3) on purpose — starting it only after
          //    the text had fully gone was leaving a dead, blank-screen
          //    moment in between.
          if (progress >= 0.26 && progress <= 0.74) {
            const maskProgress = (progress - 0.26) / 0.48;
            const eased = maskProgress * maskProgress * (3 - 2 * maskProgress);
            maskRef.current?.style.setProperty("--mask-size", `${eased * 420}%`);
            gsap.set(maskVideoRef.current, { scale: 1.5 - eased * 0.5 });
          } else if (progress < 0.26) {
            maskRef.current?.style.setProperty("--mask-size", "0%");
            gsap.set(maskVideoRef.current, { scale: 1.5 });
          } else {
            maskRef.current?.style.setProperty("--mask-size", "420%");
            gsap.set(maskVideoRef.current, { scale: 1 });
          }

          // 4. hold the full-bleed video (0.74–0.84: nothing happens,
          //    on purpose — this is the "actually watch it" window),
          //    then shrink into a bordered, rounded frame (0.84–0.92)
          if (progress >= 0.84 && progress <= 0.92) {
            const shrinkT = (progress - 0.84) / 0.08;
            const eased = shrinkT * shrinkT * (3 - 2 * shrinkT);
            gsap.set(frameRef.current, {
              scale: 1 - eased * 0.4,
              borderRadius: eased * 32,
            });
          } else if (progress < 0.84) {
            gsap.set(frameRef.current, { scale: 1, borderRadius: 0 });
          } else {
            gsap.set(frameRef.current, { scale: 0.6, borderRadius: 32 });
          }

          // 5. title label, once the frame has settled
          if (progress > 0.92) {
            const t = Math.min(1, (progress - 0.92) / 0.05);
            gsap.set(titleRef.current, { opacity: t, y: 12 * (1 - t) });
          } else {
            gsap.set(titleRef.current, { opacity: 0, y: 12 });
          }

          // 6. CTA, right after the title
          if (progress > 0.95) {
            const t = Math.min(1, (progress - 0.95) / 0.05);
            gsap.set(ctaRef.current, { opacity: t, y: 16 * (1 - t) });
          } else {
            gsap.set(ctaRef.current, { opacity: 0, y: 16 });
          }
        },
      });
    }, section);

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      active = false;
      window.removeEventListener("load", handleLoad);
      headlineSplit?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* DESKTOP — the full pinned zoom-through-the-logo sequence */}
      <section
        id="meta-master"
        ref={sectionRef}
        // rounded top corner kept for visual consistency down the page;
        // the heavy "glide over the pinned hero" shadow was About's own
        // signature move and didn't need repeating here.
        className="relative hidden overflow-hidden rounded-t-[0.75rem] bg-[radial-gradient(ellipse_at_top,#F3ECDD_0%,#E7DCC5_40%)] lg:block lg:rounded-t-[1.5rem]"
        style={{ height: "100svh" }}
      >
        <div ref={imagesRef} className="absolute inset-0">
          {COLLAGE_IMAGES.map((img) => (
            <div
              key={img.src}
              className="absolute overflow-hidden rounded-lg bg-neutral-200"
              style={{ left: img.left, top: img.top, width: img.width, height: img.height }}
            >
              <Image src={img.src} alt={img.alt} fill sizes="180px" className="object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 z-[1] flex items-center justify-center px-10">
          <h2
            ref={headerRef}
            className="max-w-2xl text-center text-3xl font-semibold leading-snug text-neutral-900 sm:text-4xl md:text-5xl"
          >
            {HEADLINE}
          </h2>
        </div>

        <div
          ref={frameRef}
          className="pointer-events-none absolute inset-0 z-10 origin-center overflow-hidden"
        >
          <div
            ref={maskRef}
            className="absolute inset-0 h-full w-full [mask-image:url('/venture/logo-mask.svg')] [-webkit-mask-image:url('/venture/logo-mask.svg')] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-position:center] [mask-size:var(--mask-size)] [-webkit-mask-size:var(--mask-size)]"
            style={{ "--mask-size": "0%" } as React.CSSProperties}
          >
            <video
              ref={maskVideoRef}
              className="h-full w-full object-cover"
              src="/venture/showreel.mp4"
              poster="/venture/showreel-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

        <p
          ref={titleRef}
          className="absolute inset-x-0 bottom-40 z-20 text-center text-sm font-medium uppercase tracking-widest text-neutral-900/70"
        >
          Meta Master — Behind the Scenes
        </p>

        <div ref={ctaRef} className="absolute inset-x-0 bottom-16 z-20 flex justify-center px-6">
          <a
            href="https://metamaster.in"
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            know more about Meta Master
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </section>

      {/* MOBILE — simple static fallback, no pinning/scroll-jacking */}
      <section className="relative overflow-hidden rounded-t-[2rem] bg-[radial-gradient(ellipse_at_top,#F3ECDD_0%,#E7DCC5_70%)] px-5 py-20 lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="inline-block rounded-full border border-neutral-300 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-600">
            VENTURE
          </span>
          <p className="mt-6 text-xl leading-snug text-neutral-900 sm:text-2xl">{HEADLINE}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto mt-10 aspect-video w-full max-w-2xl overflow-hidden rounded-2xl bg-neutral-200"
        >
          <video
            className="h-full w-full object-cover"
            src="/venture/showreel.mp4"
            poster="/venture/showreel-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="https://metamaster.in"
            className="group inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-sm font-medium text-neutral-900"
          >
            know more about Meta Master
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </motion.div>
      </section>
    </>
  );
}