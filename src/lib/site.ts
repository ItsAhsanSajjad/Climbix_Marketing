/**
 * Single source of truth for site-level content and navigation.
 * Centralised so copy/conversion refinement edits data here, not JSX.
 *
 * Integrity rules (do not violate):
 *  - Every published statistic maps to a row in docs/stats-sources.md.
 *  - No personal names, no fabricated testimonials/logos/awards.
 *  - Client identities stay anonymized until written permission exists.
 */

/**
 * Production base URL. Reads NEXT_PUBLIC_SITE_URL in deployment; falls back to a
 * placeholder so builds never break locally.
 * TODO (launch): set NEXT_PUBLIC_SITE_URL to the real domain in the hosting env
 * (e.g. https://www.climbix.com) - used by metadata, canonicals, sitemap,
 * robots, and JSON-LD.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.climbix.com"
).replace(/\/+$/, "");

export const site = {
  name: "Climbix",
  fullName: "Climbix Marketing",
  // Operating company - shown in footer copyright. Owner-approved name.
  legalName: "M J IT Solution",
  tagline:
    "Performance marketing built to convert - ads, pages, and tracking as one measurable system.",
  email: "hello@climbix.com",
  /**
   * The one primary action, used with identical wording everywhere.
   * Location is tracked via data-cta metadata, never by changing the label.
   */
  ctaPrimary: { label: "Get Free Audit", href: "/free-marketing-audit" },
} as const;

/** Single canonical risk-reversal line - used at most twice on a page. */
export const riskReversal =
  "Free review. No pressure. The findings are yours either way." as const;

/**
 * Header navigation. Anchors use the /#id form so they work from every route.
 * Deliberately short: Services, Case Studies, About, Process + the CTA button.
 */
export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/#process" },
] as const;

/* ---------------------------------------------------------------------------
 * Hero
 * ------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "Free growth leak audit",
  headline: "Know where your marketing budget leaks - before you spend more.",
  /** Word inside `headline` that carries the visual emphasis. */
  headlineEmphasis: "leaks",
  highlight: "Find the leaks. Fix the funnel. Scale what works.",
  subhead:
    "Climbix audits your ads, landing pages, and tracking to show exactly where budget is being lost, what should be fixed first, and where your next growth opportunity is.",
  riskLine: riskReversal,
  secondaryCta: { label: "See What We Check", href: "#proof" },
} as const;

/** Hero trust checklist - honest method claims, no invented proof. */
export const heroChecklist = [
  "No contract",
  "Tracking-first",
  "Plain-English audit",
  "Built for international campaigns",
] as const;

/** What the audit covers - instant value scan near the hero form. */
export const auditCovers = [
  "Ads",
  "Landing Page",
  "Tracking",
  "Funnel",
  "Offer",
  "Lead Quality",
] as const;

/** Hero lead-form framing. */
export const heroForm = {
  title: "Get your free growth audit",
  subtitle: "Tell us where to look. We'll show you what is leaking.",
  submitLabel: "Get My Free Audit",
} as const;

/** Trust badges shown near forms and CTAs - method claims, not certifications. */
export const formBadges = [
  "Secure request",
  "No obligation",
  "Plain-English findings",
  "Tracking-first audit",
] as const;

/* ---------------------------------------------------------------------------
 * Trust strip - one merged row of method + platform capability signals.
 * Never fake client logos.
 * ------------------------------------------------------------------------- */

export const trustStrip = [
  "Audit-first growth",
  "Google Ads campaigns",
  "Landing page CRO",
  "GA4 & conversion tracking",
  "Funnel analysis",
  "Plain-English reporting",
  "International campaigns",
  "Tracking before spend",
] as const;

/* ---------------------------------------------------------------------------
 * Verified statistics - the proof layer.
 *
 * INTEGRITY: every entry maps 1:1 to a row in docs/stats-sources.md (private).
 * Values come from Google Ads campaign reporting in /assets. Do not add a
 * number here without adding its source row first. Aggregates that cannot be
 * fully verified (e.g. "1,000+ conversions") are intentionally NOT published.
 * ------------------------------------------------------------------------- */

