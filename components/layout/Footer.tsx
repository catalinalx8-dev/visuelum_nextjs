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
    <footer
      className="text-cream/70 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f0f23 0%, #07071a 100%)' }}
    >
      {/* Top gradient accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, #06b6d4, transparent)' }}
        aria-hidden="true"
      />
      {/* Subtle background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
        aria-hidden="true"
      />

      <div className="container-site py-16 relative z-10">

        {/* Newsletter strip */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-head font-bold text-xl text-cream mb-2">
                Tips gratuite de marketing digital
              </h3>
              <p className="font-body text-sm text-cream/50 leading-relaxed">
                Sfaturi practice pentru afaceri locale din Dobrogea. Fără spam, doar valoare.
              </p>
            </div>
            {newsletterState === 'success' ? (
              <div
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ border: '1px solid rgba(124,58,237,0.3)', background: 'rgba(124,58,237,0.08)' }}
              >
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
                  className="flex-1 rounded-full px-5 py-3 font-body text-sm text-cream placeholder:text-white/30 focus:outline-none transition-all min-w-0"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                  aria-label="Adresa de email pentru newsletter"
                />
                <button
                  type="submit"
                  disabled={newsletterState === 'loading'}
                  className="font-head font-bold text-xs uppercase tracking-widest text-white px-6 py-3 rounded-full whitespace-nowrap disabled:opacity-60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                    boxShadow: '0 4px 16px -4px rgba(124,58,237,0.4)',
                  }}
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
            <Link href="/" className="font-head font-extrabold text-2xl text-cream tracking-tight flex items-center">
              Visuelum<span className="gradient-text">.</span>
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-cream/50 max-w-xs">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { href: siteConfig.social.instagram, label: 'Instagram', Icon: Instagram },
                { href: siteConfig.social.facebook, label: 'Facebook', Icon: Facebook },
                { href: siteConfig.social.tiktok, label: 'TikTok', Icon: TikTokIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link p-2.5 rounded-lg border border-white/10 text-white/40 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
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
                    className="font-body text-sm text-cream/50 hover:text-gold transition-colors duration-200"
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
                    className="font-body text-sm text-cream/50 hover:text-gold transition-colors duration-200"
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
                  className="font-body text-sm text-cream/50 hover:text-gold transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-body text-sm text-cream/50 hover:text-gold transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="font-body text-sm text-cream/30">{siteConfig.address}</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white rounded-xl px-4 py-2.5 transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', boxShadow: '0 4px 16px -4px rgba(124,58,237,0.4)' }}
              >
                Audit Gratuit →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-cream/25">
            © {year} {siteConfig.name}. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-cream/25 hover:text-cream/50 transition-colors"
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

