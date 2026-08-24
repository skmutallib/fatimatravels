"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function startOfDay(d: Date) {
  const c = new Date(d);
  c.setHours(0, 0, 0, 0);
  return c;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatDisplay(d: Date) {
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

type DatePickerProps = {
  value: Date | null;
  onChange: (date: Date) => void;
  minDate?: Date | null;
  placeholder?: string;
};

export default function DatePicker({ value, onChange, minDate, placeholder = "Select date" }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(() => value ?? new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const openPicker = () => {
    setViewMonth(value ?? new Date());
    setOpen(true);
  };

  const today = startOfDay(new Date());
  const min = minDate ? startOfDay(minDate) : null;

  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const startWeekday = firstOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells: { date: Date; outside: boolean }[] = [];
  for (let i = 0; i < startWeekday; i++) {
    const d = daysInPrevMonth - startWeekday + 1 + i;
    cells.push({ date: new Date(year, month - 1, d), outside: true });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, month, d), outside: false });
  }
  let trailing = 1;
  while (cells.length < 42) {
    cells.push({ date: new Date(year, month + 1, trailing), outside: true });
    trailing += 1;
  }

  const select = (date: Date) => {
    if (min && date < min) return;
    onChange(date);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => (open ? setOpen(false) : openPicker())}
        className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
          open ? "border-primary ring-2 ring-primary/20" : "border-zinc-200"
        } ${value ? "text-zinc-800" : "text-zinc-400"}`}
      >
        <span>{value ? formatDisplay(value) : placeholder}</span>
        <CalendarIcon className="h-5 w-5 shrink-0 text-zinc-400" strokeWidth={1.6} />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-30 mt-2 w-[300px] rounded-2xl border border-zinc-100 bg-white p-4 shadow-premium">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setViewMonth(new Date(year, month - 1, 1))}
              className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-primary"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <p className="text-sm font-semibold text-[#132238]">
              {MONTHS[month]} {year}
            </p>
            <button
              type="button"
              onClick={() => setViewMonth(new Date(year, month + 1, 1))}
              className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-primary"
              aria-label="Next month"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-zinc-400">
            {WEEKDAYS.map((w) => (
              <span key={w}>{w}</span>
            ))}
          </div>

          <div className="mt-1 grid grid-cols-7 gap-1">
            {cells.map(({ date, outside }, i) => {
              const disabled = !!min && date < min;
              const selected = !!value && isSameDay(date, value);
              const isToday = isSameDay(date, today);
              return (
                <button
                  key={i}
                  type="button"
                  disabled={disabled}
                  onClick={() => select(date)}
                  className={`h-9 rounded-lg text-sm transition-colors ${
                    selected
                      ? "bg-primary font-semibold text-white"
                      : disabled
                        ? "cursor-not-allowed text-zinc-300"
                        : outside
                          ? "text-zinc-300 hover:bg-zinc-50"
                          : "text-zinc-700 hover:bg-primary/10"
                  } ${isToday && !selected ? "ring-1 ring-inset ring-primary/40" : ""}`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => select(today)}
            disabled={!!min && today < min}
            className="mt-3 w-full rounded-lg border border-zinc-100 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/5 disabled:cursor-not-allowed disabled:text-zinc-300"
          >
            Today
          </button>
        </div>
      )}
    </div>
  );
}
