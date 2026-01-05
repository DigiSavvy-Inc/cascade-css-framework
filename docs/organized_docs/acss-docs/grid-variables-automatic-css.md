---
source: https://automaticcss.com/docs/grid-variables/
---

# Grid Variables - Automatic.css

Category: Grids

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Grid Variables

ACSS users can create grids with grid classes, or with grid variables. Where grid classes are great for workflow speed, the variables are best for scalability and maintainability.

## Using Grid Variables

Sometimes, it’s best to avoid using utility classes to create grids. For example, if you need to create a grid of service cards that will be used on multiple pages and you want to maintain global control over the structure of all your service card grids, it’s best to create a BEM class for defining your grid structure.

Here’s an example:

```
.service-grid {
   display: grid;
   grid-template-columns: var(--grid-3);
   gap: var(--grid-gap);
}
Code language: CSS (css)
```

To make the grid responsive, you’ll want to define a new grid structure at a different breakpoint:

```
@media (max-width: 991px) {
   .service-grid {
      grid-template-columns: var(--grid-2);
   }
}
Code language: CSS (css)
```

Since you’ve already defined the grid with the display property, you don’t have to set the display property again. All you have to do is change the number of columns.

Note: If your page builder supports grid variables, you can use these variables directly in the builder inputs. Writing CSS isn’t required in this scenario.

All grids structures are available from 1 to 12 columns as well as our unbalanced grids:

```
var(--grid-1)
var(--grid-2)
var(--grid-3)
var(--grid-4)
var(--grid-5)
var(--grid-6)
var(--grid-7)
var(--grid-8)
var(--grid-9)
var(--grid-10)
var(--grid-11)
var(--grid-12)
var(--grid-1-2)
var(--grid-1-3)
var(--grid-2-1)
var(--grid-2-3)
var(--grid-3-1)
var(--grid-3-2)
Code language: JavaScript (javascript)
```

## Column/Row Spans & Advanced Grids

You can absolutely achieve very advanced grids using grid variables as the starting point. You just need to know a little bit about column and row positioning and grid cell order. You can also use a page builder that has visual grid controls.

