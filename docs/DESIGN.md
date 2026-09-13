# DESIGN.md
### Visual design system — "Dark-to-Light Security Console" style
Reference: dark navy hero with isometric 3D graphics fading into a light, card-based product section.

---

## 1. Concept

The page opens in a **dark, technical, almost mission-control mood** (deep navy/black, thin outlines, floating data labels, one glowing 3D object) and then **dissolves into daylight** as you scroll — the background gradient itself does the storytelling, from "monitoring in the dark" to "clarity and resolved incidents." Everything below the fold sits on a calm off-white surface with restrained, low-contrast cards.

Use this arc for a company profile site as: **Hero = what we watch over / what we do → Body = proof, process, people, in a calm daylight register.**

---

## 2. Color Palette

| Token | Hex | Use |
|---|---|---|
| `--bg-void` | `#05070F` | Top of hero, header bar background |
| `--bg-deep-blue` | `#0B1E5B` | Mid-hero gradient stop |
| `--bg-electric-blue` | `#3D5AFE` | Lower-hero gradient stop, primary accent |
| `--bg-fade-light` | `#EAF0FB` | Transition zone into the light section |
| `--bg-surface` | `#FFFFFF` | Body sections, cards |
| `--bg-surface-muted` | `#F5F6F8` | Alternate section backgrounds |
| `--ink-primary` | `#0B0D12` | Headlines on light backgrounds |
| `--ink-secondary` | `#5B6270` | Body copy, captions |
| `--ink-on-dark` | `#F4F6FB` | Headlines on dark hero |
| `--ink-on-dark-muted` | `#8B93A7` | Subtext / labels on dark hero |
| `--line-hairline` | `#E4E7ED` | Card borders, dividers on light bg |
| `--line-hairline-dark` | `rgba(255,255,255,0.14)` | Outline strokes in hero illustration |
| `--accent-blue` | `#3D6BFF` | Buttons, links, active states |
| `--status-positive` | `#1F9D55` | "Contained" tags |
| `--status-alert` | `#D5432B` | "Escalated" tags |

Gradient recipe for the hero:
```css
background: radial-gradient(120% 90% at 70% 0%, #17246B 0%, #0A1030 45%, #05070F 100%);
```
Body sections then sit on flat `--bg-surface` or `--bg-surface-muted` — **no gradients below the hero.**

---

## 3. Typography

- **One family, two weights carry the whole system** — a clean grotesque/humanist sans (e.g. Inter, General Sans, or Söhne). No serif, no second display face.
- Scale (desktop):
  - Hero H1: 64–72px / 1.05 line-height / weight 500 / tight tracking
  - Section H2: 40–48px / 1.1 / weight 500
  - Card title: 17–18px / weight 600
  - Body: 15–16px / 1.55 / weight 400 / `--ink-secondary`
  - Micro label (pill/eyebrow): 11px / weight 500 / **not** all-caps — use sentence case to avoid the generic "tracked-out caps" tell
- Line length: keep body paragraphs under ~65 characters per line.
- Numbers in dashboard widgets (e.g. "142,029") get a slightly heavier weight and tabular figures to read as data, not decoration.

---

## 4. Layout & Grid

```
┌───────────────────────────────────────────┐
│ Header: logo · nav · sign in · primary CTA │  ← dark bar, 64px tall
├───────────────────────────────────────────┤
│  DARK HERO (gradient)                      │
│  status pills                              │
│  H1 (2 lines, left-aligned)                │
│  subhead (1 line, muted)                   │
│  [ CTA button ]                            │
│              isometric 3D object, right    │
│              floating data-label chips     │
│  logo strip: "Trusted by ___"              │
├───────────────────────────────────────────┤  ← gradient fades to white here
│  LIGHT SECTION                             │
│  H2 left-aligned + 1-line subhead          │
│  4-column feature row (icon / title / body)│
│  "Learn more →" text link                  │
├───────────────────────────────────────────┤
│  LIGHT SECTION 2 (proof / product)         │
│  H2 + subhead                              │
│  Row of 2–3 asymmetric dashboard cards      │
└───────────────────────────────────────────┘
```

- **Alignment:** left-aligned throughout — headlines, body, cards. No centered marketing blocks.
- **Grid:** 12-col, max content width ~1200px, generous side margins (~96px desktop, 24px mobile).
- **Vertical rhythm:** large section padding (120–160px desktop) — the whitespace is what makes the dark→light transition feel deliberate rather than cramped.

