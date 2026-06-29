## Goal
Remove the YouTube section from the coaching page and replace it with a "Which path fits you?" self-selection block that maps visitor situations to the correct package.

## Current Context
The YouTube section sits between "How It Works" and "Testimonials" on `src/pages/Coaching.tsx`. The four packages are: The Rebuild Method, Online Coaching, Personal Training, and Small Group Training.

## Plan

### 1. Create `src/components/sections/PackageSelectorSection.tsx`
A new section component with:
- A centered headline and short subline.
- A 2x2 grid of scenario cards (4 cards on desktop, 2-col on tablet, 1-col on mobile).
- Each card represents a common situation:
  - Pain / injury holding you back → The Rebuild Method
  - Training alone but lacking direction → Online Coaching
  - Want hands-on, in-person guidance → Personal Training
  - Like group energy but not crowd classes → Small Group Training
- Each card shows:
  - A short situation headline
  - 1-sentence description
  - A "Šis paketas tinka tau" / "This package fits you" button-style link that scrolls to and expands the matching pricing card in `#packages-section`
- Dark navy background (`bg-theme-navy`) to match the section rhythm.
- Hover effect: subtle border glow in tangerine.

### 2. Update i18n
Add a new `packageSelector` object to both:
- `src/i18n/locales/lt/coaching.ts`
- `src/i18n/locales/en/coaching.ts`

Keys:
- `sectionTitle`
- `sectionSubtitle`
- `cards[]` — array of `{ situation, description, packageKey, ctaText }`

### 3. Wire it into `src/pages/Coaching.tsx`
- Remove `<YouTubeSection />` import and usage.
- Insert `<PackageSelectorSection />` in its place between the Process and Testimonials sections.

### 4. Connect to pricing cards
- Pass an optional hash/scroll behavior so clicking a card CTA smoothly scrolls to `#packages-section` and the target pricing card.
- If expanding the target card programmatically is complex, a simple scroll-to-section with a highlighted anchor is sufficient for v1.

## Outcome
Visitors who finish reading "How It Works" but feel uncertain which package to choose get a clear, situation-based nudge toward the right option — improving conversion before they hit testimonials and contact.