<div align="center">

# Climbix Marketing

**Premium, conversion-focused website and PPC landing page for an international performance-marketing agency.**

Built with Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion

</div>

---

## Overview

Climbix Marketing is a production-grade marketing site engineered for lead generation and paid-traffic campaigns. It pairs a premium "dark authority" design system with a conversion-first information architecture: a corporate homepage, a dedicated PPC landing page, a qualified lead-capture form, objection-handling FAQ, and a measurable tracking layer that is ready for GTM, GA4, Google Ads, and the Meta Pixel.

The build emphasises the things that matter for real campaigns: fast first load, mobile-first responsiveness, accessibility, clean SEO foundations, and honest, on-brand content (no fabricated proof or inflated claims).

## Highlights

- **Conversion-first homepage** — hero, capabilities, "Audit to Scale" process, proof/measurement framework, FAQ, and a lead-capture contact block.
- **Dedicated PPC landing page** (`/free-marketing-audit`) — single offer, form above the fold, minimal header, focused FAQ.
- **Qualified lead form** — accessible fields, inline validation, UTM/gclid attribution capture, honeypot spam guard, and a configurable submission endpoint.
- **Tracking-ready** — env-gated GTM / GA4 / Google Ads / Meta Pixel loaders and a vendor-agnostic event layer (`cta_click`, `lead_submit`, `audit_request`, `thank_you_view`).
- **SEO foundations** — per-route metadata, canonicals, Open Graph/Twitter, `sitemap.xml`, `robots.txt`, and Organization / WebSite / ProfessionalService / FAQ structured data.
- **Premium motion** — cinematic hero, scroll reveals, spotlight cards, an animated campaign-intelligence dashboard, and a sticky conversion CTA — all respecting `prefers-reduced-motion`.
- **Accessible & responsive** — semantic landmarks, skip links, labelled forms, keyboard-friendly FAQ, visible focus states, no horizontal overflow.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router, React 18) |
| Language | TypeScript |
| Styling | Tailwind CSS (token-driven design system) |
| Motion | Framer Motion (`LazyMotion`, reduced-motion aware) |
| Fonts | `next/font` — Inter, Sora, JetBrains Mono (self-hosted) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Copy `.env.example` to `.env.local` and set values as needed. All variables are optional locally — each feature activates only when its variable is present.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (next/core-web-vitals) |

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Corporate homepage |
| `/free-marketing-audit` | PPC landing page with lead form |
| `/thank-you` | Post-submission confirmation + conversion event |
| `/privacy`, `/terms` | Legal pages |
| `/sitemap.xml`, `/robots.txt` | Generated SEO endpoints |

## Environment variables

See [`.env.example`](./.env.example). All optional; nothing tracks or sends by default.

| Variable | Used for |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Metadata, canonicals, sitemap, robots, JSON-LD |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager |
| `NEXT_PUBLIC_GA4_ID` / `NEXT_PUBLIC_GOOGLE_ADS_ID` | Standalone gtag |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel |
| `NEXT_PUBLIC_LEAD_ENDPOINT` | Lead-form submission endpoint |

## Project structure

```
src/
  app/            # routes, layout, sitemap, robots, icon
  components/
    ui/           # primitives (Container, Section, Button, Card, Field, …)
    layout/       # Navbar, Logo, Footer
    sections/     # homepage sections
    forms/        # lead form + selects
    landing/      # PPC landing components
    legal/        # legal page shell
    motion/       # reusable motion + conversion helpers
    seo/          # structured data, analytics loaders
  lib/            # content (site.ts), analytics, helpers
tailwind.config.ts
```

## Deployment

Optimised for **Vercel**; runs on any Node host via `npm run build && npm run start`. Set the environment variables in your hosting dashboard, then connect your domain. See [`LAUNCH_CHECKLIST.md`](./LAUNCH_CHECKLIST.md) for the full go-live checklist.

## License

Released under the [MIT License](./LICENSE).
