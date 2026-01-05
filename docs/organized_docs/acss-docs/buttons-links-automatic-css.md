---
source: https://automaticcss.com/docs/buttons/
---

# Buttons & Links - Automatic.css

Category: Buttons & Links, Setup

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Buttons & Links

Buttons and links are used on nearly every page of a website, so it’s important to set default styles for them. This is easy to do in the ACSS dashboard. Just navigate to the “Buttons & Links” tab.

## Default Button Styling

![ACSS Global Button Styling Options](https://automaticcss.com/wp-content/uploads/CleanShot-2024-05-29-at-15.42.41@2x-scaled.jpg)ACSS Global Button Styling
Default button styles apply to ALL buttons, regardless of color.

Sharing styles across button types ensures that all your buttons will be visually consistent concerning these default characteristics.

### Main Button Styling

### Button Text Styling

### Button Border Styling

### Button Transition Styling

Radius Note: Using `.rounded`classes or radius variables on your buttons are not advisable because this reduces global control. It’s best to set your button radius here in the ACSS dashboard so that all your buttons inherit this default radius and no additional classes or variables are necessary.

## Available Buttons

Button styles in both solid and outline variants are available for all active colors in ACSS. Thus, there are 36 total button styles (18 solid and 18 outline buttons) if all colors are enabled.

It should be noted that button styling will not load for colors that are turned off in the Palette area, nor will you see options for them in the dashboard.

You can also deactivate any button group you don’t intend to use, even if you use that color group for other things. This will reduce the size of the framework.

To deactivate button styles, navigate to “Options” in the buttons panel and then choose the style you want to modify:

![ACSS Button Style Toggles](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1001'%20viewBox='0%200%201024%201001'%3E%3C/svg%3E)![ACSS Button Style Toggles](https://automaticcss.com/wp-content/uploads/CleanShot-2024-05-29-at-16.03.43@2x-1024x1001.jpg)ACSS Button Style Toggles
You can choose whether or not to load solid, outline, and light/dark variants.

## Overriding the Style of Certain Buttons

Each button group has its own customization area in the ACSS dashboard. Here’s an example of the Primary button overrides panel:

![Primary Button Styling in ACSS](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1187'%20height='2560'%20viewBox='0%200%201187%202560'%3E%3C/svg%3E)![Primary Button Styling in ACSS](https://automaticcss.com/wp-content/uploads/CleanShot-2024-05-29-at-15.52.55@2x-1-scaled.jpg)Primary Button Styling in ACSS
This panel allows you to adjust the following for each button style:

We recommend always using color variables to maintain consistency within the system and to maintain compatibility with color scheme features.

## Overriding Buttons in Specific Contexts

ACSS buttons use locally scoped variables (tokens), making them easy to override. You can override an individual button on a page, buttons in a specific section, or buttons across an entire page without affecting other buttons of the same type.

To override a button or group of buttons, use a selector to identify them and then redefine the value of its tokens.

For example, let’s say you wanted to override the padding, font weight, background color, and hover background color of a single action button on a single page of your site. Just override the variables you want to override at the ID level:

```css
#btn123 {
  --btn-padding-block: 2em;
  --btn-padding-inline: 4em;
  --btn-font-weight: 900;
  --btn-background: var(--action-dark);
  --btn-background-hover: var(--action-ultra-dark);
}
```

Want to make this change across an entire page? You can add a body class (a class on the body element) to the page to affect all action buttons:

```css
body.custom .btn--action {
  --btn-padding-block: 2em;
  --btn-padding-inline: 4em;
  --btn-font-weight: 900;
  --btn-background: var(--action-dark);
  --btn-background-hover: var(--action-ultra-dark);
}
```

Now you’ve changed the style of all buttons on a page without affecting any other page of the site.

### Available Button Variables

Please reference our button variables documentation for a full list of available button variables.

## Creating Custom Buttons

ACSS is designed to cover the basics regarding buttons, which will work for most websites. Create a custom button class if your design requires a super fancy button.

By using ACSS button class syntax (`.btn--`) all global styles will automatically apply to your new custom button.

All you have to do at that point is define values for each styling variable for that new button. You should do this on your new button class with custom CSS. It’s easiest to use a button recipe for this.

