---
source: https://automaticcss.com/docs/smart-spacing/
---

# Smart Spacing - Automatic.css

Category: Spacing

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Smart Spacing

Smart Spacing is a feature unique to Automatic.css and is easily one of the most impactful features in the framework as it helps you achieve even spacing within containers on the pages you’re building while simultaneously applying automatic spacing for rich text content, blog posts, and other content with limited styling controls.

## How Smart Spacing works

It’s common in modern web design to want even spacing between elements in a container. The most common method for achieving this is with the gap property.

Unfortunately, even spacing with gap can be difficult to achieve because certain elements, like headings, paragraphs, lists, and list items, often have default margins added by either the page builder or the user agent stylesheet.

The result is an even gap between elements but an unbalanced result thanks to the default margins.

Smart Spacing removes the default margin from headings, paragraphs, lists, and list items, allowing you to use gap to space your content evenly. This gives you full control over your spacing in every container as well as the ability to achieve perfectly even spacing.

But, that’s not all that Smart Spacing does.

Once the default spacing is removed, Smart Spacing then decides where the default spacing should *actually* be applied (rather than applying it to all these elements by default) and uses your preferred spacing values to do it (via the ACSS dashboard).

Here’s a rundown of where Smart Spacing values are applied:

Furthermore, when the default spacing is re-applied, it’s only applied to matching elements (headings, paragraphs, lists, and list items) that have adjacent siblings.

This ensures that spacing is only applied when needed and that extra spacing above a first child or below a last child never occurs.

One huge benefit of Smart Spacing is that you can space blog post content without custom CSS. Most page builders have a “post content” element that pulls in content from the Gutenberg editor, but these modules rarely have individualized controls for heading, paragraph, list, and list item spacing. With Smart Spacing, you have automatic control over the spacing of these elements from the ACSS dashboard.

## How to use Smart Spacing

![Smart Spacing Panel](https://automaticcss.com/wp-content/uploads/smart-spacing-1024x1024.jpg)Smart Spacing Panel
First, turn on Smart Spacing in the Spacing > Smart Spacing dashboard.

Next, use gap within your typical page-building workflow to space out the content throughout your page evenly. Remember, your parent container needs to be set to Flex or Grid. Flex column is the most common approach.

That’s it! Smart spacing will zero out all default spacing so you can use gaps for page building and it’ll add intelligent spacing back to the areas specified earlier in this doc.

## Paragraph & List Spacing

A powerful benefit of Smart Spacing is the ability to control list spacing without writing custom CSS. Click on the “Text and Lists” tab to access the settings:

![Paragraph and List Spacing](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%3E%3C/svg%3E)![Paragraph and List Spacing](https://automaticcss.com/wp-content/uploads/CleanShot-2024-10-24-at-07.58.23@2x-1024x1024.jpg)Paragraph and List Spacing
You can set spacing for paragraphs, lists, list items, nested lists and list items, and list indentation.

Keep in mind that any input that says “(block)” accepts two values if desired. The first value would be the top value and the second value would be the bottom value.

## Other Spacing

Smart Spacing does more than text, lists, and headings. Click on the “Other” tab:

![Smart Spacing Other Tab](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%3E%3C/svg%3E)![Smart Spacing Other Tab](https://automaticcss.com/wp-content/uploads/CleanShot-2024-10-24-at-07.58.54@2x-1024x1024.jpg)Smart Spacing Other Tab
Here’s an overview of your options:

Notice that some of these, by default, simply reference your existing --paragraph-spacing.

## Why Isn’t Smart Spacing Applied to XYZ area?

To avoid being too heavy-handed, Smart Spacing is only applied to direct children of the target elements. If your layout has extra wrappers, it can interfere with the Smart Spacing Targeting.

For example, here’s a situation where Smart Spacing will be applied properly:

```
<div class="brxe-text">
  <h2>Heading</h2>
  <p>This is a paragraph.</p>
</div>
Code language: HTML, XML (xml)
```

Since the children are direct children of the div that’s being targeted by Smart Spacing, you’ll see the correct spacing.

But if the structure is similar to the structure below, Smart Spacing won’t work:

```
<div class="brxe-text">
  <div class="extra-wrapper">
    <h2>Heading</h2>
    <p>This is a paragraph.</p>
  </div>
</div>
Code language: HTML, XML (xml)
```

For whatever reason, this layout has an extra wrapper around the children. That wrapper will stop smart spacing from being applied.

There are two ways to fix this:

## The .smart-spacing utility class

If there’s ever a situation where smart spacing is not automatically applying adjacent-sibling margins where you think it’s supposed to (situations where you aren’t using gap), add the .smart-spacing utility class.

As we discussed above, this class must be placed on the direct parent of the children you want to space out.

In situations where you don’t have physical access to add this class to the proper element, you should use the following technique:

## Targeting Additional Selectors (Custom Smart Spacing Areas)

![Smart Spacing Additional Selectors](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%3E%3C/svg%3E)![Smart Spacing Additional Selectors](https://automaticcss.com/wp-content/uploads/smart-spacing-additional-1024x1024.jpg)Smart Spacing Additional Selectors
Let’s return to our previous example. We had a structure with an extra wrapper and the builder/shortcode/code block, etc. is not giving us physical access to use a utility class.

```
<div class="brxe-text">
  <div class="extra-wrapper">
    <h2>Heading</h2>
    <p>This is a paragraph.</p>
  </div>
</div>
Code language: HTML, XML (xml)
```

In this case, we’d want to grab the most appropriate selector and add it to ACSS’ “Target Additional Selectors” input. For the example above, you could do this two ways:

```
".extra-wrapper"
".brxe-text > div"
Code language: JSON / JSON with Comments (json)
```

The first selector just targets the .extra-wrapper selector. This will apply smart spacing to all .extra-wrapper elements.

The second selector targets all divs that are a direct child of .brxe-text. There’s no real right or wrong here, it just depends on the context, situation, and what you’re trying to achieve.

All you need to know is that all selectors must be wrapped in quotes, and comma separated in the input field.

## Avoiding Duplicate Margins

Since certain elements like figures, blockquotes, and lists have block spacing applied (top and bottom), this can result in duplicate margins. In this situation, the top margin of the next element combines with the bottom margin of the elements I just listed.

This is obviously undesirable. By default, Smart Spacing is programmed to remove these duplicate margins, but we do so in a way that’s visible and controllable by the user. “Avoid Duplicate Margins” allows you to see and manipulate the exact selectors where duplicate margins are being removed. Feel free to add or remove selectors as needed.

## Smart Spacing Variables

There are some cases where you might want to manually reference a smart spacing value. The following tokens are available for this:

## Selectively Disabling Smart Spacing

You can selectively disable smart spacing using the .smart-spacing--off utility class. This can be applied at the box level, section level, or even the page/template level.

Remember, doing this will remove ALL spacing, which assumes you’ll be using gaps to control spacing as the alternative approach.

