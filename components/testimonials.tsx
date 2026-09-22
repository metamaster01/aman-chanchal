// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const TESTIMONIALS = [
//   {
//     name: "Rohit Sharma",
//     role: "Founder, Tech Startup",
//     year: "2025",
//     quote:
//       '"Working with Aman was one of the best decisions for our product. His strategic thinking, design expertise, and attention to detail transformed our vision into a polished digital experience. The entire process was smooth, professional, and exceeded our expectations."',
//     image: "/testimonials/client-1.png",
//   },
//   {
//     name: "Priya Nair",
//     role: "Co-founder, D2C Brand",
//     year: "2025",
//     quote:
//       '"Aman didn\'t just design a website, he understood our brand and translated it into an experience our customers actually remember. Communication was clear at every step, and deadlines were always met."',
//     image: "/testimonials/client-2.png",
//   },
//   {
//     name: "Simran Kaur",
//     role: "Product Lead, SaaS Company",
//     year: "2024",
//     quote:
//       '"We came in with a rough idea and left with a product our users love. The UI/UX work was thoughtful, the collaboration was effortless, and the results spoke for themselves within the first month."',
//     image: "/testimonials/client-3.png",
//   },
//   {
//     name: "Arjun Mehta",
//     role: "CEO, Fintech Startup",
//     year: "2024",
//     quote:
//       '"Aman is a rare talent who combines creativity with technical know-how. The redesign of our platform led to a 30% increase in user engagement. His insights and recommendations were invaluable."',
//     image: "/testimonials/client-4.png",  
//   }
// ];

// gsap.registerPlugin(ScrollTrigger);

// export function Testimonials() {
//   const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       cardRefs.current.forEach((card, i) => {
//         const wrapper = wrapperRefs.current[i];
//         const isLast = i === TESTIMONIALS.length - 1;
//         if (!card || !wrapper || isLast) return;

//         // as the NEXT card scrolls up to cover this one, this card
//         // scales down and dims — like it's being tucked underneath.
//         gsap.to(card, {
//           scale: 0.92,
//           opacity: 0.45,
//           filter: "brightness(0.55)",
//           ease: "none",
//           scrollTrigger: {
//             trigger: wrapper,
//             start: "top top",
//             end: "bottom top",
//             scrub: true,
//           },
//         });
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="bg-[#08182b] py-24 sm:py-32">
//       <h2 className="px-5 text-center text-4xl font-normal text-white sm:text-5xl">
//         Client Testimonials
//       </h2>

//       <div className="relative mt-16 sm:mt-20">
//         {TESTIMONIALS.map((t, i) => (
//           <div
//             key={t.name}
//             ref={(el) => {
//               wrapperRefs.current[i] = el;
//             }}
//             className="sticky top-0 flex min-h-screen items-center justify-center px-5 py-6 sm:px-8"
//             style={{ zIndex: i + 1 }}
//           >
//             <div
//               ref={(el) => {
//                 cardRefs.current[i] = el;
//               }}
//               className="w-full max-w-5xl origin-top rounded-3xl border border-white/10 bg-[#0e2540] p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:p-10"
//             >
//               <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-10">
//                 <div>
//                   <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
//                     <div>
//                       <p className="text-xs font-semibold tracking-wider text-white/90">
//                         {t.name.toUpperCase()}
//                       </p>
//                       <p className="text-xs tracking-wider text-white/40">
//                         {t.role.toUpperCase()}
//                       </p>
//                     </div>
//                     <span className="text-xs text-white/40">{t.year}</span>
//                   </div>

//                   <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
//                     {t.quote}
//                   </p>
//                 </div>

//                 <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-white/5 sm:h-64 sm:w-72">
//                   <Image
//                     src={t.image}
//                     alt={t.name}
//                     fill
//                     sizes="(max-width: 640px) 100vw, 288px"
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }









"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------------------------------------- */
/*  CONTENT – edit freely. Add / remove / reorder entries; the animation      */
/*  and scroll length adapt automatically.                                    */
/* -------------------------------------------------------------------------- */

