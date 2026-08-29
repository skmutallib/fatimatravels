import BookingForm from "@/features/home/sections/BookingForm";
import BusesSection from "@/features/home/sections/BusesSection";
import CtaContact from "@/features/home/sections/CtaContact";
import FaqSection from "@/features/home/sections/FaqSection";
import FleetSection from "@/features/home/sections/FleetSection";
import Hero from "@/features/home/sections/Hero";
import HowItWorks from "@/features/home/sections/HowItWorks";
import OfficeLocation from "@/features/home/sections/OfficeLocation";
import StatsSection from "@/features/home/sections/StatsSection";
import Testimonials from "@/features/home/sections/Testimonials";
import WhyChoose from "@/features/home/sections/WhyChoose";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BookingForm />
      <StatsSection />
      <FleetSection />
      <BusesSection />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <OfficeLocation />
      <CtaContact />
      <FaqSection />
    </>
  );
}
