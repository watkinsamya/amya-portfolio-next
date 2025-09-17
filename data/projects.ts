// data/projects.ts
export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  cover?: string;       // e.g. '/covers/mindnest.png'
  demo?: string;        // external prototype link
  code?: string;        // repo link
  caseStudy?: boolean;  // show case study button?
  caseStudyUrl?: string; // if provided, button opens this URL
};

export const projects: Project[] = [
  {
    slug: 'probiotic-3d',
    title: 'Refreshed Probiotic Soda — 3D Carousel UI (Figma)',
    summary: 'Interactive 3D carousel concept with smooth micro-interactions.',
    tags: ['UX','UI','Figma','Motion'],
    cover: '/probiotic-3d.png',
    demo: 'https://www.figma.com/proto/M0G1ARuvJFHCIIFBCPrPlg/Refreshed?node-id=2-2&starting-point-node-id=2%3A2',
    caseStudy: false
  },
  {
    slug: 'mindnest',
    title: 'Mindnest — Mental Health App Prototype (Figma)',
    summary: 'Mood tracking, guided journaling, self-care.',
    tags: ['UX','Prototype','Figma'],
    cover: '/mindnest.png',
    demo: 'https://www.figma.com/proto/JtMmthD0biKAElpL1CXA2i/Good-Health-and-Well-being?node-id=1-3&starting-point-node-id=1%3A3',
    caseStudy: true,
    caseStudyUrl:
      'https://new.express.adobe.com/publishedV2/urn:aaid:sc:US:ac33e092-0c61-48b0-9994-ba629cc0f8ef?promoid=Y69SGM5H&mv=other'
  },
  {
    slug: 'path-in-motion',
    title: 'Path in Motion — Brand & Social',
    summary: 'Brand visuals and social content system.',
    tags: ['Brand','Graphics','Content'],
    cover: '/path-in-motion.png',
    demo: 'https://www.instagram.com/pathinmotion/',
    caseStudy: false
  },
  {
    slug: 'ewallet',
    title: 'EWallet App (Java, Swing, SQL)',
    summary: 'GUI app with secure auth and expense tracking.',
    tags: ['Java','Swing','SQL'],
    cover: '/ewallet.png',
    code: 'https://github.com/watkinsamya',
    caseStudy: false
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find(p => p.slug === slug);
}
export function getProjectSlugs() {
  return projects.map(p => p.slug);
}
