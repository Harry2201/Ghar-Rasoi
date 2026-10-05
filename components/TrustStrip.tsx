export default function TrustStrip() {
    const trustPoints = [
      "Pure Mustard Oil",
      "Hydraulic Cold Pressed",
      "Filtered Before Bottling",
      "Nothing Added",
      "Made in Varanasi",
      "FSSAI Registered",
      "Quality Assurance",
      "Customer Satisfaction",
      "Sustainable Practices",
      "Ethical Sourcing",
      "Transparent Process",
      "Reliable Delivery",
      "Trusted Brand",
    ];
  
    return (
      <section
        className="trust-marquee"
        aria-label="Ghar Rasoi product highlights"
      >
        <div className="trust-marquee-track">
          {/* First set */}
          <div className="trust-marquee-group">
            {trustPoints.map((point, index) => (
              <div className="trust-marquee-item" key={`first-${index}`}>
                <span>{point}</span>
                <b aria-hidden="true">✦</b>
              </div>
            ))}
          </div>
  
          {/* Duplicate set for seamless scrolling */}
          <div className="trust-marquee-group" aria-hidden="true">
            {trustPoints.map((point, index) => (
              <div className="trust-marquee-item" key={`second-${index}`}>
                <span>{point}</span>
                <b aria-hidden="true">✦</b>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }