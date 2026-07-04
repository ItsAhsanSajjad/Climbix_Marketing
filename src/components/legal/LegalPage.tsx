import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { IconArrow } from "@/components/ui/Icon";
import { site } from "@/lib/site";

/**
 * Minimal shell for legal pages. Honest placeholder content - the full policy is
 * marked as being finalised rather than inventing binding legal text. Light,
 * highly readable document style with generous spacing.
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
    <main className="relative min-h-screen py-14 md:py-20">
      <Container className="max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${site.fullName} home`}>
          <Logo />
          <span className="font-display text-lg font-bold tracking-tight text-graphite">
            {site.name}
            <span className="text-cobalt-500">.</span>
          </span>
        </Link>

        <h1 className="mt-12 font-display text-lux-sm text-graphite">{title}</h1>
        <p className="mt-5 text-lux-lead text-slate-600">{intro}</p>

        <div className="mt-10 space-y-6 text-lux-body leading-relaxed text-slate-600">{children}</div>

        <div className="mt-12 rounded-2xl border border-platinum-300 bg-ivory-50 p-6 text-base text-slate-600">
          Questions about your data? Email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-cobalt-600 hover:text-cobalt-700">
            {site.email}
          </a>
          .
        </div>

        <Link
          href="/"
          className="mt-12 inline-flex items-center gap-2 text-base font-semibold text-cobalt-600 transition-colors hover:text-cobalt-700"
        >
          Back to homepage
          <IconArrow className="h-4 w-4" />
        </Link>
      </Container>
    </main>
  );
}
