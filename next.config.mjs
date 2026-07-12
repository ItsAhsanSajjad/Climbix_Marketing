/**
 * Security headers - baseline hardening for a lead-capture site.
 *
 * A full Content-Security-Policy is intentionally NOT set yet: the site uses
 * inline scripts for JSON-LD, the consent defaults, and (when configured)
 * GTM/GA4/Meta bootstraps, so a strict CSP needs nonce plumbing through
 * next/script. Until that lands, frame-ancestors-equivalent protection comes
 * from X-Frame-Options and the rest of the baseline below.
 */
const securityHeaders = [
  // Enforce HTTPS for two years incl. subdomains (only meaningful in prod).
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  // The site never needs to be framed - blocks clickjacking.
  { key: "X-Frame-Options", value: "DENY" },
  // Never MIME-sniff responses.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send origin-only referrers cross-origin (keeps UTM analysis on-site intact).
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site uses none of these sensors/APIs.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
