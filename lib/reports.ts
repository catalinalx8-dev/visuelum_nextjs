/**
 * Client report data.
 *
 * Each entry in `reports` is keyed by a **secret URL slug** that you share
 * only with the specific client.  The slug acts as an access token — keep it
 * long and random (e.g. generated with `crypto.randomUUID()`).
 *
 * How to add a new client report:
 *  1. Generate a random slug, e.g. `openssl rand -hex 16`
 *  2. Add an entry to the `reports` object below using that slug as the key.
 *  3. Share the URL  https://visuelum.ro/raport/<slug>  with your client.
 *
 * The page is noindex / nofollow so Google will not crawl or index it.
 */

export interface ClientMetric {
  label: string
  value: string
  /** e.g. "+24%" or "↑ 3 poziții" */
  change?: string
  /** Determines badge colour */
  changeType?: 'positive' | 'negative' | 'neutral'
}

export interface ServiceDeliverable {
  /** Service category heading */
  category: string
  /** Individual completed items */
  items: string[]
}

export interface ClientReport {
  /** Secret URL slug — also the key in the `reports` map */
  slug: string
  clientName: string
  /** Business / project name */
  projectName: string
  /** Human-readable billing / reporting period */
  period: string
  /** ISO date string when the report was last generated */
  generatedAt: string
  /** One-paragraph executive summary shown at the top */
  summary: string
  /** KPI cards shown in a responsive grid */
  metrics: ClientMetric[]
  /** Grouped list of work delivered this period */
  deliverables: ServiceDeliverable[]
  /** Bullet list of planned actions for next period */
  nextSteps: string[]
  /** Package subscribed to (for display only) */
  packageName: string
  /** Account manager name */
  managerName: string
  /** Account manager direct e-mail */
  managerEmail: string
}

// ─── Report data ──────────────────────────────────────────────────────────────
// Replace / extend the sample below with real client data.

export const reports: Record<string, ClientReport> = {
  /**
   * SAMPLE REPORT — replace `demo-visuelum-2025` with a random token and fill
   * in real data before sharing with clients.
   */
  'demo-visuelum-2025': {
    slug: 'demo-visuelum-2025',
    clientName: 'Restaurant La Popescu',
    projectName: 'Pachet Creștere — Website + SEO + Social Media',
    period: 'Martie 2025',
    generatedAt: '2025-03-31',
    summary:
      'Luna martie a fost una excelentă pentru Restaurant La Popescu. Traficul organic a crescut cu 38% față de luna precedentă, iar căutările pe Google Business Profile au depășit 1.200 afișări — un maxim istoric. Contul de Instagram a câștigat 214 urmăritori noi, cu un engagement rate de 6.2%, semnificativ peste media industriei (2–3%).',
    metrics: [
      { label: 'Vizitatori organici', value: '1 847', change: '+38%', changeType: 'positive' },
      { label: 'Poziție medie Google', value: '#4.2', change: '↑ 3 poziții', changeType: 'positive' },
      { label: 'Afișări Google Business', value: '1 214', change: '+61%', changeType: 'positive' },
      { label: 'Urmăritori Instagram', value: '+214', change: 'luna aceasta', changeType: 'positive' },
      { label: 'Engagement Rate', value: '6.2%', change: 'vs. 2–3% avg.', changeType: 'positive' },
      { label: 'Cererile de rezervare', value: '47', change: '+18 vs feb.', changeType: 'positive' },
    ],
    deliverables: [
      {
        category: 'Website',
        items: [
          'Actualizat meniul digital cu prețuri și imagini noi (12 preparate)',
          'Pagina de Galerie extinsă cu 24 fotografii noi de la ședința foto din 15 martie',
          'Viteză pagină îmbunătățită: Lighthouse Performance 94 → 98',
          'Implementat schema markup pentru Restaurant (Google Rich Results)',
        ],
      },
      {
        category: 'SEO Local',
        items: [
          'Optimizat fișă Google Business Profile: descriere, ore, categorii',
          '8 recenzii noi gestionate (7 pozitive, 1 negativ — răspuns profesional oferit)',
          'Construit 6 citații locale (TripAdvisor, Yelp RO, Zomato, Anunturi.ro)',
          'Publicat 2 articole de blog optimizate SEO: "Meniu de Paște 2025" și "Specialități din Dobrogea"',
        ],
      },
      {
        category: 'Social Media',
        items: [
          '28 postări publicate pe Instagram (zilnic, fără pauze)',
          '12 Stories interactive cu sondaje și întrebări — rata de răspuns 14%',
          '4 Reels produse și montate: preparate, atmosferă, echipă, testimonial client',
          'Campanie organică "Meniu de Prânz" — 3.400 persoane atinse, 210 distribuiri',
        ],
      },
    ],
    nextSteps: [
      'Lansare campanie Google Ads pentru rezervări de Paște (buget recomandat: 300 RON/lună)',
      'Ședință foto de primăvară — terasă + meniu nou (programată 10 aprilie)',
      'Integrare widget recenzii Google pe website (pagina Despre noi)',
      'Creare pagină dedicată pentru Events & Catering pe website',
      'Campanie Instagram colaborare cu un food blogger local din Constanța',
    ],
    packageName: 'Pachet Creștere',
    managerName: 'Echipa Visuelum',
    managerEmail: 'contact@visuelum.ro',
  },
}
