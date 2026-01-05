---
source: https://automaticcss.com/docs/texture-overlay-mixins/
---

# Texture & Overlay Mixins - Automatic.css

Category: Mixins, Textures & Overlays

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Texture & Overlay Mixins

Note: Functions and mixins are designed for use in the Custom SCSS area of the Automatic.css dashboard. They will not work in the builder inputs or builder CSS.

Your custom Textures & Overlays are available as mixins, which makes it easy to assign them to BEM classes or global areas like the body tag.

## Texture Mixin

To apply your texture as a texture, use the texture($number) mixin. As of right now, the mixins are only compatible with the numbered textures. Even if you gave your texture a custom name, it can be referenced by its number without issue.

```
body {
  @include texture(1);
}
Code language: PHP (php)
```

Texture 1 will now be applied to the body tag of your site.

## Texture-Overlay Mixin

![Enable Overlay Class on Textures](https://automaticcss.com/wp-content/uploads/CleanShot-2025-01-27-at-19.02.08@2x-1024x1024.jpg)
To apply your texture as an overlay, ensure that the “Enable Overlay Class” option is on and then use the texture-overlay($number) mixin.

```
body {
  @include texture-overlay(1);
}
Code language: PHP (php)
```

Your texture will now be applied to the body tag as an overlay using a pseudo element.

