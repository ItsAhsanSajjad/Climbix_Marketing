/**
 * Single source of truth for site-level content and navigation.
 * Centralised so copy/conversion refinement edits data here, not JSX.
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
  tagline: "Performance marketing built to convert - ads, pages, and tracking as one measurable system.",
  email: "hello@climbix.com",
  // Primary action - books the strategy call (homepage lead form at #contact).
  ctaPrimary: { label: "Book Call", href: "#contact" },
  // Secondary action - the lower-friction offer has its own PPC landing page.
  ctaSecondary: { label: "Get Free Audit", href: "/free-marketing-audit" },
} as const;

export const navLinks = [
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

/** Services dropdown - title + one short benefit per service. */
export const servicesNav = [
  { label: "Paid Ads", benefit: "Qualified leads, not cheap clicks", href: "#services" },
  { label: "SEO Growth", benefit: "Compounding organic visibility", href: "#services" },
  { label: "Landing Pages & Funnels", benefit: "Pages that keep the ad's promise", href: "#services" },
  { label: "Social Media", benefit: "Demand, not just reach", href: "#services" },
  { label: "Analytics & Tracking", benefit: "Data you can actually trust", href: "#services" },
] as const;

/* ---------------------------------------------------------------------------
 * Hero
 * ------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "Free growth leak audit",
  headline: "Find where your marketing budget is leaking - before you spend more.",
  highlight: "Find the leaks. Fix the funnel. Scale what works.",
  subhead:
    "Climbix audits your ads, landing pages, tracking, and funnel path to show what is wasting budget, what is blocking conversions, and what to fix first.",
  riskLine: "Free review. No pressure. Clear next steps.",
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
  submitLabel: "Find My Leaks",
} as const;

/** Trust badges shown near forms and CTAs - method claims, not certifications. */
export const formBadges = [
  "Secure request",
  "No obligation",
  "30-minute review",
  "Tracking-first audit",
] as const;

/* ---------------------------------------------------------------------------
 * The offer - Free Growth Leak Audit (homepage + PPC)
 * ------------------------------------------------------------------------- */

export const offer = {
  kicker: "The offer",
  title: "Free Growth Leak Audit",
  positioning:
    "A focused review of your marketing system before you spend another month guessing.",
  deliverables: [
    "Campaign clarity scan",
    "Landing page conversion review",
    "Tracking health check",
    "Funnel friction report",
    "Top 3 priority fixes",
    "Clear next-step recommendation",
  ],
  value: "You leave with a practical diagnosis even if we never work together.",
  cta: "Claim Free Audit",
  risk: "No pressure. No forced contract. No fake guarantee.",
} as const;

/** Final CTA close. */
export const finalCta = {
  eyebrow: "Before you decide anything else",
  headline: "Before you spend another month, know what is leaking.",
  subhead:
    "Send your site and goal. We will review the funnel path and show the highest-priority fixes.",
  microcopy: "No contract. No pressure. Clear next steps.",
} as const;

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
 * Platform-readiness badges - capability claims, never partner-status claims.
 * ------------------------------------------------------------------------- */

export const platformBadges = [
  "Built for Google Ads traffic",
  "Meta campaign audit ready",
  "GA4 tracking review",
  "Conversion-first funnel review",
  "Landing page CRO",
  "International campaigns",
] as const;

/* ---------------------------------------------------------------------------
 * Case study preview - structure ready for real results.
 * MVP placeholder - replace with a verified client case study before claiming
 * real outcomes. The Result step intentionally holds no performance numbers.
 * ------------------------------------------------------------------------- */

export const caseStudy = {
  eyebrow: "Case study preview",
  headline: "How we will show results once campaigns go live.",
  note: "Sample client scenario - replace with a verified case study as campaigns mature.",
  steps: [
    {
      label: "Problem",
      body: "Paid traffic was running, but lead quality was unclear and reports didn't explain why.",
    },
    {
      label: "Diagnosis",
      body: "Tracking did not connect campaign source to qualified inquiries, and the page dropped the ad's promise.",
    },
    {
      label: "Action",
      body: "Fix attribution first, align the landing page message to the ad, reduce form friction.",
    },
    {
      label: "Result",
      body: "Result data will be published here after verified campaign performance.",
    },
  ],
} as const;

