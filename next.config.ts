import type { NextConfig } from 'next'
const REPO_NAME = 'amya-portfolio-next'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: `/${REPO_NAME}`,
  assetPrefix: `/${REPO_NAME}/`,
  trailingSlash: true,
}
export default nextConfig
