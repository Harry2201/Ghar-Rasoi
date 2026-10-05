import ProductSchema from "../../../components/ProductSchema";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "../../../components/ProductDetail";
import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import {
  getProductBySlug,
  getRelatedProducts,
} from "../../../lib/product-detail";
import { products } from "../../../lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <main className="product-detail-page">
      <ProductSchema product={product} />
      <BreadcrumbSchema product={product} />
      <ProductDetail
        product={product}
        relatedProducts={getRelatedProducts(product)}
      />
    </main>
  );
}
