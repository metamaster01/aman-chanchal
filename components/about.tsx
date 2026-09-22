// "use client";

// import { motion } from "framer-motion";

// const TIMELINE = [
//   {
//     icon: "🙂",
//     year: "2022",
//     title: "Started My Design Journey",
//     description:
//       "Began learning UI/UX design, branding, and web technologies while working on freelance projects.",
//   },
//   {
//     icon: "😊",
//     year: "2023",
//     title: "Worked With Growing Businesses",
//     description:
//       "Collaborated with startups and local businesses, delivering websites, mobile app designs, and branding solutions.",
//   },
//   {
//     icon: "😊",
//     year: "2024",
//     title: "Founded Meta Master",
//     description:
//       "Established Meta Master with the vision of helping businesses build premium digital products through strategy, creativity, and technology.",
//   },
//   {
//     icon: "😊",
//     year: "2025",
//     title: "Expanded Into a Creative Agency",
//     description:
//       "Built a multidisciplinary team of designers and developers while serving clients across multiple industries.",
//   },
//   {
//     icon: "😊",
//     year: "TODAY",
//     title: "Leading Innovation",
//     description:
//       "Continuing to lead Meta Master by delivering exceptional digital experiences and helping brands grow with thoughtful design and modern technology.",
//   },
// ];

// export function About() {
//   return (
//     <section id="portfolio" className="px-5 py-20 sm:px-8 sm:py-28">
//       <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-start lg:gap-20">
//         {/* Left column — sticks in place while the timeline scrolls past it */}
//         <div className="lg:sticky lg:top-28 lg:self-start">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//           >
//             <span className="inline-block rounded-full border border-orange-300 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-500">
//               ABOUT ME
//             </span>

//             <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-neutral-800 sm:text-base">
//               <p>
//                 Hello, I&apos;m Aman Chanchal, the Founder &amp; CEO of Meta
//                 Master, a creative design agency specializing in UI/UX design,
//                 branding, websites, SaaS platforms, and digital product
//                 development.
//               </p>
//               <p>
//                 My journey began with a passion for solving problems through
//                 design. What started as freelance projects evolved into
//                 building Meta Master, where I now lead a talented team
//                 dedicated to creating impactful digital experiences.
//               </p>
//               <p>
//                 Today, I collaborate with startups, entrepreneurs, and
//                 established businesses to transform ideas into products that
//                 are intuitive, visually engaging, and built for growth.
//               </p>
//             </div>

//             <a
//               href="/about"
//               className="group mt-8 inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-sm font-medium text-neutral-900"
//             >
//               know more about me
//               <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//                 ↗
//               </span>
//             </a>
//           </motion.div>
//         </div>

//         {/* Right column — timeline items fade/slide in as they scroll into view */}
//         <div className="relative">
//           {TIMELINE.map((item, i) => {
//             const isLast = i === TIMELINE.length - 1;
//             return (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 32 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
//                 className="relative flex gap-5"
//               >
//                 {/* icon + connecting line */}
//                 <div className="flex flex-col items-center">
//                   <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-lg">
//                     {item.icon}
//                   </span>
//                   {!isLast && (
//                     <motion.span
//                       initial={{ scaleY: 0 }}
//                       whileInView={{ scaleY: 1 }}
//                       viewport={{ once: true, amount: 0.5 }}
//                       transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
//                       style={{ transformOrigin: "top" }}
//                       className="mt-1 w-px flex-1 bg-orange-300"
//                     />
//                   )}
//                 </div>

//                 {/* content */}
//                 <div className={isLast ? "pb-0" : "pb-12"}>
//                   <div className="flex items-start justify-between gap-4">
//                     <h3 className="text-lg font-semibold text-neutral-950 sm:text-xl">
//                       {item.title}
//                     </h3>
//                     <span className="shrink-0 pt-1 text-xs font-medium tracking-wide text-neutral-400 sm:text-sm">
//                       {item.year}
//                     </span>
//                   </div>
//                   <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-[15px]">
//                     {item.description}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }





// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ScrollBee } from "@/components/ui/Scroll-Bee";

// interface TimelineImage {
//   src: string;
//   alt: string;
// }

