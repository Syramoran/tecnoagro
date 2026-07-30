import type { MetadataRoute } from 'next'
import { products } from '@/data/products'

const SITE_URL = 'https://www.tecnoagroag.com.ar'

// These slugs have a dedicated, richer landing page under /productos/*,
// which is the canonical URL — excluded here to avoid duplicate-content entries.
const DEDICATED_LANDING_SLUGS = ['chcnav-nx510-se', 'chcnav-nx610', 'chcnav-nx612']

export default function sitemap(): MetadataRoute.Sitemap {
  const catalogEntries: MetadataRoute.Sitemap = products
    .filter((p) => !DEDICATED_LANDING_SLUGS.includes(p.slug))
    .map((p) => ({
      url: `${SITE_URL}/catalogo/${p.slug}`,
      changeFrequency: 'monthly',
      priority: 0.7,
    }))

  return [
    {
      url: SITE_URL,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/catalogo`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/productos/nx510-se`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/productos/nx610`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/productos/nx612`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...catalogEntries,
  ]
}
