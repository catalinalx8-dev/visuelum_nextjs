'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/config'

const navLinks = [
  { href: '/servicii', label: 'Servicii' },
  { href: '/pachete', label: 'Pachete & Prețuri' },
  { href: '/industrii', label: 'Industrii' },
  { href: '/despre', label: 'Despre' },
  { href: '/blog', label: 'Blog' },
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
              className="font-head font-extrabold text-xl text-cream tracking-tight hover:text-gold-l transition-colors"
              aria-label={siteConfig.name}
            >
              Visuelum<span className="text-gold">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Navigare principală">
              {navLinks.map((link) => (
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
              ))}
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
