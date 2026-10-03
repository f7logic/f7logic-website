import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getJobBySlug } from "@/lib/career-data";

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) return notFound();

  const sections = [
    { title: "Who we are", items: job.whoWeAre },
    { title: "Responsibilities", items: job.responsibilities },
    { title: "Requirements", items: job.requirements },
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32 lg:pt-40">
      <Link href="/career" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink">
        <ArrowLeft className="h-4 w-4" />
        All roles
      </Link>

      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium text-ink-faint">
            {job.department} · {job.location}
          </p>
          <h1 className="mt-2 font-display text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            {job.title}
          </h1>
        </div>
        <span className="w-fit rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft">
          Apply by{" "}
          {new Date(job.deadline).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
        </span>
      </div>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">{job.summary}</p>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.title} className="border-t border-line pt-8">
            <h2 className="font-display text-2xl font-semibold tracking-[-0.02em]">{section.title}</h2>
            <ul className="mt-5 space-y-3 text-[15px] leading-7 text-ink-soft">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-12 flex border-t border-line pt-8">
        <Link href={`/career/${job.slug}/apply`} className="btn btn-primary">
          Apply for this role
        </Link>
      </div>
    </div>
  );
}
