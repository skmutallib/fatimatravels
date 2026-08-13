import { Send } from "lucide-react";

function CtaCar() {
  return (
    <svg viewBox="0 0 260 130" fill="none" className="h-auto w-full">
      <ellipse cx="130" cy="116" rx="110" ry="9" fill="#000" opacity="0.12" />
      {/* body */}
      <path
        d="M16 86c-4 0-7-3-7-7v-8c0-8 6-14 13-15l30-5 24-19c4-3 8-4 12-4h52c6 0 12 3 17 7l17 16 31 6c9 2 15 9 15 17v4c0 4-3 8-7 8H16Z"
        fill="#eafafa"
      />
      {/* window band */}
      <path
        d="M90 34c3-2 6-4 10-4h48c5 0 9 2 13 6l14 15H74l16-17Z"
        fill="#9fe6e7"
      />
      <path d="M124 32v19" stroke="#eafafa" strokeWidth="4" />
      {/* accents */}
      <path d="M18 74h224" stroke="#bdeef0" strokeWidth="2" />
      {/* wheels */}
      <circle cx="74" cy="94" r="19" fill="#122" />
      <circle cx="74" cy="94" r="8" fill="#cbd5e1" />
      <circle cx="192" cy="94" r="19" fill="#122" />
      <circle cx="192" cy="94" r="8" fill="#cbd5e1" />
    </svg>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-zinc-600">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-[15px] text-zinc-800 placeholder:text-zinc-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

export default function CtaContact() {
  return (
    <section className="mx-auto w-[90vw] px-6 py-16 sm:px-10 lg:px-16">
      <div className="reveal overflow-hidden rounded-3xl bg-primary">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          {/* Left: car + copy */}
          <div className="flex items-center gap-4 p-8 sm:gap-6 lg:p-10">
            <div className="w-28 shrink-0 sm:w-40 lg:w-48">
              <CtaCar />
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
              <Field label="Full Name" placeholder="Your name" />
              <Field
                label="Email Address"
                placeholder="you@example.com"
                type="email"
              />
              <Field label="Phone Number" placeholder="(123) 456-7890" />
              <Field label="Message (Optional)" placeholder="How can we help you?" />

              <div className="sm:col-span-2 sm:flex sm:justify-end">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#f2704f] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#e05e3f] sm:w-auto"
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
