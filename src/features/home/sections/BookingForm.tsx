"use client";

import { useState } from "react";

import DatePicker from "@/components/DatePicker";
import LocationAutocomplete from "@/components/LocationAutocomplete";
import { siteConfig } from "@/lib/site";

type TabKey = "main" | "sightseeing" | "pickup" | "drop";

const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  {
    key: "main",
    label: "City Ride",
    icon: (
      <>
        <circle cx="6" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8.5 19H16a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h7.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    key: "sightseeing",
    label: "Hyderabad Sightseeing",
    icon: (
      <path
        d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    key: "pickup",
    label: "Airport Pickup",
    icon: (
      <path
        d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    key: "drop",
    label: "Airport Drop",
    icon: (
      <path
        d="M2 22l20-7-20-7 4 7-4 7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-zinc-400">
      <path
        d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-zinc-400">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const timeOptions = Array.from({ length: 24 }, (_, hour24) => {
  const period = hour24 < 12 ? "AM" : "PM";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${String(hour12).padStart(2, "0")}:00 ${period}`;
});

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState<TabKey>("main");
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState<Date | null>(() => new Date());
  const [dropoffDate, setDropoffDate] = useState<Date | null>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  });
  const [pickupTime, setPickupTime] = useState("10:00 AM");

  const handlePickupDateChange = (date: Date) => {
    setPickupDate(date);
    setDropoffDate((prev) => {
      if (!prev || prev <= date) {
        const next = new Date(date);
        next.setDate(next.getDate() + 1);
        return next;
      }
      return prev;
    });
  };

  const formatDate = (d: Date | null) =>
    d
      ? d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
      : "";

  const handleSubmit = () => {
    const tripType = tabs.find((t) => t.key === activeTab)?.label ?? "City Ride";
    const lines = [
      "Hi Fatima Travels, I'd like to book a car.",
      "",
      `*Trip Type:* ${tripType}`,
      pickupLocation && `*Pickup Location:* ${pickupLocation}`,
      pickupDate && `*Pickup Date:* ${formatDate(pickupDate)}`,
      pickupTime && `*Pickup Time:* ${pickupTime}`,
      dropoffDate && `*Drop-off Date:* ${formatDate(dropoffDate)}`,
    ].filter(Boolean);

    const wa = siteConfig.whatsapp.replace(/\D/g, "");
    window.open(
      `https://wa.me/${wa}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="relative z-20 -mt-20 px-6 pb-16 sm:-mt-29">
      <div className="mx-auto max-w-7xl rounded-2xl border border-zinc-100 bg-white p-5 shadow-premium sm:p-7">
        {/* Tabs */}
        <div
          className="scrollbar-none flex items-center gap-x-8 overflow-x-auto border-b border-zinc-100 pb-1"
          style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
        >
          {tabs.map((tab) => {
            const active = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`-mb-px flex shrink-0 items-center gap-2 whitespace-nowrap border-b-2 pb-3 text-[15px] font-semibold transition-colors ${
                  active
                    ? "border-primary text-primary"
                    : "border-transparent text-zinc-500 hover:text-zinc-800"
                }`}
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  {tab.icon}
                </svg>
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Fields */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_auto] lg:items-end">
          {/* Pick-up Location */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-500">
              Pick-up Location
            </label>
            <LocationAutocomplete
              value={pickupLocation}
              onChange={setPickupLocation}
              placeholder="Enter city or location"
              className="w-full rounded-lg border border-zinc-200 px-4 py-3 pr-10 text-[15px] text-zinc-800 placeholder:text-zinc-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              icon={
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <LocationIcon />
                </span>
              }
            />
          </div>

          {/* Pick-up Date */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-500">
              Pick-up Date
            </label>
            <DatePicker value={pickupDate} onChange={handlePickupDateChange} minDate={new Date()} />
          </div>

          {/* Pick-up Time */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-500">
              Pick-up Time
            </label>
            <div className="relative">
              <select
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full appearance-none rounded-lg border border-zinc-200 px-4 py-3 pr-10 text-[15px] text-zinc-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {timeOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronIcon />
              </span>
            </div>
          </div>

          {/* Drop-off Date */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-500">
              Drop-off Date
            </label>
            <DatePicker
              value={dropoffDate}
              onChange={setDropoffDate}
              minDate={pickupDate ?? new Date()}
            />
          </div>

          {/* Search button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-lg bg-primary px-8 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#0aa0a1]"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
