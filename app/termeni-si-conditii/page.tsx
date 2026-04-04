import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Termeni și Condiții',
  description: 'Termenii și condițiile de utilizare a serviciilor Visuelum.',
  alternates: { canonical: `${siteConfig.url}/termeni-si-conditii` },
}

export default function TermeniPage() {
  const year = new Date().getFullYear()

  return (
    <>
      <section className="bg-white relative overflow-hidden pt-32 pb-16 border-b border-stone">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="absolute inset-0 gold-glow" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container-site relative z-10 max-w-3xl mx-auto">
          <p className="eyebrow mb-6">Legal</p>
          <h1 className="font-head font-extrabold text-h1 text-navy mb-4">
            Termeni și Condiții
          </h1>
          <p className="font-body italic text-muted">
            Ultima actualizare: 1 ianuarie {year}
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-site max-w-3xl mx-auto">
          <div className="space-y-10 font-body text-muted leading-relaxed">

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">1. Informații generale</h2>
              <p>
                Prezentul document reglementează termenii și condițiile de utilizare a website-ului{' '}
                <strong className="text-navy">visuelum.ro</strong> și a serviciilor oferite de{' '}
                <strong className="text-navy">{siteConfig.name}</strong>, cu sediul în{' '}
                {siteConfig.address}.
              </p>
              <p className="mt-4">
                Prin accesarea și utilizarea acestui website, ești de acord cu termenii și condițiile
                prezentate mai jos. Dacă nu ești de acord cu aceștia, te rugăm să nu utilizezi
                serviciile noastre.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">2. Descrierea serviciilor</h2>
              <p>
                Visuelum oferă servicii de marketing digital pentru afaceri locale, incluzând, fără a se
                limita la:
              </p>
              <ul className="mt-4 space-y-2 pl-0">
                {[
                  'Crearea și administrarea website-urilor profesionale',
                  'Gestionarea rețelelor de socializare (Social Media Management)',
                  'Optimizare pentru motoarele de căutare (SEO) și Google Business Profile',
                  'Fotografie și videografie profesională',
                  'Gestionarea campaniilor Google Ads și Meta Ads',
                  'Servicii de branding și design grafic',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-1">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">3. Contractul de servicii</h2>
              <p>
                Prestarea serviciilor se realizează pe baza unui contract individual, semnat între
                Visuelum și client, care stabilește detaliile specifice ale colaborării, prețul, durata
                și condițiile de reziliere.
              </p>
              <p className="mt-4">
                Website-ul creat de Visuelum este găzduit pe serverele noastre pe durata abonamentului
                activ. Domeniul (.ro sau .com) rămâne întotdeauna în proprietatea clientului. La
                încetarea colaborării, clientul primește toate fișierele website-ului.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">4. Prețuri și plăți</h2>
              <p>
                Prețurile afișate pe website sunt exprimate în RON și nu includ TVA (acolo unde este
                aplicabil). Plata se efectuează lunar, în avans, prin transfer bancar sau alte metode
                agreate în contract.
              </p>
              <p className="mt-4">
                Visuelum își rezervă dreptul de a modifica prețurile cu notificare prealabilă de minimum
                30 de zile.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">5. Proprietatea intelectuală</h2>
              <p>
                Conținutul creat de Visuelum (texte, design, fotografii, videoclipuri) în cadrul
                abonamentului devine proprietatea clientului după achitarea integrală a serviciilor,
                conform contractului individual.
              </p>
              <p className="mt-4">
                Conținutul website-ului visuelum.ro (logo, texte, structură) este proprietatea
                Visuelum și nu poate fi reprodus fără acordul scris al acesteia.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">6. Limitarea răspunderii</h2>
              <p>
                Visuelum nu poate fi trasă la răspundere pentru pierderi indirecte cauzate de
                întreruperi ale serviciilor terților (Google, Meta, platforme de hosting etc.) sau de
                forța majoră.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">7. Modificări ale termenilor</h2>
              <p>
                Visuelum își rezervă dreptul de a actualiza prezentul document. Modificările vor fi
                comunicate prin email sau publicate pe acest website. Utilizarea continuă a serviciilor
                după notificare constituie acceptul noilor termeni.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">8. Contact</h2>
              <p>
                Pentru orice întrebări legate de acești termeni, ne poți contacta la:{' '}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gold hover:text-gold-l transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-stone">
            <Link
              href="/politica-de-confidentialitate"
              className="font-mono text-xs uppercase tracking-widest text-gold hover:text-gold-l transition-colors"
            >
              Politica de Confidențialitate →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