export type Stat = {
  /** Numeric target for the count-up animation. */
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** What the number is. */
  label: string;
  /** Campaign context + qualifier - always shown with the number. */
  sublabel: string;
  /** Outcome framing - what the number means for the client. Optional. */
  benefit?: string;
  /** Private pointer into docs/stats-sources.md. Not rendered. */
  source: string;
};

export const statsBand = {
  eyebrow: "Measured, not promised",
  headline: "Results from campaigns managed across multiple markets",
  description:
    "Every figure below comes straight from the campaign's own reporting - shown with its market and period. Nothing rounded up, nothing borrowed.",
  /** Provenance chip - authority signal rendered beside the header. */
  verification: "Every figure pulled from Google Ads campaign reporting",
  /**
   * Anchor total - honest arithmetic only: the simple sum of the three
   * published campaigns below (109 + 99 + 148 = 356). No estimates, no
   * extrapolation, no unverifiable aggregates. Source: stats-sources.md · S5.
   */
  aggregate: {
    value: 356,
    label: "Tracked leads & conversions delivered",
    context:
      "The combined total of the three campaigns below - run across the United States, United Kingdom, UAE, and Pakistan.",
  },
  footnote:
    "Figures taken from Google Ads campaign reporting for accounts managed by the Climbix team. Each metric shows its campaign period; the combined total is the simple sum of the three campaigns shown. Results vary by market, offer, and budget.",
} as const;

export const stats: readonly Stat[] = [
  {
    value: 109,
    label: "tracked leads in 29 days",
    sublabel: "Dubai interior-design campaign · AED 1.75 avg. CPC",
    benefit: "A steady inquiry pipeline in a fiercely competitive market",
    source: "stats-sources.md · S1",
  },
  {
    value: 99,
    label: "phone-call leads in 30 days",
    sublabel: "US local-services campaign · $10.79 per lead",
    benefit: "Calls straight to the business line - not form fills",
    source: "stats-sources.md · S2",
  },
  {
    value: 148,
    label: "conversions at $1.43 each",
    sublabel: "Search lead-gen campaign · 31.62% conversion rate",
    benefit: "Nearly 1 in 3 clicks became a conversion",
    source: "stats-sources.md · S3",
  },
  {
    value: 4,
    label: "international markets",
    sublabel: "United States · United Kingdom · UAE · Pakistan",
    source: "stats-sources.md · S4",
  },
] as const;

/* ---------------------------------------------------------------------------
 * Case studies - anonymized, verified campaign outcomes.
 * Preview cards on the homepage; full presentations on /case-studies.
 * ------------------------------------------------------------------------- */

