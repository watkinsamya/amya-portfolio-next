// next.config.ts
import type { NextConfig } from "next";

const REPO_NAME = "amya-portfolio-next";

const nextConfig: NextConfig = {
  // Static export for Pages
  output: "export",

  // GitHub Pages serves your site at /<repo>/
  basePath: `/${REPO_NAME}`,
  assetPrefix: `/${REPO_NAME}/`,

  // Better for static hosting:
  trailingSlash: true,

  // Images come from /public — don't use the optimizer on static hosting
  images: { unoptimized: true },

  // Keep the build lenient while you iterate
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;

