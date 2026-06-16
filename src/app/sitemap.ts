import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/branding", priority: 0.9, changeFrequency: "monthly" },
  { path: "/web-design", priority: 0.9, changeFrequency: "monthly" },
  { path: "/marketing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/print-signage", priority: 0.8, changeFrequency: "monthly" },
  { path: "/booking", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
