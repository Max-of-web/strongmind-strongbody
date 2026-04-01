

## Plan: Update Pricing Cards Content & Structure

The user provided completely rewritten content for 4 packages (Small Group, Personal, Online, Rehab/Rebuild Method). The structure now includes new sections: tagline, "Kam skirta", "Ką gausi", "Kodėl tai veikia", plus updated prices. The 5th card (Inner Shift) is not mentioned, so it stays as-is.

### Key Changes

**New content structure per card:**
- Title + tagline (new field)
- "Kam skirta" — target audience description
- "Ką gausi" — features list
- "Kodėl tai veikia" — new "why it works" section
- Price + period
- Commitment note (for rehabTraining only)

**Price/content changes:**
| Package | Old Price | New Price |
|---------|-----------|-----------|
| smallGroupTraining | 25 €/už kartą | 160 € / 8 treniruotės (20 €/treniruotė) |
| oneOnOneCoaching | 50 €/už treniruotę | 50 € / treniruotė (unchanged) |
| onlineTraining | 100 €/per mėnesį | 250 € / mėn. |
| rehabTraining | 60 €/už sesiją | 350 € / mėn. + 3 month commitment |

### Files to Edit

1. **`src/i18n/locales/lt/coaching.ts`** — Update all 4 package translations with new content:
   - Add `tagline` and `whyItWorks` fields to each package
   - Update `title`, `price`, `period`, `subtitle`, `features`, `bottomText`
   - Remove `note` from oneOnOneCoaching (not in new content)
   - Add commitment note to rehabTraining
   - Rewrite all features arrays

2. **`src/i18n/locales/en/coaching.ts`** — Add matching English translations for:
   - New `tagline` and `whyItWorks` fields
   - Updated prices, features, and descriptions

3. **`src/components/pricing/PricingCard.tsx`** — Add rendering for new fields:
   - Display `tagline` below title (if exists)
   - Add "Kodėl tai veikia" / "Why it works" section using new `whyItWorks` translation key
   - Remove hardcoded discount text blocks (lines 119-139)
   - Add discount/secondary price display via translation key `discountText` instead of hardcoding

4. **`src/components/PricingCards.tsx`** — Update `featureCount` values:
   - oneOnOneCoaching: 3 → 3 (stays)
   - onlineTraining: 4 → 4 (stays)
   - rehabTraining: 4 → 4 (stays)  
   - smallGroupTraining: 4 → 3

### Technical Details

- New translation keys per package: `tagline`, `whyItWorks`, `discountText` (optional)
- PricingCard will check for `tagline`/`whyItWorks` existence the same way it checks `note`/`bottomText`
- The hardcoded green discount badges will be removed and replaced with an i18n-driven `discountText` field (e.g., `(20 € / treniruotė)`)
- Card order in PricingCards.tsx stays the same
- Inner Shift card remains untouched

