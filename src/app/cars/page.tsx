import type { Metadata } from "next";
import CarsPage from "@/features/cars/CarsPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cars",
  socialTitle: "Our fleet — luxury cars, SUVs, tempo travellers & buses",
  description:
    "Browse the Fatima Travels fleet: Swift Dzire and Innova to Mercedes, BMW, Audi and Range Rover, plus 12–50 seater tempo travellers and buses. Chauffeur-driven, 24/7.",
  path: "/cars",
});

export default function Page() {
  return <CarsPage />;
}
