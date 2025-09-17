import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No output:'export', no basePath, no assetPrefix, no trailingSlash.
  images: { unoptimized: false },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;

