import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false as any,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
