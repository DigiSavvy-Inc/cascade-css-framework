---
source: https://automaticcss.com/docs/section-spacing-variables/
---

# Section Spacing Variables - Automatic.css

Category: Spacing

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Section Spacing Variables

Section Spacing Variables are variables you can use to change the block padding of section elements or to assign your website’s gutter value to a top level container.

By default, ACSS generates section spacing variables across all t-shirt sizes following the syntax `var(--section-space-{size})` along with a `var(--gutter)` variable.

Remember, “M” (medium) section spacing is added by default to top level section elements. And, generally, section padding classes are the best way to adjust the spacing values of a section, but if you want to create a custom section class and assign custom values to it, this is a good use case for Section Spacing Variables.

In the below example, we’re going to create a .hero class that’s going to set all our “Hero” sections to XL block padding.

```css
.hero {
  padding-block: var(--section-space-xl);
}
```

If you ever need “tweener” sizes or micro-adjustments, you can use a `calc()` function. In the example below, we’re choosing “L” for our section spacing value, but making it 10% bigger.

```css
.hero {
  padding-block: calc(var(--section-space-l) * 1.1);
}
```

As a final example, the code below demonstrates how we can use a <div> as a section without having to semantically make it a section:

```xml
<section>...</section>
<section>...</section>
<div class="ad-container">...</div>
<section>...</section>

.ad-container {
  padding-block: var(--section-space-m);
  padding-inline: var(--gutter);
}
```

Since the Ad Container sin’t a `<section>` element, it doesn’t get section spacing by default. But, we can easily assign it to have default section spacing using the Section Spacing variables.

Recommended: Read more about regular spacing variables here, where we go into more detail on advanced use cases.

