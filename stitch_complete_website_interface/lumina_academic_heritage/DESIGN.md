---
name: Lumina Academic & Heritage
colors:
  surface: '#f7f9ff'
  surface-dim: '#ccdcee'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf4ff'
  surface-container: '#e3efff'
  surface-container-high: '#daeafd'
  surface-container-highest: '#d4e4f7'
  on-surface: '#0d1d2a'
  on-surface-variant: '#3e484d'
  inverse-surface: '#233240'
  inverse-on-surface: '#e8f2ff'
  outline: '#6e797e'
  outline-variant: '#bec8ce'
  surface-tint: '#006783'
  primary: '#006783'
  on-primary: '#ffffff'
  primary-container: '#5ec1e8'
  on-primary-container: '#004d63'
  inverse-primary: '#71d2fa'
  secondary: '#ad3317'
  on-secondary: '#ffffff'
  secondary-container: '#ff6e4c'
  on-secondary-container: '#671100'
  tertiary: '#8a5020'
  on-tertiary: '#ffffff'
  tertiary-container: '#efa56d'
  on-tertiary-container: '#6d390a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bce9ff'
  primary-fixed-dim: '#71d2fa'
  on-primary-fixed: '#001f2a'
  on-primary-fixed-variant: '#004d63'
  secondary-fixed: '#ffdad2'
  secondary-fixed-dim: '#ffb4a3'
  on-secondary-fixed: '#3d0600'
  on-secondary-fixed-variant: '#8b1a00'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb781'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#6d3909'
  background: '#f7f9ff'
  on-background: '#0d1d2a'
  surface-variant: '#d4e4f7'
  surface-pure: '#FFFFFF'
  surface-subtle: '#F8FAFC'
  text-muted: '#6B7C93'
  border-subtle: '#E2E8F0'
  accent-gold: '#F2B705'
  accent-peach: '#FFB37A'
  accent-coral: '#E85D3D'
typography:
  display-hero:
    fontFamily: Source Serif 4
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Source Serif 4
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  metric-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  quote-editorial:
    fontFamily: Source Serif 4
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an enlightened, high-clarity scientific digital environment paired with warm, archival reverence. Diverging from dark-mode conventions typical of tech collectives, the aesthetic is anchored in an expansive, luminous white canvas that prioritizes scholarly rigor, intellectual transparency, and accessible documentation. 

The brand personality lives at the intersection of three traits:
- **Scholarly Rigor:** Calm, clean, legible data presentation with structured taxonomies and high-contrast typographic discipline.
- **Warm Archival Memory:** Honoring foundational history through warm peach-to-coral gradients, golden four-pointed star emblems, and editorial quotation treatments.
- **Collaborative Forward Momentum:** Sky blue accents that energize actionable tools, ongoing research streams, and active discussions.

The visual style blends **Minimalism** with **Modern Editorial and Academic Structuring**. The core canvas remains pure white (`#FFFFFF`), with generous breathing room and refined card modularity. Elevation is tactile yet weightless, using pale structural borders and subtle ambient drops rather than aggressive skeuomorphism.

## Colors

The system uses a balanced chromatic balance divided into functional modes: **Active Portal Mode** and **Heritage/Archive Mode**.

### Functional Application
- **Sky Blue (`#5EC1E8`):** The primary operational color. Reserved for active interactive triggers, primary action buttons, field card indicators (`01`–`06`), progress track fills, active status indicators, and link hovers.
- **Coral (`#E85D3D`) & Peach (`#FFB37A`):** The secondary warmth vector. Deployed as a signature vertical linear gradient (`linear-gradient(180deg, #FFB37A 0%, #E85D3D 100%)`) across thematic artifacts, commemorative milestone counters, archival badges, and key narrative accents. Coral serves as the standalone high-priority CTA in historical contexts.
- **Golden Yellow (`#F2B705`):** Reserved for institutional achievements, verified status dots, cardinal star emblems, decorative horizontal partition lines, and editorial quote accents.
- **Deep Navy (`#1B2A38`):** The core neutral tone for all structural text, headlines, and data-dense tables. Provides WCAG AAA contrast against crisp white backgrounds.
- **Muted Slate (`#6B7C93`):** Metadata, category tags, timestamp indications, and disabled borders.

## Typography

Typography pairs the structural clarity of **Plus Jakarta Sans** with the academic authority of **Source Serif 4**.

- **Editorial Hierarchy:** `Source Serif 4` is leveraged for high-level identity statements, major section titles, museum narratives, and reflective quotes. It gives the hub a peer-reviewed, museum-grade aesthetic.
- **Interface & Data Density:** `Plus Jakarta Sans` manages all operational UI, navigation items, research abstracts, card body text, interactive controls, and numerical metrics. Its geometric balance maintains legibility at high information densities.
- **Micro-labels & Stage Pills:** All pipeline identifiers (e.g., `IDEA`, `RESEARCH`, `DEVELOPMENT`, `TESTING`, `RELEASED`) use `label-sm` in full uppercase with expanded letter-spacing (`0.05em`).

## Layout & Spacing

The layout is built upon a **12-column responsive fluid grid** capped at a maximum width of `1280px` for dense research pages and `1440px` for landing dashboards.

