<?php
/**
 * ACSS Lite - WordPress Integration
 *
 * Drop this file into wp-content/mu-plugins/ or include it in your theme's functions.php
 * Make sure to copy the CSS files to your theme or adjust paths below.
 *
 * @package ACSS_Lite
 */

if (!defined('ABSPATH')) {
    exit;
}

class ACSS_Lite_Loader {

    /**
     * Path to the CSS files relative to theme directory
     * Adjust this if you place files elsewhere
     */
    private $css_path = '/css/acss-lite/';

    /**
     * Which build to use: 'core' or 'full'
     * - core: Variables, reset, utilities, content-grid, smart-spacing (26KB)
     * - full: Core + buttons, cards, forms, badges (39KB)
     */
    private $build = 'full';

    /**
     * Initialize the loader
     */
    public function __construct() {
        // Frontend styles
        add_action('wp_enqueue_scripts', [$this, 'enqueue_frontend_styles'], 5);

        // Block editor styles
        add_action('after_setup_theme', [$this, 'add_editor_support']);
        add_action('enqueue_block_editor_assets', [$this, 'enqueue_editor_styles']);

        // Optional: Dequeue heavy block library theme styles
        add_action('wp_enqueue_scripts', [$this, 'dequeue_unnecessary_styles'], 100);

        // Add body classes for content-grid support
        add_filter('body_class', [$this, 'add_body_classes']);
    }

    /**
     * Enqueue styles on the frontend
     */
    public function enqueue_frontend_styles() {
        $file = $this->build === 'full' ? 'acss-lite-full.min.css' : 'acss-lite.min.css';

        wp_enqueue_style(
            'acss-lite',
            get_template_directory_uri() . $this->css_path . $file,
            [],
            filemtime(get_template_directory() . $this->css_path . $file)
        );

        // Block overrides - loaded after framework
        wp_enqueue_style(
            'acss-lite-blocks',
            get_template_directory_uri() . $this->css_path . 'block-overrides.css',
            ['acss-lite', 'wp-block-library'],
            filemtime(get_template_directory() . $this->css_path . 'block-overrides.css')
        );
    }

    /**
     * Add editor style support
     */
    public function add_editor_support() {
        add_theme_support('editor-styles');

        // This loads in the iframe editor
        $file = $this->build === 'full' ? 'acss-lite-full.min.css' : 'acss-lite.min.css';
        add_editor_style($this->css_path . $file);
        add_editor_style($this->css_path . 'block-overrides.css');
        add_editor_style($this->css_path . 'editor-specific.css');
    }

    /**
     * Enqueue editor-specific styles (outside iframe)
     */
    public function enqueue_editor_styles() {
        wp_enqueue_style(
            'acss-lite-editor',
            get_template_directory_uri() . $this->css_path . 'editor-specific.css',
            ['wp-edit-blocks'],
            filemtime(get_template_directory() . $this->css_path . 'editor-specific.css')
        );
    }

    /**
     * Dequeue styles we don't need
     * We keep wp-block-library (structural) but remove wp-block-library-theme (opinionated)
     */
    public function dequeue_unnecessary_styles() {
        // Safe to remove - just theme-level block styling
        wp_dequeue_style('wp-block-library-theme');

        // Uncomment if you want to fully control global styles
        // wp_dequeue_style('global-styles');
    }

    /**
     * Add useful body classes
     */
    public function add_body_classes($classes) {
        $classes[] = 'acss-lite';

        // Add smart-spacing to body so it applies globally
        // Remove if you prefer to add it per-container
        $classes[] = 'smart-spacing';

        return $classes;
    }
}

// Initialize
new ACSS_Lite_Loader();

/**
 * Helper function to output content-grid wrapper
 * Use in templates: acss_content_grid_start() ... content ... acss_content_grid_end()
 */
function acss_content_grid_start($classes = '') {
    $base_classes = 'content-grid smart-spacing';
    echo '<div class="' . esc_attr(trim($base_classes . ' ' . $classes)) . '">';
}

function acss_content_grid_end() {
    echo '</div>';
}
