"use client";

import { useState } from "react";
import { CheckCircle2, Compass, Mail, MessageCircle, PhoneCall, Send } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const topics = [
  "Computer vision & spatial AI",
  "Private LLMs & RAG",
  "AI agents & automation",
  "Data & predictive analytics",
  "Custom software development",
  "Something else",
];

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    domain: topics[0],
    message: "",
  });

  const update = (key: keyof typeof formData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setFormData((current) => ({ ...current, [key]: event.target.value }));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        setStatus("error");
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `F7 Logic enquiry: ${formData.name}`,
          ...formData,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      const result = await response.json();
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:gap-12 sm:px-6 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10 lg:py-32">
        <div>
          <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
            Tell us what you want to build
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-ink-soft">
            Share a few details about your project. We reply within 24 hours with next steps and a suggested approach.
          </p>

          <ul className="mt-10 space-y-5 text-[15px]">
            <li className="flex items-start gap-4">
              <Mail className="mt-0.5 h-5 w-5 text-accent" />
              <a href="mailto:f7logicbd@gmail.com" className="break-all font-medium hover:text-accent">
                f7logicbd@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-4">
              <PhoneCall className="mt-0.5 h-5 w-5 text-accent" />
              <a href="tel:+8801768345277" className="font-medium hover:text-accent">
                +880 1768 345277
              </a>
            </li>
            <li className="flex items-start gap-4">
              <MessageCircle className="mt-0.5 h-5 w-5 text-accent" />
              <a
                href="https://wa.me/8801768345277"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-accent"
              >
                Message us on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-4">
              <Compass className="mt-0.5 h-5 w-5 text-accent" />
              <span className="font-medium">Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>

        <div className="rounded-[1.5rem] border border-line bg-surface p-5 shadow-[0_30px_70px_-45px_rgba(21,23,29,0.45)] sm:rounded-[2rem] sm:p-10">
          <div aria-live="polite">
            {status === "success" ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                <h3 className="mt-5 font-display text-2xl font-semibold">Message sent</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-ink-soft">
                  Thanks for reaching out. We will reply to your email within 24 hours.
                </p>
              </div>
            ) : status === "error" ? (
              <div className="py-10 text-center">
                <h3 className="font-display text-2xl font-semibold">We could not send your message</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-ink-soft">
                  Email us directly at f7logicbd@gmail.com or try the form again.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a href="mailto:f7logicbd@gmail.com" className="btn btn-primary">
                    Email F7 Logic
                  </a>
                  <button type="button" onClick={() => setStatus("idle")} className="btn btn-secondary">
                    Try again
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          {status !== "success" && status !== "error" && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm font-medium">
                  Your name
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={update("name")}
                    className="field mt-2"
                  />
                </label>
                <label className="block text-sm font-medium">
                  Work email
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={update("email")}
                    className="field mt-2"
                  />
                </label>
                <label className="block text-sm font-medium">
                  Mobile number
                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    value={formData.phone}
                    onChange={update("phone")}
                    className="field mt-2"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium">
                What do you need help with?
                <select value={formData.domain} onChange={update("domain")} className="field mt-2 cursor-pointer">
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-sm font-medium">
                Project details
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={update("message")}
                  placeholder="What are you trying to achieve, and what do you have so far?"
                  className="field mt-2 resize-none"
                />
              </label>

              <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full py-4">
                <Send className="h-4 w-4" />
                {status === "loading" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
