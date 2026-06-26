## Content Updates — Homepage Copy & Trust Points

### Scope
Update Lithuanian homepage copy for the YouTube heading, trust strip, problem/solution block, and outcomes block. Keep English equivalents in sync. Remove the `Check` lucide icon from the outcomes list since the new copy includes `✓` characters.

### Files to Change

1. **`src/i18n/locales/lt/coaching.ts`**
   - `coaching.youtube.sectionTitle`: `Judėkime drauge`

2. **`src/i18n/locales/en/coaching.ts`**
   - `coaching.youtube.sectionTitle`: `Let's move together`

3. **`src/i18n/locales/lt/homepage.ts`**
   - `homepage.trustStrip.items`: Replace with the 4 new trust points
   - `homepage.problemSolution.sectionTitle`: `Kodėl įprastos treniruotės dažnai neveikia`
   - `homepage.problemSolution.items`: Replace all 3 problem/solution pairs
   - `homepage.outcomes.sectionTitle`: `Ko gali tikėtis dirbant kartu:`
   - `homepage.outcomes.items`: Replace all 4 outcome bullets (text includes `✓`)

4. **`src/i18n/locales/en/homepage.ts`**
   - `homepage.trustStrip.items`: English equivalents of the new trust points
   - `homepage.problemSolution.sectionTitle`: `Why most training plans often fail`
   - `homepage.problemSolution.items`: English equivalents of the 3 new pairs
   - `homepage.outcomes.sectionTitle`: `What to expect working together:`
   - `homepage.outcomes.items`: English equivalents of the 4 new bullets

5. **`src/components/sections/OutcomesSection.tsx`**
   - Remove the `<Check>` icon from each list item (the text itself now contains `✓`)
   - Keep the flex layout and styling intact

### No structural or database changes.
All changes are locale string swaps and one minor icon removal.