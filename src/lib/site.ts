/**
 * Central site configuration — brand info and primary navigation.
 * Import from here instead of hardcoding links across components.
 */

/**
 * Canonical origin used for SEO metadata (canonical URLs, Open Graph, sitemap).
 * Set NEXT_PUBLIC_SITE_URL in the hosting environment once the domain is live.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.fatimatravel.in";

export const siteConfig = {
  name: "Fatima Tours and Travels",
  shortName: "Fatima Travels",
  logo: "/logo.png",
  url: siteUrl,
  /** Kept under ~160 characters so Google shows it in full. */
  description:
    "Chauffeur-driven luxury car rentals in Hyderabad — sedans, SUVs, tempo travellers and buses for airport, local, outstation and all-India trips. Book 24/7.",
  tagline:
    "Hyderabad's premium chauffeured luxury travel operator. Serving Telangana & All-India routes since 2001.",
  phone: "+91 99493 75608",
  whatsapp: "+91 86888 43310",
  hours: "24/7 Available",
  address:
    "Pillar Number 143, Near Golden Palace Hotel, Attapur, Hyderabad, Telangana 500048",
  directionsUrl: "https://maps.app.goo.gl/4gvcmPgGTNLPT1v27",
  social: {
    facebook:
      "https://www.facebook.com/people/Fatimatravel/61593803857679/?mibextid=wwXIfr&rdid=EbZLKuVBR9207oC8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DQGxwTiYG%2F%3Fmibextid%3DwwXIfr",
    instagram:
      "https://www.instagram.com/fatimatravel.in?igsi=aDlhdjFhenNtZGc2&utm_source=qr",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Cars", href: "/cars" },
  { label: "Buses", href: "/cars#buses" },
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
