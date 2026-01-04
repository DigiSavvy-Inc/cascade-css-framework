# Cascade CSS Framework

A lightweight, variable-driven CSS framework focused on consistency, mathematical precision, and contextual design patterns.

> **Important Notice**: This is an independent CSS framework that is NOT affiliated with, endorsed by, or officially related to Automatic.css. While inspired by systematic CSS design concepts, Cascade CSS is a separate implementation with its own architecture and may contain differences, limitations, or bugs not present in other frameworks. This project is developed and maintained independently.

## What's Included

- **custom-css-framework/** - The complete CSS framework source and build files
- **Examples** - Interactive demos showcasing framework features
- **Documentation** - Complete setup and usage guides

## Getting Started

### Option 1: WordPress Integration

Add the framework to your WordPress theme without any plugins:

```php
// In your theme's functions.php
function enqueue_cascade_css() {
    wp_enqueue_style(
        'cascade-css',
        get_template_directory_uri() . '/assets/css/framework.min.css',
        array(),
        '1.0.0'
    );
}
add_action('wp_enqueue_scripts', 'enqueue_cascade_css');
```

Or use with page builders:
- **Bricks Builder**: Add to Settings → Custom Code → Custom CSS
- **Oxygen Builder**: Add to Manage → Settings → Global Styles → CSS
- **Breakdance**: Add to Settings → Custom Code → Header

### Option 2: Any Web Project

#### Quick Setup (Using CDN)
```html
<!-- Add to your HTML <head> -->
<link rel="stylesheet" href="https://unpkg.com/cascade-css@latest/dist/framework.min.css">
```

#### Local Installation
```bash
# Using npm
npm install cascade-css

# Or download directly
wget https://github.com/DigiSavvy-Inc/cascade-css/raw/main/custom-css-framework/dist/framework.min.css
```

Then include in your HTML:
```html
<link rel="stylesheet" href="path/to/framework.min.css">
```

### Option 3: Build from Source

```bash
# Clone the repository
git clone https://github.com/DigiSavvy-Inc/cascade-css.git
cd cascade-css/custom-css-framework/

# Install dependencies
npm install

# Build the framework
npm run build

# For development with hot reload
npm run dev
```

## Customization

### Using SCSS Variables

Create your own build with custom settings:

```scss
// your-custom-build.scss
$framework-config: (
  'colors': (
    'primary': #your-color,
    'secondary': #your-color,
  ),
  'content-width': 1200px,
  'type-scale': 1.25,
);

// Import the framework
@import 'path/to/cascade-css/src/main';
```

### Using CSS Custom Properties

Override variables in your CSS:

```css
:root {
  --primary: #your-color;
  --space-m: 1.5rem;
  --content-width: 1200px;
}
```

## Basic Usage

### HTML Structure
```html
<section class="padding--xl">
  <div class="container">
    <div class="grid--3 gap--l">
      <div class="card padding--l radius--m shadow--m">
        <h2 class="text--xl text--primary margin-bottom--m">Card Title</h2>
        <p class="text--m text--neutral">Card content with automatic spacing.</p>
        <button class="btn btn--primary margin-top--m">Learn More</button>
      </div>
      <!-- More cards... -->
    </div>
  </div>
</section>
```

### Using CSS Variables
```css
/* Component using framework variables */
.custom-hero {
  padding-block: var(--section-space-xl);
  background: var(--primary-ultra-light);
  color: var(--base);
}

.custom-hero__title {
  font-size: var(--h1);
  margin-bottom: var(--space-l);
  color: var(--primary-dark);
}
```

## Framework Features

- **Variable-first architecture** - CSS custom properties as foundation
- **T-shirt sizing** (xs, s, m, l, xl, xxl) for consistency
- **Mathematical scales** - Golden ratio spacing, major third typography
- **Contextual utilities** - Purpose-built spacing (content-gap, grid-gap, container-gap)
- **Automatic color variations** - Light, dark, hover, and transparency variants
- **Zero dependencies** - Pure CSS output that works anywhere

## Available Files

- `framework.css` - Full framework with all features (development)
- `framework.min.css` - Minified version for production
- `framework-vars.css` - Only CSS variables (lightweight option)
- `framework-utilities.css` - Only utility classes

## Documentation

- **[Framework Documentation](custom-css-framework/README.md)** - Detailed framework features
- **[Getting Started Guide](docs/GETTING-STARTED.md)** - Usage examples and patterns
- **[Build Instructions](docs/BUILD.md)** - Development setup
- **[Interactive Examples](custom-css-framework/examples/style-guide.html)** - Live demos

## Common Use Cases

### WordPress Theme Development
1. Copy `dist/framework.min.css` to your theme's assets folder
2. Enqueue the stylesheet in `functions.php`
3. Use utility classes in your templates
4. Override variables in your theme's CSS for branding

### Static Site Generators
- **Hugo**: Add to `static/css/` directory
- **Jekyll**: Add to `assets/css/` directory
- **11ty**: Add to your CSS pipeline
- **Gatsby**: Import in your global CSS

### Modern JavaScript Frameworks
```javascript
// React/Vue/Angular
import 'cascade-css/dist/framework.min.css';

// Or import SCSS for customization
import 'cascade-css/src/main.scss';
```

## Inspiration & Philosophy

Cascade CSS is an independent CSS framework inspired by systematic CSS design concepts and modern CSS architecture principles. This project is not affiliated with any other CSS framework or organization.

**Key Design Philosophy:**
- Consistency over flexibility
- Variable-first architecture
- Mathematical design systems
- Contextual utility patterns

**Important Clarifications:**
- This is an independent implementation developed from scratch
- Not affiliated with, endorsed by, or officially related to Automatic.css
- May contain differences, limitations, or bugs not present in other frameworks
- Developed and maintained as a separate open-source project

## License

MIT License - See LICENSE file for details.