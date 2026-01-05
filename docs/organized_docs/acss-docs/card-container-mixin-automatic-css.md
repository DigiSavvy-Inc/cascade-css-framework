---
source: https://automaticcss.com/docs/card-container-mixin/
---

# Card Container Mixin - Automatic.css

Category: Cards, Mixins

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Card Container Mixin

Note: Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

The Card Container Mixin is used for applying container query styles to any card in the Card Framework.

## Example

```
.your-card {
  @include card-container("inline-size > 767px") {
      // Your styles here
  }
}
Code language: PHP (php)
```

Make sure the following are true in order for this mixin to work:

If you run into specificity issues that are causing your container query styles to not work, you can use the double selector trick to increase the specificity:

```
.your-card.your-card {
  @include card-container("inline-size > 767px") {
      // Your styles here
  }
}
Code language: PHP (php)
```

In many page builder scenarios, it might be better to use the Card Container Recipe instead of this mixin, since you’ll be able to keep all your CSS attached to the actual card element.

