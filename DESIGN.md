---
name: Personal Site
description: A quiet Markdown-published blog with warm paper surfaces and geometric navigation.
colors:
  ink: "#292a27"
  paper: "#fbfaf7"
  canvas: "#f5f4f0"
  muted: "#555650"
  border: "#deddd7"
  link: "#343733"
  square-home: "#e5e3dd"
  square-about: "#d7d6d0"
  square-archive: "#ecebe6"
  square-tags: "#cccac3"
typography:
  body:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  headline:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.8rem, 5vw, 2.35rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.035em"
  navigation:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 600
    letterSpacing: "-0.02em"
rounded:
  focus: "2px"
  square: "0"
spacing:
  content-gutter: "clamp(1.25rem, 5vw, 3rem)"
components:
  navigation-tile:
    backgroundColor: "{colors.square-home}"
    textColor: "{colors.ink}"
    size: "3.75rem"
    height: "3.75rem"
    rounded: "{rounded.square}"
---

# Design System: Personal Site

## Overview

**Creative North Star: "The Quiet Geometry of a Reading Desk"**

The site is a calm, content-first place to publish and read personal writing. Warm paper tones and a restrained system-font stack keep the interface familiar; the navigation supplies the one distinctive gesture, a compact arrangement of four overlapping squares.

The visual system stays deliberately light and flat. Color distinguishes the four navigation destinations, while editorial hierarchy and whitespace organize posts and pages without competing with their content.

**Key Characteristics:**
- Warm off-white canvas and paper surfaces with charcoal text.
- Four overlapping, muted-gray square navigation tiles.
- System typography, generous reading width, and thin dividers.
- Flat surfaces; state is communicated through tone, focus, and small transitions.

## Colors

The palette is warm, low-contrast in its surfaces, and anchored by dark readable text.

### Primary
- **Ink** (`#292a27`): Main text and navigation labels.
- **Link** (`#343733`): Text links and keyboard-visible navigation treatment.

### Neutral
- **Paper** (`#fbfaf7`): Main site shell.
- **Canvas** (`#f5f4f0`): Outer page background.
- **Muted** (`#555650`): Metadata, footer, and secondary text.
- **Border** (`#deddd7`): Header, footer, list, and quotation dividers.
- **Home Square** (`#e5e3dd`): Home navigation tile.
- **About Square** (`#d7d6d0`): About navigation tile and text selection.
- **Archive Square** (`#ecebe6`): Archive navigation tile.
- **Tags Square** (`#cccac3`): Tags navigation tile.

## Typography

**Display Font:** System UI stack (`system-ui`, platform fallbacks)  
**Body Font:** System UI stack (`system-ui`, platform fallbacks)  
**Label/Mono Font:** System UI for navigation; platform monospace for code.

**Character:** Neutral and familiar, with compact headings and restrained tracking. No external font is required.

### Hierarchy
- **Headline** (700, `clamp(1.8rem, 5vw, 2.35rem)`, 1.25): Page titles.
- **Title** (620, `clamp(1.15rem, 2.4vw, 1.4rem)`): Site identity in the header.
- **Body** (400, browser-default `1rem`, 1.65): Reading and general page content.
- **Label** (600, `0.82rem`): Navigation tile labels.
- **Metadata** (`0.9rem`): Post metadata, taxonomy, and footer.

## Layout

The centered site shell is capped at `52rem` and fills at least the viewport height. Header, main content, and footer form a single vertical column. Main content uses fluid horizontal padding; article text is capped at `72ch` for comfortable reading. Post lists and tag indexes use open rows separated by fine rules rather than cards.

Primary navigation is a two-by-two grid of four square links. At widths of `34rem` and below, the tiles reduce from `3.75rem` to `3.25rem`, with tighter header and content spacing. A skip link precedes the shell for keyboard users.

## Elevation & Depth

The interface uses no shadows. Depth comes from the contrast between the outer canvas and paper shell, thin borders, and the four slightly overlapping tonal squares. Hover, current-page, and focus states bring a tile forward without adding elevation.

**The Flat-By-Default Rule.** Surfaces stay flat; use tonal contrast and borders for depth, never shadows.

## Shapes

Navigation tiles are square, with no rounded corners. Their colored pseudo-elements extend beyond separate link hit areas to create the overlap; the extension does not intercept pointer input. Dividers are one-pixel rules. The only rounded treatment is a subtle `2px` radius on the general focus outline.

## Components

### Navigation
- **Style:** Four labeled links in a two-by-two square grid, each with its own muted surface color.
- **Default:** Dark label centered over a square that extends `0.45rem` beyond its link area (`0.35rem` on small screens).
- **Hover / Current:** The square changes to `#c7c5bd`, scales slightly, and layers above neighboring squares. The current destination is identified with `aria-current="page"`.
- **Focus:** A `2px` inset outline; the focused tile layers above neighboring squares. General links retain a visible `3px` focus outline.
- **Motion:** Tile state transitions use `180ms ease-out`; reduced-motion preferences shorten transitions and disable smooth scrolling.

### Reading Content
- **Style:** Open post and tag lists with thin dividers, readable metadata, and a narrow article measure. Content images and video scale to the available width.
- **Code:** Inline and block code use a platform monospace stack and soft neutral backing.

## Do's and Don'ts

### Do:
- **Do** keep the four square navigation destinations distinct by their established gray tones.
- **Do** preserve the warm paper/canvas contrast and dark readable text.
- **Do** keep article copy within the established `72ch` measure.
- **Do** retain visible keyboard focus, active-page semantics, and reduced-motion behavior.

### Don't:
- **Don't** add gradients, shadows, bright accent colors, or rounded card layouts that compete with the flat geometric language.
- **Don't** make the square overlap block neighboring link hit targets.
- **Don't** add biography or other personal facts that the author has not supplied.
