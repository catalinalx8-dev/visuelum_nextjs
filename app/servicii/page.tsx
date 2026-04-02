import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, Smartphone, Search, Camera, Target, Palette, ArrowRight } from 'lucide-react'
import { CtaSection } from '@/components/sections/CtaSection'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Servicii de Marketing Digital — Website, SEO, Social Media, Foto',
  description: 'Servicii complete de marketing digital pentru afaceri locale din Constanța: website profesional, social media, SEO local, fotografie, Google Ads și branding.',
  alternates: { canonical: `${siteConfig.url}/servicii` },
}

const services = [
  {
    icon: Globe,
    title: 'Website Profesional',
    desc: 'Creat gratuit în abonament. Design profesional, mobil-optimizat, live în 14 zile.',
    href: '/servicii/website',
    highlight: '0 RON investiție inițială',
  },
  {
    icon: Smartphone,
    title: 'Social Media Complet',
    desc: 'Postări zilnice, stories, copywriting, publicare — noi facem totul. Brandul tău, vocea ta.',
    href: '/servicii/social-media',
    highlight: 'Faceless — brandul tău',
  },
  {
    icon: Search,
    title: 'SEO & Google Local',
    desc: 'Google Business activ, optimizare tehnică, cuvinte cheie locale, AIO optimization.',
    href: '/servicii/seo',
    highlight: 'Apari primul pe Maps',
  },
  {
    icon: Camera,
    title: 'Fotografie & Video',
    desc: 'Sony A7 II, lumină naturală, editare Lightroom profesională. Livrare în 48 ore.',
    href: '/servicii/foto-video',
    highlight: 'Sony A7 II · 48h livrare',
  },
  {
    icon: Target,
    title: 'Google Ads & Meta Ads',
    desc: 'Campanii PPC complete. Bugetul clientului se plătește direct în platforme, noi administrăm.',
    href: '/servicii/google-ads',
    highlight: 'Clienți în câteva zile',
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    desc: 'Identitate vizuală completă: logo, culori, fonturi, materiale grafice, print.',
    href: '/servicii/branding',
    highlight: 'Identitate profesională',
  },
]

export default function ServiciiPage() {
  const breadcrumbs = [
    { name: 'Acasă', url: siteConfig.url },
    { name: 'Servicii', url: `${siteConfig.url}/servicii` },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="bg-navy-deep relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container-site relative z-10 text-center max-w-4xl mx-auto">
          <p className="eyebrow mb-6">Servicii complete</p>
          <h1 className="font-head font-extrabold text-h1 text-cream mb-6">
            Tot ce are nevoie afacerea ta.
            <br />
            <span className="text-gold">Un singur abonament.</span>
          </h1>
          <p className="font-body italic text-muted-l text-lg max-w-2xl mx-auto">
            De la website gratuit până la fotografie profesională și Google Ads — totul gestionat de o singură echipă,
            pe o singură factură.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group service-card block"
              >
                <div className="inline-flex p-3 bg-gold/10 text-gold mb-5 group-hover:bg-gold group-hover:text-white transition-colors duration-200">
                  <service.icon className="h-6 w-6" />
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-gold mb-2">
                  {service.highlight}
                </p>
                <h2 className="font-head font-bold text-h3 text-navy mb-3">{service.title}</h2>
                <p className="font-body text-muted text-sm leading-relaxed mb-6">{service.desc}</p>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold group-hover:gap-3 transition-all duration-200">
                  Află mai mult <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
