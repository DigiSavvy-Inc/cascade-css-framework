---
source: https://automaticcss.com/docs/external-link-indication/
---

# External Link Indication - Automatic.css

Category: Buttons & Links

[Back to Docs](https://automaticcss.com/docs)### Navigation

# External Link Indication

There’s a big debate on whether it’s acceptable to open external links in a new tab. Accessibility advocates tend to argue that they shouldn’t be used, while UX advocates and most users feel that opening external links in a new tab is preferred.

For the record, we side with UX advocates and users who prefer that external links open in a new tab as long as the process is executed properly.

How do you execute it properly?

ACSS lets you apply the visual and auditory cues automatically to any link that will open in a new tab or window with full control over each cue.

## Turning on External Link Indication

![Indicate External Links Setting in ACSS](https://automaticcss.com/wp-content/uploads/indicate-external-links-930x1024.jpg)Indicate External Links Setting in ACSS
To activate this feature, navigate to Buttons and Links and then click on the links tab. Find the “External Links” accordion and then enable “Indicate External Links.”

## Customizing the Indicators

Both the visual and auditory indicators are customizable via the following controls:

![Panel for customizing external link indicators](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%3E%3C/svg%3E)![Panel for customizing external link indicators](https://automaticcss.com/wp-content/uploads/CleanShot-2024-10-02-at-17.20.07@2x-1024x1024.jpg)Panel for customizing external link indicators

### Indicator Exclusions (Removing Indication Programmatically)

In some cases, you might want to exclude certain links, certain link contexts, links in certain areas, and so on. You can use the Indicator Exclusions feature for this.

By default, links that wrap images, figures, pictures, and SVGs are excluded via the :has() statement as long as those items are direct children of the link:

```css
:has(> img, > figure, > picture, > svg)
```

If there are other objects that you’re wrapping in a link where the indicator should not show up, you can simply add to the comma separated list within the `:has()` parenthesis.

If you want to exclude links by ID, Class, or some other selector context, you can add additional selectors after the has statement, as long as they’re comma separated:

```css
:has(> img, > figure, > picture, > svg), .exclude-this-link, #exclude-this-link
```

Any valid selector will work.

### Accessibility Text

The last thing you can customize is the auditory cue. By default, ACSS uses “Link to external site.” When a screen reader reads your link text, it’ll read this auditory cue immediately after so the user knows the link will open a new tab.

For example, if your link text is , “this article about Hummingbirds,” a screen reader will announce, “this article about Hummingbirds, link to external site.”

You are free to customize this default announcement cue. Also, don’t forget that you’re in full control of the aria-label for any individual link should you need a more precise announcement. Just use HTML or the builder to add your own aria-label whenever you’re creating the link.

