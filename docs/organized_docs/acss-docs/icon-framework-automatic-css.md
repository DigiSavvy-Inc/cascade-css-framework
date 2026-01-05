---
source: https://automaticcss.com/docs/icon-framework/
---

# Icon Framework - Automatic.css

Category: Icons

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Icon Framework

3.3.0
The ACSS Icon Framework makes icon styling a breeze. It’s turned on by default on all new installs, but you can double check that it’s enabled by going to Dashboard > Icons.

![Icon Framework Option Switch](https://automaticcss.com/wp-content/uploads/CleanShot-2024-11-11-at-16.00.02@2x-1024x1024.jpg)
## Styling Icons

Add an icon to your site using the SVG, Icon, or Code elements.

To apply Icon Framework styling to your icon, you need to add the data attribute `data-icon`. Here’s an example of how to do this in Bricks:

![Adding a data attribute in Bricks Builder](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%3E%3C/svg%3E)![Adding a data attribute in Bricks Builder](https://automaticcss.com/wp-content/uploads/CleanShot-2024-11-11-at-16.12.07@2x-1024x1024.jpg)
The presence of `data-icon` does all the work. Once that attribute is present, ACSS is controlling all relevant icon styles by default and the entire Icon Framework is available to you for tweaking.

Note: If using a code element, make sure the code is rendered without a wrapper and that data-icon is added directly to the `<svg>` element, like this:

```xml
<svg data-icon xmlns="http://www.w3.org/2000/svg" ... />
```

## Icon Style: Boxed vs Naked

Boxed icons have padding, a background color, border color, etc. You can choose between boxed or naked icons at any time on an icon-by-icon basis, but you can also set the default style for your site in Icon Options.

### Benefits of Boxed Icons

If the majority of the icons in your design are boxed, set the default to boxed. If the majority are naked, set the default to naked.

Navigate to Icons > Icon Framework Options and toggle Boxed Icons on/off:

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%3E%3C/svg%3E)![](https://automaticcss.com/wp-content/uploads/CleanShot-2025-01-29-at-11.30.23@2x-1024x1024.jpg)
## Default Icon Theme & Styling

To get started, set your Global Icon Theme as well as your Default Icon Style.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%3E%3C/svg%3E)![](https://automaticcss.com/wp-content/uploads/CleanShot-2025-01-29-at-11.35.14@2x-1024x1024.jpg)Screenshot
There are two icon themes to choose from: Light and Dark.

For maximum flexibility in how you use icons across a website, it’s important for the theme name to match the actual icon color, NOT the boxed styling.

For the Dark Theme, you should set a dark icon color.

For the Light Theme, you should set a light icon color.

The styles are not based on the boxed icon styling.  The reason for this is simple. If you want to convert an individual icon from boxed to naked, or vice versa, the icon color should not change. If you base the theme styles on the box styling, your icon color may change when you convert an individual icon to naked.

Global Styles are styles that affect all icons regardless of whether they’re Light or Dark.

## Configuring the Light and Dark Theme Styles

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%3E%3C/svg%3E)![](https://automaticcss.com/wp-content/uploads/CleanShot-2025-01-29-at-11.37.10@2x-1024x1024.jpg)Screenshot
Once you’ve set your default styles, you can set the following styles related to the Dark or Light icon set.

Each of these, except `box-shadow`, have hover variants you can set by clicking the cursor icon next to the input field.

## Icon Sizes

By default, you have three icon sizes to choose from with the default being “M” or Medium.

![Icon Sizes](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%3E%3C/svg%3E)![Icon Sizes](https://automaticcss.com/wp-content/uploads/CleanShot-2024-11-11-at-16.31.15@2x-1024x1024.jpg)
Three options should be enough for most projects, but if you need more you can navigate to Icons > Options and turn on Expand Icon Sizes.

To change the size of an icon, use `.icon--{size}`. This can be placed on an individual icon or on a group of icons. For example, `.icon--l` will make an icon(s) adopt the large values.

You control the size of these options from the Icon Sizes accordion. When Boxed Icons is turned on, you can also control the padding values for each size. By default they reference your general icon padding value, which is relative to the size.

Tip: If you feel you need to adjust icon padding, try adjusting the default icon padding value first rather than adjusting the padding of each individual size. This is more likely to maintain padding consistency.

## Icon Lists

The Icon Framework has support for icon lists, which also have separate styling options.

![icon list options](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%3E%3C/svg%3E)![icon list options](https://automaticcss.com/wp-content/uploads/CleanShot-2024-11-11-at-16.36.02@2x-1024x1024.jpg)
You can turn a list into an icon list by applying either the `[data-icon-list]` attribute to the list element (`<ul>` or `<ol>`) or  by using the utility class `.icon-list`.

Either will work:

```xml
<ul class="icon-list"></ul>
<ul data-icon-list class="whatever"></ul>
```

This assumes your icons in the list are still placed with icon elements, SVGs, or Code elements. The framework does not support pseudo element icons out of the box due to CSS limitations.

Once you have an icon list, you can adjust styles accordingly:

## Overriding the Icon Theme Manually

There are two ways to change the icon theme manually, a utility class and a data attribute. Both  methods work on individual icons as well as groups of icons (if applied to the parent).

Class Method:

You can use `.icon--light` or `.icon--dark` to change the theme.

Attribute Method:

You can use `data-icon-theme="light"` or `data-icon-theme="dark"` to change the theme.

## Overriding the Icon Style Manually

There are two ways to change the icon style manually, a utility class and a data attribute. Both methods work on individual icons as well as groups of icons (if applied to the parent).

Class Method:

You can use `.icon--boxed` or `.icon--naked` to change the style.

Attribute Method:

You can use `data-icon-style="boxed"` or `data-icon-style="naked"` to change the style.

## Overriding the Icon Size Manually

There are two ways to change the icon size manually, a utility class and a data attribute. Both methods work on individual icons as well as groups of icons (if applied to the parent).

Class Method:

You can use `.icon--{size}` to change the size.

Attribute Method:

You can use `data-icon-size="{size}"` to change the size.

The accepted values are t-shirt sizes: s, m, l, etc.

## Overriding Icon Styles with Custom CSS

Every property in the Icon Framework is represented as a variable, making it easy to reference or override any style at any time. You can also deploy icon styling to any icon using the icon() mixin.

Notice for Bricks Users: Bricks uses inappropriate specificity for their default icon styling. In order to override this, we have to use additional specificity. This means that if you write custom CSS to style icons, the styles may not apply. You can use a double root selector `%root%%root% {}` for your custom CSS to resolve this.

