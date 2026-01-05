---
source: https://automaticcss.com/docs/setting-up-acss-with-breakdance/
---

# ACSS & Breakdance Setup - Automatic.css

Category: Builder Configuration

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Breakdance Setup

Using Automatic.css with Breakdance is easy.

Breakdance doesn’t load any intrusive global styles by default, so there’s nothing else to do. You are free to start using ACSS features inside of Breakdance. In fact, we recommend not setting any global styles in the global settings area in Breakdance — Automatic.css already sets all of the global styles you need.

## Builder Notes

Please be aware of the following idiosyncracies related to Breakdance:

### Sections & Section Padding

Breakdance uses a different section structure than recommended and doesn’t provide users access to the inner wrapper. For this reason, you’ll need a slight shift in how you manage section padding.

The normal padding input fields won’t work for changing section padding because these inputs are linked to the inaccessible inner wrapper. ACSS puts padding in the actual section element where it’s supposed to be, so to change section padding in Breakdance you’ll need to use one of two methods:

Here’s a look at the wrapper inputs you’ll want to use:

![Editing section padding in Breakdance](https://automaticcss.com/wp-content/uploads/breakdance-section-padding-1024x698.png)
