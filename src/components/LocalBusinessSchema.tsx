import { BUSINESS, SITE_URL } from "@/lib/constants";

export default function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: BUSINESS.name,
    image: `${SITE_URL}/og-image.jpg`,
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.5461,
      longitude: -113.4938,
    },
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
    sameAs: [
      BUSINESS.social.instagram,
      BUSINESS.social.linkedin,
      BUSINESS.social.facebook,
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Branding & Logo Design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Design & Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Marketing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Print & Signage Products",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vehicle Graphics & Storefront Branding",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Promotional & Advertising Design",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
