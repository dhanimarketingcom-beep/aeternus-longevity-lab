import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // React strict mode for better development
  reactStrictMode: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

  // Image optimization configuration for Netlify
  images: {
    unoptimized: false,
  },

  // Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Add trailing slash to URLs for better static hosting
  trailingSlash: true,

  // Keep Turbopack rooted in this project even when sibling lockfiles exist.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
