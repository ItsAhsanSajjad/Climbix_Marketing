import Script from "next/script";

/**
 * Production tracking loader - readiness, not live wiring.
 *
 * Each tag loads ONLY when its env var is set, so the repo ships with zero
 * tracking IDs and nothing fires until you configure the deployment. Recommended
 * setup: load GTM and manage GA4 / Google Ads / Meta Pixel inside the container,
 * triggered by the dataLayer events from `src/lib/analytics.ts`
 * (cta_click, lead_submit, audit_request, thank_you_view). Standalone GA4 and
 * Meta Pixel snippets are included as a fallback if you prefer not to use GTM.
 *
 * Set in the hosting env (see .env.example):
 *   NEXT_PUBLIC_GTM_ID         e.g. GTM-XXXXXXX
 *   NEXT_PUBLIC_GA4_ID         e.g. G-XXXXXXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID  e.g. 1234567890
 *   NEXT_PUBLIC_GOOGLE_ADS_ID  e.g. AW-XXXXXXXXX (conversion in GTM/gtag)
 */
export function AnalyticsScripts() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
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

      {pixelId && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}
    </>
  );
}
