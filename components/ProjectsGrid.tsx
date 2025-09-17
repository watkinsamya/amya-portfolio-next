'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Project } from '@/data/projects'
import { projects as raw } from '@/data/projects'

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
            <div className="relative aspect-[16/10] rounded-xl mb-4 overflow-hidden bg-neutral-100">
              {p.image && (
                <Image
                  src={p.image}
                  alt={`${p.title} cover`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={p.slug === 'probiotic-3d'} // first card loads eagerly
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
            {p.caseStudy && (
              <Link className="btn-outline" href={`/projects/${p.slug}`}>Read case study</Link>
            )}
            {p.repo && (
              <a className="btn-outline" href={p.repo} target="_blank" rel="noreferrer">View code</a>
            )}
            {!p.repo && p.demo && (
              <a className="btn-outline" href={p.demo} target="_blank" rel="noreferrer">View</a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
