import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingHero } from "@/components/landing/LandingHero";
import { AuditOfferSection } from "@/components/landing/AuditOfferSection";
import { LandingStickyCTA } from "@/components/landing/LandingStickyCTA";
import { FAQItem } from "@/components/sections/FAQItem";
import { IconCheck } from "@/components/ui/Icon";
import {
  faqs,
  site,
  landing,
  offer,
  auditChecklist,
  auditFinds,
  auditFor,
} from "@/lib/site";

const auditDescription =
  "Get a free marketing audit before your next campaign. Find where your ad spend, tracking, and landing pages are leaking growth - and the highest-leverage fixes to make first.";

export const metadata: Metadata = {
  title: "Free Marketing Audit",
  description: auditDescription,
  alternates: { canonical: "/free-marketing-audit" },
  openGraph: {
    type: "website",
    url: "/free-marketing-audit",
    title: "Free Marketing Audit · Climbix Marketing",
    description: auditDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Marketing Audit · Climbix Marketing",
    description: auditDescription,
  },
};

export default function FreeMarketingAuditPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cobalt-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <LandingHeader />
      <main id="main">
        <LandingHero />

        {/* 0 - The offer: one navy split card, deliverables in a white panel */}
        <Section>
          <Reveal>
            <div className="dark-section relative overflow-hidden rounded-[2.5rem] p-8 shadow-lift-lg md:p-12 lg:p-14">
              <div className="relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
                <div className="flex flex-col items-start gap-5">
                  <span className="doc-kicker">{offer.kicker}</span>
                  <h2 className="font-display text-lux-sm text-white md:text-lux-md">
                    Free Growth Leak <span className="text-bronze">Audit</span>
                  </h2>
                  <p className="text-lux-body text-mist-200">
                    {offer.positioning}
                  </p>
                  <p className="text-base text-mist-200">{offer.value}</p>
                </div>
                <div className="rounded-3xl bg-white p-7 shadow-lift md:p-9">
                  <ul className="flex flex-col gap-3.5">
                    {offer.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 text-base text-graphite sm:text-lg"
                      >
                        <IconCheck className="mt-1 h-5 w-5 shrink-0 text-teal-500" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#audit-form"
                    data-cta="landing-offer"
                    className="mt-7 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-cobalt-500 px-8 text-base font-semibold text-white shadow-cobalt transition-transform hover:-translate-y-0.5 hover:bg-cobalt-600 sm:w-auto"
                  >
                    Claim Free Audit
                  </Link>
                  <p className="mt-3.5 text-sm text-slate-600">{offer.risk}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* 1 - What the audit checks: the full-path review */}
        <Section className="bg-ivory-100">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                align="left"
                eyebrow="What we check"
                title={
                  <>
                    We follow the whole path, from the{" "}
                    <span className="text-bronze">click to the lead</span>
                  </>
                }
                description="Most budget doesn't leak in one dramatic place. It drains quietly across the journey, so that's where we look - the message, the page, the offer, the form, and the data underneath it all."
              />
            </Reveal>
            <Reveal delay={0.05}>
              <div className="doc-panel p-8 md:p-10">
                <StaggerContainer
                  stagger={0.08}
                  className="flex flex-col divide-y divide-platinum-300"
                >
                  {auditChecklist.map((c, i) => (
                    <StaggerItem
                      key={c.label}
                      className="flex items-start gap-6 py-6 first:pt-0 last:pb-0"
                    >
                      <span className="doc-kicker pt-1 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-graphite">
                          {c.label}
                        </h3>
                        <p className="mt-1.5 text-lg leading-relaxed text-slate-600">
                          {c.note}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* 2 - What you receive */}
        <AuditOfferSection />

        {/* 3 - What we usually find: warm ivory panel, bronze dots */}
        <Section>
          <Reveal>
            <div className="rounded-4xl border border-platinum-300 bg-ivory-200 p-8 md:p-12 lg:p-14">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <SectionHeading
                  align="left"
                  eyebrow="What we usually find"
                  title={
                    <>
                      The same leaks show up{" "}
                      <span className="text-bronze">again and again</span>
                    </>
                  }
                  description="A handful of patterns account for most of the wasted spend we see. The audit tells you which ones are costing you - and which deserve attention first."
                />
                <ul className="flex flex-col justify-center gap-5">
                  {auditFinds.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3.5 text-lg leading-relaxed text-slate-600"
                    >
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze-400"
                        aria-hidden
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* 4 - Who it's for */}
        <Section className="bg-ivory-100">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                align="left"
                eyebrow="Who it is for"
                title={
                  <>
                    Most useful when there is{" "}
                    <span className="text-bronze">real spend on the line</span>
                  </>
                }
                description="The audit earns its keep when there's meaningful budget in motion and honest questions about where it's actually going."
              />
            </Reveal>
            <StaggerContainer className="flex flex-col gap-6">
              {auditFor.map((f) => (
                <StaggerItem key={f} className="border-l-2 border-bronze-400 pl-6">
                  <p className="text-lg leading-relaxed text-graphite">{f}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Section>

        {/* 5 - FAQ (focused subset) */}
        <Section>
          <Reveal>
            <SectionHeading
              eyebrow="Before you request"
              title={
                <>
                  The questions we&apos;re{" "}
                  <span className="text-bronze">usually asked</span>
                </>
              }
            />
          </Reveal>
          <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-5">
            {faqs.slice(0, 6).map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </Section>

        {/* 6 - Final CTA: one deep navy focus room */}
        <Section>
          <Reveal>
            <div className="dark-section relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center shadow-lift-lg md:px-12 md:py-24">
              <div className="relative mx-auto flex max-w-2xl flex-col items-center">
                <span className="doc-kicker">The next step</span>
                <h2 className="mt-6 font-display text-lux-sm text-white md:text-lux-md">
                  See where the budget is quietly{" "}
                  <span className="text-bronze">leaking</span>.
                </h2>
                <p className="mt-5 text-lux-body text-mist-200">
                  {landing.microcopy}
                </p>
                <Link
                  href="#audit-form"
                  data-cta="landing-final"
                  className="mt-10 inline-flex h-16 items-center gap-2 rounded-full bg-cobalt-500 px-9 text-lg font-semibold text-white shadow-cobalt transition-transform hover:-translate-y-0.5 hover:bg-cobalt-600"
                >
                  Get Free Audit
                </Link>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      <LandingStickyCTA />

      {/* Minimal footer */}
      <footer className="border-t border-platinum-300 bg-ivory-50">
        <Container>
          <div className="flex flex-col gap-3 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.legalName}. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-graphite">
                Home
              </Link>
              <Link href="/privacy" className="hover:text-graphite">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-graphite">
                Terms
              </Link>
              <Link href="/refund-policy" className="hover:text-graphite">
                Refund
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
