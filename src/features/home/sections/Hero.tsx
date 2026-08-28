import Image from "next/image";

const features = [
  {
    title: "Easy",
    subtitle: "Booking",
    icon: (
      <path
        d="M8 2v3M16 2v3M3.5 8.5h17M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v12A1.5 1.5 0 0 1 19 20.5H5A1.5 1.5 0 0 1 3.5 19V7A1.5 1.5 0 0 1 5 5.5ZM9 13.5l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "No",
    subtitle: "Hidden Fees",
    icon: (
      <path
        d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3ZM9.5 12l2 2 3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "24/7",
    subtitle: "Support",
    icon: (
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen w-screen overflow-hidden sm:h-[90vh] sm:min-h-0">
      {/* Mobile: photographic background */}
      <Image
        src="/herobackground-mobile.png"
        alt="Fleet of rental cars in front of Charminar, Hyderabad"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[65%_center] sm:hidden"
      />

      {/* Desktop: photographic background */}
      <Image
        src="/herobackground-hyderabad.png"
        alt="Fleet of rental cars in front of a city skyline"
        fill
        priority
        sizes="100vw"
        className="-z-20 hidden object-cover object-right sm:block"
      />
      <div className="flex h-full w-full items-center px-6 pt-32 pb-16 sm:px-30 sm:py-0">
        <div className="max-w-2xl">
          <h1 className="text-[2.75rem] font-extrabold leading-[1.08] tracking-tight text-[#132238] sm:text-6xl sm:leading-[1.05]">
            Move Around
            <br />
            Your City,
            <br />
            <span className="text-primary">Your Way.</span>
          </h1>

          <p className="mt-5 max-w-[19rem] text-[15px] leading-relaxed text-zinc-600 sm:mt-8 sm:max-w-none sm:text-lg">
            Flexible car rentals for every journey.
            <br />
            Daily, weekly, or monthly &ndash; you choose.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-3.5 gap-y-3 sm:mt-8 sm:gap-x-8">
            {features.map((feature) => (
              <li key={feature.subtitle} className="flex items-center gap-1.5 sm:gap-2.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary sm:h-10 sm:w-10">
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 sm:h-6 sm:w-6">
                    {feature.icon}
                  </svg>
                </span>
                <span className="text-[11px] font-semibold leading-tight text-[#132238] sm:text-[14px]">
                  {feature.title}
                  <br />
                  {feature.subtitle}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