// interface TimelineEntry {
//   year: string;
//   title: string;
//   /** optional — when present, renders under the title/year as a short line */
//   description?: string;
//   /** "lg" gets a bit more width than the default, for visual rhythm */
//   size?: "md" | "lg";
//   image: TimelineImage;
//   /** optional second, smaller photo peeking off one corner of the main one */
//   accentImage?: TimelineImage;
// }

// const TIMELINE: TimelineEntry[] = [
//   {
//     year: "2022",
//     title: "Started My Design Journey",
//     image: { src: "/about/image-1.jpg", alt: "Early design work, 2022" },
//   },
//   {
//     year: "2023",
//     title: "From Freelance to Full-Time",
//     description:
//       "Left freelancing behind to work full-time with startups and local businesses, shipping real products under real deadlines.",
//     image: { src: "/about/image-2.jpg", alt: "Working with clients, 2023" },
//   },
//   {
//     year: "2023",
//     title: "Landed My First Major Client",
//     image: { src: "/about/image-3.jpg", alt: "First major client project" },
//   },
//   {
//     year: "2024",
//     title: "Founded Meta Master",
//     description:
//       "Started Meta Master to help businesses build premium digital products through strategy, design, and technology.",
//     size: "lg",
//     image: { src: "/about/image-4.jpg", alt: "Founding Meta Master, 2024" },
//     accentImage: { src: "/about/image-5.jpg", alt: "Meta Master's early days" },
//   },
//   {
//     year: "2024",
//     title: "Built the Core Team",
//     image: { src: "/about/image-6.jpg", alt: "The founding team" },
//   },
//   {
//     year: "2025",
//     title: "Expanded Into a Creative Agency",
//     description:
//       "Grew into a multidisciplinary team of designers and developers, serving clients across industries.",
//     image: { src: "/about/image-7.jpg", alt: "The growing team, 2025" },
//   },
//   {
//     year: "2025",
//     title: "Took On Multi-Industry Clients",
//     image: { src: "/about/image-8.jpg", alt: "Client work across industries" },
//   },
//   {
//     year: "TODAY",
//     title: "Leading Innovation",
//     description:
//       "Still leading Meta Master today — building thoughtful, modern digital experiences for brands that want to grow.",
//     size: "lg",
//     image: { src: "/about/image-9.jpg", alt: "Aman Chanchal today" },
//   },
// ];

// export function About() {
//   const galleryRef = useRef<HTMLDivElement>(null);

//   return (
//     <section id="portfolio" className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32">
//       {/* short intro — sets up the gallery below instead of running
//           alongside it in a sticky sidebar */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="mx-auto mb-20 max-w-2xl px-5 text-center sm:mb-28 sm:px-8"
//       >
//         <span className="inline-block rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-400">
//           ABOUT ME
//         </span>
//         <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
//           From first freelance project to{" "}
//           <span className="font-serif-display italic text-orange-500">
//             Meta Master
//           </span>
//         </h2>
//         <p className="mt-5 text-[15px] leading-relaxed text-white/50 sm:text-base">
//           A quick look at how a passion for solving problems through design
//           turned into an agency built for growth.
//         </p>
//         <a
//           href="/about"
//           className="group mt-7 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm font-medium text-white"
//         >
//           know more about me
//           <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//             ↗
//           </span>
//         </a>
//       </motion.div>

//       {/* the gallery — the bee measures each `.bee-target` photo below
//           and flies between them as this block scrolls past */}
//       <div ref={galleryRef} className="relative mx-auto max-w-5xl px-5 sm:px-8">
//         <ScrollBee containerRef={galleryRef} />

//         {TIMELINE.map((item, i) => {
//           const isLast = i === TIMELINE.length - 1;
//           const imageOnRight = i % 2 === 1;
//           const isLarge = item.size === "lg";

//           return (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//               className={`bee-target relative w-[78%] sm:w-[55%] ${
//                 isLarge ? "lg:w-[52%]" : "lg:w-[42%]"
//               } ${isLast ? "" : "mb-28 sm:mb-40"} ${
//                 imageOnRight ? "ml-auto" : "mr-auto"
//               }`}
//             >
//               <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-900">
//                 <Image
//                   src={item.image.src}
//                   alt={item.image.alt}
//                   fill
//                   sizes="(max-width: 1024px) 60vw, 35vw"
//                   className="object-cover"
//                 />
//               </div>

