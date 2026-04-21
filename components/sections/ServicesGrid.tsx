'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Globe, Smartphone, Search, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'

const services = [
  {
    icon: Smartphone,
    title: 'Clienti din Facebook si Instagram',
    desc: 'Cream continut care aduce mesaje si cereri de oferta, nu doar vizualizari.',
    href: '/servicii/social-media',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
    imageAlt: 'Gestionare social media pentru afaceri locale',
  },
  {
    icon: Search,
    title: 'Te gasim clientii pe Google',
    desc: 'Te pozitionam in Google Search si Maps fix cand oamenii cauta serviciul tau in Constanta.',
    href: '/servicii/seo',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?w=600&q=80',
    imageAlt: 'Optimizare Google si SEO local',
  },
  {
    icon: Globe,
    title: 'Website care transforma vizite in clienti',
    desc: 'Construim site-uri clare, rapide si orientate pe apeluri, mesaje si programari.',
    href: '/servicii/website',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
    imageAlt: 'Website modern pentru conversii',
  },
]

export function ServicesGrid() {
  return (
    <Section className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Eyebrow className="mb-4">Servicii pentru rezultate locale</Eyebrow>
          <h2 className="font-head font-extrabold text-h2 text-navy">
            Ce facem pentru tine:
            <br className="hidden sm:block" /> mai multi clienti.
          </h2>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.href}
              variants={{
                initial: { opacity: 0, y: 32 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href={service.href}
                className="group relative bg-white border border-stone/60 rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent"
                style={{ '--tw-shadow-color': 'rgba(124,58,237,0.15)' } as React.CSSProperties}
                aria-label={service.title}
              >
                {/* Glow border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: '0 0 0 2px rgba(124,58,237,0.5), 0 8px 32px -4px rgba(124,58,237,0.2)' }}
                  aria-hidden="true"
                />
                {/* Service image */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-107"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/20 to-transparent group-hover:from-navy-deep/80 transition-all duration-300" />
                  {/* Gradient icon */}
                  <div className="absolute bottom-3 left-4">
                    <div
                      className="inline-flex p-2.5 text-white rounded-xl"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                    >
                      <service.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                {/* Card content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-head font-bold text-h3 text-navy mb-2 group-hover:text-gold transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted text-sm leading-relaxed flex-1">{service.desc}</p>
                  <div className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold group-hover:gap-3 transition-all duration-200">
                    Află mai mult <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
