import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { IconArrow } from "@/components/ui/Icon";
import { site } from "@/lib/site";

/**
 * Minimal shell for legal pages. Honest placeholder content - the full policy is
 * marked as being finalised rather than inventing binding legal text. Gives the
 * footer Privacy/Terms links a real destination instead of dead "#" anchors.
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
    <main className="relative min-h-screen py-12 md:py-16">
      <Container className="max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${site.fullName} home`}>
          <Logo />
          <span className="font-display text-lg font-bold tracking-tight text-white">
            {site.name}
            <span className="text-accent-400">.</span>
          </span>
        </Link>

        <h1 className="mt-10 font-display text-display-sm text-paper">{title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-mist-200">{intro}</p>

        <div className="mt-8 space-y-5 text-sm leading-relaxed text-mist-300">{children}</div>

        <div className="mt-10 rounded-2xl border border-ink-600/70 bg-ink-900/40 p-5 text-sm text-mist-300">
          Questions about your data? Email{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-accent-300 hover:text-accent-200">
            {site.email}
          </a>
          .
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent-300 transition-colors hover:text-accent-200"
        >
          Back to homepage
          <IconArrow className="h-4 w-4" />
        </Link>
      </Container>
    </main>
  );
}
