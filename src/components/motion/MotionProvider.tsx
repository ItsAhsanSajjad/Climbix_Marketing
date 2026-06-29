"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";

/**
 * Global motion context.
 * - `reducedMotion="user"` makes Framer Motion automatically honour the OS
 *   "reduce motion" setting everywhere - transforms collapse, opacity stays.
 * - `LazyMotion` + `domAnimation` ships only the DOM animation features we use,
 *   keeping the client bundle lean. Components use the `m` namespace from
 *   framer-motion to benefit from this.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
