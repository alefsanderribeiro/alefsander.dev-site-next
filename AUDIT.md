# Audit Report: Alefsander.DEV

## Audit Health Score: **12/20** — Acceptable (significant work needed)

| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 2/4 | Heading hierarchy broken; zinc-400 text fails contrast; emojis lack ARIA |
| 2 | Performance | 4/4 | Clean, minimal, fast — no issues |
| 3 | Theming | 1/4 | 40+ hard-coded Tailwind colors; light mode broken on many elements |
| 4 | Responsive | 3/4 | Good breakpoints; touch targets below 44px minimum |
| 5 | Anti-Patterns | 2/4 | Identical card grid + emoji icons + scattered hard-coded colors |

---

## Anti-Patterns Verdict

**FAIL** — This site shows 3 AI-slop tells. The most visible one is the identical card grid in Services (6 cards with emoji + title + description — the textbook AI landing page pattern). The emerald accent is applied consistently but through raw Tailwind classes rather than design tokens, creating a brittle system that breaks in light mode.

---

## Executive Summary

- **Total issues found**: 12 (P0: 0, P1: 4, P2: 6, P3: 2)
- **Critical issue**: Theming — 40+ hard-coded Tailwind colors across every component. The design tokens defined in `globals.css` are almost entirely unused by components. This means light mode is effectively broken on all accent/border elements, and the system cannot be easily themed or rebranded.
- **Second critical**: Accessibility — `text-zinc-400` on dark backgrounds fails WCAG AA. Card titles are `<div>` elements not `<h3>`, breaking heading hierarchy.
- **Main anti-pattern**: The identical card grid in Services — 6 cards with emoji + heading + text, all the same size, none visually distinct.
- **Recommended**: Run `impeccable polish` to migrate hard-coded colors to CSS variables, fix accessibility issues, and break up the service card grid.

---

## Detailed Findings

### P1: Hard-coded colors throughout (Theming)

**Location**: All 7 component files — Header, Hero, About, Services, TechStack, Links, Contact, Footer
**Impact**: Light mode looks broken. `bg-zinc-950`, `border-zinc-900`, `text-zinc-400` are hard-coded zinc shades that don't change with the theme. The emerald accent (`text-emerald-400`, `bg-emerald-500`) is duplicated 15+ times as Tailwind classes instead of a CSS custom property. Changing the accent color requires editing every file.
**WCAG/Standard**: N/A (theming quality)
**Recommendation**: Replace all hard-coded `text-zinc-*`, `bg-zinc-*`, `border-zinc-*`, `text-emerald-*`, `bg-emerald-*` with CSS variable references (`var(--muted-foreground)`, `var(--card)`, etc.)
**Suggested command**: `layout todo o site`

### P1: Identical card grid in Services (Anti-Pattern)

**Location**: `components/Services.tsx` — 6 cards in a 3-column grid
**Impact**: The most recognizable AI landing page pattern: same-sized cards with emoji icon + title + description, repeated endlessly. Reads as template, not designed.
**Recommendation**: Vary the card formats. Use alternating layouts, different sizes, or a staggered grid. Remove emoji icons — replace with meaningful content structure.
**Suggested command**: `shape servicos`

### P1: Text contrast failure — zinc-400 on dark bg (Accessibility)

**Location**: `components/Links.tsx:8` (`text-zinc-400`), `components/About.tsx:23` (`text-zinc-400`), `components/TechStack.tsx:20` (`text-zinc-300`)
**Impact**: `text-zinc-400` on dark background (`oklch(0.145 0 0)`) = ~2.9:1 contrast ratio. WCAG AA requires 4.5:1 for normal text. Visually hard to read.
**WCAG/Standard**: WCAG 2.1 SC 1.4.3 (Contrast Minimum) — FAIL
**Recommendation**: Replace `text-zinc-400` with `text-muted-foreground` (lightness `0.556` = ~5.5:1 contrast) and `text-zinc-300` with `text-muted-foreground` or `text-foreground/80`.
**Suggested command**: `polish todo o site`

### P1: CardTitle uses `<div>` instead of heading element (Accessibility)

**Location**: `components/ui/card.tsx` — CardTitle renders `<div data-slot="card-title">`
**Impact**: Screen readers cannot navigate the content hierarchy. Services page has 6 cards where the titles are divs, not `<h3>` elements. Users relying on heading navigation miss the service structure entirely.
**WCAG/Standard**: WCAG 2.4.6 (Headings and Labels) — FAIL
**Recommendation**: CardTitle should render `<h3>` or accept a `as` prop. Services should use `<CardTitle as="h3">` or equivalent.
**Suggested command**: `polish todo o site`

### P2: Emoji icons without ARIA (Accessibility)

**Location**: `components/Services.tsx` (6 emoji icons), `components/Contact.tsx` (✉️ emoji)
**Impact**: Emojis used as icons are announced by screen readers as text characters ("computer emoji", "gear emoji"). No `role="img"` or `aria-label`.
**WCAG/Standard**: WCAG 2.4.4 (Link Purpose In Context) — partial impact
**Recommendation**: Either hide emojis from screen readers with `aria-hidden="true"` (decorative use) or add `role="img" aria-label="[description]"` (informative use). Better: replace with inline SVG icons.
**Suggested command**: `polish todo o site`

