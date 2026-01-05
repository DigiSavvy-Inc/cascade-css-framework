---
source: https://automaticcss.com/docs/heading-text-style-mixins/
---

# Heading & Text Style Mixins - Automatic.css

Category: Mixins

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Heading & Text Style Mixins

Note: Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

Note: Mixins only work within the custom SCSS area of the ACSS dashboard.

## Heading Styles

You can apply any heading level’s global styles to a custom selector using `@heading-style();`

```php
.custom-heading {
  @include heading-style(h2);
}
```

This will attach all global heading styles as well as any styles specific to the heading level you reference, but will not output any properties that have a null value.

### Text Styles

You can apply any text level’s global styles to a custom selector using `@text-style();`

```php
.custom-text {
  @include text-style(l);
}
```

This will attach all global text styles as well as any styles specific to the text level you reference, but will not output any properties that have a null value.

