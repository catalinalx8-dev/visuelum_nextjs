/**
 * Central design tokens — single source of truth for colors and typography.
 * Edit here to update the visual identity of the entire website.
 * These values are consumed by tailwind.config.ts and app/globals.css.
 */
export const theme = {
  colors: {
    navy: {
      DEFAULT: '#18181b',
      deep: '#09090b',
      mid: '#27272a',
    },
    gold: {
      DEFAULT: '#6366f1',
      l: '#818cf8',
      pale: '#e0e7ff',
    },
    cream: '#fafafa',
    parchment: '#f4f4f5',
    stone: '#e4e4e7',
    ink: '#09090b',
    muted: {
      DEFAULT: '#71717a',
      l: '#a1a1aa',
    },
    white: '#ffffff',
    green: '#16a34a',
  },

  /** Google Font family names loaded in app/layout.tsx */
  fonts: {
    head: 'Plus Jakarta Sans',
    body: 'DM Sans',
    mono: 'JetBrains Mono',
  },
} as const

export type Theme = typeof theme
