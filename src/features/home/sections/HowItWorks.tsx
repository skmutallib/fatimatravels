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
    title: "Drive Comes to Your Location",
    desc: "We bring the car to you, just drive and enjoy your journey!",
    icon: KeyRound,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto w-[90vw] scroll-mt-28 px-6 py-16 sm:px-10 lg:px-16">
      {/* Header */}
      <div className="reveal text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[#132238]">
          How It Works
        </h2>
        <p className="mt-2 text-zinc-500">
          Renting a car with Fatima Travels is quick and simple.
        </p>
      </div>

      {/* Steps */}
      <div className="relative mt-14 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-0">
        {/* curved road connector behind the badges */}
        <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-9 hidden h-24 -translate-y-1/2 lg:block">
          <svg viewBox="0 0 1000 150" preserveAspectRatio="none" className="h-full w-full overflow-visible">
            {/* soft shadow under the road for depth */}
            <path
              d="M0,78 C83,23 250,23 333,78 C416,133 583,133 666,78 C750,23 916,23 1000,78"
              fill="none"
              stroke="#0f172a"
              strokeOpacity="0.08"
              strokeWidth="24"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            {/* asphalt */}
            <path
              d="M0,75 C83,20 250,20 333,75 C416,130 583,130 666,75 C750,20 916,20 1000,75"
              fill="none"
              stroke="#8a93a3"
              strokeWidth="22"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            {/* lane markings — standard white dashes */}
            <path
              d="M0,75 C83,20 250,20 333,75 C416,130 583,130 666,75 C750,20 916,20 1000,75"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              strokeDasharray="26 20"
              strokeLinecap="butt"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.num} className="contents">
              {/* mobile-only vertical road segment connecting this step to the previous one */}
              {idx > 0 && (
                <div className="flex justify-center sm:hidden" aria-hidden>
                  <svg
                    width="36"
                    height="48"
                    viewBox="0 0 36 48"
                    className="overflow-visible"
                  >
                    <path
                      d="M18,0 C2,10 34,20 18,28 C6,34 18,36 18,48"
                      fill="none"
                      stroke="#8a93a3"
                      strokeWidth="9"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M18,0 C2,10 34,20 18,28 C6,34 18,36 18,48"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      strokeDasharray="7 6"
                      strokeLinecap="butt"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              )}

              <div className="reveal flex flex-col items-center px-4 text-center">
                {/* number + icon */}
                <div className="flex items-start gap-3">
                  <span className="relative z-10 -mt-1 flex h-9 min-w-9 items-center justify-center rounded-full bg-white px-2 text-base font-bold text-primary shadow-[0_4px_10px_-2px_rgba(15,23,42,0.25)] ring-2 ring-primary/15">
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
            </div>
          );
        })}
      </div>
    </section>
  );
}
