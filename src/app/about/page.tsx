import type { Metadata } from "next";
import AboutPage from "@/features/about/AboutPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About us",
  socialTitle: "About us — Hyderabad's chauffeured travel operator since 2001",
  description:
    "Fatima Tours and Travels has run chauffeur-driven travel out of Hyderabad since 2001. Our story, our values, and the fleet we drive across Telangana and India.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