interface Testimonial {
  name: string;
  role: string;
  year: string;
  /** Aim for ~25–45 words. Longer quotes need more room on small screens. */
  quote: string;
  /** Put the file in /public/testimonials/. If it's missing, initials are shown. */
  image: string;
  /** Optional 1–5. Leave out to hide the stars. */
  rating?: number;
  /** Optional proof-point chip on the photo, e.g. { value: "+30%", label: "user engagement" } */
  result?: { value: string; label: string };
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rohit Sharma",
    role: "Founder, Tech Startup",
    year: "2025",
    quote:
      "Working with Aman was one of the best decisions for our product. His strategic thinking and attention to detail turned our vision into a polished experience, and the whole process exceeded what we expected.",
    image: "/testimonials/client-1.png",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Co-founder, D2C Brand",
    year: "2025",
    quote:
      "Aman didn't just design a website. He understood our brand and turned it into an experience our customers actually remember. Communication was clear at every step and deadlines were always met.",
    image: "/testimonials/client-2.png",
    rating: 5,
  },
  {
    name: "Simran Kaur",
    role: "Product Lead, SaaS Company",
    year: "2024",
    quote:
      "We came in with a rough idea and left with a product our users love. The UI/UX work was thoughtful, the collaboration was effortless, and the results showed within the first month.",
    image: "/testimonials/client-3.png",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "CEO, Fintech Startup",
    year: "2024",
    quote:
      "Aman is a rare talent who combines creativity with technical know-how. The redesign of our platform lifted engagement and his recommendations were invaluable throughout.",
    image: "/testimonials/client-4.png",
    rating: 5,
    result: { value: "+30%", label: "user engagement" },
  },
];

/* -------------------------------------------------------------------------- */
/*  Tuning                                                                    */
/* -------------------------------------------------------------------------- */

// Viewport-heights of scrolling each testimonial gets.
const SCROLL_PER_ITEM = 1;
// Opacity of a word that hasn't been "read" yet.
const WORD_DIM = 0.16;

/* -------------------------------------------------------------------------- */

