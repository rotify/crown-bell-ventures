import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Pin the project root so a stray package-lock.json in a parent folder isn't picked up.
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // Placeholder photography is served from Unsplash until real project photos are ready.
    // Once you move images into /public, you can remove this.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
