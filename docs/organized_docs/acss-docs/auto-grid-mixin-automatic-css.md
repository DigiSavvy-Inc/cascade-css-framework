---
source: https://automaticcss.com/docs/auto-grid-mixin/
---

# Auto Grid Mixin - Automatic.css

Category: Grids, Mixins

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Auto Grid Mixin

Note: Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

The auto-grid() mixin is useful for assigning auto grid (automatically responsive grid) structures to custom classes or containers.

Here’s the full mixin with all available arguments:

auto-grid($column-count, $min, $flow, $force-even-column-count);

The only required argument is $column-count, so it’s super easy to use. To get started, use the mixin with any selector like this:

```
.my-grid {
  @include auto-grid(4);
}
Code language: PHP (php)
```

The number in parenthesis is the number of desired columns.

## Additional Arguments

The auto grid mixin has additional options, passed as arguments in the parenthesis. Here’s an explanation of each argument:

## Passing Arguments

You can pass arguments in any order as long as you call them by name. Here’s a sample use:

```
.my-grid {
  @include auto-grid(4, $flow: auto-fill, $force-even-column-count: true);
}
Code language: PHP (php)
```

Since $column-count is the first argument, you can put the value without naming the argument. The others should be named explicitly.

