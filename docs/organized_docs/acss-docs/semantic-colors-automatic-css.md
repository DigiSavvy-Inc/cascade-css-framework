---
source: https://automaticcss.com/docs/semantic-colors/
---

# Semantic Colors - Automatic.css

Category: Colors

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Semantic Colors

Aside from programmable brand colors, ACSS provides you with the following semantic colors:

These follow the status color standard set by Bootstrap many years ago, providing colors that indicate a specific “notice” for the user and that [typically] have nothing to do with a website’s brand palette.

Note: Prior to v3.0, Semantic Colors were referred to as “contextual colors” This name was updated to “Semantic Colors” to eliminate confusion with the new Contextual Color System.

## Configuring Semantic Colors

Semantic colors can easily be set in the Palette area of the dashboard.

![Semantic Color Dashboard](https://automaticcss.com/wp-content/uploads/CleanShot-2024-10-26-at-18.23.01@2x-1024x911.jpg)Semantic Color Dashboard
## Semantic Color Classes

The following groups of classes have access to the semantic colors by default:

The class naming convention is the same as with all other colors in ACSS. Append`{color}` or `{color-shade}` to the above classes on the desired element (e.g. `.text--warning-light`)

## Status Color Variables

You can access status color variables and color partials along with classes. These variables allow you to reference status colors or parts of status colors when creating custom classes or within custom CSS.

The naming conventions for status colors are the same as all the other colors in the ACSS system: `var(--{name})` and `var(--{name}-{shade}`.

The following partials are available for each status color:

These partials remove all limitations from the status color system, allowing you to make custom shades, transparencies, hovers, and more.

