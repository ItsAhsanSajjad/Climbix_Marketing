import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "onDark" | "ghost";
type Size = "md" | "lg" | "xl";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-all duration-200 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // The dominant CTA - cobalt fill, white text. Works on light and dark.
  primary:
    "bg-cobalt-500 text-white shadow-cobalt hover:-translate-y-0.5 hover:bg-cobalt-600",
  // Light-surface secondary - graphite outline on white.
  secondary:
    "border border-graphite/15 bg-white text-graphite hover:border-cobalt-500 hover:text-cobalt-600 hover:-translate-y-0.5",
  // For placement on dark obsidian sections.
  onDark:
    "border border-white/25 bg-white/5 text-white hover:border-white/50 hover:bg-white/10 hover:-translate-y-0.5",
  ghost: "text-graphite/70 hover:text-cobalt-600",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-14 px-7 text-base",
  xl: "h-16 px-9 text-lg",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

/**
 * Link-styled button. Primary carries a single light sheen that sweeps once on
 * hover - a premium micro-interaction, not a loop. Extra props (e.g. data-cta
 * for the click tracker) are forwarded to the underlying Link.
 */
export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
        />
      )}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}
