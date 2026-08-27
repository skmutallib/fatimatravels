import type { Metadata } from "next";
import ServicesPage from "@/features/services/ServicesPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  socialTitle:
    "Services — airport transfers, tours, weddings & corporate travel",
  description:
    "Airport pickups, city tours, outstation and all-India trips, wedding fleets and corporate travel — one chauffeured operator, available 24 hours a day in Hyderabad.",
  path: "/services",
});

export default function Page() {
  return <ServicesPage />;
}
