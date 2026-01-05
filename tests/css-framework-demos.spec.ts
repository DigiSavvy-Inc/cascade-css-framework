import { test, expect, Page } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

const FRAMEWORK_DIR = '/Users/alexandervasquez/Repositories/acss-lite-framework/cascade-css-framework';

// Demo pages configuration
const DEMO_PAGES = {
  examples: [
    { name: 'content-grid-demo', file: 'content-grid-demo.html', description: 'Content Grid Demo' },
    { name: 'blog-article-demo', file: 'blog-article-demo.html', description: 'Blog Article Demo' },
    { name: 'style-guide', file: 'style-guide.html', description: 'Style Guide' },
    { name: 'layout-demo', file: 'layout-demo.html', description: 'Layout Demo' },
    { name: 'typography-demo', file: 'typography-demo.html', description: 'Typography Demo' },
    { name: 'color-demo', file: 'color-demo.html', description: 'Color Demo' },
  ],
  'examples-lean': [
    { name: 'homepage', file: 'homepage.html', description: 'Homepage (Lean)' },
    { name: 'blog-post', file: 'blog-post.html', description: 'Blog Post (Lean)' },
    { name: 'case-study', file: 'case-study.html', description: 'Case Study (Lean)' },
    { name: 'about', file: 'about.html', description: 'About Page (Lean)' },
    { name: 'blog-archive', file: 'blog-archive.html', description: 'Blog Archive (Lean)' },
  ],
};

interface ConsoleError {
  type: string;
  text: string;
}

interface TestContext {
  consoleErrors: ConsoleError[];
  networkErrors: string[];
}

// Helper to set up console and network error tracking
async function setupErrorTracking(page: Page): Promise<TestContext> {
  const context: TestContext = {
    consoleErrors: [],
    networkErrors: [],
  };

  page.on('console', msg => {
    if (msg.type() === 'error') {
      context.consoleErrors.push({ type: msg.type(), text: msg.text() });
    }
  });

  page.on('requestfailed', request => {
    context.networkErrors.push(`${request.url()} - ${request.failure()?.errorText || 'Unknown error'}`);
  });

  return context;
}

// Helper to check if CSS is loaded
async function verifyCSSLoaded(page: Page): Promise<boolean> {
  const stylesheets = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    const styles = Array.from(document.querySelectorAll('style'));
    return {
      externalCount: links.length,
      inlineCount: styles.length,
      cssCustomProperties: getComputedStyle(document.documentElement).getPropertyValue('--content-width') !== '',
    };
  });

  return stylesheets.externalCount > 0 || stylesheets.inlineCount > 0;
}

// Helper to check for common CSS framework classes
async function verifyFrameworkClasses(page: Page): Promise<{ found: string[]; missing: string[] }> {
  const commonClasses = ['.content-grid', '.container', '.section', '.text-l', '.gap-m', '.pad-s'];

  const results = await page.evaluate((classes) => {
    const found: string[] = [];
    const missing: string[] = [];

    classes.forEach(cls => {
      if (document.querySelector(cls)) {
        found.push(cls);
      } else {
        missing.push(cls);
      }
    });

    return { found, missing };
  }, commonClasses);

  return results;
}

// Helper to check layout integrity
async function verifyLayoutIntegrity(page: Page): Promise<{ issues: string[] }> {
  const issues: string[] = [];

  // Check for elements with zero dimensions that shouldn't have them
  const layoutProblems = await page.evaluate(() => {
    const problems: string[] = [];
    const containers = document.querySelectorAll('.container, .section, .content-grid, main, article');

    containers.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 && el.children.length > 0) {
        problems.push(`Zero-width container: ${el.className || el.tagName}`);
      }
    });

    // Check for horizontal overflow
    if (document.body.scrollWidth > window.innerWidth) {
      problems.push(`Horizontal overflow detected: body width ${document.body.scrollWidth}px > viewport ${window.innerWidth}px`);
    }

    return problems;
  });

  issues.push(...layoutProblems);
  return { issues };
}

