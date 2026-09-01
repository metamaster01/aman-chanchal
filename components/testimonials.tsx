"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TESTIMONIALS = [
  {
    name: "Rohit Sharma",
    role: "Founder, Tech Startup",
    year: "2025",
    quote:
      '"Working with Aman was one of the best decisions for our product. His strategic thinking, design expertise, and attention to detail transformed our vision into a polished digital experience. The entire process was smooth, professional, and exceeded our expectations."',
    image: "/testimonials/client-1.png",
  },
  {
    name: "Priya Nair",
    role: "Co-founder, D2C Brand",
    year: "2025",
    quote:
      '"Aman didn\'t just design a website, he understood our brand and translated it into an experience our customers actually remember. Communication was clear at every step, and deadlines were always met."',
    image: "/testimonials/client-2.png",
  },
  {
    name: "Simran Kaur",
    role: "Product Lead, SaaS Company",
    year: "2024",
    quote:
      '"We came in with a rough idea and left with a product our users love. The UI/UX work was thoughtful, the collaboration was effortless, and the results spoke for themselves within the first month."',
    image: "/testimonials/client-3.png",
  },
  {
    name: "Arjun Mehta",
    role: "CEO, Fintech Startup",
    year: "2024",
    quote:
      '"Aman is a rare talent who combines creativity with technical know-how. The redesign of our platform led to a 30% increase in user engagement. His insights and recommendations were invaluable."',
    image: "/testimonials/client-4.png",  
  }
];

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        const wrapper = wrapperRefs.current[i];
        const isLast = i === TESTIMONIALS.length - 1;
        if (!card || !wrapper || isLast) return;

        // as the NEXT card scrolls up to cover this one, this card
        // scales down and dims — like it's being tucked underneath.
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.45,
          filter: "brightness(0.55)",
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#08182b] py-24 sm:py-32">
      <h2 className="px-5 text-center text-4xl font-normal text-white sm:text-5xl">
        Client Testimonials
      </h2>

      <div className="relative mt-16 sm:mt-20">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.name}
            ref={(el) => {
              wrapperRefs.current[i] = el;
            }}
            className="sticky top-0 flex min-h-screen items-center justify-center px-5 py-6 sm:px-8"
            style={{ zIndex: i + 1 }}
          >
            <div
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="w-full max-w-5xl origin-top rounded-3xl border border-white/10 bg-[#0e2540] p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:p-10"
            >
              <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-10">
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-white/90">
                        {t.name.toUpperCase()}
                      </p>
                      <p className="text-xs tracking-wider text-white/40">
                        {t.role.toUpperCase()}
                      </p>
                    </div>
                    <span className="text-xs text-white/40">{t.year}</span>
                  </div>

                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                    {t.quote}
                  </p>
                </div>

                <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-white/5 sm:h-64 sm:w-72">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 288px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
