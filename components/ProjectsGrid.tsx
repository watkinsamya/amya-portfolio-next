'use client'
import { motion } from 'framer-motion'
import projects from '@/data/projects'

export default function ProjectsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.a
          key={p.slug}
          href={p.demo || p.repo}
          target="_blank"
          rel="noreferrer"
          className="card hover:shadow-lg transition"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="aspect-[16/10] rounded-xl bg-neutral-100 mb-4"
               style={{ backgroundImage: `url(${p.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <h3 className="font-semibold">{p.title}</h3>
          <p className="text-sm text-neutral-600 line-clamp-3 mt-1">{p.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map(t => <span key={t} className="badge">{t}</span>)}
          </div>
        </motion.a>
      ))}
    </div>
  )
}
