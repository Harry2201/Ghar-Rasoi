import { processSteps } from "./site";
export type ProductVariant = {
  size: string;
  price: number;
};

export type ProductCategory = "Oils" | "Masalas" | "Grains & Millets";

export type ProductImages = {
  front: string | null;
  back: string | null;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  images: ProductImages;
  shortDescription: string;
  featured: boolean;
  variants: ProductVariant[];
  description?: string;
  ingredients?: string;
  storageInstructions?: string;
  howItsMade?: readonly (readonly [string, string, string])[];
};

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

  if (
    key === "grains" ||
    key === "grains-millets" ||
    key === "grains & millets"
  ) {
    return "Grains & Millets";
  }

  return "All";
}

export const products: Product[] = [
  // ─────────────────────────────────────────────
  // OILS
  // ─────────────────────────────────────────────

  {
    id: "mustard-oil",
    name: "Mustard Oil",
    slug: "mustard-oil",
    category: "Oils",

    images: {
      front: "/images/products/oil/mustard-oil-front.webp",
      back: "/images/products/oil/mustard-oil-back.webp",
    },

    shortDescription:
      "A bold and aromatic mustard oil with the distinctive flavour of traditional Indian cooking.",

    description:
      "Ghar Rasoi Mustard Oil brings the familiar aroma and robust flavour of mustard to your kitchen. Made from carefully selected mustard seeds and processed using hydraulic cold pressing, it delivers the characteristic pungency and depth that mustard oil is known for. A versatile choice for everyday Indian cooking, from tadka and curries to frying, pickles and traditional recipes.",

    ingredients: "Mustard Oil",

    storageInstructions:
      "Store in a cool, dry place away from direct sunlight. Keep the container tightly closed after use.",

    featured: true,

    variants: [
      {
        size: "1 L",
        price: 220,
      },
    ],
  },

  {
    id: "sunflower-oil",
    name: "Sunflower Oil",
    slug: "sunflower-oil",
    category: "Oils",

    images: {
      front: "/images/products/oil/sunflower-oil-front.webp",
      back: "/images/products/oil/sunflower-oil-back.webp",
    },

    shortDescription:
      "A light, mild-flavoured cooking oil designed for everyday Indian cooking, frying and sautéing.",

    description:
      "Ghar Rasoi Sunflower Oil has a mild flavour that lets the natural taste of your food shine through. Its versatile character makes it suitable for everyday cooking, including sautéing, frying, snacks and regular Indian meals.",

    ingredients: "Sunflower Oil",

    storageInstructions:
      "Store in a cool, dry place away from direct sunlight. Keep the container tightly closed after use.",

    featured: true,

    variants: [
      {
        size: "1 L",
        price: 300,
      },
    ],
  },

  {
    id: "sesame-oil",
    name: "Til / Sesame Oil",
    slug: "sesame-oil",
    category: "Oils",

    images: {
      front: "/images/products/oil/sesame-oil-front.webp",
      back: "/images/products/oil/sesame-oil-back.webp",
    },

    shortDescription:
      "A distinctive sesame oil with a naturally rich character and the familiar nutty flavour of sesame.",

    description:
      "Ghar Rasoi Sesame Oil is made from sesame seeds and brings their characteristic aroma and flavour to the kitchen. Its rich, distinctive profile makes it a versatile choice for traditional Indian recipes, sautéing, cooking and dishes where the flavour of sesame can truly stand out.",

    ingredients: "Sesame (Til) Oil",

    storageInstructions:
      "Store in a cool, dry place away from direct sunlight. Keep the container tightly closed after use.",

    featured: true,

    variants: [
      {
        size: "1 L",
        price: 480,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // MASALAS
  // ─────────────────────────────────────────────

  {
    id: "haldi-powder",
    name: "Haldi Powder",
    slug: "haldi-powder",
    category: "Masalas",

    images: {
      front: "/images/products/masalas/hladi-powder-front.webp",
      back: "/images/products/masalas/haldi-powder-back.webp",
    },

    shortDescription:
      "Fine turmeric powder with a naturally warm colour and earthy flavour for everyday Indian cooking.",

    description:
      "Ghar Rasoi Haldi Powder brings the familiar colour, aroma and earthy character of turmeric to everyday meals. Made from turmeric, it is a versatile kitchen essential for dals, sabzis, curries, marinades and traditional Indian recipes.",

    ingredients: "Turmeric (Haldi) Powder",

    storageInstructions:
      "Store in a cool, dry place away from moisture and direct sunlight. Keep the pack tightly closed after opening.",

    featured: true,

    variants: [
      {
        size: "100 g",
        price: 40,
      },
    ],
  },

  {
    id: "dhaniya",
    name: "Dhaniya Powder",
    slug: "dhaniya",
    category: "Masalas",

    images: {
      front: "/images/products/masalas/dhaniya-powder-front.webp",
      back: "/images/products/masalas/dhaniya-powder-back.webp",
    },

    shortDescription:
      "Aromatic coriander powder with a fresh, earthy flavour for everyday Indian dishes.",

    description:
      "Ghar Rasoi Dhaniya Powder is made from coriander seeds and brings a warm, fresh and earthy character to your cooking. A versatile everyday spice for curries, sabzis, dals, gravies and marinades.",

    ingredients: "Coriander Seeds",

    storageInstructions:
      "Store in a cool, dry place away from moisture and direct sunlight. Keep the pack tightly closed after opening.",

    featured: false,

    variants: [
      {
        size: "100 g",
        price: 35,
      },
    ],
  },

  {
    id: "lal-mirchi",
    name: "Lal Mirchi Powder",
    slug: "lal-mirchi",
    category: "Masalas",

    images: {
      front: "/images/products/masalas/lal-mirch-powder-front.webp",
      back: "/images/products/masalas/lal-mirch-powder-back.webp",
    },

    shortDescription:
      "Fine red chilli powder that brings colour, aroma and a distinctive spicy character to your dishes.",

    description:
      "Ghar Rasoi Lal Mirchi Powder is made from dried red chillies, finely ground for convenient everyday use. It adds vibrant colour and a characteristic chilli flavour to curries, sabzis, dals, marinades and a wide range of Indian recipes.",

    ingredients: "Dried Red Chillies (Lal Mirch)",

    storageInstructions:
      "Store in a cool, dry place away from moisture and direct sunlight. Keep the pack tightly closed after opening.",

    featured: false,

    variants: [
      {
        size: "100 g",
        price: 100,
      },
    ],
  },

  {
    id: "garam-masala",
    name: "Garam Masala",
    slug: "garam-masala",
    category: "Masalas",

    images: {
      front: "/images/products/masalas/garam-masala-front.webp",
      back: "/images/products/masalas/garam-masala-back.webp",
    },

    shortDescription:
      "An aromatic blend of traditional spices created to add warmth and depth to everyday Indian dishes.",

    description:
      "Ghar Rasoi Garam Masala brings together the warmth and aroma of traditional Indian spices in a convenient blend. Add it towards the end of cooking to give curries, sabzis, dals, gravies and other dishes a richer aromatic finish.",

    ingredients: "Blend of Spices",

    storageInstructions:
      "Store in a cool, dry place away from moisture and direct sunlight. Keep the pack tightly closed after opening.",

    featured: false,

    variants: [
      {
        size: "100 g",
        price: 80,
      },
    ],
  },

  {
    id: "kitchen-king",
    name: "Kitchen King Masala",
    slug: "kitchen-king",
    category: "Masalas",

    images: {
      front: "/images/products/masalas/kitchen-king-front.webp",
      back: "/images/products/masalas/kitchen-king-back.webp",
    },

    shortDescription:
      "A versatile masala blend for vegetables, paneer and everyday Indian gravies.",

    description:
      "Ghar Rasoi Kitchen King Masala is a versatile blend created for the flavours of everyday Indian cooking. Its aromatic spice profile works beautifully with vegetable dishes, paneer, gravies and curries, making it an easy way to add depth and character to your meals.",

    ingredients: "Blend of Spices",

    storageInstructions:
      "Store in a cool, dry place away from moisture and direct sunlight. Keep the pack tightly closed after opening.",

    featured: false,

    variants: [
      {
        size: "100 g",
        price: 95,
      },
    ],
  },

  {
    id: "sabji-masala",
    name: "Sabji Masala",
    slug: "sabji-masala",
    category: "Masalas",

    images: {
      front: "/images/products/masalas/sabji-masala-front.webp",
      back: "/images/products/masalas/sabji-masala-back.webp",
    },

    shortDescription:
      "A balanced spice blend made to bring aroma and flavour to everyday vegetable dishes.",

    description:
      "Ghar Rasoi Sabji Masala is crafted for the everyday Indian kitchen. Its blend of aromatic spices complements vegetables, stir-fries, curries and gravies, helping bring a familiar homemade character to your sabzis.",

    ingredients: "Blend of Spices",

    storageInstructions:
      "Store in a cool, dry place away from moisture and direct sunlight. Keep the pack tightly closed after opening.",

    featured: false,

    variants: [
      {
        size: "100 g",
        price: 75,
      },
    ],
  },

  {
    id: "meat-masala",
    name: "Meat Masala",
    slug: "meat-masala",
    category: "Masalas",

    images: {
      front: "/images/products/masalas/meat-masala-front.webp",
      back: "/images/products/masalas/meat-masala-back.webp",
    },

    shortDescription:
      "A rich and aromatic spice blend created to complement meat dishes, curries, roasts and gravies.",

    description:
      "Ghar Rasoi Meat Masala combines aromatic spices to create a rich and warming flavour profile for non-vegetarian cooking. Use it in meat curries, gravies, roasts and marinades to bring depth, aroma and a fuller spice character to the dish.",

    ingredients: "Blend of Spices",

    storageInstructions:
      "Store in a cool, dry place away from moisture and direct sunlight. Keep the pack tightly closed after opening.",

    featured: false,

    variants: [
      {
        size: "100 g",
        price: 95,
      },
    ],
  },

  // ─────────────────────────────────────────────
  // GRAINS & MILLETS
  // ─────────────────────────────────────────────

  {
    id: "multigrain-atta",
    name: "Multigrain Atta",
    slug: "multigrain-atta",
    category: "Grains & Millets",

    images: {
      front: "/images/products/aata/multi-grain-aata-front.webp",
      back: "/images/products/aata/multi-grain-aata-back.webp",
    },

    shortDescription:
      "A wholesome blend of seven grains crafted for flavourful, everyday rotis and Indian breads.",

    description:
      "Ghar Rasoi Multigrain Atta brings together a carefully selected blend of grains for a distinctive everyday flour. With the familiar goodness of wheat combined with millet and other grains, it creates rotis and Indian breads with a naturally hearty taste and texture.",

    ingredients: "Blend of Grains",

    storageInstructions:
      "Store in a cool, dry place away from moisture and direct sunlight. Keep the pack tightly closed after opening.",

    featured: false,

    variants: [
      {
        size: "5 kg",
        price: 299,
      },
    ],
  },

  {
    id: "ragi-atta",
    name: "Ragi Atta",
    slug: "ragi-atta",
    category: "Grains & Millets",

    images: {
      front: "/images/products/aata/ragi-aata-front.webp",
      back: "/images/products/aata/ragi-aata-back.webp",
    },

    shortDescription:
      "Finely milled ragi flour with the earthy character of finger millet for traditional and everyday recipes.",

    description:
      "Ghar Rasoi Ragi Atta is made from ragi, also known as finger millet. Its naturally earthy flavour and distinctive character make it a versatile choice for rotis, dosas, porridges, cheelas and other Indian preparations.",

    ingredients: "Ragi (Finger Millet)",

    storageInstructions:
      "Store in a cool, dry place away from moisture and direct sunlight. Keep the pack tightly closed after opening.",

    featured: false,

    variants: [
      {
        size: "5 kg",
        price: 349,
      },
    ],
  },

  {
    id: "bajra-atta",
    name: "Bajra Atta",
    slug: "bajra-atta",
    category: "Grains & Millets",

    images: {
      front: "/images/products/aata/bajara-aata-front.webp",
      back: "/images/products/aata/bajara-aata-back.webp",
    },

    shortDescription:
      "Traditionally inspired pearl millet flour with a hearty flavour for rotis and regional Indian recipes.",

    description:
      "Ghar Rasoi Bajra Atta brings the distinctive earthy taste of pearl millet to your kitchen. Its hearty character makes it especially suited to traditional bajra rotis, parathas and other Indian preparations.",

    ingredients: "Bajra (Pearl Millet)",

    storageInstructions:
      "Store in a cool, dry place away from moisture and direct sunlight. Keep the pack tightly closed after opening.",

    featured: false,

    variants: [
      {
        size: "5 kg",
        price: 400,
      },
    ],
  },

  {
    id: "jowar-atta",
    name: "Jowar Atta",
    slug: "jowar-atta",
    category: "Grains & Millets",

    images: {
      front: "/images/products/aata/jowar-aata-front.webp",
      back: "/images/products/aata/jowar-aata-back.webp",
    },

    shortDescription:
      "A distinctive sorghum flour with a mild, earthy character for traditional Indian breads and recipes.",

    description:
      "Ghar Rasoi Jowar Atta is made from jowar, also known as sorghum. With its characteristic flavour and texture, it is well suited to jowar rotis, bhakri and a variety of traditional Indian preparations.",

    ingredients: "Jowar (Sorghum)",

    storageInstructions:
      "Store in a cool, dry place away from moisture and direct sunlight. Keep the pack tightly closed after opening.",

    featured: false,

    variants: [
      {
        size: "5 kg",
        price: 399,
      },
    ],
  },

  {
    id: "wheat-atta",
    name: "Wheat Atta",
    slug: "wheat-atta",
    category: "Grains & Millets",

    images: {
      front: "/images/products/aata/wheat-aata-front.webp",
      back: "/images/products/aata/wheat-aata-back.webp",
    },

    shortDescription:
      "Everyday wheat atta for soft, flavourful rotis and a wide range of Indian breads.",

    description:
      "Ghar Rasoi Wheat Atta is made for the everyday Indian kitchen. Its familiar wheat character makes it suitable for rotis, parathas, pooris and other home-style preparations.",

    ingredients: "Wheat",

    storageInstructions:
      "Store in a cool, dry place away from moisture and direct sunlight. Keep the pack tightly closed after opening.",

    featured: false,

    variants: [
      {
        size: "5 kg",
        price: 280,
      },
    ],
  },

  {
    id: "rice-atta",
    name: "Rice Atta",
    slug: "rice-atta",
    category: "Grains & Millets",

    images: {
      front: null,
      back: null,
    },

    shortDescription:
      "Fine rice flour with a light texture for traditional Indian preparations and everyday recipes.",

    description:
      "Ghar Rasoi Rice Atta is a finely milled rice flour with a smooth, versatile character. It can be used across a variety of Indian preparations including dosas, idlis, porridges, rice-based snacks and other traditional recipes.",

    ingredients: "Rice",

    storageInstructions:
      "Store in a cool, dry place away from moisture and direct sunlight. Keep the pack tightly closed after opening.",

    featured: false,

    variants: [
      {
        size: "5 kg",
        price: 350,
      },
    ],
  },
];

export const featuredProducts = products.filter(
  (product) => product.featured
);