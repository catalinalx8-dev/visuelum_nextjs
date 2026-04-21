import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { ContactForm } from '@/components/contact/ContactForm'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Contact — Audit Digital Gratuit în 48h | Visuelum Constanța',
  description: 'Contactează Visuelum pentru un audit digital gratuit al afacerii tale din Constanța. Răspuns în 24 ore. Fără angajament, fără risc. Website gratuit, SEO, social media, fotografie profesională.',
  alternates: { canonical: `${siteConfig.url}/contact` },
}

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Acasă', url: siteConfig.url },
    { name: 'Contact', url: `${siteConfig.url}/contact` },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="bg-white relative overflow-hidden pt-32 pb-16 border-b border-stone">
        <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 gold-glow" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=80"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container-site relative z-10 text-center max-w-4xl mx-auto">
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="font-head font-extrabold text-h1 text-navy mb-4">
            Vrei mai multi clienti?
            <br />
            <span className="text-gold">Hai sa vorbim 10 minute.</span>
          </h1>
          <p className="font-body italic text-muted text-lg max-w-xl mx-auto">
            Completezi formularul in 1 minut sau ne scrii direct pe WhatsApp. Raspundem rapid.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact info — 2 cols */}
            <div className="lg:col-span-2">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-video mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"
                  alt="Biroul Visuelum din Constanța"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent" />
              </div>
              <h2 className="font-head font-bold text-h3 text-navy mb-8">Informații de contact</h2>

              <div className="space-y-6">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-2.5 bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted mb-1">Telefon</p>
                    <p className="font-body text-navy">{siteConfig.phoneDisplay}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-2.5 bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted mb-1">Email</p>
                    <p className="font-body text-navy">{siteConfig.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-gold/10 text-gold">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted mb-1">Locație</p>
                    <p className="font-body text-navy">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-gold/10 text-gold">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted mb-1">Program</p>
                    <p className="font-body text-navy">Luni–Vineri: 09:00–18:00</p>
                  </div>
                </div>

                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-2.5 bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted mb-1">WhatsApp</p>
                    <p className="font-body text-navy">Răspuns rapid în zile lucrătoare</p>
                  </div>
                </a>
              </div>

              {/* Trust points */}
              <div className="mt-10 pt-10 border-t border-stone space-y-3">
                {[
                  '✓ Audit gratuit — răspuns în 48h',
                  '✓ Website demo înainte de orice decizie',
                  '✓ Garanție 30 zile sau colaborarea se oprește fără penalități',
                  '✓ Zero cost inițial — plătești lunar, după ce ești online',
                ].map((point) => (
                  <p key={point} className="font-mono text-xs uppercase tracking-widest text-muted">{point}</p>
                ))}
              </div>

              <div className="mt-10 rounded-2xl overflow-hidden border border-stone">
                <iframe
                  title="Visuelum Constanta pe harta"
                  src="https://www.google.com/maps?q=Constanta,Romania&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
