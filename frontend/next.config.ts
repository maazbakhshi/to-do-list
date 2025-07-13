import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add any specific Next.js configurations here
  // For example, to enable experimental features:
  // experimental: {
  //   serverActions: true,
  // },
}

export default nextConfig
