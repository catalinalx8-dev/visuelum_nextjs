'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Globe, Smartphone, Search, Camera, Target, Palette, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/config'

const services = [
  { href: '/servicii/website', label: 'Website Profesional', icon: Globe, desc: 'Gratuit, live în 14 zile' },
  { href: '/servicii/social-media', label: 'Social Media', icon: Smartphone, desc: 'Postări, stories, copywriting' },
  { href: '/servicii/seo', label: 'SEO & Google Local', icon: Search, desc: 'Google Maps & poziții organice' },
  { href: '/servicii/foto-video', label: 'Foto & Video', icon: Camera, desc: 'Sony A7 II, editare inclusă' },
  { href: '/servicii/google-ads', label: 'Google & Meta Ads', icon: Target, desc: 'Campanii cu rezultate măsurabile' },
  { href: '/servicii/branding', label: 'Branding & Design', icon: Palette, desc: 'Identitate vizuală completă' },
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
  const [barDismissed, setBarDismissed] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const dismissed = sessionStorage.getItem('announcement-dismissed')
    setBarDismissed(!!dismissed)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const dismissBar = () => {
    setBarDismissed(true)
    sessionStorage.setItem('announcement-dismissed', '1')
  }

  return (
    <>
      {/* Announcement bar */}
      <div
        className={cn(
          'fixed top-0 left-0 right-0 z-50 bg-gold overflow-hidden transition-all duration-300',
          barDismissed ? 'max-h-0' : 'max-h-12'
        )}
        aria-hidden={barDismissed}
      >
        <div className="container-site flex items-center justify-center relative py-2.5">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-navy text-center">
            ✦ Audit digital gratuit — fără angajament &nbsp;·&nbsp;{' '}
            <Link href="/contact" className="underline underline-offset-2 hover:no-underline font-bold">
              Solicită acum →
            </Link>
          </p>
          <button
            onClick={dismissBar}
            className="absolute right-0 p-1.5 text-navy/60 hover:text-navy transition-colors"
            aria-label="Închide anunț"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          'fixed left-0 right-0 z-40 transition-all duration-300',
          barDismissed ? 'top-0' : 'top-10',
          scrolled
            ? 'bg-navy/96 backdrop-blur-md border-b border-navy-mid/40 shadow-lg shadow-navy-deep/30'
            : 'bg-transparent'
        )}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* Wordmark */}
            <Link
              href="/"
              className="font-head font-extrabold text-xl text-cream tracking-tight hover:text-gold-l transition-colors"
              aria-label={siteConfig.name}
            >
              Visuelum<span className="text-gold">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Navigare principală">
              {navLinks.map((link) =>
                link.subItems ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-l hover:text-gold-l transition-colors py-2"
                      onClick={() => setServicesOpen(!servicesOpen)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown className={cn('h-3 w-3 transition-transform duration-200', servicesOpen && 'rotate-180')} />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={cn(
                        'absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[540px] bg-navy border border-navy-mid shadow-2xl shadow-navy-deep/60 transition-all duration-200 origin-top',
                        servicesOpen
                          ? 'opacity-100 pointer-events-auto scale-y-100 translate-y-0'
                          : 'opacity-0 pointer-events-none scale-y-95 -translate-y-1'
                      )}
                      role="menu"
                      aria-label="Servicii"
                    >
                      <div className="grid grid-cols-2 gap-0 p-3">
                        {link.subItems.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            role="menuitem"
                            className="group flex items-start gap-3 px-4 py-3.5 hover:bg-navy-mid transition-colors"
                          >
                            <div className="flex-shrink-0 mt-0.5 p-1.5 bg-gold/10 group-hover:bg-gold/20 transition-colors">
                              <service.icon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                            </div>
                            <div>
                              <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-cream/85 group-hover:text-gold-l transition-colors leading-snug">
                                {service.label}
                              </span>
                              <span className="block font-body text-[11px] text-muted-l mt-0.5 leading-snug">
                                {service.desc}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-navy-mid px-7 py-3">
                        <Link
                          href="/servicii"
                          role="menuitem"
                          className="font-mono text-[10px] uppercase tracking-[0.15em] text-gold hover:text-gold-l transition-colors"
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
                      'font-mono text-[11px] uppercase tracking-[0.15em] transition-colors',
                      pathname === link.href ? 'text-gold' : 'text-muted-l hover:text-gold-l'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop right side */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-l hover:text-gold-l transition-colors"
              >
                <Phone className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </a>
              <Link href="/contact" className="btn-primary text-xs px-5 py-2.5">
                Audit Gratuit
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 -mr-1 text-cream"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Închide meniu' : 'Deschide meniu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile backdrop */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 bg-navy-deep/70 backdrop-blur-sm z-40 transition-opacity duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-navy-deep z-50 flex flex-col transition-transform duration-300 ease-out shadow-2xl shadow-navy-deep/60',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-hidden={!mobileOpen}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-navy-mid flex-shrink-0">
          <Link
            href="/"
            className="font-head font-extrabold text-lg text-cream tracking-tight"
            onClick={() => setMobileOpen(false)}
          >
            Visuelum<span className="text-gold">.</span>
          </Link>
          <button
            className="p-2 -mr-2 text-cream/60 hover:text-cream transition-colors"
            onClick={() => setMobileOpen(false)}
            aria-label="Închide meniu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-6 py-5" aria-label="Navigare mobilă">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.subItems ? (
                  <>
                    <button
                      className={cn(
                        'w-full flex items-center justify-between py-3.5 font-mono text-[11px] uppercase tracking-[0.15em] border-b border-navy-mid/50 transition-colors',
                        mobileServicesOpen ? 'text-gold' : 'text-cream/80 hover:text-gold-l'
                      )}
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      aria-expanded={mobileServicesOpen}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn('h-4 w-4 transition-transform duration-200', mobileServicesOpen && 'rotate-180')}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        mobileServicesOpen ? 'max-h-[500px] pb-2' : 'max-h-0'
                      )}
                    >
                      <ul className="flex flex-col gap-0.5 pl-3 border-l border-gold/20 mt-2 ml-1">
                        {link.subItems.map((service) => (
                          <li key={service.href}>
                            <Link
                              href={service.href}
                              className="flex items-center gap-3 py-2.5 text-cream/60 hover:text-gold-l transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              <service.icon className="h-3.5 w-3.5 text-gold/70 flex-shrink-0" aria-hidden="true" />
                              <span className="font-mono text-[10px] uppercase tracking-[0.1em]">{service.label}</span>
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href="/servicii"
                            className="flex items-center gap-2 py-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-gold hover:text-gold-l transition-colors"
                            onClick={() => setMobileOpen(false)}
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
                      'block py-3.5 font-mono text-[11px] uppercase tracking-[0.15em] border-b border-navy-mid/50 transition-colors',
                      pathname === link.href ? 'text-gold' : 'text-cream/80 hover:text-gold-l'
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer footer */}
        <div className="px-6 pb-8 pt-4 border-t border-navy-mid flex flex-col gap-3 flex-shrink-0">
          <Link
            href="/contact"
            className="btn-primary w-full justify-center text-xs py-3.5"
            onClick={() => setMobileOpen(false)}
          >
            Audit Gratuit
          </Link>
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-l hover:text-gold transition-colors py-1"
          >
            <Phone className="h-3 w-3" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  )
}
