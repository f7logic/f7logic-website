export default function PageHeader({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <header className="mx-auto max-w-7xl px-6 pb-12 pt-32 lg:px-10 lg:pt-40">
      <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
        {title}
      </h1>
      {intro ? <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">{intro}</p> : null}
    </header>
  );
}
