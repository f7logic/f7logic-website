import Link from "next/link";
import { ArrowRight } from "lucide-react";

const principles = [
  {
    title: "AI-first thinking",
    text: "We start by asking where intelligence changes the outcome, not where it is fashionable.",
  },
  {
    title: "Engineering excellence",
    text: "Typed, tested and observable systems that your own team can take over.",
  },
  {
    title: "Data-driven decisions",
    text: "Every model and feature is measured against a number that matters to your business.",
  },
  {
    title: "Built for scale",
    text: "Architecture that absorbs growth in users, data and cost without a rewrite.",
  },
];

export default function AboutStage() {
  return (
    <section id="about">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid gap-10 border-t border-line pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-4xl">
            Complex ideas, built into useful systems.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-ink-soft">
            F7 Logic is a technology company delivering AI, software engineering and data solutions that help organizations build smarter, faster and more scalable digital systems.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16">
          <article className="border-t-2 border-ink pt-6">
            <h3 className="font-display text-2xl font-semibold tracking-[-0.02em]">Our mission</h3>
            <p className="mt-3 max-w-md text-[15px] leading-7 text-ink-soft">
              To transform complex business challenges into intelligent, reliable and scalable technology solutions through AI, software and data.
            </p>
          </article>
          <article className="border-t-2 border-ink pt-6">
            <h3 className="font-display text-2xl font-semibold tracking-[-0.02em]">Our vision</h3>
            <p className="mt-3 max-w-md text-[15px] leading-7 text-ink-soft">
              To become a globally trusted technology partner, empowering organizations with intelligent systems that create lasting business value.
            </p>
          </article>
        </div>
      </div>

      <div className="bg-paper-deep">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-4xl">
            How we work
          </h2>
          <ul className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <li key={principle.title} className="border-t border-ink/25 pt-5">
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em]">{principle.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-ink-soft">{principle.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-night p-8 text-white sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em]">Have a project in mind?</h2>
            <p className="mt-3 max-w-md text-[15px] leading-7 text-white/70">
              Tell us about it. We reply within 24 hours.
            </p>
          </div>
          <Link href="/#contact" className="btn btn-accent shrink-0">
            Start a project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
