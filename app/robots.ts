import type { MetadataRoute } from "next";

const BASE_URL = "https://gharrasoi.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}