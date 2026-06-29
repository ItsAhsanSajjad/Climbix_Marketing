import { cn } from "@/lib/cn";

/**
 * Centred max-width wrapper. Single place that controls horizontal content width
 * and gutter so every section lines up on the same vertical edges.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("container", className)}>{children}</div>;
}
