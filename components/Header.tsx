"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CART_EVENT, cartQuantity, getCart } from "../lib/cart";

const links = [
  ["Home", "/"],
  ["Products", "/products"],
  ["Our Story", "/#story"],
  ["Wholesale / Bulk", "/#wholesale"],
  ["Cart", "/cart"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const sync = () => setCount(cartQuantity(getCart()));
    sync();
    window.addEventListener(CART_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CART_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className={`site-header ${open ? "open" : ""}`} id="top">
      <Link
        className="brand"
        href="/"
        aria-label="Ghar Rasoi Enterprises home"
        onClick={closeMenu}
      >
        <Image
          src="/images/ghar-rasoi-logo.png"
          alt=""
          width={50}
          height={50}
          priority
          className="brand-logo"
        />

        <span className="brand-name">
          <strong>GHAR RASOI</strong>
          <small>ENTERPRISES</small>
        </span>
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <Link key={href} href={href} onClick={closeMenu}>
            {label}
            {label === "Cart" && count > 0 ? (
              <span className="header-cart-count" aria-label={`${count} items in cart`}>
                {count}
              </span>
            ) : null}
          </Link>
        ))}
      </nav>

      <Link className="header-cta" href="/#wholesale" onClick={closeMenu}>
        <span>Shop / Enquire</span>
        <span className="header-cta-arrow">↗</span>
      </Link>

      <button
        type="button"
        className={`menu-button ${open ? "active" : ""}`}
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      >
        <span />
        <span />
      </button>

      <div
        id="mobile-navigation"
        className="mobile-navigation"
        hidden={!open}
      >
        {links.map(([label, href]) => (
          <Link key={href} href={href} onClick={closeMenu}>
            {label}
            {label === "Cart" && count > 0 ? (
              <span className="header-cart-count" aria-label={`${count} items in cart`}>
                {count}
              </span>
            ) : null}
          </Link>
        ))}

        <Link href="/#wholesale" className="mobile-shop-link" onClick={closeMenu}>
          Shop / Enquire
          <span>↗</span>
        </Link>
      </div>
    </header>
  );
}
