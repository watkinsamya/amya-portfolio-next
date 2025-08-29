'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Section from '@/components/Section'
import ProjectsGrid from '@/components/ProjectsGrid'
import { Mail } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="section">
        <div className="container grid grid-cols-1 md:grid-cols-[auto,1fr] items-center gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Image src="/amya.png" alt="Amya Watkins headshot" width={220} height={220} className="rounded-full ring-4 ring-pinkbrand-200" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h1 className="text-4xl md:text-5xl font-bold">Amya Watkins</h1>
            <p className="mt-3 text-lg text-neutral-600">Front-End Developer & UX Designer · Smyrna, GA</p>
            <a href="#contact" className="btn-primary mt-6 inline-flex"><Mail size={18}/>Let’s work together</a>
            <div className="mt-6 flex gap-3">
              <span className="badge">Creative Design</span>
              <span className="badge">Frontend Focus</span>
              <span className="badge">UX Mindset</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <p className="text-lg text-neutral-700 max-w-3xl">
          I design and build clean, accessible interfaces with motion used thoughtfully. My toolkit includes
          HTML/CSS/JS, React, Java, SQL, and UX methods like wireframing, prototyping, and usability testing.
        </p>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="card">
            <h3 className="font-semibold">General Motors — Key Desk Specialist</h3>
            <p className="text-sm text-neutral-600">Inventory systems, data entry, operational problem-solving.</p>
          </li>
          <li className="card">
            <h3 className="font-semibold">Aptiv — Intern</h3>
            <p className="text-sm text-neutral-600">Built Urchin Tracking Module (UTM) solution used daily.</p>
          </li>
        </ul>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <ProjectsGrid />
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="card">
          <p className="text-neutral-700">Open to internships and roles in Front-End, UI/UX, and QA-focused SWE.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="btn-primary" href="mailto:amya@example.com">Email Me</a>
            <a className="badge" href="https://github.com/watkinsamya" target="_blank" rel="noreferrer">GitHub</a>
            <a className="badge" href="https://www.linkedin.com/in/amya-watkins/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Amya Watkins
      </footer>
    </>
  )
}
