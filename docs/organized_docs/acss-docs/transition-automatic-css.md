---
source: https://automaticcss.com/docs/transition/
---

# Transition - Automatic.css

Category: Buttons & Links

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Transition

It’s common for clickable and hoverable elements to have transition styling. It’s also common for clickable and hoverable elements to share transition styling for consistency purposes.

Given this fact, ACSS offers a global transition style which maps to two main utilities: `var(--transition)` and `.transition`.

For buttons and links, these utilities aren’t necessary because ACSS applies your global transition settings to by default (override available).

For other elements, though, you’ll need to apply the transition yourself. Here’s how you can use the transition variable for a hoverable/clickable card:

```css
.my-card {
  background-color: var(--bg-light);
  color: var(--text-dark);
  padding: var(--space-l);
  transition: var(--transition);
}
```

You could also just add `.transition` to the card, but that’s less efficient than using the variable on your custom class.

## How the Transition Utilities Work

The global transition style is set with multiple inputs in the dashboard. Three of the inputs are for your main transition properties:

![](https://automaticcss.com/wp-content/uploads/CleanShot-2024-04-02-at-20.58.22@2x-1024x919.png)

These three inputs map to corresponding variables:

The fourth input is for assembling the actual transition. You do this by listing the properties you want to transition (e.g. `color`, `background`, `border`, etc.), followed by the references to each of the above properties. Each segment should be comma-separated.

Remember: The ACSS dashboard doesn’t require the use of `var()` and will strip all instances of `var()`. Therefore, just use the variable stems.

If you only want to transition the background property, it would look like this:

```
background --transition-duration --transition-timing --transition-delay
```

If you need to transition more than one property, use comma-separated values:

```
background --transition-duration --transition-timing --transition-delay,
color --transition-duration --transition-timing --transition-delay,
border --transition-duration --transition-timing --transition-delay
```

Warning: The use of “all” is not recommended. While this is easier to write and manage, it can create performance issues.

## Custom Transitions That Leverage Global Transition Properties

You’re not limited to using `.transition` and `var(--transition)`. If you want to set a custom transition style on an element, but reference specific global transition properties, you can easily do this.

```css
.my-card {
  background-color: var(--bg-light);
  color: var(--text-dark);
  padding: var(--space-l);
  transition: background .7s ease .2s, color var(--transition-duration) var(--transition-timing), border .1s ease-in .3s;
}
```

In the above example, we’re creating a custom transition with custom values, but referencing global transition values where desired.

You can also redefine the `var(--transition)` variable on any element. This allows you to override programmatic transition styling for a specific element.

Let’s say you have a loop of clickable cards that are all using `var(--transition)` and you want to set a completely different transition style on all even cards. Here’s how you can do this.

```css
.my-card:nth-child(2) {
  --transition: all .8s ease 0s;
}
```

And, don’t forget, you can calc stuff, too:

```css
.my-card:nth-child(2) {
  --transition: all calc(var(--transition-duration) * 2) ease calc(var(--transition-delay) * 2);
}
```

It’s pretty flexible!

## Removing Global Transition

![ACSS Transition set to none](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='570'%20viewBox='0%200%201024%20570'%3E%3C/svg%3E)![ACSS Transition set to none](https://automaticcss.com/wp-content/uploads/acss-transition-none-1024x570.png)
If, for some reason, you don’t want any transition on elements, you can set the “Transition (Global)” input value to `none`.

