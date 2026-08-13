import Image from "next/image";
import Link from "next/link";

import { navItems, siteConfig } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="animate-pop-down fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 border border-zinc-200 bg-linear-to-b from-white to-zinc-50 pl-6 pr-2 shadow-sm sm:pl-8 sm:pr-2">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={200}
            height={112}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Nav items (centered) */}
        <ul className="hidden items-center gap-1 text-[15px] font-medium text-zinc-600 md:flex">
          {navItems.map((item, i) => (
            <li key={item.href} className="flex items-center">
              {i > 0 && (
                <span
                  aria-hidden
                  className="mx-4 inline-block h-1 w-1 rounded-full bg-zinc-300"
                />
              )}
              <Link
                href={item.href}
                className="px-1 py-1 transition-colors hover:text-zinc-950"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA — sharp-edged rectangle with boxed arrow */}
        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center gap-3 bg-neutral-900 py-2.5 pl-6 pr-2.5 text-base font-medium text-white transition-colors hover:bg-primary"
        >
          Book Now
          <span className="flex h-6 w-6 items-center justify-center border border-white/25 bg-white/10 transition-colors group-hover:bg-white/20">
            <svg aria-hidden viewBox="0 0 16 16" fill="none" className="h-4 w-4">
              <path
                d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </nav>
    </header>
  );
}
