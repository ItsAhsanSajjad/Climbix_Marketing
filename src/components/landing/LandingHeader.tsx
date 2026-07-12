import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { site } from "@/lib/site";

/**
 * Minimal PPC-landing header - graphite wordmark with a cobalt dot + a single
 * cobalt CTA, no full navigation. Fewer exits = higher conversion. A quiet
 * porcelain bar with a warm platinum hairline.
 */
export function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-platinum-300 bg-ivory-100/85 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-100"
            aria-label={`${site.fullName} home`}
          >
            <Logo />
            <span className="font-display text-lg font-bold tracking-tight text-graphite">
              {site.name}
              <span className="text-cobalt-500">.</span>
            </span>
          </Link>
          <Link
            href="#audit-form"
            data-cta="landing-header"
            className="inline-flex h-11 items-center rounded-full bg-cobalt-500 px-5 text-[0.95rem] font-semibold text-white shadow-cobalt transition-all hover:-translate-y-0.5 hover:bg-cobalt-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-100"
          >
            Get Free Audit
          </Link>
        </div>
      </Container>
    </header>
  );
}
