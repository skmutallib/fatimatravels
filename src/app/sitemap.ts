import type { MetadataRoute } from "next";
import { luxuryBrands, slugify } from "@/features/cars/shared";
import { siteUrl } from "@/lib/site";

const routes = [
  { path: "/", priority: 1 },
  { path: "/cars", priority: 0.9 },
  { path: "/services", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
  { path: "/about", priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const brands = luxuryBrands.map((brand) => ({
    url: `${siteUrl}/cars/${slugify(brand.brand)}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...pages, ...brands];
}
