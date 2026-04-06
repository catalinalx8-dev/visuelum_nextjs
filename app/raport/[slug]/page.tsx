import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  Minus,
  Mail,
  Phone,
  ArrowRight,
  Activity,
  CalendarDays,
} from 'lucide-react'
import { reports } from '@/lib/reports'
import { siteConfig } from '@/lib/config'
import PrintButton from './PrintButton'
import type { ProjectStatus } from '@/lib/reports'

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * Generate metadata for the report page.
 * All report pages are noindex / nofollow — they must not appear in search engines.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const report = reports[slug]

  return {
    title: report
      ? `Raport ${report.period} — ${report.clientName} | Visuelum`
      : 'Raport Client | Visuelum',
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
  }
}

// ─── Helper components ────────────────────────────────────────────────────────

const changeIcon = (type: 'positive' | 'negative' | 'neutral' | undefined) => {
  if (type === 'positive') return <TrendingUp className="h-3.5 w-3.5" />
  if (type === 'negative') return <TrendingDown className="h-3.5 w-3.5" />
  return <Minus className="h-3.5 w-3.5" />
}

const changeBadgeClass = (type: 'positive' | 'negative' | 'neutral' | undefined) => {
  if (type === 'positive') return 'text-green bg-green/10 border-green/20'
  if (type === 'negative') return 'text-red-500 bg-red-500/10 border-red-500/20'
  return 'text-muted bg-stone/20 border-stone/40'
}

const healthConfig: Record<
  ProjectStatus['health'],
  { dot: string; badge: string; bar: string }
> = {
  excellent: {
    dot: 'bg-green',
    badge: 'text-green bg-green/10 border-green/30',
    bar: 'bg-green',
  },
  good: {
    dot: 'bg-amber',
    badge: 'text-amber bg-amber/10 border-amber/30',
    bar: 'bg-amber',
  },
  warning: {
    dot: 'bg-amber',
    badge: 'text-amber bg-amber/10 border-amber/30',
    bar: 'bg-amber',
  },
  critical: {
    dot: 'bg-red-500',
    badge: 'text-red-500 bg-red-500/10 border-red-500/30',
    bar: 'bg-red-500',
  },
}

function formatActivityDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('ro-RO', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ClientReportPage({ params }: Props) {
  const { slug } = await params
  const report = reports[slug]

  if (!report) {
    notFound()
  }

  const formattedDate = new Date(report.generatedAt).toLocaleDateString('ro-RO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const { projectStatus: ps } = report
  const hc = healthConfig[ps.health]

  return (
    <div className="bg-cream min-h-screen">
      {/* ── Report header banner ──────────────────────────────────────────── */}
      <section className="bg-navy relative overflow-hidden pt-32 pb-16 border-b border-stone/10 print:pt-8 print:pb-8">
        <div className="absolute inset-0 grid-overlay opacity-20" aria-hidden="true" />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
          style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="container-site relative z-10 max-w-5xl mx-auto">
          {/* Top row: confidential badge + print button */}
          <div className="flex items-center justify-between mb-6">
            <div className="inline-flex items-center gap-2 border border-amber/30 bg-amber/10 px-3 py-1.5">
              <span className="font-mono text-[9px] uppercase tracking-widest text-amber">
                Confidențial — nu distribuiți
              </span>
            </div>
            <PrintButton />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-gold mb-3">
                Raport lunar de performanță
              </p>
              <h1 className="font-head font-extrabold text-h1 text-cream mb-3 leading-tight">
                {report.clientName}
              </h1>
              <p className="font-body text-muted-l text-lg">{report.projectName}</p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-1">
              <div className="font-head font-bold text-2xl text-gold">{report.period}</div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Generat pe {formattedDate}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-site max-w-5xl mx-auto py-12 space-y-14">

        {/* ── Project Status ─────────────────────────────────────────────── */}
        <section aria-labelledby="status-heading">
          <p className="eyebrow mb-4" id="status-heading">Stadiul proiectului</p>
          <div className="bg-white border border-stone">
            {/* Status bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5 border-b border-stone bg-parchment/50">
              {/* Phase + health */}
              <div className="flex items-center gap-4">
                <Activity className="h-5 w-5 text-gold flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-0.5">Fază curentă</p>
                  <p className="font-head font-bold text-navy">{ps.phase}</p>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 border px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest ${hc.badge}`}
                >
                  <span className={`inline-block h-1.5 w-1.5 rounded-full ${hc.dot}`} />
                  {ps.healthLabel}
                </span>
              </div>

              {/* Month progress */}
              <div className="flex items-center gap-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted hidden sm:block">
                  Progres contract
                </p>
                <div className="flex items-center gap-1" aria-label={`Luna ${ps.monthNumber} din ${ps.totalMonths}`}>
                  {Array.from({ length: ps.totalMonths }).map((_, i) => (
                    <span
                      key={i}
                      className={`inline-block h-2 rounded-sm transition-colors ${
                        i < ps.monthNumber ? 'bg-gold w-3' : 'bg-stone w-2'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-mono text-[10px] text-muted">
                  {ps.monthNumber}/{ps.totalMonths}
                </span>
              </div>
            </div>

            {/* Goal progress bars */}
            <div className="divide-y divide-stone/50">
              {ps.goals.map((goal) => {
                const pct = Math.min(Math.round((goal.current / goal.target) * 100), 100)
                return (
                  <div key={goal.label} className="px-6 py-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
                        {goal.label}
                      </span>
                      <span className="font-mono text-[10px] text-navy">
                        <span className="font-bold">{goal.current.toLocaleString('ro-RO')}</span>
                        <span className="text-muted"> / {goal.target.toLocaleString('ro-RO')} {goal.unit}</span>
                      </span>
                    </div>
                    <div className="h-2 bg-stone/40 rounded-full overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
                      <div
                        className={`h-full rounded-full transition-all ${hc.bar}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <div className="flex justify-end mt-1">
                      <span className="font-mono text-[9px] text-muted">{pct}% din target</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Highlights (top wins) ──────────────────────────────────────── */}
        <section aria-labelledby="highlights-heading">
          <p className="eyebrow mb-4" id="highlights-heading">Cele mai importante realizări</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {report.highlights.map((h) => (
              <div
                key={h.title}
                className="bg-white border border-stone p-6 hover:border-gold/40 transition-colors"
              >
                <div className="text-3xl mb-4" aria-hidden="true">{h.emoji}</div>
                <p className="font-head font-bold text-navy text-base mb-2">{h.title}</p>
                <p className="font-body text-muted text-sm leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Executive summary ──────────────────────────────────────────── */}
        <section aria-labelledby="summary-heading">
          <p className="eyebrow mb-4" id="summary-heading">Rezumat executiv</p>
          <div className="bg-white border border-stone p-8">
            <p className="font-body text-ink text-lg leading-relaxed">{report.summary}</p>
          </div>
        </section>

        {/* ── KPI metrics grid ───────────────────────────────────────────── */}
        <section aria-labelledby="kpi-heading">
          <p className="eyebrow mb-6" id="kpi-heading">Indicatori cheie de performanță</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {report.metrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-white border border-stone p-6 hover:border-gold/40 transition-colors"
              >
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted mb-3">
                  {metric.label}
                </p>
                <p className="font-head font-extrabold text-3xl text-navy mb-3">
                  {metric.value}
                </p>
                {metric.change && (
                  <div
                    className={`inline-flex items-center gap-1 border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide ${changeBadgeClass(metric.changeType)}`}
                  >
                    {changeIcon(metric.changeType)}
                    {metric.change}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Activity log / Desfășurător ────────────────────────────────── */}
        <section aria-labelledby="activity-heading">
          <div className="flex items-center gap-3 mb-6">
            <p className="eyebrow" id="activity-heading">Desfășurător activități</p>
            <CalendarDays className="h-4 w-4 text-gold" aria-hidden="true" />
          </div>
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[11px] top-3 bottom-3 w-px bg-stone/60 print:hidden" aria-hidden="true" />

            <ol className="space-y-0">
              {report.activityLog.map((entry, idx) => (
                <li key={entry.date} className="relative flex gap-5">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 relative z-10 mt-4">
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                        idx === 0
                          ? 'border-gold bg-gold'
                          : 'border-stone bg-white'
                      }`}
                      aria-hidden="true"
                    >
                      {idx === 0 && (
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      )}
                    </span>
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 bg-white border border-stone mb-4 ${idx === 0 ? 'border-gold/30' : ''}`}>
                    {/* Date header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-5 py-3 border-b border-stone bg-parchment/40">
                      <p className="font-head font-bold text-navy text-sm capitalize">
                        {formatActivityDate(entry.date)}
                      </p>
                      {entry.title && (
                        <span className="font-mono text-[9px] uppercase tracking-widest text-gold">
                          {entry.title}
                        </span>
                      )}
                    </div>
                    {/* Items */}
                    <ul className="divide-y divide-stone/40">
                      {entry.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 px-5 py-3.5">
                          <CheckCircle2 className="h-4 w-4 text-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="font-body text-ink text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Deliverables ───────────────────────────────────────────────── */}
        <section aria-labelledby="deliverables-heading">
          <p className="eyebrow mb-6" id="deliverables-heading">Lucrări realizate în {report.period}</p>
          <div className="space-y-6">
            {report.deliverables.map((group) => (
              <div key={group.category} className="bg-white border border-stone">
                {/* Category header */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-stone bg-parchment/60">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  <h3 className="font-head font-bold text-navy text-sm uppercase tracking-wide">
                    {group.category}
                  </h3>
                </div>
                {/* Items */}
                <ul className="divide-y divide-stone/50">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 px-6 py-4">
                      <CheckCircle2 className="h-4 w-4 text-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-body text-ink text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Next steps ─────────────────────────────────────────────────── */}
        <section aria-labelledby="next-steps-heading">
          <p className="eyebrow mb-6" id="next-steps-heading">Plan luna viitoare</p>
          <div className="bg-navy border border-stone/10 p-8">
            <ul className="space-y-4">
              {report.nextSteps.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="font-mono text-3xl font-bold text-gold/20 leading-none flex-shrink-0 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-body text-muted-l text-sm leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Contact / Questions ────────────────────────────────────────── */}
        <section aria-labelledby="contact-heading">
          <div className="bg-white border border-stone p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-head font-bold text-navy mb-1" id="contact-heading">
                Ai întrebări despre raport?
              </p>
              <p className="font-body text-muted text-sm">
                Contactează-ne direct — suntem disponibili de luni până vineri, 09:00–18:00.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href={`mailto:${report.managerEmail}`}
                className="inline-flex items-center gap-2 btn-primary px-5 py-2.5 text-sm"
              >
                <Mail className="h-4 w-4" />
                {report.managerEmail}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4 text-gold" />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* ── Branding footer ────────────────────────────────────────────── */}
        <footer className="border-t border-stone pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-head font-bold text-navy">{siteConfig.name}</p>
            <p className="font-mono text-[9px] uppercase tracking-widest text-muted mt-1">
              Agenție Marketing Digital — {siteConfig.address}
            </p>
          </div>
          <a
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-gold hover:text-gold-l transition-colors print:hidden"
          >
            Vizitează site-ul
            <ArrowRight className="h-3 w-3" />
          </a>
        </footer>
      </div>
    </div>
  )
}
