---
slug: When Markets Never Sleep - Extended Hours, Odd Lots, and the Infrastructure Implications of Always-On Markets
title: When Markets Never Sleep - Extended Hours, Odd Lots, and the Infrastructure Implications of Always-On Markets
authors: [alexander]
hide_table_of_contents: true
tags: [kdb/q, DefconQ, KX, Market Hours, Webinar, Market Microstructure]
---

A few months ago, I wrote a blog post about [Nasdaq's plans to extend trading hours](https://www.defconq.tech/blog/Nasdaq%20Extends%20Trading%20Hours%20-%20What%20It%20Really%20Means%20for%20Market%20Data%20Systems) and what that might mean for market data infrastructure. At the time, the discussion was largely theoretical. It was easy to dismiss it as yet another market structure change that would slowly work its way through committees, working groups, and technology roadmaps.

The more I thought about it, however, the more I realised that extended trading hours are not really about trading hours at all.

They are about a much bigger shift taking place across financial markets.

Markets are becoming more continuous. More fragmented. More data-intensive. More demanding.

And most importantly, they are beginning to expose assumptions that have been baked into market data systems for decades.

That's exactly why I'm excited to be joining [KX](https://kx.com) for an upcoming webinar discussing the infrastructure implications of always-on markets. Together we'll explore what extended trading hours, odd lots, sub-penny pricing, AI-driven workflows, and increasingly continuous markets mean for firms operating in today's landscape.

<!--truncate-->

## The End of "Business Hours"

For most of modern market history, technology teams have enjoyed a luxury they rarely appreciated: downtime. Markets opened. Markets closed. Systems had time to breathe. The overnight window was often used to recover from failures, perform maintenance, replay data, rebuild databases, execute batch processes, and generally prepare for the next day. If something went wrong at 6 p.m., there was usually time to fix it before the opening bell the next morning.

Those assumptions are rapidly disappearing.

Whether it's extended trading sessions, overnight equity markets, crypto's 24/7 trading model, or increasing globalisation of liquidity, markets are steadily moving toward continuous operation. For market participants, this creates new opportunities. For infrastructure teams, it creates new headaches. Because an always-on market eventually requires always-on infrastructure. 

And that changes everything.

## More Than Just More Data

When people hear "extended trading hours," the first reaction is often: *"So we'll have more data?"* 

Yes. But that's probably the least interesting part of the story. The real challenge comes from the combination of trends happening simultaneously.

Odd lots are becoming increasingly important. Sub-penny pricing continues to evolve. Market fragmentation continues to increase. AI-driven workflows are creating entirely new categories of data consumers. Real-time analytics are expected everywhere. Historical data is no longer simply stored; it's continuously queried, replayed, modelled, and fed into machine learning systems. Each of these developments adds pressure individually. Together, they fundamentally change how firms need to think about infrastructure. 

What used to be a relatively clean separation between real-time systems, historical databases, research environments, and analytics platforms is becoming increasingly blurred.

And that's where things start getting interesting for KDB/Q developers.

## The Recovery Window Is Disappearing

One of the topics I'm particularly looking forward to discussing during the webinar is the disappearing recovery window. Historically, many systems relied on periods of reduced activity to catch up. Data could be reconciled. Processes could be restarted. Infrastructure could be upgraded. Large batch jobs could run. Many firms still have critical workflows that quietly assume these windows will always exist.

But what happens when they don't?

What happens when there is no convenient downtime?

What happens when trading activity never truly stops?

The challenge is no longer simply building systems that are fast. The challenge becomes building systems that remain continuously available, continuously observable, and continuously resilient. That is a very different engineering problem.
## When Architectures Start to Crack

Most firms didn't intentionally design fragmented architectures. In fact, many of the decisions that created today's technology stacks were entirely reasonable at the time. One system handled real-time data. Another stored historical information. A separate platform supported research. Analytics ran somewhere else. AI workloads are added nowadays. 

Over time, however, every additional component introduces another handoff. Another integration, another potential point of failure, another place where latency, inconsistency, operational risk, and complexity can accumulate.

When markets operate within defined sessions, those compromises can often be managed. When markets become continuous however, the cracks become much harder to hide. The cost of moving data between systems increases.The operational burden increases. The complexity increases.

And eventually firms start asking a difficult question: *"Would we build it this way if we were starting today?"*

## Building for the Next Decade

This naturally leads to the final topic we'll discuss during the webinar: what principles should guide the next generation of market infrastructure? If markets are becoming more continuous, more granular, and more data-intensive, then infrastructure needs to evolve alongside them.

Firms increasingly need platforms that can handle real-time analytics, historical data, research workloads, and AI-driven applications without requiring a maze of disconnected systems. They need interoperability. They need resilience. They need simplicity. And they need technology capable of operating continuously rather than merely surviving until the next maintenance window.

This is where KDB-X enters the conversation.

One of the reasons KDB/Q has remained so dominant in capital markets is its ability to unify problems that traditionally required multiple technologies. KDB-X takes that philosophy further, providing a platform designed for modern workloads where real-time, historical, analytics, and AI increasingly coexist.

We'll explore exactly what that means during the discussion.

## Join Us

Whether you're a KDB/Q developer, quant engineer, market data architect, researcher, or simply someone interested in where market infrastructure is heading, this webinar should be a fascinating discussion. Because the real question isn't whether markets will continue to evolve.

They will.

The real question is whether our infrastructure is evolving with them.

I hope you'll join us as we explore what happens when markets never sleep.

[SIGNUP HERE](https://kx.com/resources/webinars/when-markets-never-sleep-extended-hours-odd-lots-and-the-infrastructure-implications-of-always-on-markets/)
