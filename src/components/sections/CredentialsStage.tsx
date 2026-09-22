"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, ArrowUpRight, BadgeCheck, UserRound } from "lucide-react";
import type { Certification } from "@/lib/career-data";

const leaders = [
  {
    name: "Md. Ahied Mahi Chowdhury",
    designation: "Founder & Software Engineer - F7 Logic",
    photo: "",
  },
];

export default function CredentialsStage({ certifications = [] }: { certifications?: Certification[] }) {
  return (
    <section id="credentials" className="relative overflow-hidden bg-[#f5f1ea] px-6 py-28 text-zinc-900 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-orange-700">Trust & People</p>
          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-zinc-950 sm:text-6xl">
            Built by engineers. Driven by intelligence.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-zinc-600">
            Our expertise is grounded in hands-on engineering, data, and AI experience. F7 Logic combines technical knowledge with practical business understanding to deliver reliable, scalable digital solutions.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((credential, index) => (
            <motion.article
              key={credential.title + credential.issuer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="border-t-2 border-orange-300 bg-white/65 p-6 shadow-[0_16px_36px_rgba(76,52,33,0.06)]"
            >
              <div className="flex items-center justify-between">
                <Award className="h-6 w-6 text-orange-700" />
                <BadgeCheck className="h-5 w-5 text-emerald-700" />
              </div>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">{credential.issuer}</p>
              <h3 className="mt-2 text-xl font-bold text-zinc-950">{credential.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{credential.detail}</p>
              {credential.fileData ? (
                <a href={credential.fileData} target="_blank" rel="noopener noreferrer" className="mt-5 block overflow-hidden border border-zinc-200 bg-zinc-50">
                  {credential.fileType.startsWith("image/") ? (
                    <Image src={credential.fileData} alt={`${credential.title} certificate`} width={640} height={420} className="h-32 w-full object-cover" />
                  ) : (
                    <span className="flex h-32 items-center justify-center text-xs font-bold uppercase tracking-[0.18em] text-orange-800">Open certificate PDF</span>
                  )}
                </a>
              ) : null}
              {credential.credentialUrl ? (
                <a
                  href={credential.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-800 transition-colors hover:text-orange-600"
                >
                  View Credential
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
            </motion.article>
          ))}
          {certifications.length === 0 ? <p className="text-sm text-zinc-500">Certifications will appear here as they are published.</p> : null}
        </div>

        <div className="mt-20">
          <div className="mb-7 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-700">Leadership</p>
              <h3 className="mt-3 text-3xl font-black text-zinc-950 sm:text-4xl">Founder Credentials</h3>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-6 text-zinc-500 sm:block">The people directing F7 Logic and the experience behind the work.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader, index) => (
              <motion.article
                key={leader.designation}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.55 }}
                className="flex items-center gap-5 border border-[#e4d7c7] bg-[#fbf8f3] p-4"
              >
                <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden border border-dashed border-orange-400/70 bg-orange-50 text-orange-700" aria-label={`Portrait placeholder for ${leader.name}`}>
                  {leader.photo ? (
                    <Image src={leader.photo} alt={leader.name} fill sizes="96px" className="object-cover" />
                  ) : (
                    <UserRound className="h-8 w-8" />
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-950">{leader.name}</h4>
                  <p className="mt-1 text-sm text-orange-800">{leader.designation}</p>
                  {!leader.photo ? <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">Portrait to be added</p> : null}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
