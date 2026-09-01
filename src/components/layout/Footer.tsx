"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative z-10 px-4 pb-8 pt-6 sm:px-8">
      <div className="mx-auto max-w-7xl rounded-[1.6rem] border border-purple-300/20 bg-[#0e0a16]/90 px-5 py-5 shadow-[0_18px_50px_rgba(9,12,18,0.5)] backdrop-blur-2xl sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center justify-center md:justify-start">
            <div className="relative h-9 w-40 sm:w-48">
              <Image
                src="/logo.png"
                alt="F7 Logic Logo"
                fill
                sizes="(min-width: 640px) 192px, 160px"
                loading="eager"
                className="object-contain object-center"
              />
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-bold tracking-[0.18em] text-purple-100/80 sm:gap-6 sm:text-xs">
            <button onClick={() => scrollTo("nebula-stage")} className="transition-colors hover:text-orange-400 cursor-pointer">
              Services
            </button>
            <button onClick={() => scrollTo("metrics")} className="transition-colors hover:text-orange-400 cursor-pointer">
              Projects
            </button>
            <Link href="/career" className="transition-colors hover:text-orange-400 cursor-pointer">
              Career
            </Link>
            <button onClick={() => scrollTo("contact")} className="transition-colors hover:text-orange-400 cursor-pointer">
              Contact
            </button>
          </nav>

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-purple-300/60">
            © {new Date().getFullYear()} F7 Logic
          </p>
        </div>
      </div>
    </footer>
  );
}
