import type { Metadata } from 'next'
import Link from 'next/link'
import { Settings, Mail, Phone, Instagram, Facebook } from 'lucide-react'
import { siteConfig } from '@/lib/config'

/**
 * Maintenance page — served to all visitors when NEXT_PUBLIC_MAINTENANCE_MODE=1.
 * Not indexed by search engines (noindex / nofollow).
 */
export const metadata: Metadata = {
  title: 'Mentenanță | Visuelum',
  description: 'Site-ul este temporar în mentenanță. Revenim în curând!',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
}

export default function MaintenancePage() {
  return (
    <div className="min-h-[calc(100vh-160px)] bg-navy relative flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20" aria-hidden="true" />

      {/* Glow blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
        style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
        style={{ background: 'radial-gradient(circle, var(--cyan) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 border border-gold/30 bg-gold/10 px-4 py-2 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-gold">
            Mentenanță în desfășurare
          </span>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="border border-gold/20 bg-gold/5 p-5 rounded-full">
            <Settings className="h-12 w-12 text-gold animate-spin [animation-duration:8s]" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-head font-extrabold text-h1 text-cream mb-6 leading-tight">
          Suntem în{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, var(--accent-start), var(--accent-mid), var(--accent-end))',
            }}
          >
            mentenanță.
          </span>
        </h1>

        <p className="font-body italic text-muted-l text-xl mb-4 max-w-lg mx-auto leading-relaxed">
          Lucrăm la îmbunătățiri pentru a-ți oferi o experiență și mai bună.
          Revenim în curând!
        </p>
        <p className="font-body text-muted text-sm mb-12 max-w-md mx-auto">
          Ne cerem scuze pentru inconveniență. Dacă ai o solicitare urgentă, ne poți
          contacta direct.
        </p>

        {/* Contact strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 border border-stone/20 bg-navy-mid hover:border-gold/40 hover:bg-gold/5 transition-colors px-6 py-3 font-body text-sm text-cream"
          >
            <Mail className="h-4 w-4 text-gold flex-shrink-0" />
            {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 border border-stone/20 bg-navy-mid hover:border-gold/40 hover:bg-gold/5 transition-colors px-6 py-3 font-body text-sm text-cream"
          >
            <Phone className="h-4 w-4 text-gold flex-shrink-0" />
            {siteConfig.phoneDisplay}
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6">
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
            Urmărește-ne
          </span>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Visuelum"
              className="text-muted hover:text-gold-l transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Visuelum"
              className="text-muted hover:text-gold-l transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Branding footer */}
        <div className="mt-16 pt-8 border-t border-stone/10">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.address}
          </p>
        </div>
      </div>
    </div>
  )
}
