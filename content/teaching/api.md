---
title: "Types of APIs"
description: "No REST for the wicked!"
date: 2020-10-17T17:49:51-07:00
slug: "apis"
keywords: []
tags: ["web-development"]
stylesheet: "post.css"
location: "Lucknow, India"
draft: false
---
If you're at all interested in back-end web development, then you've heard of APIs –– but what are they really?

## What are APIs?
Imagine that we want to make available data about movies. `getLastBlockbuster()` returns the last big cinema hit, `movieRating('Parasite')` returns the imdb rating of the movie Parasite, and so on. This would be a very cool tool to give movie enthusiasts! So you go ahead and write this. How do we make this available to users?

We could make our code [open source](https://opensource.org/). There's a few issues with this: 
- You may have data that you don't want to make public.
- If you're using a huge database, developers having to download and store it is inefficient. 
- There's no way to keep updating the project as people use them. 

The problem: how do we give users access while maintaining control? The solution: Make an interface between them and us. They will ask the interface for data, the interface will ask our program, and the value will similarly be returned. Success!

This interface is known as the application programming interface, or API. APIs give the developer a series of commands they can use, whose implementation is abstracted away. **APIs are, simply put, abstractions.**

Now, let's discuss the kinds of APIs, their similarities, differences and uses!

## RESTful API
Let's begin with the most common API style. REST stands for Representational State Transfer. They mostly perform CRUD (Create, Read, Update, Delete) operations on some database. 

The big idea: interaction between a user and a backend server. The user sends a request to the server. The server takes action based on the request and returns (**transfers**) a data structure which is a **representation** of the **state** of the server. For example, a `GET` request returns a JSON containing some data about what was requested.

REST APIs are popular because they made optimal use of the [HTTP protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol). As the HTTP-based infrastructure of servers, caches and proxies was realized to be scalable and long-lived, REST was wholeheartedly adopted alongside it. 

The advantage of REST is that it imposes a lot of constraints on the API, to give developers familiar tools and get maximum utility out of its frameworks. This is also its disadvantage – the strict structure doesn't allow new features (for example, ability to remember past query calls) to be added.

[Here's what I wrote about what makes an API RESTful]().

## REST-like API
REST API frameworks have some strict constraints, because of which many API that claim to be rest aren't really REST. How do we judge how close an API is to being RESTful? [I wrote a blog post about it]().

## GraphQL API
For a long time, REST APIs had a monopoly. Facebook saw this and really didn't like it. Enter: [GraphQL](https://graphql.org/). Unlike REST, everything is connected in graphQL (its all a \**graph*\*). GraphQL thus leads to more specific queries because resources aren't siloed. It also leads to lesser queries, on average, which is more efficient! 

The disadvantages of GraphQL are that it doesn't use HTTP tools as well as REST (no cache support) and has poor error handling in comparison to REST. It's also hard to set up GraphQL structures for small projects.

## RPC API
Last but not least is the oldest API style – [RPC](https://www.geeksforgeeks.org/remote-procedure-call-rpc-in-operating-system/) has been around since the 1980s. It stands for Remote Call Procedure. Like REST, it works over HTTP. Unlike REST, RPC is used when a limited amount of data needs to be used. RPC allows specificity in requests, while makes it slightly more efficient than REST (which returns entire states).

A popular form of RPC API is the [SOAP](https://www.w3schools.com/xml/xml_soap.asp) API. It stands for Simple Object Access Protocol. An important note: SOAP is a protocol. SOAP has an official standard, and is maintained by [W3C](https://www.w3.org/). SOAP uses XML for all requests. 

## Conclusion
There's a lot of ways to share data with each other, and APIs are definitely the coolest one! If you're a frontend developer like me, backend APIs can be scary. But they are such a wonderful tool, and seeing how varied they are gives some insight about how to get started with using them.

## Resources 
- [A Brief History of APIs](https://medium.com/@alexewerlof/a-brief-history-about-apis-f1be2f59c858)
- [Postman's Introduction to API Usage](https://blog.postman.com/intro-to-apis-history-of-apis/)
- [The Dissertation That Led to the creation of the REST Style](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)
- [The Easiest Place to Start with APIs: The JSON API](https://jsonapi.org/)




