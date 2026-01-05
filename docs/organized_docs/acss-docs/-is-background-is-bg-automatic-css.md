---
source: https://automaticcss.com/docs/is-background-is-bg/
---

# “Is Background” (.is-bg) - Automatic.css

Category: Backgrounds

[Back to Docs](https://automaticcss.com/docs)### Navigation

# “Is Background” (.is-bg)

3.2.10

It’s a very common requirement in web design to take an element and place it in the background. Or, more commonly, as the background.

Doing this requires specific CSS on the element in question as well as CSS changes to the direct parent of the element.

In Automatic.css, it’s achieved with one simple utility class: .is-bg.

## Making a real image a background image

Advanced developers often want to use real images as background images instead of using the CSS background-image property. This is because real images have a number of advantages: they’re indexable, they’re compatible with lazy load, they can have alt tags, they’re compatible with src-set, you can make use of the <picture> tag, and so on.

To make a real image a background image with ACSS, add an image element to the page (often in a section), and then add .is-bg to the image.

That’s all there is to it.

Now you can add additional classes to the image, like overlay classes, object-position classes, flip classes, opacity classes, etc.

## Make any box a background

.is-bg is compatible with almost any element. This means you can take a blank box and make it a background. Then you can style the box however you’d like.

If you add a blank box with .is-bg immediately after your image that’s also using .is-bg, the box will act as an overlay on that image. You can actually stack layers indefinitely like this.

## How .is-bg works

The utility works by positioning the element absolutely, forcing its dimensions to match the exact dimensions of its parent, and setting the z-index to -2 for infinite layering without affecting content or other features like overlay which occupy the -1 layer.

It also identifies the direct parent, sets the position to relative and creates a new stacking context using isolation.

All values for .is-bg are tokenized, with the real values being added as fallbacks. This means you can interact-with and easily override any of the .is-bg tokens:

Yes, this means you can also get creative with how your background elements behave/appear/animate.

