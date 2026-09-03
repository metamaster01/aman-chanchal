"use client";

import { useEffect, useRef } from "react";

interface PixelGridBackgroundProps {
  className?: string;
  /** size of each square pixel cell, in px */
  cellSize?: number;
  /** gap between cells, in px */
  gap?: number;
  /** base pixel color as an "R, G, B" string */
  color?: string;
  /** color pixels shift toward near the cursor, as an "R, G, B" string */
  accentColor?: string;
  /** how far (px) the cursor's glow reaches across the grid */
  radius?: number;
}

/**
 * A lightweight, dependency-free animated grid of pixels rendered on a
 * <canvas>. Every cell drifts through a slow ambient wave, and cells
 * near the cursor brighten toward `accentColor` — visually similar to
 * a "pixelated webcam" effect, but driven by pointer position instead
 * of an actual camera feed (no permissions, no prompts, works for
 * every visitor immediately).
 *
 * Purely decorative: render this absolutely positioned behind your
 * content with `pointer-events-none` so it never intercepts clicks or
 * hovers meant for the real UI on top of it.
 */
export function PixelGridBackground({
  className,
  cellSize = 22,
  gap = 4,
  color = "15, 23, 42",
  accentColor = "249, 115, 22",
  radius = 170,
}: PixelGridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / (cellSize + gap)) + 1;
      rows = Math.ceil(height / (cellSize + gap)) + 1;
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handlePointerLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    // listen on the container, not window — keeps this section's effect
    // fully independent of anything happening elsewhere on the page.
    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", handlePointerLeave);

    const start = performance.now();

    const draw = (now: number) => {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, width, height);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * (cellSize + gap);
          const y = r * (cellSize + gap);
          const cx = x + cellSize / 2;
          const cy = y + cellSize / 2;

          // slow ambient wave, staggered per cell so it ripples rather
          // than pulsing all at once
          const wave = Math.sin(t * 0.6 + (c + r) * 0.35) * 0.5 + 0.5;
          let alpha = 0.03 + wave * 0.05;

          const dx = cx - mouseRef.current.x;
          const dy = cy - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let mix = 0;
          if (dist < radius) {
            mix = 1 - dist / radius;
            alpha += mix * 0.5;
          }

          ctx.fillStyle = `rgba(${mix > 0.02 ? accentColor : color}, ${Math.min(alpha, 0.85)})`;
          const size = cellSize * (0.82 + wave * 0.12 + mix * 0.12);
          const offset = (cellSize - size) / 2;
          ctx.fillRect(x + offset, y + offset, size, size);
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [cellSize, gap, color, accentColor, radius]);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}