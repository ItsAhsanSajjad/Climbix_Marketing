# Statistics Source Map — PRIVATE (do not publish or link publicly)

Every number rendered on the website maps to a row here. Do not add a metric
to `src/lib/site.ts` (`stats`, `caseStudies`) without adding its source row
first. Screenshots referenced below stay in `assets/` (not shipped — the
folder is outside `public/`) — never publish raw screenshots: several contain
account emails and personal data.

**Approval legend:** `PENDING-OWNER` = implemented on-site, requires a one-line
written owner attestation ("our account, we ran it, publishable") before paid
traffic runs. `EXCLUDED` = must never be published.

## Published metrics

| ID | Public metric | Public label | Source asset | Dashboard reference | Period | Currency | Context / limitations | Approval |
|----|---------------|--------------|--------------|--------------------|--------|----------|----------------------|----------|
| S1 | **109** tracked leads | Dubai interior-design campaign · AED 1.75 avg. CPC | `assets/Muhammad Ahmad ... (1).pptx` slide 4 + embedded `ppt/media/image8.jpeg`; corroborated by `assets/WhatsApp Image 2026-07-11 at 8.30.09 PM.jpeg` | Google Ads overview: Clicks 1.72K · Impressions 29.8K · Conversions 109.00 · Avg. CPC dh1.75 | Aug 3–31, 2024 (29 days) | AED | Deck names client "MD Design & Fit Out" — anonymized on site ("Dubai interior-design firm") pending naming permission. "Tracked leads" wording used because lead *qualification* is not documented. ⚠ **DATE DISCREPANCY:** site displays "Apr 2026" per owner instruction (2026-07-12); the source capture shows Aug 3–31, 2024. Owner must either supply the real Apr 2026 campaign figures or restore the Aug 2024 label before launch/attestation. | PENDING-OWNER |
| S2 | **99** phone-call leads | US local-services campaign · $10.79 per lead | PPTX embedded `ppt/media/image12.jpeg`; same capture as `assets/WhatsApp Image 2026-07-11 at 8.30.07 PM.jpeg` | Google Ads: Phone call leads 99.00 · Cost/conv. $10.79 · Cost $1.07K · campaign "Search I Towing" · Budget $100/day (status "Limited") | Apr 12 – May 11 (30 days; year cropped in capture) | USD | Budget-capped delivery noted on the case-study card ("capped daily budget"). $1.07K ÷ 99 ≈ $10.79 ✓ internally consistent. | PENDING-OWNER |
| S3 | **148** conversions · $1.43 each · 31.62% conv. rate · 468 clicks | Search lead-gen campaign | PPTX slide 4 + embedded `ppt/media/image9.jpeg` | Google Ads performance summary: Clicks 468 · Local actions 148.00 · Conv. rate 31.62% · Cost/conv. $1.43 | Dec 20 – Jan 2 (two weeks, per dashboard x-axis) | USD | ⚠ Deck attributes these SAME numbers to two different projects ("RSP" and "Mystorypublisher"). One dashboard exists. Published ONCE as an anonymized campaign; owner must confirm which client it belongs to before naming. | PENDING-OWNER |
| S4 | **4** international markets | United States · United Kingdom · UAE · Pakistan | Derived: S1 (AED), S2/S3 ($), PPTX `image14/15` UK campaign (£), PPTX `image11` (PKR); deck slide 2 claims USA/UAE/UK/Pakistan clients | Four currencies appear across campaign captures | — | — | The most defensible aggregate available. Still requires the same account-ownership attestation as its component campaigns. | PENDING-OWNER |
| S5 | **356** tracked leads & conversions | Combined total of the three published campaigns (StatsBand anchor) | Derived: simple sum of S1 + S2 + S3 (109 + 99 + 148 = 356). No other components included. | — | Union of S1/S2/S3 periods (shown per campaign) | Mixed (AED/USD) | Pure arithmetic on already-published rows — publishable iff S1–S3 are. Footnote on-site states it is "the simple sum of the three campaigns shown". Unlike the excluded "1,000+ conversions" claim, every component here is verified. | PENDING-OWNER |

## Intentionally excluded (do not publish — ever)

| Asset | Content | Reason |
|-------|---------|--------|
| PPTX embedded `image10.jpeg` | mr-rooter.ca dashboard (1.53K clicks, 83 conv, $20.61 cost/conv, Nov–Dec 2025) | Account header shows third-party email `freelancershihab123@gmail.com` + Lightshot watermark — provenance cannot be established as Climbix work. Publishing = fabricated proof. |
| `assets/WhatsApp Image 2026-07-11 at 8.30.09 PM (1).jpeg` | 66 clicks, 9 conv, $26.28 cost/conv (Jan–Feb 2026) | Account header shows third-party email `tanvirahmed08041@gmail.com`. Same provenance failure; weak numbers besides. |
| PPTX embedded `image15.jpeg` | Search Console: 2.15K clicks, 555K impressions, 0.4% CTR, avg position 49.7 (Oct 2022–Jan 2023) | Poor performance; photo-of-screen; would damage credibility. |
| PPTX slide 2 claims | "8X ROAS", "28% ROI", "280+ first-page keywords" | Self-reported, no supporting dashboards. The keyword claim is contradicted by the only SEO evidence (avg position 49.7). "28% ROI" is ambiguous (ROI vs ROI lift). |
| PPTX slides 2/6 | "5+ years" vs "over 6 years" experience | Internally inconsistent; personal-experience claim. Not published. |
| PPTX `image11.jpeg` | Rs 5.16M all-time cost · 702 conversions · unlabeled "Rs174" | Unlabeled metric, all-time window, unclear account context. Also why NO "1,000+ conversions" aggregate is published — this component can't be verified. |
| PPTX `image1.png`, `image3.png` | Personal photographs | Personal portfolio content — excluded per content rules. |
| PPTX `image18.jpeg` | Google Digital Unlocked certificate, personal name, 03/05/2020 | Personal attribution. A company-level "Google-certified" claim needs explicit owner approval — not published. |
| PPTX `image13.jpeg` | LinkedIn "Certified Marketing Expert" badge artwork | Generic badge graphic, not a certificate document. Insufficient evidence. |
| PPTX slides 1/2/7/8 | Name, phone `+92 301-7740420`, `mahmadmj78@gmail.com`, bio, freelance-availability | Personal identity — excluded everywhere on the site. |

## Where the numbers render

- `src/lib/site.ts` → `stats` (StatsBand on `/` and `/free-marketing-audit`; compact summary on `/case-studies`)
- `src/lib/site.ts` → `caseStudies` (CaseStudiesPreview on `/`; full presentations on `/case-studies`)
- FAQ answers reference markets (US/UK/UAE/PK) and industries (interior design, local services, publishing, education — the niches named in the deck); covered by S1–S4 + deck slide 2. Same attestation applies.
