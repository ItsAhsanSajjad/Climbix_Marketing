import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/**
 * XML sitemap - indexable pages only. /thank-you (post-conversion) and the
 * legal pages (privacy/terms/refund) are excluded: they carry
 * robots:{index:false} and listing noindex URLs in a sitemap only generates
 * Search Console noise. Served at /sitemap.xml.
 *
 * lastModified: static per-page dates - update when a page's content
 * meaningfully changes (a new Date() here would claim "changed today" on
 * every build, which is a useless signal to crawlers).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date("2026-07-11"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/free-marketing-audit`,
      lastModified: new Date("2026-07-11"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/case-studies`,
      lastModified: new Date("2026-07-11"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date("2026-07-11"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
