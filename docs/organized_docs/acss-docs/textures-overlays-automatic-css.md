---
source: https://automaticcss.com/docs/textures-overlays/
---

# Textures & Overlays - Automatic.css

Category: Textures & Overlays

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Textures & Overlays

Users can create custom textures and overlays in Automatic.css using a unique approach that allows for a texture to be used as a background, overlay, or both.

![Textures & Overlays Example](https://automaticcss.com/wp-content/uploads/GZs9Um9WAAwRtPv-1024x645.jpeg)
## What are textures?

Web designers are typically working with solid colors, or they’re working with image files and gradients for backgrounds and overlays. Often, it’s a mix of both.

ACSS has provided tons of solid background and overlay options since inception, but you still need a way to define areas of “texture.” In Automatic.css, a Texture is any background or overlay that requires a re-usable image file, repeating pattern, or gradient.

By creating a texture that’s available globally, you can easily apply your texture to select areas of your site using a simple utility class.

## Activating Textures & Overlays

To create custom textures, you first need to activate the Textures & Overlays feature by navigating to Backgrounds & Text > Options > Textures & Overlays:

![Textures & Overlays Option](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='778'%20height='1024'%20viewBox='0%200%20778%201024'%3E%3C/svg%3E)![Textures & Overlays Option](https://automaticcss.com/wp-content/uploads/CleanShot-2024-10-19-at-09.05.23@2x-778x1024.jpg)Textures & Overlays Option
Once you enable this option, a new “Textures & Overlays” accordion will appear above Options.

## Creating Your First Texture

![Textures & Overlays Panel](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%3E%3C/svg%3E)![Textures & Overlays Panel](https://automaticcss.com/wp-content/uploads/CleanShot-2024-10-19-at-09.10.00@2x-1024x1024.jpg)Textures & Overlays Panel
The Textures & Overlays panel can be a bit intimidating at first glance. Don’t worry, though, it’s fairly easy to dial in the exact effect you’re going for.

Here is an explanation of each property:

## Using Your Texture

If you want to use your texture as a background effect, add the `.texture-[name/number]` utility class to any area you want to see your texture in the background.

If you want to use your texture as an overlay effect, add the `.overlay-[name/number]` utility class to any areas you want to see your texture in overlay.

Note: The .overlay- classes will also work on images as long as your image is wrapped in a `figure` or `picture` tag.

## Tweaking Textures on The Fly (Texture Variables)

Textures and Overlays use variables that can be overwritten at any time at the page level, template level, or box level. This allows you to start with your global texture while easily making any tweaks and adjustments in specific areas.

Here are the target variables that can have new values assigned at any time. We recommend tweaking this with your own modifier classes (`.texture-[name]--[modifier]`) or at the ID level if it’s a true one-off tweak:

### For Background Textures

### For Overlay Textures

## Quirks & Workarounds

As with everything in CSS, the techniques used to achieve one effect can create roadblocks for other effects. This is especially true with something as complex as background textures and overlays.

As long as you know about the quirks, you can work around them. Here are some things to be aware of:

Textures & Overlays is a very powerful feature in Automatic.css and is implemented in a uniquely exceptional way that allows for textures to be used as either backgrounds or overlays while mapping to auto color relationships. No other framework in existence has the feature. Enjoy.

