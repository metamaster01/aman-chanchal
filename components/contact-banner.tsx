"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ContactBanner() {
  return (
    <section className="px-0">
      <div className="relative h-[440px] w-full overflow-hidden sm:h-[500px]">
        <Image
          src="/images/contact-banner.png"
          alt="Laptop open on a desk at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/60" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-between px-5 py-10 sm:px-8 sm:py-14">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-md text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            Let&apos;s Build Something Extraordinary Together.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="max-w-xs self-start text-left sm:self-end sm:text-right"
          >
            <p className="text-sm leading-relaxed text-white/80">
              Whether you&apos;re launching a startup, scaling your business,
              or redefining your digital presence, I&apos;m here to help
              bring your vision to life.
            </p>
            <a
              href="#contact-form"
              className="group mt-3 inline-flex items-center gap-2 border-b border-white pb-1 text-sm font-medium text-white"
            >
              Contact me
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