export type CaseStudyMetric = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  market: string;
  campaignType: string;
  period: string;
  challenge: string;
  approach: string;
  work: readonly string[];
  primary: CaseStudyMetric;
  secondary: readonly CaseStudyMetric[];
  /** Context + anonymization note - always rendered with the numbers. */
  context: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "dubai-interior-design-lead-generation",
    title: "Dubai Interior Design Lead Generation",
    industry: "Interior design & fit-out",
    market: "UAE · Dubai",
    campaignType: "Google Ads · Search lead generation",
    period: "29-day campaign · Apr 2026",
    challenge:
      "A Dubai interior design and fit-out firm needed a steady flow of project inquiries from paid search - without overspending on clicks in a competitive local market.",
    approach:
      "Tightly themed search campaigns matched to service intent, with conversion tracking configured so every lead traced back to its keyword and ad.",
    work: [
      "Search campaign structure & keyword theming",
      "Ad copy matched to service intent",
      "Lead conversion tracking",
      "Ongoing bid & budget optimization",
    ],
    primary: { value: "109", label: "tracked leads in 29 days" },
    secondary: [
      { value: "AED 1.75", label: "average CPC" },
      { value: "1.72K", label: "clicks" },
      { value: "29.8K", label: "impressions" },
    ],
    context:
      "Figures from the campaign's Google Ads reporting, Apr 2026. Client identity anonymized.",
  },
  {
    slug: "us-local-services-phone-call-campaign",
    title: "US Local Services Phone-Call Campaign",
    industry: "Local services · Towing",
    market: "United States",
    campaignType: "Google Ads · Search call campaign",
    period: "30-day window · Apr-May",
    challenge:
      "A US towing business needed phone calls - not form fills - at a cost per call that left room for profit on every dispatched job.",
    approach:
      "Call-focused search campaign with tight geographic targeting and phone-call conversion tracking, paced against a capped daily budget.",
    work: [
      "Call-focused campaign structure",
      "Phone-call conversion tracking",
      "Tight geographic targeting",
      "Daily budget pacing",
    ],
    primary: { value: "99", label: "phone-call leads in 30 days" },
    secondary: [
      { value: "$10.79", label: "cost per lead" },
      { value: "≈$1.07K", label: "total spend" },
    ],
    context:
      "Campaign ran on a capped daily budget (~$100/day), which limited delivery. Figures from Google Ads reporting for a 30-day window (Apr 12 - May 11). Client identity anonymized.",
  },
  {
    slug: "search-lead-generation-optimization",
    title: "Search Lead-Generation Optimization",
    industry: "Lead generation",
    market: "International",
    campaignType: "Google Ads · Responsive search ads",
    period: "Two-week window · Dec-Jan",
    challenge:
      "Convert existing search demand into leads at the lowest workable cost per conversion, using responsive search ads to surface the strongest message combinations.",
    approach:
      "Responsive search ad variants with conversion-focused bidding, measured on completed local actions and cost per conversion rather than clicks.",
    work: [
      "Responsive search ad variants",
      "Conversion-focused bidding",
      "Local-action conversion tracking",
      "Performance monitoring & budget control",
    ],
    primary: { value: "148", label: "conversions in two weeks" },
    secondary: [
      { value: "$1.43", label: "cost per conversion" },
      { value: "31.62%", label: "conversion rate" },
      { value: "468", label: "clicks" },
    ],
    context:
      "Figures from Google Ads reporting, Dec 20 - Jan 2. Published as an anonymized campaign pending client-naming approval.",
  },
] as const;

/** Homepage case-studies preview section. */
export const caseStudiesPreview = {
  eyebrow: "Selected case studies",
  headline: "Campaign outcomes, with context",
  description:
    "Three anonymized campaigns from paid-search and lead-generation work. Every figure comes from campaign reporting - periods shown, nothing extrapolated.",
  cta: { label: "View all case studies", href: "/case-studies" },
} as const;

/**
 * Visual-evidence section (CampaignEvidence). Renders the SAME verified numbers
 * as `caseStudies` inside recreated reporting views - the raw Google Ads exports
 * are deliberately NOT shipped (several contain account emails / client PII; see
 * docs/stats-sources.md). Honesty is stated on-section: recreated, not stock.
 */
export const campaignEvidence = {
  eyebrow: "Inside the reporting",
  headline: "The dashboards behind the numbers",
  description:
    "Not stock graphics - the real reporting view for three managed campaigns, rebuilt here so client names and account emails stay private. Same figures. Same periods.",
  /** Which metric each campaign's headline number represents, for the tile. */
  featuredLabel: "Selected reporting views · Google Ads",
  footnote:
    "Reporting views recreated from Google Ads for campaigns managed by the Climbix team. Raw exports are withheld to protect client and account privacy. Results vary by market, offer, and budget.",
} as const;

/** /case-studies page copy. */
export const caseStudiesPage = {
  eyebrow: "Campaign outcomes",
  headline: "Measured improvements, presented with context",
  intro:
    "Selected campaign outcomes from paid media and lead-generation work across different markets. Client identities are anonymized where required.",
  methodology: {
    heading: "How we publish results",
    points: [
      "Results vary by market, offer, budget, and business model - no figure here is a promise of identical outcomes.",
      "Published figures are taken directly from managed campaign records, with the reporting period shown.",
      "Client names are anonymized whenever publishing permission is unavailable.",
      "Past performance does not guarantee future results - which is exactly why every engagement starts with an audit.",
    ],
  },
  finalCta: {
    headline:
      "Find out where your current marketing system is losing opportunities",
    subhead:
      "The same diagnostic discipline behind these campaigns is how your free audit works.",
  },
} as const;

