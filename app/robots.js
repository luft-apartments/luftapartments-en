export default function robots() {
  return {
    rules: {
      userAgent: '*',
      // allow: '/',
      disallow: '/',
    },
    sitemap: 'https://en.luft-apartments.de/sitemap.xml',
  }
}