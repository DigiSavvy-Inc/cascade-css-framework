# Cascade CSS Framework

A lightweight, variable-driven CSS framework focused on consistency, mathematical precision, and contextual design patterns.

> **Important Notice**: This is an independent CSS framework that is NOT affiliated with, endorsed by, or officially related to Automatic.css. While inspired by systematic CSS design concepts, Cascade CSS is a separate implementation with its own architecture and may contain differences, limitations, or bugs not present in other frameworks. This project is developed and maintained independently.

## Core Principles

- **Consistency over flexibility**: Limited, predictable options using T-shirt sizing (xs, s, m, l, xl, xxl)
- **Variable-first architecture**: CSS custom properties as foundation
- **Contextual design**: Purpose-built utilities for specific contexts
- **Mathematical relationships**: Proportional scales using calc()
- **Zero dependencies**: Works anywhere CSS works

## Quick Start

### 1. Drop-in CSS (Simplest)

```html
<!-- Full framework with all features -->
<link rel="stylesheet" href="path/to/cascade-full.min.css">

<!-- Or core framework (lighter) -->
<link rel="stylesheet" href="path/to/cascade.min.css">
```

### 2. WordPress Integration (No Plugin Required)

```php
// In your theme's functions.php
function enqueue_cascade_css() {
    wp_enqueue_style(
        'cascade-css',
        get_template_directory_uri() . '/assets/css/cascade-full.min.css',
        array(),
        '0.2.0'
    );
}
add_action('wp_enqueue_scripts', 'enqueue_cascade_css');
```

### 3. SCSS Customization

```scss
// Create your own theme file that overrides CSS variables
// See dist/theme-example.css for reference

:root {
  --primary: #e74c3c;
  --secondary: #3498db;
  --content-width: 1200px;
}

// Or import and extend the SCSS source
@use 'path/to/src-lean/cascade-full' as cascade;
```

## Available Files

```
dist/
├── cascade.css             # Core framework (expanded)
├── cascade.min.css         # Core framework (minified)
├── cascade-full.css        # Full framework with all features (expanded)
├── cascade-full.min.css    # Full framework with all features (minified)
├── theme-example.css       # Theme customization example
└── modules/                # Individual components
    ├── buttons.css
    ├── cards.css
    ├── forms.css
    └── badges.css
```

**Which file should I use?**
- `cascade-full.min.css` - Recommended for most projects (all features included)
- `cascade.min.css` - Lighter option if you only need core utilities
- `modules/*.css` - Import individual components as needed

## Key Features

### Color System
- Automatic color variations (light, dark, hover)
- HSL-based for calc() operations
- Transparency variants
- Contextual colors (success, warning, danger, info)

### Typography System
- Fluid, responsive sizing without media queries
- Mathematical type scale
- T-shirt sizing for consistency

### Spacing System
- Golden ratio-based scale
- Contextual gaps (content-gap, grid-gap, container-gap)
- Section spacing utilities

### Layout System
- CSS Grid templates
- Auto-responsive grids
- Container width management
- Flexbox utilities

## Variable Naming Convention

```css
/* Colors */
--primary, --primary-light, --primary-hover

/* Typography */
--h1, --text-m, --text-line-height

/* Spacing */
--space-m, --section-space-l, --grid-gap

/* Layout */
--grid-3, --content-width
```

## Utility Class Convention

```css
/* Double-dash syntax */
.text--xl
.padding--m
.grid--3

/* T-shirt sizes only */
.{property}--{xs|s|m|l|xl|xxl}
```

## Development

```bash
# Install dependencies
npm install

# Build all files
npm run build

# Watch for changes
npm run watch

# Development mode
npm run dev
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Documentation & Demos

- **[Content-Grid Demo](cascade-demos/content-grid.html)** - Interactive demo of the 7-column content-grid system
- **[Style Guide](cascade-demos/style-guide.html)** - Typography, spacing, and color reference
- **[Homepage Demo](cascade-demos/homepage.html)** - Responsive marketing page example

## Project Structure

```
├── src-lean/              # Main SCSS source (recommended)
│   ├── core/              # Variables, reset, utilities
│   ├── systems/           # Content-grid, smart-spacing
│   ├── patterns/          # Buttons, cards, forms, badges
│   ├── cascade.scss       # Core framework entry
│   ├── cascade-full.scss  # Full framework entry
│   └── theme.scss         # Theme customization example
├── dist/                  # Compiled CSS files
├── cascade-demos/         # Interactive demos and examples
└── wordpress/             # WordPress integration helpers
```

## Design Philosophy

Cascade CSS is an independent CSS framework inspired by systematic CSS design concepts and modern CSS architecture principles.

**Core Design Principles:**
- T-shirt sizing methodology for consistency
- Mathematical design systems
- Variable-first architecture
- Contextual utility design
- "Consistency over flexibility" philosophy

**Important Clarifications:**
- This is an independent implementation developed from scratch
- Not affiliated with, endorsed by, or officially related to Automatic.css
- May contain differences, limitations, or bugs not present in other frameworks
- Developed and maintained as a separate open-source project

## Community & Support

- **Issues**: Report bugs and request features via GitHub Issues
- **Discussions**: Join community discussions for tips and best practices
- **Contributing**: See CONTRIBUTING.md for development guidelines

## License

MIT License - feel free to use in personal and commercial projects.

See [LICENSE](LICENSE) for full license text.
