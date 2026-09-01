import Link from "next/link";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { getJobBySlug, updateJob } from "@/lib/career-data";

const ADMIN_COOKIE = "f7_admin_session";

const parseList = (value: string) =>
  value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

async function updateJobAction(formData: FormData) {
  "use server";

  const cookieStore = await cookies();
  if (cookieStore.get(ADMIN_COOKIE)?.value !== "true") {
    redirect("/admin");
  }

  const slug = String(formData.get("slug") || "");
  const input = {
    title: String(formData.get("title") || ""),
    department: String(formData.get("department") || ""),
    location: String(formData.get("location") || ""),
    summary: String(formData.get("summary") || ""),
    deadline: String(formData.get("deadline") || ""),
    whoWeAre: parseList(String(formData.get("whoWeAre") || "")),
    responsibilities: parseList(String(formData.get("responsibilities") || "")),
    requirements: parseList(String(formData.get("requirements") || "")),
  };

  if (!slug || !input.title || !input.department || !input.location || !input.summary || !input.deadline) {
    redirect(`/admin/edit/${slug}?error=missing-fields`);
  }

  const updated = await updateJob(slug, input);
  redirect(updated ? "/admin?updated=1" : "/admin?error=update-failed");
}

export default async function EditJobPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ error?: string }>;
}) {
  const { slug } = await params;
  const query = searchParams ? await searchParams : {};
  const cookieStore = await cookies();

  if (cookieStore.get(ADMIN_COOKIE)?.value !== "true") {
    redirect("/admin");
  }

  const job = await getJobBySlug(slug);
  if (!job) notFound();

  const formatDate = new Date(job.deadline).toISOString().slice(0, 10);

  return (
    <main className="min-h-screen bg-[#050b12] px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/admin" className="mb-8 inline-flex text-sm text-sky-300 hover:text-sky-200">
          ← Back to admin portal
        </Link>

        <section className="rounded-[2rem] border border-slate-700 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
          <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Modify role</p>
          <h1 className="mt-3 text-4xl font-black">{job.title}</h1>

          {query.error === "missing-fields" && (
            <p className="mt-5 rounded-xl border border-amber-500/40 bg-amber-500/10 p-3 text-sm text-amber-200">
              Complete all required fields before saving.
            </p>
          )}

          <form action={updateJobAction} className="mt-8 space-y-5">
            <input type="hidden" name="slug" value={job.slug} />

            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Role title</span>
                <input name="title" required defaultValue={job.title} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400" />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Department</span>
                <input name="department" required defaultValue={job.department} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400" />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Location</span>
                <input name="location" required defaultValue={job.location} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400" />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Application deadline</span>
                <input type="date" name="deadline" required defaultValue={formatDate} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400" />
              </label>
            </div>

            <label className="block space-y-2 text-sm text-slate-300">
              <span>Summary</span>
              <textarea name="summary" rows={4} required defaultValue={job.summary} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400" />
            </label>

            <label className="block space-y-2 text-sm text-slate-300">
              <span>Who we are</span>
              <textarea name="whoWeAre" rows={4} required defaultValue={job.whoWeAre.join("\n")} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400" />
            </label>

            <label className="block space-y-2 text-sm text-slate-300">
              <span>Job responsibilities</span>
              <textarea name="responsibilities" rows={4} required defaultValue={job.responsibilities.join("\n")} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400" />
            </label>

            <label className="block space-y-2 text-sm text-slate-300">
              <span>Requirements</span>
              <textarea name="requirements" rows={4} required defaultValue={job.requirements.join("\n")} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400" />
            </label>

            <button type="submit" className="w-full rounded-full bg-sky-500 px-6 py-3 font-bold text-white hover:bg-sky-400">
              Save changes
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
