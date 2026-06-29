import type { Metadata, Viewport } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { BackgroundOrbs } from "@/components/motion/BackgroundOrbs";
import { FrameRails } from "@/components/motion/FrameRails";
import { CtaTracker } from "@/components/motion/CtaTracker";
import { SiteJsonLd } from "@/components/seo/StructuredData";
import { AnalyticsScripts } from "@/components/seo/AnalyticsScripts";
import { siteUrl, site } from "@/lib/site";

// Body - Inter: highly legible, neutral, premium SaaS default.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Display - Sora: geometric, confident headings without feeling generic.
const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Data / metrics - JetBrains Mono: signals "this is a measurement-led brand".
// Used only for numbers, KPI labels, and editorial indices.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Climbix is a performance marketing agency helping growing international brands turn clicks into customers with paid ads, SEO, landing pages, and tracking-first strategy.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Climbix Marketing - Performance Marketing That Converts",
    template: "%s · Climbix Marketing",
  },
  description,
  applicationName: site.fullName,
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  publisher: site.fullName,
  category: "marketing",
  keywords: [
    "performance marketing agency",
    "PPC management",
    "paid ads management",
    "SEO growth",
    "landing page optimization",
    "conversion tracking",
    "international marketing agency",
  ],
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, address: false, email: false },
  // TODO (launch): drop a 1200x630 PNG at src/app/opengraph-image.png (and one in
  // free-marketing-audit/) - Next auto-wires og:image/twitter:image. Until then
  // OG/Twitter previews use title + description only.
  openGraph: {
    type: "website",
    siteName: site.fullName,
    url: "/",
    title: "Climbix Marketing - Performance Marketing That Converts",
    description:
      "Paid ads, SEO, landing pages, and tracking - built into one measurable growth system.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Climbix Marketing - Performance Marketing That Converts",
    description:
      "Paid ads, SEO, landing pages, and tracking - built into one measurable growth system.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        {/* No-JS safety net: Framer Motion serializes its `hidden` variant
            (opacity:0 + transform + blur) into the SSR HTML. With scripts
            disabled those never animate to visible, so force them shown. Only
            rendered when JS is off - zero effect (and zero flash) otherwise. */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        <SiteJsonLd />
        <AnalyticsScripts />
        <BackgroundOrbs />
        <FrameRails />
        <CtaTracker />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
