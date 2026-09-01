import BentoCard from "@/components/ui/BentoCard";
import { Cpu, ShieldCheck, GitMerge, Zap } from "lucide-react";

export default function BentoFeatures() {
  return (
    <section id="features" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3">
            Modular Intelligence
          </h2>
          <p className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Engineered for pure software dominance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Large Card 1 */}
          <BentoCard className="md:col-span-2">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Self-Orchestrating Logic Pipelines</h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg mb-6">
              F7 Logic continually analyzes code, execution logs, and data streams to dynamically restructure workflows without manual intervention.
            </p>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-zinc-400">
              <span className="text-cyan-400">STATUS:</span> Dynamic node re-routing enabled across 18 edge locations.
            </div>
          </BentoCard>

          {/* Card 2 */}
          <BentoCard>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Deterministic Guardrails</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Real-time validation layers protect against model drift, hallucination, and confidential token leaks.
            </p>
          </BentoCard>

          {/* Card 3 */}
          <BentoCard>
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
              <GitMerge className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Multi-Model Routing</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Dynamically switch requests between specialized LLMs to maximize inference speed and minimize GPU compute costs.
            </p>
          </BentoCard>

          {/* Large Card 4 */}
          <BentoCard className="md:col-span-2">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Autonomous Event Streaming</h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg mb-6">
              Process millions of events with embedded vector memory and instant sub-millisecond decisioning.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-emerald-400">
              <span className="bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-md">✓ gRPC Native</span>
              <span className="bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-md">✓ WebAssembly</span>
              <span className="bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-md">✓ Zero Memory Leak</span>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}