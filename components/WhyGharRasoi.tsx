"use client";

import { useEffect, useRef } from "react";

const philosophyPoints = [
  {
    number: "01",
    title: "ROOTED IN VARANASI",
    description:
      "Born in Varanasi and made with the everyday Indian kitchen in mind.",
  },
  {
    number: "02",
    title: "MADE IN OUR PROCESS",
    description:
      "Our mustard oil follows a simple journey from seed to pressing, filtration and bottling.",
  },
  {
    number: "03",
    title: "NOTHING UNNECESSARY",
    description:
      "For our mustard oil, nothing is added to the oil during production.",
  },
  {
    number: "04",
    title: "EVERYDAY, NOT OCCASIONAL",
    description:
      "Products designed around the ingredients people actually reach for in their kitchens.",
  },
  {
    number: "05",
    title: "A BRAND YOU CAN TALK TO",
    description:
      "We are starting close to home — listening, learning and growing one relationship at a time.",
  },
  {
    number: "06",
    title: "TRADITION, WITHOUT STANDING STILL",
    description:
      "Familiar Indian ingredients, made with modern processing and a contemporary approach.",
  },
];

export default function WhyGharRasoi() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(
      ".philosophy-reveal"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="philosophy-section"
      aria-labelledby="philosophy-title"
    >
      <div className="philosophy-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="philosophy-header philosophy-reveal">

          <div className="philosophy-kicker">
            <span className="philosophy-kicker-dot" />
            OUR PHILOSOPHY
          </div>

          <span className="philosophy-origin">
            घर से&nbsp; • &nbsp;रसोई तक
          </span>

        </header>


        {/* =================================================
            INTRO
        ================================================= */}

        <div className="philosophy-intro">

          <div className="philosophy-heading philosophy-reveal">

            <span className="philosophy-eyebrow">
              THE IDEA BEHIND GHAR RASOI
            </span>

            <h2 id="philosophy-title">
              Made for the way
              <br />
              we <em>cook at home.</em>
            </h2>

            {/* Animated accent */}
            <span
              className="philosophy-heading-line"
              aria-hidden="true"
            />

            {/* Intro copy moved underneath heading */}
            <div className="philosophy-description philosophy-reveal">

              <p>
                Ghar Rasoi began with a simple thought —
                the ingredients we use every day deserve
                the same care we'd give to the food we
                make with them.
              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            SIX PRINCIPLES
        ================================================= */}

        <div className="philosophy-grid">

          {philosophyPoints.map((point, index) => (
            <article
              key={point.number}
              className="philosophy-card philosophy-reveal"
              style={{
                transitionDelay: `${index * 90}ms`,
              }}
            >

              <div className="philosophy-card-top">

                <span className="philosophy-number">
                  {point.number}
                </span>

                <span
                  className="philosophy-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>

              </div>

              <div className="philosophy-card-content">

                <h3>
                  {point.title}
                </h3>

                <p>
                  {point.description}
                </p>

              </div>

            </article>
          ))}

        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="philosophy-footer philosophy-reveal">

          <span className="philosophy-footer-line" />

          <div className="philosophy-footer-content">

            <span>
              GHAR RASOI
            </span>

            <span>
              VARANASI · INDIA
            </span>

            <span className="philosophy-footer-hindi">
              शुद्धता की एक पहचान
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}