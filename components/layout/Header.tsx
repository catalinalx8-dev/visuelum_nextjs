'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Instagram, Facebook } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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

function HamburgerButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <button
      className="lg:hidden relative flex flex-col items-center justify-center w-10 h-10 gap-[6px] rounded-xl hover:bg-white/10 transition-colors"
      onClick={onClick}
      aria-label={isOpen ? 'Închide meniu' : 'Deschide meniu'}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <motion.span
        className="block h-0.5 w-5 rounded-full"
        style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }}
        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
      <motion.span
        className="block h-0.5 w-5 rounded-full bg-muted"
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="block h-0.5 w-5 rounded-full"
        style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }}
        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </button>
  )
}

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
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isActive = (link: NavLink) =>
    pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))

  return (
    <>
      {/* Main header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'backdrop-blur-2xl border-b border-white/10 h-16 shadow-lg shadow-navy-deep/20'
            : 'backdrop-blur-xl border-b border-white/5 h-[72px]',
          'bg-navy-deep/80'
        )}
      >
        <div className="container-site h-full">
          <div className="flex items-center justify-between h-full">

            {/* Wordmark */}
            <Link
              href="/"
              className="font-head font-extrabold text-2xl text-white tracking-tight flex-shrink-0 flex items-center hover:opacity-80 transition-opacity duration-200"
              aria-label={siteConfig.name}
            >
              Visuelum
              <motion.span
                className="gradient-text"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{
                  duration: 0.5,
                  repeat: 3,
                  repeatDelay: 4,
                  ease: 'easeInOut',
                }}
              >
                .
              </motion.span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigare principală">
              {navLinks.map((link) => {
                const active = isActive(link)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 group',
                      active
                        ? 'text-gold'
                        : 'text-white/60 hover:text-white'
                    )}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.label}
                    {/* Animated underline */}
                    <span
                      className={cn(
                        'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300',
                        active
                          ? 'w-4 opacity-100'
                          : 'w-0 opacity-0 group-hover:w-4 group-hover:opacity-100'
                      )}
                      style={{ background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }}
                      aria-hidden="true"
                    />
                  </Link>
                )
              })}
            </nav>

            {/* Desktop right side */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-sm font-body font-medium text-white/50 hover:text-white transition-colors duration-200"
              >
                <span
                  className="flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0"
                  style={{ background: 'rgba(124,58,237,0.2)' }}
                >
                  <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                </span>
                {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-white font-head font-bold text-sm rounded-full transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                  boxShadow: '0 4px 16px -4px rgba(124,58,237,0.5)',
                }}
              >
                Audit Gratuit
              </Link>
            </div>

            {/* Mobile hamburger */}
            <HamburgerButton
              isOpen={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            />
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="lg:hidden fixed inset-0 z-50 flex flex-col overflow-hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Meniu navigare"
            style={{ background: 'linear-gradient(160deg, #07071a 0%, #0f0f23 60%, #1a0a2e 100%)' }}
          >
            {/* Background decorations */}
            <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" aria-hidden="true" />
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)', filter: 'blur(40px)' }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }}
              aria-hidden="true"
            />

            {/* Top bar */}
            <div className="relative flex items-center justify-between px-6 h-[72px] flex-shrink-0 border-b border-white/10">
              <Link
                href="/"
                className="font-head font-extrabold text-2xl text-white tracking-tight flex items-center hover:text-white/80 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Visuelum<span className="gradient-text">.</span>
              </Link>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all duration-200"
                onClick={() => setMobileOpen(false)}
                aria-label="Închide meniu"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Nav links — centered with stagger */}
            <nav
              className="relative flex-1 flex flex-col items-center justify-center px-6 overflow-hidden"
              aria-label="Navigare mobilă"
            >
              <ul className="flex flex-col items-center gap-0 w-full max-w-sm">
                {navLinks.map((link, i) => {
                  const active = isActive(link)
                  return (
                    <motion.li
                      key={link.href}
                      className="w-full"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + i * 0.07, duration: 0.4, ease: 'easeOut' }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'flex items-center justify-between w-full py-3 px-4 rounded-xl transition-all duration-200',
                          active
                            ? 'text-gold'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        )}
                        onClick={() => setMobileOpen(false)}
                        aria-current={pathname === link.href ? 'page' : undefined}
                      >
                        <span className="font-head font-bold text-xl tracking-tight">
                          {link.label}
                        </span>
                        {active && (
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </nav>

            {/* Bottom section */}
            <motion.div
              className="relative px-6 pb-6 pt-4 flex-shrink-0 space-y-3 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4 }}
            >
              {/* Phone */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-3 text-white/60 hover:text-white transition-colors duration-200 text-sm font-body"
              >
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
                  style={{ background: 'rgba(124,58,237,0.2)' }}
                >
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                </span>
                {siteConfig.phoneDisplay}
              </a>

              {/* CTA */}
              <Link
                href="/contact"
                className="flex items-center justify-center w-full py-3.5 text-white font-head font-bold text-sm rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', boxShadow: '0 4px 20px -4px rgba(124,58,237,0.4)' }}
                onClick={() => setMobileOpen(false)}
              >
                Solicită Audit Gratuit
              </Link>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3 pt-0">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/50 hover:text-gold hover:border-gold/50 transition-all duration-200"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
