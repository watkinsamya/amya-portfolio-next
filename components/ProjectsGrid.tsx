'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Project } from '@/data/projects'
import { projects as raw } from '@/data/projects'

// Normalize fields so the grid can use a single shape.
type Card = Project & {
  image?: string
  description?: string
  repo?: string
}

const data: Card[] = raw.map(p => ({
  ...p,
  // map your data keys -> what the grid expects
  image: p.cover ?? (p as any).image,
  description: p.summary ?? (p as any).description,
  repo: p.code ?? (p as any).repo,
}))

export default function ProjectsGrid({ limit }: { limit?: number }) {
  const list = typeof limit === 'number' ? data.slice(0, limit) : data

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
            href={p.demo || p.repo || `/projects/${p.slug}`}
            target={p.demo || p.repo ? '_blank' : '_self'}
            rel="noreferrer"
            className="block"
          >
            <div className="aspect-[16/10] rounded-xl mb-4 overflow-hidden">
              {p.image ? (
                <div
                  className="w-full h-full bg-center bg-cover"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-100 flex items-center justify-center text-neutral-500 text-sm">
                  No cover image
                </div>
              )}
            </div>
          </a>

          <h3 className="font-semibold">{p.title}</h3>
          <p className="text-sm text-neutral-600 mt-1 flex-1">{p.description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map(t => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {/* if you ever add caseStudy:false to an item, this will hide the link */}
            {(p as any).caseStudy !== false && (
              <Link className="btn-outline" href={`/projects/${p.slug}`}>
                Read case study
              </Link>
            )}
            {p.repo && (
              <a className="btn-outline" href={p.repo} target="_blank" rel="noreferrer">
                View code
              </a>
            )}
            {!p.repo && p.demo && (
              <a className="btn-outline" href={p.demo} target="_blank" rel="noreferrer">
                View prototype
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
