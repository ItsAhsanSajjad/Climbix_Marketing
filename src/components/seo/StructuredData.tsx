import { siteUrl, site, services } from "@/lib/site";

/**
 * JSON-LD structured data. Honest fields only - no fabricated address, phone,
 * reviews, ratings, or social profiles. Add `sameAs` (socials), `logo`, and a
 * postal address here once they are real (Phase 4 / launch).
 */

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const description =
  "Performance marketing agency for growing international brands - paid ads, SEO, landing pages, and tracking-first strategy built into one measurable growth system.";

/** Site-wide: Organization + WebSite. Rendered in the root layout. */
export function SiteJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.fullName,
    url: siteUrl,
    email: site.email,
    description,
    slogan: site.tagline,
    areaServed: "Worldwide",
    knowsAbout: services.map((s) => s.title),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.fullName,
    url: siteUrl,
    description,
    inLanguage: "en",
  };

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={website} />
    </>
  );
}

/** Homepage: ProfessionalService describing what Climbix offers. */
export function ProfessionalServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.fullName,
    url: siteUrl,
    email: site.email,
    description,
    areaServed: "Worldwide",
    serviceType: services.map((s) => s.title),
  };
  return <JsonLd data={data} />;
}
