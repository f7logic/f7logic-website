import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createJob, deleteJob, getJobs, type Job } from "@/lib/career-data";

const ADMIN_COOKIE = "f7_admin_session";

const parseList = (value: string) =>
  value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

async function loginAdmin(formData: FormData) {
  "use server";

  const cookieStore = await cookies();
  const password = String(formData.get("password") || "");
  const expected = process.env.ADMIN_PASSWORD || "";

  if (!expected || password !== expected) {
    redirect("/admin?error=invalid");
  }

  cookieStore.set(ADMIN_COOKIE, "true", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  redirect("/admin");
}

async function logoutAdmin() {
  "use server";

  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE);
  redirect("/admin");
}

async function createJobAction(formData: FormData) {
  "use server";

  const cookieStore = await cookies();
  if (cookieStore.get(ADMIN_COOKIE)?.value !== "true") {
    redirect("/admin");
  }

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

  if (!input.title || !input.department || !input.location || !input.summary || !input.deadline) {
    redirect("/admin?error=missing-fields");
  }

  await createJob(input);
  redirect("/admin?created=1");
}

async function deleteJobAction(formData: FormData) {
  "use server";

  const cookieStore = await cookies();
  if (cookieStore.get(ADMIN_COOKIE)?.value !== "true") {
    redirect("/admin");
  }

  const slug = String(formData.get("slug") || "");
  if (slug) await deleteJob(slug);
  redirect("/admin?deleted=1");
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams?: Promise<{ error?: string; created?: string; updated?: string; deleted?: string }>;
}) {
  const params = searchParams ? await searchParams : {};
  const cookieStore = await cookies();
  const authenticated = cookieStore.get(ADMIN_COOKIE)?.value === "true";
  const jobs: Job[] = await getJobs();

  return (
    <main className="min-h-screen bg-[#050b12] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Admin Portal</p>
            <h1 className="mt-3 text-4xl font-black">F7 Logic Careers</h1>
          </div>
          <Link href="/career" className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200 hover:border-sky-400 hover:text-white">
            View candidate page
          </Link>
        </div>

        {params.error === "invalid" && (
          <div className="mb-6 rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-200">
            Invalid admin password.
          </div>
        )}

        {params.error === "missing-fields" && (
          <div className="mb-6 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-200">
            Please complete all required fields before creating the role.
          </div>
        )}

        {params.created === "1" && (
          <div className="mb-6 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-200">
            Job role published successfully.
          </div>
        )}

        {params.deleted === "1" && (
          <div className="mb-6 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-200">
            Job role deleted successfully.
          </div>
        )}

        {params.updated === "1" && (
          <div className="mb-6 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-200">
            Job role updated successfully.
          </div>
        )}

        {params.error === "update-failed" && (
          <div className="mb-6 rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-200">
            The job role could not be updated.
          </div>
        )}

        {!authenticated ? (
          <div className="max-w-lg rounded-[2rem] border border-slate-700 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
            <h2 className="text-2xl font-bold">Secure access</h2>
            <p className="mt-2 text-sm text-slate-300">
              Enter the admin password configured in your environment to manage job postings.
            </p>

            <form action={loginAdmin} className="mt-8 space-y-5">
              <label className="block space-y-2 text-sm text-slate-300">
                <span>Admin password</span>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400"
                />
              </label>

              <button type="submit" className="w-full rounded-full bg-sky-500 px-6 py-3 font-bold text-white hover:bg-sky-400">
                Unlock admin portal
              </button>
            </form>
          </div>
        ) : (
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <section className="rounded-[2rem] border border-slate-700 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
              <div className="mb-6 flex items-center justify-between gap-3">
                <h2 className="text-2xl font-bold">Create job role</h2>
                <form action={logoutAdmin}>
                  <button type="submit" className="rounded-full border border-slate-600 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 hover:border-rose-400 hover:text-white">
                    Logout
                  </button>
                </form>
              </div>

              <form action={createJobAction} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="space-y-2 text-sm text-slate-300">
                    <span>Role title</span>
                    <input name="title" required className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400" />
                  </label>

                  <label className="space-y-2 text-sm text-slate-300">
                    <span>Department</span>
                    <input name="department" required className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400" />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="space-y-2 text-sm text-slate-300">
                    <span>Location</span>
                    <input name="location" required className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400" />
                  </label>

                  <label className="space-y-2 text-sm text-slate-300">
                    <span>Application deadline</span>
                    <input type="date" name="deadline" required className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400" />
                  </label>
                </div>

                <label className="block space-y-2 text-sm text-slate-300">
                  <span>Summary</span>
                  <textarea name="summary" rows={4} required className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400" />
                </label>

                <label className="block space-y-2 text-sm text-slate-300">
                  <span>Who we are</span>
                  <textarea name="whoWeAre" rows={4} required className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400" placeholder="One point per line" />
                </label>

                <label className="block space-y-2 text-sm text-slate-300">
                  <span>Job responsibilities</span>
                  <textarea name="responsibilities" rows={4} required className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400" placeholder="One point per line" />
                </label>

                <label className="block space-y-2 text-sm text-slate-300">
                  <span>Requirements</span>
                  <textarea name="requirements" rows={4} required className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400" placeholder="One point per line" />
                </label>

                <button type="submit" className="w-full rounded-full bg-sky-500 px-6 py-3 font-bold text-white hover:bg-sky-400">
                  Publish role
                </button>
              </form>
            </section>

            <aside className="rounded-[2rem] border border-slate-700 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
              <h2 className="text-2xl font-bold">Current roles</h2>
              <div className="mt-6 space-y-4">
                {jobs.map((job: Job) => (
                  <div key={job.id} className="rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-sky-300">{job.department}</p>
                    <h3 className="mt-2 text-lg font-bold text-white">{job.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{job.location}</p>
                    <p className="mt-3 text-xs text-slate-400">
                      Deadline: {new Date(job.deadline).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <Link href={`/admin/edit/${job.slug}`} className="rounded-full border border-sky-400/50 px-3 py-1.5 text-xs font-semibold text-sky-300 hover:bg-sky-400/10">
                        Edit
                      </Link>
                      <form action={deleteJobAction}>
                        <input type="hidden" name="slug" value={job.slug} />
                        <button type="submit" className="rounded-full border border-rose-400/50 px-3 py-1.5 text-xs font-semibold text-rose-300 hover:bg-rose-400/10">
                          Delete
                        </button>
                      </form>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
