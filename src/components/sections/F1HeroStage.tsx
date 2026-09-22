"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown, Gauge } from "lucide-react";

export default function F1HeroStage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#f5f1ea] text-zinc-900" style={{ perspective: 1600 }}>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#f5f1ea]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-28 lg:px-10 lg:pt-20">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-20 order-2 max-w-xl lg:order-1"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-white/70 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-700 backdrop-blur-sm">
              <Gauge className="h-3.5 w-3.5 text-orange-500" />
              F7 LOGIC // ACTIVE ENGINE
            </div>

            <p className="mb-4 text-sm font-medium text-zinc-700 sm:text-base">
              The Leading AI-Building Platform That Connects
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-zinc-900 sm:text-6xl lg:text-[5.8rem] xl:text-[6.5rem]">
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
            className="relative z-10 order-1 min-h-[clamp(380px,72vw,680px)] w-full lg:order-2 lg:min-h-[680px]"
          >
            <div className="absolute inset-0 z-0 overflow-hidden bg-[#f5f1ea]">
              <Image
                src="/car.jpg?v=2"
                alt="Formula 1 car viewed from above"
                fill
                priority
                unoptimized
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="z-0 object-contain object-right"
                style={{
                  opacity: 1,
                  filter: "none",
                  maskImage: "linear-gradient(to right, transparent 0%, black 30%, black 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%, black 100%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div
        onClick={() => scrollTo("nebula-stage")}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center text-zinc-700"
      >
        <ChevronDown className="h-5 w-5 text-orange-500" />
      </div>
    </section>
  );
}
