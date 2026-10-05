import type { Product } from "../lib/products";

type ProductSchemaProps = {
  product: Product;
};

export default function ProductSchema({
  product,
}: ProductSchemaProps) {
  const productUrl = `https://gharrasoi.com/products/${product.slug}`;

  const images = [
    product.images.front,
    product.images.back,
  ].filter((image): image is string => Boolean(image));

  const offers = product.variants.map((variant) => ({
    "@type": "Offer",
    url: productUrl,
    priceCurrency: "INR",
    price: variant.price,
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: {
      "@type": "Organization",
      name: "Ghar Rasoi Enterprises",
    },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: product.description ?? product.shortDescription,
    image: images.map(
      (image) => `https://gharrasoi.com${image}`
    ),
    url: productUrl,
    brand: {
      "@type": "Brand",
      name: "Ghar Rasoi Enterprises",
    },
    category: product.category,
    ...(product.ingredients
      ? {
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Ingredients",
              value: product.ingredients,
            },
          ],
        }
      : {}),
    offers:
      offers.length === 1
        ? offers[0]
        : {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            lowPrice: Math.min(
              ...product.variants.map((variant) => variant.price)
            ),
            highPrice: Math.max(
              ...product.variants.map((variant) => variant.price)
            ),
            offerCount: product.variants.length,
            offers,
          },
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