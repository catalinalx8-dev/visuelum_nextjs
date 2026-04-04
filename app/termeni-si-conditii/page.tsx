import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Termeni și Condiții — Visuelum',
  description: 'Termenii și condițiile complete de colaborare cu Visuelum: contractul de servicii, condițiile de hosting, proprietatea website-ului, prețuri și politica de reziliere.',
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
                {siteConfig.address}. Telefon: {siteConfig.phoneDisplay}. Email: {siteConfig.email}.
              </p>
              <p className="mt-4">
                Prin accesarea website-ului sau prin inițierea unei colaborări, confirmi că ai citit,
                înțeles și ești de acord cu prezenții termeni. Dacă nu ești de acord, te rugăm să nu
                utilizezi serviciile noastre.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">2. Descrierea serviciilor</h2>
              <p>
                Visuelum oferă servicii de marketing digital pentru afaceri locale din Constanța și
                Dobrogea, incluzând, fără a se limita la:
              </p>
              <ul className="mt-4 space-y-2 pl-0">
                {[
                  'Crearea și administrarea website-urilor profesionale',
                  'Gestionarea rețelelor de socializare (Social Media Management) — Instagram, Facebook, TikTok',
                  'Optimizare pentru motoarele de căutare (SEO local) și Google Business Profile',
                  'Fotografie și videografie profesională la locație',
                  'Gestionarea campaniilor Google Ads și Meta Ads',
                  'Servicii de branding și design grafic',
                  'Meniu digital interactiv pentru restaurante',
                  'Fotografii profesionale pentru listinguri AirBnb',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-1">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">3. Contractul de servicii și angajamentul minim</h2>
              <p>
                Prestarea serviciilor se realizează pe baza unui contract individual, semnat între
                Visuelum și client, care stabilește detaliile specifice ale colaborării, prețul lunar,
                durata și condițiile de reziliere.
              </p>
              <p className="mt-4">
                <strong className="text-navy">Angajament minim — Pachete cu website inclus:</strong>{' '}
                Deoarece website-ul este creat gratuit de Visuelum, clientul se angajează la un
                abonament minim de <strong>6 (șase) luni calendaristice</strong>. Această perioadă
                permite recuperarea costului de producție (design, dezvoltare, configurare, hosting)
                prin abonamentul lunar plătit de client.
              </p>
              <p className="mt-4">
                <strong className="text-navy">Hosting gratuit pe toată durata colaborării:</strong>{' '}
                Hosting-ul este oferit gratuit de Visuelum clientului pe toată durata în care abonamentul este activ — nu doar primele 6 luni.
                Visuelum asigură și administrează hosting-ul în numele clientului, fără costuri suplimentare față de abonamentul lunar.
              </p>
              <p className="mt-4">
                <strong className="text-navy">Condiție de menținere a website-ului:</strong>{' '}
                Dacă clientul nu achită abonamentul lunar în termenul scadent, Visuelum are dreptul să
                suspende și ulterior să închidă website-ul, fără a fi necesară
                o notificare suplimentară după primele 15 zile de întârziere.
              </p>
              <p className="mt-4">
                <strong className="text-navy">Reziliere înainte de 6 luni:</strong>{' '}
                Dacă clientul reziliază contractul înainte de finalizarea celor 6 luni minime, website-ul este suspendat.
                Domeniu rămâne exclusiv proprietatea clientului — acesta poate colabora cu alt prestator sau îl poate administra
                cum dorește. Codul sursă al website-ului nu se transferă clientului în această situație.
              </p>
              <p className="mt-4">
                <strong className="text-navy">Ce se întâmplă după 6 luni:</strong>{' '}
                Clientul poate alege una din următoarele opțiuni:
              </p>
              <ul className="mt-3 space-y-2 pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">›</span>
                  <span><strong>Continuarea abonamentului</strong> — lună de lună, fără angajament suplimentar.
                    Hosting-ul rămâne inclus gratuit în abonament.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">›</span>
                  <span><strong>Preluarea codului sursă</strong> — clientul primește toate fișierele
                    website-ului și se poate ocupa singur de hosting și administrare, unde dorește.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">4. Proprietatea domeniului web</h2>
              <p>
                Domeniul web (.ro, .com sau alte extensii) asociat website-ului clientului rămâne
                <strong className="text-navy"> întotdeauna și exclusiv în proprietatea clientului</strong>,
                indiferent de decizia de continuare sau încetare a colaborării.
              </p>
              <p className="mt-4">
                Domeniul poate fi achiziționat de client în mod direct sau, la cerere, de Visuelum în
                numele clientului — caz în care toate datele de acces sunt transmise imediat clientului.
                Visuelum nu reține niciodată controlul exclusiv asupra domeniului unui client.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">5. Prețuri și plăți</h2>
              <p>
                Prețurile afișate pe website sunt exprimate în RON și nu includ TVA (acolo unde este
                aplicabil). Plata se efectuează <strong>lunar, în avans</strong>, prin transfer bancar
                sau alte metode agreate în contract.
              </p>
              <p className="mt-4">
                <strong className="text-navy">Pachete disponibile:</strong>
              </p>
              <ul className="mt-3 space-y-2 pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">›</span>
                  <span><strong>PREZENȚA</strong> — 349 RON/lună (fără TVA). Include website până la 5 pagini,
                    hosting + SSL, Google Business, calendar social media, raport lunar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">›</span>
                  <span><strong>CREȘTERE</strong> — 649 RON/lună (fără TVA). Include website până la 8 pagini,
                    hosting premium + email profesional, social media full service 4 postări/săpt,
                    1 ședință foto/lună, SEO avansat, raport detaliat.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">›</span>
                  <span><strong>DOMINARE</strong> — 1.199 RON/lună (fără TVA). Include website premium nelimitat,
                    hosting dedicat + 5 emailuri, social media zilnic pe 3 platforme, 2 ședințe foto/lună,
                    video Reels/TikTok, Google Ads + Meta Ads management, design grafic lunar,
                    raport avansat săptămânal.</span>
                </li>
              </ul>
              <p className="mt-4">
                <strong className="text-navy">Bugetul de publicitate</strong> (Google Ads, Meta Ads) nu este
                inclus în niciun pachet. Acesta se plătește direct de client în platformele Google și Meta,
                fără a trece prin Visuelum. Administrarea campaniilor este inclusă în pachetul DOMINARE.
              </p>
              <p className="mt-4">
                Visuelum își rezervă dreptul de a modifica prețurile cu notificare prealabilă de minimum
                30 de zile calendaristice.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">6. Garanție și politica de reziliere</h2>
              <p>
                <strong className="text-navy">Garanție 30 de zile:</strong>{' '}
                În primele 30 de zile calendaristice de la semnarea contractului, dacă clientul nu este
                mulțumit de calitatea serviciilor livrate, poate rezilia contractul fără nicio penalitate
                financiară. Visuelum va returna eventualele sume plătite în avans, proporțional cu
                serviciile nelivrate.
              </p>
              <p className="mt-4">
                <strong className="text-navy">Reziliere după 30 de zile și înainte de 6 luni:</strong>{' '}
                Clientul poate rezilia contractul în orice moment, cu notificare scrisă de minimum 30
                de zile. Deoarece website-ul a fost creat gratuit, o reziliere înainte de finalizarea
                celor 6 luni minime implică plata unei compensații egale cu abonamentele lunare rămase
                până la împlinirea celor 6 luni, conform contractului individual.
                Website-ul va fi suspendat, iar codul sursă nu se transferă clientului.
                Domeniu rămâne exclusiv proprietatea clientului.
              </p>
              <p className="mt-4">
                <strong className="text-navy">Reziliere după 6 luni:</strong>{' '}
                Clientul poate înceta colaborarea oricând, fără penalități, cu notificare scrisă de
                minimum 15 zile. La cerere, clientul primește integral codul sursă al website-ului
                și îl poate găzdui și administra unde dorește.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">7. Proprietatea intelectuală</h2>
              <p>
                Conținutul creat de Visuelum în cadrul abonamentului (texte, design, fotografii,
                videoclipuri, grafică) devine proprietatea clientului după achitarea integrală a
                serviciilor aferente perioadei în care a fost creat, conform contractului individual.
              </p>
              <p className="mt-4">
                Codul sursă al website-ului este proprietatea Visuelum pe durata abonamentului.
                La cerere, după finalizarea perioadei minime de 6 luni, clientul poate solicita
                transmiterea codului sursă, urmând a-l putea găzdui și administra independent.
              </p>
              <p className="mt-4">
                Conținutul website-ului visuelum.ro (logo, texte, structură, design) este proprietatea
                Visuelum și nu poate fi reprodus fără acordul scris al acesteia.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">8. Limitarea răspunderii</h2>
              <p>
                Visuelum nu poate fi trasă la răspundere pentru pierderi indirecte sau neatingerea
                unor obiective de business cauzate de întreruperi ale serviciilor terților
                (Google, Meta, platforme de hosting, furnizori DNS etc.) sau de forța majoră.
              </p>
              <p className="mt-4">
                Visuelum nu garantează poziții specifice în rezultatele Google sau un număr minim de
                lead-uri, deoarece acestea depind și de factori externi (concurență, sezonalitate,
                buget de publicitate etc.). Ne angajăm la efort maxim și la transparența completă
                a rezultatelor.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">9. Confidențialitate și GDPR</h2>
              <p>
                Datele cu caracter personal colectate prin formularul de contact sau în cadrul
                colaborării sunt prelucrate exclusiv în scopul furnizării serviciilor și nu sunt
                transmise către terțe părți fără consimțământul explicit al clientului.
                Detalii complete în{' '}
                <a href="/politica-de-confidentialitate" className="text-gold hover:text-gold-l transition-colors underline underline-offset-2">
                  Politica de Confidențialitate
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">10. Modificări ale termenilor</h2>
              <p>
                Visuelum își rezervă dreptul de a actualiza prezentul document. Modificările vor fi
                comunicate prin email sau publicate pe acest website cu minimum 15 zile înainte de
                intrarea în vigoare. Utilizarea continuă a serviciilor după notificare constituie
                acceptul noilor termeni.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">11. Legea aplicabilă</h2>
              <p>
                Prezentul contract este guvernat de legislația română în vigoare. Orice litigiu va fi
                soluționat pe cale amiabilă; în caz de eșec, competența revine instanțelor judecătorești
                din Constanța, România.
              </p>
            </div>

            <div>
              <h2 className="font-head font-bold text-navy text-xl mb-4">12. Contact</h2>
              <p>
                Pentru orice întrebări legate de acești termeni, ne poți contacta la:{' '}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gold hover:text-gold-l transition-colors"
                >
                  {siteConfig.email}
                </a>
                {' '}sau la telefon {siteConfig.phoneDisplay}.
              </p>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-stone flex flex-wrap gap-6">
            <Link
              href="/politica-de-confidentialitate"
              className="font-mono text-xs uppercase tracking-widest text-gold hover:text-gold-l transition-colors"
            >
              Politica de Confidențialitate →
            </Link>
            <Link
              href="/pachete"
              className="font-mono text-xs uppercase tracking-widest text-muted hover:text-navy transition-colors"
            >
              ← Înapoi la Pachete & Prețuri
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
