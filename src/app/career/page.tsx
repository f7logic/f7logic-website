import Link from "next/link";
import { getJobs } from "@/lib/career-data";

export default async function CareerPage() {
  const jobs = await getJobs();

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-600">
            Career Opportunities
          </p>
          <h1 className="text-4xl font-black tracking-tight text-zinc-950 sm:text-6xl">Build with F7 Logic</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-700">
            Join a team building AI systems, software products, and high-impact digital experiences for ambitious businesses.
          </p>
        </div>

        <div className="grid gap-6">
          {jobs.map((job) => (
            <Link
              key={job.id}
              href={`/career/${job.slug}`}
              className="group rounded-3xl border border-zinc-200 bg-white/75 p-6 shadow-[0_12px_24px_rgba(15,23,42,0.06)] transition hover:border-orange-300 hover:bg-white"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">{job.department}</p>
                  <h2 className="mt-2 text-2xl font-bold text-zinc-950">{job.title}</h2>
                  <p className="mt-2 text-sm text-zinc-700">{job.location}</p>
                </div>

                <div className="flex flex-col items-start md:items-end">
                  <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
                    Deadline: {new Date(job.deadline).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                  </span>
                  <span className="mt-3 text-sm font-semibold text-zinc-900 group-hover:text-orange-600">
                    View role →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