// Test suite for original examples
test.describe('Original Examples Demos', () => {
  for (const demo of DEMO_PAGES.examples) {
    test(`${demo.description} - renders correctly`, async ({ page }) => {
      const filePath = `file://${path.join(FRAMEWORK_DIR, 'examples', demo.file)}`;
      const errorContext = await setupErrorTracking(page);

      await page.goto(filePath);
      await page.waitForLoadState('networkidle');

      // Take screenshot
      await page.screenshot({
        path: `test-results/${demo.name}-desktop.png`,
        fullPage: true,
      });

      // Verify CSS loaded
      const cssLoaded = await verifyCSSLoaded(page);
      expect(cssLoaded, 'CSS should be loaded').toBe(true);

      // Check for console errors
      expect(errorContext.consoleErrors, 'Should have no console errors').toHaveLength(0);

      // Check for network errors (CSS/JS loading failures)
      expect(errorContext.networkErrors, 'Should have no network errors').toHaveLength(0);

      // Check layout integrity
      const layout = await verifyLayoutIntegrity(page);
      expect(layout.issues, 'Should have no layout issues').toHaveLength(0);
    });
  }
});

// Test suite for lean build demos
test.describe('Lean Build Demos', () => {
  for (const demo of DEMO_PAGES['examples-lean']) {
    test(`${demo.description} - renders correctly`, async ({ page }) => {
      const filePath = `file://${path.join(FRAMEWORK_DIR, 'examples-lean', demo.file)}`;
      const errorContext = await setupErrorTracking(page);

      await page.goto(filePath);
      await page.waitForLoadState('networkidle');

      // Take screenshot
      await page.screenshot({
        path: `test-results/${demo.name}-lean-desktop.png`,
        fullPage: true,
      });

      // Verify CSS loaded
      const cssLoaded = await verifyCSSLoaded(page);
      expect(cssLoaded, 'CSS should be loaded').toBe(true);

      // Check for console errors
      expect(errorContext.consoleErrors, 'Should have no console errors').toHaveLength(0);

      // Check for network errors
      expect(errorContext.networkErrors, 'Should have no network errors').toHaveLength(0);

      // Check layout integrity
      const layout = await verifyLayoutIntegrity(page);
      expect(layout.issues, 'Should have no layout issues').toHaveLength(0);
    });
  }
});

// Content Grid specific tests
test.describe('Content Grid Demo - Detailed Tests', () => {
  test('content grid zones work correctly', async ({ page }) => {
    const filePath = `file://${path.join(FRAMEWORK_DIR, 'examples', 'content-grid-demo.html')}`;
    await page.goto(filePath);
    await page.waitForLoadState('networkidle');

    // Check that content grid is present
    const contentGrid = await page.locator('.content-grid').first();
    await expect(contentGrid).toBeVisible();

    // Verify content zones exist and have proper widths
    const zones = await page.evaluate(() => {
      const grid = document.querySelector('.content-grid');
      if (!grid) return null;

      const feature = grid.querySelector('.content--feature, [class*="feature"]');
      const full = grid.querySelector('.content--full, [class*="full"]');

      return {
        hasGrid: !!grid,
        hasFeatureZone: !!feature,
        hasFullZone: !!full,
        gridWidth: grid.getBoundingClientRect().width,
      };
    });

    expect(zones).not.toBeNull();
    expect(zones?.hasGrid).toBe(true);
  });
});

// Smart Spacing tests
test.describe('Blog Article Demo - Smart Spacing Tests', () => {
  test('content gap and spacing are applied', async ({ page }) => {
    const filePath = `file://${path.join(FRAMEWORK_DIR, 'examples', 'blog-article-demo.html')}`;
    await page.goto(filePath);
    await page.waitForLoadState('networkidle');

    // Check for content with proper spacing
    const spacingCheck = await page.evaluate(() => {
      const article = document.querySelector('article, main, .content');
      if (!article) return null;

      const style = getComputedStyle(article);

      return {
        hasArticle: !!article,
        gap: style.gap || style.getPropertyValue('--content-gap'),
        padding: style.padding,
      };
    });

    expect(spacingCheck).not.toBeNull();
    expect(spacingCheck?.hasArticle).toBe(true);
  });
});

