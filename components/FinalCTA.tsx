"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
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
      { threshold: 0.18 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="final-cta-title"
    >
      <div className={styles.backgroundText} aria-hidden="true">
        GHAR
      </div>

      <div className={styles.topLine}>
        <span>THE GHAR RASOI PROMISE</span>
        <span>09</span>
      </div>

      <div className={styles.main}>
        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <i />
            FROM OUR FAMILY TO YOUR KITCHEN
          </div>

          <h2 id="final-cta-title">
            Take a little
            <br />
            of what we
            <br />
            <em>believe in.</em>
          </h2>

          <p className={styles.lead}>
            Bring the kitchen closer to where it began —
            with products rooted in family, farming and
            the simple belief that what goes into your food matters.
          </p>

          <a href="/products" className={styles.cta}>
            <span>EXPLORE THE COLLECTION</span>
            <span className={styles.arrow}>↗</span>
          </a>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualGlow} />

          <div className={styles.productFrame}>
            <div className={styles.productImageWrap}>
              <Image
                src="/images/products/mustard-oil.png"
                alt="Ghar Rasoi Mustard Oil"
                fill
                sizes="(max-width: 760px) 72vw, 34vw"
                className={styles.productImage}
              />
            </div>
          </div>

          <div className={styles.stamp}>
            <span>शुद्धता</span>
            <small>की एक पहचान</small>
          </div>

          <div className={styles.visualCaption}>
            <span>GHAR RASOI</span>
            <small>MUSTARD OIL · VARANASI</small>
          </div>
        </div>
      </div>

      <div className={styles.trustLine}>
        <div className={styles.trustItem}>
          <span className={styles.trustMark}>01</span>
          <div>
            <strong>FSSAI REGISTERED</strong>
            <small>Food business registration</small>
          </div>
        </div>

        <div className={styles.trustItem}>
          <span className={styles.trustMark}>02</span>
          <div>
            <strong>UDYAM REGISTERED</strong>
            <small>Registered enterprise</small>
          </div>
        </div>

        <div className={styles.trustItem}>
          <span className={styles.trustMark}>03</span>
          <div>
            <strong>VARANASI, INDIA</strong>
            <small>Rooted in Uttar Pradesh</small>
          </div>
        </div>
      </div>
    </section>
  );
}