/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  async rewrites() {
    return [
      {
        source: '/projects/experiments/:site',
        destination: '/experiments/:site/index.html'
      }
      // {
      //   source: '/projects/experiments/:site*',
      //   destination: '/sites/:site*'
      // }
    ]
  }
}

module.exports = nextConfig
