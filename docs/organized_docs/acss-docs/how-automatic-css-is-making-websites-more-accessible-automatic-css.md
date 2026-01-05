---
source: https://automaticcss.com/accessibility-features/
---

# How Automatic.css is Making Websites More Accessible - Automatic.css

# How Automatic.css is Making Websites More Accessible

Written by

![Kevin Geary Headshot](https://secure.gravatar.com/avatar/a117f74b57f641cf18966ad5e250bdf2b99f834c9bea5cdea8e6a016cf370bf7?s=150&d=mm&r=g)Kevin Geary

Published on

February 22, 2022
[Blog](https://automaticcss.com/blog)[CSS Frameworks](https://automaticcss.com/category/css-frameworks/)![Accessibility Logo](https://automaticcss.com/wp-content/uploads/accessibility-acss-1168x657.jpg)
Automatic.css (ACSS) is committed to helping developers build more accessible websites. While accessibility is a deep and fairly technical topic, there are certain things ACSS can do out of the box to make sites more accessible. And when it comes to utility classes, there’s even more we can help with. Here’s a solid look at Automatic.css’ accessibility philosophy and features.

## What is accessibility?

Web accessibility is the process of making a website more usable by people with disabilities. This can include things like making the site easier to see or hear, or making it easier to use with a keyboard or mouse.

There are many disabilities that can be affected by web accessibility:

Of course, there are many more beyond these examples.

The challenge is this: many disabled individuals don’t use a regular web browser. They use special devices and screen readers which empower them to navigate a website. Unfortunately, if your website isn’t compatible with these devices and programs, it means the individual using them can’t properly navigate or find the information they’re looking for.

Not all disabled persons use these devices and software programs, of course, but even if they use a regular browser we still need to make sure things are done a certain way to maximize their experience.

## Common accessibility issues

Here are some examples of common accessibility issues to help you better understand what accessibility refers to in a practical sense.

This is not all, of course. Not even close. There are hundreds of individual potential issues that we have to be on the lookout for and fixing them or addressing them requires some pretty specialized knowledge in many cases.

It’s not surprising that there’s a lot of shocked faces when it comes to accessibility. People look at the accessibility standards and their eyes glaze over.

Nevertheless, it’s important to make accessibility a strong focus as we move forward.

## Why is accessibility important?

Ensuring your website is accessible to all of your users has some huge benefits as well as some legal implications.

Let’s start with the legal side since that’s a main motivator for a lot of brands and developers (especially in the U.S. where lawsuits for accessibility issues are exploding in number after Dominoes famously lost an accessibilty lawsuit in 2019).

In this day and age, any website that is inaccessible, that has no accessibility statement, and that has no active plan for making the website more accessible, is a prime target for lawsuits.

The real reason you should focus on accessibility, though, is user experience. After all, any website that is representing a business should want the maximum amount of users to interact with that business.

If your website can’t be accessed by certain disabled individuals, you’re likely losing out on leads and sales.

Lastly, I truly believe there’s going to be more and more SEO implications related to accessibility as we move into the future. Google is absolutely going to prefer accessible websites just as they prefer fast, well structured websites with great content.

And we already know that Google is big on user experience. If disabled people try interacting with your site, but can’t, they’ll turn around and leave. Google tracks these bounces back to the SERPs and determines that your site must not be a good overall resource.

## Accessibility features in ACSS

So what can a CSS framework do for accessibility? Quite a bit, it turns out…

### Accessible Relative Typography

Older individuals and people with eyesight issues often increase the default text size in their browser preferences. The standard size is typically 16px, but they often increase this to 18px, 20px, or even more.

It’s important that websites conform to a user’s preferences, but many do not. Websites that have a root font size set in pixels, or that use pixels for text and heading sizes, are not considered to be accessible because pixel units are a static unit that overrides the user’s preferences.

The only way to respect the user’s preferences is to use relative units. Rem, em, vw, vh, vmin, vmax, etc. are all examples of accessible relative units.

It’s also important to make sure the root font-size is set to a percentage. 100% and 62.5% are the most common root font sizes.

ACSS uses relative units exclusively and sets the root font size to 62.5% or 100% (your preference). This ensures that all typography is accessible by default on ACSS websites (while being automatically responsive across all device sizes, of course).

### Tab Focus Styling

When a user is using the keyboard to navigate a website, they need visual cues as to where they currently are and what their keyboard is “focusing” on.

Many websites have no focus indicator, so people using a keyboard have no idea what’s currently selected or where they are on the page.

ACSS includes automatic tab focus styling in your brand’s primary color. This ensures that:

All you have to do to get this functionality on your website is install and activate ACSS. Easy!

### Easy Skip Link

A skip link allows keyboard users to jump immediately to the main content of a website so they don’t have to tab through every menu item in the navigation on every page.

A skip link must be added manually, and the trick is to use some fancy CSS to hide it for everyone except people using screen readers and keyboards. In other words, regular website users shouldn’t even know it’s there.

Adding the link is the easy part, hiding it and making it focusable for the right people requires some extra tricks.

ACSS provides a .link–skip class that applies this accessibility magic. All you have to do is create a link in your header that links to your #main container and then apply the .link–skip class to it. ACSS handles the hard part automatically.

### CSS-Based Smooth Scrolling to Hash Links

Smooth scrolling to hash links is a nice feature. Unfortunately, many builders (like Oxygen) implement this feature using jQuery, which breaks tab focus order.

If you use jQuery for smooth scroll to hash links, your “Skip Link” (see above) will take the user to the main content in smooth fashion, but tab focus will not follow the user. They’ll still be stuck tabbing wherever they previously were.

This is a big accessibility problem.

Automatic.css allows you to turn off jQuery smooth scrolling to hash links and replace it with CSS-based smooth scrolling to hash links. You still get smooth scrolling AND the user’s tab focus will now follow the scrolling to the main content.

### Prefers Reduced Motion

Not everyone enjoys pretty animations or transitions, and some users get motion sickness when subjected to parallax scrolling, zooming features, and other similar effects.

The user preference media query prefers-reduced-motion allows you to create a movement-reduced version of your site for people who have expressed this need.

For most sites, you have to code this manually, but with Automatic.css it’s automatically taken care of for you. Regular users will see animations and transitions exactly as you intended while users who prefer reduced motion will see the site according to their preferences.

### Visually Hidden Elements

There are times when we want to hide elements from most users while retaining these elements for screen readers. For example, if your search bar has a search icon, you don’t necessarily need a “search” label for most users. People can see it and they know how to interact with it.

On a screen reader, though, users have no idea what they’re interacting with if there’s no label present.

What we need is a way to hide elements from regular users while preserving the elements (and their focusability) for accessibility users.

Along with providing a .hide class (which uses display: none;), Automatic.css provides a .hidden-accessible class which uses clipping and absolute positioning techniques to effectively hide the content from visual users while retaining the content and functionality for screen reader users.

### Color & Color Contrast

Another important aspect of your website to get right is color contrast. This is because people with visual impairments often rely on contrasting colors to be able to see information on a website.

If your site uses colors with improper color contrast, your content can effectively become invisible or mostly invisible to color blind users.

Automatic.css has a powerful color system with auto-generated shades that are all adjustable. Along with allowing you to adjust the lightness values of every generated shade, we’ll be allowing adjustments to the saturation as well.

Having global control over your colors and shades means that accessibility issues related to color contrast can often be fixed from the ACSS dashboard in seconds without having to go choose new hex codes. Changes made in the dashboard will reflect across your entire site automatically.

Additionally, we are investigating the ability to place automatic contrast ratio checks into the plugin that will alert you of potential color contrast issues with the colors you’ve chosen as well as the generated shades.

### Clickable Parent Links

When building cards and other components, accessibility best practices dictate that you include only one link. Typically, this is the heading of the card since it has a contextually accurate title and not vague anchor text such as “read more.”

In many cases, though, you actually want the entire card to be clickable (not just the heading link that’s inside the card).

Wrapping the entire card with another link breaks best practices. When you need the entire card to be clickable, the best approach is to “extend” the clickable area of the heading link to the entire parent container (the card).

With Automatic.css, this is as simple as adding a single class to the heading link (or whatever link is inside your card) as well as a .relative class to your card (or parent container).

The class you need to add to the link is called .clickable-parent. This class will extend the clickable are to the entire card.

You need the .relative class on the card (or if you’re using custom classes for your card, just make sure the card is set to position: relative;) because .clickable-parent uses absolute positioning and needs an anchor point.

Watch the clickable parent concept in action.

## Our ongoing commitment to accessibility

It feels like Automatic.css is leading the way when it comes to accessibility features in utility frameworks, doesn’t it?

That won’t change any time soon. We are committed to leading the charge for accessibility just as we’ve committed to leading the charge when it comes to other innovative techniques like fluid responsive typography, mathematical scales, and more.

Ultimately, we want users to think more about accessibility without having to do more. While CSS certainly can’t do everything, it’s nice to know that the sites you build do have many things automatically taken care of for you.

As accessibility standards continue to change and develop, we’ll make sure ACSS does as well. If there’s an area where the framework can make your accessibility job easier without getting in the way, we’ll add it.

## Additional accessibility resources

Still getting your feet wet with accessibility (I think most of us are!)? Here’s some things to check out!

### Learn more about accessibility

### Tools

