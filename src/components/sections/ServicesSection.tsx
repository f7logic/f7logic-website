import Link from "next/link";
import { ArrowUpRight, Bot, Brain, Code2, Eye, LineChart } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Computer vision & spatial AI",
    description:
      "Object detection, 3D mapping, automated inspection and live camera analytics that keep up with your video streams.",
    tags: ["YOLO", "Segment Anything", "Real-time video"],
  },
  {
    icon: Brain,
    title: "Private LLMs & RAG",
    description:
      "Language models and retrieval systems built on your documents, with your data staying under your control.",
    tags: ["LoRA / QLoRA", "Vector + graph retrieval", "Evaluation"],
  },
  {
    icon: Bot,
    title: "AI agents & automation",
    description:
      "Multi-step agents that call your APIs, work in the browser and hand off to a person when they should.",
    tags: ["Planner loops", "Tool use", "Human review"],
  },
  {
    icon: LineChart,
    title: "Data & predictive analytics",
    description:
      "Forecasting, anomaly detection and churn models, delivered with data pipelines your team can maintain.",
    tags: ["Time series", "Anomaly detection", "Vector indexing"],
  },
  {
    icon: Code2,
    title: "Custom software development",
    description:
      "Web platforms, APIs and microservices engineered for scale and straightforward operation.",
    tags: ["Next.js", "Go & Rust", "Kubernetes"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
            What we build
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-ink-soft">
            AI and software engineering under one roof, so the model, the data and the product around it are designed together.
          </p>
          <Link
            href="/#contact"
            className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-deep"
          >
            Not sure which fits? Describe the problem
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="border-b border-line">
          {services.map((service) => (
            <li key={service.title}>
              <article className="grid gap-5 border-t border-line px-1 py-8 transition-colors hover:bg-surface sm:grid-cols-[auto_1fr] sm:gap-7 sm:px-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-night text-white">
                  <service.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em]">{service.title}</h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-7 text-ink-soft">{service.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-soft"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
