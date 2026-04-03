'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import { sendNewsletterSignup } from '@/lib/send-email'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
    </svg>
  )
}

const serviceLinks = [
  { href: '/servicii/website', label: 'Website Profesional' },
  { href: '/servicii/social-media', label: 'Social Media' },
  { href: '/servicii/seo', label: 'SEO Local' },
  { href: '/servicii/foto-video', label: 'Foto & Video' },
  { href: '/servicii/google-ads', label: 'Google & Meta Ads' },
  { href: '/servicii/branding', label: 'Branding & Design' },
]

const companyLinks = [
  { href: '/despre', label: 'Despre Visuelum' },
  { href: '/pachete', label: 'Pachete & Prețuri' },
  { href: '/industrii', label: 'Industrii' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const legalLinks = [
  { href: '/termeni-si-conditii', label: 'Termeni și Condiții' },
  { href: '/politica-de-confidentialitate', label: 'Politica de Confidențialitate' },
]

export function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [newsletterState, setNewsletterState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [newsletterError, setNewsletterError] = useState('')

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || newsletterState === 'loading') return
    setNewsletterState('loading')
    setNewsletterError('')
    const result = await sendNewsletterSignup(email)
    if (result.success) {
      setNewsletterState('success')
      setEmail('')
    } else {
      setNewsletterState('error')
      setNewsletterError(result.error ?? 'Eroare. Încearcă din nou.')
    }
  }

  return (
    <footer className="bg-navy text-cream/70">
      <div className="container-site py-16">

        {/* Newsletter strip */}
        <div className="border-b border-navy-mid pb-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-head font-bold text-xl text-cream mb-2">
                Tips gratuite de marketing digital
              </h3>
              <p className="font-body text-sm text-cream/60 leading-relaxed">
                Sfaturi practice pentru afaceri locale din Dobrogea. Fără spam, doar valoare.
              </p>
            </div>
            {newsletterState === 'success' ? (
              <div className="flex items-center gap-3 p-4 border border-gold/30 bg-gold/5 rounded-xl">
                <span className="text-gold text-lg">✓</span>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-gold">
                  Mulțumim! Te-ai abonat cu succes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@afacerea-ta.ro"
                  required
                  className="flex-1 bg-navy-mid border border-navy-mid/70 rounded-xl px-4 py-3 font-body text-sm text-cream placeholder:text-muted focus:outline-none focus:border-gold transition-colors min-w-0"
                  aria-label="Adresa de email pentru newsletter"
                />
                <button
                  type="submit"
                  disabled={newsletterState === 'loading'}
                  className="btn-gold-ghost text-xs px-5 py-3 whitespace-nowrap disabled:opacity-60"
                >
                  {newsletterState === 'loading' ? '...' : 'Abonează-te'}
                </button>
              </form>
            )}
            {newsletterState === 'error' && (
              <p className="font-mono text-xs text-red-400 mt-2">{newsletterError}</p>
            )}
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-head font-extrabold text-2xl text-cream tracking-tight">
              Visuelum<span className="text-gold">.</span>
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-cream/60 max-w-xs">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-navy-mid hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-navy-mid hover:border-gold hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-navy-mid hover:border-gold hover:text-gold transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-5">Servicii</h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-5">Companie</h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-5">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-body text-sm text-cream/60 hover:text-gold transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-body text-sm text-cream/60 hover:text-gold transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="font-body text-sm text-cream/40">{siteConfig.address}</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold border border-gold rounded-xl px-4 py-2.5 hover:bg-gold hover:text-white transition-all duration-200"
              >
                Audit Gratuit →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-navy-mid flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-cream/30">
            © {year} {siteConfig.name}. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-cream/30 hover:text-cream/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

