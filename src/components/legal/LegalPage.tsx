import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { IconArrow } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";

/**
 * Premium editorial document shell for legal pages. Calm ivory layout, Fraunces
 * heading, generous reading rhythm, contact card. Honest placeholder content -
 * the full policy is marked as being finalised. Only the header gets a subtle
 * reveal; the legal body stays static for distraction-free reading.
 */
export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden py-14 md:py-20">
      <div aria-hidden className="blueprint-light pointer-events-none absolute inset-x-0 top-0 h-80 opacity-50" />

      <div className="relative mx-auto w-full max-w-3xl px-5 lg:px-8">
        <Reveal blur={false}>
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${site.fullName} home`}>
              <Logo />
              <span className="font-display text-lg font-bold tracking-tight text-graphite-900">
                {site.name}
                <span className="text-cobalt-600">.</span>
              </span>
            </Link>

            <span className="mt-10 block font-mono text-[0.7rem] uppercase tracking-[0.18em] text-cobalt-600">
              Legal
            </span>
            <h1 className="mt-3 font-editorial text-edito-sm text-graphite-900 md:text-edito-md">{title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-graphite-600">{intro}</p>
          </div>
        </Reveal>

        <div className="mt-10 border-t border-graphite-900/10 pt-10">
          <div className="space-y-6 text-[0.95rem] leading-7 text-graphite-600 [&_strong]:font-semibold">
            {children}
          </div>
        </div>

        <div className="surface-card mt-12 rounded-2xl p-6 text-sm text-graphite-600">
          Questions about your data? Email{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-cobalt-600 hover:text-cobalt-700">
            {site.email}
          </a>
          .
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-cobalt-600 transition-colors hover:text-cobalt-700"
        >
          Back to homepage
          <IconArrow className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
