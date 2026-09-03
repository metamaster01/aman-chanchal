// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Star, Check, Copy } from "lucide-react";
// import { DraggableCardContainer, DraggableCard } from "@/components/ui/draggable-card";

// const EMAIL = "amanchanchal02@gmail.com";

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
//     <section id="top" className="relative overflow-hidden px-5 pb-28 pt-16 sm:px-8 sm:pt-24">
//       <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
//         <motion.span
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           custom={0}
//           className="rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-500"
//         >
//           FOUNDER OR CEO OF META MASTER
//         </motion.span>

//         <motion.h1
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           custom={1}
//           className="mt-6 text-4xl font-bold leading-tight text-neutral-950 sm:text-5xl md:text-6xl"
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
//           className="mt-5 max-w-xl text-balance text-base text-neutral-500 sm:text-lg"
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
//             href="#contact"
//             className="rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
//           >
//             Contact Me
//           </a>

//           <button
//             onClick={copyEmail}
//             className="group flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-3.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
//           >
//             {EMAIL}
//             <span className="text-neutral-400 transition-colors group-hover:text-neutral-700">
//               {copied ? <Check size={15} /> : <Copy size={15} />}
//             </span>
//           </button>
//         </motion.div>

//         {/* photo stack + stat */}
//         <div className="relative mt-20 flex w-full max-w-4xl flex-col items-center gap-10 sm:mt-28 sm:flex-row sm:items-end sm:justify-between">
//           <DraggableCardContainer className="h-[280px] w-full max-w-[340px] sm:h-[320px] sm:max-w-[560px] md:h-[380px] md:max-w-[640px]">
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

//           {/* <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="show"
//             custom={4}
//             className="flex shrink-0 flex-col items-center gap-1 sm:items-end"
//           >
//             <div className="flex gap-1 text-neutral-300">
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
//               ))}
//             </div>
//             <p className="text-3xl font-bold text-neutral-950">+3 Years</p>
//             <p className="text-sm text-neutral-500">Experience</p>
//           </motion.div> */}
//         </div>
//       </div>
//     </section>
//   );
// }






// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Star, Check, Copy } from "lucide-react";
// import { DraggableCardContainer, DraggableCard } from "@/components/ui/draggable-card";

// const EMAIL = "aman@metamaster.in";

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
//     <section id="top" className="relative overflow-hidden px-5 pb-28 pt-16 sm:px-8 sm:pt-24 md:pt-8 md:pb-4">
//       <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
//         <motion.span
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           custom={0}
//           className="rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-500"
//         >
//           FOUNDER OR CEO OF META MASTER
//         </motion.span>

//         <motion.h1
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           custom={1}
//           className="mt-6 text-4xl font-bold leading-tight text-neutral-950 sm:text-5xl md:text-6xl"
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
//           className="mt-5 max-w-xl text-balance text-base text-neutral-500 sm:text-lg"
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
//             className="rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
//           >
//             Contact Me
//           </a>

//           <button
//             onClick={copyEmail}
//             className="group flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-3.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
//           >
//             {EMAIL}
//             <span className="text-neutral-400 transition-colors group-hover:text-neutral-700">
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
//                   className="text-neutral-300 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-yellow-400"
//                 />
//               ))}
//             </div>
//             <p className="text-3xl font-bold text-neutral-950">+3 Years</p>
//             <p className="text-sm text-neutral-500">Experience</p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Check, Copy } from "lucide-react";
import { DraggableCardContainer, DraggableCard } from "@/components/ui/draggable-card";
import { WebcamPixelGrid } from "@/components/ui/webcam-pixel-grid";

