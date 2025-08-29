import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <article className="mx-auto max-w-3xl px-6 py-12">
        <p><Link href="/projects">← Back to projects</Link></p>
        <h1 className="mt-2 text-3xl font-bold">{project.title}</h1>
        <p className="mt-2 text-gray-600">{project.summary}</p>
      </article>
    </main>
  );
}
