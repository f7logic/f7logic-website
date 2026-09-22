export type Job = {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  summary: string;
  deadline: string;
  whoWeAre: string[];
  responsibilities: string[];
  requirements: string[];
};

export type Application = {
  id: string;
  jobSlug: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  resume: string;
  resumeName: string;
  resumeType: string;
  createdAt: string;
};

export type Certification = {
  id: string;
  issuer: string;
  title: string;
  detail: string;
  issuedAt: string;
  credentialUrl: string;
  fileData: string;
  fileName: string;
  fileType: string;
};

const fallbackJobs: Job[] = [
  {
    id: "job-1",
    slug: "senior-ml-engineer",
    title: "Senior ML Engineer",
    department: "AI Engineering",
    location: "Dhaka, Bangladesh",
    summary: "Build production-grade ML pipelines and deploy research into customer-facing systems.",
    deadline: "2026-10-15",
    whoWeAre: [
      "We design AI systems that help businesses make smarter decisions in real time.",
      "Our team blends product strategy, software engineering, and machine learning in one workflow.",
    ],
    responsibilities: [
      "Design, train, and deploy models for production workloads.",
      "Collaborate with product and engineering teams to translate business needs into technical systems.",
      "Monitor model performance and iterate on retraining, evaluation, and drift detection.",
    ],
    requirements: [
      "3+ years of experience in machine learning or applied AI engineering.",
      "Strong Python and SQL skills, with experience in PyTorch, TensorFlow, or scikit-learn.",
      "Comfort working with cloud infrastructure, MLOps tooling, and production deployment workflows.",
    ],
  },
  {
    id: "job-2",
    slug: "full-stack-software-engineer",
    title: "Full-Stack Software Engineer",
    department: "Engineering",
    location: "Remote",
    summary: "Build polished web products, APIs, and internal systems that scale with product demands.",
    deadline: "2026-09-30",
    whoWeAre: [
      "We build fast, modern products that combine design clarity with engineering rigor.",
      "Our engineers own the product lifecycle from architecture to deployment and iteration.",
    ],
    responsibilities: [
      "Develop and maintain full-stack features for customer and internal platforms.",
      "Create resilient APIs, data models, and UI experiences with a product-first mindset.",
      "Improve observability, performance, and deployment quality across the stack.",
    ],
    requirements: [
      "Strong TypeScript, React, and Node.js experience.",
      "Comfort designing REST APIs and database-driven features.",
      "Familiarity with Git workflows, cloud hosting, and system performance optimization.",
    ],
  },
  {
    id: "job-3",
    slug: "computer-vision-researcher",
    title: "Computer Vision Researcher",
    department: "Vision Systems",
    location: "Dhaka, Bangladesh",
    summary: "Research and deploy vision models for safety, inspection, and automation use cases.",
    deadline: "2026-11-05",
    whoWeAre: [
      "We work on high-impact computer vision systems that improve operational visibility and automation.",
      "Our research culture combines experimentation with deployment discipline.",
    ],
    responsibilities: [
      "Develop CV models for object detection, classification, and tracking in real-world environments.",
      "Build evaluation pipelines and benchmark performance against production requirements.",
      "Collaborate with data and platform engineers to ship vision features reliably.",
    ],
    requirements: [
      "Hands-on experience with OpenCV, PyTorch, YOLO, or similar vision stacks.",
      "Strong understanding of image processing, annotation pipelines, and model evaluation.",
      "Ability to communicate results clearly across technical and business stakeholders.",
    ],
  },
];

const fallbackApplications: Application[] = [];

const fallbackCertifications: Certification[] = [
  {
    id: "cert-1",
    issuer: "Microsoft",
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    detail: "Exam: PL-300",
    issuedAt: "",
    credentialUrl: "",
    fileData: "",
    fileName: "",
    fileType: "",
  },
];

