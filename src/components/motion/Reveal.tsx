"use client";

import { m } from "framer-motion";
import { fadeUp, fadeIn, viewport, ease, duration } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay before this element reveals (seconds). */
  delay?: number;
  /** Drop the blur pass for large/expensive surfaces. */
  blur?: boolean;
  /** Render as a different element (default div). */
  as?: "div" | "section" | "li" | "span";
};

/**
 * Single-element scroll reveal. Fades + lifts + clears blur once, when scrolled
 * into view. Honours reduced motion globally via MotionProvider.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  blur = true,
  as = "div",
}: RevealProps) {
  const MTag = m[as] as typeof m.div;
  const variants = blur ? fadeUp : fadeIn;
  return (
    <MTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={delay ? { duration: duration.reveal, ease, delay } : undefined}
    >
      {children}
    </MTag>
  );
}
