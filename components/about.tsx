"use client";

import { motion } from "framer-motion";

const TIMELINE = [
  {
    icon: "🙂",
    year: "2022",
    title: "Started My Design Journey",
    description:
      "Began learning UI/UX design, branding, and web technologies while working on freelance projects.",
  },
  {
    icon: "😊",
    year: "2023",
    title: "Worked With Growing Businesses",
    description:
      "Collaborated with startups and local businesses, delivering websites, mobile app designs, and branding solutions.",
  },
  {
    icon: "😊",
    year: "2024",
    title: "Founded Meta Master",
    description:
      "Established Meta Master with the vision of helping businesses build premium digital products through strategy, creativity, and technology.",
  },
  {
    icon: "😊",
    year: "2025",
    title: "Expanded Into a Creative Agency",
    description:
      "Built a multidisciplinary team of designers and developers while serving clients across multiple industries.",
  },
  {
    icon: "😊",
    year: "TODAY",
    title: "Leading Innovation",
    description:
      "Continuing to lead Meta Master by delivering exceptional digital experiences and helping brands grow with thoughtful design and modern technology.",
  },
];

export function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-start lg:gap-20">
        {/* Left column — sticks in place while the timeline scrolls past it */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block rounded-full border border-orange-300 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-500">
              ABOUT ME
            </span>

            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-neutral-800 sm:text-base">
              <p>
                Hello, I&apos;m Aman Chanchal, the Founder &amp; CEO of Meta
                Master, a creative design agency specializing in UI/UX design,
                branding, websites, SaaS platforms, and digital product
                development.
              </p>
              <p>
                My journey began with a passion for solving problems through
                design. What started as freelance projects evolved into
                building Meta Master, where I now lead a talented team
                dedicated to creating impactful digital experiences.
              </p>
              <p>
                Today, I collaborate with startups, entrepreneurs, and
                established businesses to transform ideas into products that
                are intuitive, visually engaging, and built for growth.
              </p>
            </div>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-sm font-medium text-neutral-900"
            >
              know more about me
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right column — timeline items fade/slide in as they scroll into view */}
        <div className="relative">
          {TIMELINE.map((item, i) => {
            const isLast = i === TIMELINE.length - 1;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
                className="relative flex gap-5"
              >
                {/* icon + connecting line */}
                <div className="flex flex-col items-center">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-lg">
                    {item.icon}
                  </span>
                  {!isLast && (
                    <motion.span
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                      style={{ transformOrigin: "top" }}
                      className="mt-1 w-px flex-1 bg-orange-300"
                    />
                  )}
                </div>

                {/* content */}
                <div className={isLast ? "pb-0" : "pb-12"}>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-neutral-950 sm:text-xl">
                      {item.title}
                    </h3>
                    <span className="shrink-0 pt-1 text-xs font-medium tracking-wide text-neutral-400 sm:text-sm">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