//               {item.accentImage && (
//                 <div
//                   className={`absolute -top-10 z-10 aspect-square w-1/3 overflow-hidden rounded-sm border-4 border-neutral-950 shadow-xl sm:-top-14 ${
//                     imageOnRight ? "-left-8 -rotate-6" : "-right-8 rotate-6"
//                   }`}
//                 >
//                   <Image
//                     src={item.accentImage.src}
//                     alt={item.accentImage.alt}
//                     fill
//                     sizes="140px"
//                     className="object-cover"
//                   />
//                 </div>
//               )}

//               <div className="mt-4 flex items-start justify-between gap-4">
//                 <p className="text-base font-medium text-white sm:text-lg">
//                   {item.title}
//                 </p>
//                 <p className="shrink-0 pt-0.5 text-sm text-white/40">{item.year}</p>
//               </div>

//               {item.description && (
//                 <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/50">
//                   {item.description}
//                 </p>
//               )}
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }










 
// "use client";
 
// import { useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ScrollBee } from "@/components/ui/Scroll-Bee";
 
// interface TimelineImage {
//   src: string;
//   alt: string;
// }
 
// interface TimelineEntry {
//   year: string;
//   title: string;
//   /** optional — when present, renders under the title/year as a short line */
//   description?: string;
//   /** "lg" gets a bit more width than the default, for visual rhythm */
//   size?: "md" | "lg";
//   image: TimelineImage;
//   /** optional second, smaller photo peeking off one corner of the main one */
//   accentImage?: TimelineImage;
// }
 
// const TIMELINE: TimelineEntry[] = [
//   {
//     year: "2022",
//     title: "Started My Design Journey",
//     image: { src: "/about/image-1.jpg", alt: "Early design work, 2022" },
//   },
//   {
//     year: "2023",
//     title: "From Freelance to Full-Time",
//     description:
//       "Left freelancing behind to work full-time with startups and local businesses, shipping real products under real deadlines.",
//     image: { src: "/about/image-2.jpg", alt: "Working with clients, 2023" },
//   },
//   {
//     year: "2023",
//     title: "Landed My First Major Client",
//     image: { src: "/about/image-3.jpg", alt: "First major client project" },
//   },
//   {
//     year: "2024",
//     title: "Founded Meta Master",
//     description:
//       "Started Meta Master to help businesses build premium digital products through strategy, design, and technology.",
//     size: "lg",
//     image: { src: "/about/image-4.jpg", alt: "Founding Meta Master, 2024" },
//     accentImage: { src: "/about/image-5.jpg", alt: "Meta Master's early days" },
//   },
//   {
//     year: "2024",
//     title: "Built the Core Team",
//     image: { src: "/about/image-6.jpg", alt: "The founding team" },
//   },
//   {
//     year: "2025",
//     title: "Expanded Into a Creative Agency",
//     description:
//       "Grew into a multidisciplinary team of designers and developers, serving clients across industries.",
//     image: { src: "/about/image-7.jpg", alt: "The growing team, 2025" },
//   },
//   {
//     year: "2025",
//     title: "Took On Multi-Industry Clients",
//     image: { src: "/about/image-8.jpg", alt: "Client work across industries" },
//   },
//   {
//     year: "TODAY",
//     title: "Leading Innovation",
//     description:
//       "Still leading Meta Master today — building thoughtful, modern digital experiences for brands that want to grow.",
//     size: "lg",
//     image: { src: "/about/image-9.jpg", alt: "Aman Chanchal today" },
//   },
// ];
 
// export function About() {
//   const galleryRef = useRef<HTMLDivElement>(null);
 
