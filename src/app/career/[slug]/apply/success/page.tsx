import Link from "next/link";

export default function ApplicationSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f1ea] px-6 text-zinc-900">
      <div className="max-w-xl rounded-[2rem] border border-emerald-200 bg-white/85 p-10 text-center shadow-[0_18px_42px_rgba(15,23,42,0.08)]">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-700">✓</div>
        <h1 className="text-3xl font-black text-zinc-950">Application Submitted</h1>
        <p className="mt-4 text-zinc-700">
          Thank you for applying. Our recruitment team will review your submission and reach out to you via email.
        </p>
        <Link href="/career" className="mt-8 inline-flex rounded-full bg-zinc-900 px-6 py-3 font-bold text-white hover:bg-zinc-700">
          Back to Careers
        </Link>
      </div>
    </main>
  );
}
