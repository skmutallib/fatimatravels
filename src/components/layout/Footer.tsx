import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

const company = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/#faq" },
];

const fleet = [
  { label: "All Cars", href: "/cars" },
  { label: "Sedans", href: "/cars#sedans" },
  { label: "SUVs", href: "/cars#suvs" },
  { label: "Luxury Collection", href: "/cars#luxury" },
  { label: "Buses", href: "/cars#buses" },
];

const wa = siteConfig.whatsapp.replace(/\D/g, "");
const telHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
const whatsappHref = `https://wa.me/${wa}`;

const socialLinks = [
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.55-1.5H16.5V4.3C16.2 4.26 15.2 4.17 14 4.17c-2.4 0-4 1.46-4 4.15V10.5H7.5v3H10V21h3.5z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto w-[90vw] px-6 py-14 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 text-center lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.9fr] lg:gap-12 lg:text-left">
          {/* Brand + newsletter */}
          <div className="col-span-2 flex flex-col items-center lg:col-span-1 lg:items-start">
            <Image
              src="/fatima-logo-white.png"
              alt={siteConfig.name}
              width={220}
              height={78}
              className="h-9 w-auto"
            />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              Join our updates list to stay up to date on offers and new
              routes.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary transition-colors hover:bg-white/90"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide">Fleet</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {fleet.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold tracking-wide">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 transition-colors hover:text-white lg:justify-start"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  {siteConfig.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={telHref}
                  className="flex items-center justify-center gap-2.5 transition-colors hover:text-white lg:justify-start"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-center gap-2.5 transition-colors hover:text-white lg:justify-start"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{siteConfig.address}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex w-[90vw] flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-white/60 sm:flex-row sm:px-10 lg:px-16">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <a
            href="https://www.skmutallib.work"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white bg-white px-3.5 py-1.5 font-bold text-black transition-colors hover:bg-white/90"
          >
            Design and developed by skmutallib
          </a>
        </div>
      </div>
    </footer>
  );
}
