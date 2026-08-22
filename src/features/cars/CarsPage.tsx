import Link from "next/link";
import type { ReactNode } from "react";

import {
  enquire,
  luxuryBrands,
  paint,
  slugify,
  VehicleArt,
  type Vehicle,
} from "@/features/cars/shared";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const sedans = ["Swift Dzire", "Toyota Etios", "Maruti Suzuki Brezza"];

const suvs = [
  "Innova",
  "Innova Crysta",
  "Innova Hycross",
  "Toyota Fortuner",
  "Fortuner Legender",
];

const ultraLuxury: { brand: string; line: string }[] = [
  { brand: "Rolls-Royce", line: "The absolute summit of chauffeured motoring." },
  { brand: "Bentley", line: "Handcrafted British power, quietly commanding." },
];

const luxuryVans = ["Kia Carnival", "Toyota Vellfire"];

const buses = ["12 Seater", "22 Seater", "30 Seater", "40 Seater", "50 Seater"];

const heroStats = [
  { value: "60+", label: "Models" },
  { value: "24/7", label: "Support" },
  { value: "100%", label: "Chauffeur-driven" },
  { value: "Pan-India", label: "Coverage" },
];

/* ------------------------------------------------------------------ */
/*  Shared style tokens                                                */
/* ------------------------------------------------------------------ */

const INK = "text-[#132238]";

// A premium card surface with a lift + primary glow on hover.
const cardBase =
  "reveal group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200/70 bg-white p-5 shadow-premium transition-all duration-500 hover:-translate-y-2 hover:border-primary/30";

// Spec summary shown as chips on each vehicle card.
const vehInfo: Record<Vehicle, { label: string; seats: string; bags: string }> = {
  sedan: { label: "Sedan", seats: "4 Seats", bags: "2 Bags" },
  suv: { label: "SUV", seats: "6–7 Seats", bags: "4 Bags" },
  van: { label: "Luxury Van", seats: "7 Seats", bags: "5 Bags" },
  bus: { label: "Coach", seats: "12–50 Seats", bags: "Group" },
};

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */

function ChauffeurIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary/70">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3v6M4.5 16.5l4.2-2.4M19.5 16.5l-4.2-2.4"
        stroke="currentColor"
        strokeWidth="1.6"
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
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Thin accent line that draws itself across the top of a card on hover. */
function TopAccent() {
  return (
    <span className="absolute inset-x-0 top-0 h-0.75 origin-left scale-x-0 bg-linear-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
  );
}

/* Soft radial glow that fades in behind the vehicle art on hover. */
function ArtGlow() {
  return (
    <span className="pointer-events-none absolute h-28 w-28 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
  );
}

function SeatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
      <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
      <rect x="5" y="8" width="14" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function Chip({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100/90 px-2.5 py-1.5 text-xs font-medium text-zinc-600">
      <span className="text-primary">{icon}</span>
      {children}
    </span>
  );
}

