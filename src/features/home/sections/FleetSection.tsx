import Image from "next/image";
import Link from "next/link";

type Car = {
  name: string;
  seats: string;
  transmission: string;
  anchor: string;
  photo: string;
};

const cars: Car[] = [
  { name: "Economy", seats: "4 Seats", transmission: "Manual", anchor: "sedans", photo: "/baleno.png" },
  { name: "Compact", seats: "5 Seats", transmission: "Manual", anchor: "sedans", photo: "/swift-dzire.png" },
  { name: "SUV", seats: "5 Seats", transmission: "Automatic", anchor: "suvs", photo: "/toyota-fortuner.png" },
  { name: "Luxury", seats: "5 Seats", transmission: "Automatic", anchor: "luxury", photo: "/bmw-7-series.png" },
];

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
      <div
        className="scrollbar-none -mx-6 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-12 pt-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:px-0 sm:py-0 lg:grid-cols-4 xl:grid-cols-4"
        style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
      >
        {cars.map((car) => (
          <Link
            key={car.name}
            href={`/cars#${car.anchor}`}
            className="hover-glow reveal group relative flex w-[80vw] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-zinc-200/70 bg-white p-3 shadow-premium sm:w-auto sm:shrink sm:rounded-3xl sm:p-5"
          >
            <h3 className="text-center text-sm font-bold text-[#132238] sm:text-xl">
              {car.name}
            </h3>

            <div className="relative my-3 flex h-16 items-center justify-center overflow-hidden rounded-xl bg-white px-1 sm:my-5 sm:h-24 sm:rounded-2xl sm:px-2">
              <span className="pointer-events-none absolute h-28 w-28 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden transition-transform duration-500 ease-out group-hover:scale-110">
                <Image
                  src={car.photo}
                  alt={car.name}
                  fill
                  sizes="200px"
                  className="scale-150 object-contain"
                />
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
