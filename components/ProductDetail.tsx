import Link from "next/link";
import type { Product } from "../lib/products";
import ProductGallery from "./ProductGallery";
import ProductPurchase from "./ProductPurchase";
import Reveal from "./Reveal";
import SimilarProducts from "./SimilarProducts";

export default function ProductDetail({
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: Product[];
}) {
  const images = product.image ? [product.image] : [];
  const variants = product.variants ?? [];
  const hasInfo = Boolean(
    product.description ||
      product.ingredients ||
      product.storageInstructions ||
      variants.length > 0
  );
  const steps = product.howItsMade ?? [];

  return (
    <div className="product-detail">
      <div className="product-detail-inner">
        <nav className="product-detail-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/products">{product.category}</Link>
            </li>
            <li aria-current="page">{product.name}</li>
          </ol>
        </nav>

        <section className="product-detail-main" aria-label={product.name}>
          <div className="product-detail-media">
            <ProductGallery name={product.name} images={images} />
          </div>

          <div className="product-detail-info">
            <span className="product-detail-kicker">
              <i />
              {product.category.toUpperCase()}
            </span>
            <h1>{product.name}</h1>
            {product.shortDescription && (
              <p className="product-detail-lead">{product.shortDescription}</p>
            )}
            <ProductPurchase key={product.id} product={product} />
          </div>
        </section>

        {hasInfo && (
          <Reveal>
            <section
              className="product-detail-info-sections"
              aria-label="Product details"
            >
              {product.description && (
                <div>
                  <h2>Description</h2>
                  <p>{product.description}</p>
                </div>
              )}
              {product.ingredients && (
                <div>
                  <h2>Ingredients</h2>
                  <p>{product.ingredients}</p>
                </div>
              )}
              {product.storageInstructions && (
                <div>
                  <h2>Storage</h2>
                  <p>{product.storageInstructions}</p>
                </div>
              )}
              <div>
                <h2>Available sizes</h2>
                <p>
                  {variants.length > 0
                    ? variants.map((item) => item.size).join(" · ")
                    : "Pack sizes will be listed here once the catalogue is confirmed."}
                </p>
              </div>
            </section>
          </Reveal>
        )}

        {steps.length > 0 && (
          <section
            className="product-detail-process"
            aria-labelledby="pd-process-title"
          >
            <Reveal>
              <div className="product-detail-section-head">
                <span className="product-detail-kicker">
                  <i />
                  HOW IT&apos;S MADE
                </span>
                <h2 id="pd-process-title">From seed to bottle</h2>
              </div>
            </Reveal>
            <ol className="product-detail-steps">
              {steps.map(([number, title, text], index) => (
                <li key={number}>
                  <Reveal delay={index * 80}>
                    <span className="product-detail-step-number">{number}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </section>
        )}

        <SimilarProducts products={relatedProducts} />
      </div>
    </div>
  );
}
