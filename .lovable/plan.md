
# Shrink hero so trust strip sits above the fold

## Change

In `src/index.css`, reduce `.hero-section` height:

- `min-height: 100vh` → `min-height: 78vh` (desktop)
- Add a mobile override inside the existing `@media (max-width: 768px)` block: `min-height: 88vh` (keep mobile taller so the headline + buttons still breathe).

Also reduce the top padding inside `HeroSection.tsx` slightly (`pt-24 md:pt-16` → `pt-20 md:pt-12`) so the hero content sits a touch higher within the shorter block.

That's it — the trust strip below the hero will then be visible above the fold on standard 1080p+ viewports.

Approve and I'll apply.
