import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

const SOCIAL_ICON = "h-4 w-4 fill-current";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className={SOCIAL_ICON} aria-hidden>
      <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.5c0-.8.3-1.3 1.5-1.3h1.3V5.8c-.7-.1-1.4-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7v2H8.3V14h2.3v7h2.9Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className={SOCIAL_ICON} aria-hidden>
      <path d="M4 4h3.7l4.4 6 5-6H19l-6.4 7.6L19.6 20h-3.7l-4.7-6.4L5.8 20H4l6.7-8L4 4Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className={SOCIAL_ICON} aria-hidden>
      <path d="M6.94 8.5V19H4V8.5h2.94ZM5.47 3.9a1.71 1.71 0 1 1 0 3.42 1.71 1.71 0 0 1 0-3.42ZM20 19h-2.94v-5.6c0-1.34-.48-2.25-1.68-2.25-.92 0-1.46.62-1.7 1.22-.09.21-.11.51-.11.81V19H10.6s.04-9.32 0-10.5h2.94v1.49c.39-.6 1.09-1.46 2.66-1.46 1.94 0 3.4 1.27 3.4 4V19Z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Cars", href: "/cars" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Contact", href: "/contact" },
];

const topCities = ["Hyderabad", "Bangalore", "Chennai", "Mumbai", "Pune"];

const support = [
  "Help Center",
  "FAQs",
  "Booking Terms",
  "Privacy Policy",
  "Terms & Conditions",
];

const socials = [
  { label: "Facebook", Icon: FacebookIcon, href: "#" },
  { label: "Instagram", Icon: InstagramIcon, href: "#" },
  { label: "Twitter", Icon: XIcon, href: "#" },
  { label: "LinkedIn", Icon: LinkedinIcon, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto w-[90vw] px-6 py-14 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={180}
              height={100}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
              {siteConfig.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => {
                const Icon = s.Icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Cities */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide">Top Cities</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              {topCities.map((c) => (
                <li key={c}>
                  <span className="cursor-pointer transition-colors hover:text-white">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide">Support</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              {support.map((s) => (
                <li key={s}>
                  <span className="cursor-pointer transition-colors hover:text-white">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide">Contact Us</h4>
            <ul className="mt-4 space-y-3.5 text-sm text-white/80">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>{siteConfig.whatsapp} (WhatsApp)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <div className="mx-auto w-[90vw] px-6 py-5 text-center text-sm text-white/80 sm:px-10 lg:px-16">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
