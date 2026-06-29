import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

/**
 * Standard section header block: optional editorial index + eyebrow + heading +
 * description. The mono index ("01 / 05") gives the page an editorial, deliberate
 * structure. Type hierarchy and max-width stay identical across every section.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        {index && (
          <span className="font-mono text-[0.7rem] font-medium tracking-widest text-mist-400">
            {index}
          </span>
        )}
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      </div>
      <h2 className="font-display text-display-sm text-paper md:text-[2.85rem] md:leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-prose text-base leading-relaxed text-mist-200 md:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
