import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";

type Tone = "canvas" | "white" | "navy";

const toneClass: Record<Tone, string> = {
  canvas: "", // inherits the global ivory canvas
  white: "bg-white",
  navy: "bg-navy-900 text-white",
};

/**
 * Editorial section wrapper for the redesigned homepage. Generous vertical
 * rhythm, centered max-width container, and a tone switch for selective
 * light/dark contrast bands (navy is used sparingly for the conversion climax).
 */
export function EditorialSection({
  id,
  tone = "canvas",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 md:py-28",
        toneClass[tone],
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-[1180px] px-5 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

/**
 * Editorial section intro: mono index + eyebrow, a serif headline, and an
 * optional lead paragraph. `tone="dark"` flips colors for navy bands.
 */
export function EditorialHeading({
  index,
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  className,
}: {
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {(index || eyebrow) && (
        <div className="flex items-center gap-3">
          {index && (
            <span className={cn("font-mono text-xs tracking-widest", dark ? "text-cobalt-200" : "text-cobalt-600")}>
              {index}
            </span>
          )}
          {eyebrow && (
            <span
              className={cn(
                "font-mono text-xs uppercase tracking-[0.18em]",
                dark ? "text-white/55" : "text-graphite-500",
              )}
            >
              {eyebrow}
            </span>
          )}
        </div>
      )}
      <h2
        className={cn(
          "max-w-3xl font-editorial text-edito-sm md:text-edito-md",
          dark ? "text-white" : "text-graphite-900",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed",
            dark ? "text-white/70" : "text-graphite-600",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
