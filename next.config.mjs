/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Only add basePath and assetPrefix for production builds
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/personal',
    assetPrefix: '/personal/',
  }),
}

export default nextConfig