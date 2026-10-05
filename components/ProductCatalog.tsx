"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductMedia from "./ProductMedia";
import {
  categoryFromQuery,
  categoryQueryParam,
  products,
  type Product,
  type ProductCategory,
} from "../lib/products";

const categories: Array<"All" | ProductCategory> = [
  "All",
  "Oils",
  "Masalas",
  "Grains & Millets",
];

export default function ProductCatalog() {
  const searchParams = useSearchParams();
  const urlCategory = categoryFromQuery(searchParams.get("category"));
  const [activeCategory, setActiveCategory] = useState<"All" | ProductCategory>(urlCategory);

  useEffect(() => {
    setActiveCategory(urlCategory);
  }, [urlCategory]);

  const visibleProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="catalog-section" aria-label="Ghar Rasoi product catalog">
      <div className="catalog-inner">
        <div className="catalog-toolbar">
          <div className="catalog-category-label">
            <span className="catalog-dot" />
            BROWSE THE RANGE
            <span className="catalog-count">
              {visibleProducts.length} {visibleProducts.length === 1 ? "product" : "products"}
            </span>
          </div>

          <div className="catalog-filters" role="tablist" aria-label="Product categories">
            {categories.map((category) => (
              <Link
                key={category}
                href={
                  category === "All"
                    ? "/products"
                    : `/products?category=${categoryQueryParam[category]}`
                }
                scroll={false}
                role="tab"
                aria-selected={activeCategory === category}
                className={activeCategory === category ? "active" : ""}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        <div className="catalog-grid" role="tabpanel">
          {visibleProducts.map((product, index) => (
            <CatalogCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CatalogCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="catalog-card">
      <Link
        href={`/products/${product.slug}`}
        className="catalog-card-image"
        aria-label={`View ${product.name}`}
      >
        <span className="catalog-card-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <ProductMedia
          product={product}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 950px) 50vw, 33vw"
          className="catalog-card-photo"
        />

        <span className="catalog-card-arrow">↗</span>
      </Link>

      <div className="catalog-card-content">
        <div className="catalog-card-meta">
          <span>{product.category}</span>
          {product.featured && <span>FEATURED</span>}
        </div>

        <h2>{product.name}</h2>
        <p>{product.shortDescription}</p>

        <Link href={`/products/${product.slug}`} className="catalog-card-link">
          View product <span>↗</span>
        </Link>
      </div>
    </article>
  );
}
