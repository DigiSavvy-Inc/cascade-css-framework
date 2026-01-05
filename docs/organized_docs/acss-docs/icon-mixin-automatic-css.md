---
source: https://automaticcss.com/docs/icon-mixin/
---

# Icon Mixin - Automatic.css

Category: Icons, Mixins

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Icon Mixin

3.2Note: Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

You can apply Icon Framework styling to any icon using the Icon Mixin.

The syntax for the icon mixin is icon($style, $box-style) with both $style and $box-style being optional arguments*.

Here’s an example of the most basic use of the mixin, which will apply whatever your default icon style is.

```
.my-icon {
  @include icon;
}
Code language: PHP (php)
```

If you need to call a specific style, you can do that like this:

```
.my-icon {
  @include icon(dark);
}
Code language: PHP (php)
```

This will apply the dark icon style. Acceptable values are light or dark.

Lastly, you can also control whether the boxed icon styles will apply or not:

```
.my-icon {
  @include icon(dark, off);
}
Code language: PHP (php)
```

The acceptable values for $box-style are box (sets style to boxed) or any value not equal to “box.” If the value is anything other than “box” then the boxed styles will not be applied.

Additionally, it’s important to remember that arguments are answered in order and you can’t answer a second argument without answering a first argument.

This is invalid:

```
.my-icon {
  @include icon(box);
}
Code language: PHP (php)
```

* The $style argument is only optional when not answering the $box-style argument.

Additionally, you should keep in mind that the best scenario for overriding the box styling is when you have boxed icons set as the default and you need a specific icon or group of icons to not have boxed styling.

If boxed icon styling is set to off by default, calling it with the mixin won’t work out of the box because ACSS doesn’t load variables or code for features that are turned off. You would need to add these things by hand to make this work.

