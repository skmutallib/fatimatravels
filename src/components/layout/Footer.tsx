"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, MessageCircle, Phone, Send } from "lucide-react";

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
];

const wa = siteConfig.whatsapp.replace(/\D/g, "");
const telHref = `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
const whatsappHref = `https://wa.me/${wa}`;

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Fatima Travels, please add me to your updates list.${
      email ? ` Email: ${email}` : ""
    }`;
    window.open(
      `https://wa.me/${wa}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto w-[90vw] px-6 py-14 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 text-center lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.9fr] lg:gap-12 lg:text-left">
          {/* Brand + newsletter */}
          <div className="col-span-2 flex flex-col items-center lg:col-span-1 lg:items-start">
            <span className="text-3xl font-black italic leading-none tracking-tight text-white">
              Fatima
            </span>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              Join our updates list to stay up to date on offers and new
              routes.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex w-full max-w-sm items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full min-w-0 rounded-lg border border-white/20 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
              >
                Subscribe
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
            <p className="mt-2.5 max-w-sm text-xs leading-relaxed text-white/50">
              We&apos;ll reach out on WhatsApp using the details you share.
            </p>
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
            className="transition-colors hover:text-white"
          >
            Developed by skmutallib
          </a>
        </div>
      </div>
    </footer>
  );
}
