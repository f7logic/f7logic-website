export default function Process() {
  const steps = [
    { num: "01", title: "Feasibility & AI Scoping", desc: "We evaluate your datasets, determine model selection (Vision, LLM, or Agents), and design a high-throughput architecture." },
    { num: "02", title: "Custom Model Training", desc: "Fine-tuning weights, setting up vector indexes, engineering deterministic guardrails, and building validation loops." },
    { num: "03", title: "Core Software Integration", desc: "Developing enterprise backend APIs, interactive UI/UX, and cloud infrastructure with sub-millisecond response times." },
    { num: "04", title: "Deployment & Scaling", desc: "Deploying to secure edge or dedicated GPU clusters with 99.99% uptime guarantees and live telemetry." },
  ];

  return (
    <section id="process" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black/75 border border-purple-300/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-lg">
            Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
            How F7 Logic builds your AI software
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-black/85 border border-purple-300/30 space-y-4 shadow-xl hover:border-amber-400 transition-colors">
              <div className="font-mono text-3xl font-extrabold text-amber-300">{step.num}</div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="text-purple-100/70 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}