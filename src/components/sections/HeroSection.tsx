import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DenseNeurons from "@/components/ui/DenseNeurons";

const stack = ["Python", "PyTorch", "TensorFlow", "Next.js", "Go", "Rust", "Kubernetes", "PostgreSQL"];

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="hero-in max-w-2xl">
          <h1
            id="hero-title"
            className="font-display text-[clamp(2.6rem,6.2vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-ink"
          >
            Software and AI, built to run in production.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">
            F7 Logic designs and ships computer vision, language-model, data and custom software systems for teams that need them to work from day one.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contact" className="btn btn-primary">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/#services" className="btn btn-secondary">
              See what we build
            </Link>
          </div>
        </div>

        <div className="hero-in-late">
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[0_30px_80px_-40px_rgba(21,23,29,0.4)] [background-image:radial-gradient(circle_at_1px_1px,rgba(21,23,29,0.07)_1px,transparent_0)] [background-size:22px_22px]">
            <DenseNeurons className="relative h-[clamp(340px,70vw,560px)] w-full" />
            <p className="pointer-events-none absolute bottom-4 left-5 text-xs text-ink-faint">
              Move your cursor over the network.
            </p>
          </div>
        </div>
      </div>

      <div className="border-y border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-x-10 gap-y-3 px-6 py-6 sm:flex-row sm:items-center lg:px-10">
          <p className="text-sm text-ink-faint">Built with</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 font-display text-lg font-medium text-ink-soft">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
