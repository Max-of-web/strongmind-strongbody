## Update CTA + add YouTube block to homepage

### 1. Change LT primary CTA
In `src/i18n/locales/lt/coaching.ts` line 6, change:
- From: `primaryCta: 'Užsisakyk pažintinį pokalbį'`
- To: `primaryCta: 'Pradėk dabar'`

This key drives the hero CTA on the coaching page and the post-pricing CTA. EN copy stays as "Book a Discovery Call".

### 2. Add YouTube section to homepage under the hero
In `src/pages/Index.tsx`:
- Import `YouTubeSection`.
- Insert `<YouTubeSection />` between `<HeroSection />` and `<TrustStripSection />`.

### 3. Make YouTube block horizontal on mobile
Refactor `src/components/sections/YouTubeSection.tsx` to render two layouts:
- **Mobile (`md:hidden`)**: a horizontally scrollable, snap-aligned strip — each card ~78% viewport width, hidden scrollbar, edge-to-edge with `-mx-4 px-4` so users can swipe naturally.
- **Desktop (`hidden md:grid`)**: existing 3-column grid, unchanged.

The section heading, subtitle, and "Open YouTube playlist" CTA below remain shared.

### Files to edit
- `src/i18n/locales/lt/coaching.ts` — CTA copy.
- `src/components/sections/YouTubeSection.tsx` — split into mobile horizontal scroll + desktop grid.
- `src/pages/Index.tsx` — import and render `YouTubeSection` after the hero.
