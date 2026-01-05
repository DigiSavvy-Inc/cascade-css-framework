---
source: https://automaticcss.com/docs/auto-object-fit/
---

# Auto Object Fit - Automatic.css

Category: Dimension

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Auto Object Fit

Are you tired of setting object-fit: cover; every single time you change the dimensions of an image or set an aspect ratio? Just turn on ACSS’ automatic object-fit feature under Options > Workflow Enhancements.

![Auto Object Fit](https://automaticcss.com/wp-content/uploads/CleanShot-2024-11-01-at-14.39.25@2x-970x1024.jpg)Auto Object Fit
This setting will automatically set images to object-fit: cover; allowing you to freely manipulate image dimensions without warping and without extra handling.

Note that ACSS does this with the following two variables:

This means that you’re free to adjust the object-fit and position at any point in time on any image or even large groups of images.

For example, if you wanted all images in a page, template, or box to be set to contain instead of cover, you could do this:

```
.this-specific-area {
  --object-fit: contain;
}
Code language: CSS (css)
```

Now all your images will use the new value of contain. This is a great time-saving feature that presents zero limitations to your workflow.

