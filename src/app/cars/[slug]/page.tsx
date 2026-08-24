import Link from "next/link";
import { notFound } from "next/navigation";

import { getMarque, luxuryBrands, slugify } from "@/features/cars/shared";
import BrandModelGrid from "@/features/cars/BrandModelGrid";

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
            {marque.models.length} models available, chauffeur-driven, on your schedule.
          </p>
        </div>

        {/* Models — image + title */}
        <BrandModelGrid marque={marque} />
      </section>
    </div>
  );
}