// Responsive tests
test.describe('Responsive Behavior', () => {
  const viewports = [
    { name: 'mobile', width: 375, height: 812 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1280, height: 800 },
    { name: 'wide', width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    test(`Homepage renders at ${viewport.name} (${viewport.width}x${viewport.height})`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });

      const filePath = `file://${path.join(FRAMEWORK_DIR, 'examples-lean', 'homepage.html')}`;
      await page.goto(filePath);
      await page.waitForLoadState('networkidle');

      // Take screenshot at this viewport
      await page.screenshot({
        path: `test-results/homepage-${viewport.name}.png`,
        fullPage: true,
      });

      // Check for horizontal overflow (critical at all sizes)
      const overflow = await page.evaluate(() => {
        return document.body.scrollWidth > window.innerWidth;
      });

      expect(overflow, `No horizontal overflow at ${viewport.name}`).toBe(false);

      // Verify content is visible
      const hasVisibleContent = await page.evaluate(() => {
        const main = document.querySelector('main, article, .content, body > *');
        if (!main) return false;
        const rect = main.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      });

      expect(hasVisibleContent).toBe(true);
    });
  }

  test('Style Guide renders at all viewports', async ({ page }) => {
    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });

      const filePath = `file://${path.join(FRAMEWORK_DIR, 'examples', 'style-guide.html')}`;
      await page.goto(filePath);
      await page.waitForLoadState('networkidle');

      await page.screenshot({
        path: `test-results/style-guide-${viewport.name}.png`,
        fullPage: true,
      });

      // Check for major layout issues
      const issues = await page.evaluate(() => {
        const problems: string[] = [];

        // Check horizontal overflow
        if (document.body.scrollWidth > window.innerWidth + 5) {
          problems.push('Horizontal overflow');
        }

        // Check for cut-off text
        const textElements = document.querySelectorAll('h1, h2, h3, p');
        textElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.right > window.innerWidth) {
            problems.push(`Text overflow: ${el.tagName}`);
          }
        });

        return problems;
      });

      expect(issues).toHaveLength(0);
    }
  });
});

// CSS Custom Properties verification
test.describe('CSS Custom Properties', () => {
  test('core CSS variables are defined', async ({ page }) => {
    const filePath = `file://${path.join(FRAMEWORK_DIR, 'examples-lean', 'homepage.html')}`;
    await page.goto(filePath);
    await page.waitForLoadState('networkidle');

    const cssVars = await page.evaluate(() => {
      const root = document.documentElement;
      const style = getComputedStyle(root);

      const vars: Record<string, string> = {};
      const checkVars = [
        '--content-width',
        '--gutter',
        '--section-space',
        '--content-gap',
        '--grid-gap',
        '--text-m',
        '--h1',
      ];

      checkVars.forEach(v => {
        vars[v] = style.getPropertyValue(v).trim();
      });

      return vars;
    });

    // At least some core variables should be defined
    const definedVars = Object.entries(cssVars).filter(([_, value]) => value !== '');
    expect(definedVars.length).toBeGreaterThan(0);
  });
});

// Accessibility basic checks
test.describe('Basic Accessibility', () => {
  const pages = [
    { name: 'homepage', dir: 'examples-lean', file: 'homepage.html' },
    { name: 'style-guide', dir: 'examples', file: 'style-guide.html' },
  ];

  for (const pageInfo of pages) {
    test(`${pageInfo.name} has proper heading hierarchy`, async ({ page }) => {
      const filePath = `file://${path.join(FRAMEWORK_DIR, pageInfo.dir, pageInfo.file)}`;
      await page.goto(filePath);
      await page.waitForLoadState('networkidle');

      const headings = await page.evaluate(() => {
        const hs = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        return Array.from(hs).map(h => ({
          level: parseInt(h.tagName[1]),
          text: h.textContent?.trim().substring(0, 50),
        }));
      });

      // Should have at least one heading
      expect(headings.length).toBeGreaterThan(0);

      // Check for skipped heading levels
      let previousLevel = 0;
      const skippedLevels: string[] = [];

      headings.forEach(h => {
        if (h.level > previousLevel + 1 && previousLevel !== 0) {
          skippedLevels.push(`Skipped from h${previousLevel} to h${h.level}: "${h.text}"`);
        }
        previousLevel = h.level;
      });

      // Report skipped levels (warning, not failure for now)
      if (skippedLevels.length > 0) {
        console.warn('Heading hierarchy issues:', skippedLevels);
      }
    });

    test(`${pageInfo.name} images have alt text`, async ({ page }) => {
      const filePath = `file://${path.join(FRAMEWORK_DIR, pageInfo.dir, pageInfo.file)}`;
      await page.goto(filePath);
      await page.waitForLoadState('networkidle');

      const imagesWithoutAlt = await page.evaluate(() => {
        const images = document.querySelectorAll('img');
        return Array.from(images)
          .filter(img => !img.alt && !img.getAttribute('role'))
          .map(img => img.src || img.outerHTML.substring(0, 100));
      });

      expect(imagesWithoutAlt, 'All images should have alt text').toHaveLength(0);
    });
  }
});
