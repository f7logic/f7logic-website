import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";

export const metadata: Metadata = {
  title: "F7 Logic — Full-Spectrum AI & Software Engineering",
  description: "Custom Computer Vision, LLMs, Autonomous Agents, and Enterprise Software Development.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased">
        <SmoothScroll>
          <div className="fixed inset-0 grid-pattern pointer-events-none -z-10" />
          <Navbar />
          <main>{children}</main>
          <Footer />
          {/* Floating Call & WhatsApp Buttons */}
          <FloatingContact />
        </SmoothScroll>
      </body>
    </html>
  );
}
