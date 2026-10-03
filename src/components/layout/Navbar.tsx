"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/certifications", label: "Certifications" },
  { href: "/career", label: "Careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full bg-night/95 px-4 shadow-[0_12px_32px_-12px_rgba(14,18,32,0.55)] ring-1 ring-white/10 backdrop-blur-xl sm:px-5">
        <Link href="/" onClick={() => setOpen(false)} aria-label="F7 Logic home" className="flex items-center">
          <div className="relative h-9 w-32 sm:w-40">
            <Image
              src="/logo.png"
              alt="F7 Logic"
              fill
              sizes="(min-width: 640px) 160px, 128px"
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors hover:text-white ${
                isActive(link.href) ? "bg-white/10 text-white" : "text-white/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="group hidden items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13.5px] font-semibold text-night transition-colors hover:bg-accent hover:text-white md:inline-flex"
        >
          Start a project
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full p-2 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {open && (
          <nav
            aria-label="Mobile"
            className="absolute inset-x-0 top-[calc(100%+0.5rem)] flex flex-col gap-1 rounded-3xl bg-night/98 p-3 shadow-xl ring-1 ring-white/10 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-[15px] font-medium text-white/85 hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-2xl bg-white px-4 py-3 text-center text-[15px] font-semibold text-night"
            >
              Start a project
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
