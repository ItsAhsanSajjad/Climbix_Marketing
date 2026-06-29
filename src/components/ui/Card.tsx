import { cn } from "@/lib/cn";

/**
 * Base surface for all card content. Subtle border + dark glass fill + soft
 * shadow give depth without neon. Shares a hover signature with SpotlightCard
 * (lift + top hairline) so every card on the site feels part of one family;
 * SpotlightCard adds the cursor-tracked spotlight on top for the services bento.
 */
export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-ink-600/70 bg-ink-800/50 p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/40 hover:shadow-card-hover md:p-7",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </div>
  );
}
