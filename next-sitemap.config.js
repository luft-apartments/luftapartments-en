/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_WP_URL,
  changefreq: 'daily',
  priority: 0.7,
  generateRobotsTxt: true,
}