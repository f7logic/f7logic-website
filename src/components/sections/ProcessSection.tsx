const steps = [
  {
    title: "Discover",
    text: "We map the problem, the data you have and the measure that will tell us it worked.",
  },
  {
    title: "Design",
    text: "You receive an architecture proposal with scope, risks and a build plan.",
  },
  {
    title: "Build",
    text: "We work in short iterations and show working software, not slide decks.",
  },
  {
    title: "Deploy & improve",
    text: "We ship to production, monitor results and retrain or refine as the data changes.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-paper-deep">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
            From first call to production
          </h2>
          <p className="mt-5 text-base leading-7 text-ink-soft">
            A clear path with a decision point at every stage, so you always know what you are getting and when.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="relative border-t-2 border-ink pt-6">
              <span className="font-display text-sm font-semibold text-accent">Step {index + 1}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
