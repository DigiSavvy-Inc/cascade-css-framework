---
source: https://automaticcss.com/docs/website-width-breakpoints/
---

# Website Width & Breakpoints - Automatic.css

Category: Setup

[Back to Docs](https://automaticcss.com/docs)### Navigation

# Website Width & Breakpoints

Automatic.css conforms to your website’s actual dimensions (website width and viewport dimensions) for maximum accuracy in responsiveness. It also allows you to set custom breakpoints that match the specific WordPress page builder you’re using.

## Setting Website Width

To set your website’s width, open the Viewport tab in the ACSS dashboard and change the Website Width input to your desired value:

![Website Dimensions Panel](https://automaticcss.com/wp-content/uploads/CleanShot-2024-10-26-at-18.30.46@2x-1024x887.jpg)Website Dimensions Panel
It’s essential that the website width in ACSS settings matches the website width or container width that you’ve set in your page builder. The framework has to know your website’s dimensions in order for things like responsive typography, responsive spacing, and auto grids to function accurately.

## Setting Basic Breakpoints

ACSS has the following breakpoint options by default:

It’s best practice to make sure your largest breakpoint is equal to the website width you set in the Website Dimensions area (unless you’re using the extra breakpoints as detailed below).

Breakpoints are customizable via the Viewport tab:

![Breakpoints Setup Panel](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1000'%20height='1024'%20viewBox='0%200%201000%201024'%3E%3C/svg%3E)![Breakpoints Setup Panel](https://automaticcss.com/wp-content/uploads/CleanShot-2024-10-26-at-18.31.52@2x-1000x1024.jpg)Breakpoints Setup Panel
The most important thing to understand when setting up breakpoints is that they must align with the values you’ve set in your page builder. If the page builder and ACSS use two different sets of breakpoints, your responsiveness will be inconsistent.

Whatever changes you make to breakpoint values here must also be set in your page builder.

Note: Because of the way some page builders show breakpoints in the builder (Oxygen Builder, for example), it may be necessary to set up your builder breakpoints at 1px less than your ACSS breakpoint values for maximum accuracy in the builder. Follow the latest setup documentation for your specific builder – do not blindly follow old video tutorials.

## Additional Breakpoints

Aside from the standard breakpoints, ACSS offers two additional breakpoints that are optional. These breakpoints are off by default, but can easily be turned on in the Viewport tab:

![XXL and XS Breakpoint Activation](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1000'%20height='1024'%20viewBox='0%200%201000%201024'%3E%3C/svg%3E)![XXL and XS Breakpoint Activation](https://automaticcss.com/wp-content/uploads/CleanShot-2024-10-26-at-18.31.52@2x-1-1000x1024.jpg)XXL and XS Breakpoint Activation
The XXL breakpoint is helpful if you design a site above the average width. Most websites are between 1140 and 1280px. If you design a site at 1366px, 1440px, or higher, you’ll likely find value in enabling the XXL breakpoint and shifting the other breakpoint values to minimize the gap between your largest breakpoint and the next breakpoint down.

If you find too much of a gap between one breakpoint and another, activating the XS breakpoint as an additional option can help.

## Mapping Breakpoints in Bricks Builder

Whether you’re sticking to the standard breakpoints or adding additional breakpoints, we recommend mapping all your ACSS breakpoints over to Bricks. This will keep the names and values consistent and ensure your site works fluidly.

First, ensure you’ve turned on Custom Breakpoints in Bricks’ settings:

![Bricks Custom Breakpoint Settings](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1920'%20height='1690'%20viewBox='0%200%201920%201690'%3E%3C/svg%3E)![Bricks Custom Breakpoint Settings](https://automaticcss.com/wp-content/uploads/2023/08/bricks-custom-breakpoints-settings-scaled-1.jpg)Bricks Custom Breakpoint Settings
Once that’s enabled, you can edit breakpoints in Bricks from any page as long as you have the builder open.

In the builder, click the three dots next to the breakpoints to open the editor panel.

![Bricks Breakpoint Editor Panel](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='2477'%20height='1080'%20viewBox='0%200%202477%201080'%3E%3C/svg%3E)![Bricks Breakpoint Editor Panel](https://automaticcss.com/wp-content/uploads/2023/08/bricks-breakpoints-scaled-1.jpg)Bricks Breakpoint Editor Panel
Bricks sets the top breakpoint as the “base” breakpoint by default. You can change the value of the base breakpoint, but you should never set any other breakpoint as the base breakpoint. This will break your site.

### If you’re using standard breakpoints:

Now your breakpoint names in Bricks map perfectly to your breakpoint names in ACSS.

### If you’re using additional breakpoints:

Your custom/additional breakpoints now map perfectly to your breakpoint names and values in ACSS.

