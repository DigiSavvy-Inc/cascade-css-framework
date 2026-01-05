---
source: https://automaticcss.com/docs/prem/
---

# Pixel to Rem Auto-Conversion - Automatic.css

Category: Workflow Enhancements

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Pixel to Rem Auto-Conversion

In most scenarios, modern web design calls for using relative units over static units (pixels). One of the most common and useful relative units is the `rem` unit.

As explained in the below video, rem units map directly to the root font size of the website. In most cases, the root font size is 100%, and rendered by most browsers as 16px.

The challenge with using rem units is that they’re hard to calculate on the fly if you use pixels as a reference point.

For example, if you need 60px of spacing, how many rems is that? It’s 60 divided by 16, which equals 3.75rem. Many people can do that math on the fly, but what happens when dealing with decimals? 64.5px is 4.03125rem. That’s not math that most people can do in their heads. And since time is money, breaking out a calculator every two minutes to calculate rem units is out of the question.

Enter ACSS’ Pixel to Rem Auto-Conversion (ctr) feature.

When entering values in builder input fields, you can type the pixel value you want and add “ctr” as the unit. When you use “ctr” and press enter, Automatic.css will automatically swap the pixel value for the correct rem value. And yes, it does this based on your website’s root font size, whether you’ve chosen 100%, 62.5%, or anything else.

## What about custom CSS?

Good news! The same auto-conversion works in custom CSS when using the builder’s CSS areas in the builder canvas. The semicolon will trigger the conversion rather than the return key. If the ctr is used prior to the end of the line, it’s okay – the conversion will still take place as soon as you add the semicolon on the end of the line.

## What about custom CSS outside of the builder?

While we can’t run the auto-converter in every tool that’s ever been built for adding CSS to a website, we do offer a new ctr() function. So, any tool that allows you to write SCSS and hook into Automatic.css, like WPCodeBox, will allow you to use the auto-converter when writing your custom CSS.

