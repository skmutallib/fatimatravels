import { Car, FileText, KeyRound, MapPin, type LucideIcon } from "lucide-react";

type Step = {
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    num: "1",
    title: "Choose Location",
    desc: "Select your pick-up location and dates.",
    icon: MapPin,
  },
  {
    num: "2",
    title: "Choose Your Car",
    desc: "Browse our fleet and pick the perfect ride.",
    icon: Car,
  },
  {
    num: "3",
    title: "Book & Pay",
    desc: "Complete your booking securely online.",
    icon: FileText,
  },
  {
    num: "4",
    title: "Pick Up & Drive",
    desc: "Pick up your car and enjoy your journey!",
    icon: KeyRound,
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto w-[90vw] px-6 py-16 sm:px-10 lg:px-16">
      {/* Header */}
      <div className="reveal text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#132238]">
          How It Works
        </h2>
        <p className="mt-2 text-zinc-500">
          Renting a car with Fatima Travels is quick and simple.
        </p>
      </div>

      {/* Steps */}
      <div className="relative mt-14 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0">
        {/* continuous dashed connector behind the badges */}
        <span className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-9 hidden border-t border-dashed border-zinc-300 lg:block" />

        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="reveal flex flex-col items-center px-4 text-center"
            >
              {/* number + icon */}
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-zinc-200">
                  {step.num}
                </span>
                <span className="relative z-10 flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-[#e2f5f5] text-primary">
                  <Icon className="h-8 w-8" strokeWidth={1.75} />
                </span>
              </div>

              {/* text */}
              <div className="mt-5 max-w-[220px]">
                <h3 className="text-lg font-bold text-[#132238]">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-zinc-500">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
