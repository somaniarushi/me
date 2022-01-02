---
title: "The React Breakdown, Part I"
description: "A Gentle Introduction to React"
date: 2020-12-08T17:02:40-08:00
location: "Lucknow, India"
slug: "react1"
keywords: ["web-development"]
tags: ["teaching"]
draft: false
---

This series of notes was used to teach students at Berkeley in the fall of 2020.

Unlike many other tutorials across the internet, this tutorial uses a bottom-up approach to React, going through the basics of different react functionalities before implementing them. It pulls back the layer of abstraction around React tools to deeply understand how they work.

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “UI components”.

## Motivation: Why use frameworks at all?
With "vanilla" HTML/CSS/JS, we can build any front-end project. Combined with a little back-end Ruby on Rails/Node.JS/Django knowledge, we can build any web-based project whatsoever.

However, there are problems with the vanilla approach. For one, HTML, CSS and JS are often a pain to write –– we often swap in JQuery to ease some problems for us. We add Bootstrap to ease the pain off of building something that we use repeatedly. Relying on the foundation of what others have built for our use is simply good programming practise.

In the vanilla version, everything is defined globally. The feedback form doesn't need to know about the navigation bar! It also reduces reusability. As your project grows, pure HTML, CSS and JS will get more and more unweildy, harder to document, and difficult to maintain.

For those readers familiar with object oriented languages, you may realize that these are the same problems that lead to the creation of classes in Python and Java. We now endeavor to take those principles and apply them to web development.

## Why use React?
React.JS is one of the most popular libraries for front-end web development. It's open-source, and has a huge community of developers working on open source projects through it.

React fits very cleanly into the MVC model of development. React is incredibly good at scoping and components –– ie, it is object oriented and does separation of concerns well. It's also similar to Bootstrap and Jquery in that it's unrestrictive –– you can use as much or as little of it as you desire!

It also removes the barrier created by different languages being in different files, which helps in creating a more modular project. The biggest power of React, however, is its abstractions. Something that might take you 20 lines of code in JS takes you one in React.

Cons of React: There's a sharp learning curve. Writing React is sometimes confusing (I second this one, I still get confused!). It's a big library, decreasing how light-weight your code can be. (Longer load times)


## Installations and Basics

### Node
Node is a Javascript interpreter for the server. It is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side application using JavaScript.

With Node, you can write *all* parts of your programs in a single language –– Javascript. Node preserves the ability of JS to be async and event based, which is why it is so powerful. [Install it here.](https://nodejs.org/en/download)

### Server
When you see a website, the bits that make up your website are coming from somewhere. This place where your website is coming from is the website server. When you run websites locally, the server is your computer. The idea behind Node is that it takes the Javascript and interprets it and serves it for us.

### NPM
npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. Think Bootsrap but open-sourced. [Install it here.](https://www.npmjs.com/get-npm)



## Trying Out React

### `create-react-app`

[Create React App](https://www.npmjs.com/create-react-app) is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.

Start your project by typing the following in the terminal:
```
npx create-react-app my-app
cd my-app
npm start
```

Link for more details: [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)



### Messing Around

Now, we'll play around with it!

In `create-react-app`, look in `src/index.js`. We shall see this line:

```
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

What's going on here: We're asking React to render into the DOM, the App that we have created (strictly). We'll talk more about all the other tags, but right now, let's mess around with this!

Let's change this into something simpler:

```
ReactDOM.render(
  <React.StrictMode>
    <h1>Hi!</h1>
  </React.StrictMode>,
  document.getElementById('root')
);
```

Here, we see that we're putting HTML straight into JS. How is this happening?! This is through JSX, which we'll talk about more later.

Now, we introduce the curly parenthesis: The way to incorporate javascript into HTML inside of Javascript!

```
var display = "Cheers!"

ReactDOM.render(
  <React.StrictMode>
    <h1>{display}</h1>
  </React.StrictMode>,
  document.getElementById('root')
);
```

Now, we take HTML out of the render call to show the flexibility of JSX. HTML tags can be used as any other JS expression.

```
var display = <h1>Number 3</h1>

ReactDOM.render(
  <React.StrictMode>
    {display}
  </React.StrictMode>,
  document.getElementById('root')
);
```

## How React Works

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Let's address all of these.

### What is `ReactDOM`?
The Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document. ReactDOM is a package that provides an efficient way of managing DOM elements of the web page.

### What is `React.StrictMode`?
StrictMode is a tool for highlighting potential problems in an application that may not immediately error.


### What is `<App />`?
Similar to how we have `<h1>` or `<img>` tags in HTML, we have the power to create custom tags in React. This is a custom App tag.

### What is `document.getElementbyID('root')`?
This is plain JS! We're injecting our ReactDOM-rendered element into the "root" of the page. But where is this root? Check out `public/index.html`! You will see this:
```
<div id="root"></div>
```
This is the div in which we are injecting our App.

### In Conclusion
You're now getting mildly familiar with React as a language — this is just the beginning. In the next part of this series, we'll talk about JSX, and then get developing!