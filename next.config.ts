import type { NextConfig } from "next";

// cacheComponents is left off for the prototype: almost every page shows
// live data, so plain request-time rendering keeps the code simple.
// Revisit before upgrading to the next Next.js major.
const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
