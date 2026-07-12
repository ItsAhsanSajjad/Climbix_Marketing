import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { IconCheck } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { caseStudies, caseStudiesPage, site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Anonymized, verified campaign outcomes from paid media and lead-generation work across the US, UK, UAE, and Pakistan - published with period and context.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies · Climbix Marketing",
    description:
      "Measured campaign improvements, presented with context - from paid search and lead-generation work across multiple markets.",
    url: "/case-studies",
  },
};

/**
 * /case-studies - the proof page. Anonymized, verified campaign outcomes
 * presented as evidence panels: challenge, approach, work, metrics with
 * period, and an honest methodology statement. Every figure maps to
 * docs/stats-sources.md.
 */
export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ]}
      />
      <span id="top" />
      <Navbar />

      <main id="main">
        {/* Hero */}
        <section className="dark-section relative overflow-hidden">
          <div aria-hidden className="signal-grid pointer-events-none absolute inset-0 opacity-25" />
          <Container className="relative py-16 md:py-24">
            <div className="flex max-w-3xl flex-col items-start gap-6">
              <span className="flex items-center gap-3">
                <span className="h-px w-8 bg-bronze-400/70" aria-hidden />
                <span className="doc-kicker text-bronze-300">{caseStudiesPage.eyebrow}</span>
              </span>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                {caseStudiesPage.headline}
              </h1>
              <p className="max-w-prose text-lg leading-relaxed text-mist-200">
                {caseStudiesPage.intro}
              </p>
              <Button href={site.ctaPrimary.href} size="lg" data-cta="case-studies-hero">
                {site.ctaPrimary.label}
              </Button>
            </div>
          </Container>
        </section>

        {/* Compact verified-metrics summary - same data, adapted presentation. */}
        <div className="border-b border-platinum-300 bg-ivory-50">
          <Container className="py-8">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-4">
              {stats.map((stat) => (
                <li key={stat.label} className="flex flex-col gap-1">
                  <span className="font-display text-2xl font-bold leading-none text-graphite">
                    {(stat.prefix ?? "") +
                      stat.value.toLocaleString("en-US", {
                        minimumFractionDigits: stat.decimals ?? 0,
                        maximumFractionDigits: stat.decimals ?? 0,
                      }) +
                      (stat.suffix ?? "")}
                  </span>
                  <span className="text-sm font-medium text-slate-600">{stat.label}</span>
                  <span className="font-mono text-[0.7rem] tracking-wide text-slate-500">
                    {stat.sublabel}
                  </span>
                </li>
              ))}
            </ul>
          </Container>
        </div>

        {/* Case studies - evidence panels */}
        <Section>
          <div className="flex flex-col gap-14 md:gap-20">
            {caseStudies.map((cs, index) => (
              <Reveal key={cs.slug}>
                <article
                  id={cs.slug}
                  aria-labelledby={`${cs.slug}-title`}
                  className="doc-panel scroll-mt-28 p-6 sm:p-10 md:p-12"
                >
                  {/* Header: index + title + meta grid */}
                  <div className="flex flex-col gap-6 border-b border-platinum-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                      <span className="doc-kicker">
                        Case study {String(index + 1).padStart(2, "0")} · {cs.industry}
                      </span>
                      <h2
                        id={`${cs.slug}-title`}
                        className="mt-3 font-display text-2xl font-bold tracking-tight text-graphite md:text-3xl"
                      >
                        {cs.title}
                      </h2>
                    </div>
                    <dl className="grid shrink-0 grid-cols-2 gap-x-8 gap-y-3 lg:grid-cols-2">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Market
                        </dt>
                        <dd className="mt-0.5 text-sm font-medium text-graphite">{cs.market}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Campaign
                        </dt>
                        <dd className="mt-0.5 text-sm font-medium text-graphite">
                          {cs.campaignType}
                        </dd>
                      </div>
                      <div className="col-span-2">
                        <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Period
                        </dt>
                        <dd className="mt-0.5 font-mono text-sm text-graphite">{cs.period}</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Body: challenge/approach/work + metrics panel */}
                  <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
                    <div className="flex flex-col gap-7">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                          The challenge
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-slate-700">
                          {cs.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                          The approach
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-slate-700">
                          {cs.approach}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                          Work completed
                        </h3>
                        <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                          {cs.work.map((w) => (
                            <li key={w} className="flex items-start gap-2.5 text-sm text-graphite">
                              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                              {w}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Metrics panel */}
                    <div className="dark-section flex flex-col gap-6 rounded-3xl p-7 md:p-8">
                      <div>
                        <span className="font-display text-5xl font-bold leading-none tracking-tight text-white">
                          {cs.primary.value}
                        </span>
                        <span className="mt-2 block text-base font-medium text-mist-100">
                          {cs.primary.label}
                        </span>
                      </div>
                      <dl className="flex flex-col gap-3 border-t border-white/10 pt-5">
                        {cs.secondary.map((mtr) => (
                          <div key={mtr.label} className="flex items-baseline justify-between gap-4">
                            <dt className="text-sm text-mist-300">{mtr.label}</dt>
                            <dd className="font-mono text-base font-semibold text-white">
                              {mtr.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                      <p className="mt-auto border-t border-white/10 pt-4 text-xs leading-relaxed text-mist-300">
                        {cs.context}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Methodology / honesty statement */}
        <Section className="bg-ivory-100 !py-14 md:!py-16">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-2xl font-bold tracking-tight text-graphite">
                {caseStudiesPage.methodology.heading}
              </h2>
              <StaggerContainer as="ul" className="mt-6 flex flex-col gap-4">
                {caseStudiesPage.methodology.points.map((point) => (
                  <StaggerItem as="li" key={point} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze-400"
                    />
                    <p className="text-base leading-relaxed text-slate-600">{point}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </Reveal>
        </Section>

        {/* Final CTA */}
        <Section>
          <Reveal>
            <div className="dark-section relative overflow-hidden rounded-[2.5rem] px-6 py-14 text-center shadow-lift-lg sm:px-10 md:py-16">
              <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cobalt-500/15 blur-[90px]" />
              <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {caseStudiesPage.finalCta.headline}
                </h2>
                <p className="text-base leading-relaxed text-mist-200">
                  {caseStudiesPage.finalCta.subhead}
                </p>
                <Button href={site.ctaPrimary.href} size="lg" data-cta="case-studies-final">
                  {site.ctaPrimary.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      <Footer />
    </>
  );
}
