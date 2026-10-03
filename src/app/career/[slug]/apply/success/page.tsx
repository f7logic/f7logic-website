import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ApplicationSuccessPage() {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-xl items-center px-6 pb-16 pt-32">
      <div className="w-full rounded-[2rem] border border-line bg-surface p-10 text-center shadow-[0_30px_70px_-45px_rgba(21,23,29,0.45)]">
        <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" />
        <h1 className="mt-6 font-display text-3xl font-semibold tracking-[-0.03em]">Application submitted</h1>
        <p className="mt-3 text-[15px] leading-7 text-ink-soft">
          Thank you for applying. Our recruitment team will review your submission and reach out by email.
        </p>
        <Link href="/career" className="btn btn-primary mt-8">
          Back to careers
        </Link>
      </div>
    </div>
  );
}
