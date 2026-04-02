import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'
import { siteConfig } from '@/lib/config'

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

  return (
    <footer className="bg-navy-deep text-cream/70">
      <div className="container-site py-16">
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
                className="p-2 border border-navy-mid hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-navy-mid hover:border-gold hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-navy-mid hover:border-gold hover:text-gold transition-colors font-mono text-xs leading-none"
                aria-label="TikTok"
              >
                TK
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
                    className="font-body text-sm text-cream/60 hover:text-gold-l transition-colors"
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
                    className="font-body text-sm text-cream/60 hover:text-gold-l transition-colors"
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
                  className="font-body text-sm text-cream/60 hover:text-gold-l transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-body text-sm text-cream/60 hover:text-gold-l transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="font-body text-sm text-cream/40">{siteConfig.address}</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold border border-gold px-4 py-2.5 hover:bg-gold hover:text-white transition-all duration-200"
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
