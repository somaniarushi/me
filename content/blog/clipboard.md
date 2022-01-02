---
title: "Making My Own Clipboard"
date: 2020-11-07T05:31:37-08:00
slug: "clipboard"
description: "And some other things I copy and pasted."
location: "Lucknow, India"
keywords: ["web-development", "clipboard", "research", "hacking"]
draft: false
tags: ["teaching"]
stylesheet: "post.css"
---

Last weekend, I made a private clipboard. You can play with it [here](https://clippy.amks.me) and I explain the process of making it in this blog!

&#8984;+C. &#8984;+V. I do this way too many times a day, at an instinctual level. I don't know when I learned how to copy and paste, but it certainly feels like I've known it all my life. The clipboard is probably the most widely used shortcut on the keyboard.

But how does it really work?

## How The Clipboard Works
The clipboard is, in essence, some memory space on the RAM that stores information temporarily. You can think of it as a massive cache.

How massive? The memory allocation function the clipboard calls can get up to 4GB blocks. I've found no documentation suggesting that there can't be multiple blocks. So, the amount of data available is the available space in our virtual memory –– a seemingly infinite sea of space.

You could copy the entire works of Shakespeare onto the clipboard and it wouldn't even bat an eye.

## Clipboard Preserves Formatting

The clipboard is deceptively simple. Ever wonder how the clipboard can save images, text, files, emails?

The clipboard is designed to recognize and hold many different types of data. Text is held in the (appropriately named) text format, images in the TIFF format, and so on. When copying a local document, it does not copy over the document itself but a reference to the _item_ itself.

The clipboard is also careful to preserve these formats in some places while discarding them in others. Text pasted in a markdown file is unstyled, while that in a word document is left styled. Images can't be pasted in the markdown file, but are easily added to the word doc. These decisions are made by the clipboard.

## Searching for Documentation
There is painfully limited documentation available on how the clipboard works, most of it linked below. In essence, both Apple and Microsoft describe a few functions that dictates the clipboard's actions (`Open`, `Copy`, `Paste`, `Close`) and some notes about how best to utilize the clipboard when coding functionally.

## Making My Own Clipboard
When finding ways to manipulate the clipboard seemed difficult to find, I started wondering what it would take to make a simple clipboard, without the formatting complications.

A **Clippy**, if you will.

My core realization was that, mathematically, the clipboard was a simple state variable updated based on some condition. In a lot of languages, this is as simple as a one line declaration. The power of the clipboard is its ability to work across platforms.

Clippy, however, needs to do no such thing. Clippy could remain isolated to its project, without worrying about interacting with global memory.

Once those limitations were in place, all I needed was a Javascript variable and some key-press sensing code.

## Introducing Clippy!

You can try it out yourself at [clippy.amks.me](https://clippy.amks.me) or check out the shockingly light weight [repo.](https://github.com/somaniarushi/clippy) One clipboard down, everything else in the CPU still left to do!



## Resources
- [Microsoft Documentation about Their Clipboard Update](https://docs.microsoft.com/en-us/archive/blogs/ntdebugging/how-the-clipboard-works-part-1)
- [Apple's Retired Documentation About How Their Pasteboard Works](https://developer.apple.com/library/archive/documentation/General/Conceptual/Devpedia-CocoaApp/Pasteboard.html#:~:text=A%20pasteboard%20is%20a%20secure,also%20depend%20upon%20the%20pasteboard.)
- [A Brilliant Flowchart Showing How The Clipboard Works](https://eclecticlightdotcom.files.wordpress.com/2020/05/pasteboard2.pdf)
<!-- - https://eclecticlight.co/2020/05/12/cut-copy-paste-inside-the-pasteboard-clipboard/ -->
<!-- - https://medium.com/@Charles_Stover/manage-your-customers-clipboard-with-react-hooks-18486220d0d1 -->
<!-- - https://medium.com/@rjstech/taking-a-look-at-the-clipboard-api-bc4d90e72b33 -->
<!-- - https://medium.com/hackernoon/copying-text-to-clipboard-with-javascript-df4d4988697f -->

<!-- - https://docs.microsoft.com/en-us/windows/win32/dataxchg/clipboard-formats?redirectedfrom=MSDN -->
<!-- - https://docs.microsoft.com/en-us/windows/win32/dataxchg/using-the-clipboard?redirectedfrom=MSDN#implementing-the-cut-copy-and-paste-commands -->
<!-- - https://dummies.com/computers/macs/mac-operating-systems/understanding-the-mac-os-x-lion-clipboard/ -->