type JobInput = {
  title: string;
  department: string;
  location: string;
  summary: string;
  deadline: string;
  whoWeAre: string[];
  responsibilities: string[];
  requirements: string[];
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "role";

const normalizeJobInput = (input: JobInput): Job => ({
  id: `job-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
  slug: slugify(input.title),
  title: input.title,
  department: input.department,
  location: input.location,
  summary: input.summary,
  deadline: input.deadline,
  whoWeAre: input.whoWeAre.filter(Boolean),
  responsibilities: input.responsibilities.filter(Boolean),
  requirements: input.requirements.filter(Boolean),
});

const getSqlClient = async () => {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;

  try {
    const packageName = "@neondatabase/serverless";
    type SqlClient = (
      strings: TemplateStringsArray,
      ...values: unknown[]
    ) => Promise<Array<Record<string, unknown>>>;
    const loadPackage = Function("name", "return import(name)") as (
      name: string,
    ) => Promise<{ neon: (url: string) => SqlClient }>;
    const { neon } = await loadPackage(packageName);
    const sql = neon(databaseUrl);
    await sql`SELECT 1`;
    return sql;
  } catch {
    return null;
  }
};

const ensureSchema = async () => {
  const sql = await getSqlClient();
  if (!sql) return null;

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS jobs (
        id SERIAL PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        department TEXT NOT NULL,
        location TEXT NOT NULL,
        summary TEXT NOT NULL,
        deadline DATE NOT NULL,
        who_we_are TEXT[] NOT NULL DEFAULT '{}',
        responsibilities TEXT[] NOT NULL DEFAULT '{}',
        requirements TEXT[] NOT NULL DEFAULT '{}',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS applications (
        id SERIAL PRIMARY KEY,
        job_slug TEXT NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        address TEXT NOT NULL,
        resume TEXT NOT NULL,
        resume_name TEXT NOT NULL DEFAULT 'resume',
        resume_type TEXT NOT NULL DEFAULT 'application/octet-stream',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS certifications (
        id SERIAL PRIMARY KEY,
        issuer TEXT NOT NULL,
        title TEXT NOT NULL,
        detail TEXT NOT NULL DEFAULT '',
        issued_at DATE,
        credential_url TEXT NOT NULL DEFAULT '',
        file_data TEXT NOT NULL DEFAULT '',
        file_name TEXT NOT NULL DEFAULT '',
        file_type TEXT NOT NULL DEFAULT '',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `;

    await sql`ALTER TABLE applications ADD COLUMN IF NOT EXISTS resume_name TEXT NOT NULL DEFAULT 'resume'`;
    await sql`ALTER TABLE applications ADD COLUMN IF NOT EXISTS resume_type TEXT NOT NULL DEFAULT 'application/octet-stream'`;

    return sql;
  } catch {
    return null;
  }
};

const mapJobRow = (row: Record<string, unknown>): Job => ({
  id: String(row.id ?? row.slug ?? ""),
  slug: String(row.slug ?? ""),
  title: String(row.title ?? ""),
  department: String(row.department ?? "General"),
  location: String(row.location ?? "Remote"),
  summary: String(row.summary ?? ""),
  deadline: String(row.deadline ?? new Date().toISOString().slice(0, 10)),
  whoWeAre: Array.isArray(row.who_we_are) ? row.who_we_are.map(String) : [],
  responsibilities: Array.isArray(row.responsibilities) ? row.responsibilities.map(String) : [],
  requirements: Array.isArray(row.requirements) ? row.requirements.map(String) : [],
});

const mapCertificationRow = (row: Record<string, unknown>): Certification => ({
  id: String(row.id ?? ""),
  issuer: String(row.issuer ?? ""),
  title: String(row.title ?? ""),
  detail: String(row.detail ?? ""),
  issuedAt: row.issued_at ? String(row.issued_at).slice(0, 10) : "",
  credentialUrl: String(row.credential_url ?? ""),
  fileData: String(row.file_data ?? ""),
  fileName: String(row.file_name ?? ""),
  fileType: String(row.file_type ?? ""),
});

export type CertificationInput = Omit<Certification, "id">;

export async function getCertifications(): Promise<Certification[]> {
  const sql = await ensureSchema();

  if (!sql) return fallbackCertifications;

  try {
    const rows = await sql`SELECT * FROM certifications ORDER BY created_at DESC`;
    return rows.map(mapCertificationRow);
  } catch {
    return fallbackCertifications;
  }
}

export async function createCertification(input: CertificationInput) {
  const next: Certification = {
    id: `cert-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    ...input,
  };
  const sql = await ensureSchema();

  if (!sql) {
    fallbackCertifications.unshift(next);
    return next;
  }

  try {
    const rows = await sql`
      INSERT INTO certifications (issuer, title, detail, issued_at, credential_url, file_data, file_name, file_type)
      VALUES (${input.issuer}, ${input.title}, ${input.detail}, ${input.issuedAt || null}, ${input.credentialUrl}, ${input.fileData}, ${input.fileName}, ${input.fileType})
      RETURNING *;
    `;

    return rows.length > 0 ? mapCertificationRow(rows[0]) : next;
  } catch {
    fallbackCertifications.unshift(next);
    return next;
  }
}

export async function deleteCertification(id: string) {
  const sql = await ensureSchema();

  if (!sql) {
    const index = fallbackCertifications.findIndex((certification) => certification.id === id);
    if (index === -1) return false;
    fallbackCertifications.splice(index, 1);
    return true;
  }

  try {
    const rows = await sql`DELETE FROM certifications WHERE id = ${id} RETURNING id`;
    return rows.length > 0;
  } catch {
    return false;
  }
}

export async function getJobs(): Promise<Job[]> {
  const sql = await ensureSchema();

  if (!sql) {
    return fallbackJobs;
  }

  try {
    const rows = await sql`SELECT * FROM jobs ORDER BY deadline ASC`;
    return rows.map(mapJobRow);
  } catch {
    return fallbackJobs;
  }
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  const sql = await ensureSchema();

  if (!sql) {
    return fallbackJobs.find((job) => job.slug === slug) ?? null;
  }

  try {
    const rows = await sql`SELECT * FROM jobs WHERE slug = ${slug}`;
    return rows.length > 0 ? mapJobRow(rows[0]) : null;
  } catch {
    return fallbackJobs.find((job) => job.slug === slug) ?? null;
  }
}

export async function createJob(input: JobInput) {
  const next = normalizeJobInput(input);
  const sql = await ensureSchema();

  if (!sql) {
    fallbackJobs.unshift(next);
    return next;
  }

  try {
    const rows = await sql`
      INSERT INTO jobs (slug, title, department, location, summary, deadline, who_we_are, responsibilities, requirements)
      VALUES (
        ${next.slug},
        ${next.title},
        ${next.department},
        ${next.location},
        ${next.summary},
        ${next.deadline},
        ${next.whoWeAre},
        ${next.responsibilities},
        ${next.requirements}
      )
      RETURNING *;
    `;

    if (rows.length === 0) {
      return next;
    }

    return mapJobRow(rows[0]);
  } catch {
    fallbackJobs.unshift(next);
    return next;
  }
}

export async function updateJob(slug: string, input: JobInput) {
  const next = normalizeJobInput(input);
  const sql = await ensureSchema();

  if (!sql) {
    const index = fallbackJobs.findIndex((job) => job.slug === slug);
    if (index === -1) return null;

    const updated = { ...next, id: fallbackJobs[index].id };
    fallbackJobs[index] = updated;
    return updated;
  }

  try {
    const rows = await sql`
      UPDATE jobs
      SET slug = ${next.slug}, title = ${next.title}, department = ${next.department},
          location = ${next.location}, summary = ${next.summary}, deadline = ${next.deadline},
          who_we_are = ${next.whoWeAre}, responsibilities = ${next.responsibilities},
          requirements = ${next.requirements}
      WHERE slug = ${slug}
      RETURNING *;
    `;

    return rows.length > 0 ? mapJobRow(rows[0]) : null;
  } catch {
    return null;
  }
}

export async function deleteJob(slug: string) {
  const sql = await ensureSchema();

  if (!sql) {
    const index = fallbackJobs.findIndex((job) => job.slug === slug);
    if (index === -1) return false;
    fallbackJobs.splice(index, 1);
    return true;
  }

  try {
    const rows = await sql`DELETE FROM jobs WHERE slug = ${slug} RETURNING slug`;
    return rows.length > 0;
  } catch {
    return false;
  }
}

export async function submitApplication(input: {
  jobSlug: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  resume: string;
  resumeName: string;
  resumeType: string;
}) {
  const sql = await ensureSchema();
  const application: Application = {
    id: `app-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    jobSlug: input.jobSlug,
    name: input.name,
    email: input.email,
    phone: input.phone,
    address: input.address,
    resume: input.resume,
    resumeName: input.resumeName,
    resumeType: input.resumeType,
    createdAt: new Date().toISOString(),
  };

  if (!sql) {
    fallbackApplications.unshift(application);
    return { success: true, application };
  }

  try {
    await sql`
      INSERT INTO applications (job_slug, name, email, phone, address, resume, resume_name, resume_type)
      VALUES (
        ${input.jobSlug},
        ${input.name},
        ${input.email},
        ${input.phone},
        ${input.address},
        ${input.resume},
        ${input.resumeName},
        ${input.resumeType}
      );
    `;

    return { success: true, application };
  } catch {
    fallbackApplications.unshift(application);
    return { success: true, application };
  }
}
