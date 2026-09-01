import F1HeroStage from "@/components/sections/F1HeroStage";
import NebulaStage from "@/components/sections/NebulaStage";
import NeuronsStage from "@/components/sections/NeuronsStage";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="flex flex-col min-h-screen">
        {/* STAGE 1: Fullscreen F1 Video Hero */}
        <F1HeroStage />

        {/* STAGE 2: White Background + 3D Colorful Nebula */}
        <NebulaStage />

        {/* STAGE 3: Electric Orange Canvas + 4K AI Neurons & Contact Form */}
        <NeuronsStage />
      </div>
    </>
  );
}