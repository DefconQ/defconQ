---
slug: Korze - Another Q Is Being Forged
title: Korze - Another Q Is Being Forged
authors: [alexander]
hide_table_of_contents: true
tags: [kdb/q, DefconQ, Q, Korze, Ecosystem]
---

If you thought the summer of new Q projects was starting to cool down, think again. Unlike the weather in the UK, the **Q ecosystem certainly isn’t cooling down. At least, not yet.** Following my recent articles on [**L**](https://www.defconq.tech/blog/L%20Has%20Landed%20-%20A%20New%20Runtime%20for%20k%20and%20q%20Enters%20the%20Scene)  and [**PeachQ**](https://www.defconq.tech/blog/Another%20Peach%20Falls%20Into%20the%20Basket%20-%20PeachQ), another project has emerged from the Q community. This time, it's [**Korze**](https://korze.io), a new company created by [**John Estrada**](https://www.linkedin.com/in/john-estrada-119998/)  and a small team, with a very ambitious goal: building their own implementation of Q to give clients choice.

And if the name John Estrada sounds familiar, it should.

John was the head of FX Trading at two large investement banks but he isn't exactly a newcomer to the Q world.  In fact, previously as a side project, he was one of the first people to document Arthur Whitney's k9 and then Shakti projects, an intriguing attempt to create another implementation of k, the cornerstone to most Q engines. Now, years later, John has decided to take on the challenge of implementation himself. And he's invited the community to have a look.

<!--truncate-->

## Meet Korze

At first glance, Korze isn't simply positioning itself as "another Q implementation" but one that users and developers can use without changing the way they work. The company has produced a Q engine to run a tick-data system for financial application with full support for the Q language.  Compatibility isn't just syntax though, it's also as performant as required. 

Korze has followed an LLM-development approach, explaining why a company can deliver a Q implementation under a year.  Anyone who has worked with production market data knows that covering the average case is only one piece of the puzzle. The real engineering challenge starts when billions of messages begin arriving, markets open and close, feeds burst, storage needs to keep up, and somebody inevitably asks why yesterday's query that took 200 milliseconds now takes three seconds. Korze is being designed around those problems from the ground up. The project currently highlights custom ingestion and storage layers written in C, zero-allocation message paths, SIMD-accelerated parsing and aggregation, cache-aware layouts, and technologies such as AVX-512, NEON, io_uring, mmap and radix sorting. That is a rather different starting point from simply trying to recreate an interpreter. The question is will LLM-driven development help Korze ship new products faster? The Korze team certainly believes so, but ultimately, only time will tell.

## John Estrada Is No Stranger to Q

One of the reasons I find Korze particularly interesting is the person behind it and the approach he's taken.

John has been around the Q ecosystem for a long time and has spent years working in the finance, almost entirely from the trading perspective. More importantly, he has been one of those people documenting what is happening around Q/K rather than simply watching from the sidelines.

John was among the first to publicly document Shakti, Arthur Whitney's project exploring another implementation of k. That was an interesting moment in the history of the language: seeing one of the original creators of k experimenting with a new implementation naturally attracted attention from developers who had spent years working with the language.

John was there documenting it. Now the tables have turned. Instead of documenting somebody else's implementation, John is working with a small team to build his own. And that makes Korze particularly worth watching.

## From Observation to Implementation

There is something fascinating about watching an experienced practitioner move from analysing an idea to actually building it. Given the recent progress with LLM-driven development this should continue to become a common path where those on the sidelines with ideas are now able to join the development community and bring a new way of getting things done.

Writing about how something could work is one thing. Building it is another.

Anyone who has ever attempted to implement a programming language, database or runtime will know that the rabbit hole gets very deep, very quickly.
Language semantics are only the beginning. You have parsing, evaluation, types, memory management, primitives, IPC, error handling, concurrency, I/O, storage, performance characteristics and all the weird edge cases that users have accumulated over decades of production use.

And then there is the small matter of making it fast.

Really fast.

Korze's approach appears to be very much influenced by the environment it is targeting. The project explicitly focuses on tick-data systems where volume, velocity and cardinality all become problems simultaneously. Korze cites workloads reaching 1 TB per session per venue, 10⁷ messages per second, and millions of symbols with microsecond-level ticks as the kind of environment it is designed to address.

This is clearly not being built as an academic exercise.

## Another Q in the Ecosystem?

At this point, you might reasonably ask: **Why do we need another Q?** It's a fair question, I've asked a similar question in my previous articles about L and PeachQ. My answer hasn't changed: **We don't necessarily need another Q. But we absolutely benefit from people trying to build one.** 

Alternative implementations create opportunities. They allow developers to experiment with different architectural decisions. They allow ideas that may be difficult to introduce into an established implementation to be explored from scratch. They create opportunities for new tooling, new integrations and new deployment models.

And perhaps most importantly, they create competition. Not necessarily commercial competition.

**Technical competition.**

Someone builds something differently. Someone else asks why. Someone discovers a better approach. Someone takes that idea somewhere else. And suddenly the entire ecosystem has moved forward. That's how healthy technical communities evolve.

## The Q Ecosystem Is Getting Interesting

If you've been following DefconQ recently, you may have noticed a bit of a pattern. First came L. Then PeachQ. Now Korze.

These projects aren't identical, and they don't necessarily have the same objectives. But they all represent something that I find incredibly encouraging: **people are investing their own time and expertise into building new things around Q.**

For a language and ecosystem that has historically been relatively small and specialised, that's significant. It means there are people thinking about what comes next. And perhaps we're only seeing the beginning.

## Want to See Korze in Action?

The best part is that you don't have to take my word for it. John has kindly agreed to showcase **Korze in a dedicated demo for the DefconQ community.** We'll get a chance to see what the team has been building, understand the thinking behind the project, and, most importantly, ask questions directly to the person building it.

If you're interested in KDB, Q, market-data infrastructure, databases, runtimes or simply curious about where this growing ecosystem is heading, this is one I'd recommend joining.

**John is opening the door and giving us a look under the hood.**

You can sign up for the DefconQ Korze demo and see the project for yourself. Feel free to reach out.

## I'll Be Watching
Korze is still very much a project in development, and that's exactly what makes it interesting. We're watching an experienced Q practitioner take everything he has learned from years in the ecosystem and apply it to building something from the ground up.

Where it goes remains to be seen.

But one thing is becoming increasingly difficult to ignore:

**The Q ecosystem is moving.**

And I'm certainly not going to stop watching.

Stay tuned.



