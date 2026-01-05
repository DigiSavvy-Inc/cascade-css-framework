---
source: https://automaticcss.com/docs/variables/?s
---

# Variables: The Real Power of ACSS - Automatic.css

Category: Fundamentals

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Variables: The Real Power of ACSS

Variables, or “custom properties” in CSS, are the modern standard for assigning values. Variables make web development more efficient, consistent, and maintainable.

ACSS was one of the first utility frameworks to encourage using variables while giving users an entire library of variables that perfectly map to utility classes. And really, ACSS variables are the most potent aspect of Automatic.css.

## How variables work

A variable in CSS is just a token, or placeholder, for a value.

Here’s a typical scenario where you need to set the background color of a card:

```css
.my-card {
   background-color: #08001F;
}
```

That color isn’t random. It is a dark color commonly used across many parts of our example website, which means it’s referenced over and over again.

Using the hex code is undesirable because:

It’s better to use a variable here because a variable solves all these common challenges.

```css
.my-card {
   background-color: var(--base-dark);
}
```

`--base-dark` is the variable, but it must be wrapped in a `var()` function to use it.

At first, this takes a little getting used to, but the learning curve is relatively flat. After a few times, it’ll become second nature.

## How do variables get their values?

Values are assigned to variables in one of two places:

In Automatic.css, all variables are defined for you at the `:root` level making them available site-wide by default. They map to all of your chosen values in the ACSS dashboard. There are variables for colors, font sizes, border radius, spacing, and more.

Open the cheat sheet and filter the utility type to “variable” to see all available variables.

## How & when to use a variable in ACSS

Variables should be used when you create a custom class for an element. This is common in situations where you want to maintain global control over an element’s styling. Thus you don’t want to use utility classes.

Here’s a great video that will help you understand when to use utility classes vs custom classes:

When using a custom class, it means you will assign values for different CSS properties manually. For example, we need to define padding for our example card above.

```css
.my-card {
   background-color: var(--base-dark);
   padding: var(--space-l);
}
```

We could very easily choose a random value for our spacing (e.g. 3em), but then we’d lose many benefits of the ACSS variable, namely consistency and automatic responsiveness.

## Overriding variables with local values

A key benefit of using global variables is that you can change the variable’s value at any time and it’ll apply everywhere that variable has been used. There’s another benefit, though – the ability to override a variable’s value in specific places.

Let’s say that “my-card” is being used in a specific place where we want to change its text color and background color.

Here’s the code we have our card so far:

```css
.my-card {
   background-color: var(--base-dark);
   color: var(--white);
   padding: var(--space-l);
}
```

All we need to do is give our tokens new values. We just have to do this within a specific context, like when there’s a specific data attribute present:

```css
[data-theme-style="secondary"] .my-card {
   --base-dark: var(--secondary);
   --white: var(--secondary-ultra-dark);
}
```

This would change the value of `--base-dark` to whatever the value of our `--secondary` color is. And it would change the text color from `--white` to whatever the value of `--secondary-ultra-dark` is.

You could also do this with a modifier class:

```css
.my-card--secondary {
   --base-dark: var(--secondary);
   --white: var(--secondary-ultra-dark);
}
```

You could also do it to a single card by applying this technique at the ID level:

```css
#my-card-3125 {
   --base-dark: var(--secondary);
   --white: var(--secondary-ultra-dark);
}
```

The point is that variables have additional superpowers where static values do not.

