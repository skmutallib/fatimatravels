import Link from "next/link";
import { notFound } from "next/navigation";

import {
  enquire,
  getMarque,
  luxuryBrands,
  paint,
  slugify,
  VehicleArt,
} from "@/features/cars/shared";

export function generateStaticParams() {
  return luxuryBrands.map((b) => ({ slug: slugify(b.brand) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const marque = getMarque(slug);
  return {
    title: marque
      ? `${marque.brand} | Fatima Travels`
      : "Cars | Fatima Travels",
  };
}

export default async function MarquePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const marque = getMarque(slug);
  if (!marque) notFound();

  return (
    <div className="flex-1 bg-white">
      <section className="mx-auto w-[90vw] px-6 pt-32 pb-24 sm:px-10 lg:px-16">
        {/* Back link */}
        <Link
          href="/cars"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-primary"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All cars
        </Link>

        {/* Header */}
        <div className="reveal mt-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {marque.tag}
          </p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight text-[#132238] sm:text-5xl">
            {marque.brand}
          </h1>
          <p className="mt-2 text-zinc-500">
            {marque.models.length} models available — chauffeur-driven, on your schedule.
          </p>
        </div>

        {/* Models — image + title */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {marque.models.map((model, i) => {
            const p = paint(i);
            return (
              <a
                key={model}
                href={enquire(`${marque.brand} ${model}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200/70 bg-white p-5 shadow-premium transition-all duration-500 hover:-translate-y-2 hover:border-primary/30"
              >
                <span className="absolute inset-x-0 top-0 h-0.75 origin-left scale-x-0 bg-linear-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                <div className="relative flex h-28 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-b from-zinc-50 to-zinc-100/60 px-4">
                  <span className="pointer-events-none absolute h-28 w-28 rounded-full bg-primary/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-24 w-full items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                    <VehicleArt variant={marque.variant} color={p.body} roof={p.roof} />
                  </div>
                </div>
                <h3 className="mt-5 text-center text-lg font-bold text-[#132238]">
                  {marque.brand} {model}
                </h3>
                <span className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(11,180,181,0.9)] transition-colors group-hover:bg-[#0a9fa0]">
                  Enquire on WhatsApp
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
                </span>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
