"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  // 💡 REPLACE THESE WITH YOUR ACTUAL DETAILS:
  const phoneNumber = "+8801768345277"; // Your phone number (e.g. +8801700000000)
  const whatsappNumber = "8801768345277"; // Your WhatsApp number without '+' (e.g. 8801700000000)
  const facebookUrl = "https://facebook.com/f7logicbd"; // 💡 Your Facebook page link

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      
      {/* 1. Facebook Page Button (Official Facebook Blue Circle) */}
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-2xl shadow-black/60 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative border border-white/20"
        title="Visit Our Facebook Page"
        aria-label="Facebook Page"
      >
        {/* Official Facebook SVG Icon */}
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 fill-white group-hover:scale-110 transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        
        {/* Hover Tooltip */}
        <span className="absolute right-16 px-3 py-1 rounded-lg bg-black/90 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-white/10">
          Facebook
        </span>
      </a>

      {/* 2. Direct Phone Call Button (White Circle) */}
      <a
        href={`tel:${phoneNumber}`}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f1f3f7] hover:bg-white text-zinc-900 shadow-2xl shadow-black/60 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative border border-white/80"
        title="Call Us Directly"
        aria-label="Direct Phone Call"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-900 group-hover:rotate-12 transition-transform duration-300 stroke-[2.2]" />
        
        {/* Hover Tooltip */}
        <span className="absolute right-16 px-3 py-1 rounded-lg bg-black/90 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-white/10">
          Call Us
        </span>
      </a>

      {/* 3. WhatsApp Button (Green Circle) */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-black/60 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative border border-white/20"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-105 transition-transform duration-300 fill-transparent stroke-[2.2]" />
        
        {/* Hover Tooltip */}
        <span className="absolute right-16 px-3 py-1 rounded-lg bg-black/90 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-white/10">
          WhatsApp
        </span>
      </a>

    </div>
  );
}