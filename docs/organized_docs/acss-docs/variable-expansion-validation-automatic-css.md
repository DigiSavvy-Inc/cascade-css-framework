---
source: https://automaticcss.com/docs/variable-expansion-validation/
---

# Variable Expansion & Validation - Automatic.css

Category: Workflow Enhancements

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Variable Expansion & Validation

Automatic.css makes using variables and calc() expressions easy with our “Variable Expansion” feature.

Start by turning on Variable Expansion in the dashboard under Options > Workflow Enhancements:

![Workflow Enhancements Panel](https://automaticcss.com/wp-content/uploads/CleanShot-2024-10-26-at-18.29.33@2x-956x1024.jpg)Workflow Enhancements Panel
Now, you can stop typing `var()` and `calc()` expressions in the builder.

## Using variable expansion in input fields

In an input field, you can expand any variable by typing the stem (e.g. “–action”) and hitting the Enter key. ACSS will automatically turn “`--action`” into “`var(--action)`.”

For calculations, you can simply type the calculation. For example, ACSS will turn “`50vh + 100px`” into “`calc(50vh + 100px)`.”

You can also use variable stems and math at the same time. ACSS will turn “`--space-m * 1.1`” into “`calc(var(--space-m) * 1.1)`“.

## Using variable expansion in CSS

CSS and code blocks also support variable expansion. The difference is that expansion happens when closing a line with “;” instead of with the Enter key.

Let’s say you’re going to type “`--space-l * 1.1`” as a property value. Sometimes people expect the `--space-l` to expand to `var(--space-l)` as they go, or they try to hit enter to trigger it. This is incorrect/unnecessary. All you have to do is finish typing the entire value and then close off the value with “;” as you normally do when writing CSS. The “;” will trigger the expansion of everything within the string.

## String validation

This feature also provides validation to ensure that your `var()` and `calc()` expressions are accurate and won’t throw CSS errors. If an expression is invalid, you’ll see warnings for an incorrect number of brackets. This is tremendously helpful at catching errors and potentially creating stylesheet breakage with invalid `var()`s.

