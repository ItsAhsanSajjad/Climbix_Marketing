/**
 * Single source of truth for site-level content and navigation.
 * Centralised so copy/conversion refinement edits data here, not JSX.
 */

/**
 * Production base URL. Reads NEXT_PUBLIC_SITE_URL in deployment; falls back to a
 * placeholder so builds never break locally.
 * TODO (Phase 4 / launch): set NEXT_PUBLIC_SITE_URL to the real domain in the
 * hosting env (e.g. https://www.climbix.com) - used by metadata, canonicals,
 * sitemap, robots, and JSON-LD.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.climbix.com"
).replace(/\/+$/, "");

export const site = {
  name: "Climbix",
  fullName: "Climbix Marketing",
  tagline: "Turn scattered marketing into a measurable growth system.",
  email: "hello@climbix.com",
  // Primary action - books the strategy call (homepage lead form at #contact).
  ctaPrimary: { label: "Book a Free Strategy Call", href: "#contact" },
  // Secondary action - the lower-friction offer now has its own PPC landing page.
  ctaSecondary: { label: "Get a Free Marketing Audit", href: "/free-marketing-audit" },
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#results" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroTrustIndicators = [
  "PPC-ready",
  "Conversion-focused",
  "International campaigns",
  "Tracking-first strategy",
] as const;

export const trustItems = [
  "Built for international brands",
  "Strategy-first campaigns",
  "Landing pages + ads alignment",
  "Analytics-ready foundation",
] as const;

export const problems = [
  {
    title: "Spending without attribution",
    body: "Budget goes out the door, but you can't say which campaigns, keywords, or channels actually drove revenue.",
  },
  {
    title: "Landing pages leaking leads",
    body: "Ads send qualified traffic to slow, unfocused pages - and most of those hard-won clicks bounce before converting.",
  },
  {
    title: "No clear funnel",
    body: "Ads, SEO, content, and social run as separate experiments instead of one connected path from click to customer.",
  },
  {
    title: "Reporting without insight",
    body: "Dashboards full of impressions and clicks, but no answer to the only questions that matter: what's working, what's wasting budget, what to fix first.",
  },
] as const;

/**
 * Buyer-focused service modules: what it solves, what we do (body), what the
 * client receives, and who it's best for - plus a short outcome label.
 */
export const services = [
  {
    title: "Paid Ads Management",
    tag: "Acquisition",
    outcome: "Profit-first scaling",
    body: "Full-funnel Google, Meta, and LinkedIn campaigns engineered around profit - not vanity clicks. Continuously steered, tested, and scaled.",
    gets: "Managed campaigns, creative testing, weekly optimisation",
    forWho: "Brands ready to scale spend with confidence",
  },
  {
    title: "SEO Growth",
    tag: "Organic",
    outcome: "Compounding traffic",
    body: "Compounding organic visibility through technical foundations, intent-led content, and authority that keeps paying off after the work is done.",
    gets: "Technical fixes, content plan, authority building",
    forWho: "Businesses that want lower long-term CAC",
  },
  {
    title: "Landing Pages & Funnels",
    tag: "Conversion",
    outcome: "Higher conversion rate",
    body: "Conversion-focused pages and funnels built to match ad intent and lift every dollar of traffic you're already paying for.",
    gets: "Designed, built, A/B-tested landing pages",
    forWho: "Teams running ads to weak pages",
  },
  {
    title: "Social Media Marketing",
    tag: "Demand",
    outcome: "Always-on demand",
    body: "Brand presence and demand generation that keep you visible - and remembered - across the channels your buyers actually use.",
    gets: "Content cadence, paid social, community signals",
    forWho: "Brands building demand, not just reach",
  },
  {
    title: "Analytics & Conversion Tracking",
    tag: "Measurement",
    outcome: "Decisions you can trust",
    body: "Server-side tracking, clean attribution, and dashboards so every decision is grounded in real data instead of guesswork.",
    gets: "Tracking setup, attribution, live dashboards",
    forWho: "Anyone optimising blind right now",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Audit",
    body: "We diagnose waste and tracking gaps - pressure-testing your funnel, ad accounts, pages, and analytics to find exactly what's leaking growth.",
    deliverable: "Funnel, ad-account & tracking teardown",
    outcome: "Where you're leaking",
  },
  {
    step: "02",
    title: "Strategy",
    body: "We build the channel and funnel plan - a prioritised roadmap mapping offers, audiences, and targets directly to your revenue goals.",
    deliverable: "Prioritised 90-day growth roadmap",
    outcome: "A clear plan",
  },
  {
    step: "03",
    title: "Launch",
    body: "Campaigns, landing pages, and tracking ship together as one aligned, measurable system - no disconnected experiments.",
    deliverable: "Ads + pages + tracking, shipped together",
    outcome: "Live & measurable",
  },
  {
    step: "04",
    title: "Optimize",
    body: "We report, test, and scale - cutting waste and compounding what works, with clear reporting every step of the way.",
    deliverable: "Weekly tests & clear reporting",
    outcome: "Compounding gains",
  },
] as const;

/**
 * Trust architecture - content-based credibility (not visual only). These are
 * how Climbix works, not claimed results, so they're honest by construction.
 */
