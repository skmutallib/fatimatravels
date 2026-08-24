import Link from "next/link";

type Car = {
  name: string;
  seats: string;
  transmission: string;
  color: string;
  roof: string;
};

const cars: Car[] = [
  { name: "Economy", seats: "4 Seats", transmission: "Manual", color: "#4fc3c4", roof: "#8fd8d9" },
  { name: "Compact", seats: "5 Seats", transmission: "Manual", color: "#f97316", roof: "#fb9a52" },
  { name: "SUV", seats: "5 Seats", transmission: "Automatic", color: "#cbd5e1", roof: "#e2e8f0" },
  { name: "Luxury", seats: "5 Seats", transmission: "Automatic", color: "#1f2937", roof: "#374151" },
];

function CarIllustration({ color, roof }: { color: string; roof: string }) {
  return (
    <svg viewBox="0 0 220 110" fill="none" className="h-full w-full">
      {/* shadow */}
      <ellipse cx="110" cy="97" rx="82" ry="7" fill="#000" opacity="0.08" />
      {/* body */}
      <path
        d="M14 74c-3 0-5-2-5-5v-6c0-6 4-11 10-12l24-4 20-16c3-2 6-3 10-3h44c5 0 10 2 14 6l14 13 26 5c7 1 12 7 12 14v3c0 3-2 5-5 5H14Z"
        fill={color}
      />
      {/* roof / window band */}
      <path
        d="M76 30c2-2 5-3 8-3h40c4 0 8 2 11 5l11 11H62l14-13Z"
        fill={roof}
      />
      {/* window divider */}
      <path d="M104 27v16" stroke={color} strokeWidth="3" />
      {/* wheels */}
      <circle cx="62" cy="80" r="16" fill="#1f2937" />
      <circle cx="62" cy="80" r="7" fill="#9ca3af" />
      <circle cx="162" cy="80" r="16" fill="#1f2937" />
      <circle cx="162" cy="80" r="7" fill="#9ca3af" />
    </svg>
  );
}

function SeatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-zinc-400">
      <circle cx="12" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5.5 20a6.5 6.5 0 0 1 13 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-zinc-400">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FleetSection() {
  return (
    <section className="w-[90vw] mx-auto px-6 py-16 sm:px-10 lg:px-16">
      {/* Header */}
      <div className="reveal max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Our Fleet
          </span>
        </div>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#132238] sm:text-4xl">
          Explore Our Fleet
        </h2>
        <p className="mt-2 text-zinc-500">
          Choose the perfect car for your city adventure.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-8 lg:grid-cols-4 xl:grid-cols-4">
        {cars.map((car) => (
          <Link
            key={car.name}
            href="/cars"
            className="hover-glow reveal group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/70 bg-white p-3 shadow-premium sm:rounded-3xl sm:p-5"
          >
            <h3 className="text-center text-sm font-bold text-[#132238] sm:text-xl">
              {car.name}
            </h3>

            <div className="relative my-3 flex h-16 items-center justify-center overflow-hidden rounded-xl bg-linear-to-b from-zinc-50 to-zinc-100/60 px-1 sm:my-5 sm:h-24 sm:rounded-2xl sm:px-2">
              <span className="pointer-events-none absolute h-28 w-28 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full w-full items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                <CarIllustration color={car.color} roof={car.roof} />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] text-zinc-500 sm:gap-x-5 sm:text-sm">
              <span className="flex items-center gap-1 whitespace-nowrap sm:gap-1.5">
                <SeatIcon />
                {car.seats}
              </span>
              <span className="flex items-center gap-1 whitespace-nowrap sm:gap-1.5">
                <GearIcon />
                {car.transmission}
              </span>
            </div>

            <span className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-primary px-2 py-2 text-xs font-semibold text-white shadow-[0_10px_24px_-12px_rgba(11,180,181,0.9)] transition-colors group-hover:bg-[#0a9fa0] sm:mt-6 sm:gap-2 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm">
              View
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
