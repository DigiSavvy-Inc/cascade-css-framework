---
source: https://automaticcss.com/docs/width-utilities/
---

# Width Utilities - Automatic.css

Category: Dimension

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Width Utilities

Width utilities control the width (inline-size) of elements.

Unlike most frameworks, width utilities are not mapped to percentages in ACSS. Rather, they’re a calculation based on your website’s Content Width. This is much more useful, since percentages cause complications with the responsive size of elements.

## 10-90 Width Classes (New)

The syntax for width classes is `.width--[value]` with the value being 10-90 in increments of 10.

The output for these width classes is:

```javascript
calc(var(--content-width) * .2)
```

As mentioned previously, this results in a fixed width calculation rather than a percent value. Since the `.width--` classes also set a max-inline size of 100%, they’re automatically responsive and won’t create overflow issues.

## XS-XXL Width Classes (Old)

Prior to v3.0, .width– classes followed our traditional t-shirt size syntax of XS-XXL.

For example, `.width--l` or `.width--s`.

These classes still exist in the framework and are still valid. We haven’t put them behind a deprecation flag because they contribute hardly anything to the overall stylesheet.

## Special Width Classes

ACSS contains the following special width classes that exist outside of the above syntaxes.

## Width Variables

All of the above utilities are available as variables using the syntax `var(--width-[value])`.

