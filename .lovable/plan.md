## CRO Audit — /coaching page

### Current issues
1. **Hero is bloated and unfocused.** Long two-line title + long subtitle + two CTAs of similar weight (Packages vs YouTube). YouTube link competes with the conversion CTA. No trust signal in hero. CTA label is hardcoded Lithuanian ("Treniruočių paketai") — breaks EN.
2. **Redundant content with homepage.** "What I Can Offer" (services) and "Who It's For" repeat homepage's ProblemSolution / Outcomes blocks almost verbatim — no new info, adds scroll friction before pricing.
3. **Pricing buried.** User scrolls through 2 long sections before seeing packages — packages should appear earlier (the main reason a visitor lands here).
4. **CTA after pricing wrongly routes to homepage** (`navigate('/')`) instead of booking/contact form. Lost conversion.
5. **Process section is long (4 steps with full paragraphs).** Can be condensed; currently delays scroll to social proof.
6. **Testimonials block duplicates homepage** — full grid of all testimonials is fine here, but no trust strip / credentials anywhere on this page.
7. **Contact section** has a hardcoded LT-only headline (not translated) and an empty MapPin block (icon with no label). Mixes form + WhatsApp + Instagram + locations into one heavy block.
8. **No FAQ / objection handling** on the page where decisions are made (cost, time, injuries, commitment).
9. **No sticky / repeat CTA** between pricing and form — single CTA at bottom only.

### Proposed new structure

```text
1. Hero (tightened)
   - Short headline + 1-line subtitle
   - Single primary CTA: "Book a Discovery Call" (Calendly link, same as homepage)
   - Secondary text link: "See packages ↓"
   - Micro trust line: "BSc Physiotherapy · NASM · 200+ clients"
2. TrustStripSection (reuse from homepage)
3. Packages & Pricing (moved up — primary intent)
   - Keep current PricingCards
   - CTA below: "Book a Discovery Call" → Calendly (fix broken navigate('/'))
4. Who It's For (condensed: 1 short intro + 5 bullet list, no duplicate intro paragraph, remove image OR keep small)
5. How It Works (condensed to 3 steps, shorter copy; merge "fill form" + "I review" into one)
6. Testimonials (full grid — primary social proof on this page)
7. FAQSection (NEW — coaching-specific objections: commitment, online vs in-person, beginners, injuries, refunds)
8. Contact & Application (cleaned up)
   - Translated headline (i18n key)
   - Form first
   - Fix empty MapPin block (add label)
   - Compact WhatsApp/IG/Location row
```

### Sections to remove
- **"What I Can Offer" (services grid, 4 cards)** — fully redundant with homepage ProblemSolution + Outcomes. Delete from page (keep i18n keys for now in case reused elsewhere).
- **Image-only block above pricing** (1-on-1 photo) — pure decoration, pushes pricing down. Remove.
- **Image-only block above testimonials** (group photo) — same reason. Remove.
- **Hero YouTube CTA** — move to Footer or remove from hero (it dilutes primary CTA). Keep YouTube link in Footer only.

### Copy tightening (LT + EN parallel updates)
- Hero subtitle: cut from 2 sentences to 1.
- "Who It's For": remove the conditional duplicate LT paragraph (lines 161–163), keep single description.
- Process steps: reduce each description to 1 sentence.
- Contact headline: move hardcoded LT string to `coaching.contact.formHeadline` key, add EN equivalent.

### Files to change

**Edit**
- `src/pages/Coaching.tsx` — restructure section order, remove services + decorative images, fix bottom CTA target (Calendly), translate contact headline, fix empty MapPin label, add `<TrustStripSection />` and `<FAQSection />`, simplify hero (single primary CTA + trust microline).
- `src/i18n/locales/lt/coaching.ts` and `src/i18n/locales/en/coaching.ts`:
  - Tighten hero subtitle.
  - Remove duplicate intro from `target`.
  - Shorten `process.steps` descriptions; reduce to 3 steps.
  - Add `contact.formHeadline`, `contact.locations.label`.
  - Add `coaching.faq.sectionTitle` + `coaching.faq.items` (5 Qs: commitment, beginner, injury, online vs in-person, cancellation).
  - Add `coaching.hero.primaryCta` ("Book a Discovery Call" / "Užsisakyk pažintinį pokalbį"), `coaching.hero.seePackages`, `coaching.hero.trustLine`.

**Reuse (no edit needed)**
- `src/components/sections/TrustStripSection.tsx`
- `src/components/sections/FAQSection.tsx` — currently reads `homepage.faq.items`. Add a small prop `i18nNamespace`/`itemsKey` so it can also read `coaching.faq.items`. (Minor edit: accept `titleKey` and `itemsKey` props with defaults to current homepage keys.)

### Out of scope
- No redesign of PricingCards (already updated in earlier task).
- No new images, no backend changes.
- ContactForm component itself unchanged.

### Expected CRO impact
- Pricing visible ~1 scroll sooner.
- Single dominant CTA in hero with trust signal → higher CTR to booking.
- Fixed broken post-pricing CTA → recovers a major drop-off.
- FAQ handles objections in-place, reducing bounce before form.
- Removal of duplicate content shortens page ~30%, improves perceived speed and decision time.
