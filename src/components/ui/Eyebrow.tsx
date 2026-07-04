"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/cn";
import { ease, duration } from "@/lib/motion";

/**
 * Small uppercase label above section headings. A short champagne hairline wipes
 * in (scaleX) on first view. Used sparingly - luxury means fewer tiny labels.
 * tone="dark" adapts it for obsidian sections.
 */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-eyebrow uppercase",
        tone === "dark" ? "text-champagne-300" : "text-cobalt-600",
        className,
      )}
    >
      <m.span
        className={cn(
          "h-px w-7 origin-left",
          tone === "dark" ? "bg-champagne-400/70" : "bg-champagne-400",
        )}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: duration.reveal, ease }}
        aria-hidden
      />
      {children}
    </span>
  );
}
