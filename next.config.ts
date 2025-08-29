import type { NextConfig } from "next";
const REPO_NAME = "amya-portfolio-next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${REPO_NAME}`,
  assetPrefix: `/${REPO_NAME}/`,
  trailingSlash: true,

  // while we iterate, don’t fail the build on types/eslint
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true }
};
export default nextConfig;
