---
source: https://automaticcss.com/docs/background-text-assignments/
---

# Background & Text Assignments - Automatic.css

Category: Colors, Setup

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Background & Text Assignments

Once you setup your Palette in ACSS, you’ll want to set up Background and Text Assignments.

Rather than randomly using brand colors via color-related classes like background color classes or text color classes, Background & Text Assignments are a way to map specific colors to how they’re actually used on a website.

When you assign colors to specific contexts, you can build a site without referencing specific colors during the development process.

It’s easier to understand how this works if you look at a real example.

![](https://automaticcss.com/wp-content/uploads/use-of-color-1024x685.jpg)
The light background of that section is the default body background color of the website, which ACSS outputs as `var(--body-bg-color)`, but could easily be referenced with `var(--bg-light)` or `var(--bg-ultra-light)`.

The vast majority of the text is dark text, so ACSS uses your dark text default color via `var(--body-color)`. However, some of the text is lower contrast (the paragraphs below the headings). We refer to lower-contrast text as “muted” text and we use `var(--text-dark-muted)` or `var(--text-light-muted)` to set these.

As you can see, we’re referencing the context of light backgrounds, dark text, muted text, etc. without the need for referencing specific colors. This is because the colors are pre-assigned to these contexts.

There are two main advantages to working this way:

Once you setup assignments and start using them for the first time, you’ll get the hang of it and very quickly see the benefits.

## Setting Up Background Assignments

Open the dashboard and navigate to Backgrounds & Text. Choose the Backgrounds accordion:

![ACSS Background Assignments](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%3E%3C/svg%3E)![ACSS Background Assignments](https://automaticcss.com/wp-content/uploads/CleanShot-2024-11-06-at-17.00.58@2x-1024x1024.jpg)ACSS Background Assignments
Start by telling ACSS what your default background color should be. By default, it’s var(–white), but you can use any color.

Next, assign your dark, ultra-dark, light, and ultra-light background options.

## Setting Up Text Assignments

Open the dashboard and navigate to Backgrounds & Text. Choose the Text accordion:

![ACSS Text Assignments](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%3E%3C/svg%3E)![ACSS Text Assignments](https://automaticcss.com/wp-content/uploads/CleanShot-2024-11-06-at-17.01.30@2x-1024x1024.jpg)ACSS Text Assignments
Start by setting your website’s main text color. The default is `var(--text-dark)`. This is confusing to some users because `--text-dark` isn’t an actual color. But, stop and think about it for a moment.

If your website is light by default, then you’ll want dark text by default. There’s no reason to reference a specific color for this. You can just reference `var(--text-dark)` and then assign the necessary color to `var(--text-dark)`, which is the input immediately below. Sometimes I make `var(--text-dark-muted)` the default if I prefer to have muted text as my default text color. It’s up to you.

Point is, there’s no reason to reference an actual color in the “default” field — you can use one of the color assignment variables because those contain the desired color.

## Using Color Assignments in Your Workflow

Once your color assignments are setup, it’s important to make sure you use them properly in your workflow. This will ensure that you get all the efficiency and re-theming benefits from them.

For Backgrounds, you have four options (plus your default website background). The background options are:

It’s best to apply these with the utility classes, because they support Automatic Color Relationships (variables don’t).

Keep in mind that you also have your website’s default background color. Let’s say your default background color is `var(--white)`. By not using a background color on a section, it will default to white. So, now you have five simple options for setting background colors across your site.

For Text, you have four similar options. The text options are:

You can use either the utility classes or the variables here – both are compatible with Automatic Color Relationships.

Using these assignments everywhere they’re possible, dramatically improves efficiency, flexibility, scalability, maintainability, and theme-ability.

