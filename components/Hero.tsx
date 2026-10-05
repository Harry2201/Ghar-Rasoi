export default function Hero() {
  return (
    <section className="hero">
      {/* Static cinematic hero image */}
      <div
        className="hero-media"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/images/embedded-2.jpeg')",
        }}
      />

      {/* Readability overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Hero content */}
      <div className="hero-content">
        <p className="eyebrow">PURELY MADE IN VARANASI</p>

        <h1>
          Pure mustard oil.
          <br />
          <em>Made with care.</em>
        </h1>

        <p className="hero-copy">
          A distinctive mustard oil made for everyday Indian cooking, with the
          familiar aroma and character of traditionally prepared mustard oil.
        </p>

        <div className="hero-actions">
          <a className="dark-button" href="#products">
            Explore products <span>↗</span>
          </a>

          <a className="quiet-link" href="/products/mustard-oil">
            Explore mustard oil <span>↗</span>
          </a>
        </div>

        <div className="hero-tag">
          <span>शुद्धता की एक पहचान</span>
          <i />
        </div>
      </div>

      {/* Product information */}
      <div className="hero-side-note">
        <div>
          <b>Mustard Oil</b>
          <small>1 L · ₹220</small>
        </div>
      </div>
    </section>
  );
}