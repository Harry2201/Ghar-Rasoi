"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CART_EVENT,
  getCart,
  pricedSubtotal,
  removeFromCart,
  setCartQuantity,
  type CartItem,
} from "../lib/cart";
import { formatPrice } from "../lib/product-detail";

export default function CartView() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => setItems(getCart());
    sync();
    setReady(true);
    window.addEventListener(CART_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CART_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const subtotal = pricedSubtotal(items);
  const hasUnpriced = items.some(
    (item) => typeof item.price !== "number" || !Number.isFinite(item.price)
  );

  return (
    <div className="cart-inner">
      <header className="cart-hero">
        <span className="product-detail-kicker">
          <i />
          YOUR SELECTION
        </span>
        <h1>
          Cart
          <em>.</em>
        </h1>
        <p>Items stay on this device until checkout is added.</p>
      </header>

      {!ready ? (
        <p className="cart-empty-copy">Loading your cart…</p>
      ) : items.length === 0 ? (
        <div className="cart-empty">
          <p className="cart-empty-copy">Your cart is empty.</p>
          <Link href="/products" className="product-not-found-link">
            Browse products <span aria-hidden="true">↗</span>
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <ul className="cart-list">
            {items.map((item) => {
              const linePrice = formatPrice(item.price);
              return (
                <li key={item.id} className="cart-row">
                  <Link
                    href={`/products/${item.slug}`}
                    className="cart-row-image"
                    aria-label={`View ${item.name}`}
                  >
                    <img
                      src={item.image}
                      alt=""
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="catalog-image-placeholder">Image coming soon</span>
                  </Link>

                  <div className="cart-row-copy">
                    <small>{item.variant ?? "Size to be confirmed"}</small>
                    <h2>
                      <Link href={`/products/${item.slug}`}>{item.name}</Link>
                    </h2>
                    <p>{linePrice ?? "Price on request"}</p>
                  </div>

                  <div className="cart-row-actions">
                    <div className="product-detail-qty" role="group" aria-label={`${item.name} quantity`}>
                      <button
                        type="button"
                        aria-label={`Decrease ${item.name} quantity`}
                        disabled={item.quantity <= 1}
                        onClick={() => setCartQuantity(item.id, item.quantity - 1)}
                      >
                        −
                      </button>
                      <output aria-live="polite">{item.quantity}</output>
                      <button
                        type="button"
                        aria-label={`Increase ${item.name} quantity`}
                        disabled={item.quantity >= 99}
                        onClick={() => setCartQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="cart-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <aside className="cart-summary" aria-label="Cart summary">
            <h2>Summary</h2>
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <strong>{subtotal !== null ? formatPrice(subtotal) : "Price on request"}</strong>
            </div>
            {hasUnpriced && (
              <p>Pack sizes and prices will be confirmed before payment.</p>
            )}
            <p>Online checkout is not available yet. Enquire from a product page when WhatsApp is configured.</p>
            <Link href="/products" className="product-detail-btn secondary cart-continue">
              Continue browsing
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
