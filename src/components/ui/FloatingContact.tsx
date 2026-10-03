"use client";

import { MessageCircle, Phone } from "lucide-react";

const phoneNumber = "+8801768345277";
const whatsappNumber = "8801768345277";
const facebookUrl = "https://facebook.com/f7logicbd";

const buttonClass =
  "flex h-11 w-11 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-ink hover:text-white";

export default function FloatingContact() {
  return (
    <div
      aria-label="Quick contact"
      className="fixed bottom-5 right-4 z-40 flex flex-col items-center gap-1 rounded-full border border-line bg-surface/95 p-1.5 shadow-[0_12px_30px_-12px_rgba(21,23,29,0.35)] backdrop-blur sm:right-6"
    >
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className={buttonClass} aria-label="Facebook page" title="Facebook">
        <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
      <a href={`tel:${phoneNumber}`} className={buttonClass} aria-label="Call F7 Logic" title="Call us">
        <Phone className="h-[18px] w-[18px]" />
      </a>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-deep"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
      >
        <MessageCircle className="h-[18px] w-[18px]" />
      </a>
    </div>
  );
}