/* ---------------------------------------------------------------------------
 * MVP DEMO CONTENT - PHASE TWO: replace with verified client material.
 *
 * Everything in this block exists so the client demo shows where real proof
 * will live. It is labeled "illustrative" in the UI and must be swapped for a
 * verified, written-approved client quote before paid traffic runs. Swapping
 * the values here updates the section - no layout changes needed.
 * ------------------------------------------------------------------------- */

export const sampleTestimonial = {
  eyebrow: "Client experience preview",
  quote:
    "The audit showed us exactly where our ad budget was leaking. The fixes were specific, ranked, and explained in plain English - our team finally trusts the reporting.",
  role: "Operations Director",
  company: "B2B services company",
  /** Rendered under the quote - keeps the preview honest without a warning banner. */
  note: "Illustrative example of client feedback. Verified client quotes are published here as written approvals arrive.",
} as const;

/* ---------------------------------------------------------------------------
 * The offer - Free Growth Leak Audit (homepage + PPC)
 * ------------------------------------------------------------------------- */

export const offer = {
  kicker: "The offer",
  title: "Free Growth Leak Audit",
  positioning:
    "A focused review of your marketing system before you spend another month guessing.",
  deliverables: [
    "Advertising account review",
    "Landing-page conversion review",
    "Tracking & attribution check",
    "Conversion-friction analysis",
    "Top 3 priority fixes",
    "Clear next-step action plan",
  ],
  value: "You leave with a practical diagnosis even if we never work together.",
  cta: "Get Free Audit",
  risk: riskReversal,
} as const;

/** Final CTA close. */
export const finalCta = {
  eyebrow: "Before you decide anything else",
  headline: "Before you spend another month, know what is leaking.",
  headlineEmphasis: "leaking",
  subhead:
    "Send us your website and growth goal. We'll identify the highest-priority issues across your ads, landing pages, and tracking.",
  microcopy: "No contract. No pressure. Clear next steps.",
} as const;

/** Contact-section form framing - same promise as the hero: a free audit. */
export const contactForm = {
  title: "Request your free audit",
  subtitle: "Send your site and goal. We'll review the rest.",
  submitLabel: "Get My Free Audit",
  privacy: "Used only to prepare your audit. No spam. No sharing.",
} as const;

/** What happens after the form - sets expectations without invented SLAs. */
export const callOutcomes = [
  "We review your site, ads, and tracking setup",
  "You receive your highest-priority fixes in plain English",
  "If it makes sense to talk, we suggest a call - no obligation either way",
] as const;

/* ---------------------------------------------------------------------------
 * Sample audit output - proof through clarity, never fabricated results
 * ------------------------------------------------------------------------- */

export const auditPreview = {
  eyebrow: "Audit preview",
  headline: "See what your audit will reveal.",
  disclaimer: "Sample audit view - real findings depend on your account.",
} as const;

/**
 * Report-grade preview cards. Rows are qualitative findings only - no invented
 * percentages or client numbers. tone drives the row marker color.
 */
