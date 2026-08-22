"use client";

import { useState } from "react";
import { HelpCircle, Minus, Plus } from "lucide-react";

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  {
    q: "Does every booking come with a driver?",
    a: "Yes. Every Fatima car is chauffeur-driven — we do not offer self-drive rentals. A professional, verified driver is always included, so you can simply sit back and enjoy the ride.",
  },
  {
    q: "Are your drivers experienced and verified?",
    a: "Absolutely. All our chauffeurs are licensed, background-verified and trained in safe, courteous driving. Many know the local routes across Hyderabad and Telangana in and out.",
  },
  {
    q: "Will the car and driver come to my location?",
    a: "Yes. Just share your pickup address when booking and your driver will arrive at your doorstep on time, ready to take you wherever you need to go.",
  },
  {
    q: "Are all Fatima vehicles inspected before every trip?",
    a: "Yes. Every vehicle undergoes a full safety inspection and professional cleaning before each trip, so you always travel in a car that's spotless and road-ready.",
  },
  {
    q: "How do I book a car with a driver?",
    a: "It's simple — pick your car, choose your date, pickup point and destination, and confirm your booking online or over WhatsApp. Your assigned chauffeur's details are shared before the trip.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mx-auto w-[90vw] px-6 py-16 sm:px-10 lg:px-16">
      {/* Header */}
      <div className="reveal text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          <HelpCircle className="h-3.5 w-3.5" />
          FAQ&apos;s
        </span>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#132238] sm:text-5xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="reveal mx-auto mt-12 max-w-3xl">
        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = i === open;
            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-2xl transition-colors ${
                  isOpen ? "bg-primary text-white" : "bg-zinc-100"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`font-semibold ${
                      isOpen ? "text-white" : "text-[#132238]"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                      isOpen ? "bg-white/15 text-white" : "text-zinc-500"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-white/80">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
