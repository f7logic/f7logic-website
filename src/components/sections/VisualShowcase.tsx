"use client";

import { motion } from "framer-motion";
import { Activity, Database, Cpu, Layers, Radio, Sparkles } from "lucide-react";

export default function VisualShowcase() {
  return (
    <section id="showcase" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Glow behind the dashboard */}
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/90 to-[#07090e]/95 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl overflow-hidden">
          
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-500/20 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/15 blur-[100px] pointer-events-none" />

          {/* Top Bar of Platform UI */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-mono text-zinc-300">F7 Neural Agent Network — Active Mesh</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Region: Global Edge</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Sync: 100%</span>
            </div>
          </div>

          {/* Visual Grid / Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Live Pipeline Flow Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-black/50 border border-white/5 space-y-4"
            >
              <div className="flex items-center justify-between text-zinc-400">
                <span className="text-xs uppercase font-mono tracking-wider">Logic Stream</span>
                <Radio className="w-4 h-4 text-brand-400 animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-500 to-cyan-400 w-3/4 animate-pulse" />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>Throughput: 840 MB/s</span>
                  <span>99.98% Latency Target</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 text-xs font-mono text-zinc-300 space-y-1">
                <div className="text-brand-300">→ [Ingest] Data payload: 48,290 items</div>
                <div className="text-emerald-400">✓ [Synthesize] Autonomous routing pass</div>
              </div>
            </motion.div>

            {/* Neural Memory Matrix */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-black/50 border border-white/5 space-y-4"
            >
              <div className="flex items-center justify-between text-zinc-400">
                <span className="text-xs uppercase font-mono tracking-wider">Vector Memory</span>
                <Database className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-mono text-white">4.2M</span>
                <span className="text-xs text-zinc-400">Embeddings Indexed</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 pt-2">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="h-7 rounded bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-[10px] font-mono text-brand-300"
                  >
                    V-{i + 1}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Compute Optimization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-black/50 border border-white/5 space-y-4"
            >
              <div className="flex items-center justify-between text-zinc-400">
                <span className="text-xs uppercase font-mono tracking-wider">Autonomous GPU Scale</span>
                <Cpu className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-mono text-white">0.03%</span>
                <span className="text-xs text-emerald-400 font-mono">Idle GPU Waste</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-white/5 p-3 rounded-lg">
                <Sparkles className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Auto-sharding dynamic clusters across 12 pods</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}