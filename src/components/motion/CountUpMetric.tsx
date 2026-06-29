"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { duration, ease } from "@/lib/motion";

/**
 * Counts a numeric value up from zero when it scrolls into view. The animated
 * number is written straight to the DOM node's textContent (no per-frame React
 * re-render). Reduced motion shows the final value immediately.
 */
export function CountUpMetric({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  delay = 0,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delay?: number;
  className?: string;
}) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  const format = (n: number) =>
    n.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  useEffect(() => {
    if (!inView) return;
    const node = numRef.current;
    if (!node) return;

    if (reduce) {
      node.textContent = format(value);
      return;
    }

    const controls = animate(0, value, {
      duration: duration.hero,
      ease,
      delay,
      onUpdate: (latest) => {
        node.textContent = format(latest);
      },
    });
    return () => controls.stop();
    // format is derived from decimals; value/decimals are the real deps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value, decimals, delay]);

  return (
    <span ref={wrapRef} className={className}>
      {prefix}
      <span ref={numRef}>{format(0)}</span>
      {suffix}
    </span>
  );
}
