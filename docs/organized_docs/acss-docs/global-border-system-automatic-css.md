---
source: https://automaticcss.com/docs/global-border-system/
---

# Global Border System - Automatic.css

Category: Borders & Dividers

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Global Border System

Borders in web design are elements of design that tend to be consistent throughout an entire website. For this reason, ACSS features a global border system to establish:

Let’s take a look at how all this comes together and gets used throughout your website.

## Global Border Radius

What you need to know: Use var(--radius) whenever you need to create border radius.

It’s uncommon to use different radius values throughout a website (with one exception). Therefore, we should have a single radius token that stores our primary radius value.

ACSS uses var(--radius) for this.

The exception is with a concept called concentric radius. Unfortunately, concentric radius values can’t be mapped to a single variable since they’re heavily dependent on context and knowing the values of local elements.

For this reason, we’ve introduced @recipes for creating concentric radii.

Note: If your website’s design does not use border radius anywhere, set this global value to “0.”

## Auto Radius

You can automatically add your site’s default radius to elements programmatically by turning on the “Add Radius Automatically” switch and targeting specific CSS selectors.

![ACSS Auto Radius Option](https://automaticcss.com/wp-content/uploads/auto-radius-option.jpg)ACSS Auto Radius Option
By default, we add radius to img (image) and figure elements that don’t contain images. You can add any other selectors here that you’d like. Just make sure to wrap each selector in quotes and comma-separate them.

## Global Border Styling

What you need to know: Use var(--border), var(--border-light), or var(--border-dark) whenever you need to add border.

Aside from border radius, creating a global border style involves three properties:

ACSS allows you to set all three of these from the dashboard with color having both light and dark variations.

These properties combine together in a global variable called var(–border). This allows you to add your global border style to any element like this:

```
.card {
  border: var(--border);
}
Code language: CSS (css)
```

The global border style is either light by default or dark by default, depending on what you choose in the dashboard. If you need the alternate version, you can simply call it with its own variable, like this:

```
.card {
  border: var(--border-light);
}
Code language: CSS (css)
```

You can also modify the border style per instance by modifying the tokens locally (should only be needed in rare cases):

```
.card {
  --border-width: 5px;
  --border-style: dashed;
  border: var(--border);
}
Code language: CSS (css)
```

## Global Border Style + Global Radius

Keep in mind that border-radius is not part of the shorthand border property, so it’s not included in var(--border). In order to get an element to have both the global radius and your global border style, you need to declare both, like this:

```
.card {
  border: var(--border);
  border-radius: var(--radius);
}
Code language: CSS (css)
```

## Border Classes

ACSS 3.0 introduces three classes for applying border styles:

- `.border`
- `.border--dark`
- `.border--light`

Unlike var(--border), the border classes do apply both the global border style and global border radius at the same time. There’s also a standalone .radius class for applying your global border radius.

