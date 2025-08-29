'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import projects from '@/data/projects'

export default function ProjectsGrid({ limit }: { limit?: number }) {
  const list = typeof limit === 'number' ? projects.slice(0, limit) : projects
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map((p) => (
        <motion.div
          key={p.slug}
          className="card hover:shadow-lg transition flex flex-col"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a href={p.demo || p.repo || `/projects/${p.slug}`} target={p.demo || p.repo ? '_blank' : '_self'} rel="noreferrer">
            <div className="aspect-[16/10] rounded-xl bg-neutral-100 mb-4"
                 style={{ backgroundImage: `url(${p.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </a>
          <h3 className="font-semibold">{p.title}</h3>
          <p className="text-sm text-neutral-600 mt-1 flex-1">{p.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map(t => <span key={t} className="badge">{t}</span>)}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.caseStudy !== false && (
              <Link className="btn-outline" href={`/projects/${p.slug}`}>Read case study</Link>
            )}
            {p.repo && <a className="btn-outline" href={p.repo} target="_blank" rel="noreferrer">View code</a>}
            {!p.repo && p.demo && <a className="btn-outline" href={p.demo} target="_blank" rel="noreferrer">View prototype</a>}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
