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
    slug: 'email-marketing-afaceri-locale-constanta-2025',
    title: 'Email marketing pentru afaceri locale din Constanța — ghid complet 2025',
    excerpt: 'Email marketing-ul are cel mai mare ROI dintre toate canalele digitale: 42 RON pentru fiecare 1 RON investit. Cum îl aplici concret ca afacere locală din Constanța.',
    date: '2025-04-16',
    readTime: '8 min',
    category: 'Email Marketing',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633064bb5?w=700&q=80',
    imageAlt: 'Email marketing pentru afaceri locale din Constanța — newsletter și campanii email',
  },
  {
    slug: 'tiktok-restaurante-saloane-constanta-2025',
    title: 'TikTok pentru restaurante și saloane din Constanța — strategie 2025',
    excerpt: 'TikTok nu este doar pentru tineri. Este cel mai puternic motor de descoperire locală din 2025. Cum folosești videoclipuri scurte să aduci clienți noi în Constanța.',
    date: '2025-04-09',
    readTime: '7 min',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=700&q=80',
    imageAlt: 'TikTok marketing pentru restaurante și saloane din Constanța — videoclipuri scurte',
  },
  {
    slug: 'recenzii-google-cum-obtii-mai-multe-2025',
    title: 'Recenzii Google — cum obții mai multe recenzii pozitive în 2025',
    excerpt: 'Recenziile Google sunt valuta credibilității online. 88% din consumatori au la fel de multă încredere în recenziile online ca în recomandările personale. Ghid practic pentru afaceri din Constanța.',
    date: '2025-04-02',
    readTime: '7 min',
    category: 'SEO Local',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=700&q=80',
    imageAlt: 'Recenzii Google pentru afaceri locale din Constanța — cum obții mai multe recenzii pozitive',
  },
  {
    slug: 'viteza-website-seo-afaceri-constanta',
    title: 'Viteza website-ului afectează SEO — ce trebuie să știe orice afacere din Constanța',
    excerpt: 'Un website lent pierde clienți înainte ca aceștia să vadă ce oferi. 53% din vizitatori abandonează un site care se încarcă în mai mult de 3 secunde. Ce faci concret.',
    date: '2025-03-26',
    readTime: '8 min',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80',
    imageAlt: 'Viteza website-ului și SEO — Core Web Vitals pentru afaceri din Constanța',
  },
  {
    slug: 'marketing-sezon-litoral-marea-neagra-constanta',
    title: 'Marketing de sezon pentru afaceri de pe litoralul Mării Negre — strategie completă',
    excerpt: 'Sezonul estival aduce milioane de turiști pe litoralul românesc. Cum îți pregătești prezența online să captezi maximum de clienți în lunile mai–septembrie.',
    date: '2025-03-19',
    readTime: '9 min',
    category: 'Marketing Digital',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=80',
    imageAlt: 'Marketing de sezon pentru litoralul Mării Negre — strategie estivală Constanța Mamaia',
  },
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
  {
    slug: 'google-ads-afaceri-locale-constanta-2025',
    title: 'Google Ads pentru afaceri locale din Constanța — cum funcționează în 2025',
    excerpt: 'Ghid practic pentru rularea campaniilor Google Ads ca afacere locală. Cum setezi un buget realist, ce cuvinte-cheie alegi și cum eviți să arzi bani.',
    date: '2025-02-10',
    readTime: '9 min',
    category: 'Google Ads',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80',
    imageAlt: 'Google Ads campanii pentru afaceri locale din Constanța — reclame plătite Google',
  },
  {
    slug: 'fotografie-profesionala-restaurant-constanta',
    title: 'De ce fotografia profesională îți crește vânzările — ghid pentru afaceri din Constanța',
    excerpt: 'Fotografiile de calitate nu sunt un lux. Sunt instrumentul de marketing cu cel mai rapid ROI pentru restaurante, pensiuni și saloane din Constanța.',
    date: '2025-02-17',
    readTime: '6 min',
    category: 'Fotografie',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80',
    imageAlt: 'Fotografie profesională restaurant Constanța — meniu foto și galerie',
  },
  {
    slug: 'branding-identitate-vizuala-afaceri-mici-constanta',
    title: 'Branding și identitate vizuală pentru afaceri mici din Constanța — de unde începi',
    excerpt: 'Logo, culori, fonturi — cum construiești o identitate vizuală coerentă care face afacerea ta să pară profesională, chiar și cu un buget mic.',
    date: '2025-02-24',
    readTime: '7 min',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=700&q=80',
    imageAlt: 'Branding și identitate vizuală pentru afaceri mici din Constanța — logo și design',
  },
  {
    slug: 'seo-local-constanta-ghid-complet-2025',
    title: 'SEO local pentru Constanța în 2025 — cum apari primul pe Google',
    excerpt: 'Strategie completă de SEO local: optimizare Google Business, cuvinte-cheie locale, link building și conținut care te urcă în topul rezultatelor Google.',
    date: '2025-03-05',
    readTime: '11 min',
    category: 'SEO Local',
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?w=700&q=80',
    imageAlt: 'SEO local Constanța — optimizare Google pentru afaceri din Dobrogea',
  },
  {
    slug: 'abonament-marketing-digital-constanta-cum-alegi',
    title: 'Abonament de marketing digital — cum alegi pachetul potrivit pentru afacerea ta',
    excerpt: 'Ce include un abonament de marketing digital, cum compari ofertele și ce rezultate realiste să aștepți. Ghid pentru antreprenori din Constanța.',
    date: '2025-03-12',
    readTime: '8 min',
    category: 'Marketing Digital',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80',
    imageAlt: 'Abonament marketing digital Constanța — pachet lunar administrare online',
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
