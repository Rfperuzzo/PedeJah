---
name: Artisan Noir
colors:
  surface: '#16130b'
  surface-dim: '#16130b'
  surface-bright: '#3d392f'
  surface-container-lowest: '#110e07'
  surface-container-low: '#1f1b13'
  surface-container: '#231f17'
  surface-container-high: '#2d2a21'
  surface-container-highest: '#38342b'
  on-surface: '#eae1d4'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#eae1d4'
  inverse-on-surface: '#343027'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c9c6c3'
  on-secondary: '#31302e'
  secondary-container: '#474744'
  on-secondary-container: '#b7b5b1'
  tertiary: '#bfcdff'
  on-tertiary: '#082b72'
  tertiary-container: '#97b0ff'
  on-tertiary-container: '#254188'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2de'
  secondary-fixed-dim: '#c9c6c3'
  on-secondary-fixed: '#1c1c1a'
  on-secondary-fixed-variant: '#474744'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#27438a'
  background: '#16130b'
  on-background: '#eae1d4'
  surface-variant: '#38342b'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '200'
    lineHeight: 72px
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '300'
    lineHeight: 40px
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '300'
    lineHeight: 36px
    letterSpacing: 0.02em
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.15em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-desktop: 64px
  container-padding-mobile: 24px
  gutter: 24px
  section-gap: 80px
---

## Brand & Style
The design system embodies a cinematic, high-end restaurant atmosphere designed for elite culinary experiences. It prioritizes a sense of exclusivity and quiet luxury through a minimalist lens. The target audience includes gourmands and culinary professionals who value precision and aesthetic presentation.

The visual style is **Minimalist-Luxury**, utilizing deep blacks to create a gallery-like backdrop for food photography. It leverages high-contrast typography and subtle metallic accents to evoke a premium, tactile feel. The interface avoids clutter, opting for generous whitespace (or "dark space") and focused interactions to maintain a sophisticated emotional response.

## Colors
The palette is rooted in a "Noir" aesthetic, utilizing a near-black foundation to allow content to emerge from the shadows. 

- **Primary (#d4af37):** An Antique Brass/Gold used sparingly for focal points, interactive states, and delicate borders.
- **Surface (#0a0a0a):** The primary background color, providing a deep, infinite canvas.
- **Surface-Container (#1a1a18):** A charcoal tint used for cards and grouped elements to create subtle separation from the background.
- **On-Surface (#f4f3f1):** A warm, off-white used for typography to ensure high legibility while avoiding the harshness of pure white.

## Typography
This design system utilizes **Hanken Grotesk** across all levels, relying on weight contrast and letter spacing to establish hierarchy.

Headings should use Light (200-300) weights with expanded letter spacing to create an elegant, editorial feel. Labels are set in Bold (700) with significant tracking and uppercase transformation to act as navigational anchors. Body text remains at a Medium (400) weight for optimal readability against the dark background.

## Layout & Spacing
The layout follows a **fluid grid** model with exaggerated margins to reinforce the minimalist brand. 

On desktop, use a 12-column grid with wide 64px outer margins. Elements should be spaced with a rhythmic 8px base unit. Section-to-section spacing is intentionally large (80px+) to allow the design to "breathe." On mobile, the grid collapses to 4 columns with 24px margins, maintaining the sense of openness by increasing vertical padding between stacked elements.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Soft Glows** rather than traditional shadows.

1.  **Base:** The primary surface is `#0a0a0a`.
2.  **Raised:** Elements like cards or menus use `#1a1a18` with a 1px stroke of the primary gold at low opacity (10-15%).
3.  **Illumination:** Active elements or "hero" cards feature a soft, diffuse outer glow using the primary gold color (blur: 40px, opacity: 5%) to simulate ambient lighting in a dim restaurant.
4.  **Glassmorphism:** Overlays and navigation bars use a heavy backdrop blur (20px) with a semi-transparent charcoal fill to maintain context of the underlying content.

## Shapes
The shape language is defined by ultra-wide radii, creating a soft, organic feel that contrasts with the sharp typography. All primary containers and buttons utilize a 32px or greater corner radius. Small elements like tags or chips should be fully pill-shaped.

## Components
- **Buttons:** Primary buttons are pill-shaped with a solid Gold (#d4af37) background and black text. Secondary buttons use a 1px gold border with no fill.
- **Cards:** Use the Surface-Container color with a 32px radius. Images within cards should have a subtle vignette to blend into the dark UI.
- **Inputs:** Minimalist bottom-border only or a very subtle charcoal container. Focus states are indicated by the border turning solid gold and a faint gold glow.
- **Lists:** Separated by thin, low-opacity (10%) gold dividers. High-contrast typography distinguishes titles from descriptions.
- **Chips:** Small, pill-shaped elements with a Charcoal background and Gold text for metadata or categories.
- **Additional Elements:** Custom cursors or hover states should include a soft "spotlight" effect that follows the user's movement, enhancing the cinematic feel.