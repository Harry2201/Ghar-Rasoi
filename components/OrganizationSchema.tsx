export default function OrganizationSchema() {
    const organization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://gharrasoi.com/#organization",
      name: "Ghar Rasoi Enterprises",
      url: "https://gharrasoi.com",
      logo: "https://gharrasoi.com/images/ghar-rasoi-logo.png",
      description:
        "Ghar Rasoi Enterprises is a Varanasi-based food brand offering mustard oil, cooking oils, masalas and atta, with a focus on quality, traditional food values and everyday Indian cooking.",
      slogan: "शुद्धता की एक पहचान",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Varanasi",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.instagram.com/gharrasoi_enterprises/",
      ],
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization),
        }}
      />
    );
  }