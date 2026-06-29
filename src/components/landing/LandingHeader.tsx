import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { site } from "@/lib/site";

/**
 * Minimal PPC-landing header - logo + a single CTA, no full navigation. Removing
 * nav links keeps paid traffic focused on the one offer (fewer exits = higher
 * conversion).
 */
export function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.fullName} home`}>
            <Logo />
            <span className="font-display text-lg font-bold tracking-tight text-white">
              {site.name}
              <span className="text-accent-400">.</span>
            </span>
          </Link>
          <Link
            href="#audit-form"
            className="inline-flex h-10 items-center rounded-full bg-accent-gradient px-5 text-sm font-semibold text-ink-950 shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Get My Free Audit
          </Link>
        </div>
      </Container>
    </header>
  );
}