---

## 5. Components

### Header / nav
- Fixed dark bar (`--bg-void`), logo left, nav links centered/left, `Sign in` as ghost button + one solid CTA button on the right.
- Nav link type: 14px, `--ink-on-dark-muted`, no underline, no all-caps.

### Status pills (hero)
- Small rounded-rect chips, 1px hairline border, translucent dark fill, 11px sentence-case text. Used for real credibility signals (certifications, live status) — not decoration. Only use if you have a real claim to make.

### Primary button
- Rounded (8–10px radius), solid `--accent-blue` with a subtle top-light gradient, white text, small trailing arrow.
- Hover: brighten fill by ~8%, no scale/shadow tricks.

### Isometric hero graphic
- Thin 1px stroked outline shapes (`--line-hairline-dark`), one solid glowing "platform" block as the focal object, 2–3 floating pill labels connected by dotted lines. This is the **one bold visual element** — everything else stays quiet per it.
- Keep it literal to the subject matter (e.g. for a company profile: a stylized org/network diagram, a product artifact, a globe — something that is actually about the company, not generic geometric filler).

### Feature row (icon + title + body)
- 4 equal columns, each: small isometric line-art icon (matches hero's stroke weight) → title (17px, weight 600) → 2-line body (14px, `--ink-secondary`).
- No card border/background here — these sit directly on the section background. Icons carry the visual interest, not containers.

### Cards (dashboard/proof section)
This is the "bg card" style from the reference:
```css
.card {
  background: #FFFFFF;
  border: 1px solid var(--line-hairline);
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}
```
- **Deliberately understated** — no heavy drop shadow, no gradient wash inside the card. The only strong color inside a card is a data visualization (heatmap, sparkline, chart) or a status tag.
- Card header: small icon + title (14px, weight 600) + optional timestamp/date, right-aligned, muted.
- Status tags inside cards: tiny pill, colored dot + label — `--status-positive` (green) or `--status-alert` (red/orange). Keep to 2 states max; add a neutral gray for "investigating"/pending.
- Cards are **asymmetric in size** (one wide data card + one narrow list card) rather than a uniform 3-up grid — avoid the generic "identical rounded card kit" look.

### Trust/logo strip
- Grayscale or low-opacity logos, small label above ("Used by teams at") in sentence case, not tracked-out caps.

---

## 6. Iconography & Illustration

- Style: thin (1–1.5px) stroke, isometric/axonometric, monochrome (white/light strokes on dark, dark strokes on light) — never filled solid icons, never emoji, never stock illustration.
- Icons should represent literal company concepts (a stack = layered process, a branching diagram = decision flow, a grid = coverage/scale, a loop = feedback) — pick metaphors tied to what your company actually does.

---

## 7. Motion

- One orchestrated moment only: the hero's 3D object can idle-rotate or gently glow/pulse on load. That's it.
- Section reveals: simple opacity fade on scroll into view, no slide-up-on-every-card pattern.
- Hover states: color/opacity shift only, no scale or shadow pop.
- Respect `prefers-reduced-motion`.

---

## 8. Spacing scale

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128` (px) — pick from this scale only, don't invent arbitrary values.

---

## 9. Accessibility & quality floor

- Body text on white: `--ink-primary` on `--bg-surface` passes AA at 16px+.
- Hero text on dark gradient: verify contrast against the darkest gradient stop, not just the average.
- Visible keyboard focus ring: 2px `--accent-blue` outline, offset 2px.
- All status color meaning (positive/alert) must be paired with a text label, not color alone.
- Fully responsive: hero graphic simplifies/stacks below the headline on mobile; 4-col feature row becomes 1-col; cards stack full-width.

---

## 10. Applying this to a company profile site

Suggested section mapping:
1. **Hero** — one-line mission statement + what the company does, dark gradient, one literal illustration of your actual product/work (not generic cubes).
2. **Trust strip** — clients, press mentions, or certifications, if real.
3. **What we do** — 3–4 column feature row explaining your core offerings.
4. **Proof** — 2–3 asymmetric cards showing real output: a case study snapshot, a metric, a timeline, or a testimonial — styled per §5.
5. **Team/Company** — quiet, left-aligned, on `--bg-surface-muted`.
6. **CTA/Contact** — return to a darker band to bookend the page, single strong button.
