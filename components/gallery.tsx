"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Instagram = ({ className, size = 24 }: { className?: string; size?: number | string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const MEMORIES = [
  { src: "/images/memories/memory-1.png", alt: "Sitting on a couch, dressed up" },
  { src: "/images/memories/memory-2.png", alt: "Standing on a snowy mountain in a yellow jacket" },
  { src: "/images/memories/memory-3.png", alt: "Standing near a garden terrace" },
  { src: "/images/memories/memory-4.png", alt: "Walking across a wooden bridge by a river" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" as const },
  }),
};

export function Gallery() {
  return (
    <section id="memories" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl font-semibold text-neutral-950 sm:text-3xl"
        >
          My Best Memories
        </motion.h2>

        <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            whileHover={{ scale: 1.015 }}
            className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 sm:aspect-[16/10]"
          >
            <Image
              src={MEMORIES[0].src}
              alt={MEMORIES[0].alt}
              fill
              sizes="(max-width: 640px) 66vw, 620px"
              className="object-cover"
            />
          </motion.div>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            whileHover={{ scale: 1.015 }}
            className="group flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-2xl bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-200 sm:aspect-[16/10]"
          >
            <Instagram
              size={80}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-sm font-medium">Visit instagram</span>
          </motion.a>

          {MEMORIES.slice(1).map((m, i) => (
            <motion.div
              key={m.src}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i + 2}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100"
            >
              <Image
                src={m.src}
                alt={m.alt}
                fill
                sizes="(max-width: 640px) 33vw, 200px"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
