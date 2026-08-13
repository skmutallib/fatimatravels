import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

const MAP_QUERY =
  "Fatima tours and travels, Pillar Number 143, Near Golden Palace Hotel, Attapur, Hyderabad, Telangana 500048";
const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(
  MAP_QUERY,
)}&z=15&output=embed`;
const DIRECTIONS_URL = siteConfig.directionsUrl;

const ADDRESS = siteConfig.address;
const PHONE = siteConfig.phone;
const HOURS = siteConfig.hours;

export default function OfficeLocation() {
  return (
    <section className="mx-auto w-[90vw] px-6 py-16 sm:px-10 lg:px-16">
      {/* Header */}
      <div className="reveal text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#132238]">
          Visit Our Office
        </h2>
        <p className="mt-2 text-zinc-500">
          Find us on the map and drop by anytime.
        </p>
      </div>

      {/* Map + overlay cards */}
      <div className="reveal relative mt-12 overflow-hidden rounded-3xl shadow-lg">
        {/* Live map background */}
        <iframe
          title="Fatima Tours and Travels location"
          src={MAP_EMBED}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />

        {/* Cards */}
        <div className="relative z-10 flex min-h-[440px] flex-col justify-end gap-5 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
          {/* Left: phone + hours */}
          <div className="flex flex-col gap-4 sm:w-[300px]">
            <div className="flex items-center gap-4 rounded-2xl bg-primary p-4 text-white shadow-lg">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-medium text-white/70">Phone</div>
                <div className="font-semibold text-white">{PHONE}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-primary p-4 text-white shadow-lg">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-medium text-white/70">
                  Operating hours
                </div>
                <div className="font-semibold text-white">{HOURS}</div>
              </div>
            </div>
          </div>

          {/* Right: address (dark card) */}
          <div className="rounded-2xl bg-[#1b2635] p-6 text-white shadow-xl sm:max-w-md sm:flex-1">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-medium text-zinc-400">Address</div>
                <p className="mt-0.5 leading-relaxed text-zinc-100">{ADDRESS}</p>
              </div>
            </div>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 pl-[60px] text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:text-white"
            >
              Get Directions
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
