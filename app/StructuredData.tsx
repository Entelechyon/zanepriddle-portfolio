export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://zanepriddle.com/#person",
    name: "Zane Priddle",
    url: "https://zanepriddle.com",
    homeLocation: {
      "@type": "Place",
      name: "Melbourne, Australia",
    },
    sameAs: [
      "https://github.com/Entelechyon",
      "https://www.linkedin.com/in/zaneonfire/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
