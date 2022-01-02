---
title: "The React Breakdown, Part II"
date: 2021-01-19T13:22:30-08:00
slug: "react2"
description: "Understanding JSX in All It's Complex Glory"
keywords: []
draft: true
tags: []
stylesheet: "post.css"
---
## Introduction to JSX

### What is JSX?

It is a syntax extension to JavaScript. JSX may remind you of a template language, but it comes with the full power of JavaScript. After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

```
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

```
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

Why can HTML exist in JS? What is JSX doing such that we can do all of these crazy things? The trick is to realize that JSX represents objects –– Babel compiles JSX down to `React.createElement()` calls.

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