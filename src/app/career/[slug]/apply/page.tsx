import Link from "next/link";
import { redirect } from "next/navigation";
import { getJobBySlug, submitApplication } from "@/lib/career-data";

export default async function JobApplyPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ error?: string }>;
}) {
  const { slug } = await params;
  const query = searchParams ? await searchParams : {};
  const job = await getJobBySlug(slug);

  if (!job) {
    redirect("/career");
  }

  async function handleSubmit(formData: FormData) {
    "use server";

    const resumeFile = formData.get("resume");
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxFileSize = 5 * 1024 * 1024;

    if (!(resumeFile instanceof File) || resumeFile.size === 0) {
      redirect(`/career/${slug}/apply?error=missing-resume`);
    }

    if (!allowedTypes.includes(resumeFile.type) || resumeFile.size > maxFileSize) {
      redirect(`/career/${slug}/apply?error=invalid-resume`);
    }

    const resumeData = `data:${resumeFile.type};base64,${Buffer.from(await resumeFile.arrayBuffer()).toString("base64")}`;

    const payload = {
      jobSlug: slug,
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      address: String(formData.get("address") || ""),
      resume: resumeData,
      resumeName: resumeFile.name,
      resumeType: resumeFile.type,
    };

    await submitApplication(payload);
    redirect(`/career/${slug}/apply/success`);
  }

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-zinc-900">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Link href={`/career/${job.slug}`} className="mb-8 inline-flex text-sm text-zinc-700 hover:text-zinc-900">
          ← Back to role details
        </Link>

        <div className="rounded-[2rem] border border-zinc-200 bg-white/80 p-8 shadow-[0_18px_42px_rgba(15,23,42,0.08)]">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-zinc-600">Apply for role</p>
          <h1 className="text-3xl font-black text-zinc-950 sm:text-4xl">{job.title}</h1>

          {query.error === "missing-resume" && (
            <p className="mt-5 rounded-xl border border-amber-500/40 bg-amber-50 p-3 text-sm text-amber-700">
              Please select your CV or resume before submitting.
            </p>
          )}

          {query.error === "invalid-resume" && (
            <p className="mt-5 rounded-xl border border-rose-500/40 bg-rose-50 p-3 text-sm text-rose-700">
              Upload a PDF, DOC, or DOCX file up to 5 MB.
            </p>
          )}

          <form action={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-zinc-700">
                <span>Name</span>
                <input name="name" required className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none ring-0 transition focus:border-orange-400" />
              </label>

              <label className="space-y-2 text-sm text-zinc-700">
                <span>Email</span>
                <input type="email" name="email" required className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none ring-0 transition focus:border-orange-400" />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-zinc-700">
                <span>Phone number</span>
                <input name="phone" required className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none ring-0 transition focus:border-orange-400" />
              </label>

              <label className="space-y-2 text-sm text-zinc-700">
                <span>Address</span>
                <input name="address" required className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-900 outline-none ring-0 transition focus:border-orange-400" />
              </label>
            </div>

            <label className="block space-y-2 text-sm text-zinc-700">
              <span>CV / Resume</span>
              <input type="file" name="resume" required accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700 file:mr-4 file:rounded-full file:border-0 file:bg-zinc-900 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-zinc-700" />
              <span className="block text-xs text-zinc-500">PDF, DOC, or DOCX up to 5 MB. You can choose a file from your computer or a synced Drive folder.</span>
            </label>

            <button type="submit" className="w-full rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-zinc-700">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
