import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BadgeIndianRupee, Clock, ShieldCheck, Sparkles } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { luxuryBrands, paint, VehicleArt } from "@/features/cars/shared";
import ValuesGrid from "@/features/about/ValuesGrid";

const brandPhotos: Record<string, string> = {
  "Mercedes-Benz": "/mercedes-s-class.png",
  BMW: "/bmw-7-series.png",
  Audi: "/audi-a8.png",
  Jaguar: "/jaguar-xf.png",
  Volvo: "/volvo-s90.png",
  Lexus: "/lexus-lx600.png",
  "Range Rover": "/range-rover.png",
};

/* ------------------------------------------------------------------ */
/*  Booking helper — opens WhatsApp with a pre-filled enquiry          */
/* ------------------------------------------------------------------ */

const WA = siteConfig.whatsapp.replace(/\D/g, "");
const book = (topic: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(
    `Hi Fatima Travels, I'd like to know more about: ${topic}.`,
  )}`;

const INK = "text-[#132238]";

/* ------------------------------------------------------------------ */
/*  Small shared pieces                                                */
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

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const heroStats = [
  { value: "25+", label: "Years on the road" },
  { value: "200+", label: "Cities served" },
  { value: "24/7", label: "Dispatch" },
  { value: "100%", label: "Chauffeur-driven" },
];

const values = [
  {
    name: "Safety First",
    desc: "Every chauffeur is licensed and background-verified. Every vehicle is inspected before it leaves the yard.",
    icon: <ShieldCheck className="h-6 w-6" strokeWidth={1.75} />,
  },
  {
    name: "Always On Time",
    desc: "Live GPS dispatch and route planning mean your car is waiting for you, not the other way around.",
    icon: <Clock className="h-6 w-6" strokeWidth={1.75} />,
  },
  {
    name: "Comfort & Class",
    desc: "Sanitised, well-appointed interiors on every trip, from executive sedans to our ultra-luxury marques.",
    icon: <Sparkles className="h-6 w-6" strokeWidth={1.75} />,
  },
  {
    name: "Transparent Pricing",
    desc: "One quoted fare, confirmed upfront. No hidden charges, no surprises when the trip ends.",
    icon: <BadgeIndianRupee className="h-6 w-6" strokeWidth={1.75} />,
  },
];

const milestones = [
  {
    year: "2001",
    title: "Founded in Hyderabad",
    desc: "Fatima Tours and Travels opens its doors with a simple promise: a driver you can trust, a car you can rely on.",
  },
  {
    year: "Early years",
    title: "Built on word of mouth",
    desc: "Families, corporates and wedding parties across the city start choosing us, for service, not just for cars.",
  },
  {
    year: "Growth",
    title: "Beyond the city limits",
    desc: "The fleet expands to cover every district of Telangana, then every outstation route across India.",
  },
  {
    year: "Today",
    title: "A pan-India standard",
    desc: "25+ years on, 24/7 dispatch and a fleet spanning executive sedans to Rolls-Royce and Bentley, still chauffeur-driven, always.",
  },
];

const standard = [
  "Uniformed, professional chauffeurs",
  "Sanitised before every single ride",
  "Live GPS tracking on every trip",
  "Dispatch open 24 hours, 7 days a week",
];

const marques = [...luxuryBrands.map((b) => ({ brand: b.brand, tag: b.tag, variant: b.variant }))];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
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
              <Eyebrow>About us</Eyebrow>
            </div>

            <h1
              className={`reveal mt-6 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl ${INK}`}
            >
              Two decades of getting Hyderabad there,{" "}
              <span className="font-serif italic font-medium text-sheen-teal">
                safely, on time, in style.
              </span>
            </h1>

            <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-zinc-600">
              Fatima Tours and Travels is Hyderabad&apos;s premium chauffeured
              travel operator, trusted since 2001 by families, corporates and
              wedding parties who expect more than just a car. Every trip is
              driven, never self-drive, and every driver is one of ours.
            </p>

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

          {/* RIGHT — established plaque */}
          <div className="reveal hidden lg:block lg:pl-10">
            <div className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-[#0e1b2e] p-10 shadow-premium">
              <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(11,180,181,0.35),transparent_60%)] blur-2xl" />
              <div className="pointer-events-none absolute -left-14 bottom-0 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />

              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Established
                </span>
                <p className="mt-4 text-7xl font-extrabold tracking-tight text-white">
                  2001
                </p>
                <p className="mt-2 text-sm text-zinc-400">Hyderabad, Telangana</p>

                <div className="mt-8 h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />

                <p className="mt-8 text-base leading-relaxed text-zinc-300">
                  Chauffeur-driven since day one, no self-drive, no
                  compromises, no exceptions.
                </p>

                <div className="mt-8 flex items-center gap-3 text-primary">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <ChauffeurIcon />
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Where hospitality meets the road.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= OUR STORY ========================= */}
      <section className="relative isolate mx-auto w-[90vw] overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — narrative */}
          <div className="reveal">
            <Eyebrow>Our story</Eyebrow>
            <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${INK}`}>
              Two and a half decades on the road.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-600">
              What started as a single car and a promise in Hyderabad has
              grown into a fleet that covers 200+ cities across India,
              without ever losing the thing that started it:{" "}
              <span className="font-serif italic font-medium text-sheen-gold">
                a driver you can trust
              </span>
              .
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              We&apos;ve never been the biggest fleet in the city. We&apos;ve
              tried to be the one that shows up early, drives carefully, and
              treats every ride, an airport run, a wedding, a cross-country
              trip, with the same care.
            </p>

            <a
              href={book("your company")}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_-16px_rgba(11,180,181,0.9)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Talk to our team
              <ArrowRight />
            </a>
          </div>

          {/* RIGHT — milestone timeline */}
          <ol className="reveal relative space-y-8">
            <div className="pointer-events-none absolute left-5 top-5 bottom-5 w-px bg-linear-to-b from-primary/50 via-zinc-200 to-transparent" />
            {milestones.map((m, i) => {
              const isLast = i === milestones.length - 1;
              return (
                <li key={m.title} className="group relative flex gap-5">
                  <span
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold transition-colors duration-300 ${
                      isLast
                        ? "border-primary bg-primary text-white"
                        : "border-primary/30 bg-white text-primary group-hover:border-primary"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="hover-glow flex-1 rounded-2xl border border-zinc-200/70 bg-white p-6 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {m.year}
                    </span>
                    <h3 className={`mt-1.5 text-lg font-bold ${INK}`}>
                      {m.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-zinc-500">
                      {m.desc}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ========================= VALUES ========================= */}
      <section className="mx-auto w-[90vw] px-6 py-20 sm:px-10 lg:px-16">
        <div className="reveal max-w-2xl">
          <Eyebrow>What drives us</Eyebrow>
          <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${INK}`}>
            Built on trust, driven by care.
          </h2>
          <p className="mt-2 text-zinc-500">
            The four things every trip with us is measured against.
          </p>
        </div>

        <ValuesGrid values={values} />
      </section>

      {/* ========================= MARQUES WE DRIVE ========================= */}
      <section className="mx-auto w-[90vw] px-6 py-20 sm:px-10 lg:px-16">
        <div className="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Our fleet</Eyebrow>
            <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${INK}`}>
              From executive sedans to the ultra-luxury marques.
            </h2>
            <p className="mt-2 text-zinc-500">
              Every car chauffeur-driven, every marque maintained to the same
              standard.
            </p>
          </div>
          <Link
            href="/cars"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary"
          >
            Explore the full fleet
            <ArrowRight />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {marques.map((m, i) => {
            const p = paint(i);
            const photo = brandPhotos[m.brand];
            return (
              <div
                key={m.brand}
                className="hover-glow reveal group relative flex flex-col items-center overflow-hidden rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-premium"
              >
                <div className="relative flex h-16 w-full items-center justify-center overflow-hidden">
                  <span className="pointer-events-none absolute h-20 w-20 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative h-14 w-24 transition-transform duration-500 ease-out group-hover:scale-110">
                    {photo ? (
                      <Image src={photo} alt={m.brand} fill sizes="140px" className="scale-150 object-contain" />
                    ) : (
                      <VehicleArt variant={m.variant} color={p.body} roof={p.roof} />
                    )}
                  </div>
                </div>
                <h3 className={`mt-5 text-center text-base font-bold ${INK}`}>
                  {m.brand}
                </h3>
                <span className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400 transition-colors group-hover:text-primary">
                  {m.tag}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================= THE FATIMA STANDARD ========================= */}
      <section className="mx-auto w-[90vw] px-6 pb-4 sm:px-10 lg:px-16">
        <div className="reveal group relative overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-[#0e1b2e] p-10 shadow-premium sm:p-14">
          <div className="pointer-events-none absolute -right-20 -top-24 h-[28rem] w-[28rem] animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(11,180,181,0.35),transparent_60%)] blur-2xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                <ChauffeurIcon />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                The Fatima standard
              </span>
            </div>
            <h2 className="mt-6 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              We didn&apos;t meet the standard. We built it.
            </h2>

            <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
              {standard.map((h) => (
                <li key={h} className="group/item flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors duration-300 group-hover/item:bg-primary group-hover/item:text-white">
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
                  <span className="text-[15px] font-medium text-white">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========================= CTA ========================= */}
      <section className="mx-auto w-[90vw] px-6 py-28 sm:px-10 lg:px-16">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-primary/20 bg-linear-to-br from-primary/10 via-white to-white p-10 text-center shadow-premium sm:p-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-aurora" />
          <h2 className={`relative text-3xl font-bold tracking-tight sm:text-5xl ${INK}`}>
            Ride with the team Hyderabad trusts.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-zinc-600">
            25 years, one promise, a driver you can trust, a car you can
            rely on. Every single time.
          </p>
          <div className="relative mx-auto mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={book("a trip")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-2xl bg-primary px-3 py-3.5 text-[13px] font-semibold text-white shadow-[0_16px_40px_-16px_rgba(11,180,181,1)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto sm:gap-2 sm:px-8 sm:py-4 sm:text-sm"
            >
              Chat on WhatsApp
              <ArrowRight />
            </a>
            <Link
              href="/contact"
              className="flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-2xl border border-zinc-300 bg-white px-3 py-3.5 text-[13px] font-semibold text-[#132238] transition-colors hover:border-primary hover:text-primary sm:w-auto sm:gap-2 sm:px-8 sm:py-4 sm:text-sm"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
