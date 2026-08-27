import type { Metadata } from "next";
import ContactPage from "@/features/contact/ContactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  socialTitle: "Contact & booking — call or WhatsApp us 24/7",
  description:
    "Get in touch with Fatima Tours and Travels — call, WhatsApp or send an enquiry to book chauffeur-driven cars across Hyderabad and India. Office in Attapur, open 24/7.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
