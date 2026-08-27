import type { Metadata } from "next";
import HomePage from "@/features/home/HomePage";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `${siteConfig.name} | Luxury Car Rentals in Hyderabad`,
  description: siteConfig.description,
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
