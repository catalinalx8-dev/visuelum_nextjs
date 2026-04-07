'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { offerPopupConfig, siteFeatures } from '@/lib/config'

const STORAGE_KEY = 'visuelum-offer-popup-dismissed'

export function OfferPopup() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()

  const dismiss = useCallback(() => {
    setVisible(false)
    try {
      sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* SSR / private-mode fallback */
    }
  }, [])

  useEffect(() => {
    if (!siteFeatures.offerPopup || !offerPopupConfig.enabled) return

    // Don't show if already dismissed this session
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === '1') return
    } catch {
      /* SSR / private-mode fallback */
    }

    // Restrict to specific pages if configured
    if (
      offerPopupConfig.pages.length > 0 &&
      !offerPopupConfig.pages.includes(pathname)
    ) {
      return
    }

    const timer = setTimeout(() => setVisible(true), offerPopupConfig.delayMs)
    return () => clearTimeout(timer)
  }, [pathname])

  if (!siteFeatures.offerPopup || !offerPopupConfig.enabled) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={dismiss}
            aria-hidden="true"
          />

          {/* Popup card */}
          <motion.div
            className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, ...(prefersReducedMotion ? {} : { scale: 0.92, y: 24 }) }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, ...(prefersReducedMotion ? {} : { scale: 0.92, y: 24 }) }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={offerPopupConfig.title}
          >
            {/* Gradient background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(160deg, #0B0D1A 0%, #140c2e 60%, #0B0D1A 100%)',
              }}
              aria-hidden="true"
            />

            {/* Glow decorations */}
            <div
              className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative px-6 py-8 sm:px-8 sm:py-10 text-center">
              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Închide"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-head font-extrabold text-white mb-3">
                {offerPopupConfig.title}
              </h2>

              {/* Message */}
              <p className="text-white/70 font-body text-sm sm:text-base leading-relaxed mb-6 max-w-xs mx-auto">
                {offerPopupConfig.message}
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-3 items-center">
                <Link
                  href={offerPopupConfig.buttonHref}
                  onClick={dismiss}
                  className={cn(
                    'relative inline-flex items-center justify-center w-full max-w-[260px] py-3 text-white font-head font-bold text-sm rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep',
                  )}
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
                    boxShadow:
                      '0 4px 16px -4px rgba(124,58,237,0.55), 0 0 0 1px rgba(124,58,237,0.3)',
                  }}
                >
                  {offerPopupConfig.buttonText}
                </Link>
                <button
                  onClick={dismiss}
                  className="text-white/40 hover:text-white/70 text-sm font-body transition-colors"
                >
                  {offerPopupConfig.dismissText}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
