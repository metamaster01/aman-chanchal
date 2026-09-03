// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const NAV_LINKS = [
//   { label: "About", href: "/about" },
//   { label: "Building Meta Master", href: "https://www.metamaster.in" },
//   { label: "Portfolio", href: "/#portfolio" },
// ];

// export function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <motion.header
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-md"
//     >
//       <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
//         <a
//           href="/#top"
//           className="font-hand text-xl italic text-orange-500 sm:text-2xl"
//         >
//           Aman chanchal
//         </a>

//         {/* Desktop links */}
//         <ul className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
//           {NAV_LINKS.map((link) => (
//             <li key={link.label}>
//               <a
//                 href={link.href}
//                 target={link.href.startsWith("http") ? "_blank" : undefined}
//                 rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
//                 className="relative transition-colors hover:text-neutral-950 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-neutral-900 after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <a
//           href="/contact"
//           className="hidden rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95 md:inline-block"
//         >
//           Contact Me
//         </a>

//         {/* Mobile toggle */}
//         <button
//           aria-label={open ? "Close menu" : "Open menu"}
//           onClick={() => setOpen((v) => !v)}
//           className="inline-flex items-center justify-center rounded-full p-2 text-neutral-800 md:hidden"
//         >
//           {open ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </nav>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="overflow-hidden border-t border-neutral-100 bg-white md:hidden"
//           >
//             <ul className="flex flex-col gap-1 px-5 py-4">
//               {NAV_LINKS.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     onClick={() => setOpen(false)}
//                     className="block rounded-lg px-3 py-3 text-base font-medium text-neutral-700 hover:bg-neutral-50"
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//               <li className="pt-2">
//                 <a
//                   href="#contact"
//                   onClick={() => setOpen(false)}
//                   className="block rounded-full bg-neutral-950 px-5 py-3 text-center text-sm font-medium text-white"
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
   * When true, the navbar becomes `fixed` (not `sticky`) so it truly
   * overlays whatever is beneath it — meant for the homepage, where the
   * dark webcam-pixel-grid hero sits directly under it. At scroll 0 the
   * bar is transparent with light text, so the animation shows through
   * it; past a small scroll threshold it transitions to the familiar
   * solid blurred bar.
   *
   * IMPORTANT: because `fixed` removes the navbar from normal layout
   * flow, the section rendered right below it (Hero) needs enough of
   * its own top padding to keep its real content clear of the bar's
   * height (~64–72px) at every breakpoint — worth double-checking if
   * you've customized Hero's padding.
   *
   * Defaults to false, so every other page (e.g. /about) keeps the
   * standard `sticky`, always-solid navbar exactly as before.
   */
  transparentAtTop?: boolean;
}

export function Navbar({ transparentAtTop = false }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!transparentAtTop);

  useEffect(() => {
    if (!transparentAtTop) return;

    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparentAtTop]);

  // "solid" = should look like the familiar opaque/blurred bar, either
  // because transparentAtTop is off entirely, or because we've scrolled
  // past the threshold.
  const solid = !transparentAtTop || scrolled;
  // only true while genuinely see-through (transparentAtTop on AND at
  // the very top of the page) — controls the legibility scrim.
  const seeThrough = transparentAtTop && !scrolled;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "left-0 right-0 top-0 z-50 w-full transition-all duration-500 ease-out",
        // `fixed` overlays the hero (needed for the see-through effect);
        // `sticky` is the normal, flow-reserving behavior everywhere else
        transparentAtTop ? "fixed" : "sticky",
        solid
          ? "border-b border-neutral-100 bg-white/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent backdrop-blur-none"
      )}
    >
      {/* soft scrim, only while see-through, so nav text stays legible
          regardless of what's playing in the webcam feed behind it —
          without ever looking like an actual solid bar */}
      {seeThrough && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      )}

      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="/#top"
          className={cn(
            "font-hand text-xl italic sm:text-2xl",
            solid ? "text-orange-500" : "text-orange-400 drop-shadow-md"
          )}
        >
          Aman chanchal
        </a>

        {/* Desktop links */}
        <ul
          className={cn(
            "hidden items-center gap-8 text-sm font-semibold md:flex",
            solid ? "text-neutral-700" : "text-white drop-shadow-md"
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
                  solid
                    ? "hover:text-neutral-950 after:bg-neutral-900"
                    : "hover:text-white/80 after:bg-white"
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
            solid
              ? "bg-neutral-950 text-white"
              : "bg-white text-black shadow-lg hover:bg-white/90"
          )}
        >
          Contact Me
        </a>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex items-center justify-center rounded-full p-2 transition-colors duration-300 md:hidden",
            solid ? "text-neutral-800" : "text-white drop-shadow-md"
          )}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu — always solid white when open, regardless of
          transparentAtTop, since a see-through dropdown would be
          unreadable */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative overflow-hidden border-t border-neutral-100 bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-semibold text-neutral-700 hover:bg-neutral-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-neutral-950 px-5 py-3 text-center text-sm font-semibold text-white"
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