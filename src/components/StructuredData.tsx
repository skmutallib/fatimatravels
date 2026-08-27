import { siteConfig, siteUrl } from "@/lib/site";

/**
 * Schema.org JSON-LD for the business and the site itself, so Google can show
 * rich results (business name, phone, address, hours) alongside the link.
 * Rendered as a plain <script> tag — see Next's JSON-LD guide.
 */
export default function StructuredData() {
  const graph = [
    {
      "@type": "TravelAgency",
      "@id": `${siteUrl}/#business`,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      description: siteConfig.description,
      url: siteUrl,
      image: `${siteUrl}/opengraph-image.png`,
      logo: `${siteUrl}${siteConfig.logo}`,
      telephone: siteConfig.phone,
      priceRange: "₹₹",
      foundingDate: "2001",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Pillar Number 143, Near Golden Palace Hotel, Attapur",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500048",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Hyderabad" },
        { "@type": "State", name: "Telangana" },
        { "@type": "Country", name: "India" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      hasMap: siteConfig.directionsUrl,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "reservations",
        telephone: siteConfig.phone,
        availableLanguage: ["en", "hi", "te", "ur"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#business` },
    },
  ];

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so a stray HTML tag in the data can't break out of the script.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
