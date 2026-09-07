import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://waterdrop26651.github.io",
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
