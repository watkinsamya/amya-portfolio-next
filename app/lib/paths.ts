// app/lib/paths.ts
// Prefix absolute paths when running on GitHub Pages (project site).
const PROD_BASE = '/amya-portfolio-next'

export const withBase = (p: string) =>
  (process.env.NODE_ENV === 'production' ? PROD_BASE : '') + p
