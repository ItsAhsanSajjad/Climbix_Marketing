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
  tagline: "Performance marketing built to convert - ads, pages, and tracking as one measurable system.",
  email: "hello@climbix.com",
  // Primary action - books the strategy call (homepage lead form at #contact).
  ctaPrimary: { label: "Book My Free Strategy Call", href: "#contact" },
  // Secondary action - the lower-friction offer has its own PPC landing page.
  ctaSecondary: { label: "Get My Free Marketing Audit", href: "/free-marketing-audit" },
} as const;

export const navLinks = [
  { label: "What We Audit", href: "#audit" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const;

/* ---------------------------------------------------------------------------
 * Hero
 * ------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "Performance marketing built to convert",
  headline: "Stop guessing where your marketing budget is going.",
  subhead:
    "Climbix connects paid ads, landing pages, SEO, funnels, and tracking into one measurable system - so every decision is tied to leads, revenue, and real performance, not vanity metrics.",
  riskLine:
    "30 minutes. Zero pressure. You leave with clear growth gaps - even if we never work together.",
} as const;

/** Hero trust checklist - honest method claims, no invented proof. */
export const heroChecklist = [
  "Audit before we touch your budget",
  "No vanity metrics",
  "Tracking comes first",
  "Built for international brands",
  "Clear next steps, not guesswork",
] as const;

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

export const problems = [
  {
    title: "You are spending blind",
    body: "Budget goes out every week, but you can't say which campaigns or channels actually produce revenue.",
  },
  {
    title: "Your landing page is leaking conversions",
    body: "Ads win the click, then the page loses the visitor - slow, unfocused, or off-promise.",
  },
  {
    title: "Your channels are not working together",
    body: "Ads, SEO, and content run as separate experiments instead of one connected path to a lead.",
  },
  {
    title: "Your reports do not answer what matters",
    body: "Impressions and clicks everywhere - no answer to what's working, what's wasted, what's next.",
  },
  {
    title: "Your tracking cannot be trusted",
    body: "Conversions fire twice or not at all, so every 'data-driven' decision is built on sand.",
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
    body: "We don't optimize for cheap clicks. We optimize for qualified leads, revenue, and campaigns that can be measured properly.",
    gets: "Google, Meta, and LinkedIn campaigns with testing, optimization, and clear reporting",
    forWho: "Brands ready to scale spend with confidence",
  },
  {
    title: "SEO Growth",
    tag: "Organic",
    body: "Compounding organic visibility through technical foundations, intent-led content, and authority that keeps paying off.",
    gets: "Technical fixes, content plan, authority building",
    forWho: "Businesses that want lower long-term acquisition cost",
  },
  {
    title: "Landing Pages & Funnels",
    tag: "Conversion",
    body: "Pages built to match ad intent and lift every dollar of traffic you're already paying for.",
    gets: "Designed, built, and tested landing pages and funnels",
    forWho: "Teams sending good traffic to weak pages",
  },
  {
    title: "Social Media Marketing",
    tag: "Demand",
    body: "Brand presence and demand generation that keep you visible - and remembered - where your buyers actually are.",
    gets: "Content cadence, paid social, community signals",
    forWho: "Brands building demand, not just reach",
  },
  {
    title: "Analytics & Conversion Tracking",
    tag: "Measurement",
    body: "Clean tracking, honest attribution, and dashboards you can actually trust - the foundation everything else stands on.",
    gets: "Tracking setup, attribution, live plain-English dashboards",
    forWho: "Anyone optimising blind right now",
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

export const whyClimbix = [
  {
    title: "We audit before asking for budget",
    body: "The leaks get found before a single new dollar is recommended.",
  },
  {
    title: "Tracking comes first",
    body: "Clean attribution before scaling - optimising on bad data is how budgets die.",
  },
  {
    title: "Ads and pages are built together",
    body: "Message match from the click to the conversion, as one system.",
  },
  {
    title: "Reports are plain English",
    body: "What's working, what's wasted, what we're fixing next. No vanity dashboards.",
  },
  {
    title: "Built for international brands",
    body: "Multi-market, multi-currency, English-first execution across borders.",
  },
  {
    title: "Judged by pipeline and revenue",
    body: "Every deliverable answers to leads and revenue - not impressions or likes.",
  },
] as const;

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
    q: "What happens on the free strategy call?",
    a: "A focused 30-minute call where we review your current marketing, point out where budget is likely leaking, and outline your 2-3 highest-leverage moves. You leave with clear next steps whether or not we work together.",
  },
  {
    q: "Is this just a sales pitch?",
    a: "No. The call is a working session, not a pitch deck. If we're not the right fit, we'll say so and still leave you with a clearer read on your growth gaps.",
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
    q: "How fast can we launch?",
    a: "It depends on your current setup, but a typical audit-to-launch runs 2-4 weeks. Tracking and landing pages are prepared in parallel with campaign build so nothing waits on guesswork.",
  },
  {
    q: "What budget do I need?",
    a: "We work best with brands able to commit meaningful, sustained ad spend - but the right number depends on your market and goals. We'll give you an honest read on the call, including whether paid ads are the right first move at all.",
  },
  {
    q: "How will I know if it is working?",
    a: "A live dashboard you can check any time, plus weekly notes in plain English. You'll always know what's working, what's wasting budget, and what we're fixing next.",
  },
  {
    q: "What if I only need an audit?",
    a: "That's fine. The free audit is a genuine starting point, and a deeper paid audit is available if you want a full teardown without a management engagement.",
  },
  {
    q: "My tracking is messy. Is that a problem?",
    a: "It's the first thing we fix. We set up clean conversion tracking and attribution before scaling spend - optimising on bad data is how budgets get wasted.",
  },
  {
    q: "Do you guarantee results?",
    a: "No - and you should be cautious of anyone who does. What we commit to is a disciplined method, honest reporting, and an audit before spending. We optimise relentlessly toward your revenue goals, but we won't promise numbers we can't ethically guarantee.",
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
