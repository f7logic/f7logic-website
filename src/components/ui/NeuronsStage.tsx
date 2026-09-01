"use client";

import { useState } from "react";
import AiNeurons from "@/components/ui/AiNeurons";
import { Sparkles, Send, CheckCircle2, Mail, PhoneCall, Cpu, LineChart, Code2 } from "lucide-react";

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
      className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-[#ff5500] via-[#ea4400] to-[#b32b00] text-white min-h-screen"
    >
      {/* 🧠 4K Super-Realistic AI Neurons Canvas */}
      <AiNeurons />

      <div className="max-w-6xl mx-auto relative z-10 space-y-24">
        
        {/* Predictive & Core Software Row */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black/80 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-lg">
              STAGE 03 // 4K NEURAL SYNAPSE MATRIX
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-lg">
              Predictive Data & Core Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-black/80 backdrop-blur-2xl border border-white/20 shadow-2xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Predictive Data Solutions</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Deep learning time-series models, automated anomaly detection, customer churn forecasting, and high-throughput vector indexing.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-black/80 backdrop-blur-2xl border border-white/20 shadow-2xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-400/40 flex items-center justify-center text-orange-300">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Core Custom Software Development</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Scalable Kubernetes microservices, ultra-fast Rust, Go, and Next.js platforms, with sub-millisecond API response latency.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Container on the Orange Canvas */}
        <div id="contact" className="max-w-4xl mx-auto rounded-3xl border border-white/30 bg-black/90 p-8 sm:p-14 backdrop-blur-2xl shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold mb-3 border border-orange-500/40">
              <Sparkles className="w-3.5 h-3.5" /> Direct Architecture Consultation
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Launch Your AI Build With F7 Logic
            </h3>
            <p className="text-zinc-300 text-sm mt-2">
              Tell us your requirements. We return with a complete architecture proposal in 24h.
            </p>
          </div>

          {status === "success" ? (
            <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-400/40 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="text-2xl font-bold text-white">Transmission Received</h4>
              <p className="text-emerald-200 text-sm">Our lead AI architect will contact you directly via email.</p>
            </div>
          ) : status === "error" ? (
            <div className="p-8 rounded-2xl bg-rose-950/60 border border-rose-400/40 text-center space-y-3">
              <h4 className="text-2xl font-bold text-white">Message Not Sent</h4>
              <p className="text-rose-200 text-sm">Email delivery is not configured yet. Please email us directly or try again later.</p>
              <a href="mailto:f7logicbd@gmail.com" className="inline-flex rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-400">
                Email F7 Logic
              </a>
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
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-900 border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 text-sm"
                />
                <input
                  type="email"
                  required
                  placeholder="Work Email / WhatsApp"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-zinc-900 border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 text-sm"
                />
              </div>

              <select
                value={formData.domain}
                onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-zinc-900 border border-white/15 text-zinc-200 focus:outline-none focus:border-orange-500 text-sm cursor-pointer"
              >
                <option value="Computer Vision">Computer Vision & Spatial AI</option>
                <option value="LLMs & Custom RAG">Private LLMs & Custom RAG</option>
                <option value="Agentic AI & Swarms">Agentic AI & Swarms</option>
                <option value="Predictive Data Solutions">Predictive Data Solutions</option>
                <option value="Core Custom Software">Core Custom Software Development</option>
              </select>

              <textarea
                rows={3}
                required
                placeholder="Describe your project goals..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-zinc-900 border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 text-sm resize-none"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-extrabold hover:opacity-90 shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-base"
              >
                <Send className="w-4 h-4" />
                Submit AI Architecture Request
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-4 text-xs font-mono text-zinc-400">
            <Mail className="w-4 h-4 text-orange-400" />
            <span>f7logicbd@gmail.com</span>
            <span>•</span>
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>Response Time: &lt; 24h</span>
          </div>
        </div>

      </div>
    </section>
  );
}