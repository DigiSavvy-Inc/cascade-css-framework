---
source: https://automaticcss.com/docs/typography-variables/
---

# Typography Variables - Automatic.css

Category: Typography

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Typography Variables

All the typography properties you define in the ACSS dashboard are available as variables. This is extremely handy for two types of scenarios:

The following typography variables can be accessed or changed at any time with custom styling:

## The AutomaticCSS typography variables

## Font-size variables

The font size variables correspond to ACSS’s global typography system heading sizes and text sizes:

## Heading properties variables

The following variables are declared globally for all heading levels:

## Heading level-specific variables

If you choose to override your global heading properties on specific heading levels in the ACSS dashboard, the corresponding variables will be available.

Here are those variables for `h1`, but the same logic applies to other heading levels.

Note: specific heading levels have a variable for the max-width property, which isn’t available globally.

## Text properties variables

The following variables are declared globally for text across the site:

## Text size-specific variables

If you choose to override your global text properties on specific text sizes in the ACSS dashboard, the corresponding variables will be available.

Here are those variables for the “XL” text size, but the same logic applies to other text sizes.

## Examples of using typography variables

### Referencing a heading size

Let’s say we want to use a level 2 heading (`h2`), but with a font size only as tall as our regular level 4 headings (`h4`) — this happens in situations where semantic HTML and accessibility dictate we need to use an `h2`, but the design calls for a smaller size.

We could create a custom class, and reference the `--h2` variable as the font-size value:

```css
.my-special-heading {
  font-size: var(--h4);
}
```

Now apply that class on your `h2` heading, and you have a heading element that is only as tall as an `h4` heading, but keeps its semantic meaning.

This technique is demonstrated in the video dedicated to Typography in the ACSS 101 course, starting at 11:59:

### Referencing the headings font family

Let’s say we want to create a custom component that needs to use our headings font family despite not being a heading (this doesn’t happen in every project, but could come in handy).

While we could reference our font family statically, that’s not always handy, and it‘s not very maintainable: what happens if we were to change typefaces in the future? We’re not interested in the component using this specific font, we just want it to use what the headings typeface happens to be. It would be much better to be able to keep it in sync with the headings, rather than statically reference the font family.

Easy peasy, create a custom class, and reference the `--heading-font-family` variable as the font-family value:

```css
.my-custom-component {
  font-family: var(--heading-font-family);
}
```

### Creating a very custom heading style (advanced usage)

Let’s say we want to create a special heading style that needs to look extra fancy.

It will seldom be used on the site, just for a few special headings related to a extremely high-end offer our client wants to run. Think handwritten, luxurious, ever-so-slightly over the top.

To achieve that, we could create a class, and use the variables in multiple ways:

By proceeding this way, we can create a completely custom heading style, while still being tied into the framework.

```css
.fancy-heading {
  --heading-font-family: "Birthstone", cursive;
  --heading-color: var(--accent);  /* see color palette documentation */
  --heading-letter-spacing: 0.0125em;
  --heading-line-height: calc(6px + 2ex);
  font-size: var(--h1);
}
```

