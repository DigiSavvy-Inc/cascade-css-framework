---
source: https://automaticcss.com/docs/button-mixins/
---

# Button Mixins - Automatic.css

Category: Buttons & Links, Mixins

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Button Mixins

Note: Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

It’s common to use 3rd party plugins on WordPress websites or run into scenarios where you need to apply button styling to specific elements that you can’t necessary apply a button class to.

Some of these plugins, like e-commerce plugins, form plugins, etc. contain buttons that need to match the style of all your other buttons. This is a perfect use case for a button mixin.

Note: Button mixins are part of ACSS’ SCSS structure, so they can’t be used in regular CSS fields. You’ll need to use the mixin in the Custom SCSS area of the ACSS dashboard.

## `btn()`

The main button mixin in ACSS is the `btn()` mixin. This mixin allows you to attach any ACSS button style to any link/button element you’d like. You can use it like this:

```php
.target-button-element {
  @include btn(primary);
}
```

The above code will make `.target-button-element` exactly match your website’s primary button style.

### Available Styles

You can replace “primary” in the above example with any valid ACSS button style:

Note: To use the `.btn--outline` versions, you’ll need to wrap the entire style name in quotes, like this:

```php
.target-button-element {
  @include btn("primary.btn--outline");
}
```

## Dealing With Specificity Issues

In the above example, `.target-button-element` could be an element that already has styles applied to it. If these styles contain greater specificity than your CSS instructions, or are placed in a stylesheet that comes after ACSS’ custom CSS, the mixin won’t work unless you increase specificity.

One way you can increase specificity without actually altering HTML is to double-reference the selector, like this:

```php
.target-button-element.target-button-element {
  @include btn("primary.btn--outline");
}
```

Another way you can increase specificity is to use a page builder’s html/body/main ID (if one exists) to start your CSS declaration. For example, Bricks uses an ID on their main tag, so you can use it to increase specificity without altering HTML, like this:

```php
#brx-content .target-button-element {
  @include btn("primary.btn--outline");
}
```

If the mixin isn’t working for some reason, or is partially working, you’ll need to calculate the specificity of the default styles you’re trying to override, and then produce higher specificity with your mixin targeting.

