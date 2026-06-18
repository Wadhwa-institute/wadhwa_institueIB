import type { MetadataRoute } from "next";
import { siteUrl, subjects } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/courses`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/results`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/reviews`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/app`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const subjectRoutes: MetadataRoute.Sitemap = subjects.map((subject) => ({
    url: `${siteUrl}/courses/${subject.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...subjectRoutes];
}
