"use client";

import Link from "next/link";
import type { Product } from "../lib/products";
import Reveal from "./Reveal";

export default function SimilarProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;
  return (
    <section className="product-detail-similar" aria-labelledby="pd-similar-title">
      <Reveal>
        <div className="product-detail-section-head">
          <span className="product-detail-kicker"><i />EXPLORE MORE</span>
          <h2 id="pd-similar-title">You may also like</h2>
        </div>
      </Reveal>
      <ul className="product-detail-similar-grid">
        {products.map((item, index) => (
          <li key={item.id}>
            <Reveal delay={index * 70}>
              <Link href={`/products/${item.slug}`} className="product-detail-similar-card">
                <span className="product-detail-similar-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    onError={(event) => { event.currentTarget.style.display = "none"; }}
                  />
                </span>
                <small>{item.category}</small>
                <strong>{item.name}</strong>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
