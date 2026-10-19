

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/about',
    '/contact',
    '/destinations',
    '/services',
  ]

  return pages.map((page) => ({
    url: `https://transolution.africa${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page === '' ? 1 : 0.8,
  }))
}
