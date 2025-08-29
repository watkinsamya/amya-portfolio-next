/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

/* IMPORTANT for GitHub Pages */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/amya-portfolio-next" : "",
  assetPrefix: isProd ? "/amya-portfolio-next/" : "",
};

export default nextConfig;
