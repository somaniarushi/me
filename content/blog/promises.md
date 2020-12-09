---
title: "What, Really, Are Promises?"
description: "Peeking Under The Hood of a Popular JS Class"
date: 2020-12-08T18:02:07-08:00
slug: "promises"
keywords: []
tags: ["web-development", "teaching"]
stylesheet: "post.css"
location: "Lucknow, India"
draft: true
---

Recently, I was asked to recreate the Promise class in one of my interviews. I was taken aback by the question, and it took me a good couple minutes before I cooked up some form of an answer. Big fail.

This is my redemption. Let's go ahead and write a minified version of the Promise class.

## The Promise Class: A Quick Recap
**If you're unfamiliar with Promises, I'd highly consider checking out [this wonderful guide](https://javascript.info/promise-basics).** This article assumes some familiarity with the concept of Promises.

A Promise is a way to execute some code asynchronously. It accepts a function, and stores the values after execution to be called on on a later date. A promise can only ever be in one of three states:
- fulfilled, with some value returned
- rejected, with an error and an error string returned
- pending or still executing

Here's a small example in action:

```
let promise = new Promise(function (reject, resolve) {
    setTimeout(() => resolve("done"), 1000);
});

promise.then(res => alert(res));
```
# Let's Write The Class
To begin with, we're start with the constructor. It takes in one argument, of the `executor` function. The function only runs when the Promise object calls the executor.

We also need to create the `reject` and `resolve` functions that the executor will accept. Both of these take in one argument and return an object.
```
class Promise {
    constructor(executor) {
        this.executor = executor;
        this.value = null;

        this.resolve = (value) => {status: 'fulfilled', value: value};
        this.reject = (error) => {status: 'rejected', reason: error.string}
    }
}
```
And now we execute! We run the executor in the constructor, because execution starts as soon as the Promise object is created. The resultant status object is stored in `this.value`.

```
class Promise {
    constructor(executor) {
        this.executor = executor;

        this.resolve = (value) => {status: 'fulfilled', value: value};
        this.reject = (error) => {status: 'rejected', reason: error.toString()}

        this.value = this.executor(this.resolve, this.reject);
    }
}

```
Wonderfully, we're now done with the core execution of the Promise class! All we need to do is create ways for the user to get the calculated values out: the `then`, `catch` and `finally` functions. For the fake of simplicity, we'll just do `then`. The other two follow the pattern. We also ignore the existence of Thenables for the same reason.

```
    /* The then function accepts two arguments, one to be run if
    the promise resolves, and the other if there is an error. 
    Returns another Promise. */

    function then(onFulfilled, onRejected) {
        let result = this.result;

        return new Promise((rej, res) => {
            if (result.status === 'fulfilled') {
                return res(onFulfilled(result.value));
            }
            if (result?.status === 'rejected') {
                return rej(onRejected(result.reason));
            }
        });
    }
}

```