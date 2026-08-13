import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next.js doesn't infer a parent
  // directory (avoids the "inferred workspace root" warning).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
