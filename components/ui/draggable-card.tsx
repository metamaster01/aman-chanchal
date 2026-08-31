"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * DraggableCardContainer
 * Wrap a group of <DraggableCard /> in this. Provides the bounding box
 * that every card is constrained to drag within (so cards never fly
 * off-screen, especially important on small/mobile viewports).
 */
export function DraggableCardContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // @ts-expect-error – inject the shared container ref as drag constraints
          return React.cloneElement(child, { containerRef });
        }
        return child;
      })}
    </div>
  );
}

interface DraggableCardProps {
  className?: string;
  children: React.ReactNode;
  /** injected automatically by DraggableCardContainer */
  containerRef?: React.RefObject<HTMLDivElement>;
  /** resting tilt of the polaroid, in degrees */
  rotate?: number;
  /** stacking order, front card should be highest */
  zIndex?: number;
}

export function DraggableCard({
  className,
  children,
  containerRef,
  rotate = 0,
  zIndex = 10,
}: DraggableCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // subtle extra tilt while the card is being dragged, based on
  // how far it has moved horizontally – makes it feel physical.
  const dragRotate = useTransform(x, [-150, 0, 150], [rotate - 12, rotate, rotate + 12]);

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.12}
      dragTransition={{ bounceStiffness: 260, bounceDamping: 22 }}
      dragMomentum={false}
      style={{ x, y, rotate: dragRotate, zIndex }}
      initial={{ opacity: 0, scale: 0.85, rotate }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
      whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
      whileDrag={{ scale: 1.08, zIndex: 50, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35)" }}
      className={cn(
        "absolute cursor-grab touch-none select-none rounded-2xl bg-white p-3 pb-8 shadow-xl active:cursor-grabbing",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
