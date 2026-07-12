import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { site } from "@/lib/site";

/**
 * Branded 404. Paid clicks sometimes land on mistyped or stale URLs - the
 * default framework error page burns that spend. This keeps the brand, states
 * the miss plainly, and routes the visitor to the audit offer or home.
 */
export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-16 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-cobalt-500/10 blur-[90px]"
      />
      <div className="relative flex w-full max-w-lg flex-col items-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-500 focus-visible:ring-offset-2"
          aria-label={`${site.fullName} home`}
        >
          <Logo />
          <span className="font-display text-lg font-bold tracking-tight text-graphite">
            {site.name}
            <span className="text-cobalt-500">.</span>
          </span>
        </Link>

        <p className="mt-10 font-mono text-sm tracking-[0.3em] text-slate-500">404</p>
        <h1 className="mt-3 font-display text-lux-sm text-graphite md:text-lux-md">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-md text-lux-body text-slate-600">
          The link may be old or mistyped. The free audit, though, is very much
          live.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button href={site.ctaPrimary.href} size="lg" data-cta="404-audit">
            {site.ctaPrimary.label}
          </Button>
          <Button href="/" variant="secondary" size="lg" data-cta="404-home">
            Back to homepage
          </Button>
        </div>
      </div>
    </main>
  );
}
