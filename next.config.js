/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URL],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.bandziuk.website',
        permanent: true,
      },
    ];
  }
};

module.exports = nextConfig;
