---
source: https://automaticcss.com/docs/how-to-use-a-utility-class/
---

# How to Use a Utility Class - Automatic.css

Category: Fundamentals

[Back to Docs](https://automaticcss.com/docs)### Navigation

# How to Use a Utility Class

Using a utility class is relatively simple and straightforward, but there are two pre-requisites:

## Applying Utility Classes Directly to Elements

In many cases, you’ll be applying a utility class directly to an element. For example, to add padding to a div, you simply add a padding class directly to the div.

.pad–m would give you medium padding inside the div.

If you want to change the padding on the div, you’d remove the .pad–m class and use a different padding class. .pad–l would give you larger padding and .pad–s would give you smaller padding.

## Applying Utility Classes to a Parent Container

Sometimes, you can – or need to – add the utility classes to a parent container.

For example, the .grid– classes get applied to a div or a section in order to position the child elements in the grid.

Another example would be .text– classes such as .text–white. When applied to a parent container, all text in that container will become white. You don’t have to put the .text–white class on every single item of text inside the container individually.

## Using Utility Classes as Overrides

You can use utility classes to override other styles. For example, if you want an H2 to be smaller, you can apply text size classes such as .text–l or .text–m to change its size.

.text–l makes an H2 smaller because the H2 size in the hierarchy corresponds with the “XL” size. H1 is the “XXL” size. “L” is obviously smaller than both of those.While there’s a little bit of a learning curve, it only takes a few days of practice before you’re blazing through site creation using utility classes.

## Stacking Utility Classes

You often need to use more than one utility class to accomplish your design goals as utility classes are very specific by design.

Because of the way classes work in CSS, you can easily stack multiple classes onto the same element.

To create a card, for example, you would start with a div and then you’d add multiple utility classes to that same div to create the desired style.

If you wanted to have a card with medium padding, medium border radius, a base background color and white text, you’d add all the following to the div:

`.pad--m` `.rounded--m` `.bg--base` `.text--white`

It doesn’t matter what order you add the classes in as they’re interchangeable.

## Situations to Avoid

One thing you want to avoid doing is stacking classes that try to accomplish the same thing.

For example, if you add `.pad--m` to get medium padding but then decide you want large padding, you shouldn’t stack the `.pad--l` class on the same element. Instead, you should add `.pad--l` and then remove .`pad--m`.

While having both classes typically won’t break anything because one will just override the other, it’s extremely inefficient and technically incorrect.

