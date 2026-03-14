import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Helps catch potential issues
  swcMinify: true, // Faster, smaller builds with SWC
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "etarath.blr1.digitaloceanspaces.com",
      //   pathname: "/**",
      // },
      {
        protocol: "https",
        hostname: "**", // allow all http hosts
      },
      {
        protocol: "http",
        hostname: "**", // allow all http hosts
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // prevent build fails from ESLint errors
  },
  typescript: {
    ignoreBuildErrors: true, // prevent build fails from TS errors
  },
};

export default nextConfig;
