"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { addToCart } from "../lib/cart";
import {
  buildWhatsAppUrl,
  formatPrice,
  getWhatsAppNumber,
} from "../lib/product-detail";
import type { Product } from "../lib/products";

export default function ProductPurchase({ product }: { product: Product }) {
  const router = useRouter();
  const variants = product.variants ?? [];
  const [variantIndex, setVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [notice, setNotice] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const variant = variants[variantIndex] ?? null;
  const variantName = variant?.size ?? null;
  const price = formatPrice(variant?.price);
  const waNumber = getWhatsAppNumber();

  const commit = () =>
    addToCart({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      variant: variantName,
      quantity,
      price: typeof variant?.price === "number" ? variant.price : null,
      image: product.image,
    });

  const handleAdd = () => {
    if (added) return; // prevent accidental double clicks
    commit();
    setAdded(true);
    setNotice(`${product.name} added to your cart.`);
    timer.current = setTimeout(() => {
      setAdded(false);
      setNotice("");
    }, 1800);
  };

  const handleBuyNow = () => {
    commit();
    router.push("/cart");
  };

  return (
    <div className="product-detail-purchase">
      <div className="product-detail-price" aria-live="polite">
        {price ? (
          <strong>{price}</strong>
        ) : (
          <span>Price on request</span>
        )}
      </div>

      {variants.length > 0 && (
        <fieldset className="product-detail-field">
          <legend>Size</legend>
          <div className="product-detail-variants" role="radiogroup" aria-label="Select size">
            {variants.map((item, index) => {
              const itemPrice = formatPrice(item.price);
              return (
                <button
                  key={item.size}
                  type="button"
                  role="radio"
                  aria-checked={index === variantIndex}
                  className={index === variantIndex ? "active" : ""}
                  onClick={() => setVariantIndex(index)}
                >
                  <span>{item.size}</span>
                  {itemPrice && <small>{itemPrice}</small>}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      <div className="product-detail-field">
        <span className="product-detail-label" id="pd-qty-label">Quantity</span>
        <div className="product-detail-qty" role="group" aria-labelledby="pd-qty-label">
          <button
            type="button"
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            −
          </button>
          <output aria-live="polite" aria-label={`Quantity ${quantity}`}>{quantity}</output>
          <button
            type="button"
            aria-label="Increase quantity"
            disabled={quantity >= 99}
            onClick={() => setQuantity((q) => Math.min(99, q + 1))}
          >
            +
          </button>
        </div>
      </div>

      <div className="product-detail-cta">
        <button
          type="button"
          className="product-detail-btn primary"
          onClick={handleAdd}
          disabled={added}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
        <button type="button" className="product-detail-btn secondary" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>

      {waNumber ? (
        <a
          className="product-detail-whatsapp"
          href={buildWhatsAppUrl(waNumber, product.name, variantName, quantity)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Enquire on WhatsApp <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <p className="product-detail-whatsapp disabled">
          WhatsApp enquiry will be available once the business number is added.
        </p>
      )}

      <p className="product-detail-notice" role="status">{notice}</p>
    </div>
  );
}
