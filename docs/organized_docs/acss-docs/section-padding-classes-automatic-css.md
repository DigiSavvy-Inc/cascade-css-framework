---
source: https://automaticcss.com/docs/section-padding-classes/
---

# Section Padding Classes - Automatic.css

Category: Spacing

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Section Padding Classes

Section padding tends to be a very misunderstood thing in web design. There are multiple ways to accomplish the same thing, and nobody has really set a standard for how things should be done.

At Automatic.css, we’ve been advocating for a standard for section structure and spacing practices based on the methods that have the most pros and the least cons.

Here’s a video that discusses proper section fundamentals:

Best practices suggest the following:

Automatic.css is designed with these best practices in mind.

## Default Section Padding

Make sure you read about Section Spacing Setup.

Also note that “M” section spacing is added to top level section elements by default. This can easily be overridden on a per-section basis using Section Padding Classes.

## Section Padding Classes

It’s common to need to adjust the block padding in sections to create more or less white space. Knowing this, we’ve created utility classes specifically for doing this.

The naming convention for these classes is `.section--{size}`.

All of the typical t-shirt sizes are available (XS to XXL)

Section padding classes are unique in that they don’t apply padding equally to all sides. They’re designed to maintain a consistent inline gutter while only adjusting the section’s block padding.

It should be noted that ACSS is one of the only frameworks to offer a utility like this. Other frameworks require you to use separate padding-top and padding-bottom classes that are not specifically related to sections. Not only does this require you to use extra classes on each section, but it also creates a disconnect, making it impossible for you to tighten or loosen your section spacing globally.

## Section Spacing & Pro Mode

Since section padding classes are so important and useful and unique to each section, they stay active when Pro Mode is activated. They’re an example of a utility class that we still recommend using even when Pro Mode is active.

## “Tweener” Sizes

It can be common to want an in-between size on occasion. You don’t necessarily need to create a new custom utility for this. Instead, you can calc an existing utility.

## Can I create custom section spacing classes?

Yes, you can quickly and easily create custom section spacing classes using the fluid() function. Or you can simply use a `calc()`.