const EMAIL = "aman@metamaster.in";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard not available – ignore silently
    }
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-neutral-950 px-5 pb-28 pt-16 sm:px-8 sm:pt-24 md:pt-32 md:pb-4"
    >
      {/* Live webcam pixel-grid background — props matched 1:1 to the
          reference demo (60x40 grid, maxElevation 50, real webcam
          colors, darken 0.6, near-black backgroundColor). bg-neutral-950
          on the <section> itself is just a fallback so the layout never
          flashes white before the canvas fades in / if camera access is
          denied. Absolutely positioned + this section's own
          `relative overflow-hidden` keeps it scoped to the hero only. */}
      <div className="absolute inset-0 z-0">
        <WebcamPixelGrid
          gridCols={60}
          gridRows={40}
          maxElevation={50}
          motionSensitivity={0.25}
          elevationSmoothing={0.2}
          colorMode="webcam"
          backgroundColor="#030303"
          mirror={true}
          gapRatio={0.05}
          invertColors={false}
          darken={0.6}
          borderColor="#ffffff"
          borderOpacity={0.06}
          className="h-full w-full"
        />
      </div>

      {/* Gradient overlay for text readability, same as the reference */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm"
        >
          FOUNDER OR CEO OF META MASTER
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Hii, I&apos;m{" "}
          <span className="font-serif-display italic text-orange-500">
            Aman Chanchal
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-5 max-w-xl text-balance text-base text-white/60 sm:text-lg"
        >
          Building brands, crafting digital experiences, and leading teams to
          create products people love.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-all hover:scale-105 hover:bg-white/90"
          >
            Contact Me
          </a>

          <button
            onClick={copyEmail}
            className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10"
          >
            {EMAIL}
            <span className="text-white/50 transition-colors group-hover:text-white">
              {copied ? <Check size={15} /> : <Copy size={15} />}
            </span>
          </button>
        </motion.div>

        {/* photo stack + stat — independent of each other now: the photo
            stack always centers on its own, the stat is pinned to the
            left edge and vertically centered against it on desktop */}
        <div className="relative mt-12 w-full sm:mt-28 md:mt-14">
          <DraggableCardContainer className="mx-auto h-[280px] w-full max-w-[340px] sm:h-[320px] sm:max-w-[560px] md:h-[380px] md:max-w-[640px]">
            <DraggableCard
              rotate={-8}
              zIndex={10}
              className="left-[2%] top-[14%] w-[42%] sm:left-[4%] sm:top-[10%] sm:w-[34%]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-900">
                <Image
                  src="/photos/photo-1.png"
                  alt="Aman outdoors at night"
                  fill
                  sizes="(max-width: 640px) 40vw, 220px"
                  className="pointer-events-none object-cover"
                  draggable={false}
                />
              </div>
            </DraggableCard>

            <DraggableCard
              rotate={0}
              zIndex={30}
              className="left-[29%] top-0 w-[44%] sm:left-[33%] sm:w-[34%]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-200">
                <Image
                  src="/photos/photo-2.png"
                  alt="Aman sitting with his dog"
                  fill
                  sizes="(max-width: 640px) 42vw, 230px"
                  className="pointer-events-none object-cover"
                  draggable={false}
                />
              </div>
              <p className="font-hand pt-2 text-center text-sm italic text-neutral-700">
                Hii, i&apos;m <span className="text-orange-500">aman</span>
              </p>
            </DraggableCard>

            <DraggableCard
              rotate={8}
              zIndex={20}
              className="right-[2%] top-[16%] w-[42%] sm:right-[4%] sm:top-[8%] sm:w-[34%]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-300">
                <Image
                  src="/photos/photo-3.png"
                  alt="Aman standing near a garden terrace"
                  fill
                  sizes="(max-width: 640px) 40vw, 220px"
                  className="pointer-events-none object-cover"
                  draggable={false}
                />
              </div>
            </DraggableCard>
          </DraggableCardContainer>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="group mt-10 flex flex-col items-center gap-1 sm:absolute sm:left-0 sm:top-1/2 sm:mt-0 sm:w-40 sm:-translate-y-1/2 sm:items-start sm:text-left"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill="currentColor"
                  strokeWidth={0}
                  style={{ transitionDelay: `${i * 60}ms` }}
                  className="text-white/25 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-yellow-400"
                />
              ))}
            </div>
            <p className="text-3xl font-bold text-white">+3 Years</p>
            <p className="text-sm text-white/60">Experience</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}