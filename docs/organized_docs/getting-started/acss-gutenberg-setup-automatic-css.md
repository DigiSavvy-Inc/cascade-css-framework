---
source: https://automaticcss.com/docs/gutenberg-setup/
---

# ACSS & Gutenberg Setup - Automatic.css

Category: Builder Configuration

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Gutenberg Setup

Automatic.css is fully compatible with WordPress’ Gutenberg editor. Follow the instructions below.

## Activating Gutenberg Support

By default, Gutenberg support is turned off. Open the ACSS dashboard and navigate to Options > Gutenberg.

There, you’ll find the options ACSS makes available to you to make the Block Editor behave in a more predictable way:

![The panel with Gutenberg-related options in the AutomaticCSS dashboard](https://automaticcss.com/wp-content/uploads/acss-gutenberg-switches-v3.3-783x1024.jpg)ACSS Gutenberg Options

## Pages, Posts, and Custom Post Types

By default, ACSS is available in both posts and pages, but with a critical visual difference.

Since pages are prone to being used for literal page building, the page editor will render full-width. And since blog posts are prone to being used for actual blog posts, the post editor will render the standard center-column narrow layout that you usually see in the Gutenberg post editor.

Additionally, support for custom post types is not available by default.

### Adding Support for Custom Post Types

To add support for custom post types, add the below snippet to your functions.php file and add the ID of all CPTs you want to add support for, separated by a comma.

```php
add_filter(
    'acss/gutenberg/allowed_post_types',
    function( $post_types ) {
        return array_merge( $post_types, array( 'post-type-slug', 'another-slug' ) ); // Add your post types in the array().
    }
);
```

### “Page” Block Width & “Post” Block Width

Gutenberg controls the width of elements in the block editor by setting a max-width on every element and then inline-centering every element. The width of elements is a fixed value.

To provide users with more flexibility, ACSS overrides this default static value with a value you can edit in the ACSS dashboard:

![Gutenberg block width settings in ACSS](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='876'%20viewBox='0%200%201024%20876'%3E%3C/svg%3E)![Gutenberg block width settings in ACSS](https://automaticcss.com/wp-content/uploads/gutenberg-block-width-1024x876.jpg)Gutenberg block width settings in ACSS
In fact, we give you a value for each of two contexts: pages and posts.

Page Block Width sets the width of blocks when editing pages and Post Block Width sets the width of blocks when editing posts and custom post types.

Of course, there are often times where you want a custom post type to behave like a page. In these cases, you can tell ACSS to make blocks for those post types equal to page width blocks. This is what the “Page-Width Post Types” input is for.

Just append the slug of your post type, e.g. “events” to the class `.post-type` and wrap it in quotes. Comma separate each post type class and then hit save.

Example:

```javascript
".post-type-events", ".post-type-services"
```

Of course, you have to make sure you have activated ACSS for those post types using the code snippet from the previous section.

That’s all there is to it. You’re now ready to use ACSS in Gutenberg.

