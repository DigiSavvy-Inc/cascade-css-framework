---
source: https://automaticcss.com/docs/pro-mode/
---

# Pro Mode & Classless Workflow - Automatic.css

Category: Fundamentals

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Pro Mode & Classless Workflow

Advanced ACSS users know that the real power of the ACSS framework is accessible through variables and that building sites with custom classes (preferably using BEM methodology) that use ACSS variables is the most maintainable practice.

When advanced users primarily use variables with custom classes, the ACSS framework becomes unnecessarily heavy. All the utility classes are being loaded in the stylesheet, but aren’t getting used.

Enter Pro Mode.

![Options > Utility Classes Dashboard](https://automaticcss.com/wp-content/uploads/CleanShot-2024-10-26-at-18.17.53@2x-1024x867.jpg)Options > Utility Classes Dashboard
Pro Mode is a new button inside the ACSS options panel that automatically turns off parts of the framework that our professional users have identified as being [often] unnecessary to pro users who are committed to using variables and custom classes.

While the utility classes for these areas of the framework are turned off, the variables still work, giving Pro users the exact same level of power, but without the bloat of utilities that aren’t being leveraged.

When Pro Mode is activated, the ACSS framework is roughly 50% lighter. If you also turn off any colors or buttons you aren’t using, the framework can be up to 80% lighter.

If you are an advanced user, this is the way we recommend you work with the framework.

## Before You Enable Pro Mode

Since Pro Mode deactivates large areas of the framework, it’s not reasonable to activate Pro Mode after a website is built. This will break anything that relies on utility classes from the parts of the framework that were turned off.

Pro Mode is best activated before beginning development on a new project. Or, early on in development when you can quickly fix anything that breaks and then make the transition to a custom class workflow.

## How to Enable Pro Mode

Enabling Pro Mode is easy:

## “Classless Workflow”

You can think of “classless workflow” as “Beast Mode.” It deactivates ALL utility classes, leaving you with only variables. It creates an insanely lightweight framework.

Please note that you can turn on individual utility modules after activating either Pro Mode or Classless Workflow, so it’s never a black and white situation that you’re locked into.

