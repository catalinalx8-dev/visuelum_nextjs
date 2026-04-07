'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Phone,
  Instagram,
  Facebook,
  X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/config'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('h-5 w-5', className)}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
    </svg>
  )
}

type NavLinkItem = {
  href: string
  label: string
  badge?: string
}

const navLinks: NavLinkItem[] = [
  { href: '/', label: 'Acasă' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/pachete', label: 'Pachete' },
  { href: '/industrii', label: 'Industrii' },
  { href: '/despre', label: 'Despre' },
  { href: '/blog', label: 'Blog', badge: 'NOU' },
  { href: '/contact', label: 'Contact' },
]

type SocialLinkItem = {
  href: string
  label: string
  icon: LucideIcon | (({ className }: { className?: string }) => React.ReactElement)
}

const socialLinks: SocialLinkItem[] = [
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
      className="xl:hidden relative flex flex-col items-center justify-center w-10 h-10 gap-[6px] rounded-xl hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
      onClick={onClick}
      aria-label={isOpen ? 'Închide meniu' : 'Deschide meniu'}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <motion.span
        className="block h-0.5 w-5 rounded-full"
        style={{ background: 'linear-gradient(90deg, #7c3aed, #0ea5e9)' }}
        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
      <motion.span
        className="block h-0.5 w-5 rounded-full"
        style={{ backgroundColor: 'rgba(100,116,139,0.8)' }}
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="block h-0.5 w-5 rounded-full"
        style={{ background: 'linear-gradient(90deg, #7c3aed, #0ea5e9)' }}
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
  const prefersReducedMotion = useReducedMotion()

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

  /* Keyboard navigation — Escape closes mobile menu */
  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  const isActive = (link: NavLinkItem) =>
    pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))

  return (
    <>
      {/* ── Fixed header wrapper ── */}
      <header className="fixed top-0 left-0 right-0 z-40">

        {/* ── Main navigation bar ── */}
        <div
          className={cn('relative transition-all duration-300', scrolled ? 'backdrop-blur-2xl' : 'backdrop-blur-xl')}
          style={{
            background: scrolled ? 'rgba(6,8,16,0.90)' : 'rgba(6,8,16,0.76)',
            borderBottom: scrolled
              ? '1px solid rgba(124,58,237,0.25)'
              : '1px solid rgba(255,255,255,0.07)',
            boxShadow: scrolled
              ? '0 8px 40px -12px rgba(6,8,16,0.55), inset 0 1px 0 rgba(255,255,255,0.04)'
              : undefined,
          }}
        >
          {/* Top glow line — visible after scroll */}
          {scrolled && (
            <div
              className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(124,58,237,0.55), rgba(14,165,233,0.55), transparent)',
              }}
              aria-hidden="true"
            />
          )}

          <div
            className={cn(
              'container-site transition-all duration-300',
              scrolled ? 'h-16' : 'h-[72px]',
            )}
          >
            <div className="flex items-center justify-between h-full">

              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-1.5 font-head font-extrabold text-2xl text-white tracking-tight flex-shrink-0 hover:opacity-90 transition-opacity duration-200 group"
                aria-label={siteConfig.name}
              >
                Visuelum
                <motion.span
                  className="gradient-text"
                  animate={
                    prefersReducedMotion
                      ? {}
                      : { scale: [1, 1.4, 1], opacity: [1, 0.55, 1] }
                  }
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    repeatDelay: 3.5,
                    ease: 'easeInOut',
                  }}
                >
                  .
                </motion.span>
              </Link>

              {/* Desktop Nav */}
              <nav
                className="hidden xl:flex items-center gap-0.5"
                aria-label="Navigare principală"
              >
                {navLinks.map((link) => {
                  const active = isActive(link)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'relative px-3.5 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 group flex items-center gap-1.5',
                        active
                          ? 'text-white'
                          : 'text-white/60 hover:text-white hover:scale-105',
                      )}
                      aria-current={pathname === link.href ? 'page' : undefined}
                    >
                      {/* Background pill */}
                      <span
                        className={cn(
                          'absolute inset-0 rounded-full transition-all duration-200',
                          active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
                        )}
                        style={{
                          background: active
                            ? 'linear-gradient(135deg, rgba(124,58,237,0.18), rgba(14,165,233,0.10))'
                            : 'rgba(255,255,255,0.07)',
                        }}
                        aria-hidden="true"
                      />
                      <span className="relative z-10">{link.label}</span>
                      {link.badge && (
                        <span
                          className="relative z-10 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full leading-none"
                          style={{
                            background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
                            color: 'white',
                          }}
                        >
                          {link.badge}
                        </span>
                      )}
                      {/* Active indicator — glowing bar */}
                      {active && (
                        <span
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[3px] w-5 rounded-full pointer-events-none"
                          style={{
                            background: 'linear-gradient(90deg, #7c3aed, #0ea5e9)',
                            boxShadow:
                              '0 0 8px rgba(124,58,237,0.75), 0 0 4px rgba(14,165,233,0.5)',
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  )
                })}
              </nav>

              {/* Desktop right side */}
              <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
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
                {/* CTA with shimmer + border glow */}
                <Link
                  href="/contact"
                  className="relative inline-flex items-center gap-2 px-5 py-2.5 text-white font-head font-bold text-sm rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
                    boxShadow:
                      '0 4px 16px -4px rgba(124,58,237,0.55), 0 0 0 1px rgba(124,58,237,0.3)',
                  }}
                >
                  <span
                    className={cn(
                      'absolute inset-0 rounded-full pointer-events-none',
                      !prefersReducedMotion && 'animate-shimmer',
                    )}
                    aria-hidden="true"
                  />
                  <span className="relative z-10">Audit Gratuit</span>
                </Link>
              </div>

              {/* Mobile hamburger */}
              <HamburgerButton
                isOpen={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
              />
            </div>
          </div>
        </div>

        {/* Animated gradient separator */}
        <div
          className="h-px pointer-events-none transition-opacity duration-300"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.55) 25%, rgba(14,165,233,0.55) 75%, transparent 100%)',
            opacity: scrolled ? 0.9 : 0.45,
          }}
          aria-hidden="true"
        />
      </header>

      {/* ── Full-screen mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="xl:hidden fixed inset-0 z-50 flex flex-col overflow-hidden"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: '-6%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: '-6%' }}
            transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Meniu navigare"
          >
            {/* Glassmorphism background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(160deg, rgba(6,8,16,0.97) 0%, rgba(12,12,28,0.97) 55%, rgba(18,8,36,0.97) 100%)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
              aria-hidden="true"
            />

            {/* Decorations */}
            <div
              className="absolute inset-0 dot-pattern opacity-[0.07] pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -top-20 right-0 w-96 h-96 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-1/4 -left-16 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
              aria-hidden="true"
            />

            {/* Mobile header bar */}
            <div className="relative flex items-center justify-between px-5 h-[72px] flex-shrink-0 border-b border-white/10">
              <Link
                href="/"
                className="flex items-center gap-1.5 font-head font-extrabold text-2xl text-white tracking-tight hover:opacity-80 transition-opacity"
                onClick={() => setMobileOpen(false)}
              >
                Visuelum<span className="gradient-text">.</span>
              </Link>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gold"
                onClick={() => setMobileOpen(false)}
                aria-label="Închide meniu"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation links */}
            <nav
              className="relative flex-1 flex flex-col justify-center px-4 overflow-hidden"
              aria-label="Navigare mobilă"
            >
              <ul className="flex flex-col gap-1 w-full max-w-sm mx-auto">
                {navLinks.map((link, i) => {
                  const active = isActive(link)
                  return (
                    <motion.li
                      key={link.href}
                      className="w-full"
                      initial={
                        prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 18 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: prefersReducedMotion ? 0 : 0.05 + i * 0.055,
                        duration: 0.32,
                        ease: 'easeOut',
                      }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'flex items-center justify-center w-full py-3 px-3.5 rounded-2xl transition-all duration-200 group',
                          active
                            ? 'text-white'
                            : 'text-white/60 hover:text-white hover:bg-white/5',
                        )}
                        style={
                          active
                            ? {
                                background:
                                  'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(14,165,233,0.1))',
                                boxShadow: 'inset 0 0 0 1px rgba(124,58,237,0.3)',
                              }
                            : undefined
                        }
                        onClick={() => setMobileOpen(false)}
                        aria-current={pathname === link.href ? 'page' : undefined}
                      >
                        <span className="font-head font-bold text-xl tracking-tight">
                          {link.label}
                        </span>
                        {link.badge && (
                          <span
                            className="ml-2 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full leading-none"
                            style={{
                              background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
                              color: 'white',
                            }}
                          >
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </nav>

            {/* Bottom section */}
            <motion.div
              className="relative px-6 pb-8 pt-4 flex-shrink-0 space-y-3 border-t border-white/10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.48, duration: 0.35 }}
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
                className="relative flex items-center justify-center w-full py-3.5 text-white font-head font-bold text-sm rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
                  boxShadow: '0 4px 20px -4px rgba(124,58,237,0.45)',
                }}
                onClick={() => setMobileOpen(false)}
              >
                <span
                  className={cn(
                    'absolute inset-0 pointer-events-none',
                    !prefersReducedMotion && 'animate-shimmer',
                  )}
                  aria-hidden="true"
                />
                <span className="relative z-10">Solicită Audit Gratuit</span>
              </Link>

              {/* Social links with hover micro-interactions */}
              <div className="flex items-center justify-center gap-3 pt-1">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="social-icon-link flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/50 hover:text-gold transition-all duration-200"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.12, y: -2 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.92 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
