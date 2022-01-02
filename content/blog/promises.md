---
title: "Recreating Promises in Javascript"
description: "Peeking Under The Hood of a Popular JS Class"
date: 2020-12-08T18:02:07-08:00
slug: "promises"
keywords: []
tags: ["teaching"]
stylesheet: "post.css"
location: "Lucknow, India"
draft: false
---

The Promise class is one of the most notoriously black-boxed tools in Javascript. *How* does the promise class manage asynchronicity, when Javascript is single-threaded?

I made a small Promise class to try to understand. The complete implementation [is at the end](#bringing-it-all-together) of this article.

This article assumes some familiarity with the concept of Promises. **If you're unfamiliar with Promises, I'd highly consider checking out [this wonderful guide](https://javascript.info/promise-basics).**



## The Specification
To focus on core concepts, we'll assume that our Promises always resolve and return a value. In other words, we won't be handling rejections and errors.

We of course want to be able to create a Promise object:

```
let promise = new Promise((res, rej) => setTimeout(() => res('done'), 1000));
```
We also want to be able to act on that Promise object, using the `then` function. We'll restrict our then to fulfilled Promises only (accepting one parameter).

```
let res = (val) => alert(val);
promise.then(res);
```
Finally, we want to be able to chain `then`s together, to act on each of its predecessor's values.
```
promise.then(res).then(res).then(res);
```


## The Skeleton
The bare bones:
```
class Promise {
    constructor(executor) {
        // do something
    }

    then(onFulfilled) {
        // do something
    }
}
```
Let's also write the `reject` and `resolve` function, which will be passed into the `executor` function.

```
class Promise {
    constructor(executor) {
        ...
        this.outcome = null;
        this.reject = this.reject.bind(this);
        this.resolve = this.resolve.bind(this);

        executor(this.resolve, this.reject);
        ...
    }

    resolve(value) {
        this.outcome = {status: 'fulfilled', value: value};
    }

    reject(error) {
        this.outcome = {status: 'rejected', reason: error};
    }
    ...
}
```

Either `reject` or `resolve` will be called in the body of the executor. The called function will update the state of the Promise object by changing the value of `outcome`.

> We are achieving asynchronicity through callback functions.

## The `then` Function
The `then` function accepts a function, and must always return a Promise. A naive version:
```
class Promise {
    ...
    then(onFulfilled) {
        return new Promise((res, rej) => {
            onFulfilled(this.outcome.value);
        });
    }
    ...
}
```
The problem: if the `then` function is called, and the Promise is not settled, `this.outcome` will be null, and would cause an error. We may be able to manage this by checking if `outcome==null`. If it is `null`, we can set a wait time, after which we will check again.
```
class Promise {
    ...
    then(onFulfilled) {
        if (this.outcome === null) {
            setTimeout(() => then(onFulfilled), 10);
        }
        else {
            return new Promise((res, rej) => onFulfilled(this.outcome.value));
        }

    }
    ...
}
```
However, if `this.outcome == null`, we will end up with no return statement and the return value will be `undefined`. This breaks the specification we gave our `then` function:
> The then function must always return a Promise.

## The Catch 22

The `then` function cannot create a Promise until the previous Promise has been settled. **Thus, it has to wait.**

The `then` function always has to return a Promise when it is called. **Thus, it cannot wait.**

A new Promise cannot be created until the previous one has been settled, but a Promise has to be returned. This leaves us only one choice.

*Return the Promise object we already have.*

```
class Promise {
    ...
    then(onFulfilled) {
        return this;
    }
    ...
}
```
The `then` function will usually be executed before the Promise settles. So, we can simply store the `onFulfilled` function in an instance variable and call for it on a later date.
```
class Promise {
    constructor(executor) {
        ...
        this.thenFunction = null;
    }
    ...
    then(onFulfilled) {
        this.thenFunction = onFulfilled;
        return this;
    }
    ...
}
```
We want to execute `this.thenFunction` once the Promise has settled -- that is, whenever either `resolve` or `reject` are called. We also want to update the state of the Promise object to account for any future calls.
```
class Promise {
    resolve(value) {
        ...
        this.callThen();
    }

    reject(error) {
        ...
        this.callThen();
    }
    ...

    callThen() {
        if (this.thenFunction)
            this.outcome.value = this.thenFunction(this.outcome.value);
    }
    ...
}
```
Finally, to account for a `then` function call after the Promise has been resolved.
```
class Promises {
    then(onFulfilled) {
        this.thenFunction = onFulfilled;
        if (this.outcome !== null) {
            this.callThen();
        }
        return this;
    }
}
```

## `then` Chaining
Oone last thing to handle -- chaining `then`s. The problem with our current implementation is that, each time `then` is called, `this.thenFunction` gets overwritten. To handle this, we change our `thenFunction` to an array.
```
class Promise {
    constructor(executor) {
        ...
        this.thenFunctions = [];
        ...
    }
    ...
    then(onFulfilled) {
        ...
        this.thenFunctions.push(onFulfilled);
        ...
    }
    ...
    callThen() {
        if (this.thenFunctions) {
            this.thenFunctions.forEach(fn => {
                this.outcome.value = fn(this.outcome.value)
            });
            this.thenFunctions = [];
        }
    }
    ...
}
```
And we're done!

## Bringing It All Together
Here is our complete Promise implementation:
```
class Promise {
    constructor(executor) {
        this.outcome = null;
        this.thenFunctions = callStack;

        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);

        executor(this.resolve, this.reject);
    }

    resolve(value) {
        this.outcome = {status: 'fulfilled', value: value};
        this.callThen();
    }

    reject(error) {
        this.outcome = {status: 'rejected', reason: error};
        this.callThen();
    }

    then(onFulfilled) {
        this.thenFunctions.push(onFulfilled);
        if (this.outcome !== null) {
            this.callThen();
        }
        return this;
    }

    callThen() {
        if (this.thenFunctions) {
            this.thenFunctions.forEach(fn => {
                this.outcome.value = fn(this.outcome.value)
            });
            this.thenFunctions = [];
        }
    }

}
```

## The Hidden Flaws
There's a tiny lie that this execution of the Promise class tells its user. When `then` is called, the user assumes that it returns a new Promise. This is not the case. It is always the original Promise object that is returned. It is also the original Promise that is modified to reflect the `then` calls.

Because of this, parellel `then` calls will not work as intended:
```
// let promise = <Promise object>

promise.then((val) => val+"2");
promise.then((val) => val+ "3");
```
The second `then` function should return `value3`, but would return `value23`. The fix for this would be to distinguish `then` chaining and parellel `then`s, which this implementation does not do.

If anyone is interested in writing an extension to this implementation, incorporating rejections and fixing other faults, feel free to [send me a pull request on the repo](https://github.com/somaniarushi/promises).

*If you enjoyed reading this, please consider signing up to [my newsletter.](/newsletter)*


