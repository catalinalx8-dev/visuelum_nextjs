import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema } from '@/lib/structured-data'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog — Marketing Digital pentru Afaceri Locale',
  description: 'Articole despre marketing digital, SEO local, social media și fotografie profesională pentru afaceri din Constanța.',
  alternates: { canonical: `${siteConfig.url}/blog` },
}

const posts = [
  {
    slug: 'cum-optimizezi-google-business-2025',
    title: 'Cum optimizezi Google Business Profile în 2025',
    excerpt: 'Ghid complet pentru optimizarea Google Business Profile. Apariție în Google Maps, recenzii, postări săptămânale — tot ce trebuie să știi.',
    date: '2025-01-15',
    readTime: '8 min',
    category: 'SEO Local',
  },
  {
    slug: 'cat-costa-website-restaurant-constanta',
    title: 'Cât costă un website pentru un restaurant din Constanța în 2025',
    excerpt: 'Analiză detaliată a costurilor pentru un website de restaurant profesional. De ce 0 RON investiție inițială este posibil și ce implică.',
    date: '2025-01-08',
    readTime: '7 min',
    category: 'Website',
  },
  {
    slug: 'social-media-afaceri-locale-constanta',
    title: 'Social media pentru afaceri locale din Constanța — ghid practic 2025',
    excerpt: 'Cum folosești Instagram, Facebook și TikTok să aduci clienți noi la afacerea ta locală. Strategii testate, nu teorie.',
    date: '2025-01-02',
    readTime: '9 min',
    category: 'Social Media',
  },
]

export default function BlogPage() {
  const breadcrumbs = [
    { name: 'Acasă', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />

      <section className="bg-navy-deep relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container-site relative z-10 max-w-4xl mx-auto">
          <p className="eyebrow mb-6">Blog</p>
          <h1 className="font-head font-extrabold text-h1 text-cream mb-4">
            Marketing digital
            <br />
            <span className="text-gold">fără jargon.</span>
          </h1>
          <p className="font-body italic text-muted-l text-lg max-w-2xl">
            Articole practice pentru antreprenori locali din Constanța. Fără teorie inutilă.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-site max-w-4xl mx-auto">
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white border border-stone p-8 hover:border-gold/30 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-gold bg-gold/5 border border-gold/20 px-3 py-1">{post.category}</span>
                  <span className="font-mono text-xs text-muted">{formatDate(post.date)}</span>
                  <span className="font-mono text-xs text-muted">· {post.readTime} citire</span>
                </div>
                <h2 className="font-head font-bold text-navy text-2xl mb-3 group-hover:text-gold transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="font-body text-muted text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold hover:text-gold-l transition-colors">
                  Citește articolul <ArrowRight className="h-3 w-3" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
