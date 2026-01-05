---
source: https://automaticcss.com/docs/deprecated-features/
---

# Deprecated Features - Automatic.css

Category: Fundamentals

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Deprecated Features

It’s sometimes necessary to deprecate features and utilities in a CSS Framework. This is usually due to the following factors:

While deprecation can sometimes be inconvenient, it’s necessary and beneficial.

Please note that our deprecation policy is very straightforward:

If a deprecated feature is turned off on upgrade after previously being on, this is not by design and should be reported to the team as a bug.

Here is the full list of deprecated features since the inception of ACSS in 2021:

## Text Larger

`.text--larger` was a utility class originally created as a way to provide “tweener” sizes for text. You could combine it with a standard text size class to create a slightly larger version.

This utility was eventually made redundant by the widespread support of variables and `calc()` expressions in page builders, SCSS support, easy access to global CSS, etc. When you can calc a variable or manually make a new utility from an existing utility, a class like `.text--larger` not only becomes redundant, but inefficient and undesirable.

## Owl Spacing

Owl Spacing (`.owl--{size}`) was a spacing technique based on the “Lobotomized Owl” CSS selector (`* + *`) that adds top margin to all adjacent siblings. It’s essentially a poor man’s gap technique which was extremely useful prior to widespread support of the gap property.

This set of utilities was deprecated to give preference to the gap property when gap reached 92%+ support for flex layouts. Not only is gap easier and cleaner, it’s more performant as it doesn’t require the use of universal selectors.

## Abbreviated Padding Classes

ACSS’ padding classes were originally abbreviated:

In 2022 we decided to establish an anti-abbreviation policy. Abbreviations introduce confusion, create extra memorization requirements, and make it harder to guess utility names. The abbreviated utilites were replaced with:

## Deprecated Colors

## Deprecated Shades

## Deprecated Buttons

