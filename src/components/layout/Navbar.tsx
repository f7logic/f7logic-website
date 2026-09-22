"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.dispatchEvent(new Event("f7:navigation-start"));
    window.location.href = `/#${id}`;
  };

  const startNavigation = () => {
    window.dispatchEvent(new Event("f7:navigation-start"));
    setMobileOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 pt-3"
    >
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/55 px-4 shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:px-5">
        <Link href="/" onClick={startNavigation} className="flex items-center group py-1">
          <div className="relative flex h-9 w-36 items-center sm:w-44">
            <Image
              src="/logo.png" 
              alt="F7 Logic Logo"
              fill
              sizes="(min-width: 640px) 176px, 144px"
              loading="eager"
              className="origin-left object-contain object-left transition-all duration-300"
              priority
            />
          </div>
        </Link>

        {/* Links */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-[13px] font-medium text-white/75 md:flex">
          <Link href="/about" onClick={startNavigation} className="transition-colors hover:text-white">About</Link>
          <Link href="/certifications" onClick={startNavigation} className="transition-colors hover:text-white">Certifications</Link>
          <button onClick={() => scrollTo("nebula-stage")} className="transition-colors hover:text-white">Services</button>
          <Link href="/career" onClick={startNavigation} className="transition-colors hover:text-white">Career</Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollTo("contact")}
            className="group flex cursor-pointer items-center gap-1.5 rounded-full border border-white/20 bg-white px-4 py-2 text-xs font-semibold text-black transition-colors hover:bg-white/85"
          >
            Build With Us
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-1.5 text-white md:hidden"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {mobileOpen && (
          <nav className="absolute left-0 right-0 top-[4rem] flex flex-col gap-1 rounded-3xl border border-white/10 bg-[#101010]/95 p-3 text-sm font-medium text-white/80 shadow-xl backdrop-blur-2xl md:hidden">
            <Link href="/" onClick={startNavigation} className="rounded-xl px-4 py-3 hover:bg-black/5">
              Home
            </Link>
            <Link href="/about" onClick={startNavigation} className="rounded-2xl px-4 py-3 hover:bg-white/10">About</Link>
            <Link href="/certifications" onClick={startNavigation} className="rounded-2xl px-4 py-3 hover:bg-white/10">Certifications</Link>
            <button onClick={() => scrollTo("nebula-stage")} className="rounded-xl px-4 py-3 text-left hover:bg-black/5">
              Services
            </button>
            <Link href="/career" onClick={startNavigation} className="rounded-xl px-4 py-3 hover:bg-black/5">
              Career
            </Link>
          </nav>
        )}

      </div>
    </header>
  );
}
