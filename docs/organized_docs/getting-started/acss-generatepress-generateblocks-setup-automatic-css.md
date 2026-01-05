---
source: https://automaticcss.com/docs/setting-up-acss-with-generatepress-blocks/
---

# ACSS & GeneratePress & GenerateBlocks Setup - Automatic.css

Category: Builder Configuration

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Generate Setup (GP & GB)

Welcome to the setup guide for GeneratePress (Premium) and GenerateBlocks (Pro). For a seamless experience, please make sure you’re using the Premium/Pro versions of both products.

Caution: While ACSS is compatible with Generate and its workflow, it’s not the best possible development experience. Among all the possible ACSS-compatible platforms, Generate is the clunkiest. We only recommend Generate if page building in the block editor is mandatory. Otherwise, your best option is Etch or Bricks. Etch writes all of your content to the block editor using native blocks so your data is still liberated, “close to core,” and easily editable in the block editor.

## Installation

## Customizer

Most of the GeneratePress setup happens in the WP Customizer. You can get to the Customizer by visiting the front end and choosing Customize from the wp-admin menu.

![](https://automaticcss.com/wp-content/uploads/CleanShot-2025-01-15-at-09.25.35@2x-1024x576.jpg)
Once the Customizer is open, follow these steps:

## Full-Width Page Building

To use GeneratePress and GenerateBlocks for page building, you’ll want to choose some specific settings in both ACSS and the block editor.

### ACSS Settings

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='919'%20viewBox='0%200%201024%20919'%3E%3C/svg%3E)![](https://automaticcss.com/wp-content/uploads/CleanShot-2025-01-15-at-09.37.56@2x-1024x919.jpg)
Make sure the following options are set in ACSS under Options > Gutenberg:

### Block Editor Settings

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%3E%3C/svg%3E)![](https://automaticcss.com/wp-content/uploads/CleanShot-2025-01-15-at-09.39.24@2x-1024x1024.jpg)
When you open a page to start page building, you need to remove all the clutter that Generate adds. You can do this by selecting the following options:

## Section Element in Generate

Generate does not have a `section` element. They unfortunately use a generic container element for everything. This means that sections have to be created by flipping a switch manually and adding and inner container manually.

Start by adding a container element to the page and click the icon to add an inner container:

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='710'%20viewBox='0%200%201024%20710'%3E%3C/svg%3E)![](https://automaticcss.com/wp-content/uploads/CleanShot-2025-01-15-at-09.13.16@2x-1024x710.jpg)
Next, you can turn the outer container into a section element by choosing `section` from the Advanced > Tag Name in the sidebar:

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%3E%3C/svg%3E)![](https://automaticcss.com/wp-content/uploads/CleanShot-2025-01-15-at-09.12.30@2x-1-1024x1024.jpg)
Once you change the tag to `section`, you’ll see that ACSS automatically applies your default section padding.

## Adding Classes in Generate

There are two places to add classes in Generate: Gutenberg’s class input and Generate’s selector system.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='996'%20height='996'%20viewBox='0%200%20996%20996'%3E%3C/svg%3E)![](https://automaticcss.com/wp-content/uploads/CleanShot-2025-01-15-at-09.14.29@2x.jpg)
The Gutenberg “CSS Classes” input is where you should place utility classes. If you right-click this input, you’ll see ACSS’ utility class context menu for easily finding, previewing, and adding utility classes.

The Generate selector system is where you should add your custom BEM classes. You can then use ACSS tokens in the styling inputs attached to these classes. Right clicking a styling input will open ACSS’s token context menu for quickly adding tokens to inputs.

You can now build completely custom pages from scratch in Generate, powered by ACSS. Please review the Gutenberg setup instructions for additional insights, since Generate is a Gutenberg-based builder.

