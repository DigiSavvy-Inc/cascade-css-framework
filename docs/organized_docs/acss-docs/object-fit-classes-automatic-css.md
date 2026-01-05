---
source: https://automaticcss.com/docs/object-fit-classes/
---

# Object Fit Classes - Automatic.css

Category: Dimension

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Object Fit Classes

There are situations where you need to set a width, height, or aspect ratio on an image that doesn’t respect the image’s original aspect ratio. When this occurs, the image “stretches” and looks warped.

Object Fit classes force the image to look appropriate in the new aspect ratio by cropping into the image (`.object-fit--cover`). Or, they force it back to its original aspect ratio within the new container bounds (`.object-fit--contain`).

Note: “Contain” is similar to the technique of letterboxing in video production. It’s used far less often than “cover.”

As is true with background images, you can also choose which area of the image to preserve (`.object-fit--[area]`) with “area” being one of the following named coordinates:

Note: There’s no center-center option because that’s the default position of object-fit.

Here’s an example of how and when to use object-fit classes:

```javascript
<img class="aspect--16-9 object-fit--cover object-fit--center-right" src="sample-image.jpg" />
```

In the above example `.aspect--16-9` changes the aspect ratio of the image to 16×9. The image had an original aspect ratio of 6×4, thus we need to use object-fit to prevent improper stretching. The class `.object-fit--cover` establishes that we want to use the cover method (cropping) and .`object-fit--center-right` instructs the browser to preserve the right-most side of the image when cropping.

Notice how all three classes are used simultaneously to achieve the desired outcome.

