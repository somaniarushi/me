---
title: "Talking to Machines: Interfaces for Program Synthesis"
date: 2022-09-03T09:34:09-07:00
slug: "synthesis"
description: "Current problems, and where the industry is headed"
keywords: []
location: "San Francisco, CA"
draft: false
tags: ["research"]
stylesheet: "post.css"
math: true
---
For roughly the last year, I have been researching at UC Berkeley in the domain of program synthesis. Simply put, synthesis is the art of creating programs that write programs. A lot of you might already have used a synthesis tool — Github Copilot.

![](/images/rec.gif)

The fundamental goal of these assistants is to abstract away the “how”, and allow the programmer to focus on the “what”. This would, in theory:
1. Lower the barrier for entry to programming
2. Save countless hours spent on debugging
3. Save even more countless hours spent on writing boilerplate code
4. Save even, even more countless hours spent on googling for idiomatic code


However, a core unsolved problem is that of **how best to extract user intent**. How can you comunicate what you want with this assistant, without losing information? How best to talk to the machine, just that it understands?

Through this lens, we analyze two different state of the art interfaces for synthesis: code suggestion using auto-completion, and code generation using Programming by Example/Demonstration.

## Problems with Tools Based on Large Generative Models
The first – autocompletion like Copilot. At its core, Copilot is a fine-tuned GPT3 model — that is, it statistically predicts what the next token would be, given the previous $N$ tokens it has seen.

Using Copilot is often a magical experience. It has many, many strong suits:
1. **Speed**: Probabilistic autocompletion tools can match the speed of the programmer, allowing the programmer to not have to wait for the tool to catch up (A problem in many others in this domain).
2. **Generalizability**: Copilot isn't limited to a domain-specific language, and can be used in writing basically any language that previously exists on the internet (and even some that don't!)

It's easy to view Copilot as where the buck stops — what could be better? But there's a few problems with it, that I'll elaborate on here:
1.  **Lack of Abstraction**: There is no abstraction created between the programmer and the programming assistant. The power of these suggestion tools is to suggest code the user was thinking about writing and not necessarily code that the user does not need to worry about writing.
2. **Lack of Guarantees of Correctness**: There are no guarantees about the correctness of the generated code. Once an autocomplete suggestion is accepted, the programmer either needs to verify it using their own reasoning and keep coding, or the programmer needs to halt their code-writing, develop a small testing framework, test the generated code, and then continue.

To wit, **there is no way to trust what Copilot wrote** without reviewing every line of code yourself. If the goal is to have Copilot be a speed multiplier — just to make developers go faster — it's certainly able to do that. However, if the goal is to have Copilot be another programmer – who can write code without hand holding — then we find it lacking.

## Problems with Tools Based on Programming by Example
The other big specification type is "Programming By Example" where we give our generative tool some examples of what we want a routine to perform, and ask for a routine that fulfills all these examples.

```
Given:
Input = 1, Output = 2
Input = 2, Output = 3
Input = 3, Output = 4

Generated Function:
def f(x):
    return x + 1
```
The benefits of this interface is that it's correct by contstruction — the programmer can be sure that the generated code will work.

These, of course, come with their own set of problems:
1. **Long Synthesis Time**: These assistants often take a long time to synthesize programs. This duration increases as the complexity of the I/O or demonstration increases. It also abstracts away the entirety of the synthesis process, such that users develop frustration around re-specifying the problem repeatedly because of ambiguous specifications.
2. **Difficulty of Generating Examples**: For problems like PBE, it is sometimes notoriously difficult to generate examples — this is because a lot of the program might have complex inputs and outputs like entire files or multiple levels of user input. Such a technique only works in specific domains.

While techniques like PBE would necessarily produce "correct" code, they are not scalable in most real-life projects, with many moving pieces and components interacting with each other. We need something that both writes fast, can be trusted, and is generalizable.

# So, What's Next?
So  you want to make automated programmers, not just programming assistants. What would we need to be able to do so?

I posit that there are a few tenets for whatever comes next:
1. **Certainty**: User should be assured the code they write behaves the way they expect it to.
2. **Completeness**: If there is a way to do it in another language, there should be way to do it in our language.
3. **Abstraction**: To truly allow the user to focus on what they are building, we would need to abstract the code generated by the assistant away from the user, without sacrificing certainty.
4. **Usability**: It should be no more annoying to use this language than to write the entire thing ourselves
5. **Integratibility**: Should be able to be added to current languages and workflows

I believe that the future for interfacing with AI is languages that allow us to maximize the specification provided in the fewest steps possible. This would include getting information like a docstring about the function expected. This would also include presenting information *to* the user — like clarification questions for edge cases, or examples of what the output might look like. Perhaps then it can ask the user to confirm whether the behavior is expected, or ask the user to provide a test bench for the synthesized function. And back and forth we would go.

**The future is communication between the machine and the user.** What this communication looks like, I cannot yet say — both because I don't know, and because I cannot present my research work until it's officially in pre-print or published.

_However_, I would love to talk about my work with you! Please consider reaching out to [hi@amks.me](mailto:hi@amks.me) if problems in this space excite you, if you want to collaborate, or if you're just curious.



