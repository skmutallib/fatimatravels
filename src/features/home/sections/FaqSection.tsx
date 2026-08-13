"use client";

import { useState } from "react";
import Link from "next/link";
import { HelpCircle, Minus, MessageCircle, Plus } from "lucide-react";

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  {
    q: "Are all Fatima vehicles inspected before every rental?",
    a: "Yes. Every Fatima vehicle undergoes a full safety inspection and professional cleaning before each trip, so you always drive away in a car that's spotless and road-ready.",
  },
  {
    q: "Do you require a deposit or hold on a credit card?",
    a: "For most self-drive bookings we place a small refundable security hold that's released automatically once the car is returned in good condition. Chauffeur-driven trips usually need no deposit at all.",
  },
  {
    q: "Do you offer electric or hybrid cars?",
    a: "Yes. Our fleet includes fuel-efficient hybrid and electric options — just filter by 'Electric' when choosing your car, or ask our team for the greenest ride available.",
  },
  {
    q: "Can I return the car to a different location?",
    a: "Absolutely. One-way rentals are available across Telangana and major cities — select a different drop-off point at checkout and we'll handle the rest (a small one-way fee may apply).",
  },
  {
    q: "How do I unlock or check in to my rental car?",
    a: "It's contactless. After booking you'll receive a digital key and check-in link in your confirmation — unlock the car right from your phone, or simply meet our chauffeur at the agreed pickup point.",
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
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#132238] sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="reveal mt-12 grid items-start gap-8 lg:grid-cols-[1.7fr_1fr]">
        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = i === open;
            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-2xl transition-colors ${
                  isOpen ? "bg-[#132238] text-white" : "bg-zinc-100"
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

        {/* Still have questions */}
        <div className="rounded-2xl bg-zinc-100 p-7">
          <h3 className="text-xl font-bold text-[#132238]">
            Still Have Questions?
          </h3>
          <p className="mt-3 leading-relaxed text-zinc-500">
            Got something on your mind? Visit our Help Center for quick answers or
            chat with our support team live to get personalized assistance.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide text-[#132238] shadow-sm transition-colors hover:bg-primary hover:text-white"
          >
            <MessageCircle className="h-4 w-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
