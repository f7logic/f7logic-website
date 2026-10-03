import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CompanyBand() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-[2rem] border border-line bg-surface p-8 sm:p-12">
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-4xl">
            Sharp engineering, paired with practical intelligence.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink-soft">
            We help organizations make better decisions, automate meaningful work and build for what comes next. Our work is grounded in hands-on engineering, data and AI experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="btn btn-secondary">
              About F7 Logic
            </Link>
            <Link href="/certifications" className="btn btn-secondary">
              Certifications
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[2rem] bg-night p-8 text-white sm:p-10">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em]">
              Build with us
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-white/70">
              We hire engineers who care about shipping AI and software that holds up in the real world.
            </p>
          </div>
          <Link href="/career" className="btn btn-accent mt-10 self-start">
            View open roles
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
