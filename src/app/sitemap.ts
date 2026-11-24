import { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { events } from "@/content/events";
import { resources } from "@/content/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = ["", "/about", "/programs", "/events", "/resources", "/partner", "/contact", "/privacy", "/terms"].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.8,
  }));
  const eventRoutes = events.map((e) => ({ url: `${base}/events/${e.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 }));
  const resourceRoutes = resources.map((r) => ({ url: `${base}/resources/${r.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 }));
  return [...staticRoutes, ...eventRoutes, ...resourceRoutes];
}
