---
source: https://automaticcss.com/docs/masonry-layouts/
---

# Masonry Layouts - Automatic.css

Category: Columns, Grids

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Masonry Layouts

![Masonry Layout Example](https://automaticcss.com/wp-content/uploads/masonry-layout-1024x740.jpg)
As of Automatic.css 2.8, users can create Masonry layouts in seconds using ACSS Masonry utilities.

It’s possible to create up to a 5-column masonry layout using the following utilities:

## Responsive Masonry Layouts

There are two ways to create responsive masonry layouts in ACSS:

### Method #1: Automatically responsive masonry layouts

Masonry layouts in CSS are created with CSS Columns, which ACSS fully supports. So, you can use existing .col-width--[size] utilities to make your masonry layouts automatically responsive.

### Method #2: Manually responsive masonry layouts

You can also control the responsiveness of masonry layouts manually using masonry breakpoint classes, which use the standard breakpoint class convention: .masonry--[breakpoint]-[columns].

## Gaps in Masonry Layouts

CSS Columns support column gaps but not row gaps. But, you’re using ACSS so this isn’t an issue for you. We’ve designed Masonry layouts to be compatible with existing gap utilities. We’ve also added new gap utilities for controlling column-gap and row-gap separately.

## Ruled Masonry Layouts

Since masonry layouts use CSS columns, ruled columns are supported by default using our existing columns utilities. You can control rule style, rule color, and rule width. Read the Columns documentation for more details.

