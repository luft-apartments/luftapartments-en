/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URL],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/apartment_3a/',
  //       destination: '/apartments/apartment-3a',
  //       permanent: true,
  //     },
  //     {
  //       source: '/apartment-2a/',
  //       destination: '/apartments/apartment-2a',
  //       permanent: true,
  //     },
  //     {
  //       source: '/unser-apartment-1b/',
  //       destination: '/apartments/apartment-1b',
  //       permanent: true,
  //     },
  //     {
  //       source: '/apartment-2b/',
  //       destination: '/apartments/apartment-2b',
  //       permanent: true,
  //     },
  //     {
  //       source: '/apartment-3b/',
  //       destination: '/apartments/apartment-3b',
  //       permanent: true,
  //     },
  //     {
  //       source: '/apartment_3a',
  //       destination: '/apartments/apartment-3a',
  //       permanent: true,
  //     },
  //     {
  //       source: '/apartment-2a',
  //       destination: '/apartments/apartment-2a',
  //       permanent: true,
  //     },
  //     {
  //       source: '/unser-apartment-1b',
  //       destination: '/apartments/apartment-1b',
  //       permanent: true,
  //     },
  //     {
  //       source: '/apartment-2b',
  //       destination: '/apartments/apartment-2b',
  //       permanent: true,
  //     },
  //     {
  //       source: '/apartment-3b',
  //       destination: '/apartments/apartment-3b',
  //       permanent: true,
  //     },
  //   ];
  // }
};

module.exports = nextConfig;
