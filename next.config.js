/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' as it's incompatible with API routes needed for Auth.js
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;