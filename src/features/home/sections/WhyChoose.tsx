import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { CalendarCheck, Check, Headphones, Receipt, ShieldCheck, Undo2 } from "lucide-react";

const reasons = [
  { label: "No Hidden Charges", icon: Receipt },
  { label: "Flexible Rental Options", icon: CalendarCheck },
  { label: "Well-Maintained Cars", icon: ShieldCheck },
  { label: "24/7 Customer Support", icon: Headphones },
  { label: "Easy Cancellation", icon: Undo2 },
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
  photo: string;
  featured?: boolean;
};

const packages: Pkg[] = [
  {
    name: "Corporate Travel",
    detail: "B2B",
    desc: "Monthly billing, dedicated cars, executive chauffeurs.",
    accent: "#132238",
    icon: <BriefcaseIcon />,
    photo: "/innova-crysta.png",
  },
  {
    name: "Wedding Car Rental",
    detail: "Signature",
    desc: "Decorated luxury sedans, SUVs & convertibles.",
    accent: "#b8892f",
    icon: <RingsIcon />,
    photo: "/rolls-royce-phantom.png",
    featured: true,
  },
  {
    name: "Railway Station Pick & Drop",
    detail: "Hyderabad",
    desc: "Secunderabad · Nampally · Kacheguda, on the dot.",
    accent: "#0bb4b5",
    icon: <TrainIcon />,
    photo: "/swift-dzire.png",
  },
];

export default function WhyChoose() {
  return (
    <section className="mx-auto w-[90vw] px-6 py-16 sm:px-10 lg:px-16">
      <div className="flex flex-col gap-16">
        {/* TOP — Why choose */}
        <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-primary via-[#0aa6a7] to-[#088f90] px-6 py-12 shadow-premium sm:px-10 sm:py-16 lg:px-14">
          {/* ambient corner glows */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#f5d485]/20 blur-3xl" />

          <div className="relative grid gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            {/* Copy + reasons */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-white/70" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                  Our Advantage
                </span>
              </div>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Why Choose Fatima Travels?
              </h2>
              <p className="mt-4 max-w-md text-white/75">
                Premium service standards built around comfort, safety, and
                complete transparency, on every trip, every time.
              </p>

              <ul className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {reasons.map((reason, i) => {
                  const Icon = reason.icon;
                  const isLast = i === reasons.length - 1;
                  return (
                    <li
                      key={reason.label}
                      className={`group flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white hover:shadow-[0_14px_30px_-18px_rgba(0,0,0,0.35)] ${
                        isLast ? "sm:col-span-2" : ""
                      }`}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <span className="text-[15px] font-medium text-white transition-colors duration-300 group-hover:text-[#132238]">
                        {reason.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Image + floating stat badges */}
            <div className="relative mx-auto hidden aspect-square w-full max-w-[420px] lg:block">
              <div className="absolute inset-6 rounded-full bg-white/20 blur-3xl" />
              <div className="relative h-full w-full">
                <Image
                  src="/why-choose-city.png"
                  alt="City skyline with greenery"
                  fill
                  sizes="420px"
                  className="object-contain drop-shadow-xl"
                />
              </div>

              <div className="absolute -left-4 top-6 flex animate-float-slow items-center gap-2 rounded-2xl border border-zinc-200/70 bg-white/90 px-4 py-2.5 shadow-premium backdrop-blur-md sm:-left-8">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-500">
                  <StarIcon />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-[#132238]">4.9/5</div>
                  <div className="text-[11px] text-zinc-500">Google Rating</div>
                </div>
              </div>

              <div
                className="absolute -right-4 bottom-8 flex animate-float-slow items-center gap-2 rounded-2xl border border-zinc-200/70 bg-white/90 px-4 py-2.5 shadow-premium backdrop-blur-md sm:-right-8"
                style={{ animationDelay: "1.2s" }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-[#132238]">18,546+</div>
                  <div className="text-[11px] text-zinc-500">Trips Completed</div>
                </div>
              </div>
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
                className={`hover-glow group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200/70 bg-white p-7 shadow-premium ${
                  pkg.featured ? "pt-12 lg:-translate-y-3 ring-1 ring-[#b8892f]/15" : ""
                }`}
                style={{ "--accent": pkg.accent, "--glow-color": `${pkg.accent}73` } as CSSProperties}
              >
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

                <div className="relative my-6 flex h-28 items-center justify-center">
                  <div
                    className="absolute h-5 w-28 rounded-full blur-lg"
                    style={{ backgroundColor: pkg.accent, opacity: 0.18 }}
                  />
                  <div
                    className="relative h-full w-full animate-float-slow"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <Image
                      src={pkg.photo}
                      alt={pkg.name}
                      fill
                      sizes="220px"
                      className="object-contain"
                    />
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
