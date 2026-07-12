import Script from "next/script";

/**
 * Production tracking loader with Google Consent Mode v2.
 *
 * Order of operations:
 *   1. An inline consent-default script runs BEFORE any tag: every Consent
 *      Mode storage signal defaults to "denied". If the visitor already made
 *      a choice (localStorage), it is applied immediately.
 *   2. GTM / gtag load consent-aware: with consent denied they send only
 *      cookieless pings; with consent granted they behave normally.
 *   3. The Meta Pixel has no consent mode, so it is NOT loaded here at all -
 *      src/lib/consent.ts injects it only after the visitor grants consent
 *      (see ConsentBanner).
 *
 * Each tag loads ONLY when its env var is set, so the repo ships with zero
 * tracking IDs and nothing loads until you configure the deployment.
 *
 * Set in the hosting env (see .env.example):
 *   NEXT_PUBLIC_GTM_ID         e.g. GTM-XXXXXXX
 *   NEXT_PUBLIC_GA4_ID         e.g. G-XXXXXXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID  e.g. 1234567890 (loaded on consent only)
 *   NEXT_PUBLIC_GOOGLE_ADS_ID  e.g. AW-XXXXXXXXX (conversion in GTM/gtag)
 */
export function AnalyticsScripts() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const anyTag = Boolean(gtmId || ga4Id || adsId || pixelId);

  if (!anyTag) return null;

  return (
    <>
      {/* Consent Mode v2 defaults - a plain inline script (not next/script,
          whose beforeInteractive is reserved for the root layout head) so it
          executes synchronously during HTML parse, before the afterInteractive
          GTM/gtag tags below ever load. Content is a code-controlled constant. */}
      <script
        id="consent-defaults"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=window.gtag||gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});try{var c=localStorage.getItem('climbix-consent');if(c==='granted'||c==='denied'){gtag('consent','update',{ad_storage:c,ad_user_data:c,ad_personalization:c,analytics_storage:c});}}catch(e){}`,
        }}
      />

      {gtmId && (
        <>
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="gtm"
            />
          </noscript>
        </>
      )}

      {(ga4Id || adsId) && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id ?? adsId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${
              ga4Id ? `gtag('config','${ga4Id}');` : ""
            }${adsId ? `gtag('config','${adsId}');` : ""}`}
          </Script>
        </>
      )}

      {/* Meta Pixel intentionally absent - consent-gated in src/lib/consent.ts. */}
    </>
  );
}
