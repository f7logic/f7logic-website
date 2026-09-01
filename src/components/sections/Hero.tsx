"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Eye, Brain, Bot, LineChart, Code2 } from "lucide-react";
import BlackHole from "@/components/ui/BlackHole";

export default function Hero() {
  const domains = [
    { icon: Eye, label: "Computer Vision" },
    { icon: Brain, label: "LLMs & Custom RAG" },
    { icon: Bot, label: "Agentic AI" },
    { icon: LineChart, label: "Predictive Data" },
    { icon: Code2, label: "Core Software" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-44 sm:pt-48 pb-20 px-6 overflow-hidden min-h-[750px]">
      
      {/* 🌌 Photorealistic Black Hole Graphic */}
      <BlackHole />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Early Access Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-cyan-400/30 text-cyan-200 text-xs font-mono font-medium tracking-wide mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          Autonomous AI & Software Engineering
        </motion.div>

        {/* Cinematic Headline with Luminous Glow */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.12] drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)]"
        >
          AI at the Pace of <br />
          <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(56,189,248,0.7)]">
            New Innovation.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal drop-shadow-md"
        >
          Enabling fluid interactions and instant connections. F7 Logic empowers enterprises to deploy Computer Vision, fine-tuned private LLMs, and autonomous agent swarms.
        </motion.p>

        {/* High-Contrast Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-white text-black font-extrabold hover:bg-zinc-100 shadow-[0_0_35px_rgba(255,255,255,0.45)] transition-all hover:scale-105 flex items-center justify-center gap-2 text-base cursor-pointer"
          >
            Join Waitlist / Deploy
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
          <button
            onClick={() => scrollTo("domains")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/80 hover:bg-black font-bold text-zinc-200 hover:text-white transition-all flex items-center justify-center gap-2 text-base backdrop-blur-md border border-white/20 shadow-xl cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            Explore Capabilities
          </button>
        </motion.div>

        {/* Domain Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {domains.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/85 border border-cyan-400/20 text-zinc-200 backdrop-blur-md text-xs sm:text-sm font-semibold shadow-lg hover:border-cyan-400 hover:scale-105 transition-all"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}