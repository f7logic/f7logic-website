"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.dispatchEvent(new Event("f7:navigation-start"));
    router.push(`/#${id}`);
  };

  const startNavigation = () => {
    window.dispatchEvent(new Event("f7:navigation-start"));
    setMobileOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 pt-3"
    >
      <div className="relative max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <motion.div
          aria-hidden="true"
          className={`absolute inset-0 -z-10 rounded-2xl ${
            hasScrolled
              ? "border border-purple-300/30 bg-[#0e0a16]/90 shadow-xl shadow-black/40 backdrop-blur-2xl"
              : "border border-transparent bg-transparent shadow-none backdrop-blur-none"
          }`}
          initial={false}
          animate={hasScrolled ? "visible" : "top"}
          variants={{
            top: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
            },
            visible: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
          }}
          transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.8 }}
          style={{ perspective: 1100, transformOrigin: "50% 0%" }}
        />
        
        {/* Large Logo */}
        <Link href="/" onClick={startNavigation} className="flex items-center group py-1">
          <div className="relative h-11 w-64 sm:w-80 flex items-center">
            <Image
              src="/logo.png" 
              alt="F7 Logic Logo"
              fill
              sizes="(min-width: 640px) 320px, 256px"
              loading="eager"
              className={`object-contain object-left scale-110 origin-left transition-all duration-300 ${hasScrolled ? "" : "brightness-[1.12] contrast-[1.18] saturate-[1.08] drop-shadow-[0_1px_0_rgba(255,255,255,0.85)]"}`}
              priority
            />
          </div>
        </Link>

        {/* Links */}
        <nav className={`absolute left-1/2 hidden -translate-x-1/2 md:flex items-center gap-7 text-xs sm:text-sm font-bold ${hasScrolled ? "text-purple-100/80" : "text-zinc-900/90"}`}>
          <button onClick={() => scrollTo("nebula-stage")} className="transition-colors cursor-pointer hover:text-orange-600">
            Services
          </button>
          <button onClick={() => scrollTo("metrics")} className="transition-colors cursor-pointer hover:text-orange-600">
            Projects
          </button>
          <Link href="/career" onClick={startNavigation} className="transition-colors cursor-pointer hover:text-orange-600">
            Career
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollTo("contact")}
            className="relative group overflow-hidden rounded-full p-[1.5px] font-bold text-xs cursor-pointer shadow-[0_8px_24px_rgba(59,130,246,0.25)]"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-300 via-blue-500 to-indigo-300 transition-all duration-300 group-hover:scale-105" />
            <span className="relative block px-5 py-2 rounded-full bg-gradient-to-b from-[#f8fbff] to-[#bfc9d6] transition-all group-hover:from-white group-hover:to-[#d4deea] text-[#172033] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Build With Us
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-1.5 ${hasScrolled ? "text-white" : "text-zinc-900"}`}
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className={`w-5 h-5 ${hasScrolled ? "text-purple-200" : "text-zinc-900"}`} />}
        </button>

        {mobileOpen && (
          <nav className={`absolute left-0 right-0 top-[4.5rem] flex flex-col gap-2 rounded-2xl border p-4 text-sm font-bold shadow-xl backdrop-blur-2xl md:hidden ${hasScrolled ? "border-purple-300/30 bg-[#0e0a16]/95 text-purple-100/90 shadow-black/40" : "border-zinc-200/70 bg-white/85 text-zinc-900 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"}`}>
            <Link href="/" onClick={startNavigation} className="rounded-xl px-4 py-3 hover:bg-black/5">
              Home
            </Link>
            <button onClick={() => scrollTo("nebula-stage")} className="rounded-xl px-4 py-3 text-left hover:bg-black/5">
              Services
            </button>
            <button onClick={() => scrollTo("metrics")} className="rounded-xl px-4 py-3 text-left hover:bg-black/5">
              Projects
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
