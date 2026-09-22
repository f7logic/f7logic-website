import CredentialsStage from "@/components/sections/CredentialsStage";
import { getCertifications } from "@/lib/career-data";

export const metadata = {
  title: "Certifications | F7 Logic",
  description: "Explore the certifications and technical credentials behind F7 Logic.",
};

export default async function CertificationsPage() {
  const certifications = await getCertifications();

  return (
    <main className="min-h-screen bg-[#f5f1ea] pt-14">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-24 sm:pt-32">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-700">Certifications</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-zinc-950 sm:text-8xl">Proof behind the practice.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600">A growing record of the certifications, capabilities, and people that shape the work we deliver.</p>
      </div>
      <CredentialsStage certifications={certifications} />
    </main>
  );
}
