import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Check } from "lucide-react";

import { VehicleArt } from "@/features/cars/shared";

const reasons = [
  "No Hidden Charges",
  "Flexible Rental Options",
  "Well-Maintained Cars",
  "24/7 Customer Support",
  "Easy Cancellation",
];

/* ------------------------------------------------------------------ */
/*  Icons — thin line art, inherit currentColor                        */
/* ------------------------------------------------------------------ */

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
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
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="9" cy="14" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="14" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m7.5 6 1.5 2 1.5-2M8 4.2h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
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

function ArrowRight() {
  return (
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
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
      <path d="M12 2.5 14.7 9l7 .6-5.3 4.6 1.6 6.9L12 17.6l-6 3.5 1.6-6.9L2.3 9.6 9.3 9 12 2.5Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Package data — each with its own accent identity                   */
/* ------------------------------------------------------------------ */

type Pkg = {
  name: string;
  detail: string;
  desc: string;
  accent: string;
  icon: ReactNode;
  car: { body: string; roof: string };
  featured?: boolean;
};

const packages: Pkg[] = [
  {
    name: "Corporate Travel",
    detail: "B2B",
    desc: "Monthly billing, dedicated cars, executive chauffeurs.",
    accent: "#132238",
    icon: <BriefcaseIcon />,
    car: { body: "#1e293b", roof: "#0f172a" },
  },
  {
    name: "Wedding Car Rental",
    detail: "Signature",
    desc: "Decorated luxury sedans, SUVs & convertibles.",
    accent: "#b8892f",
    icon: <RingsIcon />,
    car: { body: "#f2ead9", roof: "#d9c48f" },
    featured: true,
  },
  {
    name: "Railway Station Pick & Drop",
    detail: "Hyderabad",
    desc: "Secunderabad · Nampally · Kacheguda — on the dot.",
    accent: "#0bb4b5",
    icon: <TrainIcon />,
    car: { body: "#1e3a5f", roof: "#14273f" },
  },
];

export default function WhyChoose() {
  return (
    <section className="mx-auto w-[90vw] px-6 py-16 sm:px-10 lg:px-16">
      <div className="flex flex-col gap-16">
        {/* TOP — Why choose */}
        <div className="reveal">
          <h2 className="text-4xl font-bold tracking-tight text-[#132238]">
            Why Choose Fatima Travels?
          </h2>

          <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:gap-8">
            <ul className="w-full space-y-5 sm:w-auto sm:shrink-0">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-3.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-base text-zinc-700 sm:whitespace-nowrap">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>

            <div className="relative aspect-square w-full max-w-[360px] shrink-0">
              <Image
                src="/why-choose-city.png"
                alt="City skyline with greenery"
                fill
                sizes="360px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM — Packages */}
        <div className="reveal">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-[#132238]">
              Popular Rental Packages
            </h2>
            <p className="mt-1.5 text-zinc-500">
              Great deals for every kind of trip.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200/70 bg-white p-7 shadow-premium transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 ${
                  pkg.featured ? "lg:-translate-y-3 ring-1 ring-[#b8892f]/15" : ""
                }`}
                style={{ "--accent": pkg.accent } as CSSProperties}
              >
                {/* top accent sheen, sweeps in on hover */}
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-0.75 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, transparent, ${pkg.accent}, transparent)` }}
                />
                {/* soft ambient glow in the card's accent color */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl"
                  style={{ backgroundColor: pkg.accent, opacity: 0.08 }}
                />

                {pkg.featured && (
                  <div className="absolute -right-1 top-6 flex items-center gap-1 rounded-l-full bg-[#b8892f] py-1 pl-3 pr-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_18px_-8px_rgba(184,137,47,0.8)]">
                    <StarIcon />
                    Most Loved
                  </div>
                )}

                <div className="relative flex items-center justify-between">
                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-110">
                    <span className="absolute inset-0 bg-[var(--accent)]/10 transition-opacity duration-500 group-hover:opacity-0" />
                    <span className="absolute inset-0 bg-[var(--accent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="relative text-[var(--accent)] transition-colors duration-500 group-hover:text-white">
                      {pkg.icon}
                    </span>
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
                    style={{ backgroundColor: `${pkg.accent}14`, color: pkg.accent }}
                  >
                    {pkg.detail}
                  </span>
                </div>

                <h3 className="relative mt-6 text-lg font-bold leading-snug text-[#132238]">
                  {pkg.name}
                </h3>

                <div className="relative my-6 flex h-20 items-center justify-center">
                  <div
                    className="absolute h-5 w-28 rounded-full blur-lg"
                    style={{ backgroundColor: pkg.accent, opacity: 0.18 }}
                  />
                  <div
                    className="relative h-16 w-32 animate-float-slow"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <VehicleArt variant="sedan" color={pkg.car.body} roof={pkg.car.roof} />
                  </div>
                </div>

                <p className="relative mb-7 flex-1 text-sm leading-relaxed text-zinc-500">
                  {pkg.desc}
                </p>

                <Link
                  href="/services"
                  className="group/btn relative mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: pkg.accent,
                    boxShadow: `0 16px 32px -16px ${pkg.accent}cc`,
                  }}
                >
                  View package
                  <ArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
