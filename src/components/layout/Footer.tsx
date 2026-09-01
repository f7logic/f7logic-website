"use client";

import Image from "next/image";

export default function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto rounded-2xl bg-black/85 border border-purple-300/30 p-8 sm:p-10 backdrop-blur-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo & Slogan */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="relative h-9 w-48 flex items-center">
            <Image
              src="/logo.png" 
              alt="F7 Logic Logo"
              fill
              sizes="192px"
              loading="eager"
              className="object-contain object-center sm:object-left"
            />
          </div>
          <span className="hidden sm:inline-block text-purple-300/40">|</span>
          <p className="text-purple-200/70 text-xs sm:text-sm font-medium">
            Full-Spectrum AI & Software Engineering
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-bold text-purple-200/80">
          <button onClick={() => scrollTo("domains")} className="hover:text-amber-300 transition-colors cursor-pointer">
            AI Domains
          </button>
          <button onClick={() => scrollTo("metrics")} className="hover:text-amber-300 transition-colors cursor-pointer">
            Performance
          </button>
          <button onClick={() => scrollTo("process")} className="hover:text-amber-300 transition-colors cursor-pointer">
            Engineering Process
          </button>
          <button onClick={() => scrollTo("contact")} className="hover:text-amber-300 transition-colors cursor-pointer">
            Contact
          </button>
        </div>

        {/* Copyright */}
        <p className="text-purple-300/60 text-xs font-mono">
          © {new Date().getFullYear()} F7 Logic. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
