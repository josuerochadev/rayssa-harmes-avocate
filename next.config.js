/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async redirects() {
    return [
      {
        source: '/témoignages',
        destination: '/temoignages',
        permanent: true,
      },
      {
        source: '/t%C3%A9moignages',
        destination: '/temoignages',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig