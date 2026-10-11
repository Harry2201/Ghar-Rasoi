import type { MetadataRoute } from "next";

const BASE_URL = "https://gharrasoi.in";

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