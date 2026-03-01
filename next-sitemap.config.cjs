/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tengfone.dev',
  generateRobotsTxt: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404'],
}
