## Coaching page — visual audit findings & fixes

### Issues found from screenshots

1. **Untranslated raw keys visible at the bottom of the page** (LT and EN):
   - Headline shows literal `coaching.contact.stillHaveQuestions`
   - Locations card shows literal `coaching.contact.locations.label`
   
   **Root cause:** `src/i18n/locales/lt.ts` and `src/i18n/locales/en.ts` contain a hand-written `coaching: { ...contact: {...} }` override block that shadows the modular `./lt/coaching.ts` and `./en/coaching.ts` files. New keys added to the modular files (`stillHaveQuestions`, `locations.label`, `formHeadline`, `faq.*`, `hero.primaryCta`, `hero.seePackages`, `hero.trustLine`) are silently overridden and never reach the UI.

2. **No YouTube content on the coaching page.** The previous YouTube CTA in the hero was removed during the CRO restructure. User wants it back as a separate dedicated element (not back in the hero).

### Fix plan

#### A. Remove i18n override blocks (unblocks all new keys)

In `src/i18n/locales/lt.ts` and `src/i18n/locales/en.ts`, delete the trailing `coaching: { ...coaching.coaching, ...coaching.buttons, contact: {...} }` block entirely. The modular `./lt/coaching` / `./en/coaching` files (already spread at the top) provide the full, current `coaching.*` tree including all new keys.

This is a pure deletion — no replacement structure needed. After this, all the keys we added in the previous step (FAQ, formHeadline, primaryCta, etc.) will render correctly.

#### B. Add a dedicated YouTube section

Create `src/components/sections/YouTubeSection.tsx`:
- Section heading + 1-line subtitle
- Embedded YouTube playlist preview thumbnail OR 2–3 video thumbnails linking to the playlist
- Primary button "YouTube Workouts" → `https://youtube.com/playlist?list=PL9FEczFkBjTeQt3GXlvoKfNygvTiZ-qkb`
- Bilingual via new i18n keys `coaching.youtube.sectionTitle`, `subtitle`, `buttonText`

Place it in `src/pages/Coaching.tsx` between **How It Works** and **Testimonials** — a natural spot showing free value before the social proof.

Add the matching i18n keys to `src/i18n/locales/lt/coaching.ts` and `src/i18n/locales/en/coaching.ts`:

```ts
youtube: {
  sectionTitle: 'Free workouts on YouTube' / 'Nemokamos treniruotės YouTube',
  subtitle: 'Try a session before booking. New videos every week.' /
            'Išbandyk treniruotę prieš registruodamasis. Naujos kas savaitę.',
  buttonText: 'Open YouTube playlist' / 'Atidaryti YouTube grojaraštį'
}
```

### Files to change
- **Edit** `src/i18n/locales/lt.ts` — remove the duplicate `coaching` override block (lines ~26–43).
- **Edit** `src/i18n/locales/en.ts` — same removal.
- **Edit** `src/i18n/locales/lt/coaching.ts` and `src/i18n/locales/en/coaching.ts` — add `youtube` block.
- **Create** `src/components/sections/YouTubeSection.tsx`.
- **Edit** `src/pages/Coaching.tsx` — import and render `<YouTubeSection />` between Process and Testimonials.

### Out of scope
- No hero changes (current hero is clean).
- No pricing or FAQ structural changes.
- No new images outside the YouTube thumbnails.
