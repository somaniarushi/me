---
title: "Interactive Program Synthesis with Control Structures"
description: "OOPSLA 2021"
slug: "loopy"
date: 2022-07-09T15:54:55-04:00
keywords: ["research", "programming", "language", "compiler", "synthesis", "oopsla"]
draft: true
---
[Link to paper!](http://loopy.goto.ucsd.edu/)

Before reading this summary, I'd recommend messing around with the project, available on the link above. The context will be helpful, I think :)

## Problem Statement
When it comes to small-step Programming by Example, loops and conditionals cannot be handled line-by-line while maintaining usability — we need to raise the scope of generation to a block-level. How can we maintain the granularity of SniPy (last paper, step-by-step programming by example) while increasing the size of the synthesized code?

The core technical challenge is two fold:
- Live Executing code so as to allow evaluation of partially written loop code to execute
- Make a block-level synthesizer scale to act at interactive speeds for these larger code snippets

## Core Contributions

### Live Execution of Code
- Treat variable assignment within loops as a hole
- Each time the program execution reaches the hole, prompt the programmer to act as an oracle and provide the value of the hole at that point in the execution. This ensures no inaccurate start states.
- Repeat process until end of loop is reached, *then* synthesize. Await synthesis until looping is completed.

### Working at interactive speeds
- Going from one-assignment (like in the original paper, SnipPy) to ~three assignments blows up search space exponentially.
- Now have to handle for intermediate states alongside start and end states.
- Solution: “Intermediate State Graphs” — a more compact representation of state. An intermediate state graph works on the core insight that a value assigned in one synthesis will be the same in every synthesis.



