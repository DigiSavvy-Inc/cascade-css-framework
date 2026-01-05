---
source: https://automaticcss.com/docs/background-color-classes/
---

# Background Color Classes - Automatic.css

Category: Backgrounds

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Background Color Classes

Background classes allow you to change the background color on-the-fly, whether it’s a section, container, div, or any other boxed element.

While there are dozens of classes to choose from, they all follow the same conventions. If you remember the convention, you’ll be able to recall any color, shade, or transparency without having to look at the documentation.

## Main Color Convention

If you want to set the background color to one of the main ACSS colors, use:

`.bg--[color]`

Example:

```xml
<div class="bg--action"></div>
```

Any active color in your project will work.

## Shade Color Convention

If you want to set the background color to a shade of one of your colors, use:

`.bg--[color]-[shade]`

Example:

```xml
<div class="bg--action-light"></div>
```

Shade values are ultra-light, light, medium, dark, ultra-dark, and hover.

## Transparency Color Convention

If you want to set the background color to a transparent version of one of your colors or shades, use:

`.bg--[color]-trans-[value]``.bg--[color]-[shade]-trans-[value]`

Every main color offers transparent versions. Additionally, you can access transparencies of light, dark, and ultra-dark shades.

Example:

```xml
<div class="bg--action-trans-20"></div>
```

```xml
<div class="bg--action-ultra-dark-trans-20"></div>
```

Transparency values range from 10 to 90 in increments of 10.

## What about background patterns and gradients?

ACSS supports custom backgrounds, gradients, and overlays via our Textures & Overlays feature.

