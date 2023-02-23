/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        source: '/dashboard/:any*',
        destination: '/dashboard',
      },
    ]
  },

  transpilePackages: ['polar-react-kit'],
}

module.exports = nextConfig
