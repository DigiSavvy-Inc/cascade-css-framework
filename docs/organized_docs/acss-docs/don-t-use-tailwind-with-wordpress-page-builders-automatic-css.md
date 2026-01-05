---
source: https://automaticcss.com/tailwind-page-builders-bad-idea/
---

# Don’t Use Tailwind With WordPress Page Builders - Automatic.css

# Using Tailwind with WordPress page builders is a bad idea

Written by

![Kevin Geary Headshot](https://secure.gravatar.com/avatar/a117f74b57f641cf18966ad5e250bdf2b99f834c9bea5cdea8e6a016cf370bf7?s=150&d=mm&r=g)Kevin Geary

Published on

April 1, 2022
[Blog](https://automaticcss.com/blog)[CSS Frameworks](https://automaticcss.com/category/css-frameworks/)![Tailwind CSS Code Example](https://automaticcss.com/wp-content/uploads/2023/08/tailwind-thumb-1-1168x658.jpg)
Tailwind is a popular “utility-first” CSS framework that bills itself as “an API for your design system.” But, as you’ll learn in this article, it’s a bad idea to use Tailwind – or any utility-first framework – with WordPress page builders.

Note #1: I’m not going to use this article argue whether Tailwind is a good or bad framework. That’s a separate discussion that would require its own article.

Note #2: I’m not going to go in depth on all the issues with Tailwind. I’m only going to argue why it’s bad choice for page builders. So, if you think this article is long and detailed, remember that it’s only the tip of the iceberg when it comes to potential issues with using Tailwind.

Note #3: The facts I’ll outline here won’t stop a lot of people from insisting that Tailwind is a great fit for WordPress page builders. I’m sure these people mean well, but they’re wrong. And they’re not only wrong according to me, they’re wrong according to the creator of Tailwind.

Note #4: Many people will dismiss this article by saying, “Kevin is arguing against Tailwind because it’s in the best interest of selling more copies of Automatic.css.” That’s nonsense, of course, because I always say/teach whatever is in the best interest of my audience (which goes far beyond the ACSS world). In any case, that’s why this article uses the words of Tailwind’s creator to make my case. It helps keep this article as objective as possible.

Cool? Let’s get started!

## What is Tailwind?

Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.

[GeeksforGeeks](https://www.geeksforgeeks.org/introduction-to-tailwind-css/)
That’s a good marketing description, but there’s a lot more to Tailwind than that.

In reality, Tailwind is better described exactly as they describe it on the Tailwind site: “An API for your design system.”

It’s a MASSIVE framework with a STEEP learning curve. You can browse the Tailwind documentation to get a pretty quick understanding of how massive and technical this framework is.

Also: I’d guess that most people who advocate for using Tailwind with WordPress really only know/understand the base level of Tailwind and aren’t really using it anywhere close to its full extent.

Most important of all, Tailwind wasn’t designed for WordPress page builders or with WordPress page builders in mind. This fact introduces a fundamental problem…

## The fundamental problem: using Tailwind with WordPress page builders isn’t scalable or maintainable

When you’re building sites, it’s important to think about the future of the site. While you’re likely working from a specific design in the beginning, that doesn’t mean your design will never change. And it doesn’t mean you’ll never make a design mistake that then needs fixing across many blocks.

Knowing this, good developers put a lot of time, thought, and attention into building sites that are easy to adjust, iterate, and maintain.

When I talk about scalability, that’s what I’m referring to. How easy is it to change things? How easy is it to add new things with identical styling? How easy is it to maintain consistency? How easy is it to work with teams?

Tailwind *might* be a great option for front end frameworks like Vue, Angular, React, etc. because you can maintain scalability in these environments. But when it comes to WordPress page builders, it’s a fail.

Want specifics? No problem.

## An inherent problem with the utility-first philosophy

Tailwind is a “utility-first” framework.

When a framework is “utility-first” it means that you’re supposed to use utility classes for everything. You’re not creating custom classes and you’re not writing any CSS. That’s the goal anyway.

Why? Because “coming up with names for custom classes is hard” … or something (Yes, there’s a little more to it, but not much). So people got the idea to use utility classes exclusively.

This breaches the very definition of “utility,” but whatever, we have bigger fish to fry.

Right off the bat you might notice an issue with the utility-first philosophy. If you don’t assign custom classes to things, how do you retain global control of element styling? How can you create one “source of truth” for specific re-usable blocks?

For example, let’s say you create product card with an image, heading, description, price, and a few other elements. It could take two dozen or more Tailwind utility classes to create a single card.

Now, you duplicate that card 8 more times to create a product grid. And you use that same grid on 5 other pages of your site. What do you do when the card design needs to change?

You sure as Hell don’t want to go page by page, block by block, element by element removing utility classes and adding new ones. That’ll make you want to jump off a bridge.

There’s gotta be a way to retain global control, right?

// PAUSE.

Let’s pause for a moment to point out the fact that this is ONLY a problem with utility-first frameworks. If you use CSS the way CSS is intended, there’s no problem here. You create custom classes and then you have automatic global control over your elements using those custom classes. Change styling in one place and it changes everywhere you’ve used that element. Simple!

So, by introducing Tailwind and the “utility-first” philosophy, we’re introducing a huge problem that we then need to solve.

// UNPAUSE.

This is a challenge that people ask about over and over again. So, what does the creator of Tailwind say about it?

Adam Wathan has argued that it’s not actually a problem when you use a template engine to deal with duplication and scalability rather than CSS.

What’s a real world scenario where you’d have to add/remove classes on dozens of elements? Any duplication like that should be managed by your template engine no?

— Adam Wathan (@adamwathan) [October 31, 2019](https://twitter.com/adamwathan/status/1190012545916125192?ref_src=twsrc%5Etfw)

And that’s a fair argument, unless you’re using a page builder. Why? Because none of the “template engine” solutions are available within a WordPress page builder!

Let’s take a look at some of the template engine solutions:

### Loops

Loops allow you to write a block of HTML once, and then have the code output as many additional blocks of that HTML as needed according to how many items you’re looping through.

So you create one product card and then the loop uses that outline to generate the 9 product cards in your grid.

If the design of the card needs to change, you edit its one instance inside the loop and all 9 cards in the grid adapt. This is what Adam was referring to in this tweet when arguing that components aren’t the only way to keep Tailwind scalable and maintainable:

“Tailwind is only maintainable if you’re using components.”I see this a lot and it confuses me — if you’re building a site and you have no way to reuse a chunk of HTML without copying and pasting it then it sounds you have much bigger problems to solve?

— Adam Wathan (@adamwathan) [January 8, 2022](https://twitter.com/adamwathan/status/1479876459737100288?ref_src=twsrc%5Etfw)

“But what if you used that loop on five different pages?” Good question! We can address that in a moment. For now, let’s talk about the loop technique in WordPress page builders.

Some page builders (not all) like Oxygen and Bricks allow you to create loops. This requires you to build one product card for the entire grid, regardless of how many items will eventually be in the grid.

The problem arises when you need to use that product card style across multiple loops or pages. Let’s say you’re building an e-commerce store and you use that card style in 10 different loops.

In a code editor, this is actually pretty easy to deal with because you have access to the HTML code and the ability to use multi-cursor editing.

In a page builder, you’re deep in the heart of Fucksville. Your life is now dedicated to going page by page, loop by loop, making the same changes to the card design manually.

Strike one.

### Duplicating HTML

What if you can’t use loops? Well, you can copy and paste HTML over and over again (this is an actual technique he recommends in some cases).

Doesn’t that sound messy?

It’s actually not that bad when you’re building a site in a code editor that offers multi-cursor editing. If you duplicate the HTML for your card 8 times across 5 pages, you can select that HTML and edit all instances of it at once. The software will find the other exact matches for you, no problem (as long as you trust the software).

This effectively gives you global control over those elements with advanced real-time find and replace.

Can you do this in Oxygen or any other WordPress page builder? Nope. Your only option is to go page by page, block by block, element by element to make your changes.

Strike two.

### Components

If you’re using Tailwind with a front end framework like Vue, React, etc. you are free to create components.

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

W3Schools
Adam recommends this to control duplication instead of solving the problem with CSS:

Create template partials/Vue components/React components/whatever 👍🏻 duplication is absolutely best solved at the template level, not the CSS level.

— Adam Wathan (@adamwathan) [December 20, 2019](https://twitter.com/adamwathan/status/1207815973190950912?ref_src=twsrc%5Etfw)

And he demonstrates how components make Tailwind more maintainable in this video:

And that’s just fine if you’re coding a website or app or even a custom WordPress theme. But if you’re using a page builder, it’s not a viable option because this functionality simply isn’t available to you.

“But Kevin, in Oxygen you can create re-usable parts! That’s like a component!”

Yep, you can create re-usable parts in Oxygen and perhaps in some other builders as well. The problem is, they don’t behave like true components because they combine styling and content together.

For example, your options with re-usable parts in Oxygen are “single” and “editable.”

A single re-usable part is a single source of truth for design and content. You can use the re-usable part an unlimited amount of times and control both its style and content globally from one instance.

This is only a viable solution if the content never needs to change or if the content happens to be dynamic (e.g. pulled from custom fields, CPTs, etc.). But even if it works for dynamic components, you’re stuck with a horribly organized build process given the lack of organization in Oxygen and other page builders for these types of components.

If the content in your component needs to change manually, then you need to use an “editable” re-usable part, which is really just a tiny template.

The problem with your little tiny template is that you can’t decouple the content from the styling. As soon as you make it editable, you can no longer control its styling globally. There is no longer a single source of truth for how that block is styled.

Strike three.

### @apply

And now we arrive at the favorite argument of people who support using Tailwind with page builders, @apply.

Unfortunately for them, it’s a terrible argument.

I understand why they make it (because it’s their only argument), but that doesn’t make it not terrible.

Before I go into detail explaining why it’s not a solution to our problem, I should probably explain what @apply is.

@apply basically allows you to take a list of Tailwind’s classes and combine them into a custom class.

It looks like this:

```
.btn-primary {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
```

This seems like it gives you the best of both worlds, right? This solves the problem, right?

Not really. But even if I gave people the benefit of the doubt on this, they still lose the argument. Remember, the whole point of Tailwind is “utility first.”

Using @apply everywhere is like saying, “The best part of using Tailwind with page builders is that I can completely abandon the utility-first philosophy and create custom classes!”

Huh? So you introduced this gigantic “utility-first design system API” that takes weeks/months to learn only to have to create a whole bunch of custom classes? And you’re doing that to solve a problem that never existed before you introduced Tailwind?

That doesn’t seem very efficient.

Besides, Adam says you’re “doing something bad” if that’s what you’re doing:

So rule of thumb, if you're writing a custom selector and including a Tailwind class in it, you are very likely doing something bad.And if you must do it, understand that you've probably broken how you expect `@​apply` to work for that class for the lifetime of your project.

— Adam Wathan (@adamwathan) [January 18, 2022](https://twitter.com/adamwathan/status/1483480304052588549?ref_src=twsrc%5Etfw)

In one tweet, he refers to this simple use of @apply as “unnecessary complicated magic” and says that you should “just write CSS” if you’re doing work in a stylesheet.

Just write all of your CSS the normal way and don't even use Tailwind, you're throwing away all of the benefits by working that way..some-class {  font-weight: bold;}vs..some-class {  @​apply font-bold;}Just unnecessary complicated magic at that point.

— Adam Wathan (@adamwathan) [January 18, 2022](https://twitter.com/adamwathan/status/1483484721409572864?ref_src=twsrc%5Etfw)

Anyway, there are issues aside from that…

Perhaps we should start with the fact that Adam says he only added @apply to make newbies feel better about using Tailwind. And he explicitly says that you should “almost never use it.”

Confession: The `apply` feature in Tailwind basically only exists to trick people who are put off by long lists of classes into trying the framework.You should almost never use it 😬Reuse your utility-littered HTML instead.https://t.co/x6y4ksDwrt

— Adam Wathan (@adamwathan) [February 9, 2020](https://twitter.com/adamwathan/status/1226511611592085504?ref_src=twsrc%5Etfw)

Here’s another tweet where he refers users back to using template partials, components, and re-used HTML instead of @apply. And he admits that using @apply makes your site harder to maintain:

As the creator of Tailwind I would recommend using apply almost never. Use template partials or components:https://t.co/x6y4ksDwrtThe more you use apply the harder you are making your code to maintain. Put lots of classes in your HTML and reuse the HTML.

— Adam Wathan (@adamwathan) [February 9, 2020](https://twitter.com/adamwathan/status/1226510996430299137?ref_src=twsrc%5Etfw)

He even goes so far as to say that using @apply is a “massive mistake.”

Using apply is a massive mistake 👀😅

— Adam Wathan (@adamwathan) [January 7, 2022](https://twitter.com/adamwathan/status/1479595405826473988?ref_src=twsrc%5Etfw)

And what about the future of Tailwind? Adam has said multiple times that he wishes @apply never existed and that he’s thinking about deprecating it:

Yeah generally I agree — my fear is it increases maintenance burden and we can never roll it back because 100% guaranteed it will be abused even more than `@​apply` is, which is the current biggest source of maintenance burden and the feature I want to remove the most 😅

— Adam Wathan (@adamwathan) [January 3, 2022](https://twitter.com/adamwathan/status/1478003031086178317?ref_src=twsrc%5Etfw)

You also have to be very careful with how you try to use @apply because there are circular dependency issues.

If that’s not enough evidence that @apply isn’t a solution for duplication issues and scalability, I don’t know what to tell you.

## “But Kevin, we can also use theme()!”

Once the @apply arguments are exposed, Tailwind enthusiasts then turn to Tailwind’s theme() function.

This is a non-argument in my opinion, because it’s easily defeated the same way @apply is defeated. Using theme() requires a ton of extra work to solve a problem that never existed before Tailwind.

Here’s what using the theme() function looks like:

```
.btn-blue {
  background-color: theme('colors.blue.500');
}
Code language: CSS (css)
```

See the glaring reality?

Why not just create custom properties in the first place?

Better yet, why not use a framework that already has custom properties and utility classes that are actually useful for utility? And that empowers you to create custom classes for global control over component-based blocks? And that was specifically designed for use in WordPress page builders?

If only a framework like that existed, cough cough!

## “Kevin, this is just your opinion. To each their own!”

What people often say is, “to each their own” or something similar. They’ll say, “everything has pros and cons, just choose the framework you like best for your project.”

This is a massive cop out.

The reality is that some things are just … wrong. Some things are truly bad options.

Designing an entire site with inline CSS is wrong. If you would never do that, then don’t say “Just use the method you’re most comfortable with.”

Using Divi is objectively worse than using Oxygen. If you would never recommend Divi over Oxygen, then don’t say “Just use the method you’re most comfortable with.”

Likewise, using Tailwind with WordPress page builders is a bad idea, so we can’t rightfully tell people to use it if that’s what makes them comfortable.

The people who insist that things like this are viable options likely don’t know better. Saying “just use what you’re comfortable with” is objectively bad advice.

## Final thoughts

The reality is this:

Those are the facts. This isn’t about shitting on other products or frameworks. I’m an educator and this is part of the process of education, just as I’ve dedicated countless hours to educating fellow developers via my YouTube channel.

If you’ve considered the Tailwind approach and you’re a page builder user, I would highly highly recommend that you avoid it. In fact, avoid all “utility first” frameworks for the same reasons I outlined here.

Your best bet is to use a framework that’s specifically designed for use in page builders. Even better, use one that offers custom properties for creating your own custom classes. Without custom properties, you’ll run into disconnection issues.

If you were exploring Tailwind because you really want to learn something new, cool, and useful, then learn SCSS instead. You can actually use SCSS in WordPress page builders and it’s something that would greatly enhance your workflow.

