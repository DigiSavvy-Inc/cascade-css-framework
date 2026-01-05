---
source: https://automaticcss.com/docs/how-to-setup-acss-with-bricks-builder/
---

# ACSS & Bricks Builder Setup - Automatic.css

Category: Builder Configuration

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Bricks Builder Setup

If you’re using Bricks Builder and Automatic.css, please follow the setup steps below.

## Option #1: Automatic Setup

We provide two settings files to establish the default settings for your Bricks project automatically. One is a Bricks Settings file and the other is a Bricks Theme file.

Warning: These files should be used to start a new project. Uploading them to an existing project will overwrite your settings and defaults.

### Step #1: Import Bricks Settings File

Download this Bricks Settings Blueprint file (.zip), unzip it to expose the .json file, and upload the .json file to your Bricks Settings Panel:

![](https://automaticcss.com/wp-content/uploads/bricks-import-settings-1024x496.jpg)
### Step #2: Import Bricks Theme File

Bricks uses Global Theme Styles to control a lot of your website’s default styling. Most of this should be left undefined, but a few settings need to be set up.

Download this Bricks Theme file (.zip), unzip it to expose the .json file, and then upload the .json file to the Bricks Global Theme Styles area.

Open Bricks Builder by editing any page or template. Once in the editor, click the settings wheel toward the top left: Bricks Global Styles

![Create New Theme Style in Bricks](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='884'%20height='736'%20viewBox='0%200%20884%20736'%3E%3C/svg%3E)![Create New Theme Style in Bricks](https://automaticcss.com/wp-content/uploads/CleanShot-2023-09-14-at-12.51.35@2x.jpg)Create New Theme Style in Bricks
![Upload Bricks Theme Style JSON File](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='882'%20height='670'%20viewBox='0%200%20882%20670'%3E%3C/svg%3E)![Upload Bricks Theme Style JSON File](https://automaticcss.com/wp-content/uploads/CleanShot-2023-09-14-at-12.51.22@2x.jpg)Upload Bricks Theme Style JSON File
![How to add a Theme Style in Bricks](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='800'%20height='800'%20viewBox='0%200%20800%20800'%3E%3C/svg%3E)![How to add a Theme Style in Bricks](https://automaticcss.com/wp-content/uploads/CleanShot-2024-08-20-at-21.47.40.gif)
Once you’ve uploaded both files, you’re good to go. You can now proceed with customizing any empty settings based on your preferences (such as setting your font family in Typography > Body/Headings).

## Option #2: Manual Setup

If you don’t want to use our settings files, you can configure the settings manually. Here are the steps:

### Step #1: Configure Bricks Settings

Navigate to Bricks > Settings in the WordPress Admin:

![Bricks Builder Settings](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='999'%20viewBox='0%200%201024%20999'%3E%3C/svg%3E)![Bricks Builder Settings](https://automaticcss.com/wp-content/uploads/bricks-settings-1024x999.jpg)Bricks Builder Settings
Configure as follows:

#### General

Post TypesPostsOff (recommended)PagesOnSelect post types to [edit with Bricks](https://academy.bricksbuilder.io/article/editing-with-bricks).

Gutenberg Data

        Load Gutenberg data into Bricks
    Off
        Save Bricks data as Gutenberg data
    Off[Convert Gutenberg data](https://academy.bricksbuilder.io/article/gutenberg) into Bricks data and vice versa.

SVG Uploads
AdministratorOnEditorOnAuthorOff[https://academy.bricksbuilder.io/article/svg-uploads](https://academy.bricksbuilder.io/article/svg-uploads)

Miscellaneous

        Disable global class manager
    Off
        Disable CSS variables manager
    Off
        Disable Bricks Open Graph Meta Tags
    On
        Disable Bricks SEO Meta Tags
    On
        Generate Custom Images Sizes
    Off
        Add element ID as needed
    On
        Disable “Skip Links”
    Off
        Smooth Scroll (CSS)
    Off
        Enable “Delete Bricks data” button
    Off
        Query Bricks data in search results
    
        On ([Read more](https://forum.bricksbuilder.io/t/can-someone-please-explain-query-bricks-data-in-search-results-what-does-it-do/4404))
    
        Save form submissions in database
    User Preference

Query Filters

        Enable query sort / filter / live search
    On
Custom breakpointsCustom breakpoints On[Custom breakpoints](https://academy.bricksbuilder.io/article/responsive-editing/#custom-breakpoints) are best configured before you start working on your site.

Convert

        Convert “Container” to new “Section” & “Block” elements
    Off
        Convert element IDs & classes
    Off
        Add “position: relative” as needed
    Off
        Entry animation to interaction
    Off[https://academy.bricksbuilder.io/article/converter](https://academy.bricksbuilder.io/article/converter)

Custom authentication pages
LoginUser PreferenceRegistrationUser PreferenceLost passwordUser PreferenceReset passwordUser Preference[https://academy.bricksbuilder.io/article/custom-authentication-pages](https://academy.bricksbuilder.io/article/custom-authentication-pages)
#### Builder Access

Builder accessAdministratorFull accessEditorEdit ContentAuthorNo AccessContributorNo AccessSubscriberNo AccessSet [builder access](https://academy.bricksbuilder.io/article/builder-access) per user role. To define access for a specific user edit the user profile directly.
#### Templates

My TemplatesTemplate screenshotsUser PreferenceTemplate manager thumbnail heightUser PreferenceTemplate thumbnail columnUser PreferenceDisable default templatesUser PreferencePublic templatesUser PreferenceMy Templates AccessUser Preference
Remote templatesNameFramesURL[https://bricks.getframes.io](https://bricks.getframes.io)Password*** Your Frames License *** only if you own Frames
MiscellaneousConvert templatesOffConvert template on import/insert from Container to new layout elements structure ([Section > Container > Block / Div](https://academy.bricksbuilder.io/article/layout)).
#### Builder

AutosaveDisable autosaveOn
Builder ModeBuilder ModeDark (User Preference)
LanguageBuilder languageUser Preferencebuilder language directionAuto
Toolbar logo link﻿builder toolbar logoView on frontendOpen in new tabOn
Control panel﻿Disable auto-expand (Text editor, Code)OnDisable global classes (Interface)OffVariable dropdown: Hide valueOffCode control: Vim (Toggle)User PreferenceElement BreadcrumbsOff
Canvas﻿Disable element spacingOnAuto scroll element into view:0
Structure panel﻿DuplicateOnDeleteOnCollapse on page loadOn Expand active element & scroll into viewOn
Element actions﻿Wrap elementBlockInsert elementBlockInsert layoutBlock
Disable WP REST API render﻿Disable WP REST API renderOff
WP polyfill﻿WP polyfillOff
Dynamic data﻿Render dynamic data text on canvasOnDisable WordPress custom fields in dropdownOnDropdown: Show dynamic data key in dropdownOnDropdown:Hide dynamic data label in dropdownOnDropdown: Expand panel when dropdown is visibleOn
Global data sync﻿Sync global classesOn
#### Performance

Performance﻿Disable emojisOnDisable embedOffDisable Google FontsOnDisable lazy loadingOn (Turn off when Using Perfmatters or similar)Disable jQuery migrateOnCache query loopsOffDisable class chainingOn (REQUIRED)CSS loading method[](https://academy.bricksbuilder.io/article/asset-loading)Inline Styles
Once you’ve configured the settings, it’s time to setup your Global Theme Styles.

### Step #2: Global Theme Styles

Open Bricks Builder by editing any page. Once in the editor, click the settings wheel toward the top left:

![Bricks Global Styles](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='864'%20height='472'%20viewBox='0%200%20864%20472'%3E%3C/svg%3E)![Bricks Global Styles](https://automaticcss.com/wp-content/uploads/bricks-settings-wheel.jpg)Bricks Global Styles
Next, click on Theme Styles. Once the panel opens, click the plus sign to add a new theme:

![Create New Theme Style in Bricks](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='884'%20height='736'%20viewBox='0%200%20884%20736'%3E%3C/svg%3E)![Create New Theme Style in Bricks](https://automaticcss.com/wp-content/uploads/CleanShot-2023-09-14-at-12.51.35@2x.jpg)Create New Theme Style in Bricks
Give your Theme Style a name and click “Create.”

The first thing you need to do is assign your new theme style to your entire website. You can do that in the Conditions tab:

![Bricks Theme Style Conditions](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='922'%20height='1196'%20viewBox='0%200%20922%201196'%3E%3C/svg%3E)![Bricks Theme Style Conditions](https://automaticcss.com/wp-content/uploads/bricks-theme-style-conditions.jpg)Bricks Theme Style Conditions

Warning: If you don’t assign your theme styles, you won’t see them at all and ACSS won’t work properly. Make sure you assign the styles to your entire website.

Warning: These settings should only be used to start a new project. Changing them on an existing project will overwrite your current settings, all your headings that aren’t individually set will become h2.  Importing templates that don’t have explicit settings will also use your defaults.

Here are the rest of the settings (panels & settings that aren’t mentioned require no changes):

Using these settings means headings will be h2.  When the defaults are not what you need, change the individual element after adding it.

Caution: Setting other global styles in Bricks can cause conflicts with ACSS. Make sure you know exactly what you’re doing if you want to set any other global style defaults in Bricks.

That’s it! Bricks is now setup and ready to work properly with ACSS!

