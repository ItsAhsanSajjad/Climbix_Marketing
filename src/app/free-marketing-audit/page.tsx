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
import { FAQItem } from "@/components/sections/FAQItem";
import { processSteps, faqs, site, landing } from "@/lib/site";

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

// Condensed audit-to-action flow for paid traffic.
const flow = [
  { step: "01", title: "Request", body: "Send your details - takes 30 seconds." },
  { step: "02", title: "Audit", body: "We review your spend, tracking, and pages." },
  { step: "03", title: "Action plan", body: "You get your biggest leaks and what to fix first." },
];

export default function FreeMarketingAuditPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>
      <LandingHeader />
      <main id="main">
        <LandingHero />

        {/* Trust strip */}
        <div className="border-y border-white/5 bg-ink-900/30">
          <Container>
            <StaggerContainer
              stagger={0.08}
              className="flex flex-col gap-3 py-5 text-sm text-mist-200 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8"
            >
              {["Audit-first, no guesswork", "Tracking-first strategy", "International campaigns", "No obligation"].map(
                (t) => (
                  <StaggerItem key={t} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden />
                    {t}
                  </StaggerItem>
                ),
              )}
            </StaggerContainer>
          </Container>
        </div>

        <AuditOfferSection />

        {/* Audit-to-action process */}
        <Section className="relative">
          <div className="blueprint pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative">
            <Reveal>
              <SectionHeading
                eyebrow="How it works"
                title={
                  <>
                    From request to{" "}
                    <span className="text-gradient">action plan</span>
                  </>
                }
                description="Three steps. No long forms, no obligation, no sales theatre."
              />
            </Reveal>
            <StaggerContainer stagger={0.1} className="mt-12 grid gap-5 md:grid-cols-3">
              {flow.map((f) => (
                <StaggerItem key={f.step} className="h-full">
                  <div className="glass-panel flex h-full flex-col rounded-2xl p-6">
                    <span className="font-mono text-sm font-bold text-accent-300">{f.step}</span>
                    <h3 className="mt-3 text-lg font-semibold text-paper">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-200">{f.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Section>

        {/* FAQ (focused subset) */}
        <Section>
          <Reveal>
            <SectionHeading
              eyebrow="Questions, answered"
              title={
                <>
                  Before you{" "}
                  <span className="text-gradient">request</span>
                </>
              }
            />
          </Reveal>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4">
            {faqs.slice(0, 6).map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </Section>

        {/* Final CTA */}
        <Section>
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-accent-400/20 bg-ink-900/70 px-6 py-12 text-center shadow-glow md:px-12 md:py-14">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/10 blur-3xl"
                aria-hidden
              />
              <div className="relative mx-auto flex max-w-2xl flex-col items-center">
                <h2 className="font-display text-display-sm text-paper md:text-[2.6rem] md:leading-[1.05]">
                  Find the leaks before you{" "}
                  <span className="text-gradient">increase spend</span>
                </h2>
                <p className="mt-4 text-lg text-mist-200">
                  {landing.microcopy}
                </p>
                <Link
                  href="#audit-form"
                  className="mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-accent-gradient px-8 text-base font-semibold text-ink-950 shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  Get My Free Audit
                </Link>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-white/5 bg-ink-950/60">
        <Container>
          <div className="flex flex-col gap-3 py-8 text-meta text-mist-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-mist-200">Home</Link>
              <Link href="/privacy" className="hover:text-mist-200">Privacy</Link>
              <Link href="/terms" className="hover:text-mist-200">Terms</Link>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