//   return (
//     <section
//       id="portfolio"
//       // `relative` + an opaque bg are what let this section glide OVER the pinned
//       // hero. The rounded top + upward shadow just make that edge read clearly.
//       className="relative overflow-hidden rounded-t-[2rem] bg-neutral-950 py-24 shadow-[0_-40px_80px_rgba(0,0,0,0.55)] sm:rounded-t-[3rem] sm:py-32"
//     >
//       {/* short intro — sets up the gallery below instead of running
//           alongside it in a sticky sidebar */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="mx-auto mb-20 max-w-2xl px-5 text-center sm:mb-28 sm:px-8"
//       >
//         <span className="inline-block rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-400">
//           ABOUT ME
//         </span>
//         <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
//           From first freelance project to{" "}
//           <span className="font-serif-display italic text-orange-500">
//             Meta Master
//           </span>
//         </h2>
//         <p className="mt-5 text-[15px] leading-relaxed text-white/50 sm:text-base">
//           A quick look at how a passion for solving problems through design
//           turned into an agency built for growth.
//         </p>
//         <a
//           href="/about"
//           className="group mt-7 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm font-medium text-white"
//         >
//           know more about me
//           <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//             ↗
//           </span>
//         </a>
//       </motion.div>
 
//       {/* the gallery — the bee measures each `.bee-target` photo below
//           and flies between them as this block scrolls past */}
//       <div ref={galleryRef} className="relative mx-auto max-w-5xl px-5 sm:px-8">
//         <ScrollBee containerRef={galleryRef} />
 
//         {TIMELINE.map((item, i) => {
//           const isLast = i === TIMELINE.length - 1;
//           const imageOnRight = i % 2 === 1;
//           const isLarge = item.size === "lg";
 
//           return (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//               className={`bee-target relative w-[78%] sm:w-[55%] ${
//                 isLarge ? "lg:w-[52%]" : "lg:w-[42%]"
//               } ${isLast ? "" : "mb-28 sm:mb-40"} ${
//                 imageOnRight ? "ml-auto" : "mr-auto"
//               }`}
//             >
//               <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-900">
//                 <Image
//                   src={item.image.src}
//                   alt={item.image.alt}
//                   fill
//                   sizes="(max-width: 1024px) 60vw, 35vw"
//                   className="object-cover"
//                 />
//               </div>
 
//               {item.accentImage && (
//                 <div
//                   className={`absolute -top-10 z-10 aspect-square w-1/3 overflow-hidden rounded-sm border-4 border-neutral-950 shadow-xl sm:-top-14 ${
//                     imageOnRight ? "-left-8 -rotate-6" : "-right-8 rotate-6"
//                   }`}
//                 >
//                   <Image
//                     src={item.accentImage.src}
//                     alt={item.accentImage.alt}
//                     fill
//                     sizes="140px"
//                     className="object-cover"
//                   />
//                 </div>
//               )}
 
//               <div className="mt-4 flex items-start justify-between gap-4">
//                 <p className="text-base font-medium text-white sm:text-lg">
//                   {item.title}
//                 </p>
//                 <p className="shrink-0 pt-0.5 text-sm text-white/40">{item.year}</p>
//               </div>
 
//               {item.description && (
//                 <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/50">
//                   {item.description}
//                 </p>
//               )}
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollBee } from "@/components/ui/Scroll-Bee";

interface TimelineImage {
  src: string;
  alt: string;
}

interface TimelineEntry {
  year: string;
  title: string;
  /** optional — when present, renders under the title/year as a short line */
  description?: string;
  /** 0 = flush left, 1 = flush right. Deliberately not a strict
   *  alternation — some sit near an edge, some sit closer to center, so
   *  the rhythm feels scattered rather than a predictable left/right
   *  swing (which is also what was making the bee zigzag). */
  align: number;
  /** width as a % of the gallery container */
  width: number;
  /** CSS aspect-ratio string — varies the shape instead of forcing every
   *  image into the same box */
  aspect: string;
  image: TimelineImage;
  /** optional second, smaller photo peeking off one corner of the main one */
  accentImage?: TimelineImage;
  /** optional — a small overlapping cluster of circular photos rendered
   *  below the caption, for entries about the team rather than a single
   *  moment */
  teamImages?: TimelineImage[];
}

