import ProjectsGrid from '@/components/ProjectsGrid'

export const metadata = { title: 'Projects — Amya Watkins' }

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Projects</h1>
        <ProjectsGrid />
      </div>
    </section>
  )
}
