"use client";

import { useState } from "react";
import Image from "next/image";

import { paint, VehicleArt, type Marque } from "@/features/cars/shared";
import BookingModal from "@/features/cars/BookingModal";

const modelPhotos: Record<string, string> = {
  "Mercedes-Benz S-Class": "/mercedes-s-class.png",
  "Mercedes-Benz E-Class": "/mercedes-e-class.png",
  "Mercedes-Benz GLE": "/mercedes-gle.png",
  "Mercedes-Benz GLS": "/mercedes-gls.png",
  "BMW 5 Series": "/bmw-5-series.png",
  "BMW 3 Series": "/bmw-3-series.png",
  "BMW 7 Series": "/bmw-7-series.png",
  "BMW X1": "/bmw-x1.png",
  "BMW X3": "/bmw-x3.png",
  "BMW X5": "/bmw-x5.png",
  "BMW X7": "/bmw-x7.png",
  "Audi A4": "/audi-a4.png",
  "Audi A6": "/audi-a6.png",
  "Audi A8": "/audi-a8.png",
  "Audi Q3": "/audi-q3.png",
  "Audi Q5": "/audi-q5.png",
  "Audi Q7": "/audi-q7.png",
  "Audi Q8": "/audi-q8.png",
  "Jaguar XF": "/jaguar-xf.png",
  "Jaguar XJL": "/jaguar-xjl.png",
  "Volvo S90": "/volvo-s90.png",
  "Volvo XC90": "/volvo-xc90.png",
  "Lexus ES 300h": "/lexus-es300h.png",
  "Lexus LX 600": "/lexus-lx600.png",
  "Range Rover": "/range-rover.png",
};

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
          const carName = model === marque.brand ? model : `${marque.brand} ${model}`;
          const photo = modelPhotos[carName];
          return (
            <button
              key={model}
              type="button"
              onClick={() => setSelectedCar(carName)}
              className="hover-glow reveal group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200/70 bg-white p-5 text-left shadow-premium"
            >
              <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-b from-zinc-50 to-zinc-100/60 px-4">
                <span className="pointer-events-none absolute h-28 w-28 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-24 w-full items-center justify-center overflow-hidden transition-transform duration-500 ease-out group-hover:scale-110">
                  {photo ? (
                    <Image src={photo} alt={carName} fill sizes="320px" className="scale-150 object-contain" />
                  ) : (
                    <VehicleArt variant={marque.variant} color={p.body} roof={p.roof} />
                  )}
                </div>
              </div>
              <h3 className="mt-5 text-center text-lg font-bold text-[#132238]">
                {carName}
              </h3>
              <span className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(11,180,181,0.9)] transition-colors group-hover:bg-[#0a9fa0]">
                Book Now
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