/* ---------------------------------------------------------------------------
 * Founder / company credibility.
 * TODO: replace the initials placeholder with a real founder photo asset.
 * ------------------------------------------------------------------------- */

export const credibility = {
  eyebrow: "Why Climbix exists",
  headline: "Built for serious businesses that want clarity before scale.",
  body: "Climbix started with a simple observation: most marketing budgets don't fail from lack of effort - they fail from lack of visibility. So we built an audit-first, tracking-first practice where every recommendation has to survive one question: does the data actually support this?",
  card: {
    initials: "CX",
    name: "Climbix Strategy Team",
    role: "Performance, funnel & tracking-led growth",
    points: [
      "Built to connect traffic, pages, and attribution",
      "Plain-English reporting, no vanity dashboards",
      "Selective by design - fit comes before fees",
    ],
  },
} as const;

/* ---------------------------------------------------------------------------
 * Testimonials.
 * MVP placeholder entries - NOT RENDERED PUBLICLY. While every entry has
 * placeholder: true, TestimonialsSection shows the launch-stage trustFramework
 * module instead (single truth model: no invented reviews on the live site).
 * These entries exist only as the layout-ready data shape. When a REAL,
 * verified, client-approved quote arrives: set placeholder: false and fill
 * every field - the section will then render attributed testimonial cards.
 * ------------------------------------------------------------------------- */

export const testimonials = [
  {
    placeholder: true,
    featured: true,
    quote:
      "Climbix helped us understand where our funnel needed attention before increasing ad spend. The audit was specific, calm, and easy to act on - no jargon, no pressure to sign anything.",
    name: "Sarah",
    role: "Marketing Lead",
    company: "E-commerce brand, EU",
    service: "Free Growth Leak Audit",
    initials: "S",
    resultTag: "Clearer priorities before spend",
  },
  {
    placeholder: true,
    featured: false,
    quote:
      "The tracking review alone was worth the call. We finally saw which events were double-firing and why our reports never matched reality.",
    name: "Daniel",
    role: "Founder",
    company: "B2B services, UK",
    service: "Analytics & Tracking",
    initials: "D",
    resultTag: "Tracking we can trust",
  },
  {
    placeholder: true,
    featured: false,
    quote:
      "They told us plainly what not to spend on yet. That kind of honesty is why we kept working with them.",
    name: "Amira",
    role: "Growth Manager",
    company: "SaaS startup, MENA",
    service: "Paid Ads Management",
    initials: "A",
    resultTag: "Honest, plain-English reporting",
  },
] as const;

export const testimonialsNote =
  "Verified client stories will be added once campaigns mature." as const;

/**
 * Launch-stage trust framework - the PUBLIC trust story while no verified
 * testimonials exist (single truth model: launch-stage honest). Rendered by
 * TestimonialsSection whenever every testimonial entry is placeholder:true.
 */
export const trustFramework = {
  eyebrow: "Trust without fake proof",
  headline: "Built to earn trust before claiming results.",
  body: "Climbix is launch-stage, so we do not invent reviews or borrow logos. The proof we can show today is the method: audit-first strategy, tracking-first execution, and a clear diagnostic process before asking for more spend.",
  pillars: [
    {
      title: "Audit before budget",
      body: "The leaks get found before a single new dollar is recommended.",
    },
    {
      title: "Tracking before scaling",
      body: "If the data can't be trusted, nothing else gets decided on top of it.",
    },
    {
      title: "Clear diagnosis before recommendations",
      body: "You see what's broken and why - in plain English - before any pitch.",
    },
  ],
} as const;

/** Positioning strip - credibility through method, not fake logos. */
export const trustStrip = [
  "Audit-first growth",
  "Tracking before spend",
  "Paid Ads",
  "SEO",
  "Funnels",
  "Analytics",
  "International execution",
] as const;

/* ---------------------------------------------------------------------------
 * Problem - the disconnected system
 * ------------------------------------------------------------------------- */

export const problem = {
  eyebrow: "The real problem",
  headline: "Your traffic is not the problem. Your system is disconnected.",
  subhead:
    "Most campaigns do not fail at the click. They fail after the click - on the page, in the form, inside broken tracking, or inside reports that do not show what actually produced revenue.",
} as const;

