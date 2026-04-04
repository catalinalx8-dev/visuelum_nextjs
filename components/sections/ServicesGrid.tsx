'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Globe, Smartphone, Search, Camera, Target, Palette, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'

const services = [
  {
    icon: Globe,
    title: 'Website Profesional',
    desc: 'Creat gratuit, live în 14 zile, mobil-optimizat',
    href: '/servicii/website',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
    imageAlt: 'Design website profesional pe laptop — interfață modernă pentru afaceri locale',
  },
  {
    icon: Smartphone,
    title: 'Social Media Complet',
    desc: 'Postări, stories, copywriting, publicare zilnică',
    href: '/servicii/social-media',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
    imageAlt: 'Gestionare social media — Instagram, Facebook și TikTok pentru afaceri',
  },
  {
    icon: Search,
    title: 'Google & SEO Local',
    desc: 'Google Business activ, SEO tehnic, poziții Maps',
    href: '/servicii/seo',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?w=600&q=80',
    imageAlt: 'Optimizare SEO local Google — creștere poziții în căutările locale din Constanța',
  },
  {
    icon: Camera,
    title: 'Fotografie Profesională',
    desc: 'Sony A7 II, lumină naturală, editare Lightroom',
    href: '/servicii/foto-video',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80',
    imageAlt: 'Fotografie profesională de produs și locație — Sony A7 II, editare Lightroom',
  },
  {
    icon: Target,
    title: 'Google Ads & Meta Ads',
    desc: 'Campanii cu buget client, gestionare completă',
    href: '/servicii/google-ads',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    imageAlt: 'Campanii Google Ads și Meta Ads — publicitate plătită cu rezultate măsurabile',
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    desc: 'Identitate vizuală, materiale grafice, consecvență',
    href: '/servicii/branding',
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&q=80',
    imageAlt: 'Branding și design grafic — identitate vizuală pentru afaceri locale din Constanța',
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
          <Eyebrow className="mb-4">Servicii complete</Eyebrow>
          <h2 className="font-head font-extrabold text-h2 text-navy">
            Tot ce ai nevoie.
            <br />
            Un singur abonament.
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
