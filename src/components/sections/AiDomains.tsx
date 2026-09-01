"use client";

import { Eye, Brain, Bot, LineChart, Code2, CheckCircle2, ArrowUpRight, Cpu } from "lucide-react";

export default function AiDomains() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="domains" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black/75 border border-purple-300/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-lg">
            Engineering Matrix
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
            Our services
          </h2>
          <p className="text-white font-medium text-base sm:text-lg mt-3 drop-shadow">
            We architect and ship production models across 5 specialized disciplines.
          </p>
        </div>

        {/* 5 Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 1. Computer Vision */}
          <div className="obsidian-card rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Computer Vision & Spatial AI</h3>
              <p className="text-purple-100/70 text-sm leading-relaxed">
                Object recognition, spatial tracking, OCR extraction, inspection systems, and automated video stream intelligence.
              </p>
              <div className="space-y-2 text-xs text-purple-200 font-mono pt-2">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> YOLO / Mask R-CNN / Segment Anything</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Edge Camera & Drone Vision Pipelines</div>
              </div>
            </div>

            {/* Laser Scanner Visual */}
            <div className="mt-6 h-32 rounded-xl bg-black border border-purple-400/30 p-3 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent animate-laser shadow-[0_0_15px_#c084fc]" />
              <div className="flex justify-between items-center text-[10px] font-mono text-purple-300">
                <span>FEED: VISION_CAM_01</span>
                <span className="bg-purple-950 border border-purple-400/40 px-1.5 py-0.5 rounded text-amber-300">99.6% ACCURACY</span>
              </div>
              <div className="border border-dashed border-purple-400/50 rounded p-2 text-center text-[11px] font-mono text-purple-200 bg-purple-500/10">
                [OBJECT DETECTED: SPATIAL_NODE_#402]
              </div>
            </div>
          </div>

          {/* 2. Large Language Models (LLMs) */}
          <div className="obsidian-card rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">LLMs & Custom RAG</h3>
              <p className="text-purple-100/70 text-sm leading-relaxed">
                Fine-tuned private enterprise models, confidential vector RAG search, and context-grounded reasoning without hallucinations.
              </p>
              <div className="space-y-2 text-xs text-purple-200 font-mono pt-2">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> LoRA / QLoRA Custom Weight Tuning</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Hybrid Vector + Graph Neural RAG</div>
              </div>
            </div>

            {/* Inference Token Stream */}
            <div className="mt-6 h-32 rounded-xl bg-black border border-amber-400/30 p-3 flex flex-col justify-between font-mono text-xs">
              <div className="text-[10px] text-amber-300 flex justify-between">
                <span>INFERENCE CLUSTER</span>
                <span className="text-purple-300">140 tokens/sec</span>
              </div>
              <div className="text-purple-100 text-[11px] leading-relaxed">
                <span className="text-amber-300">&gt; Prompt:</span> Analyzing enterprise data graph with zero context loss...
              </div>
              <div className="h-1.5 w-full bg-purple-950 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-400 via-orange-400 to-purple-400 w-4/5 animate-pulse" />
              </div>
            </div>
          </div>

          {/* 3. Agentic AI & Swarms */}
          <div className="obsidian-card rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Agentic AI & Swarms</h3>
              <p className="text-purple-100/70 text-sm leading-relaxed">
                Autonomous agents that execute tool calls, scrape dynamic data, execute API operations, and auto-correct tasks.
              </p>
              <div className="space-y-2 text-xs text-purple-200 font-mono pt-2">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Autonomous Planner & Executor Loops</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Self-Healing Execution Graphs</div>
              </div>
            </div>

            {/* Agent Nodes Graphic */}
            <div className="mt-6 h-32 rounded-xl bg-black border border-purple-400/30 p-3 flex items-center justify-between font-mono text-[10px]">
              <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-200 text-center">
                Agent Alpha<br/><span className="text-amber-300">PLANNER</span>
              </div>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-purple-400 via-amber-400 to-purple-300 mx-2 animate-pulse" />
              <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-200 text-center">
                Agent Beta<br/><span className="text-purple-300">EXECUTOR</span>
              </div>
            </div>
          </div>

          {/* 4. Predictive Analytics & Data Solutions */}
          <div className="obsidian-card rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Predictive Data Solutions</h3>
              <p className="text-purple-100/70 text-sm leading-relaxed">
                Deep-learning forecasting, customer churn algorithms, anomaly detection, and automated ETL data lakes.
              </p>
              <div className="space-y-2 text-xs text-purple-200 font-mono pt-2">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Real-time Streaming Analytics</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Deep Learning Time-Series Models</div>
              </div>
            </div>

            {/* Predictive Wave Visual */}
            <div className="mt-6 h-32 rounded-xl bg-black border border-amber-400/30 p-3 flex flex-col justify-between">
              <div className="flex justify-between text-[10px] font-mono text-purple-300">
                <span>PREDICTIVE ACCURACY</span>
                <span className="text-amber-300">99.82%</span>
              </div>
              <div className="flex items-end gap-1.5 h-16 pt-2">
                {[30, 50, 45, 75, 65, 85, 95, 80, 100].map((val, i) => (
                  <div
                    key={i}
                    style={{ height: `${val}%` }}
                    className="flex-1 bg-gradient-to-t from-purple-500 via-amber-400 to-white rounded-t"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 5. Core Custom Software Development */}
          <div className="obsidian-card md:col-span-2 rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Core Enterprise Software Development</h3>
              <p className="text-purple-100/70 text-sm leading-relaxed max-w-xl">
                We engineer scalable cloud backends, microservice architectures, enterprise web/mobile applications, and high-throughput APIs built specifically to integrate with your custom AI models.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-purple-200 font-mono pt-2">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Kubernetes & GPU Cluster Scaling</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> High-Performance Rust, Go & Next.js Stacks</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> SOC2 & HIPAA Compliant Security</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Real-time WebSockets & gRPC Mesh</div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-black border border-purple-400/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-amber-400 animate-pulse" />
                <span className="font-mono text-xs text-purple-200">Custom Engineering Architecture Ready for Enterprise Scale</span>
              </div>
              <button
                onClick={scrollToContact}
                className="text-xs font-mono text-amber-300 hover:text-white underline flex items-center gap-1 cursor-pointer"
              >
                Consult Architects <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}