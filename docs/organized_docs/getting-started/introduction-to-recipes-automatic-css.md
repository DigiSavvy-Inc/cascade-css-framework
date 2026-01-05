---
source: https://automaticcss.com/docs/recipes/
---

# Introduction to Recipes - Automatic.css

Category: Recipes

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Introduction to Recipes

Recipes are a new feature in ACSS v3.0. They’re a very powerful new part of our variable expansion and validation system.

## What’s a Recipe?

A Recipe is a block of CSS that you can use wherever needed. It works similar to how a SCSS mixin works, but instead of just referencing the block of CSS, the Recipe functionality fully exposes the underlying code.

For example, let’s say you want to turn a big block of paragraphs into a multi-column layout. In ACSS, you could do this with our Columns utilities. The downside is that you need to use utility classes, which aren’t always appropriate.

Columns functionality is not something that can be mapped to a CSS variable, so there was no other option for creating columns without writing the CSS yourself, prior to Recipes.

With Recipes, you simply open the rich text element that houses your paragraphs, create a class if you want to assign the Recipe to a class, and then type “@” plus the name of the recipe:

![ACSS recipe](https://automaticcss.com/wp-content/uploads/acss-recipe-923x1024.jpg)Calling a Recipe in ACSS
Close the line with “;” just as you normally would and the Recipe will appear instantly:

![ACSS Recipe Expanded](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='922'%20height='1024'%20viewBox='0%200%20922%201024'%3E%3C/svg%3E)![ACSS Recipe Expanded](https://automaticcss.com/wp-content/uploads/acss-recipe-expanded-922x1024.jpg)Expanded version of a Recipe in ACSS
Some recipes are very simple and some are complex. It just depends on the utility that you happen to be expanding.

## Using Recipes in Input Fields

Some Recipes are simply the exposed value of a specific variable and can be used as single values in input fields. For example, you can expose all the partials for a color with the Recipe “`@[color-name]-clr`.”

Let’s say you want to create a custom transparency or use a tweaked version of an existing color within the ACSS system. Prior to 3.0, you’d have to write your own HSL string manually using color partials:

```javascript
hsl(var(--action-h) var(--action-s) var(--action-l) / 1)
```

But, with ACSS Recipes, all you have to type is “`@action-clr.`“

Once you type `@action-clr` and hit Enter, the Recipe instantly expands into the full HSL string. Now you can simply change the transparency value, any of the H, S, or L values, or even calc part of the HSL.

Since the HSL uses variable partials, whatever part of the string you don’t edit remains fully hooked into the ACSS system for maximum maintainability.

## Recipes & Stylesheet Efficiency

For users who want to turn off sets of utility classes, Recipes can be a great way to continue accessing the functionality of those utilities on a case-by-case basis.

Using our example above, you could turn off “Columns” classes in ACSS, which removes all the columns utilities from the stylesheet (making your stylesheet lighter). If you need columns on your project, you cans simply use `@columns` to get the functionality wherever its needed without having to load all the columns utilities.

## The future of Recipes

ACSS 3.0 ships with some initial Recipes for popular non-variable-driven utilities (columns, masonry, clickable parent, focus parent, flex-grid, color expansion, and more). We’ll quickly expand Recipes functionality to all utilities that will provide great value to the user.

In addition to pre-configured Recipes provided by the framework, we have plans to allow for custom Recipes and Recipe-sharing. You’ll be able to write and save your own Recipes and import/export those recipes between sites. You can also share Recipes or groups of Recipes with other users (in the future).

Recipes introduce a big leap forward in workflow efficiency that we’re proud to bring to the ACSS ecosystem.

