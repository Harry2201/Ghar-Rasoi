"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./StoryAbout.module.css";

export default function StoryAbout() {
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
      className={styles.story}
      id="story"
      aria-labelledby="story-title"
    >
      <div className={styles.backgroundMark} aria-hidden="true">
        GR
      </div>

      {/* TOP BAR */}
      <div className={styles.topLine}>
        <span>OUR STORY</span>
        <span>07</span>
      </div>

      {/* =====================================================
          MAIN STORY
      ===================================================== */}

      <div className={styles.storyGrid}>

        {/* ================= LEFT STORY ================= */}

        <div className={styles.copy}>

          <div className={styles.eyebrow}>
            <span />
            ROOTED IN FAMILY
          </div>

          <h2 id="story-title">
            It started with
            <br />
            <em>what we grew</em>
            <br />
            at home.
          </h2>

          <p className={styles.lead}>
            Ghar Rasoi Enterprises began in{" "}
            <strong>2026</strong> with a simple family idea —
            to bring the purity and taste we experienced in
            our own kitchen to more households.
          </p>

          <p>
            Coming from a farming family, we have always been
            connected to the food we grow. We still actively
            cultivate mustard, and for years, we used the oil
            made from our own mustard at home.
          </p>

          <p className={styles.highlight}>
            The taste was different. It felt familiar. And we
            knew where it came from.
          </p>

          <p>
            When we looked at the market around us, we felt
            that this connection with purity was becoming
            harder to find.
          </p>

          <p>
            That became the beginning of Ghar Rasoi.
          </p>

          <div className={styles.signature}>
            <span>शुद्धता की एक पहचान</span>
            <i />
            <small>GHAR RASOI ENTERPRISES</small>
          </div>

        </div>


        {/* ================= VISUAL STORY ================= */}

        <div className={styles.visual}>

          {/* MUSTARD FIELD — PRIMARY CARD */}

          <div className={styles.mustardCard}>

            <div className={styles.mustardImage}>
              <Image
                src="/images/story/mustard-field.png"
                alt="Mustard field"
                fill
                sizes="(max-width: 760px) 88vw, 48vw"
                className={styles.mustardPhoto}
              />

              <div className={styles.mustardShade} />

              <div className={styles.mustardText}>
                <span>MUSTARD</span>
                <small>
                  THE CROP THAT INSPIRED IT ALL
                </small>
              </div>
            </div>

          </div>


          {/* FAMILY PHOTO — SUPPORTING CIRCLE */}

          <div className={styles.familyCircle}>

            <Image
              src="/images/story/family-farming.png"
              alt="Family working together on their farm"
              fill
              sizes="230px"
              className={styles.circleImage}
            />

            <div className={styles.circleBorder} />

            <div className={styles.familyLabel}>
              <span>WHERE IT BEGAN</span>
            </div>

          </div>


          {/* LOCATION */}

          <div className={styles.location}>
            <span>VARANASI</span>
            <i />
            <small>UTTAR PRADESH · INDIA</small>
          </div>

        </div>
      </div>


      {/* =====================================================
          FOUNDER + LOWER STORY
      ===================================================== */}

      <div className={styles.bottomStory}>

        {/* FOUNDER */}

        <div className={styles.founderBlock}>

          <div className={styles.founderPhoto}>

            <Image
              src="/images/story/founder.png"
              alt="Harsh Pandey, the vision behind Ghar Rasoi"
              fill
              sizes="210px"
              className={styles.founderImage}
            />

            <div className={styles.founderShade} />

            <div className={styles.founderName}>
              <span>HARSH PANDEY</span>
              <small>THE VISION BEHIND GHAR RASOI</small>
            </div>

          </div>

          <div className={styles.founderStory}>

            <span className={styles.blockLabel}>
              THE IDEA
            </span>

            <p>
              The idea came from{" "}
              <strong>Harsh Pandey</strong>, who wanted to
              build something meaningful and take the values
              he had grown up with beyond his own home.
            </p>

            <p>
              His family believed in the vision and came
              together to support it.
            </p>

          </div>

        </div>


        {/* OUR BELIEF */}

        <div className={styles.promise}>

          <span>OUR BELIEF</span>

          <blockquote>
            “We started Ghar Rasoi with the same care we have
            always had for our own kitchen — knowing that what
            goes into our food matters.”
          </blockquote>

        </div>


        {/* LOOKING AHEAD */}

        <div className={styles.vision}>

          <span>LOOKING AHEAD</span>

          <p>
            Our vision is to grow Ghar Rasoi into a trusted
            food brand that brings{" "}
            <strong>purity to every kitchen</strong>, while
            gradually expanding into the spices and everyday
            essentials that belong in an Indian home.
          </p>

        </div>

      </div>


      {/* FOOTER LINE */}

      <div className={styles.footerLine}>
        <span>FROM OUR FAMILY</span>
        <span>TO YOUR KITCHEN</span>
      </div>

    </section>
  );
}