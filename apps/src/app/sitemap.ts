import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-06");
  const alternates = {
    languages: {
      en: "https://uwidev.com/en",
      id: "https://uwidev.com/id",
    },
  };

  return [
    {
      url: "https://uwidev.com/en",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates,
    },
    {
      url: "https://uwidev.com/id",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates,
    },
  ];
}