export const trustPillars = [
  {
    title: "Audit before spending",
    body: "We find the leaks before recommending a single dollar of new budget. No guesswork, no spray-and-pray.",
  },
  {
    title: "Tracking-first strategy",
    body: "Clean, server-side tracking and attribution come first - so every later decision is grounded in real data.",
  },
  {
    title: "Campaigns + pages aligned",
    body: "Ads and landing pages are built as one system. Message match from the click to the conversion.",
  },
  {
    title: "Clear, plain-English reporting",
    body: "You always know what's working, what's wasting budget, and what we're fixing next. No vanity dashboards.",
  },
  {
    title: "International campaign readiness",
    body: "Multi-market, multi-currency, English-first execution built for brands selling across borders.",
  },
  {
    title: "Conversion-focused execution",
    body: "Every deliverable is judged on pipeline and revenue - not impressions, reach, or likes.",
  },
] as const;

/**
 * Proof framework - what we measure (honest substitute for fabricated results).
 * We never invent client numbers; we show the discipline behind the work.
 */
export const measures = [
  { metric: "CPL", label: "Cost per lead" },
  { metric: "CVR", label: "Conversion rate" },
  { metric: "ROAS", label: "Return on ad spend" },
  { metric: "LQ", label: "Lead quality" },
  { metric: "Drop-off", label: "Landing page drop-off" },
  { metric: "Attribution", label: "Attribution accuracy" },
] as const;

export const proofStatus = {
  heading: "Proof we earn, not invent",
  body: "Climbix is in its launch phase, so we don't post borrowed logos or recycled case studies. Published case studies will be added here as live campaigns mature. Until then, our proof is our method: disciplined measurement, transparent reporting, and an audit before we ever touch your budget.",
  focusLabel: "Current launch focus",
  focus: ["Tracking quality", "Conversion clarity", "Campaign discipline"],
} as const;

// Trust through transparency - what every client actually receives.
export const reportingDeliverables = [
  "Live performance dashboard, always on",
  "Clean server-side conversion tracking",
  "Weekly optimisation notes in plain English",
  "Clear attribution - know what drives revenue",
  "No long lock-in contracts",
] as const;

export const callOutcomes = [
  "A clear read on where you're losing spend",
  "Your 2-3 highest-leverage growth moves",
  "An honest take on whether we're the right fit",
] as const;

/** Objection-handling FAQ. Answers are honest - no guaranteed-results claims. */
export const faqs = [
  {
    q: "What does the free strategy call include?",
    a: "A focused 15-minute call where we review your current marketing, point out where budget is likely leaking, and outline the 2-3 highest-leverage moves for your business. You leave with clear next steps whether or not we work together.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Climbix is English-first and built for international brands - multi-market, multi-currency campaigns are standard for us.",
  },
  {
    q: "Do you manage Google Ads and Meta Ads?",
    a: "Yes - Google, Meta, and LinkedIn are our core paid channels, managed full-funnel from creative and targeting through to conversion tracking.",
  },
  {
    q: "Can you build landing pages too?",
    a: "Yes. We build conversion-focused landing pages and funnels designed to match your ad intent, so the traffic you pay for actually converts.",
  },
  {
    q: "How quickly can we launch?",
    a: "It depends on your current setup, but a typical audit-to-launch runs 2-4 weeks. Tracking and landing pages are prepared in parallel with campaign build so nothing waits on guesswork.",
  },
  {
    q: "What budget do I need for paid ads?",
    a: "We work best with brands able to commit meaningful, sustained ad spend - but the right number depends on your market and goals. We'll give you an honest read on the call, and we'll tell you if paid ads aren't the right first move.",
  },
  {
    q: "How do you report results?",
    a: "A live dashboard you can check any time, plus weekly optimisation notes in plain English. You'll always know what's working, what's wasting budget, and what we're fixing next.",
  },
  {
    q: "Do you offer one-time audits?",
    a: "Yes. The free audit is a genuine starting point, and a deeper paid audit is available if you want a full teardown without a management engagement.",
  },
  {
    q: "What if my tracking isn't set up?",
    a: "That's one of the first things we fix. We set up clean, server-side conversion tracking and attribution before scaling spend - optimising on bad data is how budgets get wasted.",
  },
  {
    q: "Do you guarantee results?",
    a: "No - and you should be cautious of anyone who does. What we commit to is a disciplined method, honest reporting, and an audit before spending. We optimise relentlessly toward your revenue goals, but we won't promise numbers we can't ethically guarantee.",
  },
] as const;

/** Lead-form select options. */
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
  headline: "Stop wasting ad budget.",
  headlineAccent: "Get a free marketing audit.",
  subhead:
    "Before your next campaign, find out exactly where your spend, tracking, and landing pages are leaking growth - and the highest-leverage fixes to make first.",
  microcopy: "Free · No obligation · Audit-first, no guesswork",
} as const;

export const auditIncludes = [
  {
    title: "Ad account teardown",
    body: "A review of your campaigns, targeting, and spend to find waste and quick wins.",
  },
  {
    title: "Tracking & attribution check",
    body: "We verify whether your conversion data can actually be trusted to make decisions.",
  },
  {
    title: "Landing page review",
    body: "Where qualified visitors drop off - and what's costing you conversions.",
  },
  {
    title: "Prioritised action list",
    body: "The 2-3 highest-leverage fixes to make first, ranked by impact.",
  },
] as const;

export const auditFinds = [
  "Budget spent on audiences that never convert",
  "Conversions firing twice - or not at all",
  "Landing pages that load slow and bury the offer",
  "No clean attribution between channels and revenue",
  "Campaigns disconnected from real business goals",
] as const;

export const footerServices = [
  "Paid Ads Management",
  "SEO Growth",
  "Landing Pages & Funnels",
  "Social Media Marketing",
  "Analytics & Tracking",
] as const;
