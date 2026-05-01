
# Homepage CRO Audit & Restructure Plan

## Current Structure (audit)

```
1. Hero            — 3 CTAs (Book / YouTube / Free Guide). Subtitle is long.
2. Features (4)    — generic benefits, abstract wording.
3. Achievements    — repeats hero subtitle verbatim + 5 bullets.
4. Free Guide      — lead magnet (good).
5. Testimonials    — 6 cards + group photo + "more" link.
6. About           — 3 long bio paragraphs + extra image.
7. Final CTA       — "Book training session".
8. WhatsApp CTA    — green band.
```

## Problems found

- **Duplicate subtitle**: Achievements `subtitle` is identical to Hero `subtitle` → kill one.
- **Two "what you get" sections** (Features + Achievements) saying similar things in different words → merge into one.
- **3 CTAs in hero** dilute focus; primary action competes with YouTube + Guide.
- **Hero copy is vague** ("level up your life… isn't about perfection…") — no concrete benefit, no proof, no offer.
- **No trust strip near the top** (credentials, client count, years).
- **About bio is 3 long paragraphs** — most visitors scan; should be 2 short paras + credential chips.
- **Testimonials**: 6 cards is fine, but group photo above adds scroll without converting.
- **Two end CTAs back-to-back** (Final CTA + WhatsApp) — redundant. WhatsApp can be a small inline link, not a full green band.
- **No pricing/packages link** from homepage despite being the main offer on `/coaching`.
- **No FAQ / objection handling** — common CRO miss for high-ticket coaching.

## New homepage structure (recommended)

```
1. HERO (tightened)
   - Headline: concrete promise (outcome + who it's for)
   - 1-line subtitle (benefit, not philosophy)
   - ONE primary CTA: "Book a Discovery Call"
   - ONE secondary text link: "See packages & pricing"
   - Trust microline under CTAs: "BSc Physiotherapy · NASM · 100+ clients"

2. TRUST STRIP (new, thin)
   - 4 credential chips inline (Physio · NASM · Nutrition MSc · Personal Trainer)
   - Optional: "As seen on YouTube" + subscriber count

3. PROBLEM → SOLUTION (replaces Features + Achievements merged)
   - Short headline: "Why most training plans fail you"
   - 3 cards (not 4) — each: pain point → how I solve it
     a) Pain & injuries ignored → Physio-led programming
     b) Generic plans → Adapts to your week, energy, life
     c) Motivation drops → Mindset coaching keeps you consistent
   - Replaces both current Features (4) + Achievements sections.

4. OUTCOMES (short bullet list, kept from Achievements)
   - "What changes in 90 days" — 4 sharp bullets, no intro paragraph.

5. SOCIAL PROOF (testimonials)
   - Remove group photo above grid (or move to About).
   - 3 testimonials on desktop (not 6) + "View all" link → reduces scroll.
   - Add small star/result tag above each (e.g. "Back pain · 3 months").

6. PACKAGES TEASER (new)
   - 1-row preview of 4 packages (title + price only) → CTA "See all packages".
   - Currently homepage has no path to the offer; this is the biggest CRO miss.

7. ABOUT (condensed)
   - Photo + 2 short paragraphs (not 3) + credential chips row.
   - Remove the secondary "artistic" image — adds scroll, no CRO value.

8. LEAD MAGNET (Free Back Pain Guide)
   - Keep, but move down (it's a soft conversion for non-buyers).
   - Tighten intro to 1 sentence.

9. FAQ (new, 4–5 items)
   - "How much does it cost?" "Do I need to be fit already?" "Online vs in-person?" "What if I have an injury?" "How long until I see results?"

10. FINAL CTA (single)
    - One bold band: headline + button.
    - Replace standalone WhatsApp green section with a small "Quick question? WhatsApp me →" link beneath the button.
```

## Copy rewrites (LT + EN)

**Hero**
- Title (EN): "Train smarter, move pain-free, stay consistent."
- Title (LT): "Treniruokis protingiau, judėk be skausmo, išlik nuoseklus."
- Subtitle (EN): "Physio-led 1:1 coaching for adults who want strength without injury — online or in Vilnius."
- Subtitle (LT): "Kineziterapeuto vedamos asmeninės treniruotės suaugusiems — be skausmo, su rezultatu. Online arba Vilniuje."
- Primary CTA: "Book a Discovery Call" / "Užsisakyk pokalbį"
- Secondary link: "See packages →" / "Žiūrėti paketus →"

**Problem→Solution cards** — 1 line each, max 15 words.

**Outcomes bullets** — start each with a verb, no fluff:
- "Move without back/knee pain"
- "Get stronger without burning out"
- "Build a routine that survives busy weeks"
- "Train with confidence, not guesswork"

**About** — collapse 3 paragraphs into 2 (~60 words each).

**FAQ** — 1-sentence answers.

## Blocks to REMOVE / MERGE

| Block | Action |
|---|---|
| Features (4 cards) | Merge into Problem→Solution (3 cards) |
| Achievements section header + repeated subtitle | Remove subtitle, keep tightened bullet list as "Outcomes" |
| Group training image above testimonials | Remove (or move into About) |
| Secondary "artistic" image in About | Remove |
| WhatsApp full green section | Demote to small inline link under final CTA |
| Hero "Get Free Guide" button | Remove from hero (still accessible via scroll/anchor) |

## New blocks to ADD

- Trust strip (credentials chips) under hero
- Packages teaser row (links to /coaching)
- FAQ accordion (4–5 Qs)

## Technical changes

- **i18n**: rewrite `homepage.hero`, replace `homepage.features` + `homepage.achievements` with a new `homepage.problemSolution` (3 items) + `homepage.outcomes` (4 bullets). Add `homepage.trustStrip`, `homepage.packagesTeaser`, `homepage.faq`. Update both `lt/homepage.ts` and `en/homepage.ts`.
- **Components**:
  - `HeroSection.tsx`: remove YouTube + Free Guide buttons, add trust microline.
  - New `TrustStripSection.tsx` (thin band with 4 chips).
  - Replace `FeaturesSection.tsx` + `AchievementsSection.tsx` with new `ProblemSolutionSection.tsx` + `OutcomesSection.tsx`.
  - New `PackagesTeaserSection.tsx` (uses existing pricing data, title+price only, link to `/coaching#packages`).
  - `AboutSection.tsx`: remove second image, condense to 2 paragraphs, add credential chips row.
  - `TestimonialsSection.tsx`: remove group image, show 3 cards on desktop with "View all" link.
  - New `FAQSection.tsx` using existing `accordion` UI primitive.
  - `FinalCTASection.tsx`: append small WhatsApp text link.
  - Remove `WhatsAppCTASection` from `Index.tsx`.
- **Index.tsx** new order: Hero → TrustStrip → ProblemSolution → Outcomes → PackagesTeaser → Testimonials → About → FreeGuide → FAQ → FinalCTA.

## Out of scope (not changed)

- `/coaching` page content
- Pricing card structure (already restructured previously)
- Header / Footer / global styles
- Lead magnet form mechanics (MailerLite integration kept as-is)

Approve and I'll implement in default mode.
