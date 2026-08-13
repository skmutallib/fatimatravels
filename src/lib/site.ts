/**
 * Central site configuration — brand info and primary navigation.
 * Import from here instead of hardcoding links across components.
 */

export const siteConfig = {
  name: "Fatima Tours and Travels",
  shortName: "Fatima Travels",
  logo: "/logo.png",
  tagline:
    "Hyderabad's premium chauffeured luxury travel operator. Serving Telangana & All-India routes since 2001.",
  phone: "+91 99493 75608",
  whatsapp: "+91 86888 43310",
  hours: "24/7 Available",
  address:
    "Pillar Number 143, Near Golden Palace Hotel, Attapur, Hyderabad, Telangana 500048",
  directionsUrl: "https://maps.app.goo.gl/4gvcmPgGTNLPT1v27",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Cars", href: "/cars" },
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
