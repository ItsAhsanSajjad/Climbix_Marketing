"use client";

import { m, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";

/**
 * Climbix mark - an ascending step motif (the "climb") on a deep navy-to-cobalt
 * tile, capped with a champagne summit dot: analytics-inspired, serious, and
 * legible on both ivory and navy surfaces. The path strokes itself in on mount;
 * the summit dot lands last. Pure SVG so it stays crisp without an asset.
 */
export function Logo({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <span
      className={
        className ??
        "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-cobalt-600 shadow-soft transition-transform duration-300 hover:scale-105"
      }
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        <m.path
          d="M4 18h4V12h4V6h7"
          stroke="#ffffff"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={reduce ? { duration: 0 } : { duration: 1, ease, delay: 0.2 }}
        />
        <m.circle
          cx="20"
          cy="6"
          r="1.6"
          fill="#D1AA62"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reduce ? { duration: 0 } : { duration: 0.4, ease, delay: 1.05 }}
        />
      </svg>
    </span>
  );
}
