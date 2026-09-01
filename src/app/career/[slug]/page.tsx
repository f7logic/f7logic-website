import Link from "next/link";
import { notFound } from "next/navigation";
import { getJobBySlug } from "@/lib/career-data";

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) return notFound();

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-zinc-900">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/career" className="mb-8 inline-flex text-sm text-zinc-700 hover:text-zinc-900">
          ← Back to careers
        </Link>

        <div className="rounded-[2rem] border border-zinc-200 bg-white/80 p-8 shadow-[0_18px_42px_rgba(15,23,42,0.08)]">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">{job.department}</p>
              <h1 className="mt-3 text-3xl font-black text-zinc-950 sm:text-5xl">{job.title}</h1>
            </div>
            <div className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700">
              Deadline: {new Date(job.deadline).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
            </div>
          </div>

          <p className="mb-8 text-base text-zinc-700">{job.summary}</p>

          <div className="grid gap-8">
            <section>
              <h2 className="mb-4 text-xl font-bold text-zinc-950">Who we are</h2>
              <ul className="space-y-3 text-zinc-700">
                {job.whoWeAre.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-zinc-950">Job responsibilities</h2>
              <ul className="space-y-3 text-zinc-700">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-zinc-950">Requirements</h2>
              <ul className="space-y-3 text-zinc-700">
                {job.requirements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-10 flex justify-end">
            <Link
              href={`/career/${job.slug}/apply`}
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-700"
            >
              Apply for this role
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
