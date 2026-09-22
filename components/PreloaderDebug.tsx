"use client";

/**
 * TEMPORARY DEBUG COMPONENT.
 *
 * This has nothing clever in it at all — no GSAP, no absolute positioning,
 * no stacked panels. Just a plain flex-centered <Image>. The goal is to
 * find out whether ANY version of rendering /logo.png inside this
 * Preloader's context works, before we look at animation or positioning
 * again.
 *
 * How to use it:
 * 1. In whatever file renders <Preloader onComplete={...} /> (your
 *    page.tsx / Home component), temporarily swap the import to point at
 *    this file instead, e.g.:
 *
 *      import { Preloader } from "@/components/preloader/PreloaderDebugMinimal";
 *
 * 2. Reload the page. You should see a plain black screen with your logo
 *    sitting dead-center, plus the 6 icons in a simple row underneath it.
 *    No animation, no fancy positioning — just... an <img> tag.
 *
 * If THIS doesn't render either, the problem isn't in any of the
 * positioning/animation code we've touched so far — it's something more
 * fundamental (an ancestor element covering this with a higher stacking
 * context, a Next.js image config issue, or the files themselves not
 * being valid images despite the right filenames). Tell me exactly what
 * you see (or don't see) and we'll go from there.
 */

import Image from "next/image";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-neutral-950">
      <img
        src="/logo.png"
        alt="logo (plain img tag, no next/image)"
        style={{ width: 140, height: "auto", border: "2px solid lime" }}
      />

      <div style={{ display: "flex", gap: 12 }}>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <img
            key={n}
            src={`/icon-${n}.png`}
            alt={`icon-${n} (plain img tag)`}
            style={{ width: 48, height: "auto", border: "2px solid cyan" }}
          />
        ))}
      </div>

      <Image
        src="/logo.png"
        alt="logo (next/image)"
        width={100}
        height={100}
        style={{ border: "2px solid orange" }}
      />

      <button
        type="button"
        onClick={onComplete}
        style={{
          marginTop: 24,
          padding: "8px 16px",
          background: "white",
          color: "black",
          borderRadius: 8,
        }}
      >
        Skip preloader →
      </button>
    </div>
  );
}