export default function MetricsStrip() {
  const metrics = [
    { value: "99.99%", label: "Deployment Reliability" },
    { value: "< 2.5ms", label: "Model Inference Latency" },
    { value: "5+ Core", label: "AI Engineering Domains" },
    { value: "100%", label: "Custom Architecture" },
  ];

  return (
    <section id="metrics" className="py-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto rounded-3xl bg-black/80 border border-purple-300/30 p-8 backdrop-blur-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {metrics.map((item, idx) => (
          <div key={idx}>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-purple-200">
              {item.value}
            </div>
            <div className="text-xs uppercase tracking-wider text-purple-200/80 mt-1 font-bold">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}