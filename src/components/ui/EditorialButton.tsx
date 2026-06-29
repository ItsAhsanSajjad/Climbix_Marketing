import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "outline-light" | "ghost";
type Size = "md" | "lg";

const base =
  "group/eb relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Primary CTA — refined cobalt fill on light surfaces.
  primary:
    "bg-cobalt-gradient text-white shadow-lift hover:-translate-y-0.5 hover:shadow-[0_30px_60px_-22px_rgba(27,63,176,0.5)] focus-visible:ring-cobalt-500 focus-visible:ring-offset-canvas-100",
  // Secondary on light — graphite outline.
  outline:
    "border border-graphite-900/15 bg-white/60 text-graphite-900 hover:border-cobalt-500/50 hover:bg-white hover:-translate-y-0.5 focus-visible:ring-cobalt-500 focus-visible:ring-offset-canvas-100",
  // Secondary on dark navy panels.
  "outline-light":
    "border border-white/25 bg-white/5 text-white hover:border-white/50 hover:bg-white/10 hover:-translate-y-0.5 focus-visible:ring-white focus-visible:ring-offset-navy-900",
  ghost: "text-graphite-700 hover:text-cobalt-600",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

export function EditorialButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
}
