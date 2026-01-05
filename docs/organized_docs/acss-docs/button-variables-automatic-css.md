---
source: https://automaticcss.com/docs/button-variables/
---

# Button Variables - Automatic.css

Category: Buttons & Links

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Button Variables

There may be times when you want to design your own custom button, but you still want to use specific values from ACSS’s global button settings. If this is the case, you can use button variables.

The following button variables can be changed at any time with custom styling:

## Deprecated Button Variables

The following variables are still loaded in the framework but are considered officially deprecated. You should stop using them on future projects and start using the new variables above.

## Example custom button

Let’s say we want to create a button that shares all the same general styling as our default buttons but has a gradient background instead of a solid background:

```css
.gradient-button {
  background: linear-gradient(var(--action-medium), var(--action));
  padding: var(--btn-padding-block) var(--btn-padding-inline);
  font-size: var(--btn-font-size);
  line-height: var(--btn-line-height);
  letter-spacing: var(--btn-letter-spacing);
  border-width: var(--btn-border-width);
  border-style: var(--btn-border-style);
  border-radius: var(--btn-border-radius);
  border-color: transparent;
  font-weight: var(--btn-font-weight);
  text-decoration: var(--btn-text-decoration);
  font-style: var(--btn-font-style);
  text-transform: var(--btn-text-transform);
  min-inline-size: var(--btn-min-width);
  transition: background var(--btn-transition-duration) ease-in-out;
}
```

Now you have a custom gradient button that will still inherit any changes you make to your global button styles in the ACSS dashboard.

Additionally, if you’re using SCSS, you can use our button mixin to apply all the default styles in one line automatically.

