"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { featuredProducts } from "../lib/products";

export default function FeaturedProducts() {
  const [active, setActive] = useState(0);

  const product = featuredProducts[active];

  const next = () => {
    setActive((current) => (current + 1) % featuredProducts.length);
  };

  const previous = () => {
    setActive(
      (current) =>
        (current - 1 + featuredProducts.length) % featuredProducts.length
    );
  };

  /* Keep the same circular depth-position system used by Why Ghar Rasoi. */
  const getRelativePosition = (index: number) => {
    let position = index - active;

    if (position > 2) position -= featuredProducts.length;
    if (position < -2) position += featuredProducts.length;

    return position;
  };

  /* Same automatic movement rhythm as the Why Ghar Rasoi carousel. */
  useEffect(() => {
    const timer = setInterval(next, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="featured-products" id="products">
      <div className="featured-products-inner">
        <div className="featured-products-copy">
          <span className="featured-kicker">
            <i />
            OUR PRODUCTS
          </span>

          <h2>
            Made for the
            <br />
            <em>everyday kitchen.</em>
          </h2>

          <p>
            From our oils and masalas to grains and millets, discover the
            products that make up the Ghar Rasoi kitchen.
          </p>

          <Link href="/products" className="explore-products-button">
            <span>Explore all products</span>
            <i>↗</i>
          </Link>
        </div>

        <div className="featured-products-showcase">
          <div className="featured-depth-stage">
            {featuredProducts.map((item, index) => {
              const position = getRelativePosition(index);

              return (
                <article
                  key={item.id}
                  className={`featured-product-card ${
                    position === 0 ? "is-active" : ""
                  }`}
                  data-position={position}
                  aria-hidden={position !== 0}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="featured-card-overlay" />
                  <div className="featured-card-frost" />

                  <div className="featured-card-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{item.category}</span>
                  </div>

                  {position === 0 && (
                    <div className="featured-card-bottom">
                      <span>GHAR RASOI</span>
                      <h3>{item.name}</h3>
                      <p>{item.shortDescription}</p>
                      <Link href={`/products/${item.slug}`}>
                        View product <span>↗</span>
                      </Link>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="featured-product-controls">
            <button type="button" onClick={previous} aria-label="Previous product">
              ←
            </button>

            <div className="featured-product-dots">
              {featuredProducts.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={index === active ? "active" : ""}
                  onClick={() => setActive(index)}
                  aria-label={`Show ${item.name}`}
                  aria-current={index === active ? "true" : undefined}
                />
              ))}
            </div>

            <button type="button" onClick={next} aria-label="Next product">
              →
            </button>
          </div>

          <div className="featured-product-counter">
            <span>{String(active + 1).padStart(2, "0")}</span>
            <i>/</i>
            <span>{String(featuredProducts.length).padStart(2, "0")}</span>
            <strong>{product.category}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
