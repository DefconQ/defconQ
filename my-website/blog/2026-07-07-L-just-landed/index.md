---
slug: L Has Landed - A New Runtime for k and q Enters the Scene
title: L Has Landed - A New Runtime for k and q Enters the Scene
authors: [alexander]
hide_table_of_contents: true
tags: [kdb/q, DefconQ, L]
---

## Not Only the Weather Is Heating Up…

Not only have the temperatures been rising this summer, but so has the market for exciting new projects in the k and q ecosystem. While I'm aware of several groups quietly working on some very interesting ideas behind the scenes, L-Labs a new entity founded by K/Q veteran and former HFT engineer [**Jacob Loveless**](https://www.linkedin.com/in/jacobloveless/), is the first to bring something new to market.

Meet [**L**](https://lv1.sh).

A brand-new runtime for k and q that has just become publicly available, with the ambitious goal of rethinking how k and q applications are executed. 

As someone who spends a large amount of time looking at everything happening around the KDB/Q ecosystem, it's always exciting to see innovation emerge, especially when it comes from someone who has been working with the language for years.

<!--truncate-->

## Why Build Another Runtime?
It's a fair question.

After all, q has been around for decades, has powered some of the world's largest financial institutions, and remains one of the fastest technologies available for time-series analytics.
So why build another runtime?
Jacob's motivation is refreshingly straightforward.

As he explains in his [**Why L? article**](https://lv1.sh/blog/why-l/), the goal wasn't to replace existing tools for the sake of replacing them. It was to build a modern runtime that explores different implementation choices, removes historical constraints where possible, and provides a fresh foundation for future development. Rather than simply recreating the past, L is an experiment in how a modern k and q runtime could look today.

Projects like this are healthy for an ecosystem.

They challenge assumptions.

They encourage experimentation.

And they often introduce ideas that eventually influence everyone.

## Performance Looks… Interesting

One of the first things that caught my eye was the benchmark section.
L has been benchmarked across a variety of workloads and, at least in the published results, performs extremely well, often outperforming many other language runtimes in those tests. It's an impressive showing and certainly suggests there's some serious engineering under the hood.

Of course, benchmarks always deserve a healthy dose of context.

Different benchmarks measure different things, and synthetic workloads don't necessarily translate directly into production systems. The workloads you care about might look very different from those used in published comparisons.
For those of us working with production KDB/Q systems, the natural question is how L behaves on the kinds of real-world problems we care about: large in-memory databases, tickerplants, gateways, IPC-heavy applications, historical queries, and high-throughput market data processing.

That's still something the community will have to explore over time.
But regardless of where those comparisons ultimately land, it's encouraging to see a new runtime pushing performance and introducing fresh implementation ideas.

## More Choice Is Good for Everyone

Perhaps the most exciting aspect of L isn't a benchmark chart.

It's the fact that somebody decided to build something new.

For a long time, the k and q ecosystem has been relatively quiet when it comes to alternative runtimes and implementations. Seeing fresh ideas emerge lowers the barrier for experimentation and opens up entirely new opportunities for developers, researchers, and companies interested in the language.
Competition drives innovation.

New implementations often lead to new tooling. Different implementation strategies expose different strengths. Three decades have seen several implementations of k, none as fast as k4. L has supported commercial systems for a decade. And it claims to be significantly faster than k4. And even if they never become the dominant runtime, they frequently inspire improvements across the wider ecosystem.
That's good news for everyone who enjoys working with vector programming languages.

## What Else Is Brewing?

L certainly isn't the only exciting project currently in the works. Behind the scenes, several teams are quietly building new languages, tools, runtimes, libraries, and ideas that have the potential to shape the future of the k and q ecosystem. Some are still under wraps, others are getting closer to seeing the light of day.
As always, **DefconQ** aims to stay at the forefront of everything happening in the community. I'll be following these developments closely and sharing them here as soon as they're ready to go public.
So if you'd like to stay ahead of the curve, make sure to follow DefconQ. The easiest way is to subscribe to the [**free newsletter**](https://defconq.substack.com) and have every new article delivered straight to your inbox, or follow me on [**LinkedIn**](https://www.linkedin.com/in/alexanderunterrainer/) where I regularly share the latest news, tutorials, and developments from across the ecosystem.

Because if this summer has shown us anything, it's that the k and q world is far from standing still.


## I'll Be Keeping a Close Eye on This One

It's still very early days, and only time will tell how L evolves and where it ultimately fits within the ecosystem.
But one thing is certain: it's one of the most interesting developments in the k and q world this year.
I'll definitely be keeping a close eye on the project, experimenting with it, and following its progress as it matures.
If you're curious yourself, I'd encourage you to take a look, play around with it, and form your own opinion.
As always, I'll keep you posted as I learn more.

Stay tuned.
