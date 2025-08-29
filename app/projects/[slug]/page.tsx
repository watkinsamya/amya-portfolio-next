import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default function ProjectCaseStudy({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <article className="mx-auto max-w-3xl px-6 py-12 prose prose-gray">
        <p><Link href="/projects">← Back to projects</Link></p>

        <h1 className="!mt-2">{project.title}</h1>
        <p className="lead">{project.summary}</p>

        <h2>Overview</h2>
        <p>Stub content — replace with your real case study.</p>

        <h2>Process</h2>
        <ul>
          <li>Research & discovery</li>
          <li>Wireframes & prototypes</li>
          <li>Visual design & implementation</li>
          <li>Testing & iteration</li>
        </ul>

        <div className="mt-8 flex gap-3">
          {project.demo && (
            <a className="rounded-md border px-4 py-2" href={project.demo} target="_blank" rel="noreferrer">
              View demo
            </a>
          )}
          {project.code && (
            <a className="rounded-md border px-4 py-2" href={project.code} target="_blank" rel="noreferrer">
              View code
            </a>
          )}
        </div>
      </article>
    </main>
  );
}
