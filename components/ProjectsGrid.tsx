'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Project } from '@/data/projects'
import { projects as raw } from '@/data/projects'
import { withBase } from '@/lib/prefix'

type Card = Project & {
  image?: string
  description?: string
  repo?: string
}

const data: Card[] = raw.map(p => ({
  ...p,
  image: p.cover ?? (p as any).image,
  description: p.summary ?? (p as any).description,
  repo: p.code ?? (p as any).repo,
}))

export default function ProjectsGrid({ limit }: { limit?: number }) {
  const list = typeof limit === 'number' ? data.slice(0, limit) : data

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map((p) => {
        const showCase = Boolean(p.caseStudyUrl ?? p.caseStudy)
        const caseHref = p.caseStudyUrl || `/projects/${p.slug}`

        return (
          <motion.div
            key={p.slug}
            className="card hover:shadow-lg transition flex flex-col"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href={p.demo || p.repo || `/projects/${p.slug}`}
              target={p.demo || p.repo ? '_blank' : '_self'}
              rel="noreferrer"
              className="block"
            >
              <div className="relative aspect-[16/10] rounded-xl mb-4 overflow-hidden bg-neutral-100">
                {p.image && (
                  <img
                    src={withBase(p.image)}
                    alt={`${p.title} cover`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </a>

            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-neutral-600 mt-1 flex-1">{p.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map(t => <span key={t} className="badge">{t}</span>)}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {showCase &&
                (p.caseStudyUrl ? (
                  <a className="btn-outline" href={p.caseStudyUrl} target="_blank" rel="noreferrer">
                    Read case study
                  </a>
                ) : (
                  <Link className="btn-outline" href={caseHref}>
                    Read case study
                  </Link>
                ))
              }
              {p.repo && (
                <a className="btn-outline" href={p.repo} target="_blank" rel="noreferrer">
                  View code
                </a>
              )}
              {!p.repo && p.demo && (
                <a className="btn-outline" href={p.demo} target="_blank" rel="noreferrer">
                  View
                </a>
              )}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

