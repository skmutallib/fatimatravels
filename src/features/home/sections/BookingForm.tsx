"use client";

import { useState } from "react";

type TabKey = "daily" | "weekly" | "monthly" | "airport";

const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  {
    key: "daily",
    label: "Daily",
    icon: (
      <path
        d="M8 2v3M16 2v3M3.5 8.5h17M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v12A1.5 1.5 0 0 1 19 20.5H5A1.5 1.5 0 0 1 3.5 19V7A1.5 1.5 0 0 1 5 5.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    key: "weekly",
    label: "Weekly",
    icon: (
      <path
        d="M5 16l1.2-3.6A2 2 0 0 1 8.1 11h7.8a2 2 0 0 1 1.9 1.4L19 16m-14 0h14m-14 0v2.5M19 16v2.5M7 16.5v.01M17 16.5v.01M6 11l1-3a2 2 0 0 1 1.9-1.4h6.2A2 2 0 0 1 17 8l1 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    key: "monthly",
    label: "Monthly",
    icon: (
      <path
        d="M8 2v3M16 2v3M3.5 8.5h17M5 5.5h14A1.5 1.5 0 0 1 20.5 7v12A1.5 1.5 0 0 1 19 20.5H5A1.5 1.5 0 0 1 3.5 19V7A1.5 1.5 0 0 1 5 5.5ZM7.5 12h2m5 0h2m-9 4h2m5 0h2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    key: "airport",
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

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-zinc-400">
      <path
        d="M8 2v3M16 2v3M3.5 8.5h17M5 5.5h14A1.5 1.5 0 0 1 20.5 7v12A1.5 1.5 0 0 1 19 20.5H5A1.5 1.5 0 0 1 3.5 19V7A1.5 1.5 0 0 1 5 5.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

const timeOptions = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState<TabKey>("daily");

  return (
    <section className="relative z-20 -mt-20 px-6 pb-16 sm:-mt-29">
      <div className="mx-auto max-w-7xl rounded-2xl border border-zinc-100 bg-white p-5 shadow-premium sm:p-7">
        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 border-b border-zinc-100 pb-1">
          {tabs.map((tab) => {
            const active = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`-mb-px flex items-center gap-2 border-b-2 pb-3 text-[15px] font-semibold transition-colors ${
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
            <div className="relative">
              <input
                type="text"
                placeholder="Enter city or location"
                className="w-full rounded-lg border border-zinc-200 px-4 py-3 pr-10 text-[15px] text-zinc-800 placeholder:text-zinc-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <LocationIcon />
              </span>
            </div>
          </div>

          {/* Pick-up Date */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-500">
              Pick-up Date
            </label>
            <div className="relative">
              <input
                type="text"
                defaultValue="May 24, 2025"
                className="w-full rounded-lg border border-zinc-200 px-4 py-3 pr-10 text-[15px] text-zinc-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <CalendarIcon />
              </span>
            </div>
          </div>

          {/* Pick-up Time */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-500">
              Pick-up Time
            </label>
            <div className="relative">
              <select
                defaultValue="10:00 AM"
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
            <div className="relative">
              <input
                type="text"
                defaultValue="May 25, 2025"
                className="w-full rounded-lg border border-zinc-200 px-4 py-3 pr-10 text-[15px] text-zinc-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <CalendarIcon />
              </span>
            </div>
          </div>

          {/* Search button */}
          <button
            type="button"
            className="rounded-lg bg-primary px-8 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#0aa0a1]"
          >
            Search Cars
          </button>
        </div>
      </div>
    </section>
  );
}
