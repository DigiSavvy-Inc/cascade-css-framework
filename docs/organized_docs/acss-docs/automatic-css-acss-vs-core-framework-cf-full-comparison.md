---
source: https://automaticcss.com/acss-vs-core/
---

# Automatic.css (ACSS) vs Core Framework (CF): Full Comparison

# Automatic.css (ACSS) vs. Core Framework

Wondering what the differences are between Automatic.css (ACSS) and Core Framework (CF)? Here’s a detailed breakdown.

Written by

![Kevin Geary Headshot](https://secure.gravatar.com/avatar/a117f74b57f641cf18966ad5e250bdf2b99f834c9bea5cdea8e6a016cf370bf7?s=150&d=mm&r=g)Kevin Geary

Published on

January 8, 2024
[Blog](https://automaticcss.com/blog)[CSS Frameworks](https://automaticcss.com/category/css-frameworks/)![ACSS vs Core](https://automaticcss.com/wp-content/uploads/acss-vs-core-1168x658.jpg)
Automatic.css (ACSS) is consistently voted the #1 framework for WordPress page builders by various page builder communities. Core Framework (CF) is a younger framework product offering a similar but very different approach. This article will take an objective-as-possible look at the differences between ACSS and Core to help you decide which framework might best fit you.

NOTE: We won’t claim that this is a completely “unbiased” comparison. However, we made a strong effort to stay objective and stand by the facts presented throughout. This is also not an attack on Core Framework in any way. We respect their team and their product. Anyone is welcome to contact us to challenge the content in this comparison. We are committed to correcting any inaccuracies.

## Table of Contents

## Why use a framework in the first place?

A CSS framework offers tremendous benefits to web design and page-building workflow. Here are the top five reasons someone might use a framework for all their projects instead of managing styling from scratch:

## Both products are more than a framework

The great thing about Automatic.css and Core Framework is that both “frameworks” are actually much more than a CSS framework.

Most CSS frameworks are just a library of utilities. While ACSS and Core both fit within that definition, they also have features that conventional frameworks don’t have. These features are designed to enhance your workflow, solve common challenges, and make your life easier.

We’ll take a look at these features in more detail later in this write-up, but it’s important to understand that these products aren’t directly comparable to the typical definition of a “CSS framework.”

## The fundamental differences between ACSS and Core

There are three major philosophical differences between ACSS and Core. It’s important to understand these differences and their implications before deciding.

Let’s look at these differences in more detail:

### Big difference #1: ACSS is a complete framework, while Core is a starter framework.

ACSS was released as a complete “done for you” framework, while Core was released as more of a starter framework (This isn’t us talking down about Core. It’s what they provide by design).

What does that mean for you? Let’s take a look.

When using any framework, you’ll find that utilities fit into one of three buckets:

Both Core and ACSS offer the most common utilities that fall into the “essential” bucket. These are utilities within the categories of colors, spacing, typography, basic grid layout, buttons, etc. Even here, though, there are some things that Core is missing.

The following essential utilities are offered in ACSS but missing in Core:

Utilities that fall into the “important” category cover things like accessibility, flex, advanced grid, width, height, columns, shadows, text, etc. Automatic.css offers powerful utilities across all these categories. Core offers utilities within Grid (starts and spans), width, and flex alignments, but that’s it.

Here are some important utilities in ACSS that are missing in Core:

Utilities that fall into the “nice to have” category include things like ribbons, overlays, content flips, position, overflow, blur, filters, etc.

Here are some nice-to-have utilities from ACSS that are missing in Core:

Core gives you the tools to add some of these utilities (but certainly not all of them). However, adding utilities yourself assumes you:

And what about the ones that can’t be added in Core? For example, you can’t use Core to add overlays, Flex Grids, etc. This means you must maintain these utilities in a separate stylesheet after figuring out how they’re accomplished (and accomplished within the specific page builder you happen to use).

If you choose Core, you must be comfortable adding, managing, and maintaining the utilities not offered out of the box. With ACSS, you can focus on working with the confidence that this has all been figured out for you already.

And regarding users needing to know how utilities are accomplished if they want to add their own, there’s something to be said about general attention to detail and sensical naming conventions. This is what you’ll see in Core for the CSS Grid utilities:

![Core Grid Utilities](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='814'%20viewBox='0%200%201024%20814'%3E%3C/svg%3E)![Core Grid Utilities](https://automaticcss.com/wp-content/uploads/core-grid-utilities-1024x814.jpg)
The fact that grids are referred to as columns is pretty jarring, especially considering the fact that CSS has something called “columns” which are definitely not grids. Additionally, using 1fr as a unit is known to cause overflow in various situations. ACSS uses minmax(0, 1fr) for this very reason.

These kinds of little details make a big difference to the end user in a real-world workflow. You don’t want to be second-guessing your framework and constantly running into little issues while also dealing with naming convention confusion.

One last point regarding features and utilities: anything that you don’t want or need in ACSS can be turned off, so the framework can be as light/minimalist as you’d like or as complete as you’d like. Most users feel that turning off things they don’t need is far easier and better than adding things that aren’t there manually.

### Big difference #2: Core believes in unlimited flexibility while ACSS believes in structural consistency.

Core allows you unprecedented flexibility when it comes to manipulating the framework. Users can:

While this level of flexibility and customization may seem nice to have at first, Automatic.css has explicitly rejected the concept of unlimited flexibility.

In other words, these aren’t features that are missing from ACSS. Rather, they’re features that were considered and purposefully excluded because we believe that structural consistency is far more important than unlimited flexibility.

Look at the main goals of a framework – things like efficiency, consistency, etc. – and it becomes clear that unlimited flexibility is antithetical to these goals. This is especially true when you consider your workflow from project to project.

A consistent, efficient workflow is impossible if utility names aren’t always the same.

A consistent, efficient workflow is impossible if some projects have utilities that others don’t.

A consistent, efficient workflow is impossible if the relationships and logic between certain utilities change from project to project.

These customization features also present critical ecosystem challenges. Frames is efficient, powerful, and nearly flawless to work with across thousands of projects because it’s based on a structurally consistent Framework.

If users could change the names of utilities, Frames would constantly break on import from one site to another.

In fact, Core has a “class prefix” and “variable prefix” feature that allows users to put a custom prefix in front of every single class. Doing this instantly makes the website incompatible with design sets that use Core’s standard classes (when/if design sets are offered). That’s a large-scale issue.

The issue exists on a smaller scale as well, given the fact that users can change one-off utility names or the names of individual utility groups. For example, what if users don’t like .columns- for the grid naming convention and change it to .grid- instead?

Everything breaks.

I reached out to Eduware Izekor of BricksMaven about this because he has experience with designing Core Framework. Here’s what he had to say:

Yes, if the user switches up the variable conventions, the layout will break. With the template system I created I am using the default settings of Core to ensure that everything works for everyone. I also added some custom styles like section padding etc. The users has to import my core styles to ensure that everything works properly during the import process. You need some kind of standard to make sure adoptation is possible on a broad scale.

Eduware Izekor – [BricksMaven](https://bricksmaven.com/)
“Some kind of standard” is exactly correct! ACSS exists as the standard, and we’ve long been wary of infinite flexibility in conventions because of the challenges it causes at the freelance level all the way to the framework ecosystem level.

The most important aspect of all this is that ACSS, even when prioritizing structural consistency, doesn’t create any limitations. You can still add anything you feel might be missing on a specific project while remaining hooked into the framework. The difference is that the integrity of the base framework is never jeopardized and everyone is operating according to the same standard.

### Big difference #3: ACSS leaves components to the builder environment while Core brings component styling to its dashboard.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='750'%20viewBox='0%200%201024%20750'%3E%3C/svg%3E)![](https://automaticcss.com/wp-content/uploads/core-framework-components-1024x750.jpg)
Core offers an innovative approach to styling reusable components by offering a “Components” area in its dashboard.

This area can be used to manage simple components, like buttons, while also offering users a way to style more complex components like cards.

It’s an impressive aspect of Core, and they’ve done a great job with it, but it’s another feature that ACSS purposefully excludes. Let’s take a look at the workflow, and you’ll see why:

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='977'%20viewBox='0%200%201024%20977'%3E%3C/svg%3E)![](https://automaticcss.com/wp-content/uploads/CleanShot-2024-01-07-at-11.15.48@2x-1024x977.jpg)
Components in web design are a mix of HTML, PHP, JS, and CSS. Core is only a CSS framework tool, so it only allows you to define the CSS side of components.

The fact that this is done in a separate dashboard creates a major workflow disconnect in our opinion.

I started creating a card with the component builder in the above example. I gave it the class .service-card and then gave it some basic properties (padding, border, color).

Since you can’t declare any HTML, Core has to show you a preview of a very generic card with an icon, heading, and text. I’m sure you can already imagine the issues with this workflow.

And the most important question of all still hasn’t been asked. Why am I doing this in a CSS framework dashboard when I can do it in the page builder I’m already building the website with?

One of the most essential principles in workflow is: Don’t bounce from environment to environment. Every time you have to leave one environment and enter another, you’re killing workflow efficiency.

Core’s “components” dashboard forces you to leave your page-building workflow any time you need to adjust the styling of a component on the site or build a new component. It effectively introduces a new environment that doesn’t need to exist and has no real advantages. Styling of components is best handled in the page builder where you’re actually building and managing the component.

## Additional features in ACSS that don’t exist in Core

Aside from the differences in the utility libraries that were detailed earlier, Automatic.css offers the following powerful features that don’t currently exist in Core:

Remember, this list is in addition to the previous lists of utilities and features not found in Core that were detailed earlier.

## True Builder Integration (TBI)

Every page builder is different and takes a different approach to workflow, code output, etc. Knowing this, there are two questions you must ask when using a framework in a page builder:

Most frameworks will claim compatibility with certain page builders, but this only satisfies question #1.

Users often find – typically when they’re too far into a project to turn back – that a framework struggles in many situations because the page builder and the framework aren’t on the same page.

For example, when users try to turn a section into a Grid in Oxygen Builder with Automatic.css, it works perfectly. When you try to do the same thing with Core, the section breaks:

![Broken grid section in Core Framework](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='555'%20viewBox='0%200%201024%20555'%3E%3C/svg%3E)![Broken grid section in Core Framework](https://automaticcss.com/wp-content/uploads/core-broken-grid-1024x555.jpg)
This is because Oxygen, like many builders, has an improper section element with an inner wrapper that isn’t selectable by the user. Automatic.css accounts for this and applies the grid instruction to that inner wrapper in Oxygen while Core does not account for this.

Where Core users see a broken section, Automatic.css users see the grid they asked for:

![Working Grid section in ACSS](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='535'%20viewBox='0%200%201024%20535'%3E%3C/svg%3E)![Working Grid section in ACSS](https://automaticcss.com/wp-content/uploads/acss-oxy-grid-1024x535.jpg)
There are way more of these types of issues than you might think! And these points of failure create big headaches for the user. You must diagnose why something isn’t working and then work around it. Or, there might be something you need when working in a specific builder, but it’s not there because the framework wasn’t designed with that builder in mind.

Depending on your skill level, these issues and oversights can add costly hours to project timelines.

Automatic.css saves you from all that hassle because it’s the only framework that offers “True Builder Integration.” When we say that we integrate with a builder, it means we’ve tested every aspect of the framework in that particular builder, analyzed the code output of that builder, and designed the framework to load an overrides/adjustments file that ensures maximum efficiency and compatibility with that builder.

Other frameworks might be okay with 90% compatibility, but we’re not. We want users to have a buttery-smooth workflow that’s free from failures, breakages, and roadblocks.

## Education, support, and documentation

![ACSS YouTube Channel](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='725'%20viewBox='0%200%201024%20725'%3E%3C/svg%3E)![ACSS YouTube Channel](https://automaticcss.com/wp-content/uploads/acss-education-1024x725.jpg)
No framework, be it ACSS, Tailwind, Core, OpenProps, etc. is of any value to a user who has no idea how to implement it, use it correctly, or use it efficiently.

As much as we’d love for users to snap their fingers and instantly have the utilities, techniques, and principles Matrix-downloaded into their brains, that’s not going to happen any time soon.

There is a learning curve to using any of these tools and the only way we can shorten the learning curve and make it more enjoyable is to give users all the documentation, education, and support they need.

Core Framework has a Facebook Group for support and an official documentation area on their site. While they’ve done great with the documentation, there’s no education component. There’s no official YouTube channel, workflow videos, how-to, or best practices videos.

ACSS, on the other hand, invests tens of thousands of dollars and countless hours into all three areas. You can find endless tutorials on YouTube via our official ACSS channel as well as from our Creator on the Geary.co channel. We also have a growing list of talented creators who use and teach ACSS.

Our website has extensive documentation so you can look up exactly how to use specific features.

Lastly, we have perhaps the best support experience of all – a dedicated private support community with thousands of users, hundreds of power users, and a small team of official support staff. We’ve created a culture of helping and guidance, with almost every question/thread getting multiple detailed responses in just minutes.

If you want official support and don’t want to post in the community, we also have dedicated email support, with same-day response time.

ACSS users love the fact that there’s really no guesswork and nothing for them to figure out on their own. Everything they need to learn is available at no extra charge, almost everything is documented in detail, and any issue that does come up is quickly resolved by the community or support team.

Having this level of education, documentation, and support is worth its weight in gold.

## ACSS and Core offer different dashboard workflows

Automatic.css was the first of any framework to offer users a UI dashboard for quick and easy framework customization.

Note: Automatic.css is currently on the cusp of releasing v3.0, featuring a brand new dashboard and dashboard workflow. We’ll update this article when v3.0 is public.

### ACSS Dashboard

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='894'%20height='1024'%20viewBox='0%200%20894%201024'%3E%3C/svg%3E)![](https://automaticcss.com/wp-content/uploads/acss-dashboard-894x1024.jpg)
The ACSS dashboard is clean and relatively easy to navigate, allowing users to customize every key part of the framework. Features with functionality that aren’t obvious feature a tooltip explanation and/or a link to the official documentation.

Inputs can be reset to default values with a single click and error handling ensures that users can’t break anything when saving and regenerating stylesheets.

### Core Dashboard

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='923'%20viewBox='0%200%201024%20923'%3E%3C/svg%3E)![](https://automaticcss.com/wp-content/uploads/core-dashboard-1024x923.jpg)
Core’s dashboard is much newer than ACSS’ and feels more modern and stylized. It features the same left-side navigation but offers a 3-column layout vs ACSS’ 2-column layout.

The Save button is nested in the right-side column along with a “Preview CSS” button. This button gives you an overview of the full stylesheet output. It’s not an important feature, but it might be nice to have for some users.

The bottom right sidebar also has a nice feature showing users how many utilities are active.

We found some issues with error handling and dashboard/framework logic during testing. For example, I completely removed the name of an active color and was still allowed to save successfully. This resulted in all the color variables losing their name and having four dashes as a prefix instead of two. This broke that color everywhere it existed across the website.

Core also seems to have a critical issue with shade and tint generation, making these utilities dangerous to use site-wide, but detailing such things isn’t the purpose of this article. Overall, the Core dashboard is well-designed and thought out, and I’m sure they can address and fix breakages in future releases.

## Page Builder Enhancements

Automatic.css and Core both have features designed to enhance workflow in page builders. Other than a UI dashboard and Core’s “components” feature, this is a key area that sets these tools apart from pure “frameworks.”

### Core Builder Enhancements

Core Framework offers the following builder enhancements:

### ACSS Builder Enhancements

ACSS offers the same enhancements, plus more:

## ACSS Ecosystem vs Core Framework Ecosystem

Building both a native and third-party ecosystem around a framework or page builder-type product is very important. It extends more options to users and helps solidify the product in the market.

### Core Framework’s Ecosystem

The Core Framework native ecosystem is just Core Framework. There’s an area on their website that says UI Kits and templates are coming soon:

![Core UI Kits & Templates Coming Soon](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='385'%20viewBox='0%200%201024%20385'%3E%3C/svg%3E)![Core UI Kits & Templates Coming Soon](https://automaticcss.com/wp-content/uploads/CleanShot-2024-01-07-at-18.55.34@2x-1024x385.jpg)
Given the issues we discussed earlier with the framework’s unlimited flexibility, we want to wait and see how this ecosystem plays out. It’s going to be a challenge designing UI kits and templates for installations that potentially use different utility names, various breakpoint options, and so on.

As for third-party players in the Core ecosystem, the only two we know of right now are BricksMaven (also for ACSS) and CalummaUI (we recommend avoiding this one as it’s mobile-first, which has no benefits but requires a completely different workflow than you’re probably used to).

### The Automatic.css Ecosystem

ACSS’ ecosystem is much more robust. As far as the native ecosystem goes, there are three primary offerings:

The third-party ecosystem is growing rapidly as well. It currently includes:

Additionally, ACSS has support for the following builders that are not officially supported by Core:

And don’t forget our growing creator network.

## ACSS Pricing vs Core Framework Pricing

Both products have a very different pricing model. Let’s take a look.

### Core Framework Pricing

![Core Framework Pricing](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='437'%20viewBox='0%200%201024%20437'%3E%3C/svg%3E)![Core Framework Pricing](https://automaticcss.com/wp-content/uploads/core-framework-pricing-1024x437.jpg)
Core Framework uses a freemium pricing model. You can create an account, install Core on your website, and use it 100% free. Kind of.

If you want to integrate Core with your page builder of choice, that’s when you’ll need to purchase an add-on for each specific builder. As of this writing, Core is listed at 119€ or around $130 per add-on.

Right now, the only available add-ons are for Oxygen, Bricks, and Gutenberg (the Gutenberg add-on is free also). The add-ons install the classes into the builder’s auto-suggest menu and add the builder enhancement functionality, which are both necessary for most users to have an efficient workflow, in our opinion.

### Automatic.css Pricing

![ACSS pricing](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1024'%20height='602'%20viewBox='0%200%201024%20602'%3E%3C/svg%3E)![ACSS pricing](https://automaticcss.com/wp-content/uploads/acss-pricing-1024x602.jpg)
Automatic.css pricing isn’t based on specific builders, add-ons, or integrations. ACSS operates as a single tool that adapts dynamically to its environment. When you buy ACSS, you’re buying a tool that will work seamlessly in all officially supported builders, free of add-ons or upsells.

ACSS integrates with Bricks Builder, Oxygen, Gutenberg, and Cwicly as of right now. Users can install ACSS across all these builders for the same price. ACSS auto-detects the builder and adapts accordingly.

When new builder integrations are added in the future, ACSS users can use the tool on those builders at no additional charge.

Current pricing plans:

### Pricing Considerations

While Core Framework may look cheaper at first glance, there’s much to consider.

## Which Framework is leading in innovation?

ACSS was designed from the ground up as a next-generation framework for WordPress web designers who care about speed, consistency, customization, efficiency, scalability, and maintainability.

Because of this, ACSS introduced many “firsts” to the market:

Our commitment to innovation and workflow enhancement is second to none, as is our commitment to support, education, and industry leadership.

Core has attempted to innovate, with its component functionality being the most prominent entry into the innovation category. But, as explained earlier, we feel that particular feature creates a massive disconnect within a page-building workflow.

And guess what? ACSS is poised yet again to claim the innovation crown with v3.0, which introduces a completely new workflow paradigm. This is on top of other innovative features like Magic Grid.

If innovative features and workflow enhancements are important to you, ACSS has been and will continue to be the leader in innovation.

## How to choose between Automatic.css & Core Framework

Core is the better choice for users who feel they need more of a “framework builder” with unlimited UI flexibility than a complete, done-for-you framework that’s built to a consistent standard.

Given the challenges presented by Core’s open-ended design, it’s a better fit for advanced users who have the time, knowledge, and expertise required to add missing utilities and who have little to no intention of using third-party design sets or other ecosystem products. It’s also a much better fit for users who aren’t building WordPress websites since ACSS is strictly for WordPress at the moment.

If you’d much rather use a complete, done-for-you framework that integrates seamlessly with design sets and other ecosystem tools, is still flexible and expandable but organized to a consistent standard, offers many more workflow and builder enhancements, and offers top-tier education and support, then Automatic.css is the better choice.

Power users will find equal joy in Automatic.css since we have all the necessary utilities under the hood for expanding and granularly controlling the framework (partials, functions, mixins, pro mode, and more).

Again, we have a great deal of respect for Core’s team and product. At the same time, it’s essential for us to speak to fundamental differences, advantages and disadvantages, and product-market fit because real users and potential users inquire about this daily.

If you feel that anything in this analysis is inaccurate, please contact us, and we’ll update the article with any necessary corrections.

