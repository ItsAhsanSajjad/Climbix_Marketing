import { cn } from "@/lib/cn";
import { Container } from "./Container";

/**
 * Section shell. Owns the vertical rhythm (scroll-margin keeps anchor jumps
 * clear of the sticky navbar) and an optional contained inner wrapper.
 * data-section is a hook for Phase 2 scroll-reveal wiring.
 */
export function Section({
  id,
  className,
  contained = true,
  children,
}: {
  id?: string;
  className?: string;
  contained?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      data-section
      className={cn("scroll-mt-24 py-section md:py-section-lg", className)}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
