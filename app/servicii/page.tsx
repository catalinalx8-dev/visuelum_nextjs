import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Globe, Smartphone, Search, Camera, Target, Palette, ArrowRight, CheckCircle2, Zap, Users, BarChart2 } from 'lucide-react'
import { CtaSection } from '@/components/sections/CtaSection'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Servicii Marketing Digital Constanța — Website Gratuit, SEO, Social Media, Foto',
  description: 'Servicii complete de marketing digital în Constanța: website profesional creat gratuit, SEO local, social media management, fotografie Sony A7 II, Google Ads și branding. Un singur abonament, de la 349 RON/lună.',
  alternates: { canonical: `${siteConfig.url}/servicii` },
  keywords: 'servicii marketing digital Constanta, website profesional Constanta, SEO local Constanta, social media management Constanta, fotografie profesionala Constanta, Google Ads Constanta',
}

const industryLabels = [
  'Restaurante', 'Saloane & Barber', 'Clinici', 'Pensiuni & Cazare',
  'Fitness', 'Retail', 'Imobiliare', 'Juridic', 'Educație', 'Construcții',
]

const serviceImages: Record<string, string> = {
  '/servicii/website': 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
  '/servicii/social-media': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
  '/servicii/seo': 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?w=600&q=80',
  '/servicii/foto-video': 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80',
  '/servicii/google-ads': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  '/servicii/branding': 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&q=80',
}

const services = [
  {
    icon: Globe,
    title: 'Website Profesional',
    desc: 'Website-ul afacerii tale creat gratuit — fără niciun cost inițial. Design personalizat, mobil-optimizat (Google Mobile First), viteză maximă și SEO din fundație. Livrat în 14 zile calendaristice. Inclus în abonamentul lunar: mentenanță, backup automat, SSL și uptime monitorizat.',
    href: '/servicii/website',
    highlight: '0 RON investiție inițială',
    benefits: ['Design personalizat', 'Mobile-first', 'SEO din fundație', 'Live în 14 zile'],
  },
  {
    icon: Smartphone,
    title: 'Social Media Complet',
    desc: 'Gestionăm complet prezența ta pe Instagram, Facebook și TikTok. Postări zilnice, stories, copywriting adaptat brandului tău, publicare programată și răspuns la comentarii. Faceless — brandul tău strălucește, noi rămânem în umbră.',
    href: '/servicii/social-media',
    highlight: 'Faceless — brandul tău',
    benefits: ['Postări zilnice', 'Stories + Reels', 'Copywriting inclus', '3 platforme simultan'],
  },
  {
    icon: Search,
    title: 'SEO & Google Local',
    desc: 'Apari primul în căutările locale Google și Google Maps. Optimizăm Google Business Profile, construim autoritate locală prin conținut relevant, audit tehnic complet și monitorizare continuă a pozițiilor. SEO creat pentru AIO (AI Overview) și voice search.',
    href: '/servicii/seo',
    highlight: 'Apari primul pe Maps',
    benefits: ['Google Business activ', 'Audit tehnic SEO', 'AIO optimization', 'Raport lunar poziții'],
  },
  {
    icon: Camera,
    title: 'Fotografie & Video',
    desc: 'Fotografii profesionale la locația ta cu Sony A7 II. Lumină naturală, editare Lightroom completă, livrare în 48 de ore. Video Reels și TikTok filmate și editate de echipa noastră. Nu stock photo — conținut real, autentic, care vinde.',
    href: '/servicii/foto-video',
    highlight: 'Sony A7 II · 48h livrare',
    benefits: ['Sony A7 II', 'Editare Lightroom', 'Livrare 48h', 'Reels & TikTok'],
  },
  {
    icon: Target,
    title: 'Google Ads & Meta Ads',
    desc: 'Campanii PPC complete administrate de noi: Google Search, Google Display, Meta (Facebook + Instagram) Ads. Bugetul de publicitate se plătește direct în platforme — transparent, fără comisioane ascunse. Optimizare zilnică pentru CPC minim și conversii maxime.',
    href: '/servicii/google-ads',
    highlight: 'Clienți în câteva zile',
    benefits: ['Google Search Ads', 'Meta Ads', 'Optimizare zilnică', 'Buget transparent'],
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    desc: 'Identitate vizuală completă: logo profesional, paletă de culori, tipografie, manual de brand, materiale grafice pentru print și digital. Brandingul tău creat să inspire încredere și să fie memorabil — de la prima impresie.',
    href: '/servicii/branding',
    highlight: 'Identitate profesională',
    benefits: ['Logo profesional', 'Manual de brand', 'Materiale print', 'Design digital'],
  },
]

