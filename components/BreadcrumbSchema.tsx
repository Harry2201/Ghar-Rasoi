import type { Product } from "../lib/products";

type BreadcrumbSchemaProps = {
  product: Product;
};

export default function BreadcrumbSchema({
  product,
}: BreadcrumbSchemaProps) {
  const productUrl = `https://gharrasoi.in/products/${product.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://gharrasoi.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://gharrasoi.in/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.category,
        item: `https://gharrasoi.in/products?category=${encodeURIComponent(
          product.category === "Grains & Millets"
            ? "grains"
            : product.category.toLowerCase()
        )}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.name,
        item: productUrl,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}