const TIMELINE: TimelineEntry[] = [
  {
    year: "2022",
    title: "Started My Design Journey",
    align: 0.05,
    width: 42,
    aspect: "3/4",
    image: { src: "/about/image-1.jpg", alt: "Early design work, 2022" },
  },
  {
    year: "2023",
    title: "From Freelance to Full-Time",
    description:
      "Left freelancing behind to work full-time with startups and local businesses, shipping real products under real deadlines.",
    align: 0.62,
    width: 34,
    aspect: "4/5",
    image: { src: "/about/image-2.jpg", alt: "Working with clients, 2023" },
  },
  {
    year: "2023",
    title: "Landed My First Major Client",
    align: 0.18,
    width: 32,
    aspect: "1/1",
    image: { src: "/about/image-3.jpg", alt: "First major client project" },
    accentImage: { src: "/about/image-3b.jpg", alt: "Behind the scenes with the client" },
  },
  {
    year: "2024",
    title: "Founded Meta Master",
    description:
      "Started Meta Master to help businesses build premium digital products through strategy, design, and technology.",
    align: 0.46,
    width: 50,
    aspect: "4/3",
    image: { src: "/about/image-4.jpg", alt: "Founding Meta Master, 2024" },
    accentImage: { src: "/about/image-5.jpg", alt: "Meta Master's early days" },
  },
  {
    year: "2024",
    title: "Built the Core Team",
    description: "The designers and developers who make Meta Master run.",
    align: 0.7,
    width: 30,
    aspect: "3/4",
    image: { src: "/about/image-6.jpg", alt: "The founding team" },
    teamImages: [
      { src: "/about/team-1.jpg", alt: "Team member" },
      { src: "/about/team-2.jpg", alt: "Team member" },
      { src: "/about/team-3.jpg", alt: "Team member" },
      { src: "/about/team-4.jpg", alt: "Team member" },
    ],
  },
  {
    year: "2025",
    title: "Expanded Into a Creative Agency",
    description:
      "Grew into a multidisciplinary team of designers and developers, serving clients across industries.",
    align: 0.08,
    width: 46,
    aspect: "16/10",
    image: { src: "/about/image-7.jpg", alt: "The growing team, 2025" },
  },
  {
    year: "2025",
    title: "Took On Multi-Industry Clients",
    align: 0.6,
    width: 30,
    aspect: "3/4",
    image: { src: "/about/image-8.jpg", alt: "Client work across industries" },
  },
  {
    year: "TODAY",
    title: "Leading Innovation",
    description:
      "Still leading Meta Master today — building thoughtful, modern digital experiences for brands that want to grow.",
    align: 0.14,
    width: 44,
    aspect: "4/5",
    image: { src: "/about/image-9.jpg", alt: "Aman Chanchal today" },
  },
];

interface FillerItem {
  type: "image" | "video" | "text";
  /** approx vertical position down the gallery, as a % of its total height */
  top: number;
  align: number;
  width: number;
  src?: string;
  content?: string;
}

// purely decorative, desktop-only — not part of the bee's flight path.
// Swap the src/content for real assets whenever; positions are
// approximate and may want a nudge once real content is in.
const FILLERS: FillerItem[] = [
  { type: "image", top: 4, align: 0.7, width: 22, src: "/about/filler-1.jpg" },
  {
    type: "text",
    top: 22,
    align: 0.05,
    width: 26,
    content: "“Design is how it works.” — a line I keep coming back to.",
  },
  // extra pieces near "Landed My First Major Client"
  { type: "image", top: 32, align: 0.62, width: 18, src: "/about/filler-3.jpg" },
  { type: "video", top: 44, align: 0.06, width: 28, src: "/about/filler-clip.mp4" },
  // extra piece near "Built the Core Team"
  {
    type: "text",
    top: 58,
    align: 0.06,
    width: 24,
    content: "Small team, big attention to detail — that hasn't changed.",
  },
  { type: "image", top: 66, align: 0.68, width: 22, src: "/about/filler-2.jpg" },
  {
    type: "text",
    top: 86,
    align: 0.64,
    width: 26,
    content: "Every project starts the same way — a blank canvas and a good brief.",
  },
];

