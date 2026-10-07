import type { Metadata } from "next";
import { Suspense } from "react";

import ProductCatalog from "../../components/ProductCatalog";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore Ghar Rasoi Enterprises oils, masalas, grains and millets from Varanasi.",
};

export default function ProductsPage() {
  return (
    <main className="products-page">
      <section className="catalog-hero">
        <div className="catalog-hero-inner">
          <div>
            <span className="catalog-kicker">
              <i />
              GHAR RASOI ENTERPRISES
            </span>

            <h1>
              The everyday
              <br />
              <em>Ghar Rasoi.</em>
            </h1>
          </div>

          <p>
            Oils, masalas, grains and millets made for the rhythm of an
            Indian kitchen — rooted in Varanasi and prepared for everyday
            cooking.
          </p>
        </div>
      </section>

      <Suspense fallback={<section className="catalog-section" aria-hidden="true" />}>
        <ProductCatalog />
      </Suspense>
    </main>
  );
}
