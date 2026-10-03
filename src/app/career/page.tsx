import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { getJobs } from "@/lib/career-data";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join F7 Logic and build AI systems, software products and high-impact digital experiences.",
};

export default async function CareerPage() {
  const jobs = await getJobs();

  return (
    <>
      <PageHeader
        title="Build with F7 Logic."
        intro="Join a team building AI systems, software products and high-impact digital experiences for ambitious businesses."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        {jobs.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-line px-6 py-10 text-center text-sm text-ink-faint">
            There are no open roles right now. Check back soon.
          </p>
        ) : (
          <ul className="border-b border-line">
            {jobs.map((job) => (
              <li key={job.id}>
                <Link
                  href={`/career/${job.slug}`}
                  className="group grid gap-4 border-t border-line px-1 py-7 transition-colors hover:bg-surface md:grid-cols-[1fr_auto] md:items-center md:px-4"
                >
                  <div>
                    <p className="text-sm font-medium text-ink-faint">
                      {job.department} · {job.location}
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-semibold tracking-[-0.02em]">{job.title}</h2>
                    <p className="mt-2 max-w-2xl text-[15px] leading-7 text-ink-soft">{job.summary}</p>
                  </div>
                  <div className="flex items-center gap-5 md:flex-col md:items-end md:gap-3">
                    <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-soft">
                      Apply by{" "}
                      {new Date(job.deadline).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:text-accent-deep">
                      View role
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
