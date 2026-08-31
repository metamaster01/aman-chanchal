"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Positions are percentages of the collage container's width/height,
 * lifted directly from the reference layout — this keeps the scattered
 * arrangement proportional at every screen size instead of relying on
 * fixed pixel values.
 */
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

export function Venture() {
  return (
    <section id="meta-master" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Desktop / tablet — scattered collage with centered copy overlay */}
        <div className="relative mx-auto hidden aspect-[1071/646] w-full lg:block">
          {COLLAGE_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="absolute overflow-hidden rounded-lg bg-neutral-100 shadow-sm"
              style={{ left: img.left, top: img.top, width: img.width, height: img.height }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="180px"
                className="object-cover"
              />
            </motion.div>
          ))}

          <div className="absolute inset-0 flex items-center justify-center px-8">
            <VentureCopy />
          </div>
        </div>

        {/* Mobile — copy first, then a clean responsive grid of the same photos */}
        <div className="lg:hidden">
          <VentureCopy />

          <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4">
            {COLLAGE_IMAGES.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.06, ease: "easeOut" }}
                className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 33vw, 25vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VentureCopy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-xl text-center"
    >
      <span className="inline-block rounded-full border border-orange-300 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-500">
        VENTURE
      </span>

      <p className="mt-6 text-xl leading-snug text-neutral-900 sm:text-2xl">
        Built Meta Master into a creative design agency helping startups and
        businesses craft exceptional digital experiences through UI/UX
        design, branding, websites, SaaS products, and development.
      </p>

      <a
        href="#portfolio"
        className="group mt-6 inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-sm font-medium text-neutral-900"
      >
        know more about Meta master
        <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </a>
    </motion.div>
  );
}
