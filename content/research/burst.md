---
title: "Bottom-Up Synthesis of Recursive Functional Programs
using Angelic Execution"
description: "POPL 2022"
location: "Brooklyn, NY"
slug: "burst"
date: 2022-07-16T15:44:24-04:00
keywords: ["research", "programming", "language", "compiler", "synthesis", "popl"]
draft: false
---

[Link to paper!](https://www.cs.utexas.edu/~amiltner/burst.pdf)

## Problem Statement
Bottom-up Synthesis doesn’t work well on recursion. This is because:
- Modern approaches to program synthesis need to execute all sub-expressions of the target program.
- For recursive programs, sub-expressions can call the function being synthesized, whose semantics are still unknown.

Current SOTA Work-arounds are very restrictive and not general:
- Providing a full trace specification.
- Built for very specific logical specifications.

## Core Contribution: Angelic Program Synthesis
- Using angelic program semantics
- Adding specification strengthening
- Makes use of efficient version space representations

### Angelic Semantics
Core insight: the recursive call can return anything that is consistent with our ground specification (does not break the original specification). As long as we go through all the possible values of the recursive call, we can say with ceratainty that we will synthesize a program that satisfies our specification if one exists.

### Specification Strengthening
Once you get a wrong result in terms of standard specifications, you know that the assumptions made here were wrong. With these wrong assumptions, we can never get the right result. Thus, add them to _anti-specification_. Reduce search space by only synthesizing programs that DON’T satisfy wrong specs, AKA an anti-specification. "Don't make the same mistake twice."

### Finite Tree Automata
The angelic synthesizer was designed using finite tree automata (frames the space of all possible programs as a tree and searches through them).



