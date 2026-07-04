import { cn } from "@/lib/cn";

/**
 * Luxury light card: clean white surface, hairline border, soft shadow that
 * lifts on hover. A thin champagne rule wipes in on hover so every card feels
 * part of one premium family.
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
        "group relative overflow-hidden rounded-3xl border border-platinum-300 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:p-8",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-champagne-line opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </div>
  );
}