export const sampleAudit = [
  {
    title: "Spend Leak Map",
    body: "Where paid traffic drops off before it ever converts.",
    kind: "stages" as const,
    rows: ["Ad Click", "Landing Page", "Form Start", "Lead", "Qualified Lead"],
  },
  {
    title: "Tracking Health",
    body: "The signals your data quietly sends when it can't be trusted.",
    kind: "issues" as const,
    rows: [
      "Missing conversion event",
      "Duplicate lead event",
      "No source attribution",
      "CRM not connected",
    ],
  },
  {
    title: "Landing Page Friction",
    body: "Where the page loses the visitor the ad already paid for.",
    kind: "issues" as const,
    rows: [
      "Weak offer clarity",
      "CTA below attention zone",
      "Form friction",
      "Slow load risk",
    ],
  },
  {
    title: "Priority Fixes",
    body: "The order of operations that protects budget first.",
    kind: "fixes" as const,
    rows: [
      "Fix tracking first",
      "Improve hero offer",
      "Match ad message to landing page",
      "Reduce form friction",
    ],
  },
  {
    title: "Funnel Drop-Off View",
    body: "Which step loses the most visitors the ads already paid for.",
    kind: "issues" as const,
    rows: [
      "Page-to-form hand-off",
      "Form start vs. completion",
      "Lead vs. qualified lead gap",
      "Silent mobile drop-off",
    ],
  },
  {
    title: "Revenue Clarity Report",
    body: "The decision-ready summary your reports should have given you.",
    kind: "fixes" as const,
    rows: [
      "Spend traced by source",
      "Cost per qualified lead",
      "Channel-to-revenue view",
      "One clear next decision",
    ],
  },
] as const;

/* ---------------------------------------------------------------------------
 * Problem - the disconnected system, then the contrast that resolves it
 * ------------------------------------------------------------------------- */

export const problem = {
  eyebrow: "The real problem",
  headline: "Your traffic is not the problem. Your system is disconnected.",
  subhead:
    "Most campaigns do not fail at the click. They fail after the click - on the page, in the form, inside broken tracking, or inside reports that do not show what actually produced revenue.",
  aftermath:
    "None of these leaks announce themselves. They compound quietly until the budget runs out.",
} as const;

/**
 * Funnel story - the six-stage journey after the click, with the leak that
 * typically strikes each hand-off. Qualitative only, no invented numbers.
 */
export const funnelStory = [
  { stage: "Ad click", leak: "Weak message match" },
  { stage: "Landing page", leak: "Unclear offer, slow page" },
  { stage: "Form start", leak: "Form friction" },
  { stage: "Lead", leak: "Broken conversion event" },
  { stage: "Qualified lead", leak: "No lead-quality signal" },
  { stage: "Revenue signal", leak: "No attribution" },
] as const;

/** Guessing vs. knowing - the honest contrast block inside the problem story. */
export const contrast = {
  kicker: "The difference",
  headline: "Guessing versus knowing",
  without: {
    title: "Without a connected system",
    items: [
      "Ad spend increases without clear answers",
      "Landing pages are judged by appearance, not behavior",
      "Lead quality can't be traced to its source",
      "Reports centre on clicks instead of business outcomes",
      "Scaling decisions rest on incomplete data",
    ],
  },
  with: {
    title: "With Climbix",
    items: [
      "Every campaign connects to measurable actions",
      "Landing-page friction is identified and fixed",
      "Tracking gaps are found and corrected",
      "Priorities are set by evidence, not opinion",
      "You know what to fix before spending more",
    ],
  },
} as const;

/* ---------------------------------------------------------------------------
 * Services
 * ------------------------------------------------------------------------- */

export const services = [
  {
    title: "Paid Ads Management",
    tag: "Acquisition",
    body: "For brands spending on traffic but unsure what is actually producing qualified leads.",
    fixes: ["Weak campaign structure", "Poor message match", "Wasted spend", "Unclear attribution"],
    forWho: "Brands ready to scale spend with confidence",
  },
  {
    title: "SEO Growth",
    tag: "Organic",
    body: "For businesses that want traffic that compounds instead of resetting every month.",
    fixes: ["Thin technical foundations", "Content without intent", "Invisible authority", "No organic pipeline"],
    forWho: "Businesses that want lower long-term acquisition cost",
  },
  {
    title: "Landing Pages & Funnels",
    tag: "Conversion",
    body: "For teams sending good traffic to pages that quietly lose it.",
    fixes: ["Message mismatch", "Buried offers", "Form friction", "No testing discipline"],
    forWho: "Teams sending good traffic to weak pages",
  },
  {
    title: "Social Media Marketing",
    tag: "Demand",
    body: "For brands that need to stay visible - and remembered - where their buyers actually are.",
    fixes: ["Inconsistent presence", "Reach without demand", "Content with no direction", "Silent channels"],
    forWho: "Brands building demand, not just reach",
  },
  {
    title: "Analytics & Conversion Tracking",
    tag: "Measurement",
    body: "The foundation everything else stands on: clean tracking, honest attribution, dashboards you can trust.",
    fixes: ["Missing conversion events", "Duplicate or phantom leads", "No source attribution", "Reports nobody trusts"],
    forWho: "Anyone optimising blind right now",
  },
] as const;

