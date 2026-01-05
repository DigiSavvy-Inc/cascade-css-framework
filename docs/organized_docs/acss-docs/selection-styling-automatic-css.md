---
source: https://automaticcss.com/docs/selection-styling/
---

# Selection Styling - Automatic.css

Category: Colors, Typography

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Selection Styling

ACSS users can control the background and foreground color of selected text (highlighted when the user clicks and drags to select text on the site) via the Selection Styling panel under Additional Styling.

![Selection Styling Options](https://automaticcss.com/wp-content/uploads/CleanShot-2024-10-20-at-08.58.17@2x-1024x882.jpg)Selection Styling Options
The first two fields define the default selection styling for the website. The second two fields define an alternate selection style, for when the main selection style might not be appropriate (primary colored selection text on a primary colored background, for example).

As always, color tokens are recommended here. Users should avoid using raw color values or keywords, especially if you want to retain compatibility with color scheme.

To use the alternate selection style, place the .selection--alt class on any box. This will affect all children of the box as well.

