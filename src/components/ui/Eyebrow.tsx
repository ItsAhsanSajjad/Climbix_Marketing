"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/cn";
import { ease, duration } from "@/lib/motion";

/**
 * Small uppercase label that sits above section headings. The leading hairline
 * wipes in (scaleX) on first view - the same line-draw gesture used by the nav
 * underline and process rail, so headings feel part of the motion language.
 */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-eyebrow uppercase text-accent-300",
        className,
      )}
    >
      <m.span
        className="h-px w-6 origin-left bg-accent-400/70"
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
