import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const reasons = [
  "No Hidden Charges",
  "Flexible Rental Options",
  "Well-Maintained Cars",
  "24/7 Customer Support",
  "Easy Cancellation",
];

type Pkg = {
  name: string;
  detail: string;
  price: number;
  desc: string;
};

const packages: Pkg[] = [
  {
    name: "Corporate Travel",
    detail: "B2B",
    price: 79,
    desc: "Monthly billing, dedicated cars, executive chauffeurs.",
  },
  {
    name: "Wedding Car Rental",
    detail: "Signature",
    price: 199,
    desc: "Decorated luxury sedans, SUVs & convertibles.",
  },
  {
    name: "Railway Station Pick & Drop",
    detail: "Hyderabad",
    price: 599,
    desc: "Secunderabad · Nampally · Kacheguda — on the dot.",
  },
];

function PackageCar() {
  return (
    <svg viewBox="0 0 200 90" fill="none" className="h-full w-full">
      <ellipse cx="100" cy="78" rx="82" ry="6" fill="#000" opacity="0.1" />
      <path
        d="M12 58c-3 0-5-2-5-5v-4c0-6 4-10 9-11l22-4 16-13c3-2 6-3 9-3h40c4 0 9 2 12 5l12 11 23 4c6 1 11 6 11 12v3c0 3-2 5-5 5H12Z"
        fill="#1f2937"
      />
      <path d="M64 24c2-2 4-3 7-3h34c3 0 6 1 9 4l10 10H55l9-11Z" fill="#4b5563" />
      <path d="M92 22v13" stroke="#1f2937" strokeWidth="3" />
      <circle cx="58" cy="63" r="13" fill="#111" />
      <circle cx="58" cy="63" r="5" fill="#9ca3af" />
      <circle cx="146" cy="63" r="13" fill="#111" />
      <circle cx="146" cy="63" r="5" fill="#9ca3af" />
    </svg>
  );
}

export default function WhyChoose() {
  return (
    <section className="mx-auto w-[90vw] px-6 py-16 sm:px-10 lg:px-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
        {/* LEFT — Why choose */}
        <div className="reveal">
          <h2 className="text-4xl font-bold tracking-tight text-[#132238]">
            Why Choose Fatima Travels?
          </h2>

          <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:gap-8">
            <ul className="w-full space-y-5 sm:w-auto">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-3.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-base text-zinc-700">{reason}</span>
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

        {/* RIGHT — Packages */}
        <div className="reveal">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-[#132238]">
                Popular Rental Packages
              </h2>
              <p className="mt-1.5 text-zinc-500">
                Great deals for every kind of trip.
              </p>
            </div>
            <Link
              href="/services"
              className="group flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[15px] font-semibold text-primary"
            >
              View All Packages
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="flex flex-col rounded-3xl border border-zinc-100 bg-white p-7 shadow-premium"
              >
                <h3 className="text-lg font-bold text-[#132238]">{pkg.name}</h3>
                <p className="mt-1.5 text-base text-zinc-500">{pkg.detail}</p>

                <div className="my-7 flex items-end justify-between gap-2">
                  <div className="h-20 w-32">
                    <PackageCar />
                  </div>
                  <div className="text-right leading-none">
                    <div className="text-3xl font-bold text-primary">
                      ₹{pkg.price}
                    </div>
                    <div className="mt-1.5 text-sm text-zinc-400">Total</div>
                  </div>
                </div>

                <p className="mt-auto text-base leading-relaxed text-zinc-500">
                  {pkg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
