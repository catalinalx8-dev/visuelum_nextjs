import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { ContactForm } from '@/components/contact/ContactForm'
import { siteConfig } from '@/lib/config'
import { breadcrumbSchema } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Contact — Solicită Audit Digital Gratuit',
  description: 'Contactează Visuelum pentru un audit digital gratuit. Fără angajament, fără risc. Răspuns în 24 ore.',
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
      <section className="bg-navy-deep relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=80"
            alt=""
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container-site relative z-10 max-w-4xl mx-auto">
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="font-head font-extrabold text-h1 text-cream mb-4">
            Hai să vorbim despre
            <br />
            <span className="text-gold">afacerea ta.</span>
          </h1>
          <p className="font-body italic text-muted-l text-lg max-w-xl">
            Audit digital gratuit. Fără angajament. Fără risc.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact info — 2 cols */}
            <div className="lg:col-span-2">
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
                  '✓ Audit gratuit fără obligații',
                  '✓ Răspuns în maxim 24 ore',
                  '✓ Garanție 30 zile sau bani înapoi',
                  '✓ Nicio taxă inițială',
                ].map((point) => (
                  <p key={point} className="font-mono text-xs uppercase tracking-widest text-muted">{point}</p>
                ))}
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
