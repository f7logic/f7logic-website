import type { Metadata } from "next";
import AboutStage from "@/components/sections/AboutStage";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how F7 Logic turns complex ideas into useful AI and software systems.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Technology with a point of view."
        intro="We pair sharp engineering with practical intelligence to help organizations make better decisions, automate meaningful work and build for what comes next."
      />
      <AboutStage />
    </>
  );
}
