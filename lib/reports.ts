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

/** A single measurable goal shown as a progress bar in the status section */
export interface ProjectGoal {
  label: string
  current: number
  target: number
  /** Unit appended after numbers, e.g. "vizitatori/lună" */
  unit: string
}

/** Overall project health + monthly progress */
export interface ProjectStatus {
  /** Short phase name: "Lansare", "Creștere", "Optimizare", "Mentenanță" */
  phase: string
  /** Current month of the contract (1-based) */
  monthNumber: number
  /** Total contract duration in months */
  totalMonths: number
  health: 'excellent' | 'good' | 'warning' | 'critical'
  /** Translated label shown in the badge */
  healthLabel: string
  /** 2–4 key goals with current vs target values */
  goals: ProjectGoal[]
}

/** A top-win highlight card displayed prominently for the client */
export interface ClientHighlight {
  emoji: string
  title: string
  description: string
}

/** One entry in the chronological activity log (desfășurător) */
export interface ActivityLogEntry {
  /** ISO date string, e.g. "2025-03-15" */
  date: string
  /** Brief title for the work session (optional) */
  title?: string
  /** List of tasks / deliverables completed on this date */
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
  /** Project phase, health, and goal progress shown at the top of the page */
  projectStatus: ProjectStatus
  /** Top 3 key-win highlights shown as feature cards */
  highlights: ClientHighlight[]
  /** KPI cards shown in a responsive grid */
  metrics: ClientMetric[]
  /** Grouped list of work delivered this period */
  deliverables: ServiceDeliverable[]
  /** Chronological log of what was done on each date */
  activityLog: ActivityLogEntry[]
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
    projectStatus: {
      phase: 'Optimizare',
      monthNumber: 3,
      totalMonths: 12,
      health: 'excellent',
      healthLabel: 'Excelent',
      goals: [
        { label: 'Trafic organic', current: 1847, target: 2000, unit: 'vizitatori/lună' },
        { label: 'Afișări Google Business', current: 1214, target: 1500, unit: 'afișări/lună' },
        { label: 'Urmăritori Instagram', current: 1430, target: 2000, unit: 'urmăritori' },
      ],
    },
    highlights: [
      {
        emoji: '📈',
        title: 'Trafic organic +38%',
        description:
          'Record absolut de vizitatori organici în luna martie — 1.847 sesiuni unice, depășind target-ul lunii cu 92%.',
      },
      {
        emoji: '⭐',
        title: 'Google Business la maximum',
        description:
          'Peste 1.200 afișări pe Google Business Profile — maxim istoric. 7 recenzii noi pozitive gestionate profesional.',
      },
      {
        emoji: '🎯',
        title: 'Engagement Instagram 6.2%',
        description:
          'Rata de engagement de 6.2% depășește de 3× media industriei. Campania "Meniu de Prânz" a atins 3.400 persoane.',
      },
    ],
    metrics: [
      { label: 'Vizitatori organici', value: '1 847', change: '+38%', changeType: 'positive' },
      { label: 'Poziție medie Google', value: '#4.2', change: '↑ 3 poziții', changeType: 'positive' },
      { label: 'Afișări Google Business', value: '1 214', change: '+61%', changeType: 'positive' },
      { label: 'Urmăritori Instagram', value: '+214', change: 'luna aceasta', changeType: 'positive' },
      { label: 'Engagement Rate', value: '6.2%', change: 'vs. 2–3% avg.', changeType: 'positive' },
      { label: 'Cereri de rezervare', value: '47', change: '+18 vs feb.', changeType: 'positive' },
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
    activityLog: [
      {
        date: '2025-03-03',
        title: 'Planificare & lansare conținut',
        items: [
          'Programat și publicat 7 postări Instagram pentru săptămâna 3–9 martie',
          'Optimizat fișă Google Business Profile: descriere actualizată, ore de program corecte',
          'Analizat raportul de performanță din februarie — identificate oportunități de îmbunătățire',
        ],
      },
      {
        date: '2025-03-08',
        title: 'SEO & Reels',
        items: [
          'Publicat articol SEO: "Meniu de Paște 2025 la Restaurant La Popescu"',
          'Construit 3 citații locale noi: TripAdvisor, Zomato, Anunturi.ro',
          'Creat și publicat 2 Reels Instagram (preparate + testimonial client)',
        ],
      },
      {
        date: '2025-03-15',
        title: 'Ședință foto & actualizare website',
        items: [
          'Ședință foto profesională: terasă + meniu nou (24 fotografii livrate)',
          'Actualizat galeria website cu 24 fotografii noi de primăvară',
          'Gestionat 3 recenzii noi pe Google (răspuns profesional oferit pentru fiecare)',
        ],
      },
      {
        date: '2025-03-20',
        title: 'Articol SEO & meniu actualizat',
        items: [
          'Publicat articol SEO: "Specialități din Dobrogea — Restaurant La Popescu"',
          'Actualizat meniul digital: 12 preparate noi cu imagini și prețuri',
          'Construit 3 citații locale suplimentare: Yelp RO + 2 directoare locale',
        ],
      },
      {
        date: '2025-03-25',
        title: 'Campanie organică Instagram & optimizare viteză',
        items: [
          'Lansare campanie organică Instagram "Meniu de Prânz" — 3.400 persoane atinse',
          'Produs și montat 2 Reels: atmosferă restaurant + echipă',
          'Optimizat viteză website: Lighthouse Performance 94 → 98',
        ],
      },
      {
        date: '2025-03-31',
        title: 'Finalizare lunară & schema markup',
        items: [
          'Implementat schema markup Restaurant pentru Google Rich Results',
          'Integrare widget recenzii Google (pagina Acasă)',
          'Pregătit raportul lunar și identificat pașii prioritari pentru luna aprilie',
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
