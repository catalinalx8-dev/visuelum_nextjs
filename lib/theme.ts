/**
 * Central design tokens — single source of truth for colors and typography.
 * Edit here to update the visual identity of the entire website.
 * These values are consumed by tailwind.config.ts and app/globals.css.
 */
export const theme = {
  colors: {
    navy: {
      DEFAULT: '#0f0f23',
      deep: '#07071a',
      mid: '#1a1a3e',
    },
    gold: {
      DEFAULT: '#7c3aed',
      l: '#a78bfa',
      pale: '#ede9fe',
    },
    cyan: '#06b6d4',
    cream: '#fafafa',
    parchment: '#f5f3ff',
    stone: '#e5e7eb',
    ink: '#0f0f23',
    muted: {
      DEFAULT: '#6b7280',
      l: '#9ca3af',
    },
    white: '#ffffff',
    green: '#10b981',
  },

  /** Google Font family names loaded in app/layout.tsx */
  fonts: {
    head: 'Plus Jakarta Sans',
    body: 'DM Sans',
    mono: 'JetBrains Mono',
  },
} as const

export type Theme = typeof theme