export const footerServices = [
  "Paid Ads Management",
  "SEO Growth",
  "Landing Pages & Funnels",
  "Social Media Marketing",
  "Analytics & Tracking",
] as const;

/* ---------------------------------------------------------------------------
 * Process - five steps, measurement folded into the last one
 * ------------------------------------------------------------------------- */

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    body: "We learn the business, the offer, and what a qualified lead is actually worth before touching anything.",
    deliverable: "Goals, economics & access aligned",
  },
  {
    step: "02",
    title: "Audit",
    body: "We review your ads, landing pages, tracking, and funnel path before recommending any new spend.",
    deliverable: "Plain-English audit of leaks & quick wins",
  },
  {
    step: "03",
    title: "Prioritize",
    body: "Findings become a ranked fix list - highest-leverage first, not a random marketing wishlist.",
    deliverable: "Ranked priority plan",
  },
  {
    step: "04",
    title: "Improve",
    body: "Campaigns, pages, and tracking are fixed and shipped together as one connected system.",
    deliverable: "Ads + pages + tracking, shipped together",
  },
  {
    step: "05",
    title: "Measure & Scale",
    body: "We report against the numbers that matter, cut what wastes budget, and scale only what earns it.",
    deliverable: "Weekly plain-English reporting",
  },
] as const;

/** The measures reported in step 05 - rendered inside the process section. */
export const measures = [
  { metric: "CPL", label: "Cost per lead" },
  { metric: "CVR", label: "Conversion rate" },
  { metric: "ROAS", label: "Return on ad spend" },
  { metric: "LQ", label: "Lead quality" },
  { metric: "Drop-off", label: "Where visitors leave" },
  { metric: "Attribution", label: "Revenue traced to source" },
] as const;

/* ---------------------------------------------------------------------------
 * Why Climbix (homepage About preview) + /about page
 * ------------------------------------------------------------------------- */

export const authority = {
  eyebrow: "Why Climbix",
  headline: "Why serious businesses choose an audit-first agency.",
  contrast: "A cheap agency asks for budget first. A serious agency checks the system first.",
  aboutCta: { label: "More about how we work", href: "/about" },
} as const;

export const whyClimbix = [
  {
    title: "We inspect before we spend",
    body: "The leaks get found before a single new dollar is recommended.",
  },
  {
    title: "We track before we scale",
    body: "Clean attribution first - optimising on bad data is how budgets die.",
  },
  {
    title: "We connect ads with landing pages",
    body: "Message match from the click to the conversion, as one system.",
  },
  {
    title: "We report in plain English",
    body: "What's working, what's wasted, what we're fixing next. No vanity dashboards.",
  },
  {
    title: "We prioritize revenue, not vanity metrics",
    body: "Every deliverable answers to leads and pipeline - not impressions or likes.",
  },
  {
    title: "We tell you when we're not the right fit",
    body: "If the audit says you don't need us yet, that's what you'll hear.",
  },
] as const;

