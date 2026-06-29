import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingHero } from "@/components/landing/LandingHero";
import { AuditCommandVisual } from "@/components/landing/AuditCommandVisual";
import { AuditOfferSection } from "@/components/landing/AuditOfferSection";
import { ConversionRoom } from "@/components/sections/ConversionRoom";
import { EditorialSection, EditorialHeading } from "@/components/ui/EditorialSection";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { auditFinds, faqs, callOutcomes } from "@/lib/site";

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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Climbix Marketing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Marketing Audit · Climbix Marketing",
    description: auditDescription,
    images: ["/og-image.png"],
  },
};

// Conversion flow for paid traffic.
const flow = [
  { step: "01", title: "Send details", body: "Your site, channels, and goal - 30 seconds." },
  { step: "02", title: "We review", body: "We scan your spend, tracking, and pages." },
  { step: "03", title: "Find the leaks", body: "We pinpoint where budget is escaping." },
  { step: "04", title: "Get the plan", body: "Your priority fixes + a strategy call." },
];

// Honest expectation columns (no guarantees, no invented proof).
const expectations = [
  { k: "Who it's for", v: "Growing brands ready to invest in paid acquisition and treat marketing as a measurable system." },
  { k: "What you receive", v: "A focused audit of your spend, tracking, and pages, plus a prioritised fix plan and a free strategy call." },
  { k: "No guarantees", v: "We commit to a disciplined method and honest reporting - not to numbers we can't ethically promise." },
];

export default function FreeMarketingAuditPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-cobalt-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <div className="relative">
        <LandingHeader />
        <main id="main">
          <LandingHero />

          {/* Audit command visual showcase */}
          <EditorialSection tone="white">
            <EditorialHeading
              eyebrow="The audit, visualised"
              align="center"
              title={
                <>
                  We scan the whole funnel for{" "}
                  <span className="text-cobalt-gradient">leaks</span>
                </>
              }
              lead="From the first click to the conversion - we trace where budget escapes and what to fix first."
              className="mx-auto items-center"
            />
            <Reveal blur={false} className="mx-auto mt-12 max-w-3xl">
              <AuditCommandVisual />
            </Reveal>
          </EditorialSection>

          {/* Diagnostic scan list (not cards) */}
          <EditorialSection>
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <EditorialHeading
                eyebrow="What we typically find"
                title={
                  <>
                    The leaks that quietly{" "}
                    <span className="text-cobalt-gradient">drain budget</span>
                  </>
                }
                lead="Before recommending a single dollar of new spend, we look for the issues that waste the budget you already have."
                className="lg:sticky lg:top-28 lg:self-start"
              />
              <Reveal blur={false}>
                <div className="surface-card overflow-hidden rounded-3xl">
                  <StaggerContainer className="flex flex-col">
                    {auditFinds.map((f, i) => (
                      <StaggerItem
                        key={f}
                        className="flex items-center gap-4 border-t border-graphite-900/10 px-6 py-5 first:border-t-0"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sand-400/60 bg-sand-100 font-mono text-[0.6rem] font-bold text-sand-600">
                          {i + 1}
                        </span>
                        <span className="text-sm font-medium leading-snug text-graphite-800">{f}</span>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </Reveal>
            </div>
          </EditorialSection>

          <AuditOfferSection />

          {/* Conversion flow */}
          <EditorialSection>
            <EditorialHeading
              eyebrow="How it works"
              align="center"
              title={
                <>
                  From request to{" "}
                  <span className="text-cobalt-gradient">action plan</span>
                </>
              }
              lead="Four steps. No long forms, no obligation, no sales theatre."
              className="mx-auto items-center"
            />
            <StaggerContainer className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {flow.map((f) => (
                <StaggerItem key={f.step} className="relative flex flex-col">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cobalt-200 bg-white font-mono text-sm font-bold text-cobalt-600 shadow-soft">
                    {f.step}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-graphite-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-600">{f.body}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </EditorialSection>

          {/* Trust / expectation */}
          <EditorialSection tone="white">
            <EditorialHeading
              eyebrow="Straight expectations"
              align="center"
              title={
                <>
                  Honest about what this{" "}
                  <span className="text-cobalt-gradient">is and isn&apos;t</span>
                </>
              }
              className="mx-auto items-center"
            />
            <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-3">
              {expectations.map((e) => (
                <StaggerItem key={e.k} className="border-t-2 border-cobalt-200 pt-5">
                  <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-cobalt-600">{e.k}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite-700">{e.v}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </EditorialSection>

          {/* FAQ */}
          <EditorialSection>
            <EditorialHeading
              eyebrow="Questions, answered"
              align="center"
              title={
                <>
                  Before you{" "}
                  <span className="text-cobalt-gradient">request</span>
                </>
              }
              className="mx-auto items-center"
            />
            <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
              {faqs.slice(0, 7).map((f) => (
                <details key={f.q} className="group surface-card rounded-2xl open:border-cobalt-200">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-graphite-900 [&::-webkit-details-marker]:hidden">
                    <h3 className="contents">{f.q}</h3>
                    <span className="faq-chev flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-graphite-900/15 text-cobalt-600 transition-transform duration-300" aria-hidden>
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-graphite-600">{f.a}</p>
                </details>
              ))}
            </div>
          </EditorialSection>

          {/* Final conversion room */}
          <ConversionRoom
            eyebrow="Request your free audit"
            title={
              <>
                Find the leaks before you{" "}
                <span className="text-cobalt-gradient">increase spend</span>
              </>
            }
            lead="Send your details and we will scan your spend, tracking, and pages - then come back with your biggest leaks and the fixes to make first."
            outcomes={callOutcomes}
            formTitle="Get your free audit"
            formSubtitle="Takes 30 seconds. No obligation."
            source="audit"
            submitLabel="Get My Free Audit"
          />
        </main>

        {/* Minimal footer */}
        <footer className="border-t border-graphite-900/10 bg-canvas-200">
          <div className="mx-auto w-full max-w-[1180px] px-5 lg:px-8">
            <div className="flex flex-col gap-3 py-8 text-meta text-graphite-500 sm:flex-row sm:items-center sm:justify-between">
              <span className="flex items-center gap-2.5">
                <Logo />
                <span className="font-display text-base font-bold tracking-tight text-graphite-900">
                  Climbix<span className="text-cobalt-600">.</span>
                </span>
              </span>
              <div className="flex items-center gap-6">
                <Link href="/" className="hover:text-graphite-800">Home</Link>
                <Link href="/privacy" className="hover:text-graphite-800">Privacy</Link>
                <Link href="/terms" className="hover:text-graphite-800">Terms</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
