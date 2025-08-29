import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type PageProps = { params: { slug: string } };

// Pre-generate static paths for export
export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

// If you want a nice title in the tab (optional, safe with export)
export const dynamic = "force-static";

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/projects" className="text-sm opacity-70 hover:opacity-100">
          ← Back to projects
        </Link>

        <h1 className="mt-4 text-4xl font-bold">{project.title}</h1>
        <p className="mt-2 text-neutral-300">{project.subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map(t => (
            <span
              key={t}
              className="text-xs rounded-full border border-neutral-700 px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        {project.cover && (
          /* eslint-disable @next/next/no-img-element */
          <img
            src={project.cover}
            alt={project.title}
            className="mt-8 w-full rounded-xl border border-neutral-800"
          />
        )}

        <div className="prose prose-invert mt-8 max-w-none">
          <p>{project.summary}</p>
        </div>

        <div className="mt-10 flex gap-3">
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-900"
            >
              Read full case study
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-900"
            >
              View code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-900"
            >
              Live demo
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
