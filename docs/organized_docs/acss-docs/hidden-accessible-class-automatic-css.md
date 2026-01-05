---
source: https://automaticcss.com/docs/hidden-accessible-class/
---

# Hidden Accessible Class - Automatic.css

Category: Accessibility

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Hidden Accessible Class

Creating clickable elements without discernable text is a common accessibility mistake in web design. An example would be a group of social follow icons. The developer will add the icons to the page, link them to various social profiles, and then move on.

The problem is that assistive technology cannot announce what these items are or what they’re for. Instead, the element will be announced by reading its raw URL. This is a definite accessibility violation.

There are two solutions:

Of course, aria labels aren’t without downsides:

A simple alternative method is the use of hidden accessibility text with the utility `.hidden-accessible`.

## Using the Hidden Accessible utility class

Let’s continue with our example above. You want to link a social icon to a social profile. Here’s your HTML:

```xml
<a href="#"><i class="fb-icon"></i></a>
```

Again, screen readers and search engines have no idea what to do with this.

However, if we add text inside the link, the text will be announced and used as an anchor link:

```xml
<a href="#"><i class="fb-icon"></i>Follow us on Facebook</a>
```

The link will be announced as “Follow us on Facebook.”

While this solves the accessibility problem, it creates a new UX/UI problem. We don’t want the text here! It breaks the design.

This is precisely where we need to deploy `.hidden-accessible`.

I’ll break the HTML up into multiple lines to make it easier for you to read:

```xml
<a href="#">
   <i class="fb-icon"></i>
   <span class="hidden-accessible">Follow us on Facebook</span>
</a>
```

Hidden accessible hides the text from sighted users while retaining the information for assistive technology and search engines.

## How do I know there’s hidden text if it’s hidden?

Good question! You’re right to be concerned. If you deploy hidden text everywhere, you might forget it’s there. Then, when you make changes to a page, you might forget to update the hidden text. This would be bad!

Thankfully, we’ve already thought of that. Unlike similar classes that hide text for accessibility purposes, Automatic.css deploys an accessibility icon next to any hidden text when you’re working in the builder.

This icon alerts you to the presence of hidden accessibility text so you can remember it’s there and remember to update it as needed.

