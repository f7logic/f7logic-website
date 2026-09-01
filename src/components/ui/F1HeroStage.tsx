"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown, Gauge, Zap } from "lucide-react";

export default function F1HeroStage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* 🏎️ Fullscreen Cinematic Formula 1 Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-[0.62] contrast-[1.18]"
      >
        {/* Pre-configured 4K F1 Racing Clip fallback (You can replace with /f1-hero.mp4 in public/) */}
        <source src="https://assets.mixkit.co/videos/preview/mixkit-car-drifting-on-a-racetrack-41584-large.mp4" type="video/mp4" />
      </video>

      {/* Dark Vignette & Speed Line Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/70 pointer-events-none" />

      {/* Real-time F1 Telemetry HUD */}
      <div className="absolute top-28 left-6 sm:left-12 hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono">
        <Gauge className="w-4 h-4 text-orange-500 animate-pulse" />
        <span>F7 ENGINE TELEMETRY // 348 KM/H</span>
      </div>

      <div className="absolute top-28 right-6 sm:right-12 hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono">
        <Zap className="w-4 h-4 text-amber-400" />
        <span>LATENCY: 0.8ms // VELOCITY: 100%</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/90 text-white text-xs font-mono font-bold uppercase tracking-widest mb-6 shadow-[0_0_25px_rgba(239,68,68,0.6)]"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          F1-Grade High Velocity AI Systems
        </motion.div>

        {/* Big Impact Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[1.05] drop-shadow-2xl"
        >
          ENGINEERED FOR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-white drop-shadow-[0_0_40px_rgba(251,146,60,0.6)]">
            PURE SPEED.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto mt-6 mb-10 leading-relaxed font-medium"
        >
          F7 Logic builds custom AI software with racing-grade performance. Computer Vision, private LLMs, and autonomous agent swarms deployed at maximum velocity.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-orange-500 hover:bg-orange-600 font-extrabold text-white shadow-[0_0_35px_rgba(249,115,22,0.6)] transition-all hover:scale-105 flex items-center justify-center gap-2 text-base cursor-pointer"
          >
            Start High-Speed Build
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollTo("nebula-stage")}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/60 hover:bg-black/80 font-bold text-white transition-all flex items-center justify-center gap-2 text-base backdrop-blur-md border border-white/20 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            Explore 3D Capabilities
          </button>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <div 
        onClick={() => scrollTo("nebula-stage")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono text-zinc-400 cursor-pointer animate-bounce"
      >
        <span>SCROLL TO 3D NEBULA</span>
        <ChevronDown className="w-4 h-4 text-orange-400" />
      </div>

    </section>
  );
}