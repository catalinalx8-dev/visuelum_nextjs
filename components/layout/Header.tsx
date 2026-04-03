'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu, X, Phone, Instagram, Facebook, ArrowRight, ChevronDown,
  Globe, Smartphone, Search, Camera, Target, Palette,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/config'

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
    </svg>
  )
}

type NavChild = {
  href: string
  label: string
  icon?: LucideIcon
}

type NavLink = {
  href: string
  label: string
  children?: NavChild[]
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Acasă' },
  {
    href: '/servicii',
    label: 'Servicii',
    children: [
      { href: '/servicii/website', label: 'Website Profesional', icon: Globe },
      { href: '/servicii/social-media', label: 'Social Media', icon: Smartphone },
      { href: '/servicii/seo', label: 'SEO & Google Local', icon: Search },
      { href: '/servicii/foto-video', label: 'Fotografie & Video', icon: Camera },
      { href: '/servicii/google-ads', label: 'Google & Meta Ads', icon: Target },
      { href: '/servicii/branding', label: 'Branding & Design', icon: Palette },
    ],
  },
  { href: '/pachete', label: 'Pachete' },
  {
    href: '/industrii',
    label: 'Industrii',
    children: [
      { href: '/industrii/restaurante-cafenele', label: 'Restaurante & Cafenele' },
      { href: '/industrii/saloane-barber', label: 'Saloane & Barber' },
      { href: '/industrii/clinici-cabinete', label: 'Clinici & Cabinete' },
      { href: '/industrii/pensiuni-cazare', label: 'Pensiuni & Cazare' },
      { href: '/industrii/fitness-sporturi', label: 'Fitness & Sporturi' },
      { href: '/industrii/retail-magazine', label: 'Retail & Magazine' },
    ],
  },
  { href: '/despre', label: 'Despre' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: siteConfig.social.instagram, label: 'Instagram', icon: Instagram },
  { href: siteConfig.social.facebook, label: 'Facebook', icon: Facebook },
  { href: siteConfig.social.tiktok, label: 'TikTok', icon: TikTokIcon },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const openMenu = useCallback((key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenDropdown(key)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120)
  }, [])

  const isActive = (link: NavLink) =>
    pathname === link.href || link.children?.some((c) => pathname === c.href || pathname.startsWith(c.href + '/'))

  return (
    <>
      {/* Main header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
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
              className="font-head font-extrabold text-xl text-cream tracking-tight hover:text-gold-l transition-colors flex-shrink-0"
              aria-label={siteConfig.name}
            >
              Visuelum<span className="text-gold">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6" aria-label="Navigare principală">
              {navLinks.map((link) => {
                const active = isActive(link)
                const hasChildren = Boolean(link.children?.length)
                const isOpen = openDropdown === link.href

                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => hasChildren && openMenu(link.href)}
                    onMouseLeave={() => hasChildren && scheduleClose()}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'group relative flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors py-1',
                        active ? 'text-gold' : 'text-muted-l hover:text-gold-l'
                      )}
                      aria-current={pathname === link.href ? 'page' : undefined}
                      aria-haspopup={hasChildren ? 'true' : undefined}
                      aria-expanded={hasChildren ? isOpen : undefined}
                    >
                      {link.label}
                      {hasChildren && (
                        <ChevronDown
                          className={cn(
                            'h-3 w-3 transition-transform duration-200',
                            isOpen ? 'rotate-180' : ''
                          )}
                          aria-hidden="true"
                        />
                      )}
                      {/* Underline hover effect */}
                      <span
                        className={cn(
                          'absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-200',
                          active ? 'w-full' : 'w-0 group-hover:w-full'
                        )}
                      />
                    </Link>

                    {/* Dropdown */}
                    {hasChildren && (
                      <div
                        className={cn(
                          'absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 origin-top',
                          isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
                        )}
                        onMouseEnter={() => openMenu(link.href)}
                        onMouseLeave={scheduleClose}
                        role="menu"
                        aria-label={`Submeniu ${link.label}`}
                      >
                        <div className="bg-navy border border-navy-mid shadow-xl shadow-navy-deep/50 min-w-[220px] py-2">
                          {/* Gold top accent */}
                          <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-2" />
                          {link.children!.map((child) => {
                            const Icon = child.icon
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                role="menuitem"
                                className={cn(
                                  'flex items-center gap-3 px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest transition-all duration-150 group/item',
                                  pathname === child.href
                                    ? 'text-gold bg-gold/5'
                                    : 'text-muted-l hover:text-gold hover:bg-gold/5'
                                )}
                              >
                                {Icon && (
                                  <Icon
                                    className="h-3.5 w-3.5 flex-shrink-0 transition-colors"
                                    aria-hidden={true}
                                  />
                                )}
                                {child.label}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>

            {/* Desktop right side */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
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
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden fixed inset-0 z-50 flex flex-col bg-navy-deep transition-all duration-400 ease-out',
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!mobileOpen}
      >
        {/* Gold top line */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent w-full" />

        {/* Menu top bar */}
        <div className="flex items-center justify-between px-6 h-16 flex-shrink-0">
          <Link
            href="/"
            className="font-head font-extrabold text-xl text-cream tracking-tight"
            onClick={() => setMobileOpen(false)}
          >
            Visuelum<span className="text-gold">.</span>
          </Link>
          <button
            className="p-2 -mr-2 text-cream/60 hover:text-cream transition-colors rounded-lg hover:bg-navy-mid/40"
            onClick={() => setMobileOpen(false)}
            aria-label="Închide meniu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Nav links — vertically centered */}
        <nav className="flex-1 flex flex-col justify-center px-8" aria-label="Navigare mobilă">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'group flex items-center justify-between py-4 border-b border-navy-mid/40 transition-colors',
                    isActive(link) ? 'text-gold' : 'text-cream/80 hover:text-gold-l'
                  )}
                  onClick={() => setMobileOpen(false)}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  <span className="font-head font-bold text-2xl tracking-tight">
                    {link.label}
                  </span>
                  <ArrowRight className={cn(
                    'h-5 w-5 transition-all',
                    isActive(link) ? 'text-gold opacity-100' : 'opacity-0 group-hover:opacity-60 group-hover:translate-x-1'
                  )} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="px-8 pb-10 pt-6 flex-shrink-0 space-y-6">
          {/* CTA button */}
          <Link
            href="/contact"
            className="btn-primary w-full justify-center text-sm py-4 block text-center"
            onClick={() => setMobileOpen(false)}
          >
            Solicită Audit Gratuit
          </Link>

          {/* Phone */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-l hover:text-gold transition-colors"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>

          {/* Social media */}
          <div className="flex items-center justify-center gap-6 pt-2">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-navy-mid/60 text-muted-l hover:text-gold hover:border-gold/40 transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-center font-body italic text-muted/60 text-xs">
            {siteConfig.taglineShort}
          </p>
        </div>
      </div>
    </>
  )
}
