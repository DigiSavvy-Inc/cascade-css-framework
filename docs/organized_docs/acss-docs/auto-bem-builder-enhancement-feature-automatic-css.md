---
source: https://automaticcss.com/docs/auto-bem/
---

# Auto-BEM Builder Enhancement Feature - Automatic.css

Category: Workflow Enhancements

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Auto-BEM

Auto-BEM revolutionizes the way users add custom classes in page builders. This feature automatically adds a custom class to a parent and all its children in two clicks using BEM methodology for proper organization and maintainability.

The class names are derived from the element name in the structure panel but can quickly and easily be overridden during the class creation process.

That’s not all, though! Keep reading for a full breakdown of all features.

## Activating Auto-BEM Functionality

To use Auto-BEM in a supported page builder, first activate it from the ACSS dashboard:

![ACSS Auto-BEM Settings in Dashboard](https://automaticcss.com/wp-content/uploads/CleanShot-2023-09-29-at-10.52.20@2x-1024x849.jpg)
Once it’s activated and you save changes, you can open the builder.

The Auto-BEM feature will show up in the structure panel. The “BEM” indicator may be slightly different depending on the builder you’re using, but look for a “BEM” label on any parent element.

![BEM Badge in Structure Panel](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='864'%20height='616'%20viewBox='0%200%20864%20616'%3E%3C/svg%3E)![BEM Badge in Structure Panel](https://automaticcss.com/wp-content/uploads/auto-bem.jpg)
## Creating BEM Classes

The primary use of this feature is to create BEM classes for the parent element and all its children.

As an example, let’s say we have a “service card” with two internal wrappers and elements within those. Without Auto-BEM, you have to manually select every element one by one and type the class name with the BEM extensions. With Auto-BEM enabled, you have two options:

If you single-click the BEM badge, here’s what you’ll see:

![Preview of the Auto-BEM panel](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='728'%20viewBox='0%200%201024%20728'%3E%3C/svg%3E)![Preview of the Auto-BEM panel](https://automaticcss.com/wp-content/uploads/auto-bem-panel-1024x728.jpg)
A positionable panel appears, showing you the parent element and all of its children with proper nesting structure. By default, the class names are mapped to the names of the elements in the structure panel.

If you need to make changes to the class names, you can click any class name directly in the Auto-BEM panel and edit it. If you want to sync this edit back to the structure panel, enable the “Sync Labels” toggle.

![Sync Labels option in Auto BEM Panel](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='728'%20viewBox='0%200%201024%20728'%3E%3C/svg%3E)![Sync Labels option in Auto BEM Panel](https://automaticcss.com/wp-content/uploads/auto-bem-sync-labels-1024x728.jpg)
When you’re ready to apply the classes to the elements, click “Apply Classes.” Now you’re all set to begin styling!

## Excluding Elements From Auto-BEM

There might be cases where you want to exclude an element or group of elements from getting Auto-BEM classes. This is easy to do by hovering over the element in the Auto-BEM panel and clicking the “X” icon.

!["X" Icon for removing element from Auto-BEM](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='951'%20height='1024'%20viewBox='0%200%20951%201024'%3E%3C/svg%3E)!["X" Icon for removing element from Auto-BEM](https://automaticcss.com/wp-content/uploads/auto-bem-exclude-951x1024.jpg)
Now, all elements will receive classes except the excluded elements.

## Excluding Words From Auto-BEM

There could be times when you want a small note in the structure panel, but you don’t want this text applied to classes when using Auto-BEM. For example, some users write “(CSS)” to denote that an element has custom CSS.

For this reason, any text wrapped in “()” or “[]” will be ignored by Auto-BEM.

## Existing Class Handling

If a parent and its children already have BEM classes when you click the BEM badge, a common case for Frames users or users of other layout and block packs, Auto-BEM will automatically detect this and present you with options for handling the existing classes.

![Auto-BEM "Mode" panel showing options for renaming, deleting, removing, and keeping old classes.](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='902'%20viewBox='0%200%201024%20902'%3E%3C/svg%3E)![Auto-BEM "Mode" panel showing options for renaming, deleting, removing, and keeping old classes.](https://automaticcss.com/wp-content/uploads/auto-bem-existing-1024x902.jpg)
Options include:

Frames users can now preserve all frames in their default state without losing BEM functionality and without having to create and delete classes manually.

Important Note: You will only see the above handling options when clicking the BEM button on “blocks” that have “element” children. If the only direct child of a block is another block, you won’t see these handling options. We can’t auto-BEM elements that don’t exist, so it’s important to make sure you’re selecting a block that actually has element children.

We hope you love this new feature as much as we do, and we’re excited to bring even more functionality and efficiency to this process.

