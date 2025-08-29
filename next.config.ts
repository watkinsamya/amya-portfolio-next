import type { NextConfig } from 'next'

const REPO_NAME = 'amya-portfolio-next'

const nextConfig: NextConfig = {
  output: 'export',                 // build static site into /out
  images: { unoptimized: true },    // allow next/image without Image Optimization
  basePath: `/${REPO_NAME}`,        // required for GitHub Pages project sites
  assetPrefix: `/${REPO_NAME}/`,
  trailingSlash: true               // helps with nested routes on Pages
}

export default nextConfig
