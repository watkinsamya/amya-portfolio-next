import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { getProjectBySlug, getProjectSlugs } from '@/data/projects'

type Params = { params: { slug: string } }

export function generateStaticParams() {
  return getProjectSlugs().map(slug => ({ slug }))
}

export function generateMetadata({ params }: Params) {
  const project = getProjectBySlug(params.slug)
  return { title: project ? `${project.title} — Case Study` : 'Project — Case Study' }
}

export default function CaseStudy({ params }: Params) {
  const project = getProjectBySlug(params.slug)
  if (!project) return notFound()

  return (
    <section className="section">
      <div className="container">
        <Link href="/projects" className="btn-outline mb-6 inline-flex">← Back to projects</Link>
        <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
        <p className="mt-2 text-neutral-600">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map(t => <span key={t} className="badge">{t}</span>)}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demo && (
            <a className="btn-primary" href={project.demo} target="_blank" rel="noreferrer">
              View prototype <ExternalLink size={16}/>
            </a>
          )}
          {project.repo && (
            <a className="btn-outline" href={project.repo} target="_blank" rel="noreferrer">
              View code <Github size={16}/>
            </a>
          )}
        </div>

        {/* Stub write-up — replace with your real case study later */}
        <div className="prose-basic mt-10 space-y-6">
          <h3>Overview</h3>
          <p>
            Placeholder case study. Replace with problem, goals, constraints, and success metrics. Add key screens, flows,
            and (ideally) a short video or GIF demonstrating interactions.
          </p>

          <h3>Process</h3>
          <ul>
            <li>Discovery & Research (user goals, competitive scan)</li>
            <li>Wireframes & IA (low-fi → mid-fi)</li>
            <li>Visual System (color, type, spacing, components)</li>
            <li>Prototype & Motion (micro-interactions, transitions)</li>
            <li>Usability pass & iterations (accessibility, polish)</li>
          </ul>

          <h3>Outcome</h3>
          <p>Summarize impact and what you’d do next with more time.</p>
        </div>
      </div>
    </section>
  )
}