export function About() {
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="portfolio"
      // `relative` + an opaque bg are what let this section glide OVER the pinned
      // hero. The rounded top + upward shadow just make that edge read clearly.
      // Lighter, less-saturated gradient than before — leaning toward bright/
      // silky rather than deep cream — plus the noise layer just below for shine.
      className="relative overflow-hidden rounded-t-[2rem] bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,#FFFFFF_0%,#F8F5EC_45%,#EFE9DA_100%)] py-24 shadow-[0_-40px_80px_rgba(0,0,0,0.55)] sm:rounded-t-[3rem] sm:py-32"
    >
      {/* subtle grain — pure texture, sits behind everything else */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* short intro — sets up the gallery below instead of running
          alongside it in a sticky sidebar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto mb-20 max-w-2xl px-5 text-center sm:mb-28 sm:px-8"
      >
        <span className="inline-block rounded-full border border-neutral-300 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-600">
          ABOUT ME
        </span>
        <h2 className="mt-6 text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
          From first freelance project to{" "}
          <span className="font-serif-display italic text-orange-500">
            Meta Master
          </span>
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-neutral-500 sm:text-base">
          A quick look at how a passion for solving problems through design
          turned into an agency built for growth.
        </p>
        <a
          href="/about"
          className="group mt-7 inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-sm font-medium text-neutral-900"
        >
          know more about me
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>
      </motion.div>

      {/* the gallery — the bee measures each `.bee-target` photo below
          and flies between them as this block scrolls past. Widened
          from a centered column so images can actually reach toward
          the edges. */}
      <div
        ref={galleryRef}
        className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-10"
      >
        <ScrollBee
          containerRef={galleryRef as React.RefObject<HTMLElement>}
        />

        {/* decorative fillers — desktop only, sit behind the main
            timeline entries and the bee */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
          {FILLERS.map((filler, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${filler.top}%`,
                left: `${filler.align * 100}%`,
                width: `${filler.width}%`,
              }}
            >
              {filler.type === "image" && filler.src && (
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-200/60">
                  <Image
                    src={filler.src}
                    alt=""
                    fill
                    sizes="20vw"
                    className="object-cover opacity-90"
                  />
                </div>
              )}
              {filler.type === "video" && filler.src && (
                <div className="relative aspect-video overflow-hidden rounded-sm bg-neutral-200/60">
                  <video
                    src={filler.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover opacity-90"
                  />
                </div>
              )}
              {filler.type === "text" && filler.content && (
                <p className="font-serif-display text-lg italic leading-snug text-neutral-400 sm:text-xl">
                  {filler.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {TIMELINE.map((item, i) => {
          const isLast = i === TIMELINE.length - 1;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`bee-target relative z-10 ${isLast ? "" : "mb-28 sm:mb-40"}`}
              style={{
                width: `${item.width}%`,
                marginLeft: `${item.align * (100 - item.width)}%`,
              }}
            >
              <div
                className="relative overflow-hidden rounded-sm bg-neutral-200"
                style={{ aspectRatio: item.aspect }}
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 1024px) 60vw, 35vw"
                  className="object-cover"
                />
              </div>

              {item.accentImage && (
                <div
                  className={`absolute -top-6 z-10 aspect-square w-1/4 overflow-hidden rounded-sm border-4 border-[#F4EFE7] shadow-xl sm:-top-10 sm:w-1/3 lg:-top-14 ${
                    item.align > 0.4
                      ? "-left-4 -rotate-6 sm:-left-8"
                      : "-right-4 rotate-6 sm:-right-8"
                  }`}
                >
                  <Image
                    src={item.accentImage.src}
                    alt={item.accentImage.alt}
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </div>
              )}

              <div className="mt-4 flex items-start justify-between gap-4">
                <p className="text-base font-medium text-neutral-900 sm:text-lg">
                  {item.title}
                </p>
                <p className="shrink-0 pt-0.5 text-sm text-neutral-400">
                  {item.year}
                </p>
              </div>

              {item.description && (
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              )}

              {item.teamImages && (
                <div className="mt-4 flex -space-x-3">
                  {item.teamImages.map((member, idx) => (
                    <div
                      key={idx}
                      className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#F4EFE7] shadow-md sm:h-14 sm:w-14"
                      style={{ transform: `rotate(${idx % 2 === 0 ? -6 : 6}deg)` }}
                    >
                      <Image
                        src={member.src}
                        alt={member.alt}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}