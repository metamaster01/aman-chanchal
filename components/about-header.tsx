"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutHeader() {
  return (
    <section className="px-5 pt-14 sm:px-8 sm:pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-3xl font-semibold text-neutral-950 sm:text-4xl md:text-5xl"
        >
          About{" "}
          <span className="font-serif-display italic text-orange-500">
            Aman Chanchal
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="font-serif-display mt-3 text-sm italic text-neutral-500 sm:text-base"
        >
          Founder. Entrepreneur. Visionary.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base"
        >
          I&apos;m passionate about building businesses, leading teams, and
          creating digital solutions that help brands grow in today&apos;s
          digital world.
        </motion.p>

        <motion.a
          href="#contact-form"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.26, ease: "easeOut" }}
          className="mt-7 inline-block rounded-full bg-neutral-950 px-7 py-3 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
        >
          Contact Me
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl bg-neutral-900 sm:mt-16"
      >
        <Image
          src="/images/about/header-photo.png"
          alt="Aman Chanchal in his office, Meta Master branding on the wall behind him"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1000px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        <div className="absolute left-6 top-6 sm:left-10 sm:top-10">
          <p className="text-lg font-bold tracking-wide text-white sm:text-2xl">
            META MASTER
          </p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 sm:text-xs">
            Building Digital Excellence
          </p>
        </div>
      </motion.div>
    </section>
  );
}
