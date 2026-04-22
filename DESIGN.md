---
name: Portfolio - Brayan Chumpitaz
colors:
  bg-primary: "#0a0f1a"
  bg-secondary: "#111827"
  bg-tertiary: "#1f2937"
  bg-hover: "#374151"
  border-primary: "#1f2937"
  border-secondary: "#374151"
  border-hover: "#10b981"
  text-primary: "#f9fafb"
  text-secondary: "#e5e7eb"
  text-muted: "#9ca3af"
  text-faint: "#6b7280"
  accent-primary: "#10b981"
  accent-secondary: "#818cf8"
  accent-glow: "rgba(16, 185, 129, 0.25)"
  light-bg-primary: "#f8fafc"
  light-bg-secondary: "#ffffff"
  light-bg-tertiary: "#f1f5f9"
  light-bg-hover: "#e2e8f0"
  light-border-primary: "#e2e8f0"
  light-border-secondary: "#cbd5e1"
  light-border-hover: "#10b981"
  light-text-primary: "#0f172a"
  light-text-secondary: "#475569"
  light-text-muted: "#64748b"
  light-text-faint: "#94a3b8"
  light-accent-primary: "#10b981"
  light-accent-secondary: "#6366f1"
  light-accent-glow: "rgba(16, 185, 129, 0.2)"
typography:
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: "700"
    lineHeight: 40px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: "700"
    lineHeight: 32px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: "500"
    lineHeight: 28px
  body-md:
    fontFamily: Geist Sans
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-sm:
    fontFamily: Geist Sans
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
rounded:
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  2xl: 1rem
  full: 9999px
spacing:
  unit: 4px
  container-padding-sm: 16px
  container-padding-md: 32px
  card-gap: 20px
  section-margin: 32px
shadows:
  accent: "0 10px 40px -10px {colors.accent-glow}"
components:
  bento-card:
    backgroundColor: "{colors.bg-secondary}"
    borderColor: "{colors.border-primary}"
    rounded: "{rounded.2xl}"
    padding: "24px"
    transition: "all 0.3s ease"
  bento-card-hover:
    borderColor: "{colors.border-secondary}"
    shadow: "{shadows.accent}"
  social-button:
    backgroundColor: "{colors.bg-tertiary}"
    textColor: "{colors.text-primary}"
    borderColor: "{colors.border-primary}"
    rounded: "{rounded.xl}"
    padding: "12px 16px"
  social-button-hover:
    backgroundColor: "{colors.bg-hover}"
    borderColor: "{colors.accent-primary}"
---

## Brand & Style
This design system implements a modern, sophisticated aesthetic built around a "Midnight Blue & Emerald" core theme. The interface relies on a Bento Box grid layout, prioritizing structured information architecture with distinct, card-based content areas. The brand personality is professional, tech-forward, and highly structured, creating a premium feel suitable for an engineering portfolio.

The UI leverages a dual-tone approach where the base canvas (Midnight Blue) provides deep contrast, while the Emerald accent colors are used sparingly to draw attention to key interactions, focal points, and glowing hover states.

## Colors
The color strategy employs a highly semantic scale, strictly separating backgrounds, borders, text, and accents to ensure consistent contrast and visual hierarchy.

- **Canvas & Surfaces:** The background hierarchy uses deep blues (#0a0f1a to #1f2937) to create subtle depth between the main canvas and elevated bento cards.
- **Accents:** The primary accent is a vibrant Emerald green (#10b981) paired with an Indigo secondary accent (#818cf8).
- **Glow Effects:** Accent colors are applied not just as solids, but as transparent glows (`rgba(16, 185, 129, 0.25)`) to create a neon-like "pulse" or shadow effect when interacting with cards.
- **Text & Borders:** Text hierarchy ranges from pure whites (primary) down to mid-grays (faint) to guide reading order without relying on font weight alone.

## Typography
The system uses a dual-font strategy to balance personality with maximum legibility.

- **Headings & Titles:** **Space Grotesk** brings a technical, geometric flair to the portfolio. It is used for names, section titles, and prominent labels.
- **Body & Data:** **Geist Sans** serves as the utilitarian workhorse for paragraphs, descriptions, and smaller UI elements, ensuring clean readability.

## Layout & Spacing
The layout is heavily structured around a responsive "Bento Grid" system.

- **Bento Grid:** The core layout uses a 12-column grid. Cards span different column widths to create a dynamic but highly organized masonry-like presentation.
- **Padding:** Bento cards utilize generous internal padding (`20px` to `24px`) to let the content breathe, surrounded by consistent `16px` or `20px` gaps between cards.
- **Max Width:** The content is constrained to a `max-w-6xl` container to maintain optimal reading lengths on ultrawide displays.

## Elevation & Depth
Depth is created through a combination of subtle border colors and dramatic, colored drop shadows rather than traditional dark gray shadows.

- **Borders:** Every card is defined by a 1px border (`border-primary`). On hover, the border subtly brightens (`border-secondary` or `border-hover`).
- **Accent Shadows:** When hovering over a card, an "Accent Shadow" emerges (`box-shadow: 0 10px 40px -10px var(--color-accent-glow)`). This colored glow makes the card feel like it is emitting light rather than just casting a shadow.
- **Gradients & Blurs:** Decorative elements, like the hero image background, use blurred gradients (Emerald to Indigo) to create ambient, glowing backdrops.

## Shapes & Radii
The shape language is notably soft and friendly, counterbalancing the stark, technical color palette.

- **Cards:** Bento containers use a prominent `2xl` (16px) border radius.
- **Interactive Elements:** Buttons and smaller interactive targets use `xl` (12px) rounding to clearly denote them as clickable actions distinct from structural cards.
- **Avatars:** Profile images use matching `2xl` rounding to nest perfectly within the grid architecture.

## Motion & Interaction
Animations are purposeful, designed to introduce content smoothly and respond to user intent without feeling overwhelming.

- **Entrance Animations:** Elements slide up and fade in on load (`fade-in-up`, `scale-in`), with staggered animation delays to create a cascading entrance effect.
- **Hover States:** Buttons and links use subtle `scale-110` transformations on icons, paired with border color transitions.
- **Continuous Motion:** Specific elements utilize infinite animations, like `float` and `pulse-glow`, to add a subtle sense of "life" to the interface.
