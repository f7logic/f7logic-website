import Image from "next/image";
import Link from "next/link";

const company = [
  { href: "/about", label: "About" },
  { href: "/certifications", label: "Certifications" },
  { href: "/career", label: "Careers" },
];

const services = [
  "Computer vision",
  "Private LLMs & RAG",
  "AI agents",
  "Data & forecasting",
  "Custom software",
];

export default function Footer() {
  return (
    <footer className="bg-night text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="relative h-10 w-44">
              <Image src="/logo.png" alt="F7 Logic" fill sizes="176px" className="object-contain object-left" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-6">
              AI, software and data engineering for teams that need their systems to work in production.
            </p>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold text-white">Company</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold text-white">Services</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((item) => (
                <li key={item}>
                  <Link href="/#services" className="transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold text-white">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="mailto:f7logicbd@gmail.com" className="break-all transition-colors hover:text-white">
                  f7logicbd@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+8801768345277" className="transition-colors hover:text-white">
                  +880 1768 345277
                </a>
              </li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} F7 Logic. All rights reserved.</p>
          <p>We reply to every enquiry within 24 hours.</p>
        </div>
      </div>
    </footer>
  );
}
