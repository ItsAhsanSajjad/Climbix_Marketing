import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { site } from "@/lib/site";

/**
 * Minimal PPC-landing header (light editorial) - logo + a single CTA, no full
 * navigation. Removing nav links keeps paid traffic focused on the one offer.
 */
export function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-graphite-900/10 bg-canvas-50/85 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-[1180px] px-5 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.fullName} home`}>
            <Logo />
            <span className="font-display text-lg font-bold tracking-tight text-graphite-900">
              {site.name}
              <span className="text-cobalt-600">.</span>
            </span>
          </Link>
          <EditorialButton href="#audit-form" size="md">
            Get My Free Audit
          </EditorialButton>
        </div>
      </div>
    </header>
  );
}
