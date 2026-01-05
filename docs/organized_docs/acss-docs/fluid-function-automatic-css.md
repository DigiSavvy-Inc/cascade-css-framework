---
source: https://automaticcss.com/docs/fluid-function/
---

# fluid() Function - Automatic.css

Category: Functions

[Back to Docs](https://automaticcss.com/docs)### Navigation

# fluid() Function

Note: Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

ACSS users can generate custom clamp functions on the fly without the need for a third-party clamp generator. Fluid() allows you to define the minimum and the maximum pixel values while automatically calculating the middle value for you based on your website’s content width and root font size.

Since this is a SCSS function, it can only be used in the custom SCSS area of the ACSS dashboard or ACSS dashboard input fields. However, you can assign the value of the function to a custom property that can then be used anywhere.

## Example: Creating a Custom Property

Let’s say you want to define a new custom font size like --h1-hero. Open the custom SCSS area of ACSS and do this:

```
:root {
  --h1-hero: #{fluid(28,60)};
}
Code language: CSS (css)
```

Define your new custom property within :root{} and set the value to the function. Since you’re in :root{}, you must interpolate the function with #{}.

You can do the same thing for custom spacing variables or anything that requires a custom clamp() function.

## Example: Creating a Custom Utility Class

If you just want to use the fluid() function within a new utility class, you can do so without interpolation because functions work out of the box when you’re using them outside of :root.

Here’s an example of how to make a custom gap utility class:

```
.gap--3xl {
  gap: fluid(60, 80);
}
Code language: CSS (css)
```

You just have to figure out whether this is truly the best approach for your use case. If you made a new variable called --space-3xl using the process outlined in section one, you could then use that new custom property for many things: gap, padding, margin, etc.

It’s a good idea to avoid repeating the same fluid() function over and over again. If you’re going to need the same function more than once, consider mapping it to a custom property as we discussed earlier.

