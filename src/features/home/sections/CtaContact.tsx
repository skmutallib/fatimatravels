import Image from "next/image";
import { Send } from "lucide-react";

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
            <div className="relative aspect-[450/281] w-28 shrink-0 sm:w-40 lg:w-48">
              <Image
                src="/innova-hycross.png"
                alt="Toyota Innova Hycross"
                fill
                sizes="192px"
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
