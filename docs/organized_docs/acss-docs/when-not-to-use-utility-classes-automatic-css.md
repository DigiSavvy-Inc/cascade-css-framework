---
source: https://automaticcss.com/docs/when-not-to-use-utility-classes/
---

# When Not to Use Utility Classes - Automatic.css

Category: Fundamentals

[Back to Docs](https://automaticcss.com/docs)### Navigation

# When Not to Use Utility Classes

It’s important to understand that Automatic.css is ***NOT*** a “utility-first framework.”

When a framework is “utility-first” it means that you’re supposed to use utility classes for pretty much everything. You’re not creating custom classes and you’re not writing any CSS. That’s the goal anyway.

Automatic.css rejects a utility-first philosophy because a utility-first approach is not scalable or future proof in a page builder scenario.

If you are custom coding a website, scalability and future proofing are less of an issue because you have more flexibility in how code can be duplicated, repeated, and component-ized.

When using page builders, however, utility-first is a disaster.

## An Example of a Big Problem With Utility Classes…

Let’s say you create product card with an image, heading, description, price, and a few other elements. It could take two dozen or more utility classes to create a single card if you’re purely using utility classes.

Now, you duplicate that card 8 more times to create a product grid. And you use that same grid on 5 other pages of your site. What do you do when the card design needs to change?

When you use utility classes exclusively, you lose global control over re-usable components. There’s no “source of truth” for the component’s styling.

## A General Rule of Thumb…

If you’re creating something on a page that is going to be used again, either on that page or on other pages, then you shouldn’t use utility classes.

Instead, you should create custom classes and you should create them using an organized naming convention. We recommend the BEM method:

Here’s a critical detail: With most utility frameworks, you’d need to abandon the framework at this point and just use completely custom styling.

With Automatic.css, though, you don’t have to abandon the framework. Nor should you!

This is exactly where ACSS variables come into play. By creating custom classes that leverage ACSS variables, you can create global components that are responsive and perfectly match the rest of your site’s styling.

With ACSS, you get the best of both worlds: the consistency of a framework and the global control of custom classes!

