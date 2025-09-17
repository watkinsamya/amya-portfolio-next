// app/lib/paths.ts
export const withBase = (p: string) => {
  // In dev this is '', on GitHub Pages your workflow sets it to '/amya-portfolio-next'
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${base}${p}`;
};

