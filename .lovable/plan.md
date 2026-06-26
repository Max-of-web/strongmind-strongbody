## Plan: Homepage Content Refresh

### 1. YouTube section heading
Update the Lithuanian YouTube section title in `src/i18n/locales/lt/coaching.ts`:
- From: `Nemokamos treniruotės YouTube`
- To: `Pradėk judėti jau šiandien.`

Keep the subtitle and button text unchanged.

### 2. Trust strip under hero
Update `src/i18n/locales/lt/homepage.ts` `trustStrip.items` to the new credentials line provided by the user. The TrustStripSection renders items with `ShieldCheck` icons; since the new text already contains ✓ symbols and is a single long credentials string, we will consolidate it into a shorter set of items that fit the existing flex-wrap layout, or adjust the layout if wrapping is excessive.

### 3. Problem / Solution section
Update `src/i18n/locales/lt/homepage.ts` `truncate

Stop — I need to read the EN coaching file first so I can plan the bilingual sync properly. I should not finalize this plan until I have complete information about both language files.