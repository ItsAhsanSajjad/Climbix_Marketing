# Climbix Marketing — Launch Checklist

Production go-live checklist. Items marked **[code ready]** are wired in the
codebase and just need configuration/credentials; **[manual]** are external.

## Domain & hosting
- [ ] **[manual]** Connect the real domain (e.g. `www.climbix.com`).
- [ ] **[manual]** SSL/HTTPS active and forced (Vercel handles automatically).
- [ ] **[code ready]** Set `NEXT_PUBLIC_SITE_URL` to the real domain (drives metadata, canonicals, sitemap, robots, JSON-LD).
- [ ] **[manual]** Decide www vs non-www and add a redirect to the canonical host.

## Environment variables (see `.env.example`)
- [ ] `NEXT_PUBLIC_SITE_URL`
- [ ] `NEXT_PUBLIC_GTM_ID` (or the standalone GA4/Ads/Pixel vars)
- [ ] `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID`, `NEXT_PUBLIC_META_PIXEL_ID`
- [ ] `NEXT_PUBLIC_LEAD_ENDPOINT`

## Tracking
- [ ] **[manual]** Create GTM container; add `NEXT_PUBLIC_GTM_ID`.
- [ ] **[manual]** GA4 property + data stream; verify pageviews.
- [ ] **[manual]** In GTM, map `thank_you_view` and `audit_request` (dataLayer events) to a **GA4 conversion** and a **Google Ads conversion** (AW-…/label).
- [ ] **[manual]** Meta Pixel: confirm `Lead` events fire on form submit / thank-you.
- [ ] **[code ready]** Events already pushed: `cta_click`, `lead_submit`, `audit_request`, `thank_you_view` (see `src/lib/analytics.ts`).
- [ ] **[manual]** Add a cookie-consent banner (CMP) before running ads in consent regions.

## Lead form / backend
- [ ] **[code ready]** Set `NEXT_PUBLIC_LEAD_ENDPOINT` to a real CRM/email/serverless endpoint.
- [ ] **[manual]** Endpoint: server-side validation + storage/notification.
- [ ] **[manual]** Spam protection on the endpoint (Cloudflare Turnstile / reCAPTCHA) — a client honeypot is already in place.
- [ ] **[manual]** Add a user-facing error/retry state for failed submissions (TODO marked in `LeadForm`).
- [ ] **[manual]** Test a real lead end-to-end (submit → endpoint → /thank-you → conversion fires).

## SEO
- [ ] **[code ready]** `/sitemap.xml` and `/robots.txt` generated (thank-you excluded/disallowed).
- [ ] **[code ready]** Per-route metadata + canonicals; thank-you/privacy/terms `noindex`.
- [ ] **[code ready]** JSON-LD: Organization, WebSite, ProfessionalService, FAQPage.
- [ ] **[manual]** Add a real **1200×630 OG image** at `src/app/opengraph-image.png` (and `free-marketing-audit/opengraph-image.png`) — Next auto-wires `og:image`/`twitter:image`.
- [ ] **[manual]** Add real `sameAs` social URLs + postal address to the Organization schema once available.
- [ ] **[manual]** Submit sitemap in Google Search Console; verify indexing.

## Legal
- [ ] **[manual]** Replace placeholder `/privacy` and `/terms` with lawyer-reviewed copy.
- [ ] **[manual]** Confirm cookie/tracking disclosures match the tools actually loaded.

## Performance & quality
- [ ] **[manual]** Lighthouse pass (mobile + desktop) — target 90+.
- [ ] **[manual]** Verify Core Web Vitals (LCP/CLS/INP) in the field after launch.
- [ ] **[code ready]** Build/lint/type-check pass; First Load ~150 kB; fonts self-hosted (next/font).

## QA
- [ ] **[manual]** Mobile QA: `/`, `/free-marketing-audit`, `/thank-you`, `/privacy`, `/terms` — no overflow, CTAs reachable, form usable, sticky CTA doesn't cover the form.
- [ ] **[manual]** Cross-browser: Chrome, Safari (incl. iOS), Firefox, Edge.
- [ ] **[manual]** Keyboard + screen-reader pass; `prefers-reduced-motion` honoured.
- [ ] **[manual]** Verify all CTAs route correctly and forms redirect to `/thank-you`.

## Deployment
- [ ] **[manual]** Deploy to Vercel (recommended) or any Node host: `npm run build` + `npm run start`.
- [ ] **[manual]** Set all env vars in the hosting dashboard.
- [ ] **[manual]** Configure caching/headers and a 404 fallback (default in place).

## Post-launch monitoring
- [ ] **[manual]** Watch GA4 + Ads conversions for the first campaigns.
- [ ] **[manual]** Monitor form submissions + spam rate; tune protection.
- [ ] **[manual]** Track Search Console coverage + Core Web Vitals.
- [ ] **[manual]** Replace sample/example proof with real case studies as campaigns mature.
