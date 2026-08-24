"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  Calendar,
  Car,
  ChevronDown,
  Clock,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Signpost,
  User,
  Users,
  X,
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import DatePicker from "@/components/DatePicker";

/* ------------------------------------------------------------------ */
/*  Data & helpers                                                     */
/* ------------------------------------------------------------------ */

const WA = siteConfig.whatsapp.replace(/\D/g, "");

const tripTypes = [
  "Local (8 Hrs / 80 KM)",
  "Outstation, One Way",
  "Outstation, Round Trip",
  "Airport Transfer",
  "Full Day Rental",
  "Wedding / Event",
];

function formatDate(d: Date) {
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

const timeOptions = Array.from({ length: 24 }, (_, hour24) => {
  const period = hour24 < 12 ? "AM" : "PM";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${String(hour12).padStart(2, "0")}:00 ${period}`;
});

/* ------------------------------------------------------------------ */
/*  Field shell — label + leading icon + input                         */
/* ------------------------------------------------------------------ */

const inputBase =
  "w-full rounded-xl border border-zinc-200 bg-white py-3 pl-11 pr-4 text-sm text-[#132238] outline-none transition-colors placeholder:text-zinc-400 focus:border-primary";

function Field({
  label,
  icon,
  className,
  iconAlign = "center",
  children,
}: {
  label: string;
  icon: ReactNode;
  className?: string;
  iconAlign?: "center" | "top";
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
        {label}
      </label>
      <div className="relative mt-2">
        <span
          className={`pointer-events-none absolute left-3.5 text-zinc-400 ${
            iconAlign === "top" ? "top-3.5" : "top-1/2 -translate-y-1/2"
          }`}
        >
          {icon}
        </span>
        {children}
      </div>
    </div>
  );
}

const iconProps = { className: "h-4 w-4", strokeWidth: 1.9 };

/* ------------------------------------------------------------------ */
/*  Modal                                                              */
/* ------------------------------------------------------------------ */

export default function BookingModal({
  car,
  onClose,
}: {
  car: string | null;
  onClose: () => void;
}) {
  const [prevCar, setPrevCar] = useState<string | null>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [closing, setClosing] = useState(false);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [tripType, setTripType] = useState(tripTypes[0]);
  const [passengers, setPassengers] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  // A newly selected car opens the modal — adjust state during render
  // (React's documented pattern) rather than in an effect, so it takes
  // effect in the same commit instead of causing an extra render pass.
  if (car && car !== prevCar) {
    setPrevCar(car);
    setShouldRender(true);
    setClosing(false);
    setFullName("");
    setPhone("");
    setTripType(tripTypes[0]);
    setPassengers("");
    setPickup("");
    setDrop("");
    setDate(null);
    setTime("");
    setNotes("");
  }

  const handleClose = () => {
    setClosing(true);
    window.setTimeout(() => {
      setShouldRender(false);
      setClosing(false);
      onClose();
    }, 240);
  };

  useEffect(() => {
    if (!shouldRender) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRender]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hi Fatima Travels, I'd like to book a car.",
      "",
      `*Car:* ${car}`,
      `*Trip Type:* ${tripType}`,
      fullName && `*Name:* ${fullName}`,
      phone && `*Phone:* ${phone}`,
      passengers && `*Passengers:* ${passengers}`,
      pickup && `*Pickup Location:* ${pickup}`,
      drop && `*Drop Location:* ${drop}`,
      date && `*Date:* ${formatDate(date)}`,
      time && `*Time:* ${time}`,
      notes && `*Notes:* ${notes}`,
    ].filter(Boolean);

    window.open(
      `https://wa.me/${WA}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
    handleClose();
  };

  if (!shouldRender) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Car booking enquiry"
      onClick={handleClose}
      className={`fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-[#0e1b2e]/60 p-4 backdrop-blur-sm sm:p-6 ${
        closing ? "animate-modal-backdrop-out" : "animate-modal-backdrop-in"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative my-8 w-full max-w-xl overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-white shadow-premium ${
          closing ? "animate-modal-panel-out" : "animate-modal-panel-in"
        }`}
      >
        {/* top accent */}
        <span className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-primary/40 via-primary to-primary/40" />

        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-5 top-6 flex h-9 w-9 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-[#132238]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="px-7 pb-8 pt-9 sm:px-9 sm:pb-9">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Car className="h-5 w-5" strokeWidth={1.9} />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Booking enquiry
              </p>
              <h2 className="truncate text-lg font-bold text-[#132238]">{car}</h2>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-500">
            Fill in your trip details, we&apos;ll confirm availability on
            WhatsApp within minutes.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Your name" icon={<User {...iconProps} />}>
              <input
                required
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your Name"
                className={inputBase}
              />
            </Field>

            <Field label="Phone / WhatsApp" icon={<Phone {...iconProps} />}>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className={inputBase}
              />
            </Field>

            <Field label="Trip type" icon={<Signpost {...iconProps} />}>
              <select
                value={tripType}
                onChange={(e) => setTripType(e.target.value)}
                className={inputBase}
              >
                {tripTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Passengers" icon={<Users {...iconProps} />}>
              <input
                type="number"
                min={1}
                max={50}
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                placeholder="2"
                className={inputBase}
              />
            </Field>

            <Field label="Pickup location" icon={<MapPin {...iconProps} />}>
              <input
                required
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Banjara Hills, Hyderabad"
                className={inputBase}
              />
            </Field>

            <Field label="Drop location" icon={<MapPin {...iconProps} />}>
              <input
                type="text"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                placeholder="Rajiv Gandhi International Airport"
                className={inputBase}
              />
            </Field>

            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                Pickup date
              </label>
              <div className="mt-2">
                <DatePicker
                  value={date}
                  onChange={setDate}
                  minDate={new Date()}
                  placeholder="Select date"
                />
              </div>
            </div>

            <Field label="Pickup time" icon={<Clock {...iconProps} />}>
              <select
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={`${inputBase} appearance-none pr-10`}
              >
                <option value="" disabled>
                  Select time
                </option>
                {timeOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400">
                <ChevronDown className="h-4 w-4" strokeWidth={1.9} />
              </span>
            </Field>

            <Field
              label="Special requests"
              icon={<MessageSquare {...iconProps} />}
              className="sm:col-span-2"
              iconAlign="top"
            >
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Child seat, extra luggage, meet-and-greet at arrivals…"
                className={`${inputBase} resize-none pt-3`}
              />
            </Field>

            <button
              type="submit"
              className="group mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-16px_rgba(11,180,181,1)] transition-transform duration-300 hover:-translate-y-0.5 sm:col-span-2"
            >
              Send Booking Request
              <Send
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body,
  );
}
