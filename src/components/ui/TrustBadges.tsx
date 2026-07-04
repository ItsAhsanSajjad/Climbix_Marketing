import { IconCheck } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/**
 * Small trust-badge pills shown near forms and CTAs. Method/process claims only
 * (audit-first, no obligation) - never fake certifications or partner marks.
 * tone="dark" adapts the pills for navy sections.
 */
export function TrustBadges({
  items,
  tone = "light",
  className,
}: {
  items: readonly string[];
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium",
            tone === "dark"
              ? "border-white/15 bg-white/5 text-mist-100"
              : "border-platinum-300 bg-white text-slate-600",
          )}
        >
          <IconCheck className={cn("h-3.5 w-3.5 shrink-0", tone === "dark" ? "text-teal-400" : "text-teal-500")} />
          {item}
        </li>
      ))}
    </ul>
  );
}
