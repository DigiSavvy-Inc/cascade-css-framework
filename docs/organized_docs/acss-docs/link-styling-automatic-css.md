---
source: https://automaticcss.com/docs/links/
---

# Link Styling - Automatic.css

Category: Buttons & Links

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Link Styling

Aside from default button styling, setting default link styling for your site is important.

![ACSS Link Styling Panel](https://automaticcss.com/wp-content/uploads/CleanShot-2024-09-13-at-13.27.43@2x-1024x768.jpg)ACSS Link Styling Panel
This panel controls the default styling of all* text links across your site.

Note: Link color and styling can still be changed granularly using `.link--{color}` classes.

## Link Decoration Color & Link Utilities

In some cases, you may want your global link decoration color to take precedence at all times. In other cases, you might want your link decoration color to match the color of the link.

If you want your link utility classes to color your link decoration the same as the link color, enable the “Sync Link & Decoration Color (Link Classes)” option.

![Link Decoration Option](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='768'%20viewBox='0%200%201024%20768'%3E%3C/svg%3E)![Link Decoration Option](https://automaticcss.com/wp-content/uploads/CleanShot-2024-09-24-at-16.09.44@2x-1024x768.jpg)Link Decoration Option
## Link Style Exclusions

Since default link styling is broad, you often want to exclude areas from receiving the default link styles. Headers and footers are common areas where you may not want default styles influencing your links.

If you need to exclude certain areas of your site from receiving default link styling, turn on the “Add Link Default Exclusions” feature in the dashboard.

![ACSS Link Style Exclusions Panel](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='768'%20viewBox='0%200%201024%20768'%3E%3C/svg%3E)![ACSS Link Style Exclusions Panel](https://automaticcss.com/wp-content/uploads/CleanShot-2024-09-13-at-13.29.40@2x-1024x768.jpg)ACSS Link Style Exclusions Panel
When this feature is on, a `textarea` will appear, allowing you to define rules for the exclusion.

An example would be `header a`, which will exclude all links in your header. You can also do `footer a` to exclude all links in your footer.

This input accepts multiple rules as long as you separate them by comma.

Note: Wrap the entire statement in quotes to ensure that everything is parsed properly and applied to the `:not` correctly.

