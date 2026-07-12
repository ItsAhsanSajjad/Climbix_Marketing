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
import { aboutPage, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Climbix connects advertising, landing pages, analytics, and conversion strategy into one measurable growth system - audit-first, evidence-led, and honest about proof.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us · Climbix Marketing",
    description:
      "Marketing decisions should be based on evidence, not assumptions. How Climbix works, what it believes, and who it works with.",
    url: "/about",
  },
};

/**
 * /about - business credibility without personal biography. Principles,
 * working model, markets, fit, and the honesty stance. No founder profile,
 * no invented history, no team-size claims.
 */
export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
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
                <span className="doc-kicker text-bronze-300">{aboutPage.hero.eyebrow}</span>
              </span>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                {aboutPage.hero.headline}
              </h1>
              <p className="max-w-prose text-lg leading-relaxed text-mist-200">
                {aboutPage.hero.intro}
              </p>
              <Button href={site.ctaPrimary.href} size="lg" data-cta="about-hero">
                {site.ctaPrimary.label}
              </Button>
            </div>
          </Container>
        </section>

        {/* What we do */}
        <Section>
          <Reveal>
            <div className="max-w-2xl">
              <span className="doc-kicker">{aboutPage.whatWeDo.heading}</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-graphite md:text-4xl">
                One connected system, not disconnected activity
              </h2>
              <p className="mt-4 text-lux-body text-slate-600">{aboutPage.whatWeDo.body}</p>
            </div>
          </Reveal>
          <StaggerContainer
            as="ul"
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {aboutPage.whatWeDo.items.map((item) => (
              <StaggerItem as="li" key={item.title} className="h-full">
                <div className="lux-card flex h-full flex-col gap-2.5 p-6">
                  <h3 className="text-base font-semibold text-graphite">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>

        {/* Principles */}
        <Section className="bg-ivory-100">
          <Reveal>
            <div className="max-w-2xl">
              <span className="doc-kicker">{aboutPage.principles.heading}</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-graphite md:text-4xl">
                The rules every engagement runs on
              </h2>
            </div>
          </Reveal>
          <StaggerContainer
            as="ol"
            className="mt-12 grid list-none grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {aboutPage.principles.items.map((item, index) => (
              <StaggerItem as="li" key={item.title}>
                <div className="flex items-center gap-4">
                  <span aria-hidden className="bronze-rule w-10 shrink-0" />
                  <span className="doc-kicker">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-graphite">{item.title}</h3>
                <p className="mt-2.5 text-base leading-relaxed text-slate-600">{item.body}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>

        {/* How we work + markets */}
        <Section>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <span className="doc-kicker">{aboutPage.howWeWork.heading}</span>
                <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-graphite md:text-3xl">
                  A collaboration model built to reduce risk
                </h2>
                <ol className="mt-8 flex flex-col gap-4">
                  {aboutPage.howWeWork.steps.map((step, i) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-bronze-400 bg-white font-mono text-xs font-semibold text-bronze-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-1 text-base leading-relaxed text-slate-700">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="dark-section flex h-full flex-col gap-6 rounded-3xl p-8 md:p-10">
                <span className="doc-kicker text-bronze-300">{aboutPage.markets.heading}</span>
                <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                  {aboutPage.markets.body}
                </h2>
                <ul className="grid grid-cols-2 gap-3">
                  {aboutPage.markets.list.map((market) => (
                    <li
                      key={market}
                      className="dark-panel rounded-2xl px-4 py-3 text-sm font-medium text-mist-100"
                    >
                      {market}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto text-sm leading-relaxed text-mist-300">
                  {aboutPage.markets.note}
                </p>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Fit - who we work with */}
        <Section className="bg-ivory-100">
          <Reveal>
            <div className="max-w-2xl">
              <span className="doc-kicker">{aboutPage.fit.heading}</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-graphite md:text-4xl">
                Selective by design - fit comes before fees
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="lux-card h-full p-7 md:p-8">
                <h3 className="text-lg font-semibold text-graphite">{aboutPage.fit.forTitle}</h3>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {aboutPage.fit.forItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-slate-700">
                      <IconCheck className="mt-1 h-4 w-4 shrink-0 text-teal-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="lux-card h-full p-7 md:p-8">
                <h3 className="text-lg font-semibold text-graphite">
                  {aboutPage.fit.notForTitle}
                </h3>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {aboutPage.fit.notForItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-slate-600">
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-platinum-300"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Honesty stance */}
        <Section className="!py-14 md:!py-16">
          <Reveal>
            <div className="doc-panel mx-auto max-w-3xl p-8 text-center md:p-12">
              <h2 className="font-display text-2xl font-bold tracking-tight text-graphite">
                {aboutPage.honesty.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-slate-600">
                {aboutPage.honesty.body}
              </p>
            </div>
          </Reveal>
        </Section>

        {/* Final CTA */}
        <Section className="!pt-0">
          <Reveal>
            <div className="dark-section relative overflow-hidden rounded-[2.5rem] px-6 py-14 text-center shadow-lift-lg sm:px-10 md:py-16">
              <div aria-hidden className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cobalt-500/15 blur-[90px]" />
              <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {aboutPage.finalCta.headline}
                </h2>
                <p className="text-base leading-relaxed text-mist-200">
                  {aboutPage.finalCta.subhead}
                </p>
                <Button href={site.ctaPrimary.href} size="lg" data-cta="about-final">
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
