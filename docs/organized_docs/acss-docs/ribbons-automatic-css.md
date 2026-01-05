---
source: https://automaticcss.com/docs/ribbons/
---

# Ribbons - Automatic.css

Category: Elements

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Ribbons

Ribbon classes, variables, and data attributes are helpful utilities for quickly adding corner ribbons (and potentially other types of ribbons in the future) to elements on your site.

Ribbons are commonly used to visually mark specific types of elements, like cards, with additional information. For example, an “On sale” ribbon can mark e-commerce items as currently on sale.

## Adding Your First Ribbon

It’s easy to add a ribbon to any container.

That’s it! You’ve added your first ribbon.

## Customizing Your Ribbon

You can customize ribbon styles three ways:

Customization is done via the following locally scoped variables:

For reference, the default values for these are as follows:

To style a ribbon contextually, create a custom modifier class to identify it and then set its styling via locally scoped variables. You only need to add the variables you want to change. So if you like all the default ribbon styling but want to change the background color, text color, and shadow, you only need to alter those three variables:

```css
.ribbon--sale {
   --ribbon-background-color: var(--primary);
   --ribbon-text-color: var(--primary-ultra-light);
   --ribbon-shadow: 0 0 30px -3px var(--primary-ultra-dark-trans-20);
}
```

When adding your new “sale” ribbon, you’ll want to add the standard `.ribbon` class and your new `.ribbon--sale` class. This is the standard for how modifier classes work. One class adds base styling, and the modifier modifies the style.

## Dynamic Ribbons

Sometimes you need Ribbons that are added, styled, and positioned based on dynamic data. This is easily doable with ACSS ribbons.

To get started, add your text element along with the base `.ribbon` class. Instead of using static text, insert dynamic data from a custom field.

To position the ribbon, use our preconfigured data attribute. Add `data-ribbon-position` to your element and then use one of the positioning values:

You can use your own custom data attribute to dynamically style the ribbon based on custom field values or some other parameter. Follow the same process that you would follow when creating a custom ribbon class.

Here’s an example of our “on sale” ribbon styled using data attributes:

```css
[data-ribbon-style="sale"] {
   --ribbon-background-color: var(--primary);
   --ribbon-text-color: var(--primary-ultra-light);
   --ribbon-shadow: 0 0 30px -3px var(--primary-ultra-dark-trans-20);
}
```

You can create as many ribbon styles as you want and then trigger which one gets used by dynamically passing the style name to the data attribute value.

