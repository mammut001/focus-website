/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/focus-website',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
