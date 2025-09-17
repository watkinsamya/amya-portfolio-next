'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'
import { projects } from '@/data/projects'
import { withBase } from '@/app/lib/paths'

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
          <a
            href={p.demo || p.code || `/projects/${p.slug}`}
            target={p.demo || p.code ? '_blank' : '_self'}
            rel="noreferrer"
            className="block"
          >
            <div className="relative aspect-[16/10] rounded-xl mb-4 overflow-hidden bg-neutral-100">
              {p.cover && (
                <img
                  src={withBase(p.cover)}           // ← '/mindnest.png' etc.
                  alt={`${p.title} cover`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </a>

          <h3 className="font-semibold">{p.title}</h3>
          <p className="text-sm text-neutral-600 mt-1 flex-1">{p.summary}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map(t => <span key={t} className="badge">{t}</span>)}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.caseStudy && p.caseStudyUrl && (
              <a className="btn-outline" href={p.caseStudyUrl} target="_blank" rel="noreferrer">Read case study</a>
            )}
            {p.code && (
              <a className="btn-outline" href={p.code} target="_blank" rel="noreferrer">View code</a>
            )}
            {!p.code && p.demo && (
              <a className="btn-outline" href={p.demo} target="_blank" rel="noreferrer">View</a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
