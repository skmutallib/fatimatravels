import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Shared social preview image, served by `src/app/opengraph-image.png`.
 * Pages that declare their own `openGraph` block replace the parent's entirely,
 * so every page has to pass the image along explicitly.
 */
export const ogImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — chauffeur-driven luxury car rentals in Hyderabad`,
};

type PageSeo = {
  /** Short title for the browser tab; the root layout appends the brand name. */
  title: string;
  /** Longer title used in link previews and search results. */
  socialTitle?: string;
  /** Keep to ~160 characters so Google shows it in full. */
  description: string;
  /** Route path, e.g. "/cars". Used for the canonical and og:url. */
  path: string;
};

/** Builds the per-page canonical + Open Graph + Twitter metadata. */
export function pageMetadata({
  title,
  socialTitle,
  description,
  path,
}: PageSeo): Metadata {
  const shared = { title: socialTitle ?? title, description };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...shared,
      type: "website",
      siteName: siteConfig.name,
      locale: "en_IN",
      url: path,
      images: [ogImage],
    },
    twitter: { ...shared, card: "summary_large_image", images: [ogImage] },
  };
}
