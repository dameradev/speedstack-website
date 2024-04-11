---
date: 2024-03-20T15:39:05Z
description: gomnarceglupo
title: 3 technologies I use to run my portfolio site for free
slug: 3-technologies-to-run-website-for-free
coverImage: /uploads/nf8o4rbivnrqnk4lbens.webp
image: /uploads/nf8o4rbivnrqnk4lbens.webp
---
As a dev, especially if you’re just starting out, you want to avoid monthly costs wherever possible. Well, I am not just starting out, but since my website is still not making me any money (at least not directly), I try to keep the cost at 0.

Nowadays there seems to be an endless amount of ways to develop/host a website, countless CMSs, and countless hosting providers, I am guilty of changing the CMS of my website 4 times already, and the main reason was money.

## Frontend site host - Vercel

I am a React dev, I use NextJs for my day job. For my blogfolio I wanted to learn something different and played around with SvelteJs, but it was lacking the community I needed, so I dumped that project after a few weeks of trial and error.

Since the current site is NextJs, Vercel was the clear winner, and if you’re just an individual trying to host a site (not necessarily a Next site), I would strongly recommend going with Vercel, they have a generous free tier (basically free forever), my site is up 99.99% of the time, and setup with their UI is extremely easy.

## Hosting content on Notion

This is the thing I switched around most. I started developing my site, as a side project 7-8 months ago, and in that time I switched 4 different CMSs.

The first one I tried was Graphcms (now known as Hygraph) they did have a free tier, but I quickly realized that I would need features in their pro plan very soon, which was $300 per month, no thank you.

The next one I decided to do was Prismic, which was pretty cheap, around $10 per month I think, I used it for 2 months, and at this time a friend recommended I should try to use headless WordPress.

He sold me on the whole WP is the original blogging platform, it has been here for decades. I have never been a fan of WP I started to learn how to code after all the hype around it settled down, but decided to give it a go.

I found a hosting provider, it was around $60 per year with the first one being 50% off, so I migrated all the content to WP, at the time it was just 8 blog posts, I loved all the features it provided, the comment system, the plugins everything, one thing it was lacking was customization, and I also wasn’t ready to pay yet.

So then I decided to give Notion a go. I’ve been using Notion for more than a year now, and I store everything I need here, so I thought since my whole life is in Notion, why not my blog content as well? I got the idea from [Brandon Coyer](https://braydoncoyer.dev/), he has an amazing open-source website, and he was doing the same thing.

\![https://res.cloudinary.com/dvvbls283/image/upload/v1670510908/Blog/ghkhg1kijr5axcgr4ral.webp](https://res.cloudinary.com/dvvbls283/image/upload/v1670510908/Blog/ghkhg1kijr5axcgr4ral.webp)

The thing I love about Notion is the customization, you basically create everything from scratch, you add your own properties, and your own view of the posts, it’s a tool that allows you to develop your system using no-code techniques, and if you’re a developer you will find it easy to use. I am not an affiliate BTW.

Using Notion drops the price of running the site back to 0.

## The third technology that’s usually paid is the Database

One would argue, why would you need a database if you’re using notion to store data you display, and while you can definitely use Notion to read and write data, that’s not the intended purpose of it, and it becomes very slow.

Think of it this way, whenever you have some part of your site that doesn’t change much, it’s a green light for notion, but when you need some more dynamic data, you need to reach for something else.

Initially, I looked into firebase as I have experience with it, but I decided against it and chose Supabase.

It’s a firebase clone and it offers a very generous free tier, which I don’t expect to hit until I get 10k+ monthly visitors, hopefully, that will be soon 🤞.

Currently, the only place I use Supabase is on the post view count, I plan to implement more features with it, and will update this post as soon as I do so.

## Conclusion

With these 3 technologies, almost any site can be built and hosted, well that is until the site gets a more significant amount of traffic, it took me a lot of experimentation to get it where it is today, and the site will likely change more in the future, I embrace that, with every new feature I learn something new. I encourage you to start building your site as soon as possible, it’s a playground to train on, and it’s how you show the world you’re a dev.

PS: It’s not completely free, I pay around $15 per year for the domain.