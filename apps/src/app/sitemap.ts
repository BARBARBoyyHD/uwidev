import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-06");
  const alternates = {
    languages: {
      en: "https://zavron.dev/en",
      id: "https://zavron.dev/id",
    },
  };

  return [
    {
      url: "https://zavron.dev/en",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates,
    },
    {
      url: "https://zavron.dev/id",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates,
    },
  ];
}