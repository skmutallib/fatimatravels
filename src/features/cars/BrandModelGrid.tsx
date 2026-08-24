"use client";

import { useState } from "react";

import { paint, VehicleArt, type Marque } from "@/features/cars/shared";
import BookingModal from "@/features/cars/BookingModal";

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

export default function BrandModelGrid({ marque }: { marque: Marque }) {
  const [selectedCar, setSelectedCar] = useState<string | null>(null);

  return (
    <>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {marque.models.map((model, i) => {
          const p = paint(i);
          const carName = `${marque.brand} ${model}`;
          return (
            <button
              key={model}
              type="button"
              onClick={() => setSelectedCar(carName)}
              className="hover-glow reveal group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200/70 bg-white p-5 text-left shadow-premium"
            >
              <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-b from-zinc-50 to-zinc-100/60 px-4">
                <span className="pointer-events-none absolute h-28 w-28 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-24 w-full items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                  <VehicleArt variant={marque.variant} color={p.body} roof={p.roof} />
                </div>
              </div>
              <h3 className="mt-5 text-center text-lg font-bold text-[#132238]">
                {carName}
              </h3>
              <span className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(11,180,181,0.9)] transition-colors group-hover:bg-[#0a9fa0]">
                Enquire on WhatsApp
                <ArrowRight />
              </span>
            </button>
          );
        })}
      </div>

      <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </>
  );
}
