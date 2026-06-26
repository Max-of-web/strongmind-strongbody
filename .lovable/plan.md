## Scope
Small follow-up cleanup to last turn's content updates. Homepage only (coaching page untouched per your choice).

## Changes

### 1. Remove `✓` characters from copy
- `src/i18n/locales/lt/homepage.ts` and `src/i18n/locales/en/homepage.ts`
  - `outcomes.items[]`: strip leading `✓ ` from each bullet.
  - `trustStrip.items[]`: strip any `✓` if present.
- `src/i18n/locales/lt/coaching.ts` / `en/coaching.ts`: scan and remove `✓` from any user-visible string (only character cleanup, no copy rewrite).

### 2. LT YouTube title
- `src/i18n/locales/lt/coaching.ts` → `coaching.youtube.sectionTitle`: `'Judėkime drauge'` → `'Judėkime kartu'`.

### 3. Trust strip mobile readability
- `src/components/sections/TrustStripSection.tsx`:
  - Mobile (default): switch from wrapping pill row to a 2-column grid with the icon + text left-aligned, so long lines like "Precision Nutrition mitybos ir elgesio keitimo terapijos magistras" don't dangle awkwardly. Single column under ~360px.
  - `md+`: keep current horizontal wrap layout.
  - Slightly tighter vertical padding on mobile (`py-4 md:py-6`), `text-[11px] md:text-sm` to fit two columns cleanly.
  - Keep `ShieldCheck` icon as the bullet marker (it's an icon, not the `✓` character you asked to remove).

## Out of scope
- No copy rewriting on the Coaching page.
- No layout changes outside the trust strip.
- No new sections or removals.

## Verification
- Take a 411px-wide screenshot of `/` to confirm trust strip reads cleanly on mobile and no stray `✓` remain in Outcomes.
- Confirm LT/EN both render the YouTube heading correctly.
