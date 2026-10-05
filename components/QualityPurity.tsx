"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const qualityPoints = [
  {
    number: "01",
    title: "Selected Ingredients",
    text: "We begin with carefully selected raw materials chosen for consistent quality and everyday use.",
  },
  {
    number: "02",
    title: "Careful Processing",
    text: "Our ingredients are handled through a controlled manufacturing process, from preparation to processing.",
  },
  {
    number: "03",
    title: "Quality Checks",
    text: "Attention to consistency continues through filtration, storage and final packaging.",
  },
];

export default function QualityPurity() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("quality-visible");
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="quality-section"
      id="quality"
    >
      <div className="quality-layout">

        {/* LEFT — BRAND STATEMENT */}
        <div className="quality-copy">

          <span className="quality-kicker">
            QUALITY &amp; PURITY
          </span>

          <h2>
            What goes into
            <br />
            <em>every bottle.</em>
          </h2>

          <p>
            We keep our approach simple — carefully selected
            ingredients, thoughtful processing and attention to
            quality from production to packaging.
          </p>

          <div className="quality-signature">
            <span>शुद्धता की एक पहचान</span>
            <i />
            <small>GHAR RASOI ENTERPRISES</small>
          </div>

        </div>

        {/* CENTER — PRODUCT */}
        <div className="quality-visual">

          <div className="quality-circle circle-one" />
          <div className="quality-circle circle-two" />

          <div className="quality-product">

            <Image
              src="/images/products/mustard-oil.png"
              alt="Ghar Rasoi Mustard Oil"
              fill
              sizes="(max-width: 900px) 70vw, 35vw"
              priority={false}
            />

          </div>

          <div className="quality-label">
            <strong>GHAR RASOI</strong>
            <span>QUALITY IN EVERY BOTTLE</span>
          </div>

        </div>

        {/* RIGHT — QUALITY SYSTEM */}
        <div className="quality-list">

          <div className="quality-list-head">
            <span>OUR STANDARD</span>
            <span>03 PRINCIPLES</span>
          </div>

          {qualityPoints.map((point) => (
            <article
              className="quality-item"
              key={point.number}
            >

              <span className="quality-number">
                {point.number}
              </span>

              <div className="quality-item-body">
                <h3>{point.title}</h3>

                <p>{point.text}</p>
              </div>

              <span className="quality-item-arrow">
                ↗
              </span>

            </article>
          ))}

        </div>

      </div>

      <div className="quality-footer">

        <span>FROM SELECTION</span>

        <i />

        <span>TO PACKAGING</span>

        <strong>GR&amp;E</strong>

      </div>

    </section>
  );
}