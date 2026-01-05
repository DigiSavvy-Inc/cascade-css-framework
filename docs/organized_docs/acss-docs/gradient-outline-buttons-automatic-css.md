---
source: https://automaticcss.com/docs/gradient-outline-buttons/
---

# Gradient Outline Buttons - Automatic.css

Category: Buttons & Links

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Gradient Outline Buttons

Many users have asked how to approach gradient outline buttons using ACSS. While the ACSS button framework gets you 80% of the way there, we need to add some custom CSS to get the final effect. Here’s how it’s done:

Gradient Outline Button

## Pre-requisite

Get all your global button defaults setup in the ACSS dashboard. We’ll be setting this custom gradient outline style as the “primary” button style, so make sure “Primary” color is active and the “Primary” button style is activated. These are both active by default in ACSS, so you should be good to go out of the box.

## Step #1: Custom Background

![primary button style panel](https://automaticcss.com/wp-content/uploads/CleanShot-2024-12-02-at-17.45.35@2x-1024x1024.jpg)
Navigate to the Primary button styles panel in the ACSS dashboard. Set the background and background-hover fields to:

```
linear-gradient(var(--gradient-angle), var(--gradient-color-1), var(--gradient-color-2));
Code language: JavaScript (javascript)
```

We’re going to use custom tokens here because we need to declare them as transitionable properties, assuming you want them to transition on hover.

## Step #2: Declare the Properties for Transition

If you want to transition colors in CSS, you need to declare them using the new @property syntax. In the Custom SCSS dashboard in ACSS, define them like this:

```
@property --gradient-color-1 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent;
}
@property --gradient-color-2 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent;
}
Code language: JavaScript (javascript)
```

We’re going to set the initial-value to transparent since we need the button to be transparent by default.

## Step #3: Primary Button Styles

To make this effect work, we need to:

Here’s what the CSS looks like for this step:

```
.btn--primary.btn--primary {
  --gradient-angle: 45deg;
  --gradient-transition: --gradient-color-1 var(--transition-duration) var(--transition-timing), --gradient-color-2 var(--transition-duration) var(--transition-timing);
  position: relative;
  border: none !important;
  padding-block: calc(var(--btn-padding-block) + var(--btn-outline-border-width));
  padding-inline: calc(var(--btn-padding-inline) + var(--btn-outline-border-width));
  transition: var(--gradient-transition);
}
Code language: CSS (css)
```

Here are some notes:

## Step #4: Pseudo Element

The effect we’re using works by creating a gradient pseudo element and then using a mask to cut a rectangle out of it, giving the appearance of a gradient outline. There are other approaches you can take, but this one creates smoother gradients, maintains proper radius, and makes transitions easier.

Here’s the code, which you can nest inside of the previous code block when you’re using the SCSS dashboard in ACSS:

```
&::before {
    --gradient-color-1: var(--secondary);
    --gradient-color-2: var(--primary);
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: var(--btn-outline-border-width);
    background: linear-gradient(var(--gradient-angle), var(--gradient-color-1), var(--gradient-color-2));
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    transition: var(--gradient-transition);
}
Code language: CSS (css)
```

Notes:

## Step #5: Hover Styles

Setting up the button styles the way we have makes adjusting hover styles super easy. You can nest this code in your original code block:

```
&:hover {
    --gradient-color-1: var(--primary);
    --gradient-color-2: var(--secondary);

    &::before {
      --gradient-color-1: var(--primary);
      --gradient-color-2: var(--secondary);
    }
  }
Code language: PHP (php)
```

Notes:

## Full Code

For SCSS:

```
@property --gradient-color-1 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent;
}
@property --gradient-color-2 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent;
}

.btn--primary.btn--primary {
  --gradient-angle: 45deg;
  --gradient-transition: --gradient-color-1 .6s ease, --gradient-color-2 var(--transition-duration) var(--transition-timing);
  position: relative;
  border: none !important;
  padding-block: calc(var(--btn-padding-block) + var(--btn-outline-border-width));
  padding-inline: calc(var(--btn-padding-inline) + var(--btn-outline-border-width));
  transition: var(--gradient-transition);

  &::before {
    --gradient-color-1: var(--secondary);
    --gradient-color-2: var(--primary);
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: var(--btn-outline-border-width);
    background: linear-gradient(var(--gradient-angle), var(--gradient-color-1), var(--gradient-color-2));
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    transition: var(--gradient-transition);
  }

  &:hover {
    --gradient-color-1: var(--primary);
    --gradient-color-2: var(--secondary);

    &::before {
      --gradient-color-1: var(--primary);
      --gradient-color-2: var(--secondary);
    }
  }
  
}
Code language: PHP (php)
```

Vanilla CSS:

```
@property --gradient-color-1 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent;
}

@property --gradient-color-2 {
  syntax: "<color>";
  inherits: false;
  initial-value: transparent;
}

.btn--primary.btn--primary {
  --gradient-angle: 45deg;
  --gradient-transition: --gradient-color-1 .6s ease, --gradient-color-2 var(--transition-duration) var(--transition-timing);
  position: relative;
  border: none !important;
  padding-block: calc(var(--btn-padding-block) + var(--btn-outline-border-width));
  padding-inline: calc(var(--btn-padding-inline) + var(--btn-outline-border-width));
  transition: var(--gradient-transition);
}

.btn--primary.btn--primary::before {
  --gradient-color-1: var(--secondary);
  --gradient-color-2: var(--primary);
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: var(--btn-outline-border-width);
  background: linear-gradient(var(--gradient-angle), var(--gradient-color-1), var(--gradient-color-2));
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  transition: var(--gradient-transition);
}

.btn--primary.btn--primary:hover {
  --gradient-color-1: var(--primary);
  --gradient-color-2: var(--secondary);
}

.btn--primary.btn--primary:hover::before {
  --gradient-color-1: var(--primary);
  --gradient-color-2: var(--secondary);
}
Code language: CSS (css)
```

