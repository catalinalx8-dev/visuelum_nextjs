import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate',
  description: 'Politica de confidențialitate și prelucrare a datelor personale Visuelum.',
  alternates: { canonical: `${siteConfig.url}/politica-de-confidentialitate` },
}

export default function PoliticaPage() {
  const year = new Date().getFullYear()

  return (
    <>
      <section className="bg-navy-deep relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80"
            alt=""
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container-site relative z-10 max-w-3xl mx-auto">
          <p className="eyebrow mb-6">Legal</p>
          <h1 className="font-head font-extrabold text-h1 text-cream mb-4">
            Politica de Confidențialitate
          </h1>
          <p className="font-body italic text-muted-l">
            Ultima actualizare: 1 ianuarie {year}
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container-site max-w-3xl mx-auto">
          <div className="space-y-10 font-body text-muted leading-relaxed">

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">1. Cine suntem</h2>
              <p>
                <strong className="text-navy">{siteConfig.name}</strong> este operator de date cu
                caracter personal în conformitate cu Regulamentul (UE) 2016/679 (GDPR). Sediul nostru
                se află în {siteConfig.address}, iar datele de contact sunt:{' '}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gold hover:text-gold-l transition-colors"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">
                2. Ce date colectăm și de ce
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-head font-semibold text-navy mb-2">Formularul de contact</h3>
                  <p>
                    Când completezi formularul de contact sau cerere de ofertă, colectăm: nume, adresă
                    de email, număr de telefon (opțional), numele afacerii și mesajul tău.
                  </p>
                  <p className="mt-2">
                    <strong className="text-navy">Scop:</strong> răspuns la solicitarea ta și stabilirea
                    unei colaborări. <strong className="text-navy">Temei legal:</strong> interesul
                    legitim (art. 6(1)(f) GDPR).
                  </p>
                </div>
                <div>
                  <h3 className="font-head font-semibold text-navy mb-2">Date analitice</h3>
                  <p>
                    Folosim Vercel Analytics pentru analiza statistică anonimă a traficului (pagini
                    vizitate, durata sesiunii). Aceste date nu conțin informații personal identificabile.
                  </p>
                  <p className="mt-2">
                    <strong className="text-navy">Scop:</strong> îmbunătățirea website-ului.{' '}
                    <strong className="text-navy">Temei legal:</strong> consimțământ (art. 6(1)(a) GDPR).
                  </p>
                </div>
                <div>
                  <h3 className="font-head font-semibold text-navy mb-2">Cookie-uri</h3>
                  <p>
                    Folosim cookie-uri tehnice (necesare funcționării website-ului) și cookie-uri
                    analitice (opționale, activate doar cu consimțământul tău). Nu folosim cookie-uri
                    de marketing sau tracking de la terți.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">3. Cât timp păstrăm datele</h2>
              <ul className="space-y-2 pl-0">
                {[
                  'Date din formularul de contact: maximum 2 ani de la ultima interacțiune',
                  'Date analitice: agregat, fără limită de timp',
                  'Date din contracte: conform obligațiilor legale (minimum 5 ani)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-1">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">
                4. Cu cine împărtășim datele
              </h2>
              <p>
                Nu vindem datele tale. Le împărtășim doar cu furnizorii de servicii esențiali:
              </p>
              <ul className="mt-4 space-y-2 pl-0">
                {[
                  'Resend (serviciu de email) — pentru trimiterea confirmărilor de contact',
                  'Vercel (hosting) — pentru funcționarea website-ului',
                  'Vercel Analytics — pentru statistici anonime de trafic',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-1">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Toți furnizorii respectă GDPR și sunt localizați în UE sau au certificare
                corespunzătoare.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">5. Drepturile tale</h2>
              <p>Conform GDPR, ai dreptul la:</p>
              <ul className="mt-4 space-y-2 pl-0">
                {[
                  'Acces — să cunoști ce date deținem despre tine',
                  'Rectificare — să corectezi datele inexacte',
                  'Ștergere — să solicite ștergerea datelor ("dreptul de a fi uitat")',
                  'Restricționare — să limitezi prelucrarea datelor tale',
                  'Portabilitate — să primești datele într-un format structurat',
                  'Opoziție — să te opui prelucrării bazate pe interes legitim',
                  'Retragerea consimțământului — în orice moment, fără consecințe',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-1">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Pentru exercitarea acestor drepturi, scrie-ne la{' '}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gold hover:text-gold-l transition-colors"
                >
                  {siteConfig.email}
                </a>
                . Răspundem în maximum 30 de zile.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">6. Securitatea datelor</h2>
              <p>
                Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor tale:
                conexiuni HTTPS, acces restricționat la date, parole securizate și revizuiri periodice
                ale securității.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">7. Reclamații</h2>
              <p>
                Dacă consideri că prelucrarea datelor tale încalcă GDPR, ai dreptul să depui o
                reclamație la{' '}
                <a
                  href="https://www.dataprotection.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-l transition-colors"
                >
                  Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal
                  (ANSPDCP)
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">
                8. Modificări ale politicii
              </h2>
              <p>
                Această politică poate fi actualizată periodic. Modificările semnificative vor fi
                comunicate prin email sau printr-un anunț proeminent pe website.
              </p>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-stone">
            <Link
              href="/termeni-si-conditii"
              className="font-mono text-xs uppercase tracking-widest text-gold hover:text-gold-l transition-colors"
            >
              Termeni și Condiții →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
