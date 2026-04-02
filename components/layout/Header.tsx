'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Globe, Smartphone, Search, Camera, Target, Palette } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/config'

const services = [
  { href: '/servicii/website', label: 'Website Profesional', icon: Globe },
  { href: '/servicii/social-media', label: 'Social Media', icon: Smartphone },
  { href: '/servicii/seo', label: 'SEO & Google Local', icon: Search },
  { href: '/servicii/foto-video', label: 'Foto & Video', icon: Camera },
  { href: '/servicii/google-ads', label: 'Google & Meta Ads', icon: Target },
  { href: '/servicii/branding', label: 'Branding & Design', icon: Palette },
]

const navLinks = [
  { href: '/servicii', label: 'Servicii', hasDropdown: true },
  { href: '/pachete', label: 'Pachete & Prețuri' },
  { href: '/industrii', label: 'Industrii' },
  { href: '/despre', label: 'Despre' },
  { href: '/blog', label: 'Blog' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-navy-deep/20'
          : 'bg-transparent'
      )}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-head font-extrabold text-xl text-cream tracking-tight hover:text-gold-l transition-colors"
          >
            Visuelum<span className="text-gold">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigare principală">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative group">
                  <button
                    className="flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted-l hover:text-gold-l transition-colors py-2"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown className={cn('h-3 w-3 transition-transform', servicesOpen && 'rotate-180')} />
                  </button>

                  {/* Mega dropdown */}
                  <div
                    className={cn(
                      'absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-navy border border-navy-mid shadow-2xl transition-all duration-200',
                      servicesOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'
                    )}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-1 p-4">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-3 px-4 py-3 text-cream/80 hover:text-gold-l hover:bg-navy-mid transition-colors"
                        >
                          <service.icon className="h-4 w-4 text-gold flex-shrink-0" />
                          <span className="font-mono text-xs uppercase tracking-wider">{service.label}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-navy-mid px-8 py-3">
                      <Link
                        href="/servicii"
                        className="font-mono text-xs uppercase tracking-widest text-gold hover:text-gold-l transition-colors"
                      >
                        → Toate serviciile
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'font-mono text-xs uppercase tracking-widest transition-colors',
                    pathname === link.href ? 'text-gold' : 'text-muted-l hover:text-gold-l'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-xs px-5 py-2.5"
            >
              Audit Gratuit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-cream"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Închide meniu' : 'Deschide meniu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-navy-deep z-40 overflow-y-auto">
          <nav className="container-site py-8 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'block py-4 border-b border-navy-mid font-mono text-sm uppercase tracking-widest transition-colors',
                    pathname === link.href ? 'text-gold' : 'text-cream/80 hover:text-gold-l'
                  )}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 flex flex-col gap-1 mt-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center gap-3 py-2 text-cream/60 hover:text-gold-l transition-colors"
                      >
                        <service.icon className="h-3.5 w-3.5 text-gold flex-shrink-0" />
                        <span className="font-mono text-xs uppercase tracking-wider">{service.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6">
              <Link href="/contact" className="btn-primary w-full justify-center">
                Audit Gratuit Gratuit
              </Link>
            </div>
            <div className="mt-4 text-center">
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-mono text-xs text-muted-l hover:text-gold transition-colors"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
