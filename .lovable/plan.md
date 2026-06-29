## Restyle the FAQ section

Goal: make the homepage FAQ block (`src/components/sections/FAQSection.tsx`) feel more premium and on-brand with the rest of the dark/tangerine site, without changing content or behavior.

### Visual changes
- Wrap each FAQ item in its own rounded card (`rounded-xl`, subtle `border-white/10`, soft `bg-white/[0.03]`) with spacing between items instead of plain underlined rows.
- On hover/open: lift border to `border-theme-tangerine/40`, slight background brighten, smooth transition.
- Replace the default chevron with a tangerine `+ / −` style icon that rotates on open for a more editorial feel.
- Question text: larger, tighter tracking, `font-semibold` white; on open, color shifts to tangerine.
- Answer text: `text-white/70`, comfortable `leading-relaxed`, left padding to align with question.
- Section heading: add a small uppercase tangerine eyebrow ("FAQ") above the existing title for hierarchy.
- Add a soft radial tangerine glow behind the section (decorative, low opacity) to match the rest of the homepage's depth.

### Technical
- Edit only `src/components/sections/FAQSection.tsx`.
- Keep i18n keys (`homepage.faq.sectionTitle`, `homepage.faq.items`) unchanged.
- Override the default shadcn AccordionTrigger chevron via `[&>svg]:hidden` and render a custom icon.
- No new dependencies. No content changes in LT/EN files.
