import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Pin the project root so a stray package-lock.json in a parent folder isn't picked up.
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // Unsplash resizes images itself, so a custom loader requests the right size straight from it.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
