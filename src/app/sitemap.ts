import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { landings } from "@/lib/landings";
import { siteUrl, subjects } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/ib-coaching-gurugram`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/courses`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/faculty`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/results`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/reviews`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/app`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const subjectRoutes: MetadataRoute.Sitemap = subjects.map((subject) => ({
    url: `${siteUrl}/courses/${subject.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const landingRoutes: MetadataRoute.Sitemap = landings.map((l) => ({
    url: `${siteUrl}/${l.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...landingRoutes, ...subjectRoutes, ...blogRoutes];
}
