import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/**
 * XML sitemap. /thank-you is intentionally excluded (it's a post-conversion,
 * noindex page). Served at /sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${siteUrl}/free-marketing-audit`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