const N = TESTIMONIALS.length;

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** Photo with a graceful placeholder underneath, so missing images never look broken. */
function Portrait({ src, name, sizes }: { src: string; name: string; sizes: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-500/25 via-neutral-900 to-neutral-950">
        <span className="font-serif-display text-7xl italic text-white/30">{initials(name)}</span>
      </div>
      {!failed && (
        <Image
          src={src}
          alt={name}
          fill
          sizes={sizes}
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={0}
          fill="currentColor"
          className={i < rating ? "text-orange-500" : "text-white/15"}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);

  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(() => {
    if (reduced) return;

    const root = sectionRef.current;
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!root || !track || !stage) return;

    const cleanups: Array<() => void> = [];
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    const ctx = gsap.context(() => {
      const one = (sel: string) => root.querySelector<HTMLElement>(sel)!;
      const all = (sel: string) => Array.from(root.querySelectorAll<HTMLElement>(sel));

      const items = TESTIMONIALS.map((_, i) => ({
        quote: one(`[data-quote="${i}"]`),
        words: all(`[data-quote="${i}"] .t-word`),
        meta: one(`[data-meta="${i}"]`),
        img: one(`[data-img="${i}"]`),
        inner: one(`[data-img-inner="${i}"]`),
        shade: one(`[data-shade="${i}"]`),
        chip: root.querySelector<HTMLElement>(`[data-chip="${i}"]`),
        fill: one(`[data-fill="${i}"]`),
      }));

      /* ---- resting states: item 0 is on stage, everything else waits ---- */
      gsap.set(items.flatMap((it) => it.words), { opacity: WORD_DIM });
      items.forEach((it, i) => {
        if (i === 0) return;
        gsap.set(it.quote, { opacity: 0, y: 50 });
        gsap.set(it.meta, { opacity: 0, x: -24 });
        gsap.set(it.img, { clipPath: "inset(100% 0% 0% 0%)", rotate: 4 });
        gsap.set(it.inner, { scale: 1.3 });
        if (it.chip) gsap.set(it.chip, { opacity: 0, y: 20 });
      });

      /* ---- progress rail: highlight the current name ---- */
      const rails = all("[data-rail]");
      let activeIdx = -1;
      function setActive(p: number) {
        const idx = Math.min(N - 1, Math.floor(p * N + 0.12));
        if (idx === activeIdx) return;
        activeIdx = idx;
        rails.forEach((b, k) => {
          b.dataset.active = String(k === idx);
          b.setAttribute("aria-current", k === idx ? "true" : "false");
        });
      }
      setActive(0);

      /* ---- one master timeline, scrubbed by scroll. 1 unit = 1 testimonial ---- */
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: track,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => setActive(self.progress),
        },
      });
      stRef.current = tl.scrollTrigger ?? null;

      items.forEach((it, i) => {
        // ── enter: next photo wipes up over the previous one, its quote rises in
        if (i > 0) {
          const s = i - 0.12;
          tl.to(it.img, { clipPath: "inset(0% 0% 0% 0%)", rotate: 0, duration: 0.3, ease: "power2.out" }, s)
            .to(it.inner, { scale: 1, duration: 0.3, ease: "power2.out" }, s)
            .to(it.quote, { opacity: 1, y: 0, duration: 0.24, ease: "power2.out" }, s + 0.06)
            .to(it.meta, { opacity: 1, x: 0, duration: 0.2, ease: "power2.out" }, s + 0.14);
          if (it.chip) tl.to(it.chip, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }, s + 0.2);
        }

        // ── read: the quote lights up word by word as you scroll
        tl.to(
          it.words,
          { opacity: 1, duration: 0.08, stagger: { amount: 0.55 } },
          i === 0 ? 0.03 : i + 0.1
        );

        // ── exit: quote lifts away, photo dims and eases back
        if (i < N - 1) {
          const e = i + 0.86;
          tl.to(it.quote, { opacity: 0, y: -50, duration: 0.12, ease: "power2.in" }, e)
            .to(it.shade, { opacity: 0.65, duration: 0.14 }, e)
            .to(it.inner, { scale: 1.1, duration: 0.14 }, e);
          if (it.chip) tl.to(it.chip, { opacity: 0, y: -10, duration: 0.1 }, e);
        }

        // ── progress bar for this testimonial
        tl.fromTo(it.fill, { scaleX: 0 }, { scaleX: 1, duration: 1 }, i);
      });

      /* ---- photo tilts toward the cursor (fine pointers only) ---- */
      if (finePointer) {
        const stack = one(".t-img-stack");
        gsap.set(stack, { transformPerspective: 1000 });
        const rotX = gsap.quickTo(stack, "rotationX", { duration: 0.9, ease: "power3.out" });
        const rotY = gsap.quickTo(stack, "rotationY", { duration: 0.9, ease: "power3.out" });

        const onMove = (e: PointerEvent) => {
          const r = stage.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width - 0.5;
          const ny = (e.clientY - r.top) / r.height - 0.5;
          rotY(nx * 6);
          rotX(-ny * 5);
        };
        const onLeave = () => {
          rotX(0);
          rotY(0);
        };
        stage.addEventListener("pointermove", onMove);
        stage.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          stage.removeEventListener("pointermove", onMove);
          stage.removeEventListener("pointerleave", onLeave);
        });
      }
    }, root);

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert(); // also kills the ScrollTrigger
      stRef.current = null;
    };
  }, [reduced]);

  /** Jump to a testimonial. The scrubbed timeline then animates smoothly to it. */
  const jumpTo = (i: number) => {
    const st = stRef.current;
    if (!st) return;
    const p = (i + 0.8) / N; // 0.8 = quote fully read, not yet leaving
    window.scrollTo(0, st.start + p * (st.end - st.start));
  };

  return (
    <section ref={sectionRef} id="testimonials" className="relative bg-neutral-950">
      {/* Heading (scrolls away normally, before the stage locks in) */}
      <div className="mx-auto max-w-2xl px-5 pb-14 pt-24 text-center sm:px-8 sm:pb-20 sm:pt-32">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Kind words from the people I&apos;ve built with
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-white/50 sm:text-base">
          Founders and teams I&apos;ve worked with, in their own words.
        </p>
      </div>

      {reduced ? (
        /* ── Reduced motion: plain, readable cards, no pinning ── */
        <div className="mx-auto grid max-w-6xl gap-5 px-5 pb-24 sm:px-8 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              {t.rating ? <Stars rating={t.rating} /> : null}
              <blockquote className="mt-4 font-serif-display text-xl italic leading-snug text-white/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <Portrait src={t.image} name={t.name} sizes="48px" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{t.name}</span>
                  <span className="block text-sm text-white/50">
                    {t.role} · {t.year}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        /* ── Sticky track: the stage stays put while the timeline scrubs ── */
        <div
          ref={trackRef}
          style={{ height: `${(N * SCROLL_PER_ITEM + 1) * 100}svh` }}
          className="relative"
        >
          <div ref={stageRef} className="sticky top-0 h-svh overflow-hidden">
            {/* quiet warm light behind the photo */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 60% at 75% 50%, rgba(249,115,22,0.09) 0%, rgba(249,115,22,0) 70%)",
              }}
            />

            <div className="relative mx-auto grid h-full max-w-6xl grid-cols-1 content-center items-center gap-6 px-5 pb-20 pt-20 sm:gap-8 sm:px-8 sm:pb-24 sm:pt-24 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
              {/* ── Quotes: every item sits in the same grid cell, so the layout never jumps ── */}
              <div className="grid">
                {TESTIMONIALS.map((t, i) => (
                  <figure key={t.name} data-quote={i} className="col-start-1 row-start-1">
                    {t.rating ? <Stars rating={t.rating} /> : null}

                    <blockquote className="mt-4 font-serif-display text-[clamp(1.1rem,0.8rem+1.6vw,2.15rem)] italic leading-[1.22] tracking-tight text-white sm:mt-5">
                      {t.quote.split(" ").map((word, k) => (
                        <span key={k} className="t-word">
                          {word}{" "}
                        </span>
                      ))}
                    </blockquote>

                    <figcaption
                      data-meta={i}
                      className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-4 sm:mt-8 sm:pt-5"
                    >
                      <span>
                        <span className="block text-sm font-semibold text-white">{t.name}</span>
                        <span className="mt-0.5 block text-sm text-white/50">{t.role}</span>
                      </span>
                      <span className="text-sm text-white/40">{t.year}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>

              {/* ── Photos: stacked, later ones wipe up over earlier ones ── */}
              <div className="t-img-stack relative order-first mx-auto h-[22svh] w-full max-w-md sm:h-[30svh] lg:order-none lg:h-[64svh] lg:w-auto lg:max-w-none lg:justify-self-center lg:aspect-[4/5]">
                {TESTIMONIALS.map((t, i) => (
                  <div
                    key={t.name}
                    data-img={i}
                    className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 sm:rounded-3xl"
                  >
                    <div data-img-inner={i} className="absolute inset-0">
                      <Portrait
                        src={t.image}
                        name={t.name}
                        sizes="(max-width: 1024px) 90vw, 460px"
                      />
                    </div>
                    <div data-shade={i} className="absolute inset-0 bg-black opacity-0" />

                    {t.result && (
                      <>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                        <div
                          data-chip={i}
                          className="absolute bottom-3 left-3 rounded-xl border border-white/15 bg-black/40 px-3.5 py-2 backdrop-blur-md sm:bottom-4 sm:left-4"
                        >
                          <span className="font-serif-display text-2xl italic leading-none text-orange-400 sm:text-3xl">
                            {t.result.value}
                          </span>
                          <span className="ml-2 text-xs text-white/70">{t.result.label}</span>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Rail: one bar per testimonial – fills as you read, click to jump ── */}
            <nav aria-label="Testimonials" className="absolute inset-x-0 bottom-5 z-10 sm:bottom-8">
              <div className="mx-auto flex max-w-6xl gap-3 px-5 sm:gap-5 sm:px-8">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    data-rail={i}
                    data-active={i === 0}
                    aria-label={`Show testimonial from ${t.name}`}
                    onClick={() => jumpTo(i)}
                    className="group flex-1 text-left focus-visible:outline-none"
                  >
                    <span className="mb-2 hidden truncate text-xs font-medium text-white/30 transition-colors group-hover:text-white/70 group-focus-visible:text-white group-data-[active=true]:text-white sm:block">
                      {t.name}
                    </span>
                    <span className="block h-[2px] w-full overflow-hidden rounded-full bg-white/10 group-focus-visible:ring-2 group-focus-visible:ring-orange-400/70">
                      <span
                        data-fill={i}
                        className="block h-full origin-left bg-orange-500"
                        style={{ transform: "scaleX(0)" }}
                      />
                    </span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </section>
  );
}