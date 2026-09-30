export type DomainId = 'focus' | 'earn' | 'move' | 'spend';

type Accent = { solid: string; soft: string };

/** Mirrors LifeMintPalette in the app so the site and the UI agree. */
export const DOMAIN_ACCENT: Record<DomainId, Accent> = {
  focus: { solid: 'var(--domain-focus)', soft: 'var(--domain-focus-soft)' },
  earn: { solid: 'var(--domain-earn)', soft: 'var(--domain-earn-soft)' },
  move: { solid: 'var(--domain-move)', soft: 'var(--domain-move-soft)' },
  spend: { solid: 'var(--domain-spend)', soft: 'var(--domain-spend-soft)' },
};

/** Solid hex, for the few places that need a real color (e.g. SVG stroke). */
export const DOMAIN_HEX: Record<DomainId, string> = {
  focus: '#2f6fe0',
  earn: '#1f803c',
  move: '#f24d4d',
  spend: '#8c57ad',
};
