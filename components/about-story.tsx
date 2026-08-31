"use client";

import { motion } from "framer-motion";

const PARAGRAPHS = [
  "I'm Aman Chanchal, the Founder & CEO of Meta Master, a creative digital agency dedicated to helping businesses establish a strong digital presence.",
  "What started as a vision to create meaningful digital experiences has grown into a company that collaborates with startups, entrepreneurs, and established businesses across various industries.",
  "My focus has always been on building strong relationships, assembling talented teams, and delivering solutions that combine creativity, technology, and business strategy.",
];

export function AboutStory() {
  return (
    <section className="mt-16 bg-neutral-50 px-5 py-16 sm:mt-20 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl font-semibold text-neutral-950 sm:text-3xl"
        >
          Who I Am
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="font-serif-display mt-2 text-lg font-semibold italic text-orange-500 sm:text-xl"
        >
          Turning Vision Into Reality
        </motion.p>

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {PARAGRAPHS.map((p, i) => (
            <motion.p
              key={p}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: "easeOut" }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
