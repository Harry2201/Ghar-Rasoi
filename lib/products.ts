import { processSteps } from "./site";

export type ProductVariant = {
  size: string;
  price?: number;
};

export type ProductCategory = "Oils" | "Masalas" | "Grains & Millets";

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  image: string;
  shortDescription: string;
  featured: boolean;
  variants: ProductVariant[];
  description?: string;
  ingredients?: string;
  storageInstructions?: string;
  howItsMade?: readonly (readonly [string, string, string])[];
};

/**
 * Files that actually exist under public/images/products/.
 * Declared paths on products still name the intended SKU file; this set
 * is what we request from the browser so missing SKUs do not 404.
 */
export const existingProductImages = new Set<string>([
  "/images/products/mustard-oil.png",
  "/images/products/sunflower-oil.png",
  "/images/products/sesame-oil.png",
  "/images/products/haldi-powder.png",
  "/images/products/dhaniya.png",
  "/images/products/lal-mirchi.png",
  "/images/products/garam-masala.png",
  "/images/products/kitchen-king.png",
]);

export const categoryQueryParam: Record<ProductCategory, string> = {
  Oils: "oils",
  Masalas: "masalas",
  "Grains & Millets": "grains",
};

export function categoryFromQuery(
  value: string | null | undefined
): ProductCategory | "All" {
  const key = String(value ?? "").trim().toLowerCase();
  if (key === "oils") return "Oils";
  if (key === "masalas") return "Masalas";
  if (key === "grains" || key === "grains-millets" || key === "grains & millets") {
    return "Grains & Millets";
  }
  return "All";
}

export function resolvedProductImage(image: string | null | undefined): string | null {
  if (!image) return null;
  return existingProductImages.has(image) ? image : null;
}

export const products: Product[] = [
  {
    id: "mustard-oil",
    name: "Mustard Oil",
    slug: "mustard-oil",
    category: "Oils",
    image: "/images/products/mustard-oil.png",
    shortDescription:
      "Our flagship mustard oil, pressed and filtered in Varanasi.",
    description:
      "Our flagship mustard oil, made from carefully cleaned mustard seeds and filtered after pressing.",
    featured: true,
    variants: [],
    howItsMade: processSteps,
  },
  {
    id: "sunflower-oil",
    name: "Sunflower Oil",
    slug: "sunflower-oil",
    category: "Oils",
    image: "/images/products/sunflower-oil.png",
    shortDescription:
      "A clean, everyday cooking oil for the modern Indian kitchen.",
    description:
      "A clean everyday cooking oil. Product specifications and variants will be added from the final catalogue.",
    featured: true,
    variants: [],
  },
  {
    id: "sesame-oil",
    name: "Til / Sesame Oil",
    slug: "sesame-oil",
    category: "Oils",
    image: "/images/products/sesame-oil.png",
    shortDescription:
      "Traditional sesame oil made for everyday cooking and flavour.",
    description:
      "Sesame oil for traditional kitchens. Final pack sizes and pricing will be added by the client.",
    featured: true,
    variants: [],
  },
  {
    id: "haldi-powder",
    name: "Haldi Powder",
    slug: "haldi-powder",
    category: "Masalas",
    image: "/images/products/haldi-powder.png",
    shortDescription: "Finely ground turmeric for everyday Indian cooking.",
    description: "Ground turmeric for everyday Indian cooking.",
    featured: true,
    variants: [],
  },
  {
    id: "dhaniya",
    name: "Dhaniya",
    slug: "dhaniya",
    category: "Masalas",
    image: "/images/products/dhaniya.png",
    shortDescription:
      "A kitchen essential with the familiar aroma of freshly prepared spices.",
    description: "Coriander spice for everyday cooking.",
    featured: false,
    variants: [],
  },
  {
    id: "lal-mirchi",
    name: "Lal Mirchi",
    slug: "lal-mirchi",
    category: "Masalas",
    image: "/images/products/lal-mirchi.png",
    shortDescription:
      "Red chilli powder for colour, warmth and everyday flavour.",
    description: "Red chilli powder for balanced colour and heat.",
    featured: false,
    variants: [],
  },
  {
    id: "garam-masala",
    name: "Garam Masala",
    slug: "garam-masala",
    category: "Masalas",
    image: "/images/products/garam-masala.png",
    shortDescription: "A classic spice blend for rich Indian dishes.",
    description: "A traditional spice blend for rich everyday dishes.",
    featured: false,
    variants: [],
  },
  {
    id: "kitchen-king",
    name: "Kitchen King",
    slug: "kitchen-king",
    category: "Masalas",
    image: "/images/products/kitchen-king.png",
    shortDescription:
      "A versatile masala blend for everyday vegetable dishes.",
    description: "A versatile blend for vegetable preparations.",
    featured: false,
    variants: [],
  },
  {
    id: "sabji-masala",
    name: "Sabji Masala",
    slug: "sabji-masala",
    category: "Masalas",
    image: "/images/products/sabji-masala.png",
    shortDescription: "A balanced blend created for everyday sabji.",
    description: "Everyday masala blend for home-style sabji.",
    featured: false,
    variants: [],
  },
  {
    id: "meat-masala",
    name: "Meat Masala",
    slug: "meat-masala",
    category: "Masalas",
    image: "/images/products/meat-masala.png",
    shortDescription: "A traditional spice blend for meat preparations.",
    description: "A dedicated blend for meat preparations.",
    featured: false,
    variants: [],
  },
  {
    id: "millet-atta",
    name: "Millet Grain Atta",
    slug: "millet-grain-atta",
    category: "Grains & Millets",
    image: "/images/products/millet-atta.png",
    shortDescription: "A wholesome grain-based flour for everyday kitchens.",
    description: "Millet-based flour; final grain composition to be confirmed.",
    featured: false,
    variants: [],
  },
  {
    id: "ragi",
    name: "Ragi",
    slug: "ragi",
    category: "Grains & Millets",
    image: "/images/products/ragi.png",
    shortDescription: "A traditional millet for a variety of everyday recipes.",
    description: "Ragi for traditional and everyday recipes.",
    featured: false,
    variants: [],
  },
  {
    id: "bajra",
    name: "Bajra",
    slug: "bajra",
    category: "Grains & Millets",
    image: "/images/products/bajra.png",
    shortDescription: "A traditional Indian millet for everyday cooking.",
    description: "Bajra for wholesome traditional cooking.",
    featured: false,
    variants: [],
  },
  {
    id: "jwar",
    name: "Jwar",
    slug: "jwar",
    category: "Grains & Millets",
    image: "/images/products/jwar.png",
    shortDescription: "A versatile traditional grain for the Indian kitchen.",
    description: "Jowar for everyday traditional recipes.",
    featured: false,
    variants: [],
  },
  {
    id: "wheat",
    name: "Wheat",
    slug: "wheat",
    category: "Grains & Millets",
    image: "/images/products/wheat.png",
    shortDescription: "Everyday wheat selected for the Ghar Rasoi kitchen.",
    description: "Everyday wheat for the home kitchen.",
    featured: false,
    variants: [],
  },
  {
    id: "rice",
    name: "Rice",
    slug: "rice",
    category: "Grains & Millets",
    image: "/images/products/rice.png",
    shortDescription: "A staple kitchen grain for everyday meals.",
    description: "Everyday rice for home cooking.",
    featured: false,
    variants: [],
  },
];

export const featuredProducts = products.filter((product) => product.featured);
