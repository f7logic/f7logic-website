import type { Metadata } from "next";
import CredentialsStage from "@/components/sections/CredentialsStage";
import PageHeader from "@/components/ui/PageHeader";
import { getCertifications } from "@/lib/career-data";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Explore the certifications and technical credentials behind F7 Logic.",
};

export default async function CertificationsPage() {
  const certifications = await getCertifications();

  return (
    <>
      <PageHeader
        title="Proof behind the practice."
        intro="The certifications, capabilities and people that shape the work we deliver."
      />
      <CredentialsStage certifications={certifications} />
    </>
  );
}
