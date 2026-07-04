import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

/**
 * Section header block: eyebrow + large elegant heading + comfortable lead
 * paragraph. Luxury scale - big confident headings, readable lead text, no tiny
 * mono indices. tone="dark" adapts colors for obsidian sections.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-display text-lux-sm md:text-lux-md",
          tone === "dark" ? "text-white" : "text-graphite",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-prose text-lux-body",
            tone === "dark" ? "text-mist-200" : "text-slate-600",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
