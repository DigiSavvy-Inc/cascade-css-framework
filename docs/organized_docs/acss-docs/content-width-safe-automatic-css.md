---
source: https://automaticcss.com/docs/content-width-safe/
---

# Content Width (Safe) - Automatic.css

Category: Dimension

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Content Width (Safe)

You probably already know about the Content Width utilities in ACSS, but do you know about Content Width Safe? This utility references your website’s content width while simultaneously creating a gutter on smaller screens. It’s extremely handy!

## What’s a gutter?

A gutter is the inline padding that protects your content from touching the edge of the screen on smaller devices.

![Visualization of website gutter](https://automaticcss.com/wp-content/uploads/CleanShot-2023-08-14-at-22.19.07@2x-897x1024.jpg)
On advanced websites (and ACSS websites), the gutter is responsive. The larger the screen, the larger the gutter is (up to desktop, where the gutter no longer matters because the screen is much wider than the website’s content width).

Even though it’s responsive, it should be a referenceable value. Every section of your site should reference the gutter value to ensure that your gutter is equal throughout the site. A gutter that changes from section to section or element to element is a clear sign of amateur web design.

ACSS references the website’s gutter with `var(--section-space-x)`. This is because gutters are typically defined within the `section` element throughout a website, and the gutter is represented across the X-axis.

## What if there’s no gutter and I need a gutter?

There are two primary situations that you might find yourself in when it comes to needing a gutter and not having one:

In the first case, since you’re working in a section, a container will define your website’s content width for you. The problem is, the content will touch the edges of the screen on smaller devices. This is probably not desirable.

In the second case, you’re without a section, so you’re without a content-width container by default, and without a gutter as well. The standard Content Width utilities won’t help you here. While you can set something to content width, it’s still not going to have a gutter.

What you need is a utility that references your website’s content width while simultaneously, somehow, creating a gutter.

That’s exactly what `.content-width--safe` and `var(--content-width-safe)` do.

The variable `var(--content-width-safe)` does the first two of those, but you’ll need to do the third thing on your own. Here’s how it would look with CSS:

```css
.my-element {
   width: 100%;
   max-width: var(--content-width-safe);
   margin-inline: auto;
}
```

Notice once again that we’re using the variable with the `max-width` property. We want to avoid setting explicit widths for maximum responsiveness.

## When should I use content-width vs content-width–safe?

Good question!

It’s certainly not either-or. It’s not preference. These are tools designed for specific situations, so it’s important to know the situation you’re in.

If you need to make an element equal to your website’s content width, and you’re working within a parent element that has a physical gutter, just use the Content Width utilities.

If you need to make an element equal to your website’s content width, and you’re working within a parent element without a physical gutter, use the Content Width Safe utilities.

## Caution: Double Gutter

Make sure you don’t use the Content Width Safe utilities in a parent element that already establishes a gutter. This will result in a double gutter.

