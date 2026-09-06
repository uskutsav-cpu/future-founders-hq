import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { chapters } from "@/data/chapters";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];
  return [
    "",
    "/about",
    "/what-we-do",
    "/chapters",
    "/competitions",
    "/resources",
    "/contact",
    "/start-a-chapter",
    "/apply",
    "/join",
    "/leadership",
    "/events",
    "/privacy",
    "/terms",
    ...chapters.map((c) => "/chapters/" + c.slug),
  ].map((p) => ({
    url: site.url + p + "/",
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
}