const advantages = [
  {
    icon: Zap,
    title: 'Un singur abonament',
    desc: 'Nu 3-4 agenții diferite pentru site, social, foto și reclame. O singură echipă, o singură factură, zero confuzie.',
  },
  {
    icon: Users,
    title: 'Dedicat afacerilor locale',
    desc: 'Cunoaștem piața din Dobrogea. Strategii adaptate realității locale — nu template-uri generice copy-paste.',
  },
  {
    icon: BarChart2,
    title: 'Rezultate măsurabile',
    desc: 'Lunar primești un raport cu cifre reale: trafic, apeluri, lead-uri, poziții Google. Știi exact ce primești.',
  },
]

const serviciiFaqs = [
  {
    q: 'Chiar este gratuit website-ul?',
    a: 'Da. Website-ul este creat și găzduit de noi fără niciun cost inițial. Singura condiție este un angajament minim de 6 luni prin care recuperăm costul de producție prin abonamentul lunar.',
  },
  {
    q: 'Pot lua doar un serviciu, nu un pachet complet?',
    a: 'Serviciile sunt concepute ca parte a unui abonament integrat pentru eficiență maximă. Totuși, pentru fotografii sau branding punctual, contactează-ne și discutăm o soluție personalizată.',
  },
  {
    q: 'Cât durează să văd rezultate din SEO?',
    a: 'SEO local în Google Maps — rezultate vizibile în 4-8 săptămâni. Poziții organice în Google Search — rezultate solide în 2-4 luni, cu creștere continuă.',
  },
  {
    q: 'Administrați campaniile Google Ads și Meta Ads?',
    a: 'Da. Noi creăm, configurăm și optimizăm zilnic campaniile. Bugetul media se plătește direct de tine în Google/Meta — nu trece prin noi. Comisionul nostru de administrare este inclus în abonamentul DOMINARE.',
  },
  {
    q: 'Faceți fotografii și în afara Constanței?',
    a: 'Da, în toată Dobrogea: Mamaia, Năvodari, Mangalia, Tulcea, Eforie. Pentru deplasări mai lungi, costul se stabilește transparent înainte de ședință.',
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
      <section className="bg-white relative overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-16 border-b border-stone">
        <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 gold-glow" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container-site relative z-10 text-center max-w-4xl mx-auto">
          <p className="eyebrow mb-5 sm:mb-6">Servicii marketing digital — Constanța</p>
          <h1 className="font-head font-extrabold text-h1 text-navy mb-5 sm:mb-6">
            Toate serviciile de care ai nevoie.
            <br />
            <span className="text-gold">Un singur abonament accesibil.</span>
          </h1>
          <p className="font-body italic text-muted text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10">
            De la website profesional creat gratuit, până la fotografie Sony A7 II și Google Ads —
            totul gestionat de o singură echipă din Constanța, pe o singură factură lunară.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pachete" className="btn-primary px-8 py-3.5 text-sm">
              Vezi pachete & prețuri
            </Link>
            <Link href="/contact" className="border border-gold/40 text-gold hover:bg-gold/10 transition-colors px-8 py-3.5 font-mono text-xs uppercase tracking-widest rounded-xl">
              Solicită audit gratuit →
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages strip */}
      <section className="bg-navy py-12">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2.5 bg-gold/10 text-gold">
                  <adv.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-head font-bold text-cream mb-1">{adv.title}</h3>
                  <p className="font-body text-xs text-cream/60 leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services detailed */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Ce facem</p>
            <h2 className="font-head font-extrabold text-h2 text-navy">
              6 servicii integrate. O singură echipă locală.
            </h2>
            <p className="font-body italic text-muted mt-4 max-w-2xl mx-auto">
              Fiecare serviciu este construit să funcționeze independent și mai puternic împreună.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group service-card block overflow-hidden p-0 rounded-xl"
                aria-label={`${service.title} — ${service.highlight}`}
              >
                {/* Service image */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <Image
                    src={serviceImages[service.href]}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="inline-flex p-2.5 bg-gold/90 text-white rounded-xl">
                      <service.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-gold mb-2">
                    {service.highlight}
                  </p>
                  <h3 className="font-head font-bold text-h3 text-navy mb-3">{service.title}</h3>
                  <p className="font-body text-muted text-sm leading-relaxed mb-5">{service.desc}</p>
                  <ul className="space-y-1.5 mb-6" aria-label={`Beneficii ${service.title}`}>
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold flex-shrink-0" aria-hidden="true" />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-ink">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold group-hover:gap-3 transition-all duration-200">
                    Detalii complete <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why integrated approach */}
      <section className="bg-navy-deep py-16 lg:py-20">
        <div className="container-site max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">De ce un abonament tot-în-unu?</p>
            <h2 className="font-head font-extrabold text-h2 text-cream">
              Strategia digitală completă <span className="text-gold">bate</span> serviciile izolate.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Website + SEO = vizibilitate organică',
                desc: 'Un website optimizat SEO din fundație aduce trafic organic constant — fără să plătești pentru fiecare click. Combinate, website-ul și SEO-ul devin cel mai rentabil canal de achiziție pe termen lung.',
              },
              {
                title: 'Foto + Social Media = conținut autentic',
                desc: 'Fotografiile profesionale la locația ta alimentează social media cu conținut real, care rezonează cu audiența locală. Nu stock photo, nu clipart — imaginile afacerii tale, zilnic pe feed.',
              },
              {
                title: 'Google Ads + Landing page = conversii imediate',
                desc: 'Campaniile de publicitate funcționează cel mai bine cu un website de calitate. Trimitem traficul plătit pe pagini optimizate pentru conversie — nu pe homepage-ul generic.',
              },
              {
                title: 'Branding consistent pe toate canalele',
                desc: 'Logo, culori, fonturi, ton de comunicare — identitatea brandului tău este coerentă pe website, social media, print și reclame. Consistența construiește încredere și recunoaștere.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-navy border border-navy-mid p-8">
                <div className="w-8 h-0.5 bg-gold mb-5" />
                <h3 className="font-head font-bold text-cream mb-3 text-lg">{item.title}</h3>
                <p className="font-body text-sm text-cream/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="bg-parchment py-16">
        <div className="container-site max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4">Industrii</p>
          <h2 className="font-head font-extrabold text-h2 text-navy mb-6">
            Strategii adaptate industriei tale.
          </h2>
          <p className="font-body italic text-muted mb-10 max-w-2xl mx-auto">
            Lucrăm cu afaceri din zeci de industrii din Dobrogea. Fiecare industrie are provocări specifice — și soluții specifice.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {industryLabels.map((ind) => (
              <span key={ind} className="font-mono text-xs uppercase tracking-wider text-gold bg-gold/5 border border-gold/20 px-4 py-2">
                {ind}
              </span>
            ))}
          </div>
          <Link href="/industrii" className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-gold hover:text-gold-l transition-colors">
            Vezi toate industriile → <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="bg-cream py-16">
        <div className="container-site max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-4">Pachete & Prețuri</p>
          <h2 className="font-head font-extrabold text-h2 text-navy mb-6">
            3 pachete clare. Prețuri corecte. Zero risc.
          </h2>
          <p className="font-body italic text-muted mb-8 max-w-2xl mx-auto">
            De la 349 RON/lună cu website creat gratuit. Fără taxe de setup. Garanție 30 zile. Angajament minim 6 luni.
          </p>
          <Link href="/pachete" className="btn-primary px-10 py-4">
            Vezi pachete & prețuri
          </Link>
        </div>
      </section>

      <FaqAccordion faqs={serviciiFaqs} title="Întrebări despre servicii" />

      <CtaSection />
    </>
  )
}
