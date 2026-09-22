// // "use client";

// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Menu, X } from "lucide-react";

// // const NAV_LINKS = [
// //   { label: "About", href: "/about" },
// //   { label: "Building Meta Master", href: "https://www.metamaster.in" },
// //   { label: "Portfolio", href: "/#portfolio" },
// // ];

// // export function Navbar() {
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <motion.header
// //       initial={{ y: -40, opacity: 0 }}
// //       animate={{ y: 0, opacity: 1 }}
// //       transition={{ duration: 0.6, ease: "easeOut" }}
// //       className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-md"
// //     >
// //       <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
// //         <a
// //           href="/#top"
// //           className="font-hand text-xl italic text-orange-500 sm:text-2xl"
// //         >
// //           Aman chanchal
// //         </a>

// //         {/* Desktop links */}
// //         <ul className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
// //           {NAV_LINKS.map((link) => (
// //             <li key={link.label}>
// //               <a
// //                 href={link.href}
// //                 target={link.href.startsWith("http") ? "_blank" : undefined}
// //                 rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
// //                 className="relative transition-colors hover:text-neutral-950 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-neutral-900 after:transition-all after:duration-300 hover:after:w-full"
// //               >
// //                 {link.label}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>

// //         <a
// //           href="/contact"
// //           className="hidden rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95 md:inline-block"
// //         >
// //           Contact Me
// //         </a>

// //         {/* Mobile toggle */}
// //         <button
// //           aria-label={open ? "Close menu" : "Open menu"}
// //           onClick={() => setOpen((v) => !v)}
// //           className="inline-flex items-center justify-center rounded-full p-2 text-neutral-800 md:hidden"
// //         >
// //           {open ? <X size={22} /> : <Menu size={22} />}
// //         </button>
// //       </nav>

// //       {/* Mobile menu */}
// //       <AnimatePresence>
// //         {open && (
// //           <motion.div
// //             initial={{ height: 0, opacity: 0 }}
// //             animate={{ height: "auto", opacity: 1 }}
// //             exit={{ height: 0, opacity: 0 }}
// //             transition={{ duration: 0.3, ease: "easeInOut" }}
// //             className="overflow-hidden border-t border-neutral-100 bg-white md:hidden"
// //           >
// //             <ul className="flex flex-col gap-1 px-5 py-4">
// //               {NAV_LINKS.map((link) => (
// //                 <li key={link.label}>
// //                   <a
// //                     href={link.href}
// //                     onClick={() => setOpen(false)}
// //                     className="block rounded-lg px-3 py-3 text-base font-medium text-neutral-700 hover:bg-neutral-50"
// //                   >
// //                     {link.label}
// //                   </a>
// //                 </li>
// //               ))}
// //               <li className="pt-2">
// //                 <a
// //                   href="#contact"
// //                   onClick={() => setOpen(false)}
// //                   className="block rounded-full bg-neutral-950 px-5 py-3 text-center text-sm font-medium text-white"
// //                 >
// //                   Contact Me
// //                 </a>
// //               </li>
// //             </ul>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.header>
// //   );
// // }


// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { cn } from "@/lib/utils";

// const NAV_LINKS = [
//   { label: "About", href: "/about" },
//   { label: "Building Meta Master", href: "https://www.metamaster.in" },
//   { label: "Portfolio", href: "/#portfolio" },
// ];

// interface NavbarProps {
//   /**
//    * When true, the navbar becomes `fixed` (not `sticky`) so it truly
//    * overlays whatever is beneath it — meant for the homepage, where the
//    * dark webcam-pixel-grid hero sits directly under it. At scroll 0 the
//    * bar is transparent with light text, so the animation shows through
//    * it; past a small scroll threshold it transitions to the familiar
//    * solid blurred bar.
//    *
//    * IMPORTANT: because `fixed` removes the navbar from normal layout
//    * flow, the section rendered right below it (Hero) needs enough of
//    * its own top padding to keep its real content clear of the bar's
//    * height (~64–72px) at every breakpoint — worth double-checking if
//    * you've customized Hero's padding.
//    *
//    * Defaults to false, so every other page (e.g. /about) keeps the
//    * standard `sticky`, always-solid navbar exactly as before.
//    */
//   transparentAtTop?: boolean;
// }