export const problems = [
  {
    title: "You are spending blind",
    body: "Ad spend is visible. True performance is not.",
  },
  {
    title: "Your landing page leaks trust",
    body: "Traffic arrives, but the page does not make the next step obvious.",
  },
  {
    title: "Your tracking is unreliable",
    body: "Conversions fire twice, miss leads, or never connect to real business value.",
  },
  {
    title: "Your offer is unclear",
    body: "Visitors do not understand why they should act now.",
  },
  {
    title: "Your reports hide the truth",
    body: "You see clicks and impressions, but not what to fix first.",
  },
] as const;

/** Leak map - the four places budget quietly escapes (visual artifact data). */
export const leakPoints = [
  {
    stage: "Before the click",
    body: "The ad earns attention, but targets audiences that never convert.",
  },
  {
    stage: "After the click",
    body: "The page receives traffic, but drops the promise the ad made.",
  },
  {
    stage: "At the form",
    body: "The form exists, but the reason to submit it right now is weak.",
  },
  {
    stage: "In the data",
    body: "Tracking fires twice or not at all, so decisions rest on bad numbers.",
  },
] as const;

/* ---------------------------------------------------------------------------
 * Solution - one connected growth engine
 * ------------------------------------------------------------------------- */

export const engineSteps = [
  { label: "Traffic", note: "Paid + organic reach" },
  { label: "Message match", note: "The ad's promise, kept" },
  { label: "Landing page", note: "Built to continue the story" },
  { label: "Conversion", note: "A clear, low-friction next step" },
  { label: "Attribution", note: "Revenue traced to its source" },
  { label: "Optimization", note: "Cut waste, scale what works" },
] as const;

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
    cta: "Audit My Ads",
  },
  {
    title: "SEO Growth",
    tag: "Organic",
    body: "For businesses that want traffic that compounds instead of resetting every month.",
    fixes: ["Thin technical foundations", "Content without intent", "Invisible authority", "No organic pipeline"],
    forWho: "Businesses that want lower long-term acquisition cost",
    cta: "Start Review",
  },
  {
    title: "Landing Pages & Funnels",
    tag: "Conversion",
    body: "For teams sending good traffic to pages that quietly lose it.",
    fixes: ["Message mismatch", "Buried offers", "Form friction", "No testing discipline"],
    forWho: "Teams sending good traffic to weak pages",
    cta: "Fix My Funnel",
  },
  {
    title: "Social Media Marketing",
    tag: "Demand",
    body: "For brands that need to stay visible - and remembered - where their buyers actually are.",
    fixes: ["Inconsistent presence", "Reach without demand", "Content with no direction", "Silent channels"],
    forWho: "Brands building demand, not just reach",
    cta: "Start Review",
  },
  {
    title: "Analytics & Conversion Tracking",
    tag: "Measurement",
    body: "The foundation everything else stands on: clean tracking, honest attribution, dashboards you can trust.",
    fixes: ["Missing conversion events", "Duplicate or phantom leads", "No source attribution", "Reports nobody trusts"],
    forWho: "Anyone optimising blind right now",
    cta: "Claim Audit",
  },
] as const;

/* ---------------------------------------------------------------------------
 * Process
 * ------------------------------------------------------------------------- */

export const processSteps = [
  {
    step: "01",
    title: "Audit",
    body: "We review your funnel, ads, landing pages, and tracking before recommending new spend.",
    deliverable: "Funnel, ad-account & tracking teardown",
  },
  {
    step: "02",
    title: "Strategy",
    body: "We build a prioritized 90-day roadmap tied to revenue goals.",
    deliverable: "Prioritised 90-day growth roadmap",
  },
  {
    step: "03",
    title: "Launch",
    body: "Ads, pages, and tracking go live together as one measurable system.",
    deliverable: "Ads + pages + tracking, shipped together",
  },
  {
    step: "04",
    title: "Optimize",
    body: "We cut waste, double down on what works, and report weekly in plain English.",
    deliverable: "Weekly tests & plain-English reporting",
  },
] as const;

/* ---------------------------------------------------------------------------
 * Measurement / honest proof
 * ------------------------------------------------------------------------- */

