---
title: "How Does Control Flow In Python?"
description: "And Some Notes About How To Imagine The Interpreter"
date: 2020-10-17T17:33:05-07:00
slug: "cs61a-control"
keywords: []
tags: ["cs61a"]
stylesheet: "post.css"
draft: false
---
To understand everything that 61A is trying to teach you, its important to understand the fundamental idea that everything is based on –– **how are Python programs executed?**

## Direct Control Flow
In the simplest of functions, control simply flows downward.   
```
a = 3
print(a) # prints 3
```
The reason this works is because the control goes up to down –– 3 is bound to a, and then looked up in line 2. We do this intuitively.

## Breaking Control Flow With If
The first way you learn how to break control is through if. If is known as the "conditional", because one of many statements is conditionally executed.

```
if (3 > 4):
    print("suite 1") # this does not get executed
else:
    print("suite 2") # this gets executed
```

Try it out yourself in [PythonTutor](http://www.pythontutor.com/visualize.html#code=if%20%283%20%3E%204%29%3A%0A%20%20%20%20print%28%22suite%201%22%29%20%23%20this%20does%20not%20get%20executed%0Aelse%3A%0A%20%20%20%20print%28%22suite%202%22%29%20%23%20this%20gets%20executed&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false).

As you can see, the control arrow *jumps* from line 1 to line 3, skipping line 2 entirely. You could add anything to that line, and it won't error –– because it will never execute.

```
if (3 > 4):
    print(1/0) # should throw error but never executed
else:
    print("suite 2") # this gets executed
```

## Breaking Control Flow With While
Another way we could change the flow of control is to make it go over the same block of code over and over again.

```
n = 1
while (n < 4):
    print("Hello") # prints thrice
    n = n + 1
```
The fundamental idea behind the loop is to do the same thing over and over again with small changes each time. 
There are four parts to the loop –– 
- the initial assignment (n = 1), 
- the iterative condition (while n < 4), 
- the execution (printing Hello) 
- the updation (n = n + 1). 
  
When we combine all four of these, we get a block of code that operates iteratively.

## Breaking Flow Of Control With Functions
Another, more complicated way, the control flow is broken is through functions.
Take this simple example.
```
def f(x):
    print("Inside the function") # doesn't get executed
    return 1/0 # does not error

print("Outside the function") # gets executed
```
Try it out yourself in [Python Tutor](http://pythontutor.com/visualize.html#code=def%20f%28x%29%3A%0A%20%20%20%20print%28%22Inside%20the%20function%22%29%20%23%20doesn't%20get%20executed%0A%20%20%20%20return%20x%2B1%0A%0Aprint%28%22Outside%20the%20function%22%29%20%23%20gets%20executed&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false).

So the function signature (that's the `def` line) is read, but not the function itself. The error inside the function doesn't execute, nor is the print statement. While the function's name and number
of arguments are read and saved, the body of the function is not.  

Now let's think about what happens when you call the function.
```
def f(x):
    print(a) # is executed
    return x+1

a = 3
print(f(a)) # prints 4
print(a) # prints 3
```
First, we bind a function with one argument to f. Then, we bind a to 3. 
Then, we call f with a (which is 3).

This call takes you out of your "main" control flow, and
creates a separate flow. You've previously thought about this in
terms of a *new frame.*

In this frame, everything inside of the frame is accessible,
and everything in all its parent frames is also accessible.
Moreover, anything that gets passed into this frame is a new
copy –– the x inside of the function is not the same as the a 
that is passed in (This idea will grow in importance as the things
we pass in get more and more complicated).

```
def f(x):
x = x+1
print(a) # prints 3
return x

a = 3
print(f(a)) # prints 4
print(a) # prints 3
```

As seen, the value a is accessible despite not being in the function's 
flow, because it is in the parent flow. Of course, x itself is accessible.
Changing x does not change a, because x is an independent copy of a.


The return value ends the function's frame and leads you back into
the main flow ("global frame"). Even functions that don't explicitly
have a return value have an implicit `return None` statement.

When the function returns to its own frame, it brings a value with it, and 
normal control flow resumes.

## Frames Are Independent Of Each Other
Consider the following example:
```
def f(x):
a = 4
return x

a = 3
print(f(a)) # Print 1
print(a) # Print 2
```     

What do you think will be printed?

You'll notice that Print 2 will return 3! So what happened to the `a=4` that we defined?
This is the idea of framing. **The universe that f(x) operates in is different (but not completely divorced)
from the universe of the main program (the global universe, if you will)**. The a that is defined in
the function is completely different from the a that is defined before the
function call. That's right –– there are two different `a`s existing!


This is what I mean by "the independence of frames". That is to say, a different 
frame has its own defined variables that may have the same name as a parent frame.


<p align="right">Questions? Email <code>arushisomani@berkeley.edu</code></p>
</article>