// export function Navbar({ transparentAtTop = false }: NavbarProps) {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(!transparentAtTop);

//   useEffect(() => {
//     if (!transparentAtTop) return;

//     const handleScroll = () => setScrolled(window.scrollY > 40);
//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [transparentAtTop]);

//   // "solid" = should look like the familiar opaque/blurred bar, either
//   // because transparentAtTop is off entirely, or because we've scrolled
//   // past the threshold.
//   const solid = !transparentAtTop || scrolled;
//   // only true while genuinely see-through (transparentAtTop on AND at
//   // the very top of the page) — controls the legibility scrim.
//   const seeThrough = transparentAtTop && !scrolled;

//   return (
//     <motion.header
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={cn(
//         "left-0 right-0 top-0 z-50 w-full transition-all duration-500 ease-out",
//         // `fixed` overlays the hero (needed for the see-through effect);
//         // `sticky` is the normal, flow-reserving behavior everywhere else
//         transparentAtTop ? "fixed" : "sticky",
//         solid
//           ? "border-b border-neutral-100 bg-white/80 backdrop-blur-md"
//           : "border-b border-transparent bg-transparent backdrop-blur-none"
//       )}
//     >
//       {/* soft scrim, only while see-through, so nav text stays legible
//           regardless of what's playing in the webcam feed behind it —
//           without ever looking like an actual solid bar */}
//       {seeThrough && (
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
//       )}

//       <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
//         <a
//           href="/#top"
//           className={cn(
//             "font-hand text-xl italic sm:text-2xl",
//             solid ? "text-orange-500" : "text-orange-400 drop-shadow-md"
//           )}
//         >
//           Aman chanchal
//         </a>

//         {/* Desktop links */}
//         <ul
//           className={cn(
//             "hidden items-center gap-8 text-sm font-semibold md:flex",
//             solid ? "text-neutral-700" : "text-white drop-shadow-md"
//           )}
//         >
//           {NAV_LINKS.map((link) => (
//             <li key={link.label}>
//               <a
//                 href={link.href}
//                 target={link.href.startsWith("http") ? "_blank" : undefined}
//                 rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
//                 className={cn(
//                   "relative transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:transition-all after:duration-300 hover:after:w-full",
//                   solid
//                     ? "hover:text-neutral-950 after:bg-neutral-900"
//                     : "hover:text-white/80 after:bg-white"
//                 )}
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <a
//           href="/contact"
//           className={cn(
//             "hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 md:inline-block",
//             solid
//               ? "bg-neutral-950 text-white"
//               : "bg-white text-black shadow-lg hover:bg-white/90"
//           )}
//         >
//           Contact Me
//         </a>

//         {/* Mobile toggle */}
//         <button
//           aria-label={open ? "Close menu" : "Open menu"}
//           onClick={() => setOpen((v) => !v)}
//           className={cn(
//             "inline-flex items-center justify-center rounded-full p-2 transition-colors duration-300 md:hidden",
//             solid ? "text-neutral-800" : "text-white drop-shadow-md"
//           )}
//         >
//           {open ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </nav>

//       {/* Mobile menu — always solid white when open, regardless of
//           transparentAtTop, since a see-through dropdown would be
//           unreadable */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="relative overflow-hidden border-t border-neutral-100 bg-white md:hidden"
//           >
//             <ul className="flex flex-col gap-1 px-5 py-4">
//               {NAV_LINKS.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     target={link.href.startsWith("http") ? "_blank" : undefined}
//                     rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
//                     onClick={() => setOpen(false)}
//                     className="block rounded-lg px-3 py-3 text-base font-semibold text-neutral-700 hover:bg-neutral-50"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//               <li className="pt-2">
//                 <a
//                   href="/contact"
//                   onClick={() => setOpen(false)}
//                   className="block rounded-full bg-neutral-950 px-5 py-3 text-center text-sm font-semibold text-white"
//                 >
//                   Contact Me
//                 </a>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Building Meta Master", href: "https://www.metamaster.in" },
  { label: "Portfolio", href: "/#portfolio" },
];

interface NavbarProps {
  /**
   * Homepage mode (kept under the old prop name so page.tsx doesn't change).
   *
   * The navbar floats over the scroll-driven hero as a dark glass pill:
   *  - at the very top it is fully transparent – just logo, links and CTA
   *    sitting on the scene, nothing that looks like a "bar";
   *  - after a little scroll it condenses into a small blurred glass pill;
   *  - it then stays visible in every section (opt in to hide-on-scroll-down
   *    with `hideOnScroll`).
   *
   * When false (every other page) it is the standard sticky, solid bar.
   */
  transparentAtTop?: boolean;
  /**
   * Pass the same `revealed` flag the Hero gets. The navbar then drops in
   * exactly when the preloader has finished, alongside the hero's intro,
   * instead of animating in unseen underneath the preloader.
   * Defaults to true, so pages without a preloader are unaffected.
   */
  revealed?: boolean;
  /**
   * Homepage mode only. When true the bar tucks away while scrolling down and
   * returns on scroll up. Off by default: the compact pill now stays on screen
   * in every section, so it never feels like it went missing.
   */
  hideOnScroll?: boolean;
}

export function Navbar({
  transparentAtTop = false,
  revealed = true,
  hideOnScroll = false,
}: NavbarProps) {
  const floating = transparentAtTop;

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!floating) return;

    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      const delta = y - lastY;
      if (Math.abs(delta) > 6) {
        // only when opted in: hide on the way down, show on the way up
        setHidden(hideOnScroll && delta > 0 && y > 200);
        lastY = y;
      }
      if (y <= 40) setHidden(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [floating, hideOnScroll]);

  // never tuck the bar away while the mobile menu is open
  const isHidden = floating && hideOnScroll && hidden && !open;
  // the pill only becomes visible glass once scrolled (or when the menu is open)
  const glass = floating && (scrolled || open);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={
        revealed
          ? { y: isHidden ? -120 : 0, opacity: isHidden ? 0 : 1 }
          : { y: -40, opacity: 0 }
      }
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        floating
          ? "pointer-events-none fixed inset-x-0 top-0 z-50 flex flex-col items-center gap-2 px-3 pt-3 sm:px-6 sm:pt-4"
          : "sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-md"
      )}
    >
      <div
        className={cn(
          floating &&
            "pointer-events-auto w-full rounded-full border transition-all duration-500 ease-out",
          floating &&
            (glass
              ? "max-w-4xl border-white/10 bg-neutral-950/55 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl"
              : "max-w-6xl border-transparent bg-transparent")
        )}
      >
        <nav
          className={cn(
            "mx-auto flex items-center justify-between",
            floating ? "px-5 py-3 sm:px-7" : "max-w-6xl px-5 py-4 sm:px-8"
          )}
        >
          <a
            href="/#top"
            className={cn(
              "font-hand text-xl italic sm:text-2xl",
              floating ? "text-orange-400" : "text-orange-500"
            )}
          >
            Aman chanchal
          </a>

          {/* Desktop links */}
          <ul
            className={cn(
              "hidden items-center gap-8 text-sm font-semibold md:flex",
              floating ? "text-white/80" : "text-neutral-700"
            )}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cn(
                    "relative transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:transition-all after:duration-300 hover:after:w-full",
                    floating
                      ? "hover:text-white after:bg-white"
                      : "hover:text-neutral-950 after:bg-neutral-900"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/contact"
            className={cn(
              "hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 md:inline-block",
              floating
                ? "bg-white text-black hover:bg-white/90"
                : "bg-neutral-950 text-white"
            )}
          >
            Contact Me
          </a>

          {/* Mobile toggle */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex items-center justify-center rounded-full p-2 transition-colors duration-300 md:hidden",
              floating ? "text-white" : "text-neutral-800"
            )}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu – a separate glass panel under the pill on the homepage,
          the familiar white dropdown everywhere else */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
              "overflow-hidden md:hidden",
              floating
                ? "pointer-events-auto w-full max-w-4xl rounded-3xl border border-white/10 bg-neutral-950/85 backdrop-blur-xl"
                : "border-t border-neutral-100 bg-white"
            )}
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-base font-semibold",
                      floating
                        ? "text-white/80 hover:bg-white/5 hover:text-white"
                        : "text-neutral-700 hover:bg-neutral-50"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-full px-5 py-3 text-center text-sm font-semibold",
                    floating ? "bg-white text-black" : "bg-neutral-950 text-white"
                  )}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}