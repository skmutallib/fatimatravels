"use client";

import { useState } from "react";
import Image from "next/image";
import { Send } from "lucide-react";

import { siteConfig } from "@/lib/site";

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-zinc-600">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-[15px] text-zinc-800 placeholder:text-zinc-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

export default function CtaContact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const lines = [
      "Hi Fatima Travels, I'd like to get in touch.",
      "",
      fullName && `*Full Name:* ${fullName}`,
      email && `*Email Address:* ${email}`,
      phone && `*Phone Number:* ${phone}`,
      message && `*Message:* ${message}`,
    ].filter(Boolean);

    const wa = siteConfig.whatsapp.replace(/\D/g, "");
    window.open(
      `https://wa.me/${wa}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="mx-auto w-[90vw] px-6 py-16 sm:px-10 lg:px-16">
      <div className="reveal overflow-hidden rounded-3xl bg-primary">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          {/* Left: car + copy */}
          <div className="flex flex-col items-center gap-2 p-8 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left lg:p-10">
            <div className="relative aspect-[450/281] w-52 shrink-0 sm:w-56 lg:w-72">
              <Image
                src="/cta-mercedes-s-class.png"
                alt="Mercedes-Benz S-Class"
                fill
                sizes="288px"
                className="object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.25)]"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Hit the Road?
              </h2>
              <p className="mt-3 leading-relaxed text-white/90">
                Book your ride in minutes and enjoy the freedom of the city.
              </p>
            </div>
          </div>

          {/* Right: form card */}
          <div className="m-3 rounded-2xl bg-white p-6 shadow-premium sm:m-5 sm:p-7 lg:my-6 lg:mr-6">
            <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                label="Full Name"
                placeholder="Enter your name"
                value={fullName}
                onChange={setFullName}
              />
              <Field
                label="Email Address"
                placeholder="Enter your email address"
                type="email"
                value={email}
                onChange={setEmail}
              />
              <Field
                label="Phone Number"
                placeholder="Enter your phone number"
                value={phone}
                onChange={setPhone}
              />
              <Field
                label="Message (Optional)"
                placeholder="Enter your message"
                value={message}
                onChange={setMessage}
              />

              <div className="sm:col-span-2 sm:flex sm:justify-end">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#0a9fa0] sm:w-auto"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
