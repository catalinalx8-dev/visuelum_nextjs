'use client'

import { useState, useEffect, useRef } from 'react'
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
  { href: '/servicii', label: 'Servicii', subItems: services },
  { href: '/pachete', label: 'Pachete & Prețuri' },
  { href: '/industrii', label: 'Industrii' },
  { href: '/despre', label: 'Despre' },
  { href: '/blog', label: 'Blog' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

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
            className="font-head font-extrabold text-xl text-cream tracking-tight hover:text-gold-l transition-colors z-10"
            aria-label={siteConfig.name}
          >
            Visuelum<span className="text-gold">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigare principală">
            {navLinks.map((link) =>
              link.subItems ? (
                <div
                  key={link.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted-l hover:text-gold-l transition-colors py-2"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown className={cn('h-3 w-3 transition-transform duration-200', servicesOpen && 'rotate-180')} />
                  </button>

                  {/* Mega dropdown */}
                  <div
                    className={cn(
                      'absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-navy border border-navy-mid shadow-2xl transition-all duration-200',
                      servicesOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'
                    )}
                    role="menu"
                    aria-label="Servicii"
                  >
                    <div className="grid grid-cols-2 gap-1 p-4">
                      {link.subItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          role="menuitem"
                          className="flex items-center gap-3 px-4 py-3 text-cream/80 hover:text-gold-l hover:bg-navy-mid transition-colors"
                        >
                          <service.icon className="h-4 w-4 text-gold flex-shrink-0" aria-hidden="true" />
                          <span className="font-mono text-xs uppercase tracking-wider">{service.label}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-navy-mid px-8 py-3">
                      <Link
                        href="/servicii"
                        role="menuitem"
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

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact" className="btn-primary text-xs px-5 py-2.5">
              Audit Gratuit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-cream z-10 relative"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Închide meniu' : 'Deschide meniu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile full-page overlay */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden fixed inset-0 bg-navy-deep z-40 flex flex-col transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!mobileOpen}
      >
        {/* Top bar inside overlay */}
        <div className="container-site flex items-center justify-between h-16 flex-shrink-0">
          <Link
            href="/"
            className="font-head font-extrabold text-xl text-cream tracking-tight"
            onClick={() => setMobileOpen(false)}
          >
            Visuelum<span className="text-gold">.</span>
          </Link>
          <button
            className="p-2 text-cream"
            onClick={() => setMobileOpen(false)}
            aria-label="Închide meniu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Nav links */}
        <nav
          className="container-site flex-1 overflow-y-auto py-8 flex flex-col"
          aria-label="Navigare mobilă"
        >
          <ul className="flex flex-col divide-y divide-navy-mid">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.subItems ? (
                  <>
                    <button
                      className={cn(
                        'w-full flex items-center justify-between py-5 font-head font-semibold text-xl transition-colors',
                        mobileServicesOpen ? 'text-gold' : 'text-cream hover:text-gold-l'
                      )}
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      aria-expanded={mobileServicesOpen}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 transition-transform duration-200',
                          mobileServicesOpen && 'rotate-180'
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Subcategories accordion */}
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        mobileServicesOpen ? 'max-h-[600px] pb-4' : 'max-h-0'
                      )}
                    >
                      <ul className="flex flex-col gap-1 pl-4 border-l-2 border-gold/30">
                        {link.subItems.map((service) => (
                          <li key={service.href}>
                            <Link
                              href={service.href}
                              className="flex items-center gap-3 py-3 text-cream/70 hover:text-gold-l transition-colors"
                            >
                              <service.icon className="h-4 w-4 text-gold flex-shrink-0" aria-hidden="true" />
                              <span className="font-mono text-xs uppercase tracking-wider">{service.label}</span>
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href="/servicii"
                            className="flex items-center gap-2 py-3 font-mono text-xs uppercase tracking-widest text-gold hover:text-gold-l transition-colors"
                          >
                            → Toate serviciile
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'block py-5 font-head font-semibold text-xl transition-colors',
                      pathname === link.href ? 'text-gold' : 'text-cream hover:text-gold-l'
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA block */}
          <div className="mt-auto pt-10 flex flex-col gap-4">
            <Link href="/contact" className="btn-primary w-full justify-center text-sm py-4">
              Audit Gratuit
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-center font-mono text-xs text-muted-l hover:text-gold transition-colors"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
