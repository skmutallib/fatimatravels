import Link from "next/link";
import type { ReactNode } from "react";

import { siteConfig } from "@/lib/site";

/* ------------------------------------------------------------------ */
/*  Booking helper — opens WhatsApp with a pre-filled enquiry          */
/* ------------------------------------------------------------------ */

const WA = siteConfig.whatsapp.replace(/\D/g, "");
const book = (service: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(
    `Hi Fatima Travels, I'd like to book: ${service}.`,
  )}`;

/* ------------------------------------------------------------------ */
/*  Icons — thin line art, inherit currentColor                        */
/* ------------------------------------------------------------------ */

function PlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M10.5 13.5 3 15l-1-2 6-4-1.5-6L9 2l3.5 6.5L18 6c1.2-.5 2.4 0 2.7 1s-.4 2.1-1.6 2.6l-5.5 2.4L15 20l-2 1-2.5-7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LandmarkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M4 20h16M5 20v-7M9 20v-7M15 20v-7M19 20v-7M4 13h16M12 3l7 4v2H5V7l7-4ZM9 13c0-2 1.5-3 3-3s3 1 3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M6 20c0-3 3-3 3-6s-3-3-3-6a3 3 0 0 1 6 0c0 3-3 3-3 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="17.5" cy="16" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M17.5 22c1.8-2 3-3.4 3-5.4M15 20.5H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="3" y="7.5" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 12.5h18M12 12v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RingsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="9" cy="14" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="14" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m7.5 6 1.5 2 1.5-2M8 4.2h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="6" y="3.5" width="12" height="13" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 10h12M9.5 13.5h.01M14.5 13.5h.01M8 16.5 6 20M16 16.5 18 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChauffeurIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 20a6.5 6.5 0 0 1 13 0M8.5 8.5 12 4l3.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
      <path
        d="M12 21c5-4.5 7.5-8 7.5-11.5A7.5 7.5 0 0 0 4.5 9.5C4.5 13 7 16.5 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Service = {
  tag: string;
  name: string;
  desc: string;
  icon: ReactNode;
};

const services: Service[] = [
  {
    tag: "Hyderabad",
    name: "Airport Pick & Drop",
    desc: "RGIA Shamshabad — 24/7 meet-and-greet with live flight tracking, so we're at arrivals before you are.",
    icon: <PlaneIcon />,
  },
  {
    tag: "Local",
    name: "Hyderabad Sightseeing",
    desc: "Charminar, Golconda, Ramoji Film City — full-day curated itineraries with a driver who knows the city.",
    icon: <LandmarkIcon />,
  },
  {
    tag: "All India",
    name: "Outstation Trips",
    desc: "Vijayawada, Bengaluru, Goa, Tirupati — every route, every day, one-way or round trip.",
    icon: <RouteIcon />,
  },
  {
    tag: "B2B",
    name: "Corporate Travel",
    desc: "Monthly billing, dedicated cars and executive chauffeurs for teams that can't afford to be late.",
    icon: <BriefcaseIcon />,
  },
  {
    tag: "Signature",
    name: "Wedding Car Rental",
    desc: "Decorated luxury sedans, SUVs and convertibles that make an entrance worthy of the day.",
    icon: <RingsIcon />,
  },
  {
    tag: "Hyderabad",
    name: "Railway Pick & Drop",
    desc: "Secunderabad · Nampally · Kacheguda — on the dot, with tracking for every train.",
    icon: <TrainIcon />,
  },
];

const heroStats = [
  { value: "24/7", label: "Dispatch" },
  { value: "200+", label: "Cities served" },
  { value: "24+", label: "Years" },
  { value: "100%", label: "Chauffeur-driven" },
];

const coverage = [
  { title: "Hyderabad", note: "Every district, every hour." },
  { title: "Entire Telangana", note: "Warangal · Karimnagar · beyond." },
  { title: "All India", note: "Outstation to any state." },
];

const keywords = [
  "Airport Taxi",
  "Outstation",
  "Wedding Cars",
  "Volvo Buses",
  "Tempo Travellers",
  "Corporate",
  "Local Sightseeing",
  "Railway Transfers",
];

const INK = "text-[#132238]";

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */

function TopAccent() {
  return (
    <span className="absolute inset-x-0 top-0 h-0.75 origin-left scale-x-0 bg-linear-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
  );
}

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

const hallmarks = [
  "Uniformed, English-speaking chauffeurs",
  "Sanitised before every single ride",
  "Live GPS tracking on every trip",
  "Dispatch open 24 hours, 7 days a week",
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  return (
    <div className="flex-1 bg-white">
      {/* ============================= HERO ============================= */}
      <section className="relative isolate overflow-hidden pt-36 pb-16 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-24 -top-24 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl animate-aurora" />
          <div className="absolute left-[10%] top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent" />
        </div>

        <div className="mx-auto grid w-[90vw] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-16">
          {/* LEFT — copy */}
          <div>
            <div className="reveal">
              <Eyebrow>What we do</Eyebrow>
            </div>

            <h1
              className={`reveal mt-6 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl ${INK}`}
            >
              End-to-end travel,{" "}
              <span className="font-serif italic font-medium text-sheen-teal">
                handled.
              </span>
            </h1>

            <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-zinc-600">
              One operator for every journey — airport runs, city tours, weddings,
              corporate fleets and cross-country outstation trips. Chauffeured,
              sanitised and available 24 hours a day.
            </p>

            {/* refined, borderless stat row */}
            <dl className="reveal mt-12 grid max-w-2xl grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-0">
              {heroStats.map((s, i) => (
                <div
                  key={s.label}
                  className={`sm:px-7 ${
                    i !== 0 ? "sm:border-l sm:border-zinc-200" : "sm:pl-0"
                  }`}
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className={`block text-3xl font-bold tracking-tight ${INK}`}>
                      {s.value}
                    </span>
                    <span className="mt-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT — the Fatima standard */}
          <div className="reveal hidden lg:block lg:pl-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              The Fatima standard
            </p>
            <ul className="mt-7 border-t border-zinc-200">
              {hallmarks.map((h) => (
                <li
                  key={h}
                  className="group flex items-center gap-4 border-b border-zinc-200 py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/25 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      <path
                        d="M5 12.5l4 4 10-10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[15px] font-medium text-[#132238]">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========================= KEYWORD MARQUEE ========================= */}
      <div className="relative flex overflow-hidden border-y border-zinc-100 py-5 select-none">
        <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
          {[...keywords, ...keywords].map((k, i) => (
            <span key={i} className="flex items-center gap-8 text-lg font-semibold text-zinc-300">
              {k}
              <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8" aria-hidden>
          {[...keywords, ...keywords].map((k, i) => (
            <span key={i} className="flex items-center gap-8 text-lg font-semibold text-zinc-300">
              {k}
              <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            </span>
          ))}
        </div>
      </div>

      {/* ========================= SERVICES GRID ========================= */}
      <section className="mx-auto w-[90vw] px-6 py-20 sm:px-10 lg:px-16">
        <div className="reveal max-w-2xl">
          <Eyebrow>Our services</Eyebrow>
          <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${INK}`}>
            Everything, under one roof.
          </h2>
          <p className="mt-2 text-zinc-500">
            Six ways we move Hyderabad — pick one, or let us plan the whole trip.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.name}
              href={book(s.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200/70 bg-white p-7 shadow-premium transition-all duration-500 hover:-translate-y-2 hover:border-primary/30"
            >
              <TopAccent />

              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  {s.icon}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400 transition-colors group-hover:text-primary">
                  {s.tag}
                </span>
              </div>

              <h3 className={`mt-7 text-xl font-bold ${INK}`}>{s.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
                {s.desc}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Book this
                <ArrowRight />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ========================= SIGNATURE BAND ========================= */}
      <section className="mx-auto w-[90vw] px-6 pb-4 sm:px-10 lg:px-16">
        <div className="reveal group relative overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-[#0e1b2e] p-10 shadow-premium sm:p-14">
          {/* animated glow */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-[28rem] w-[28rem] animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(11,180,181,0.35),transparent_60%)] blur-2xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                  <ChauffeurIcon />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Signature
                </span>
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The Luxury Chauffeur experience.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-300">
                Uniformed, English-speaking drivers in a sanitised premium sedan —
                for weddings, executives and guests who expect the finest.
                <span className="text-white"> From ₹2,500 / day.</span>
              </p>
            </div>

            <a
              href={book("Luxury Chauffeur")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-16px_rgba(11,180,181,1)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Reserve a chauffeur
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ========================= COVERAGE ========================= */}
      <section className="relative isolate mx-auto w-[90vw] overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        {/* soft radial reach glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />

        <div className="reveal max-w-2xl">
          <Eyebrow>Where we drive</Eyebrow>
          <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${INK}`}>
            From your doorstep, anywhere.
          </h2>
          <p className="mt-2 text-zinc-500">
            One call covers the whole map — from a city block to the other side
            of the country.
          </p>
        </div>

        {/* Journey route — pins on a travelling dashed line */}
        <div className="reveal relative mt-24 sm:mt-28">
          {/* connecting line (behind the pins) */}
          <div className="pointer-events-none absolute inset-x-[18%] top-4 hidden border-t-2 border-dashed border-zinc-200 sm:block" />
          <div className="pointer-events-none absolute left-1/2 top-4 hidden h-px w-1/3 -translate-x-1/2 bg-linear-to-r from-transparent via-primary/60 to-transparent sm:block" />

          <ol className="grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-0">
            {coverage.map((c, i) => (
              <li
                key={c.title}
                className="group relative flex flex-col items-center text-center"
              >
                {/* pin marker */}
                <span className="relative mb-7 flex h-8 w-8 items-center justify-center">
                  <span className="absolute inline-flex h-8 w-8 rounded-full bg-primary/30 opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-100" />
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-[0_6px_18px_-6px_rgba(11,180,181,0.9)] ring-1 ring-primary/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white group-hover:ring-primary">
                    <MapPin />
                  </span>
                </span>

                <span className="text-sm font-semibold tracking-[0.2em] text-primary">
                  0{i + 1}
                </span>
                <h3
                  className={`mt-2 text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary ${INK}`}
                >
                  {c.title}
                </h3>
                <p className="mt-2 max-w-[15rem] text-zinc-500">{c.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ========================= CTA ========================= */}
      <section className="mx-auto w-[90vw] px-6 pb-28 sm:px-10 lg:px-16">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-primary/20 bg-linear-to-br from-primary/10 via-white to-white p-10 text-center shadow-premium sm:p-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-aurora" />
          <h2 className={`relative text-3xl font-bold tracking-tight sm:text-5xl ${INK}`}>
            Tell us where you&apos;re headed.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-zinc-600">
            We&apos;ll confirm in minutes — 24 hours a day. No hidden fees, ever.
          </p>
          <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={book("a trip")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-sm font-semibold text-white shadow-[0_16px_40px_-16px_rgba(11,180,181,1)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Chat on WhatsApp
              <ArrowRight />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-300 bg-white px-8 py-4 text-sm font-semibold text-[#132238] transition-colors hover:border-primary hover:text-primary"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
