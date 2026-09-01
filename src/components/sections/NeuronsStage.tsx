"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Send, CheckCircle2, Mail, PhoneCall } from "lucide-react";

export default function NeuronsStage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "Computer Vision",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          subject: `F7 Logic AI Inquiry: ${formData.name}`,
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
    <section
      id="neurons-stage"
      className="relative py-28 px-6 overflow-hidden bg-[#f5f1ea] text-zinc-900 min-h-screen"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-[6%] top-0 h-40 rounded-b-[2.75rem] border-x border-b border-[#f0dfce] bg-gradient-to-b from-[#fffdf9] via-[#f0e1d1] to-transparent shadow-[0_24px_70px_rgba(120,82,52,0.12)] backdrop-blur-xl pointer-events-none"
        initial={{ opacity: 0, y: -34, rotateX: 28, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformPerspective: 1800, transformOrigin: "50% 0%" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-0 left-1/2 h-32 w-[72%] -translate-x-1/2 rounded-b-[50%] border-b border-[#e5c9aa]/60 bg-[#eed9c2]/15 blur-sm pointer-events-none"
        initial={{ opacity: 0, y: -28, rotateX: 36 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformPerspective: 1800, transformOrigin: "50% 0%" }}
      />
      <div id="process" className="max-w-6xl mx-auto relative z-10 scroll-mt-24">
        {/* Contact Form Container on the Orange Canvas */}
        <div id="contact" className="max-w-4xl mx-auto rounded-3xl border border-[#eadcc7] bg-white/75 p-8 sm:p-14 backdrop-blur-2xl shadow-[0_28px_80px_rgba(76,52,33,0.08)]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0e4d6] text-[#6d4a35] text-sm font-medium mb-3 border border-[#e1c8a9]">
              <Sparkles className="w-3.5 h-3.5 text-[#8d5d3d]" /> Direct Architecture Consultation
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">
              Launch Your AI Build With F7 Logic
            </h3>
            <p className="text-zinc-600 text-sm mt-2">
              Tell us your requirements. We return with a complete architecture proposal in 24h.
            </p>
          </div>

          {status === "success" ? (
            <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-400/40 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="text-2xl font-bold text-zinc-900">Transmission Received</h4>
              <p className="text-emerald-700 text-sm">Our lead AI architect will contact you directly via email.</p>
            </div>
          ) : status === "error" ? (
            <div className="p-8 rounded-2xl bg-rose-950/60 border border-rose-400/40 text-center space-y-3">
              <h4 className="text-2xl font-bold text-zinc-900">Message Not Sent</h4>
              <p className="text-rose-700 text-sm">Email delivery is not configured yet. Please email us directly or try again later.</p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <a href="mailto:f7logicbd@gmail.com" className="rounded-full bg-[#2a241f] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#171310]">
                  Email F7 Logic
                </a>
                <button type="button" onClick={() => setStatus("idle")} className="rounded-full border border-[#d7c7b7] bg-white/60 px-5 py-2.5 text-sm font-bold text-zinc-800 hover:bg-white/80">
                  Try Again
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#f7f2eb] border border-[#e3d5c3] text-zinc-900 placeholder-zinc-500 focus:outline-none focus:border-[#b77c4f] text-sm"
                />
                <input
                  type="email"
                  required
                  placeholder="Work Email / WhatsApp"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#f7f2eb] border border-[#e3d5c3] text-zinc-900 placeholder-zinc-500 focus:outline-none focus:border-[#b77c4f] text-sm"
                />
              </div>

              <select
                value={formData.domain}
                onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-[#f7f2eb] border border-[#e3d5c3] text-zinc-800 focus:outline-none focus:border-[#b77c4f] text-sm cursor-pointer"
              >
                <option value="Computer Vision">Computer Vision & Spatial AI</option>
                <option value="LLMs & Custom RAG">Private LLMs & Custom RAG</option>
                <option value="Agentic AI & Swarms">Agentic AI & Swarms</option>
                <option value="Data Analytics & Predictive Forecasting">Data Analytics & Predictive Forecasting</option>
                <option value="Core Custom Software">Core Custom Software Development</option>
                <option value="Others">Others</option>
              </select>

              <textarea
                rows={3}
                required
                placeholder="Describe your project goals..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-[#f7f2eb] border border-[#e3d5c3] text-zinc-900 placeholder-zinc-500 focus:outline-none focus:border-[#b77c4f] text-sm resize-none"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl bg-[#201d1b] text-white font-extrabold hover:bg-[#13100e] shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-base"
              >
                <Send className="w-4 h-4" />
                Submit AI Architecture Request
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-[#e8dccd] flex items-center justify-center gap-4 text-xs font-mono text-zinc-500">
            <Mail className="w-4 h-4 text-[#8d5d3d]" />
            <span>f7logicbd@gmail.com</span>
            <span>•</span>
            <PhoneCall className="w-4 h-4 text-[#b77c4f]" />
            <span>Response Time: &lt; 24h</span>
          </div>
        </div>

      </div>
    </section>
  );
}
