"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./WholesaleBulkOrder.module.css";

const buyerTypes = [
  "RETAILERS",
  "GROCERY STORES",
  "RESTAURANTS",
  "HOTELS",
  "CATERERS",
  "DISTRIBUTORS",
];

export default function WholesaleBulkOrder() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add(styles.visible);
          observer.unobserve(section);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="wholesale"
      aria-labelledby="wholesale-title"
    >
      {/* Decorative background typography */}
      <div
        className={styles.backgroundWord}
        aria-hidden="true"
      >
        BULK
      </div>

      <div className={styles.container}>

        {/* ==================================================
            TOP LABEL
        ================================================== */}

        <div className={styles.topLine}>
          <span>FOR BUSINESSES &amp; BULK BUYERS</span>
          <span>08</span>
        </div>


        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <div className={styles.main}>

          {/* LEFT CONTENT */}

          <div className={styles.copy}>

            <div className={styles.eyebrow}>
              <i />
              WHOLESALE PARTNERSHIPS
            </div>

            <h2 id="wholesale-title">
              More than
              <br />
              <em>one kitchen?</em>
            </h2>

            <p className={styles.lead}>
              Whether you are stocking a store, running a
              restaurant or buying for your business, Ghar
              Rasoi is open to wholesale and bulk enquiries.
            </p>

            <p className={styles.body}>
              Tell us what you need, how much you need, and
              where you are located. Our team can discuss
              product availability, quantities and wholesale
              requirements with you.
            </p>

            <a
  href="https://wa.me/919118193711?text=Hello%20Ghar%20Rasoi%20Enterprises,%20I%20am%20interested%20in%20a%20wholesale%20%2F%20bulk%20order.%20Please%20share%20the%20available%20products,%20pricing,%20minimum%20order%20quantity,%20and%20other%20details.%20Thank%20you."
  target="_blank"
  rel="noopener noreferrer"
  className={styles.cta}
  aria-label="Discuss a wholesale or bulk order on WhatsApp"
>
  <span>DISCUSS A BULK ORDER</span>

  <span className={styles.arrow}>
    →
  </span>
</a>

          </div>


          {/* ==================================================
              PRODUCT VISUAL
          ================================================== */}

          <div className={styles.visual}>

            <div className={styles.visualGlow} />

            <div className={styles.productCircle}>
              <div className={styles.productCircleInner}>
                <Image
                  src="/images/products/mustard-oil.png"
                  alt="Ghar Rasoi Mustard Oil"
                  fill
                  sizes="(max-width: 760px) 65vw, 32vw"
                  className={styles.productImage}
                />
              </div>
            </div>

            <div className={styles.visualLabel}>
              <span>GHAR RASOI</span>
              <small>MUSTARD OIL</small>
            </div>

            <div className={styles.visualNumber}>
              01
            </div>

          </div>

        </div>


        {/* ==================================================
            BUYER TYPES
        ================================================== */}

        <div className={styles.buyerStrip}>

          <div className={styles.buyerIntro}>
            <span>WE WORK WITH</span>
          </div>

          <div className={styles.buyers}>
            {buyerTypes.map((type, index) => (
              <div
                className={styles.buyer}
                key={type}
              >
                <span className={styles.buyerIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{type}</span>
              </div>
            ))}
          </div>

        </div>


        {/* ==================================================
            BOTTOM NOTE
        ================================================== */}

        <div className={styles.bottomLine}>

          <span>
            WHOLESALE · BULK SUPPLY · BUSINESS ENQUIRIES
          </span>

          <span>
            VARANASI · UTTAR PRADESH
          </span>

        </div>

      </div>
    </section>
  );
}