### P2: External links missing aria-label (Accessibility)

**Location**: `components/Links.tsx:15-18` (GitHub link), `components/Links.tsx:39-42` (LinkedIn link)
**Impact**: "opens in new tab" is not announced to screen readers. Users of assistive technology may navigate away without warning.
**WCAG/Standard**: WCAG 2.4.4 (Link Purpose In Context)
**Recommendation**: Add `aria-label="GitHub — opens in new tab"` and `aria-label="LinkedIn — opens in new tab"`.
**Suggested command**: `polish todo o site`

### P2: Touch targets below 44px (Responsive)

**Location**: `components/ui/button.tsx` — default size is `h-8` (32px), lg is `h-9` (36px)
**Impact**: On mobile devices, 32px buttons are harder to tap accurately. WCAG recommends minimum 44x44px touch targets.
**WCAG/Standard**: WCAG 2.5.8 (Target Size Minimum) — advisory
**Recommendation**: Increase minimum button height to 44px on mobile via responsive classes, or use `min-h-[44px]` with padding.
**Suggested command**: `polish todo o site`

### P2: Header backdrop blur without theme-aware bg (Theming)

**Location**: `components/Header.tsx:14` — `bg-zinc-800/10 backdrop-blur-md`
**Impact**: In light mode, `bg-zinc-800/10` renders as a very light gray which may not provide enough contrast over white content. The `backdrop-blur` effect may also not apply properly.
**Recommendation**: Use `bg-background/80` (CSS variable) instead of hard-coded `bg-zinc-800/10`.
**Suggested command**: `polish todo o site`

### P2: Terminal section uses hard-coded bg-zinc-950 (Theming)

**Location**: `components/About.tsx:26` — `bg-zinc-950`
**Impact**: In light mode, `bg-zinc-950` is near-black — completely breaks the terminal section.
**Recommendation**: Use CSS variables or a combination of `bg-card dark:bg-zinc-950` approach.
**Suggested command**: `polish todo o site`

### P3: Card hover borders use hard-coded emerald (Theming)

**Location**: `components/Links.tsx:13,37` — `hover:border-emerald-500/50`, `components/Services.tsx:19` — `hover:border-emerald-500/50`
**Impact**: In light mode, the emerald hover border won't adjust. Minor visual inconsistency.
**Recommendation**: Define `--color-accent` CSS var and use it via Tailwind's `var(--accent)` approach.
**Suggested command**: `polish todo o site`

### P3: Hero CTA buttons with inline `<a>` inside `<Button>` (Anti-Pattern)

**Location**: `components/Hero.tsx:14,17,20` — `<Button><a href="...">...</a></Button>`
**Impact**: Wrapping a link inside a button creates nested interactive elements — semantic HTML violation and potential focus/activation issues.
**Recommendation**: Use the Button's built-in `render` prop or `asChild` pattern from Base UI to render the Button as an `<a>` element directly.
**Suggested command**: `polish todo o site`

---

## Patterns & Systemic Issues

1. **Hard-coded colors are systemic across every component.** This isn't a one-off mistake — every single TSX file in `components/` uses raw Tailwind color classes instead of CSS variable tokens. The fix needs to be applied project-wide.

2. **Services card grid is the primary visual anti-pattern.** The 6 identical cards are the single biggest "this is a template" signal. Breaking this up and adding visual variety would transform the site's perceived quality.

3. **The emerald accent is applied consistently but fragilely.** The consistency is commendable (same emerald-400/500 everywhere), but it's entirely hard-coded. One CSS variable would replace 15+ class references and make dark/light mode trivial.

---

## Positive Findings

- **Performance is excellent.** No heavy dependencies, no layout thrashing, no unnecessary images. Fast load times.
- **Semantic HTML structure is good.** `<main>`, `<header>`, `<section>` with `id`s, `<footer>` — proper landmarks throughout.
- **Dark/light mode infrastructure exists.** Next-themes + CSS variables in globals.css provide the foundation. The code just doesn't use them yet.
- **Responsive breakpoints are well-chosen.** `md:`, `lg:` breakpoints on the grid, nav, and text sizing are sensible.
- **Navigation is clear and scannable.** Fixed header, clear section hierarchy, obvious CTAs.
- **The terminal component in About is genuinely distinctive.** It's the most memorable element on the page and reinforces the brand's technical identity.

---

## Recommended Actions

1. **[P1] `layout todo o site`**: Migrate all hard-coded Tailwind colors to CSS variable references project-wide. This is the highest-impact fix.
2. **[P1] `shape servicos`**: Redesign the Services section to break up the identical card grid into varied, content-appropriate layouts.
3. **[P1] `polish todo o site`**: Fix accessibility issues — heading hierarchy, zinc-400 contrast, emoji ARIA, external link labels, touch targets.
4. **[P2] `polish todo o site`**: Fix remaining theming issues (header bg, terminal bg-zinc-950).
5. **[P3] `polish todo o site`**: Clean up button/link nesting in Hero.

You can ask me to run these one at a time, all at once, or in any order you prefer.

Re-run `/impeccable audit` after fixes to see your score improve.
