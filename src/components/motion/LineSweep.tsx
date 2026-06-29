"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/cn";
import { ease, duration } from "@/lib/motion";

/**
 * A hairline that draws across its container on first view (scaleX from a chosen
 * origin). The shared line-draw gesture - reused for section accents and the CTA
 * panel's top edge - so "lines drawing in" reads as one deliberate motif.
 */
export function LineSweep({
  className,
  origin = "left",
  delay = 0,
}: {
  className?: string;
  origin?: "left" | "center";
  delay?: number;
}) {
  return (
    <m.span
      aria-hidden
      className={cn(
        "block h-px bg-gradient-to-r from-transparent via-accent-400/70 to-transparent",
        origin === "center" ? "origin-center" : "origin-left",
        className,
      )}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: duration.slow, ease, delay }}
    />
  );
}
