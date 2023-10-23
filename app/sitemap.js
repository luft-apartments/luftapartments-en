export default function sitemap() {
  return [
    {
      url: 'https://luftapartments.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://luftapartments.vercel.app/apartments/apartment-2a',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://luftapartments.vercel.app/apartments/apartment-3a',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}