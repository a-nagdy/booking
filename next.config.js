/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  staticPageGenerationTimeout: 120000,
};

module.exports = nextConfig;
