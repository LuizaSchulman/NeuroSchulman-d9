# DESIGN.md

## Purpose

This document defines the foundational design system, layout behavior, typography rules, component structure and visual direction for the website implementation.

The system should be treated as the single source of truth for:
- visual hierarchy
- spacing rhythm
- responsive behavior
- component consistency
- layout structure
- interaction behavior

All generated interfaces should follow this specification strictly.

---

# Core Principles

## Visual Direction

- Minimalist
- Editorial
- Premium
- Spacious
- Calm and refined
- Typography-driven
- Warm neutral palette
- High readability
- Controlled visual rhythm

Avoid:
- Generic SaaS aesthetics
- Heavy gradients
- Excessive shadows
- Glassmorphism
- Overly playful UI
- Arbitrary spacing
- Dense layouts

---

## Theme Architecture

### Surface Dark
- Background: #1E0C01
- Primary Text: #F8F8F7
- Secondary Text: #E2E2E2
- Border: #DEDCDC
- Icons: #F8F8F7
- Primary Button: #0F5789
- Primary Button Hover: #1D7ABB

### Surface Light
- Background: #F8F8F7
- Primary Text: #1E0C01
- Secondary Text: #39261B
- Border: #39261B
- Icons: #39261B
- Primary Button: #1E0C01
- Primary Button Hover: #5C3E2A

---

# Typography

## Font Family
Primary Typeface: Area Inktrap

## Breakpoints

| Breakpoint | Width |
|---|---|
| mobile | 0–767px |
| tablet | 768–1279px |
| desktop | 1280–1919px |
| desktop-large | 1920px+ |

## Typography Scale

### H1 — Title Display

| Breakpoint | Size |
|---|---|
| desktop-large | 72px |
| desktop | 64px |
| tablet | 52px |
| mobile | 40px |

- Weight: Regular
- Line Height: 115%
- Letter Spacing: -3%

### H2 — Title Large

| Breakpoint | Size |
|---|---|
| desktop-large | 64px |
| desktop | 56px |
| tablet | 44px |
| mobile | 32px |

- Weight: Regular
- Line Height: 115%
- Letter Spacing: -3%

### Caption / Overline

- Size: 14px
- Weight: Semibold
- Transform: Uppercase
- Letter Spacing: 3%

### Paragraph Styles

#### Small Regular
- Size: 14px
- Weight: Regular
- Line Height: 160%
- Letter Spacing: -1%

#### Regular Medium
- Size: 16px
- Weight: Medium
- Line Height: 160%
- Letter Spacing: -1%

#### Regular Bold
- Size: 16px
- Weight: ExtraBold
- Line Height: 160%
- Letter Spacing: -1%

#### Large
- Size: 20px
- Weight: Semibold
- Line Height: 150%
- Letter Spacing: -3%

---

# Spacing System

| Token | Value |
|---|---|
| spacing.4 | 4px |
| spacing.6 | 6px |
| spacing.8 | 8px |
| spacing.12 | 12px |
| spacing.16 | 16px |
| spacing.24 | 24px |
| spacing.32 | 32px |
| spacing.48 | 48px |
| spacing.64 | 64px |
| spacing.80 | 80px |
| spacing.96 | 96px |
| spacing.120 | 120px |

---

# Radius Tokens

| Token | Value |
|---|---|
| radius.sm | 6px |
| radius.full | 64px |

---

# Containers & Layout

## Content Wide
- Max Width: 1440px
- Padding X: spacing.80
- Gap: spacing.24

## Reading Default
- Max Width: 832px

## Reading Narrow
- Uses `ch` units
- Uses `text-wrap: balance`

Recommended:
```css
max-width: 10ch;
text-wrap: balance;
```

## Subtitle Measure

```css
max-width: 38ch;
text-wrap: balance;
```

## Editorial Measures

| Token | Value |
|---|---|
| measure.hero | 10ch |
| measure.heading | 12ch |
| measure.subtitle | 38ch |
| measure.body | 65ch |

---

# Split Layout

## Text + Media

- Text Column Max Width: 640px
- Media may bleed visually beyond container
- Maintain edge tension and visual balance

### Responsive Gap

| Breakpoint | Gap |
|---|---|
| desktop-large | spacing.96 |
| desktop | spacing.64 |
| tablet | spacing.48 |
| mobile | spacing.32 |

---

# Navbar

## Structure

- Full width
- Padding X: spacing.80
- Padding Y: spacing.16

### Logo
- Height: 32px
- Preserve aspect ratio

### Navigation
- Gap between items: spacing.32

### Navbar Item
- Height: 32px
- Typography: paragraph.small

Hover:
- Change weight from Regular to Semibold

## Behavior

### Hero State
- Transparent background
- Uses Surface Dark text/icons

### Scrolled State
- Background becomes Surface Light
- Uses Surface Light text/icons
- Primary CTA remains blue

### Motion
```css
transition:
background-color 300ms ease,
color 300ms ease,
border-color 300ms ease;
```

---

# Buttons

## Button Regular
- Border Radius: radius.full
- Padding X: spacing.24
- Padding Y: spacing.16
- Hug content
- Typography: paragraph.bold

## Button Small
- Border Radius: radius.full
- Padding X: spacing.24
- Padding Y: spacing.16
- Hug content
- Typography: paragraph.small.bold

---

# Índice Component

## Variants
- Number
- Text
- Icon

All variants:
- Use radius.full
- Maintain contrast with parent surface
- Center aligned

---

# Card System

## card.info.default

- Padding: spacing.24
- Radius: radius.sm
- Gap: spacing.16
- Background matches parent section

Optional flags:
- hasIndice
- hasBtn
- hasOutline

### Outline
```css
border: 1px solid border.default;
```

## card.info.highlight

Inherits default variant plus:
- Outline always enabled
- Shadow:
```css
box-shadow: 1px 3px 0 currentColor;
```

---

# Hero Section

## Height

| Breakpoint | Height |
|---|---|
| desktop-large | 92.5vh |
| desktop | 92.5vh |
| tablet | 92.5vh |
| mobile | 100vh |

## Background

- Background Size: cover
- Background Position: center
- Never distort image

### Overlay
- Color: #160E09
- Opacity: 65%

## Content Container

- Max Width: 960px
- Gap: spacing.48
- Center aligned

## Composition

### Location Info
- Horizontal
- Gap: spacing.4
- Icon: 16x16px
- Typography: caption.overline

### Main Info
- Vertical gap: spacing.24

#### Hero Title
- Typography: title.display
- text-wrap: balance
- max-width: measure.hero

#### Hero Subtitle
- Typography: paragraph.large.medium
- max-width: measure.subtitle

### CTA
- Primary button
- Label: “Agendar consulta”

---

# Motion Principles

- Subtle transitions only
- Minimal upward motion
- Avoid exaggerated parallax
- Avoid cinematic over-animation

---

# AI Generation Rules

Use the screenshots as visual references, but follow this document as the primary source of truth.

Preserve:
- spacing rhythm
- typography hierarchy
- container widths
- editorial line breaks
- surface-based themes

Avoid:
- arbitrary spacing
- oversized shadows
- generic AI-generated SaaS aesthetics
- inconsistent typography scales
