"use client";

import { m, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";

/**
 * Climbix mark - an upward ascending step motif (the "climb"), rendered in the
 * accent gradient. The path strokes itself in on mount and the mark lifts subtly
 * on hover. Pure SVG so it stays crisp and themeable without an asset.
 */
export function Logo({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <span
      className={
        className ??
        "flex h-9 w-9 items-center justify-center rounded-xl bg-accent-gradient shadow-glow transition-transform duration-300 hover:scale-105"
      }
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <m.path
          d="M4 18h4V12h4V6h8"
          stroke="#05070d"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={reduce ? { duration: 0 } : { duration: 1, ease, delay: 0.2 }}
        />
      </svg>
    </span>
  );
}
