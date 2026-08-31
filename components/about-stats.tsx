"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  TrendingUp,
  Lightbulb,
  Users,
  Handshake,
  Target,
} from "lucide-react";
import { AnimatedNumber } from "@/components/ui/animated-number";

const STATS = [
  { value: 5, label: "Years Experience" },
  { value: 50, label: "Clients" },
  { value: 100, label: "Projects" },
  { value: 15, label: "Teams Members" },
];

const SKILLS = [
  {
    icon: Rocket,
    title: "Entrepreneurship",
    description: "Building businesses with vision and long-term impact.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Leading creative teams to deliver exceptional results.",
  },
  {
    icon: TrendingUp,
    title: "Business Strategy",
    description: "Turning ideas into sustainable growth opportunities.",
  },
  {
    icon: Handshake,
    title: "Client Partnerships",
    description: "Creating trusted relationships through collaboration.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Driving digital transformation with modern solutions.",
  },
  {
    icon: Target,
    title: "Project Leadership",
    description: "Managing projects from strategy to successful delivery.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function AboutStats() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-4xl">
        {/* stat cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              whileHover={{ y: -4, borderColor: "rgba(249,115,22,0.4)" }}
              className="rounded-2xl border border-neutral-200 p-6 transition-colors sm:p-7"
            >
              <div className="flex items-baseline">
                <span className="text-5xl font-bold tracking-tight text-neutral-950 sm:text-6xl">
                  <AnimatedNumber value={stat.value} />
                </span>
                <span className="text-3xl font-semibold text-orange-500 sm:text-4xl">
                  +
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-600 sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* mission copy */}
        {/* <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-14 text-2xl font-semibold text-neutral-950 sm:mt-16 sm:text-3xl md:text-4xl"
        >
          Leading with Vision. Building with Purpose.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base"
        >
          I believe successful businesses are built through strong
          leadership, strategic thinking, and meaningful collaboration. My
          focus is on creating opportunities, empowering teams, and helping
          businesses achieve sustainable growth through digital innovation.
        </motion.p>

        
        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 sm:mt-10 sm:grid-cols-2">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                custom={i}
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 shrink-0 text-orange-500 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-neutral-950 sm:text-base">
                    {skill.title}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-neutral-500 sm:text-sm">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div> */}
 </div>
    </section>
  );
}



export function AboutSkills() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-4xl">
              <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-14 text-2xl font-semibold text-neutral-950 sm:mt-16 sm:text-3xl md:text-4xl"
        >
          Leading with Vision. Building with Purpose.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base"
        >
          I believe successful businesses are built through strong
          leadership, strategic thinking, and meaningful collaboration. My
          focus is on creating opportunities, empowering teams, and helping
          businesses achieve sustainable growth through digital innovation.
        </motion.p>

        {/* skills grid */}
        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-6 sm:mt-10 sm:grid-cols-2">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                custom={i}
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 shrink-0 text-orange-500 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-neutral-950 sm:text-base">
                    {skill.title}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-neutral-500 sm:text-sm">
                    {skill.description}
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
