---
source: https://automaticcss.com/docs/content-width/
---

# Content Width - Automatic.css

Category: Dimension

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Content Width

The content width of a website is defined as the width from the left edge of the content to the right edge of the content on a screen that’s large enough not to compress the content.

![website content width example](https://automaticcss.com/wp-content/uploads/CleanShot-2023-08-14-at-21.52.18@2x-1024x552.jpg)
The content width of your website is an important value. You’ll commonly want to set elements to the website’s content width, or to a value that’s somehow relative to the website’s content width.

You can easily do this in Automatic.css with two utilities: `.content-width` and `var(--content-width)`.

## Setting Your Website’s Content Width

Your website’s content width is set in the ACSS Viewport tab.

![ACSS Viewport Tab for Content Width](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='382'%20viewBox='0%200%201024%20382'%3E%3C/svg%3E)![ACSS Viewport Tab for Content Width](https://automaticcss.com/wp-content/uploads/CleanShot-2023-08-14-at-21.56.46@2x-1024x382.jpg)
The second value is the most important value. It’s the width of your content on desktop devices. This is the value that is referenced by the utilities.

Once you’ve set your website’s content width, you need to inform your page builder of this value. The best way of doing this is with var(–content-width). You don’t want to tell the page builder the same static value because this creates a potential disconnect should your content width ever change.

![Setting Content Width in Bricks](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='993'%20viewBox='0%200%201024%20993'%3E%3C/svg%3E)![Setting Content Width in Bricks](https://automaticcss.com/wp-content/uploads/CleanShot-2023-08-14-at-22.00.59@2x-1024x993.jpg)
If you set your content width in ACSS and then reference that value everywhere else with variables, you’re free to make changes to this value without anything breaking.

## The Content Width Utility Class

Any time you need to set an element’s width to your website’s content width, you can use the `.content-width` variable. This variable actually sets the element’s max-width instead of its literal width to ensure it’s still responsive.

## The Content Width Variable

I already mentioned that you can use var(–content-width) in your page builder’s global theme styles, but you can do a lot more with this variable.

Any time you need a custom element (an element with a BEM class) to be content width, it’s best to use the variable instead of the utility class. Set the element’s `width` to 100% and then use the variable with the `max-width` property.

```css
.custom-element {
   width: 100%;
   max-width: var(--content-width);
}
```

Another everyday use is within calculations.

Let’s say I want an elemeent to be 75% of the content width. I can easily do this:

```css
.my-element {
   width: 100%;
   max-width: calc(var(--content-width) * .75)
}
```

You might say, “why not just make the element 75% of the container?”

While that would work on desktop, it wouldn’t have the same effect on mobile. On mobile, it’ll always remain 75% wide, which is often undesirable. Using the content-width variable gets you 75% on desktop and 100% on mobile because the max-width variable is referencing a fixed value rather than a percentage.

In essence, the variable is automatically responsive while the percentage value causes complications on mobile devices.

