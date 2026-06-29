import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-all duration-200 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // CTA - the only place the accent gradient appears as a fill. Stands out by design.
  primary:
    "bg-accent-gradient text-ink-950 shadow-glow hover:-translate-y-0.5 hover:shadow-card-hover",
  secondary:
    "border border-ink-600 bg-ink-800/60 text-mist-100 hover:border-accent-400/60 hover:bg-ink-700/60 hover:-translate-y-0.5",
  ghost: "text-mist-200 hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

/**
 * Link-styled button. Primary variant carries a light sheen that sweeps once on
 * hover - a premium micro-interaction, not an infinite loop. Magnetic hover is
 * layered on top via the MagneticButton wrapper where wanted.
 */
export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
        />
      )}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}
