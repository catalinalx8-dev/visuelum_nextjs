import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Pagina nu a fost găsită',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-deep relative flex items-center justify-center px-4">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1400&q=80"
          alt=""
          fill
          className="object-cover opacity-5"
          sizes="100vw"
          priority
        />
      </div>
      <div className="relative z-10 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">404</p>
        <h1 className="font-head font-extrabold text-display text-cream mb-6">
          Pagina<br />
          <span className="text-gold">lipsește.</span>
        </h1>
        <p className="font-body italic text-muted-l text-lg mb-10 max-w-md mx-auto">
          Această pagină nu există sau a fost mutată. Navighează înapoi la pagina principală.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Înapoi acasă
          </Link>
          <Link href="/contact" className="btn-cream-ghost">
            Contactează-ne
          </Link>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          {[
            { href: '/pachete', label: 'Pachete & Prețuri' },
            { href: '/servicii', label: 'Servicii' },
            { href: '/blog', label: 'Blog' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-muted-l hover:text-gold-l transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
