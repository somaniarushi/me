---
title: "Using Obscure CSS Notation For Dark Mode"
date: 2020-06-16T20:50:10-07:00
slug: "css-does-strange-things"
description: "On the path of finding the correct way of doing this, I stumbled upon a very wrong, very beautiful way."
keywords: ["web-development", "vanilla", "css", "toggle", "tutorial", "teaching", "walkthrough"]
draft: false
tags: ["web-development"]
stylesheet: "post.css"
---

If you're using any node-based framework, you can use [the package I created](https://npmjs.org/@asomani/darkmode) instead. [I also wrote about it.](/blog/dark-like-my-soul)

## No Toggle Solution

CSS provides a media query to let your website [match the preference of the user](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

```
/* Other Styles Here */
...

@media (prefers-color-scheme: dark) {
    h1 {
        color: white;
    }
    /* Other Selector Style Updates */
    ...
}
```

## Toggle Solution

**Fundamental Idea**: use the [CSS + selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) to match sibling items with a checkbox label.


### Making The Toggle

First, let's set up the HTML file, a [checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) as our toggle. A wrapper division contains our label and subparts of the label. Every other piece of content will be a part of the wrapper.
```
<html>
    <head>
        <title>
            Introduction
        </title>
        <link rel="stylesheet" href="dark-mode.css"> 
    </head> 
    <body>
        <input type="checkbox" id="cb" />
        <div id="wrapper">
            <label id="toggler" for="cb">
                 <span class="toggle-border">
                    <span class="toggle-indicator"></span>
                </span>
            </label>
        </div>
    </body>
</html>
 ```
Quite boring till now. No worries! CSS is where the magic happens. 

Let's set up a css file now, and link it in the header of the HTML file that we'd left blank earlier. <mark>(Don't forget!)</mark> Then, let's begin the css file by removing the standard checkbox, and adding style to the label.
```
  #cb {
    display: none;
}

  #toggler .toggle-border {
    border: 1px solid #1e1f26;
    width: 50px;
    height: 20px;
    display: block;
    border-radius: 20px;
    position: relative;
  }

  #toggler .toggle-indicator {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    background-color: #1e1f26;
    top: 2px;
    left: 2px;
    transition: all 0.3s ease-in-out;
  }
```
Very nice! We're setting up a curved border `.toggle-border` with a [block display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) to prevent collapse. Then we set up a `.toggle-indicator` circle and position it properly. The `position: relative` is important to position  `.toggle-indicator` through [`position: absolute`](https://www.w3schools.com/cssref/pr_class_position.asp)

Now let's add toggle functionality.

```
  #cb:checked + #wrapper .toggle-indicator {
    left: 32px;
  }
```
If the checkbox is checked, we're moving the `.toggle-indicator` 32px to the right (or adding 32px to the left). That's what the [`transition`](https://css-tricks.com/almanac/properties/t/transition/) in the `.toggle-indicator` main selector is for –– delaying the movement and making it smooth.

The `#wrapper` in there is the piece de resistance –– it's because of this that the `+` combinator works.

### Changing Colors

```
 #cb:checked + #wrapper .toggle-border {
    border-color: white;
  }

 #cb:checked + #wrapper .toggle-indicator {
    background-color: white;
    left: 32px;
  }

 #cb:checked + #wrapper {
    background-color: #121212f5;
    color: #f0f0f0e5;
    padding: 10px;
  }
```
We can do the same thing with all kinds of selectors, as long as they're in the wrapper.
```
  #cb:checked + #wrapper h1,
  #cb:checked + #wrapper h2,
  #cb:checked + #wrapper h3,
  #cb:checked + #wrapper p,
  #cb:checked + #wrapper li {
    color: #f0f0f0e5;
  }
  
  #cb:checked + #wrapper a {
    color: rgba(143, 194, 253, 0.829);
  }
  
  #cb:checked + #wrapper a:hover {
    color: rgba(59, 140, 233, 0.829);
    transition: all 0.2s ease-in;
  }
  
  #cb:checked + #wrapper code {
    background-color: rgba(143, 194, 253, 0.233);
  } 
```

### Storing Last Preference
Across different pages and multiple visits, we want to be able to save that info and not force the user to toggle every single time. We can use JQuery and Javascript to do that.

First, let's import [jQuery](https://jquery.com/) in our HTML file. Then, create a JS file and insert it into the HTML file.
```
<html>
    <head> 
        ... 
        <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    </head>
    <body>
        <script src="dark-mode.js"></script>
    </body>
</html>
```
In the dark mode javascript file, we run a function when the document gets ready.
```
  $(document).ready(onReady);
```
In this function, we want to store a variable in [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). 
```
 function onReady() {
    let checked="true"==localStorage.getItem("checked");
    $("#cb").prop('checked', checked);
  }

$(document).ready(onReady);
```
Here, we change the value of the checkbox to whatever it was the last time.
```
function onClickBox() {
    let checked=$("#cb").is(":checked");
    localStorage.setItem("checked", checked);
  }
  function onReady() {
    let checked="true"==localStorage.getItem("checked");
    $("#cb").prop('checked', checked);
    $("#cb").click(onClickBox);
  }
$(document).ready(onReady);
```
Now we set up that whenever the checkbox is clicked, the value of the check (true or false) is updated.

And that's it! Congratulations, your toggle is set up, completely vanilla.

[Try it out in codepen.](https://codepen.io/insomania/pen/zYrojXG)
