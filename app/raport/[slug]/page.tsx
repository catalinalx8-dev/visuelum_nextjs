import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CheckCircle2, TrendingUp, TrendingDown, Minus, Mail, Phone, ArrowRight } from 'lucide-react'
import { reports } from '@/lib/reports'
import { siteConfig } from '@/lib/config'

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

  return (
    <div className="bg-cream min-h-screen">
      {/* ── Report header banner ──────────────────────────────────────────── */}
      <section className="bg-navy relative overflow-hidden pt-32 pb-16 border-b border-stone/10">
        <div className="absolute inset-0 grid-overlay opacity-20" aria-hidden="true" />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
          style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="container-site relative z-10 max-w-5xl mx-auto">
          {/* Confidentiality notice */}
          <div className="inline-flex items-center gap-2 border border-amber/30 bg-amber/10 px-3 py-1.5 mb-6">
            <span className="font-mono text-[9px] uppercase tracking-widest text-amber">
              Confidențial — nu distribuiți
            </span>
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

      <div className="container-site max-w-5xl mx-auto py-16 space-y-16">
        {/* ── Executive summary ──────────────────────────────────────────── */}
        <section>
          <p className="eyebrow mb-4">Rezumat executiv</p>
          <div className="bg-white border border-stone p-8">
            <p className="font-body text-ink text-lg leading-relaxed">{report.summary}</p>
          </div>
        </section>

        {/* ── KPI metrics grid ───────────────────────────────────────────── */}
        <section>
          <p className="eyebrow mb-6">Indicatori cheie de performanță</p>
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

        {/* ── Deliverables ───────────────────────────────────────────────── */}
        <section>
          <p className="eyebrow mb-6">Lucrări realizate în {report.period}</p>
          <div className="space-y-6">
            {report.deliverables.map((group) => (
              <div key={group.category} className="bg-white border border-stone">
                {/* Category header */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-stone bg-parchment/60">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <h3 className="font-head font-bold text-navy text-sm uppercase tracking-wide">
                    {group.category}
                  </h3>
                </div>
                {/* Items */}
                <ul className="divide-y divide-stone/50">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 px-6 py-4">
                      <CheckCircle2 className="h-4 w-4 text-green flex-shrink-0 mt-0.5" />
                      <span className="font-body text-ink text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Next steps ─────────────────────────────────────────────────── */}
        <section>
          <p className="eyebrow mb-6">Plan luna viitoare</p>
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
        <section>
          <div className="bg-white border border-stone p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-head font-bold text-navy mb-1">
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
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-gold hover:text-gold-l transition-colors"
          >
            Vizitează site-ul
            <ArrowRight className="h-3 w-3" />
          </a>
        </footer>
      </div>
    </div>
  )
}
