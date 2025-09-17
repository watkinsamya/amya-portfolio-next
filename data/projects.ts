export type Project = {
  slug: string
  title: string
  summary: string
  tags: string[]
  cover?: string      // /public path
  demo?: string
  code?: string
  caseStudy?: boolean // only true -> show “Read case study”
}

export const projects: Project[] = [
  {
    slug: 'probiotic-3d',
    title: 'Refreshed Probiotic Soda — 3D Carousel UI (Figma)',
    summary: 'Interactive 3D carousel concept with smooth micro-interactions.',
    tags: ['UX', 'UI', 'Figma', 'Motion'],
    cover: '/covers/probiotic-3d.png',
    demo: 'https://www.figma.com/proto/M0G1ARuvJFHCIIFBCPrPlg/Refreshed?node-id=2-2&starting-point-node-id=2%3A2',
    caseStudy: false,          // no case study button
  },
  {
    slug: 'mindnest',
    title: 'Mindnest — Mental Health App Prototype (Figma)',
    summary: 'Mood tracking, guided journaling, self-care.',
    tags: ['UX', 'Prototype', 'Figma'],
    cover: '/covers/mindnest.png',
    demo: 'https://www.figma.com/proto/JtMmthD0biKAElpL1CXA2i/Good-Health-and-Well-being?node-id=1-3&starting-point-node-id=1%3A3',
    caseStudy: true,           // show "Read case study" (only this one)
  },
  {
    slug: 'path-in-motion',
    title: 'Path in Motion — Brand & Social',
    summary: 'Brand visuals and social content system.',
    tags: ['Brand', 'Graphics', 'Content'],
    cover: '/covers/path-in-motion.png',
    demo: 'https://www.instagram.com/pathinmotion/',
    caseStudy: false,          // only "View"
  },
  {
    slug: 'ewallet',
    title: 'EWallet App (Java, Swing, SQL)',
    summary: 'GUI app with secure auth and expense tracking.',
    tags: ['Java', 'Swing', 'SQL'],
    cover: '/covers/ewallet.png',
    code: 'https://github.com/watkinsamya',   // "View code"
    caseStudy: false,
  },
]



export function getProjectBySlug(slug: string) {
  return projects.find(p => p.slug === slug)
}
export function getProjectSlugs() {
  return projects.map(p => p.slug)
}
