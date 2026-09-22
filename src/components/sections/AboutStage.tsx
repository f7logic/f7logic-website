"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, BrainCircuit, CheckCircle2, Compass, Target } from "lucide-react";

const principles = [
  "AI-first thinking",
  "Engineering excellence",
  "Data-driven decisions",
  "Built for scale",
];

export default function AboutStage() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#181311] px-6 py-28 text-[#f7f1e9] sm:py-36">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full border border-orange-300/20 bg-orange-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
        >
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-orange-300">About F7 Logic</p>
            <h2 className="max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-6xl">
              Complex ideas, built into useful systems.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-[#d7c9bd]">
              F7 Logic is a technology company delivering AI, software engineering, and data solutions that help organizations build smarter, faster, and more scalable digital systems.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-orange-200">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-300/30 bg-orange-300/10">
                <ArrowDownRight className="h-4 w-4" />
              </span>
              From strategy to production
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.article
              id="process"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.55 }}
              className="border-t border-orange-200/30 pt-5"
            >
              <Target className="mb-5 h-6 w-6 text-orange-300" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="mt-3 text-sm leading-7 text-[#c9bbb0]">
                To transform complex business challenges into intelligent, reliable, and scalable technology solutions through AI, software, and data.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.55 }}
              className="border-t border-orange-200/30 pt-5"
            >
              <Compass className="mb-5 h-6 w-6 text-sky-300" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="mt-3 text-sm leading-7 text-[#c9bbb0]">
                To become a globally trusted technology partner, empowering organizations with intelligent systems that create lasting business value.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.26, duration: 0.55 }}
              className="border-t border-orange-200/30 pt-5 sm:col-span-2"
            >
              <BrainCircuit className="mb-5 h-6 w-6 text-emerald-300" />
              <h3 className="text-2xl font-bold">How We Work</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {principles.map((principle) => (
                  <div key={principle} className="flex items-center gap-2 text-sm text-[#d7c9bd]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                    {principle}
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
