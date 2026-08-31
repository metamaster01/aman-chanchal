"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PHOTOS = [
  { src: "/images/footer/footer-1.png", rotate: -8, left: "0%" },
  { src: "/images/footer/footer-2.png", rotate: -4, left: "18%" },
  { src: "/images/footer/footer-3.png", rotate: 2, left: "38%" },
  { src: "/images/footer/footer-4.png", rotate: 7, left: "58%" },
  { src: "/images/footer/footer-5.png", rotate: -3, left: "78%" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X/Twitter", href: "https://twitter.com" },
  { label: "Linkedin", href: "https://linkedin.com" },
];

export function Footer() {
  return (
    <footer className="px-4 pb-6 pt-4 sm:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-neutral-950">
        {/* tilted polaroid strip */}
        <div className="relative h-52 sm:h-64 md:h-72">
          {PHOTOS.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.04, zIndex: 30 }}
              className="absolute top-2 w-[26%] max-w-[220px] rounded-lg bg-white p-2 shadow-2xl sm:top-4"
              style={{ left: p.left, zIndex: i + 1 }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-neutral-200">
                <Image
                  src={p.src}
                  alt=""
                  fill
                  sizes="220px"
                  className="pointer-events-none object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* frosted-glass panel overlapping the bottom of the photos */}
        <div className="relative -mt-14 border-t border-white/10 bg-black/50 px-6 py-10 backdrop-blur-xl sm:-mt-16 sm:px-10 sm:py-12">
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <p className="max-w-xs text-base leading-relaxed text-white/90">
                If you&apos;re ready to launch, refresh, or reimagine your
                brand, I&apos;d love to help make it happen.
              </p>
              <a
                href="#contact-form"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-neutral-950"
              >
                Contact Me
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                Socials
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-white"
                    >
                      {s.label}
                      <ArrowUpRight size={13} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                Get in Touch
              </p>
              <div className="mt-3 space-y-1 text-sm text-white/80">
                <p>amanchanchal02@gmail.com</p>
                <p>+91 00000 00000</p>
              </div>
            </div>
          </div>

          <p className="mt-10 text-xs text-white/30">
            © {new Date().getFullYear()} Aman Chanchal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
