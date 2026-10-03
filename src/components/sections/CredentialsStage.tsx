import Image from "next/image";
import { ArrowUpRight, Award, BadgeCheck } from "lucide-react";
import type { Certification } from "@/lib/career-data";

const leaders = [
  {
    name: "Md. Ahied Mahi Chowdhury",
    designation: "Founder & Software Engineer",
    photo: "",
  },
];

function initials(name: string) {
  return name
    .replace(/^md\.?\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function CredentialsStage({ certifications = [] }: { certifications?: Certification[] }) {
  return (
    <section id="credentials" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
      <div className="border-t border-line pt-12">
        <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-4xl">
          Built by engineers. Driven by intelligence.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
          Our expertise is grounded in hands-on engineering, data and AI experience, combined with practical business understanding.
        </p>
      </div>

      {certifications.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-line px-6 py-10 text-center text-sm text-ink-faint">
          Certifications will appear here as they are published.
        </p>
      ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((credential) => (
            <article
              key={credential.id || credential.title + credential.issuer}
              className="flex flex-col rounded-3xl border border-line bg-surface p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-night text-white">
                  <Award className="h-5 w-5" />
                </div>
                <BadgeCheck className="h-5 w-5 text-accent" aria-label="Verified credential" />
              </div>
              <p className="mt-6 text-sm font-medium text-ink-faint">{credential.issuer}</p>
              <h3 className="mt-1 font-display text-xl font-semibold tracking-[-0.02em]">{credential.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{credential.detail}</p>

              {credential.fileData ? (
                <a
                  href={credential.fileData}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block overflow-hidden rounded-2xl border border-line bg-paper"
                >
                  {credential.fileType.startsWith("image/") ? (
                    <Image
                      src={credential.fileData}
                      alt={`${credential.title} certificate`}
                      width={640}
                      height={420}
                      className="h-36 w-full object-cover"
                    />
                  ) : (
                    <span className="flex h-36 items-center justify-center text-sm font-semibold text-accent">
                      Open certificate PDF
                    </span>
                  )}
                </a>
              ) : null}

              {credential.credentialUrl ? (
                <a
                  href={credential.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent hover:text-accent-deep"
                >
                  View credential
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      )}

      <div className="mt-20">
        <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-4xl">
          Leadership
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="flex items-center gap-5 rounded-3xl border border-line bg-surface p-5"
            >
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-night text-white">
                {leader.photo ? (
                  <Image src={leader.photo} alt={leader.name} fill sizes="80px" className="object-cover" />
                ) : (
                  <span className="font-display text-2xl font-semibold" aria-hidden="true">
                    {initials(leader.name)}
                  </span>
                )}
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold tracking-[-0.01em]">{leader.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{leader.designation}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
