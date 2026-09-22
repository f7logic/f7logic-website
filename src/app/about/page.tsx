import AboutStage from "@/components/sections/AboutStage";

export const metadata = {
  title: "About F7 Logic",
  description: "Learn how F7 Logic turns complex ideas into useful AI and software systems.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#181311] pt-14">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-24 text-white sm:pt-32">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-300">About F7 Logic</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-8xl">Technology with a point of view.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d7c9bd]">We pair sharp engineering with practical intelligence to help organizations make better decisions, automate meaningful work, and build for what comes next.</p>
      </div>
      <AboutStage />
    </main>
  );
}
