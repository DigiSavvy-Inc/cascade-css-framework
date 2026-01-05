# Content Grid Implementation

This document explains the content-grid system implementation in Cascade CSS.

## Overview

The content-grid is a sophisticated CSS Grid-based layout system that provides named grid lines for precise content placement. It enables:

- Centered content with readable line-length
- Breakout elements that extend beyond content width
- Full-width sections
- Responsive gutters

## Grid Structure

The content-grid uses 7 named grid columns:

```css
.content-grid {
  --gutter: 2.4rem;
  --content-width: min(65ch, 100% - var(--gutter) * 2);
  --feature-width: 50px;
  --feature-max-width: 100px;
  --full: minmax(var(--gutter), 1fr);

  display: grid;
  grid-template-columns:
    [full-start] var(--full)
    [feature-max-start] minmax(0, var(--feature-max-width))
    [feature-start] minmax(0, var(--feature-width))
    [content-start] var(--content-width)
    [content-end] minmax(0, var(--feature-width))
    [feature-end] minmax(0, var(--feature-max-width))
    [feature-max-end] var(--full)
    [full-end];
}
```

## Named Grid Lines

### Full Width (`full-start` / `full-end`)
- Spans entire container width
- Use for hero sections, full-width backgrounds
- Example: `.grid-col--full`

### Feature Max (`feature-max-start` / `feature-max-end`)
- Maximum breakout area
- Extends significantly beyond content
- Example: `.grid-col--feature-max`

### Feature (`feature-start` / `feature-end`)
- Standard breakout area
- Moderate extension beyond content
- Example: `.grid-col--feature`

### Content (`content-start` / `content-end`)
- Main content area
- Optimal reading width (65ch default)
- Children automatically placed here
- Example: `.grid-col--content` (default)

## Usage

### Basic Content Grid

```html
<div class="content-grid">
  <!-- Default children span content area -->
  <p>This stays within readable content width</p>

  <!-- Breakout to feature area -->
  <figure class="grid-col--feature">
    <img src="image.jpg" alt="Wider image">
  </figure>

  <!-- Full width -->
  <div class="grid-col--full bg--primary">
    Full-width background
  </div>
</div>
```

### Grid Column Classes

```css
/* Content area (default) */
.grid-col--content {
  grid-column: content;
}

/* Feature breakout */
.grid-col--feature {
  grid-column: feature;
}

/* Maximum breakout */
.grid-col--feature-max {
  grid-column: feature-max;
}

/* Full width */
.grid-col--full {
  grid-column: full;
}
```

## Customization

### Adjust Content Width

```css
.content-grid {
  --content-width: min(70ch, 100% - var(--gutter) * 2);
}
```

### Adjust Gutters

```css
.content-grid {
  --gutter: 3rem;
}
```

### Adjust Breakout Areas

```css
.content-grid {
  --feature-width: 80px;
  --feature-max-width: 150px;
}
```

## Visual Representation

```
┌──────────────────────────────────────────────────────────┐
│ full-start                               full-end        │
│  ┌────────────────────────────────────────────────┐      │
│  │ feature-max-start          feature-max-end     │      │
│  │  ┌──────────────────────────────────────┐      │      │
│  │  │ feature-start        feature-end     │      │      │
│  │  │  ┌────────────────────────────┐      │      │      │
│  │  │  │ content-start content-end  │      │      │      │
│  │  │  │                            │      │      │      │
│  │  │  │   Main readable content    │      │      │      │
│  │  │  │                            │      │      │      │
│  │  │  └────────────────────────────┘      │      │      │
│  │  └──────────────────────────────────────┘      │      │
│  └────────────────────────────────────────────────┘      │
└──────────────────────────────────────────────────────────┘
```

## Benefits

1. **Readable Content**: Content stays within optimal line-length
2. **Visual Interest**: Images/media can break out for emphasis
3. **Full-Width Sections**: Easy full-width backgrounds
4. **Responsive**: Automatically adjusts with container
5. **No Media Queries**: Uses CSS Grid and calc() for responsiveness

## Example: Blog Post Layout

```html
<article class="content-grid">
  <h1>Article Title</h1>
  <p>Introduction paragraph stays at readable width...</p>

  <figure class="grid-col--feature">
    <img src="hero.jpg" alt="Hero image">
    <figcaption>Caption for image</figcaption>
  </figure>

  <p>More content at readable width...</p>

  <blockquote class="grid-col--feature-max">
    Large pull quote that extends even further
  </blockquote>

  <p>Conclusion paragraph...</p>

  <div class="grid-col--full bg--neutral-ultra-light padding--xl">
    <h2>Call to Action</h2>
    <p>Full-width section with background</p>
  </div>
</article>
```

## Implementation Notes

- This system is independent and not based on any other framework
- Uses modern CSS Grid features
- Fully customizable via CSS custom properties
- Works without JavaScript
- Degrades gracefully in older browsers

## References

- [CSS Grid Layout Module](https://www.w3.org/TR/css-grid-1/)
- [Named Grid Lines](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