function SectionHead({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="reveal max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </span>
      </div>
      <h2 className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${INK}`}>
        {title}
      </h2>
      <p className="mt-2 text-zinc-500">{subtitle}</p>
    </div>
  );
}

function ModelCard({
  name,
  variant,
  index,
}: {
  name: string;
  variant: Vehicle;
  index: number;
}) {
  const p = paint(index);
  const info = vehInfo[variant];
  return (
    <a
      href={enquire(name)}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200/70 bg-white shadow-premium transition-all duration-500 hover:-translate-y-2 hover:border-primary/30"
    >
      <TopAccent />

      {/* Media panel — car in a soft spotlight with a reflection line */}
      <div className="relative overflow-hidden bg-linear-to-b from-zinc-50 to-white px-6 pt-6">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            {info.label}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-500">
            <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 text-primary/80">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
              <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.7" />
              <path d="M12 3v6M4.8 16.4l4-2.3M19.2 16.4l-4-2.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            Chauffeur
          </span>
        </div>

        <div className="relative mt-3 flex h-28 items-center justify-center">
          <span className="pointer-events-none absolute h-24 w-44 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative flex h-full w-full items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105">
            <VehicleArt variant={variant} color={p.body} roof={p.roof} />
          </div>
        </div>

        <div className="mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-zinc-300/70 to-transparent" />
      </div>

      {/* Body — name, specs, CTA */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <h3 className={`text-lg font-bold ${INK}`}>{name}</h3>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Chip icon={<SeatIcon />}>{info.seats}</Chip>
          <Chip icon={<BagIcon />}>{info.bags}</Chip>
        </div>

        <span className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(11,180,181,0.9)] transition-colors group-hover:bg-[#0a9fa0]">
          Enquire on WhatsApp
          <ArrowRight />
        </span>
      </div>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CarsPage() {
  return (
    <div className="flex-1 bg-white">
      {/* ============================= HERO ============================= */}
      <section className="relative isolate overflow-hidden pt-36 pb-14 sm:pb-20">
        {/* soft background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-aurora" />
          <div className="absolute left-[15%] top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent" />
        </div>

        <div className="mx-auto w-[90vw] px-6 sm:px-10 lg:px-16">
          <div className="reveal flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Our Fleet
            </span>
          </div>

          <h1
            className={`reveal mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl ${INK}`}
          >
            A car for every
            <br />
            journey, <span className="text-primary">chauffeur-driven.</span>
          </h1>

          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
            From economical sedans to Rolls-Royce flagships and 50-seat coaches —
            a professionally maintained fleet with a driver at the wheel, on your
            schedule.
          </p>

          {/* stat row */}
          <div className="reveal mt-10 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200/70 bg-zinc-200/70 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="bg-white px-5 py-5">
                <p className={`text-2xl font-bold ${INK}`}>{s.value}</p>
                <p className="mt-0.5 text-sm text-zinc-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ SEDAN ============================ */}
      <section className="mx-auto w-[90vw] px-6 py-16 sm:px-10 lg:px-16">
        <SectionHead
          eyebrow="Everyday"
          title="Sedans"
          subtitle="Comfortable, economical rides with a professional chauffeur."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sedans.map((name, i) => (
            <ModelCard key={name} name={name} variant="sedan" index={i} />
          ))}
        </div>
      </section>

      {/* ============================= SUV ============================= */}
      <section className="mx-auto w-[90vw] px-6 py-16 sm:px-10 lg:px-16">
        <SectionHead
          eyebrow="Space & command"
          title="SUVs"
          subtitle="Extra space and command for families and longer journeys."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {suvs.map((name, i) => (
            <ModelCard key={name} name={name} variant="suv" index={i} />
          ))}
        </div>
      </section>

      {/* ============================ LUXURY ============================ */}
      <section className="mx-auto w-[90vw] px-6 py-16 sm:px-10 lg:px-16">
        <SectionHead
          eyebrow="Premium marques"
          title="Luxury Marques"
          subtitle="The world's finest badges — chauffeur-driven, on your schedule."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {luxuryBrands.map((b, i) => (
            <Link
              key={b.brand}
              href={`/cars/${slugify(b.brand)}`}
              className={`${cardBase} p-7`}
            >
              <TopAccent />

              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {b.tag}
                  </p>
                  <h3 className={`mt-1 text-xl font-bold ${INK}`}>{b.brand}</h3>
                  <p className="mt-0.5 text-sm text-zinc-500">
                    {b.models.length} models
                  </p>
                </div>
                <div className="relative flex h-12 w-20 shrink-0 items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                  <VehicleArt
                    variant={b.variant}
                    color={paint(i).body}
                    roof={paint(i).roof}
                  />
                </div>
              </div>

              <span className="mt-7 flex items-center justify-center gap-2 rounded-xl border border-primary/25 bg-primary/5 px-4 py-2.5 text-sm font-semibold text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                View all models
                <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================= ULTRA LUXURY ========================= */}
      <section className="mx-auto w-[90vw] px-6 py-16 sm:px-10 lg:px-16">
        <SectionHead
          eyebrow="By request"
          title="Ultra Luxury"
          subtitle="Flagship motoring, available by request with a dedicated chauffeur."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {ultraLuxury.map((u) => (
            <a
              key={u.brand}
              href={enquire(u.brand)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cardBase} p-7 sm:flex-row sm:items-center sm:gap-7`}
            >
              <TopAccent />

              <div className="relative flex h-20 w-32 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-b from-zinc-50 to-zinc-100/60">
                <ArtGlow />
                <div className="relative flex h-14 w-24 items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                  <VehicleArt variant="sedan" color="#1f2937" roof="#374151" />
                </div>
              </div>

              <div className="mt-5 flex-1 sm:mt-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Flagship
                </p>
                <h3 className={`mt-1 text-2xl font-bold ${INK}`}>{u.brand}</h3>
                <p className="mt-1.5 text-sm text-zinc-500">{u.line}</p>
              </div>

              <span className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(11,180,181,0.9)] transition-colors group-hover:bg-[#0a9fa0] sm:mt-0 sm:shrink-0">
                Reserve
                <ArrowRight />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ========================= LUXURY VANS ========================= */}
      <section className="mx-auto w-[90vw] px-6 py-16 sm:px-10 lg:px-16">
        <SectionHead
          eyebrow="Travel together"
          title="Luxury Vans"
          subtitle="Travel together in comfort — ideal for families and small groups."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {luxuryVans.map((name, i) => (
            <ModelCard key={name} name={name} variant="van" index={i} />
          ))}
        </div>
      </section>

      {/* ============================ BUSES ============================ */}
      <section className="mx-auto w-[90vw] px-6 py-16 pb-28 sm:px-10 lg:px-16">
        <SectionHead
          eyebrow="Group travel"
          title="Buses & Coaches"
          subtitle="From 12 to 50 seats for large groups, tours and events."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {buses.map((name, i) => (
            <ModelCard key={name} name={name} variant="bus" index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
