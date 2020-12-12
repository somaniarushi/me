---
title: "The React Breakdown, Part 1"
description: "My Personal Mega-React Tutorial"
date: 2020-12-08T17:02:40-08:00
location: "Lucknow, India"
keywords: ["react", "web development", "tutorial"]
tags: ["web-development", "teaching"]
draft: true
---

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “UI components”.

- Why use frameworks and libraries at all?
- Why use React?


## Installations and Basics

### Node
Node is a Javascript interpreter for the server. It is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side application using JavaScript.

The power of Node is that it takes JS out of your browser to your computer. With Node, you can write *all* parts of your programs in a single language –– Javascript. The powerful thing is that Node preserves the ability of JS to be async and event based, which is why it is so powerful.

**Installation**: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Server
When you see a website, the bits that make up your website are coming from somewhere. This plaec where your website is coming from is the website server. When you run websites locally, the server is your computer. The idea behind Node is that it takes the Javascript and interprets it and serves it for us.

### NPM
npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.

**Installation:** [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)



## Trying Out React

### What is `create-react-app`?

Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.

Download Link: [https://www.npmjs.com/create-react-app](https://www.npmjs.com/create-react-app)

```
npx create-react-app my-app
cd my-app
npm start
```

to start running the website locally.

We're going to use `create-react-app` as a base for our React development!

**Link for more details**: [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)



### Messing Around With `create-react-app`

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

```jsx
var display = <h1>Number 3</h1>

ReactDOM.render(
  <React.StrictMode>
    {display}
  </React.StrictMode>,
  document.getElementById('root')
);
```

## How React Works

To understand how react works, we will talk about how `create-react-app` works. Let's go back to the `src/index.js` file and this line:

```jsx
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

- What is ReactDOM?
- What is React.StrictMode?
- What is <App />?
- What is document.getElementbyID('root')?

---

# Introduction to JSX

### Importing JSX

When we import React through `import React from "react"`, we bring along JSX with it.

### What is JSX?

It is a syntax extension to JavaScript. JSX may remind you of a template language, but it comes with the full power of JavaScript.

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects. This means that you can use JSX inside of `if` statements and `for` loops, assign it to variables, accept it as arguments, and return it from functions.

```jsx
function displayDetails(user) {
	  return "I am " + user.name + " and I am " + user.age + " years old";
}

const user = {
  name: 'Arushi',
  age: '19'
};

const element = (
  <h1>
    Hello, {displayDetails(user)}!
		Hello, {displayDetails(null)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

We can also render conditionally!

```jsx
function displayDetails(user) {
	if (user) {
	  return "I am " + user.name + " and I am " + user.age + " years old";
	}
	else {
		return "I don't know who I am";
	}
}
```

Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names. 

## What is Happening in JSX Behind the Scenes?

Why can HTML exist in JS? What is JSX doing such that we can do all of these crazy things? The trick is to realize that JSX represents objects –– Babel compiles JSX down to  `React.createElement()`  calls.

### What is Babel?

Babel is a JavaScript compiler. Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.  Here, Babel converts JSX syntax!

Play around with it here: [Online Babel compiler](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.10.5&externalPlugins=)

### A Simple `React.createElement`

Consider the very simple HTML statement:

```html
<h1>Hello!</h1>
```

How would we take this and make it a React component? Well, with abstractions up, it would be something like this:

```jsx
var heading = <h1>Hello!</h1>
```

But here's what is going on behind the scenes:

```jsx
var heading = React.createElement('h1', null, 'Hello!');
```

This tells us something very interesting! The returned value for React.createElement is going something special behind the scenes –– it's using JS to create something like this:

```jsx
const element = {
  type: 'h1',
  props: {
   children: 'Hello, world!'
  }
};
```

If this does not currently make sense, that's okay! There is a lot of information here that will come back as we learn more and more about React!