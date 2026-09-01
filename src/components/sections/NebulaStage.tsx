"use client";

import { motion } from "framer-motion";
import DenseNeurons from "@/components/ui/DenseNeurons";
import { Eye, Brain, Bot, CheckCircle2, ChevronDown, Sparkles, LineChart, Code2 } from "lucide-react";

export default function NebulaStage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="nebula-stage"
      className="relative py-28 px-6 overflow-hidden bg-[#f5f1ea] text-zinc-900 min-h-screen"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-[6%] top-0 h-40 rounded-b-[2.75rem] border-x border-b border-[#f2e5d7] bg-gradient-to-b from-[#fffdf9] via-[#f1e5d8] to-transparent shadow-[0_24px_60px_rgba(120,82,52,0.12)] backdrop-blur-xl pointer-events-none"
        initial={{ opacity: 0, y: -34, rotateX: -28, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformPerspective: 1800, transformOrigin: "50% 0%" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-0 left-1/2 h-32 w-[72%] -translate-x-1/2 rounded-b-[50%] border-b border-[#d9c2a4]/50 bg-[#e9d7c2]/15 blur-sm pointer-events-none"
        initial={{ opacity: 0, y: -28, rotateX: -36 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ amount: 0.2, once: true }}
        transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformPerspective: 1800, transformOrigin: "50% 0%" }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-950">
            Our Services
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg mt-3 font-medium">
            At F7 Logic, we combine software engineering and AI to deliver data solutions and automation that solve real business challenges.
          </p>
        </div>

        {/* 🧠 DENSE NEURONS DISPLAYED IN THE MIDDLE */}
        <div id="metrics" className="my-8 scroll-mt-24">
          <DenseNeurons />
        </div>

        {/* 3 Main AI Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          
          {/* Card 1: Computer Vision */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#f9f6f2] border border-[#e8dccd] p-8 shadow-xl hover:border-[#b77c4f] hover:shadow-[#b77c4f]/12 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#b77c4f] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#b77c4f]/20">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-950 mb-3">Computer Vision & Spatial AI</h3>
            <p className="text-zinc-600 text-sm leading-relaxed mb-6">
              Object detection, 3D spatial mapping, automated inspection, and edge camera stream analytics running in sub-milliseconds.
            </p>
            <div className="space-y-2 text-xs font-mono text-zinc-700">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600" /> YOLOv9 / Segment Anything</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600" /> Real-time 4K Video Pipelines</div>
            </div>
          </motion.div>

          {/* Card 2: Private LLMs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-3xl bg-[#f9f6f2] border border-[#e8dccd] p-8 shadow-xl hover:border-[#9b6d4e] hover:shadow-[#9b6d4e]/12 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#8f6a52] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#8f6a52]/20">
              <Brain className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-950 mb-3">Private LLMs & Custom RAG</h3>
            <p className="text-zinc-600 text-sm leading-relaxed mb-6">
              Confidential enterprise language models, fine-tuned weights, and deterministic vector search without data leakage.
            </p>
            <div className="space-y-2 text-xs font-mono text-zinc-700">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-600" /> LoRA / QLoRA Private Weights</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-600" /> Graph + Vector Neural RAG</div>
            </div>
          </motion.div>

          {/* Card 3: Agentic Swarms */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl bg-[#f9f6f2] border border-[#e8dccd] p-8 shadow-xl hover:border-[#ca8d5d] hover:shadow-[#ca8d5d]/12 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#ca8d5d] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#ca8d5d]/20">
              <Bot className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-950 mb-3">Agentic AI & Swarms</h3>
            <p className="text-zinc-600 text-sm leading-relaxed mb-6">
              Autonomous multi-agent networks that execute browser actions, API integrations, and multi-step complex workflows.
            </p>
            <div className="space-y-2 text-xs font-mono text-zinc-700">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-600" /> Autonomous Planner Loops</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-600" /> Self-Healing Logic Trees</div>
            </div>
          </motion.div>

        </div>

        {/* Predictive & Core Platform */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-[#f9f6f2] border border-[#e8dccd] p-8 shadow-xl hover:border-[#d29662] hover:shadow-[#d29662]/12 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#d29662] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#d29662]/20">
                <LineChart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-950 mb-3">Predictive Data Solutions</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Deep learning time-series models, automated anomaly detection, customer churn forecasting, and high-throughput vector indexing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-3xl bg-[#f9f6f2] border border-[#e8dccd] p-8 shadow-xl hover:border-[#b86e46] hover:shadow-[#b86e46]/12 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#b86e46] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#b86e46]/20">
                <Code2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-950 mb-3">Core Custom Software Development</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Scalable Kubernetes microservices, ultra-fast Rust, Go, and Next.js platforms, with sub-millisecond API response latency.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator to Stage 3 */}
        <div 
          onClick={() => scrollTo("neurons-stage")}
          className="flex flex-col items-center gap-2 text-xs font-mono text-zinc-500 cursor-pointer pt-16 animate-bounce"
        >
          <span>SCROLL TO STAGE 3 // ARCHITECTURE & DEPLOYMENT</span>
          <ChevronDown className="w-4 h-4 text-orange-600" />
        </div>

      </div>
    </section>
  );
}
