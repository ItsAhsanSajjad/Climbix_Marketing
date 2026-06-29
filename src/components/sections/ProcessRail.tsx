"use client";

import { m } from "framer-motion";
import { ease } from "@/lib/motion";

/**
 * Desktop connector line for the process steps. Draws left-to-right as the
 * section scrolls into view, reinforcing a guided path. Cobalt on light.
 */
export function ProcessRail() {
  return (
    <m.div
      aria-hidden
      className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-gradient-to-r from-cobalt-500/0 via-cobalt-500/40 to-sand-400/50 md:block"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      transition={{ duration: 1.1, ease, delay: 0.2 }}
    />
  );
}
