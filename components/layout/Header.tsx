'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Instagram, Facebook } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/config'

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
    </svg>
  )
}

type NavLink = {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Acasă' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/pachete', label: 'Pachete' },
  { href: '/industrii', label: 'Industrii' },
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

  const isActive = (link: NavLink) =>
    pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))

  return (
    <>
      {/* Main header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-stone',
          scrolled ? 'shadow-sm' : ''
        )}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* Wordmark */}
            <Link
              href="/"
              className="font-head font-extrabold text-xl text-navy tracking-tight hover:text-gold transition-colors flex-shrink-0"
              aria-label={siteConfig.name}
            >
              Visuelum<span className="text-gold">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6" aria-label="Navigare principală">
              {navLinks.map((link) => {
                const active = isActive(link)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'group relative font-mono text-[11px] uppercase tracking-[0.15em] transition-colors py-1',
                      active ? 'text-gold' : 'text-muted hover:text-navy'
                    )}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.label}
                    <span
                      className={cn(
                        'absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-200',
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      )}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* Desktop right side */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted hover:text-navy transition-colors"
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
              className="lg:hidden p-2 -mr-1 text-navy rounded-lg hover:bg-stone/60 transition-colors"
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
          'lg:hidden fixed inset-0 z-50 flex flex-col bg-white transition-all duration-300 ease-out',
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!mobileOpen}
      >
        {/* Gold top line */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent w-full" />

        {/* Menu top bar */}
        <div className="flex items-center justify-between px-6 h-16 flex-shrink-0 border-b border-stone">
          <Link
            href="/"
            className="font-head font-extrabold text-xl text-navy tracking-tight"
            onClick={() => setMobileOpen(false)}
          >
            Visuelum<span className="text-gold">.</span>
          </Link>
          <button
            className="p-2 -mr-2 text-muted hover:text-navy transition-colors rounded-lg hover:bg-stone/60"
            onClick={() => setMobileOpen(false)}
            aria-label="Închide meniu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Nav links — vertically + horizontally centered */}
        <nav className="flex-1 flex flex-col items-center justify-center px-6 overflow-y-auto" aria-label="Navigare mobilă">
          <ul className="flex flex-col items-center gap-2 w-full max-w-xs">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full">
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center justify-center py-3.5 border-b border-stone transition-colors w-full',
                    isActive(link) ? 'text-gold' : 'text-muted hover:text-navy'
                  )}
                  onClick={() => setMobileOpen(false)}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  <span className="font-head font-bold text-xl tracking-tight text-center">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="px-6 pb-10 pt-6 flex-shrink-0 space-y-5">
          {/* CTA button */}
          <Link
            href="/contact"
            className="btn-primary w-full justify-center text-sm py-4 block text-center"
            onClick={() => setMobileOpen(false)}
          >
            Solicită Audit Gratuit
          </Link>

          {/* Social media */}
          <div className="flex items-center justify-center gap-5 pt-1">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-stone text-muted hover:text-gold hover:border-gold/40 transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
