---
source: https://automaticcss.com/docs/aspect-ratio-classes/
---

# Aspect Ratio Classes - Automatic.css

Category: Dimension

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Aspect Ratio Classes

ACSS’ Aspect Ratio classes empower you to change the aspect ratio of boxes, images, images in figure tags, and iframes on the fly.

The aspect-ratio CSS property allows you to define the desired width-to-height ratio of an element’s box. This means that even if the parent container or viewport size changes, the browser will adjust the element’s dimensions to maintain the specified width-to-height ratio. The specified aspect ratio is used in the calculation of auto sizes and some other layout functions.

[Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)
Simply add one of the following classes to an image or iframe to set the aspect ratio. By default, the object-fit of images will be set to cover to avoid warping the image.

## Changing aspect ratio at breakpoints

ACSS also provides breakpoint utilities for changing the aspect ratio at each breakpoint. All the same ratios are available via the provided convention: aspect--[breakpoint]-[ratio].

For example, .aspect--m-16-9 will change the aspect ratio to 16×9 at the “M” breakpoint.

## Troubleshooting Aspect Ratio

At least one of an element’s size declarations needs to be unset or automatic for aspect-ratio to have any effect. If neither the width nor height is an automatic or unset size, then the provided aspect ratio will do nothing.

There are also certain situations where the aspect ratio cannot be achieved due to the constraints of a parent container. If you’re having trouble getting aspect ratio classes to work, post in the support community so we can help you.

