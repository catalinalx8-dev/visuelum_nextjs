/**
 * ─────────────────────────────────────────────────────────────────────────────
 * VISUELUM DESIGN TOKENS — single source of truth.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * HOW TO CUSTOMISE
 * ────────────────
 * 1. Edit the values in this file.
 * 2. Mirror any color changes in the `:root` block of app/globals.css
 *    (keep the hex values in sync — CSS cannot import TypeScript at runtime).
 * 3. Tailwind utilities (text-gold, bg-navy, etc.) are derived automatically
 *    from this file via tailwind.config.ts.
 *
 * FONTS
 * ─────
 * Two files must stay in sync when changing a font family:
 *   • This file (theme.fonts.*) — used by Tailwind font-family utilities.
 *   • app/layout.tsx — where the Google Font is imported with next/font/google.
 */

// ─── Base color tokens ────────────────────────────────────────────────────────

const navy = {
  DEFAULT: '#0B0D1A', // midnight navy — primary dark background
  deep:    '#060810', // deepest dark — overlays, hero gradients
  mid:     '#141929', // mid layer — card backgrounds on dark sections
}

/**
 * GOLD — primary brand accent (electric violet).
 * Named "gold" for semantic meaning (premium, value) while using a deep
 * electric violet that is distinctive in the digital-agency market.
 * Psychology: creativity, innovation, premium, imagination.
 * Alternatives: '#6D28D9' (deeper), '#8B5CF6' (lighter), '#5B21B6' (darkest)
 */
const gold = {
  DEFAULT: '#7C3AED', // deep electric violet — primary brand accent
  l:       '#A78BFA', // light violet — hover states, secondary elements
  pale:    '#EDE9FE', // lavender mist — tinted light backgrounds
}

/**
 * CYAN — secondary tech accent (electric sky-blue).
 * Pairs with the violet brand color to form the signature gradient.
 * Psychology: speed, clarity, digital, technology, openness.
 * Alternatives: '#06B6D4' (teal-leaning), '#38BDF8' (lighter sky)
 */
const cyan = '#0EA5E9' // electric sky-blue — gradient end, tech accent

export const theme = {
  colors: {
    /**
     * NAVY — dark canvas.
     * Used for hero sections, dark cards, footer, and overlays.
     * Psychology: authority, depth, trust, premium.
     * Alternatives: '#08091A' (deeper), '#0D1B2A' (more ocean-blue)
     */
    navy,

    /** Primary brand accent — see const above. */
    gold,

    /** Secondary tech accent — see const above. */
    cyan,

    /**
     * AMBER — premium gold highlight.
     * Warm amber for pricing badges, star ratings, success metrics.
     * Complements the violet accent with warmth and value perception.
     * Psychology: success, ROI, value, premium, achievement.
     * Alternatives: '#D97706' (darker gold), '#FBBF24' (lighter honey)
     */
    amber: '#F59E0B', // warm amber gold — premium, success, achievement

    /** CREAM — default light body background. Clean, almost-white neutral. */
    cream: '#FAFAFA',

    /**
     * PARCHMENT — violet-tinted light background.
     * Used for alternating section backgrounds and card surfaces.
     * Alternative: '#F5F3FF' (more violet), '#F0EEFF' (more tinted)
     */
    parchment: '#F4F0FF',

    /** STONE — borders and dividers. Cool slate tone for subtle separation. */
    stone: '#E2E8F0',

    /** INK — primary dark text colour. Should match navy.DEFAULT. */
    ink: '#0B0D1A',

    /**
     * MUTED — secondary / placeholder text.
     * Cool slate-gray for descriptive copy, labels, and captions.
     */
    muted: {
      DEFAULT: '#64748B', // slate-500 — secondary text
      l:       '#94A3B8', // slate-400 — tertiary text, placeholders
    },

    white: '#FFFFFF',

    /** GREEN — success states, positive KPI badges, checkmarks. */
    green: '#059669', // emerald-600 — success, positive metrics
  },

  /**
   * GRADIENTS — edit here to change all gradient accents site-wide.
   *
   * Derived directly from the base color tokens so there is no drift risk:
   * updating gold.DEFAULT or cyan automatically updates the gradient.
   *
   * Mirror --accent-start / --accent-mid / --accent-end in app/globals.css.
   * The accent gradient (violet → sky-blue) is used for:
   *   • Primary CTA buttons
   *   • Gradient text headings
   *   • Animated gradient borders on featured cards
   *   • Section glow decorations
   */
  gradients: {
    accent: {
      start: gold.DEFAULT, // derived — stays in sync automatically
      mid:   '#A855F7',    // fuchsia-500 — smooth violet-to-sky bridge
      end:   cyan,         // derived — stays in sync automatically
    },
  },

  /**
   * FONTS — Google Font family names.
   *
   * To change a font:
   *   1. Update the name here (used for Tailwind font-family utilities).
   *   2. Import the new font in app/layout.tsx using next/font/google.
   *   3. Pass the CSS variable to the <html> className in app/layout.tsx.
   *
   * Current choices (rationale):
   *   • head: Plus Jakarta Sans — premium geometric sans-serif; bold, confident,
   *     modern. Perfect for agency headings.
   *     Alternatives: 'Bricolage Grotesque', 'Syne', 'Outfit'
   *   • body: DM Sans — clean, friendly, highly legible variable-weight sans.
   *     Excellent readability for long-form content and UI copy.
   *     Alternatives: 'Inter', 'Nunito Sans', 'Geist'
   *   • mono: JetBrains Mono — professional, slightly humanist monospace.
   *     Used for eyebrow labels, code snippets, and numeric stats.
   *     Alternatives: 'Geist Mono', 'Fira Code', 'Space Mono'
   */
  fonts: {
    head: 'Plus Jakarta Sans',
    body: 'DM Sans',
    mono: 'JetBrains Mono',
  },
} as const

export type Theme = typeof theme
