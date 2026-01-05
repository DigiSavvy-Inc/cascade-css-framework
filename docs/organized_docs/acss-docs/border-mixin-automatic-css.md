---
source: https://automaticcss.com/docs/border-mixin/
---

# Border Mixin - Automatic.css

Category: Mixins

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Border Mixin

3.2.10Note: Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

The border mixin can be used to add the global border style to any element via a custom selector. It has a few arguments that will customize its output.

```php
@include border($style, $position, $radius);
```

For this mixin, `$style` is automatically set to the main border style of the site; `$position` is automatically set to `null`, which outputs no position, which defaults to adding borders to all sides; and `$radius` defaults to the website’s default radius, `var(--radius)`.

Given the defaults, the `border()` mixin can be used out of the box without passing any arguments:

```php
.my-element {
  @include border();
}
```

This will add the global border style to `.my-element`.

Here’s an example where each argument is customized:

```php
.my-element {
  @include border(light, block-start, var(--radius-l));
}
```

This will add the light border style to the top of the element (block-start) with a large radius.

If you want to customize one of the arguments while leaving the others as default, you can call the argument by name:

.my-element {  @include border($radius: no);}

This adds the global border style code, but leaves out the radius declaration.

