import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'

const blogSlugs = [
  { slug: 'email-marketing-afaceri-locale-constanta-2025', date: '2025-04-16' },
  { slug: 'tiktok-restaurante-saloane-constanta-2025', date: '2025-04-09' },
  { slug: 'recenzii-google-cum-obtii-mai-multe-2025', date: '2025-04-02' },
  { slug: 'viteza-website-seo-afaceri-constanta', date: '2025-03-26' },
  { slug: 'marketing-sezon-litoral-marea-neagra-constanta', date: '2025-03-19' },
  { slug: 'abonament-marketing-digital-constanta-cum-alegi', date: '2025-03-12' },
  { slug: 'seo-local-constanta-ghid-complet-2025', date: '2025-03-05' },
  { slug: 'branding-identitate-vizuala-afaceri-mici-constanta', date: '2025-02-24' },
  { slug: 'fotografie-profesionala-restaurant-constanta', date: '2025-02-17' },
  { slug: 'google-ads-afaceri-locale-constanta-2025', date: '2025-02-10' },
  { slug: 'cum-optimizezi-google-business-2025', date: '2025-01-15' },
  { slug: 'cat-costa-website-restaurant-constanta', date: '2025-01-08' },
  { slug: 'social-media-afaceri-locale-constanta', date: '2025-01-02' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/pachete`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/servicii`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/servicii/website`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/servicii/social-media`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/servicii/seo`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/servicii/google-ads`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/servicii/foto-video`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/servicii/branding`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/industrii`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/despre`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
  ]

  const blogRoutes = blogSlugs.map(({ slug, date }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
