/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        permanent: true, // 영원히 페이지가 이동했음을 알려준다.
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false, // 일시적 페이지 이동
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/ellie',
        destination: '/about/me/ellie',
      },
      {
        source: '/items/:slug',
        destination: '/products/:slug',
      },
    ];
  },
};

module.exports = nextConfig;
