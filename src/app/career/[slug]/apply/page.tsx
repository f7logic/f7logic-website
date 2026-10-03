import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
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
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-32 lg:pt-40">
      <Link href={`/career/${job.slug}`} className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink">
        <ArrowLeft className="h-4 w-4" />
        Back to role details
      </Link>

      <div className="rounded-[2rem] border border-line bg-surface p-6 shadow-[0_30px_70px_-45px_rgba(21,23,29,0.45)] sm:p-10">
        <p className="text-sm font-medium text-ink-faint">Apply for</p>
        <h1 className="mt-1 font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{job.title}</h1>

        {query.error === "missing-resume" && (
          <p role="alert" className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800">
            Please select your CV or resume before submitting.
          </p>
        )}

        {query.error === "invalid-resume" && (
          <p role="alert" className="mt-6 rounded-xl border border-rose-300 bg-rose-50 p-3 text-sm text-rose-800">
            Upload a PDF, DOC, or DOCX file up to 5 MB.
          </p>
        )}

        <form action={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Name
              <input name="name" required autoComplete="name" className="field mt-2" />
            </label>
            <label className="block text-sm font-medium">
              Email
              <input type="email" name="email" required autoComplete="email" className="field mt-2" />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Phone number
              <input name="phone" required autoComplete="tel" className="field mt-2" />
            </label>
            <label className="block text-sm font-medium">
              Address
              <input name="address" required autoComplete="street-address" className="field mt-2" />
            </label>
          </div>

          <label className="block text-sm font-medium">
            CV / Resume
            <input
              type="file"
              name="resume"
              required
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="field mt-2 text-sm file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-ink file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-accent"
            />
            <span className="mt-2 block text-xs font-normal text-ink-faint">
              PDF, DOC or DOCX, up to 5 MB.
            </span>
          </label>

          <button type="submit" className="btn btn-primary w-full py-4">
            Submit application
          </button>
        </form>
      </div>
    </div>
  );
}
