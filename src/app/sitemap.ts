import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ettglobal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/wifi-campus`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/call-center`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/contact`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/devis`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/actus`, changeFrequency: "weekly", priority: 0.5 },
    { url: `${base}/recrutement`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/mentions-legales`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/politique-confidentialite`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
