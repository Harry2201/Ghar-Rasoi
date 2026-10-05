import type { MetadataRoute } from "next";

const BASE_URL = "https://gharrasoi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/products`,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Oils
    {
      url: `${BASE_URL}/products/mustard-oil`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products/sunflower-oil`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/products/sesame-oil`,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Masalas
    {
      url: `${BASE_URL}/products/haldi-powder`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/products/dhaniya`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/products/lal-mirchi`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/products/garam-masala`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/products/kitchen-king`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/products/sabji-masala`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/products/meat-masala`,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // Atta
    {
      url: `${BASE_URL}/products/multigrain-atta`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/products/ragi-atta`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/products/bajra-atta`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/products/jowar-atta`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/products/wheat-atta`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/products/rice-atta`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}