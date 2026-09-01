"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown, Gauge, Zap } from "lucide-react";

export default function F1HeroStage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#f5f1ea] text-zinc-900" style={{ perspective: 1600 }}>
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-55 grayscale contrast-[1.1] brightness-[0.8]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(255,255,255,0.25),_rgba(245,241,234,0.82)_42%,_rgba(245,241,234,1)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-28 lg:px-10 lg:pt-20">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-white/70 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-700 backdrop-blur-sm">
              <Gauge className="h-3.5 w-3.5 text-orange-500" />
              F7 LOGIC // ACTIVE ENGINE
            </div>

            <p className="mb-4 text-sm font-medium text-zinc-700 sm:text-base">
              The Leading AI-Building Platform That Connects
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-zinc-900 sm:text-6xl lg:text-[7rem]">
              LOGIC THAT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500">
                DRIVES <br />
                INNOVATION.
              </span>
            </h1>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-zinc-700"
              >
                Start Your Build
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo("nebula-stage")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white/60 px-7 py-3.5 text-sm font-bold text-zinc-900 backdrop-blur-md transition hover:bg-white/80"
              >
                <Sparkles className="h-4 w-4 text-orange-500" />
                Explore Capabilities
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative min-h-[420px] w-full"
          >
            <div className="absolute inset-0 rounded-[2rem] border border-zinc-300/70 bg-white/25 backdrop-blur-[2px]" />
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-full w-full object-cover opacity-90 grayscale contrast-[1.1] brightness-[0.7]"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="absolute inset-5 rounded-[1.5rem] border border-zinc-300/70 bg-white/15" />

            <div className="absolute -top-8 left-5 right-5 z-20 rounded-full border border-zinc-300/70 bg-white/75 px-4 py-2 text-center text-sm font-medium text-zinc-700 backdrop-blur-md shadow-[0_12px_24px_rgba(15,23,42,0.08)]">
              AI • Data Solutions • Software Development
            </div>

            <div className="absolute left-8 top-28 flex items-center gap-2 rounded-xl border border-zinc-300/70 bg-white/60 px-3 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-700 backdrop-blur-md">
              <Zap className="h-3.5 w-3.5 text-orange-500" />
              latency: 0.8ms
            </div>

            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-zinc-300/70 bg-white/60 px-4 py-3 backdrop-blur-md">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                <span>Live Network</span>
                <span>94.2%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-zinc-200/80">
                <div className="h-full w-[74%] rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-zinc-800" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        onClick={() => scrollTo("nebula-stage")}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-700"
      >
        <span>Scroll to Dense Neurons</span>
        <ChevronDown className="h-4 w-4 text-orange-500" />
      </div>
    </section>
  );
}
