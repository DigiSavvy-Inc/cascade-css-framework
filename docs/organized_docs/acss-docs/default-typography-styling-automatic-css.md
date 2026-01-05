---
source: https://automaticcss.com/docs/default-typography-styling/
---

# Default Typography Styling - Automatic.css

Category: Setup, Typography

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Default Typography Styling

Automatic.css allow you to set key default styles related to the headings and text.

First, navigate to the Typography panel in the dashboard and then choose the tab to edit either heading or text defaults:

![Typography Tabs in ACSS](https://automaticcss.com/wp-content/uploads/typography-tabs-acss-1024x683.jpg)Typography Tabs in ACSS
## Heading & Text Defaults

The options for setting defaults are roughly the same for headings and text:

![The default Typography settings for Headings in the AutomaticCSS dashboard](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='960'%20height='1822'%20viewBox='0%200%20960%201822'%3E%3C/svg%3E)![The default Typography settings for Headings in the AutomaticCSS dashboard](https://automaticcss.com/wp-content/uploads/heading-defaults-2025-02-960x1822.jpg)ACSS Heading Defaults

### * Default line-height (Smart Line Height)

ACSS uses what we call “Smart Line Height” as a default value for all headings and text. Rather than using standard values like “1.1” or “1.5,” Smart Line Height uses a formula based on a desired leading value which is then added to double the x-height of the typeface.

Smart Line Height scales more accurately across various typefaces and font-sizes and is especially awesome for fluid responsive typography. It’s also more efficient, since you don’t have to set a value for every heading and text size – it looks good across the board automatically.

If you want to adjust this line-height value, we recommend changing the `ex` value inside the `calc()` function in decimal increments. Of course, you can use whatever value you want, but Smart Line Height is pretty awesome.

### ** Default max-width

Setting a max on the width of lines is important for maintaining proper readability on a website. Unfortunately, due to Bricks’ application of max-width defaults, there’s no way for us to apply max-widths on headings and text without breakage. Therefore, this option is not applied in Bricks.

### *** Default text-wrap

The default value of “pretty” automatically prevents typography orphans on your website. The other option is “balance” which balances headings, but doesn’t work on text that’s more than 4 lines. Balance is a little heavy-handed, which is why the default is “pretty.” If you want to turn this feature off, set the value to “wrap.”

## Setting Defaults for Individual Heading & Text Sizes

Every heading and text level has a defaults panel so you can set defaults granularly. Simply choose the heading or text level that you want to adjust from the tab options:

![Heading tabs](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='908'%20height='278'%20viewBox='0%200%20908%20278'%3E%3C/svg%3E)![Heading tabs](https://automaticcss.com/wp-content/uploads/heading-tabs-1.jpg)Heading tabs
![Text tabs](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='897'%20height='275'%20viewBox='0%200%20897%20275'%3E%3C/svg%3E)![Text tabs](https://automaticcss.com/wp-content/uploads/text-tabs-1.jpg)Text tabs
