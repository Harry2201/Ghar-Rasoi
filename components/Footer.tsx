"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Our Story", href: "#about" },
  { label: "Wholesale & Bulk", href: "#wholesale" },
];

const productLinks = [
  { label: "Oils", href: "/products?category=oils" },
  { label: "Masalas", href: "/products?category=masalas" },
  { label: "Grains & Millets", href: "/products?category=grains" },
];

const businessLinks = [
  { label: "Wholesale & Bulk", href: "#wholesale" },
  {
    label: "WhatsApp Enquiry",
    href: "https://wa.me/919118193711",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
  }

  return (
    <footer className={styles.footer}>
      {/* =================================================
          MAIN FOOTER CONTENT
      ================================================= */}

      <div className={styles.main}>
        {/* BRAND / BUSINESS */}

        <div className={styles.brandColumn}>
          <a
            href="/"
            className={styles.logoLink}
            aria-label="Ghar Rasoi Enterprises home"
          >
            <Image
              src="/images/ghar-rasoi-logo.png"
              alt="Ghar Rasoi Enterprises"
              width={125}
              height={125}
              className={styles.logo}
            />
          </a>

          <div className={styles.registration}>
            <div>
              <strong>FSSAI Registration No.:</strong>
              <span>22726415000133</span>
            </div>

            <div>
              <strong>Udyam Registration No.:</strong>
              <span>UDYAM-UP-75-0176652</span>
            </div>
          </div>

          <div className={styles.address}>
            <strong>Ghar Rasoi Enterprises</strong>
            <span>Varanasi, Uttar Pradesh</span>
            <span>India</span>
          </div>
        </div>

        {/* QUICK LINKS */}

        <div className={styles.column}>
          <h3>QUICK LINKS</h3>

          <nav aria-label="Quick links">
            {quickLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* PRODUCTS */}

        <div className={styles.column}>
          <h3>PRODUCTS</h3>

          <nav aria-label="Product categories">
            {productLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* BUSINESS */}

        <div className={styles.column}>
          <h3>BUSINESS</h3>

          <nav aria-label="Business links">
            {businessLinks.map((link) => {
              const isExternal = link.href.startsWith("https://");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* NEWSLETTER */}

        <div className={styles.newsletter}>
          <h3>NEWSLETTER</h3>

          {!submitted ? (
            <>
              <p>
                Sign up to receive updates from
                <br />
                Ghar Rasoi Enterprises.
              </p>

              <form
                className={styles.newsletterForm}
                onSubmit={handleSubscribe}
              >
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="E-mail"
                  aria-label="Email address"
                  autoComplete="email"
                  required
                />

                <button type="submit">SUBSCRIBE</button>
              </form>
            </>
          ) : (
            <div className={styles.success}>
              <span aria-hidden="true">✓</span>

              <p>
                Thank you for your interest
                <br />
                in Ghar Rasoi.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* =================================================
          FINAL LEGAL / BRAND BAR

          IMPORTANT:
          This is OUTSIDE .main.
      ================================================= */}

      <div className={styles.bottomBar}>
        <span>© 2026 GHAR RASOI ENTERPRISES</span>

        <span className={styles.hindi}>शुद्धता की एक पहचान</span>

        <span>VARANASI · UTTAR PRADESH</span>
      </div>
    </footer>
  );
}
