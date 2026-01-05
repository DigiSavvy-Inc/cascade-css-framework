---
source: https://automaticcss.com/docs/content-grid-recipe/
---

# Content Grid Recipe - Automatic.css

Category: Recipes

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Content Grid Recipe

3.3.3
You can deploy a content grid layout to any box with the @content-grid; recipe.

```
@content-grid;
Code language: CSS (css)
```

This recipe automatically outputs the %root% selector so you can deploy it directly in the CSS box without any preparation.

Once deployed, you can assign things to different zones using the grid-column property:

```
.my-awesome-grid > :is(figure, picture, img) {
  grid-column: feature;
}
Code language: CSS (css)
```

The above example assigns all figure elements, picture elements, and images to the “feature” zone.

You can also still use all the content grid .feature-- utility classes, assuming you have them turned on.

