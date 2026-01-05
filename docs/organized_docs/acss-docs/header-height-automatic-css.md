---
source: https://automaticcss.com/docs/header-height/
---

# Header Height - Automatic.css

Category: Dimension, Spacing

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Header Height

Establishing a variable that matches your header height is very helpful in modern development for various use cases. For example, let’s say your header is sticky and you’re using a sticky element on your page. You need a top value on your sticky element that references your website’s header height.

Automatic.css creates a `--header-height` variable automatically. You just have to tell ACSS what the height of your header is. Once ACSS has this information, it can automatically create super helpful content offsets, sticky offsets, scroll offsets, etc.

First, let’s talk about how to set your header heights. Then we’ll run through all the things ACSS can help you with when it comes to your header height.

## Header Height Values

![](https://automaticcss.com/wp-content/uploads/CleanShot-2024-09-24-at-16.20.02@2x-924x1024.jpg)Header Heights
In the ACSS dashboard, navigate to Layout and then Header.

ACSS needs to know the height of your header at each breakpoint. This is easy to find by loading your site on the front end, right clicking your header, and getting the computed height. Do this at each breakpoint and insert the value into the inputs.

Note: If your header height ever changes, recalculate these values.

## Offset Page Content Automatically

![Offset Content Automatically Option](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='924'%20height='1024'%20viewBox='0%200%20924%201024'%3E%3C/svg%3E)![Offset Content Automatically Option](https://automaticcss.com/wp-content/uploads/CleanShot-2024-09-24-at-16.20.02-2@2x-924x1024.jpg)Offset Content Automatically Option
If your website uses a sticky header, it means that your header takes up some of the room in the hero section of your pages. This makes your hero spacing look off-balance.

In this case, turn on the “Offset Page Content Automatically” option. Automatic.css will now fix every page on your website automatically, restoring perfectly balanced spacing to the first section on every page.

### Exclude Headers & Pages From Content Offset

In some cases, you might want to remove the offset on certain pages or when certain headers are present. This is possible using the exclusion options that activate when you turn on Offset Content Automatically.

![Exclude Headers & Exclude Pages for Offset Content Automatically Option](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='950'%20viewBox='0%200%201024%20950'%3E%3C/svg%3E)![Exclude Headers & Exclude Pages for Offset Content Automatically Option](https://automaticcss.com/wp-content/uploads/CleanShot-2024-09-24-at-16.22.33@2x-1024x950.jpg)Exclude Headers & Exclude Pages for Offset Content Automatically Option
You can exclude specific headers by entering any valid selector for the header. A data attribute is a really good way to do this because it also allows you to make a header sticky or not sticky from the back-end of WordPress.

We provide a default data attribute `[data-sticky-header="0"]` that you can use, which is already excluded by default. Of course, you can use any selector or list of selectors you’d like, just make sure to wrap each selector in quotes and comma separate them.

You can also disable the offset on specific pages by referencing the unique body class of the page (WordPress adds a body class to every page automatically) or by using the default utility class `.content-offset--off`.

## Sticky Offset

The same issue with scroll-to-hash happens with sticky elements. By default sticky elements stick to the top of the screen. A sticky header will cover them up if you don’t give the sticky element an offset value.

If you want Automatic.css to automatically rescue your sticky elements and offset them, turn on the “Offset Sticky Elements Automatically” setting in the Sticky Styling panel (Additional Styling):

![Offset Sticky Automatically Option](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='912'%20viewBox='0%200%201024%20912'%3E%3C/svg%3E)![Offset Sticky Automatically Option](https://automaticcss.com/wp-content/uploads/CleanShot-2024-09-24-at-16.27.00@2x-1024x912.jpg)Offset Sticky Automatically Option
Now, when you use the `.sticky` class, you don’t have to worry about an offset. ACSS will use your header height and your offset preferences from above to generate the appropriate offset.

Of course, this can be overridden on a case-by-case basis by setting a custom top value for any sticky element.

