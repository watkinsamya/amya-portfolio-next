// next.config.ts
import type { NextConfig } from "next";

const REPO = "amya-portfolio-next";

const nextConfig: NextConfig = {
  output: "export",                 // produce static files in ./out
  images: { unoptimized: true },    // required for Pages
  basePath: `/${REPO}`,             // site lives at /amya-portfolio-next
  assetPrefix: `/${REPO}/`,
  trailingSlash: true,

  // don’t block CI on lint/type warnings while you iterate
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
