"use client";

import { useEffect, useRef, useState } from "react";
import { m, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Magnetic hover wrapper. The child (typically a primary CTA) drifts a few px
 * toward the cursor, then springs back on leave - a small, expensive-feeling
 * cue that the action is interactive.
 *
 * The element rendered is ALWAYS an m.div (identical server/client markup, so no
 * hydration mismatch). The magnet only engages once we've confirmed, after
 * mount, a fine pointer with hover and no reduced-motion preference - so touch
 * devices and reduced-motion users simply never get pointer handlers.
 */
export function MagneticButton({
  children,
  className,
  strength = 0.35,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reduce) {
      setActive(false);
      return;
    }
    setActive(
      typeof window !== "undefined" &&
        window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    );
  }, [reduce]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <m.div
      ref={ref}
      className={cn("inline-flex", className)}
      style={{ x: sx, y: sy }}
      onMouseMove={active ? onMove : undefined}
      onMouseLeave={active ? reset : undefined}
    >
      {children}
    </m.div>
  );
}
