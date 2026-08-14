import { Quote, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  avatarBg: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "The booking process was so easy and the car was in perfect condition. Highly recommend Fatima Travels!",
    name: "Sarah J.",
    location: "New York, USA",
    avatarBg: "#fde68a",
  },
  {
    quote:
      "Great prices, friendly service, and no hidden fees. My go-to car rental service in the city.",
    name: "James T.",
    location: "Chicago, USA",
    avatarBg: "#bae6fd",
  },
  {
    quote:
      "I rented an SUV for a family trip and had an amazing experience from start to finish.",
    name: "Priya K.",
    location: "San Francisco, USA",
    avatarBg: "#fbcfe8",
  },
  {
    quote:
      "Smooth pickup and drop-off. The staff was courteous and the car was spotless. Will book again!",
    name: "David R.",
    location: "Austin, USA",
    avatarBg: "#c7d2fe",
  },
  {
    quote:
      "Best rental experience I've had. Transparent pricing and a fantastic fleet to choose from.",
    name: "Aisha M.",
    location: "Seattle, USA",
    avatarBg: "#a7f3d0",
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="relative mr-6 flex w-[340px] shrink-0 flex-col rounded-2xl bg-primary p-6 text-white shadow-premium sm:w-[380px]">
      {/* Quote icon */}
      <Quote className="absolute right-6 top-6 h-8 w-8 fill-white/15 text-white/15" />

      {/* Stars */}
      <div className="flex gap-1 text-amber-300">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
        ))}
      </div>

      {/* Quote */}
      <p className="mt-4 flex-1 leading-relaxed text-white/95">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-6 flex items-center gap-3">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-[#132238]"
          style={{ backgroundColor: t.avatarBg }}
        >
          {t.name.charAt(0)}
        </span>
        <div>
          <div className="font-bold text-white">{t.name}</div>
          <div className="text-sm text-white/70">{t.location}</div>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  // Duplicated once so the marquee loops seamlessly at translateX(-50%)
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="w-full py-16">
      {/* Header */}
      <div className="reveal mx-auto w-[90vw] px-6 text-center sm:px-10 lg:px-16">
        <h2 className="text-4xl font-bold tracking-tight text-[#132238]">
          What Our Customers Say
        </h2>
        <p className="mt-2 text-zinc-500">Real people. Real experiences.</p>
      </div>

      {/* Marquee */}
      <div className="group reveal relative mt-12 overflow-x-clip py-4">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />

        <div className="flex w-max animate-marquee py-2 group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
