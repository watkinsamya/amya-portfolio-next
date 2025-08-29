export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  image?: string
  repo?: string
  demo?: string
  caseStudy?: boolean  // default true
}

const projects: Project[] = [
  {
    slug: 'refreshed-3d-carousel',
    title: 'Refreshed Probiotic Soda — 3D Carousel UI (Figma)',
    description: 'Interactive 3D carousel concept with dynamic transitions to boost engagement for a probiotic soda brand.',
    tags: ['Figma', 'UI Motion', 'Prototype'],
    demo: 'https://www.figma.com/proto/M0G1ARuvJFHCIIFBCPrPlg/Refreshed?t=WyxayQswpKyth8Wc-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2&show-proto-sidebar=1',
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&q=60'
  },
  {
    slug: 'mindnest',
    title: 'MindNest — Mental Health App Prototype',
    description: 'Mobile experience focused on mood tracking, guided journaling, and calming UI for teens/young adults.',
    tags: ['Figma', 'UX', 'Prototype'],
    demo: 'https://www.figma.com/proto/JtMmthD0biKAElpL1CXA2i/Good-Health-and-Well-being?node-id=1-3&p=f&t=0mNDI8fXVOG8zJUM-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=60'
  },
  {
    slug: 'path-in-motion',
    title: 'Path in Motion — Brand & Content',
    description: 'Brand/account showcasing internship & job discovery; social strategy, content design, and audience growth experiments.',
    tags: ['Branding', 'Content', 'Social'],
    demo: 'https://www.instagram.com/pathinmotion/?igsh=MXJrNzJzeGoycmc1dg%3D%3D#',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=60'
  },
  {
    slug: 'adobe-express-1',
    title: 'Campaign Graphics Set (Adobe Express)',
    description: 'Published social graphics; color/typography system and export-ready assets.',
    tags: ['Adobe Express', 'Graphics'],
    demo: 'https://new.express.adobe.com/publishedV2/urn:aaid:sc:US:2a5f6157-085f-48bd-a08f-c32754cc61e5?category=search',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=60'
  },
  {
    slug: 'adobe-express-2',
    title: 'Carousel + Poster Set (Adobe Express)',
    description: 'Additional published set exploring hierarchy, rhythm, and contrast for engagement.',
    tags: ['Adobe Express', 'Graphics'],
    demo: 'https://new.express.adobe.com/publishedV2/urn:aaid:sc:US:1ee6bf81-f788-45ba-8ef0-830b3aa024be?category=search',
    image: 'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d5?w=1200&q=60'
  },
  {
    slug: 'ewallet',
    title: 'EWallet (Java Swing, SQL)',
    description: 'GUI wallet with login/auth, expense tracking, and planned DB integration; GitFlow + Trello workflow.',
    tags: ['Java', 'Swing', 'SQL'],
    repo: 'https://github.com/cheesecheeseCHEEESE/Ewallet-SENG210',
    image: 'https://images.unsplash.com/photo-1554224155-3a589877462f?w=1200&q=60'
  },
  {
    slug: 'legacy-html',
    title: 'Legacy Projects Page (HTML Portfolio)',
    description: 'Earlier collection of web work; kept for history and extra context.',
    tags: ['HTML/CSS', 'Archive'],
    demo: 'https://watkinsamya.github.io/amya-portfolio/projects.html',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=60',
    caseStudy: false
  }
]

// helpers
export function getProjectBySlug(slug: string) {
  return projects.find(p => p.slug === slug)
}
export function getProjectSlugs() {
  return projects.map(p => p.slug)
}
export default projects

