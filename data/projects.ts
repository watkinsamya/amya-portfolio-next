export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  cover?: string;
  demo?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    slug: "probiotic-3d",
    title: "Refreshed Probiotic Soda — 3D Carousel UI (Figma)",
    summary: "Interactive 3D carousel concept with smooth micro-interactions.",
    tags: ["UX", "UI", "Figma", "Motion"],
    demo: "https://www.figma.com/proto/M0G1ARuvJFHCIIFBCPrPlg/Refreshed?node-id=2-2&starting-point-node-id=2%3A2",
  },
  {
    slug: "mindnest",
    title: "Mindnest — Mental Health App Prototype (Figma)",
    summary: "Mood tracking, guided journaling, self-care.",
    tags: ["UX", "Prototype", "Figma"],
    demo: "https://www.figma.com/proto/JtMmthD0biKAElpL1CXA2i/Good-Health-and-Well-being?node-id=1-3&starting-point-node-id=1%3A3",
  },
  {
    slug: "path-in-motion",
    title: "Path in Motion — Brand & Social",
    summary: "Brand visuals and social content system.",
    tags: ["Brand", "Graphics", "Content"],
    demo: "https://www.instagram.com/pathinmotion/",
  },
  {
    slug: "ewallet",
    title: "EWallet App (Java, Swing, SQL)",
    summary: "GUI app with secure auth and expense tracking.",
    tags: ["Java", "Swing", "SQL"],
    code: "https://github.com/watkinsamya", // update when you have the repo
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((p) => p.slug);
}