/** /about page content. No founder biography, no invented history. */
export const aboutPage = {
  hero: {
    eyebrow: "About Climbix",
    headline: "Marketing decisions should be based on evidence, not assumptions",
    intro:
      "Climbix helps businesses connect advertising, landing pages, analytics, and conversion strategy into one measurable growth system.",
  },
  whatWeDo: {
    heading: "What we do",
    body: "One connected system instead of disconnected marketing activity:",
    items: [
      { title: "Campaign strategy", body: "Positioning, offers, and channel plans built around the business goal." },
      { title: "Paid acquisition", body: "Google, Meta, and search campaigns managed against cost per lead, not clicks." },
      { title: "Landing-page improvement", body: "Pages that keep the ad's promise and make the next step obvious." },
      { title: "Conversion tracking", body: "GA4 and ad-platform tracking that can actually be trusted for decisions." },
      { title: "Funnel analysis", body: "Finding the exact step where paid visitors stop becoming customers." },
      { title: "Performance reporting", body: "Plain-English reporting on leads, pipeline, and waste - not vanity metrics." },
    ],
  },
  principles: {
    heading: "Our principles",
    items: [
      { title: "Audit before spend", body: "No recommendation to spend more until the current system has been inspected." },
      { title: "Tracking before scaling", body: "If the data can't be trusted, nothing gets decided on top of it." },
      { title: "Outcomes before vanity metrics", body: "Leads, pipeline, and cost per result - impressions don't pay invoices." },
      { title: "Clarity before complexity", body: "Plain-English findings and priorities, never jargon walls." },
      { title: "Evidence before assumptions", body: "Every recommendation must survive one question: does the data support this?" },
      { title: "Systems over tactics", body: "Long-term connected improvement beats disconnected one-off campaigns." },
    ],
  },
  howWeWork: {
    heading: "How we work with clients",
    steps: [
      "Understand the business, the offer, and the economics of a lead",
      "Review the complete customer journey from ad to revenue",
      "Identify the highest-impact leaks",
      "Recommend a prioritized, plain-English plan",
      "Implement measurable improvements",
      "Continue only while the value is clear",
    ],
  },
  markets: {
    heading: "Markets and experience",
    body: "Campaign experience across four international markets.",
    list: ["United States", "United Kingdom", "United Arab Emirates", "Pakistan"],
    note: "Campaigns are built for international delivery by default - local market context, currency, and search behavior included.",
  },
  fit: {
    heading: "Who we work with",
    forTitle: "A good fit if",
    forItems: [
      "You already spend on ads",
      "You have traffic but weak lead flow",
      "You do not trust your tracking",
      "You want international-ready campaigns",
      "You want landing pages and ads connected",
      "You want plain-English reporting",
    ],
    notForTitle: "Not a fit if",
    notForItems: [
      "You want guaranteed results - nobody can ethically promise those",
      "You only care about impressions",
      "You are not ready to measure performance",
      "You want random marketing activity without strategy",
    ],
  },
  honesty: {
    heading: "Trust without fake proof",
    body: "We do not invent reviews, borrow logos, or publish numbers we cannot trace to campaign records. The proof we show is the method - audit-first strategy, tracking-first execution - and verified campaign outcomes, published with their context on the case studies page.",
  },
  finalCta: {
    headline: "Start with clarity before committing to more spend",
    subhead:
      "The free audit shows what is leaking, what to fix first, and whether we are even the right partner for it.",
  },
} as const;

/* ---------------------------------------------------------------------------
 * FAQ - objection handling. Honest answers, no guaranteed-results claims.
 * ------------------------------------------------------------------------- */

export const faqs = [
  {
    q: "What does the free audit include?",
    a: "We review your ads, landing page, tracking, and funnel path, then send back where budget is likely leaking and your top priority fixes. You leave with clear next steps whether or not we ever work together.",
  },
  {
    q: "Do I need to give account access?",
    a: "Read-only access to your ad account and analytics produces the most accurate audit, but we can start from your website and landing pages alone. You control the access and can revoke it at any time.",
  },
  {
    q: "Can you improve an existing campaign?",
    a: "Yes - most engagements start exactly there. We audit the existing structure, keep what performs, and rebuild what leaks, across Google, Meta, and LinkedIn.",
  },
  {
    q: "Do you build landing pages?",
    a: "Yes. We build and rebuild conversion-focused pages that keep the ad's promise, so the traffic you pay for actually converts.",
  },
  {
    q: "Can you repair tracking problems?",
    a: "That's the most common finding - and the first thing we fix. Clean conversion tracking and attribution come before any scaling decision.",
  },
  {
    q: "Which industries do you work with?",
    a: "Recent campaigns span interior design, local services, publishing, and education. The method - audit, tracking, conversion path - carries across industries, and we tell you plainly if your niche isn't a fit.",
  },
  {
    q: "Which markets do you serve?",
    a: "Campaigns have run across the United States, United Kingdom, UAE, and Pakistan. We build for international markets by default.",
  },
  {
    q: "How is pricing decided?",
    a: "By scope: your market, channels, and how much needs fixing versus building. The audit comes first precisely so any quote is based on evidence - and we'll tell you if paid ads aren't the right first move at all.",
  },
  {
    q: "What happens after the audit?",
    a: "You receive the findings and priority fixes in plain English. If it makes sense to work together, we propose a scoped engagement; if not, the findings are still yours to act on.",
  },
  {
    q: "Is there any obligation after the free review?",
    a: "None. The audit costs nothing and carries no obligation - it's how we prove the method before asking for anything.",
  },
  {
    q: "How is client information protected?",
    a: "Access is read-only wherever possible, credentials are never shared outside the team, and campaign data is only ever published anonymized - or with written client approval.",
  },
  {
    q: "Do you guarantee results?",
    a: "No - and you should be cautious of anyone who does. We commit to a disciplined method, honest reporting, and an audit before spending. We won't promise numbers nobody can ethically guarantee.",
  },
] as const;

