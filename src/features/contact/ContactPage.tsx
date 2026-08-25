"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Clock, MapPin, MessageCircle, Phone, Send } from "lucide-react";

import { siteConfig } from "@/lib/site";

/* ------------------------------------------------------------------ */
/*  WhatsApp helpers                                                   */
/* ------------------------------------------------------------------ */

const WA = siteConfig.whatsapp.replace(/\D/g, "");
const book = (topic: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(
    `Hi Fatima Travels, I'd like to know more about: ${topic}.`,
  )}`;

const services = [
  "Airport Pick & Drop",
  "Hyderabad Sightseeing",
  "Outstation Trip",
  "Corporate Travel",
  "Wedding Car Rental",
  "Railway Pick & Drop",
  "Something else",
];

const INK = "text-[#132238]";

/* ------------------------------------------------------------------ */
/*  Shared pieces                                                      */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-primary" />
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        {children}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact info cards                                                 */
/* ------------------------------------------------------------------ */

type InfoCard = {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
};

const infoCards: InfoCard[] = [
  {
    label: "Call us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    icon: <Phone className="h-5 w-5" strokeWidth={1.75} />,
  },
  {
    label: "WhatsApp us",
    value: siteConfig.whatsapp,
    href: book("a trip"),
    icon: <MessageCircle className="h-5 w-5" strokeWidth={1.75} />,
    external: true,
  },
  {
    label: "Visit us",
    value: siteConfig.address,
    href: siteConfig.directionsUrl,
    icon: <MapPin className="h-5 w-5" strokeWidth={1.75} />,
    external: true,
  },
  {
    label: "Dispatch hours",
    value: siteConfig.hours,
    href: book("a trip"),
    icon: <Clock className="h-5 w-5" strokeWidth={1.75} />,
    external: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi Fatima Travels, I'd like to enquire about: ${service}.`,
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      message && `Message: ${message}`,
    ].filter(Boolean);
    window.open(
      `https://wa.me/${WA}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="flex-1 bg-white">
      {/* ============================= HERO ============================= */}
      <section className="relative isolate overflow-hidden pt-36 pb-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-24 -top-24 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl animate-aurora" />
          <div className="absolute left-[10%] top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto w-[90vw] px-6 sm:px-10 lg:px-16">
          <div className="reveal">
            <Eyebrow>Get in touch</Eyebrow>
          </div>
          <h1
            className={`reveal mt-6 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl ${INK}`}
          >
            Let&apos;s plan your{" "}
            <span className="font-serif italic font-medium text-sheen-teal">
              next ride.
            </span>
          </h1>
          <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-zinc-600">
            Airport run, wedding fleet or a cross-country trip, tell us what
            you need and we&apos;ll confirm your chauffeur within minutes.
          </p>
        </div>
      </section>

      {/* ========================= FORM + INFO ========================= */}
      <section className="mx-auto w-[90vw] px-6 pb-20 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.75fr] lg:gap-10">
          {/* LEFT — enquiry form */}
          <form
            onSubmit={handleSubmit}
            className="reveal relative overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-white p-8 shadow-premium sm:p-10"
          >
            <h2 className={`text-2xl font-bold tracking-tight ${INK}`}>
              Send us an enquiry
            </h2>
            <p className="mt-1.5 text-sm text-zinc-500">
              We&apos;ll reply on WhatsApp, usually within minutes.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400"
                >
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="mt-2.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-[#132238] outline-none transition-colors placeholder:text-zinc-400 focus:border-primary"
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="phone"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400"
                >
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="mt-2.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-[#132238] outline-none transition-colors placeholder:text-zinc-400 focus:border-primary"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="service"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400"
                >
                  What do you need?
                </label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="mt-2.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-[#132238] outline-none transition-colors focus:border-primary"
                >
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Pickup point, date and any details that'll help us plan the trip."
                  className="mt-2.5 w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-[#132238] outline-none transition-colors placeholder:text-zinc-400 focus:border-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-16px_rgba(11,180,181,1)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Send via WhatsApp
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
            </button>
          </form>

          {/* RIGHT — contact info */}
          <div className="reveal flex flex-col gap-5">
            {infoCards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="hover-glow group relative flex items-start gap-4 overflow-hidden rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-premium"
              >
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-110">
                  <span className="absolute inset-0 bg-primary/10 transition-opacity duration-500 group-hover:opacity-0" />
                  <span className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative text-primary transition-colors duration-500 group-hover:text-white">
                    {c.icon}
                  </span>
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                    {c.label}
                  </p>
                  <p className={`mt-1 truncate text-[15px] font-semibold ${INK}`}>
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= FIND US ========================= */}
      <section className="mx-auto w-[90vw] px-6 pb-28 sm:px-10 lg:px-16">
        <div className="reveal group relative overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-[#0e1b2e] p-10 shadow-premium sm:p-14">
          <div className="pointer-events-none absolute -right-20 -top-24 h-[28rem] w-[28rem] animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(11,180,181,0.35),transparent_60%)] blur-2xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                  <MapPin className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Find us
                </span>
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Pillar 143, Attapur, Hyderabad.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-300">
                {siteConfig.address}
                <span className="mt-2 block text-white">
                  Dispatch open {siteConfig.hours.toLowerCase()}.
                </span>
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-16px_rgba(11,180,181,1)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get directions
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href={book("a trip")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