### Grid & Form Factors
- **Desktop (1024px+):** 12-column grid with `1.5rem` (`24px`) gutters and `2rem` (`32px`) screen margin. Supports 6-card multi-category matrices (2 columns per card), 3-pillar narrative structures (4 columns per card), and split documentation views (3-column sticky table of contents, 9-column content body).
- **Tablet (768px – 1023px):** 6-column grid with `1.5rem` gutters. Metric rows flex into a 2x3 or 3x2 matrix. Research field cards reflow into 2 columns.
- **Mobile (< 768px):** 4-column grid with `1rem` (`16px`) gutters and `1rem` outer margins. All horizontal pipelines and multi-card decks convert into vertically stacked lists or horizontally swipeable carousels.

### Structural Rhythm
Sections are bounded by `2.5rem` to `4rem` vertical breathing room. Narrative divides incorporate a single hairline `1px` rule rendered in `#F2B705` flanked by `2rem` top and bottom margins.

## Elevation & Depth

Visual hierarchy avoids heavy drop shadows, relying on layered white-on-neutral surfaces punctuated by distinct perimeter borders.

- **Level 0 (Canvas):** Pure `#FFFFFF` background across all primary documentation and hub areas.
- **Level 1 (Standard Card / Tile):** Surface `#FFFFFF` elevated by a crisp `1px` outline in `#E2E8F0` coupled with an ambient, diffused shadow: `0 4px 20px -2px rgba(27, 42, 56, 0.04)`.
- **Level 2 (Interactive Hover & Popover):** Cards translate `-2px` vertically; shadow shifts to `0 12px 28px -4px rgba(27, 42, 56, 0.08)`, and border-color shifts to `#5EC1E8` (Active Portal) or `#FFB37A` (Archive Mode).
- **Archival Ambient Shadow:** Commemorative items and historical panels incorporate a subtle warm under-tint: `0 8px 24px -2px rgba(232, 93, 61, 0.06)`.
- **Atmospheric Overlays:** Gallery visuals implement an instant `20%` opacity coral overlay (`#E85D3D`) upon cursor focus, revealing metadata overlays.

## Shapes

The interface is engineered around an architectural, rounded form language:

- **Cards and Panels:** Standardized on `rounded-xl` (`1.5rem` / `24px`) corner radii. This softens dense academic charts and creates inviting content containers.
- **Interactive Controls & Input Elements:** Built with `rounded-lg` (`1rem` / `16px`) corner treatments, maintaining cohesion with larger containers.
- **Metadata Badges, Category Tags & Status Pills:** Configured with full pill curves (`rounded-full` / `9999px`) to distinguish categorical tags from actionable square-ish buttons.
- **Nodes & Avatars:** Fully circular (`50%`) geometry for timeline milestone markers, status indicators, and author profiles.

## Components

### Buttons
- **Primary Action (Portal):** Background `#5EC1E8`, text `#FFFFFF`, font `label-md`. Hover state applies `#4AB3DC` with a micro-lift. Focus ring: `2px` offset with `#5EC1E8`.
- **Primary Action (Archive):** Linear gradient background `linear-gradient(180deg, #FFB37A 0%, #E85D3D 100%)`, text `#FFFFFF`.
- **Secondary / Outline:** Surface transparent, `1.5px` border `#5EC1E8`, text `#1B2A38`. On hover, fills with pale tint `rgba(94, 193, 232, 0.08)`.
- **Tertiary / Ghost:** Text `#1B2A38`, transparent background. On hover, background fills with `#F8FAFC`.

### Chips & Badges
- **Status Indicator Badges:** Full-pill geometry with a `6px` solid status circle on the left.
  - *Active / Ongoing / Online:* Pale sky blue fill `rgba(94, 193, 232, 0.12)`, text `#1B2A38`, dot `#5EC1E8`.
  - *Completed / Milestone:* Pale gold fill `rgba(242, 183, 5, 0.15)`, text `#1B2A38`, dot `#F2B705`.
  - *Released:* Warm coral fill `rgba(232, 93, 61, 0.12)`, text `#E85D3D`, dot `#E85D3D`.
- **Filter Tags:** Background `#F8FAFC`, border `1px` `#E2E8F0`, text `#6B7C93`. When selected, border transitions to `#5EC1E8` with `#1B2A38` text.

### Cards
- **Research Hub & Forum Category Cards:** Standard `rounded-xl` container with `#FFFFFF` background and `1px` `#E2E8F0` perimeter border. Cards display a bold category index numeral (`01`–`06`) rendered in `metric-display` with `#5EC1E8` coloration.
- **Museum & Archive Plaque Cards:** Grounded with a dual gradient border (`#FFB37A` to `#E85D3D`) at `1.5px` width and warm ambient drop shadowing.
- **Testimonial Block:** Large quotation mark glyphs in `#F2B705` top-left, set in `Source Serif 4` italic.

### Input Fields & Controls
- **Text Inputs & Selectors:** Height `48px`, border `1.5px` `#E2E8F0`, corner radius `1rem`, surface `#FFFFFF`. Focus shifts the border to `#5EC1E8` with an ambient ring `rgba(94, 193, 232, 0.2)`. Placeholder text set in `#6B7C93`.
- **Checkboxes & Radios:** `20px` bounds with `rounded-md` (checkbox) or `rounded-full` (radio). Inactive border `1.5px` `#6B7C93`. Active state fills with `#5EC1E8` and displays a white checkmark or center pin.

### Lists & Timelines
- **Vertical Milestones:** Centered `2px` vertical guideline colored `#5EC1E8` in portal context or `#FFB37A` in historical context. Nodes are `12px` solid circles with `4px` white center halos.
- **Horizontal Pipeline Steps:** 5 interconnected pill-shaped steps (`IDEA` → `RESEARCH` → `DEVELOPMENT` → `TESTING` → `RELEASED`) connected with dynamic filled-vs-unfilled tracks.