/** Lead-form select options. Order is load-bearing - do not reorder. */
export const goalOptions = [
  "Lower my cost per lead",
  "Scale paid ads profitably",
  "Improve landing page conversion",
  "Fix my tracking & attribution",
  "Grow organic / SEO traffic",
  "Build a full growth system",
] as const;

export const budgetOptions = [
  "Under $2k / month",
  "$2k - $5k / month",
  "$5k - $15k / month",
  "$15k - $50k / month",
  "$50k+ / month",
  "Not sure yet",
] as const;

/* ---------------------------------------------------------------------------
 * PPC landing page (/free-marketing-audit) content
 * ------------------------------------------------------------------------- */

export const landing = {
  headline: "Find where your marketing spend is leaking -",
  headlineAccent: "before you spend more.",
  subhead:
    "We review your ads, landing page, tracking, and funnel path to show what is wasting budget and what should be fixed first.",
  microcopy: "Free · No obligation · Audit-first, no guesswork",
} as const;

/** PPC hero checklist. */
export const landingChecklist = [
  "No fake guarantees",
  "No vanity metrics",
  "Full-path review",
  "Clear next step",
] as const;

/** What the audit inspects. */
export const auditChecklist = [
  { label: "Campaign message clarity", note: "Does the ad promise match the page?" },
  { label: "Landing page conversion path", note: "Where attention is lost after the click." },
  { label: "Offer strength", note: "Is there a clear reason to act now?" },
  { label: "Form friction", note: "What quietly stops people submitting." },
  { label: "Tracking & attribution", note: "Whether the data can be trusted to decide." },
  { label: "Priority opportunities", note: "The fixes that move the outcome first." },
] as const;

/** What you receive. */
export const auditIncludes = [
  {
    title: "Ad account teardown",
    body: "A review of your campaigns, targeting, and spend to find waste and quick wins.",
  },
  {
    title: "Landing page review",
    body: "Where qualified visitors drop off - and what's costing you conversions.",
  },
  {
    title: "Tracking & attribution check",
    body: "We verify whether your conversion data can actually be trusted.",
  },
  {
    title: "Offer & funnel feedback",
    body: "An honest read on whether the offer and path give people a reason to act.",
  },
  {
    title: "Priority fix list",
    body: "The 2-3 highest-leverage fixes to make first, ranked by impact.",
  },
] as const;

/** What we usually find. */
export const auditFinds = [
  "Budget spent on audiences that never convert",
  "Conversions firing twice - or not at all",
  "Landing pages that bury the offer",
  "No clean attribution between channels and revenue",
  "Campaigns disconnected from business goals",
] as const;

/** Who the audit is for. */
export const auditFor = [
  "Brands already spending on ads",
  "Businesses unsure which campaigns produce real leads",
  "Teams with landing pages but weak conversions",
  "Companies entering international markets",
  "Businesses that need tracking clarity before scaling",
] as const;
