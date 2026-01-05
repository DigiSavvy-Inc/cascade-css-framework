---
source: https://automaticcss.com/minimum-builder-requirements/
---

# ACSS Minimum Page Builder Requirements - Automatic.css

# Minimum Page Builder Requirements for ACSS Integration

Written by

![Kevin Geary Headshot](https://secure.gravatar.com/avatar/a117f74b57f641cf18966ad5e250bdf2b99f834c9bea5cdea8e6a016cf370bf7?s=150&d=mm&r=g)Kevin Geary

Published on

January 24, 2024
[Blog](https://automaticcss.com/blog)[CSS Frameworks](https://automaticcss.com/category/css-frameworks/)![ACSS page builder requirements](https://automaticcss.com/wp-content/uploads/page-builder-requirements-1168x658.jpg)
Automatic.css is the only CSS framework and workflow system with “True Builder Integration.” This means we create and maintain every page builder integration by hand, inspecting code and creating overrides and adjustments to ensure users have a seamless experience.

When selecting page builders and third-party tools to integrate with, we look for a specific set of minimum requirements. When these minimum requirements are not met, it means there’s too much work required to create and maintain the integration, and/or the builder doesn’t have the features necessary for an ACSS workflow.

We get hundreds and hundreds of requests to integrate Automatic.css with various tools and many developers inquire about integrating ACSS with their products as well.

Our minimum requirements are listed below. If you’re a user of a specific page builder and you want to see us build an integration, you can send these requirements and your request to that builder’s developer team. If you’re a developer, you can work to meet the minimum requirements below and then contact us about an integration.

Note #1: These requirements all benefit the USER of a page builder and have very little to do with us. These requirements align with best practices – they’re not mere “preferences.”

Note #2: This article is still being added to and will be updated frequently.

## Requirement #1: Clean(ish) Code Output

Many page builders are notorious for producing messy, “divception” code.

When you add a heading in Bricks Builder, for example, you get ultra-clean output:

```
<h2 class="brxe-heading">This is my heading</h2>
Code language: HTML, XML (xml)
```

In Elementor, you get this:

```
<div class="elementor-element elementor-element-dc71011 elementor-widget elementor-widget-heading" data-id="dc71011" data-element_type="widget" data-widget_type="heading.default">
  <div class="elementor-widget-container">
    <style>/*! elementor - v3.18.0 - 06-12-2023 */
     .elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}</style>
       <h2 class="elementor-heading-title elementor-size-default">This is my heading</h2>
  </div>
</div>
Code language: HTML, XML (xml)
```

Not kidding. And this happens with every element.

Building a framework that works well in an environment like this is more or less impossible. And there’s no reason for it. Page builders like Bricks, Oxygen, Cwicly, and Breakdance have demonstrated that clean code output from a page builder is absolutely possible.

We can deal with a rogue extra wrapper or two, but the code output can’t be egregiously bad. Elementor, Divi, Beaver Builder, etc. are some of the worst offenders.

## Requirement #2: Low-Specificity Defaults or No Defaults

Let’s use headings as an example. In CSS, heading sizes, colors, line heights, etc., do not require default styling inputs from the page builder. If left unstyled, headings will still show proper hierarchy and default to black. They don’t need styling assigned to them until the user determines what those styles should be.

Many page builders don’t leave basic elements alone, though. They feel the need to give them default styling instructions. Sometimes, these instructions are egregiously heavy-handed.

It’s okay for a page builder to set defaults, but these defaults need to be set in one of three ways (or a combination):

### With :where() to eliminate specificity

Page builders can use :where() to reduce specificity to zero.

```
:where(.builder-container) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
Code language: CSS (css)
```

### With layers to avoid specificity

Page builders can use @layer to isolate default styles and effectively remove specificity.

```
@layer builder-defaults {
  .builder-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
Code language: CSS (css)
```

This works because any CSS that’s not in a layer will take precedence by default.

### With custom properties to circumvent specificity

Assigning defaults to a custom property with defaults as fallback values makes default styling easy to override (this should be done as a page builder best practice in any case).

```
section {
  display: var(--display, flex);
  flex-direction: var(--flex-direction, column);
  align-items: var(--align-items, flex-start);
}
Code language: CSS (css)
```

When we have to increase specificity to override default styling, it causes other issues for either the framework or the user down the line.

## Requirement #3: Adding Classes to Elements

Many page builders avoid CSS classes like the plague for some reason. Page builder developers tend to think beginners are too dumb to understand the concept, so they hide them away or remove them altogether.

Being that ACSS is a utility framework, the ability to add classes to elements is essential. Even if the user can’t style the classes after adding them, being able to add them at all is a bare minimum (and the class must be added to the selected element, not to an ancestor element like Elementor often does).

Ideally, the user can add classes to elements, style those classes, and even manage classes in bulk. The ability to use BEM is ideal so the user can keep custom classes organized and style elements with ACSS’ variable library.

## Requirement #4: Using Variables in Inputs

Variables are the future of styling in web design. If a page builder doesn’t allow users to use variables, it dramatically reduces the maintainability and scalability of a website and has a major negative impact on workflow efficiency and speed.

As a general rule, page builders should allow the use of variables in any input field tied to a property that supports variables as values (that’s pretty much all of them). This is true even of inputs that page builders would traditionally attach a UI to, like CSS Grid inputs:

![Variables in inputs in Bricks builder](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='804'%20viewBox='0%200%201024%20804'%3E%3C/svg%3E)![Variables in inputs in Bricks builder](https://automaticcss.com/wp-content/uploads/variables-in-inputs-bricks-builder-1024x804.jpg)Variables in inputs in Bricks builder
Some builders don’t allow variables at all, some allow variables only in certain inputs (frustrating), and some allow variables only after you manually remove the unit (inefficient).

As a best practice, page builders should offer blank inputs with no units or automatically remove the unit when the user starts typing “var” or “–“.

## Bonus Points

Here are some things page builders can do to help frameworks and users.

### Offer a proper semantic section element.

Very few page builders have a proper semantic section element with a helpful structure. This is a commonly used element that immediately elevates the usefulness of the page builder.

### Give users access to all boxes.

Sometimes, nested wrappers are necessary (like with section elements). It’s fine to generate these wrappers as long as the user is able to select them and style them in the builder. As a general rule, the page builder should never generate a box the user doesn’t have access to.

### Use custom properties for everything.

Assigning raw values to CSS properties like this is old school:

```
section {
  display: flex;
  flex-direction: column;
  background-color: #000;
}
Code language: CSS (css)
```

This is how page builders should generate styling:

```
section {
  display: var(--display, flex);
  flex-direction: var(--flex-direction, column);
  background-color: var(--bg-color, var(--black));
}
Code language: CSS (css)
```

This automatically opens the door to setting defaults or changing values without increasing specificity.

### Set boxes to display flex-column by default.

Most boxes the user is going to interact with benefit from being display: flex; and flex-direction: column; by default. This immediately opens the door to using properties like gap, align-items, justify-content, and order and has no real downsides. Just make sure this default is set without specificity.

### Allow custom CSS on individual elements AND implement a dynamic root selector.

Adding a custom CSS input to every element, especially when offering a dynamic root selector, removes all limitations on the user’s ability to style their site and makes things far more organized and maintainable and far less likely to cause breakage (when classes are renamed, for example).

### …More to come.

We’ll continue adding tips and suggestions for page builder best practices to this page. Check back soon.

## What builders does ACSS integrate with?

All current page builder integrations are listed on the integrations page (coming soon).