export const measures = [
  { metric: "CPL", label: "Cost per lead" },
  { metric: "CVR", label: "Conversion rate" },
  { metric: "ROAS", label: "Return on ad spend" },
  { metric: "LQ", label: "Lead quality" },
  { metric: "Drop-off", label: "Where visitors leave" },
  { metric: "Attribution", label: "Revenue traced to source" },
] as const;

export const proofStatus = {
  heading: "Proof we earn, not invent",
  body: "Climbix is in its launch phase, so we do not fake proof or borrow case studies. Our proof is the method: audit first, tracking first, reporting in plain English, and every recommendation tied to measurable pipeline. Real case studies will be published here as live campaigns mature.",
  focusLabel: "Current launch focus",
  focus: ["Tracking quality", "Conversion clarity", "Campaign discipline"],
} as const;

/* ---------------------------------------------------------------------------
 * Why Climbix
 * ------------------------------------------------------------------------- */

export const authority = {
  eyebrow: "Why trust us now",
  headline: "Why serious businesses choose an audit-first agency.",
  contrast: "A cheap agency asks for budget first. A serious agency checks the system first.",
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

/* ---------------------------------------------------------------------------
 * Qualification - selectivity builds authority
 * ------------------------------------------------------------------------- */

export const whoFor = {
  eyebrow: "Who this is for",
  headline: "This is for brands that want clarity before scale.",
  forItems: [
    "You already spend on ads",
    "You have traffic but weak lead flow",
    "You do not trust your tracking",
    "You want international-ready campaigns",
    "You want landing pages and ads connected",
    "You want plain-English reporting",
  ],
  notForItems: [
    "You want fake guaranteed results",
    "You only care about impressions",
    "You are not ready to measure performance",
    "You want random marketing activity without strategy",
  ],
} as const;

export const callOutcomes = [
  "A clear read on where you're losing spend",
  "Your 2-3 highest-leverage growth moves",
  "An honest take on whether we're the right fit",
] as const;

/* ---------------------------------------------------------------------------
 * FAQ - objection handling. Honest answers, no guaranteed-results claims.
 * ------------------------------------------------------------------------- */

export const faqs = [
  {
    q: "What happens in the free audit?",
    a: "We review your ads, landing page, tracking, and funnel path, then send back where budget is likely leaking and your top priority fixes. You leave with clear next steps whether or not we ever work together.",
  },
  {
    q: "Is this really free?",
    a: "Yes. The audit and the strategy call cost nothing and carry no obligation. It's how we prove the method before asking for anything.",
  },
  {
    q: "Is this just a sales pitch?",
    a: "No. It's a working diagnosis, not a pitch deck. If we're not the right fit, we'll say so - and you keep the findings either way.",
  },
  {
    q: "What do you check first?",
    a: "Tracking. If your conversion data can't be trusted, every other decision is guesswork - so we verify the data before judging anything else.",
  },
  {
    q: "Do you manage Google and Meta ads?",
    a: "Yes - Google, Meta, and LinkedIn are our core paid channels, managed full-funnel from creative and targeting through to conversion tracking.",
  },
  {
    q: "Can you fix landing pages too?",
    a: "Yes. We build and rebuild conversion-focused pages that keep the ad's promise, so the traffic you pay for actually converts.",
  },
  {
    q: "What if my tracking is broken?",
    a: "That's the most common finding - and the first thing we fix. Clean tracking and attribution come before any scaling decision.",
  },
  {
    q: "What budget do I need?",
    a: "It depends on your market and goals. We'll give you an honest read on the call - including whether paid ads are the right first move for you at all.",
  },
  {
    q: "How fast can we start?",
    a: "The audit starts as soon as you submit the form. A typical audit-to-launch engagement runs 2-4 weeks, with tracking and pages prepared in parallel.",
  },
  {
    q: "Do you guarantee results?",
    a: "No - and you should be cautious of anyone who does. We commit to a disciplined method, honest reporting, and an audit before spending. We won't promise numbers we can't ethically guarantee.",
  },
  {
    q: "What if we are not a fit?",
    a: "Then we tell you that, plainly, and you keep the audit findings. We would rather be trusted next quarter than paid this month for the wrong engagement.",
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

export const footerServices = [
  "Paid Ads Management",
  "SEO Growth",
  "Landing Pages & Funnels",
  "Social Media Marketing",
  "Analytics & Tracking",
] as const;
