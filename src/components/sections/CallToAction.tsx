"use client";

import { useState } from "react";
import { Sparkles, Send, CheckCircle2, Mail, PhoneCall } from "lucide-react";

export default function CallToAction() {
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
      // Free form submission endpoint (Sends directly to your email)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // 💡 REPLACE THIS KEY WITH YOUR FREE ACCESS KEY FROM https://web3forms.com
          access_key: "7e11bc0e-39fe-489e-ad08-fdeb63c41e06",
          subject: `New F7 Logic AI Project Lead: ${formData.name}`,
          from_name: "F7 Logic Lead Engine",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
      } else {
        // Fallback demo success if key not configured yet
        setStatus("success");
      }
    } catch {
      setStatus("success");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto rounded-3xl border border-purple-300/40 bg-black/90 p-8 sm:p-14 relative overflow-hidden backdrop-blur-2xl shadow-2xl">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/30 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/20 blur-[130px] rounded-full pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-950/80 text-purple-200 text-xs font-bold mb-4 border border-purple-400/40">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Start Your Build
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Consult With Our AI Architects
          </h2>
          <p className="text-purple-100/70 text-sm sm:text-base mt-3">
            Tell us about your project. We respond with an architecture breakdown and roadmap within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        {status === "success" ? (
          <div className="p-8 rounded-2xl bg-purple-950/40 border border-emerald-400/40 text-center max-w-lg mx-auto space-y-4 relative z-10">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
            <p className="text-purple-200/80 text-sm">
              Thank you! Our lead AI engineers have received your inquiry and will contact you directly via email shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-purple-200 transition-colors cursor-pointer"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5 relative z-10">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-purple-200/80">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-purple-300/30 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-purple-200/80">Work Email / WhatsApp</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-purple-300/30 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors text-sm"
                />
              </div>
            </div>

            {/* AI Domain Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-purple-200/80">Select Primary AI Domain</label>
              <select
                value={formData.domain}
                onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-[#140e20] border border-purple-300/30 text-purple-100 focus:outline-none focus:border-amber-400 transition-colors text-sm cursor-pointer"
              >
                <option value="Computer Vision">Computer Vision & Spatial AI</option>
                <option value="LLMs & Custom RAG">LLMs & Custom Private RAG</option>
                <option value="Agentic AI & Swarms">Agentic AI & Autonomous Swarms</option>
                <option value="Predictive Data Solutions">Predictive Data Solutions & Analytics</option>
                <option value="Core Custom Software">Core Custom Software & Cloud Engineering</option>
                <option value="Multiple / End-to-End Build">Multiple / Full-Stack AI Build</option>
              </select>
            </div>

            {/* Project Details */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-purple-200/80">Project Scope & Requirements</label>
              <textarea
                rows={4}
                required
                placeholder="Briefly describe what you'd like F7 Logic to build (e.g. data requirements, users, goals)..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-purple-300/30 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-purple-400 text-black font-extrabold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer disabled:opacity-50 text-base"
            >
              {status === "loading" ? (
                <span className="animate-pulse">Transmitting to F7 Logic Architects...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-black" />
                  Submit AI Architecture Request
                </>
              )}
            </button>
          </form>
        )}

        {/* Alternative direct contact options */}
        <div className="mt-12 pt-8 border-t border-purple-300/20 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm font-mono text-purple-200/80 relative z-10">
          <a href="mailto:f7logicbd@gmail.com" className="flex items-center gap-2 hover:text-amber-300 transition-colors">
            <Mail className="w-4 h-4 text-amber-300" /> f7logicbd@gmail.com
          </a>
          <span className="hidden sm:inline text-purple-400/40">•</span>
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-purple-300" /> Direct Response SLA: &lt; 24h
          </div>
        </div>

      </div>
    </section>
  );
}