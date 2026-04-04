import type { Metadata } from 'next'
import Image from 'next/image'
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
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?w=700&q=80',
    imageAlt: 'Optimizare Google Business Profile — SEO local pentru afaceri din Constanța',
  },
  {
    slug: 'cat-costa-website-restaurant-constanta',
    title: 'Cât costă un website pentru un restaurant din Constanța în 2025',
    excerpt: 'Analiză detaliată a costurilor pentru un website de restaurant profesional. De ce 0 RON investiție inițială este posibil și ce implică.',
    date: '2025-01-08',
    readTime: '7 min',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80',
    imageAlt: 'Website pentru restaurant — design profesional și meniu digital online',
  },
  {
    slug: 'social-media-afaceri-locale-constanta',
    title: 'Social media pentru afaceri locale din Constanța — ghid practic 2025',
    excerpt: 'Cum folosești Instagram, Facebook și TikTok să aduci clienți noi la afacerea ta locală. Strategii testate, nu teorie.',
    date: '2025-01-02',
    readTime: '9 min',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=80',
    imageAlt: 'Social media marketing pentru afaceri locale — Instagram, Facebook și TikTok',
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

      <section className="bg-white relative overflow-hidden pt-32 pb-16 border-b border-stone">
        <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 gold-glow" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1400&q=80"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container-site relative z-10 text-center max-w-4xl mx-auto">
          <p className="eyebrow mb-6">Blog</p>
          <h1 className="font-head font-extrabold text-h1 text-navy mb-4">
            Marketing digital
            <br />
            <span className="text-gold">fără jargon.</span>
          </h1>
          <p className="font-body italic text-muted text-lg max-w-2xl mx-auto">
            Articole practice pentru antreprenori locali din Constanța. Fără teorie inutilă.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-site max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group bg-white border border-stone rounded-2xl overflow-hidden hover:border-gold/30 hover:shadow-xl hover:shadow-navy/8 hover:-translate-y-0.5 transition-all duration-300">
                <Link href={`/blog/${post.slug}`} className="grid grid-cols-1 sm:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="relative h-48 sm:h-auto overflow-hidden sm:col-span-1">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/0 sm:bg-gradient-to-r sm:from-transparent sm:to-white/5" />
                  </div>
                  {/* Content */}
                  <div className="sm:col-span-2 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-xs uppercase tracking-widest text-gold bg-gold/5 border border-gold/20 px-3 py-1 rounded-full">{post.category}</span>
                        <span className="font-mono text-xs text-muted">{formatDate(post.date)}</span>
                        <span className="font-mono text-xs text-muted">· {post.readTime} citire</span>
                      </div>
                      <h2 className="font-head font-bold text-navy text-2xl mb-3 group-hover:text-gold transition-colors leading-tight">
                        {post.title}
                      </h2>
                      <p className="font-body text-muted text-sm leading-relaxed">{post.excerpt}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold group-hover:gap-3 transition-all duration-200">
                      Citește articolul <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
