"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Premium card surface with a cursor-tracked spotlight and border glow.
 * The spotlight position is written to CSS custom properties on pointer move
 * (no React re-render, cheap). Visuals match the base Card so the system stays
 * consistent. On touch / no-hover devices the spotlight simply never triggers.
 */
export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group/spot relative overflow-hidden rounded-2xl border border-ink-600/70 bg-ink-800/50 p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:shadow-card-hover md:p-7",
        className,
      )}
    >
      {/* Cursor spotlight wash - fades in on hover, follows the pointer. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(22rem 22rem at var(--mx, 50%) var(--my, 0%), rgba(58,160,255,0.14), transparent 60%)",
        }}
      />
      {/* Top hairline that lights up on hover. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
