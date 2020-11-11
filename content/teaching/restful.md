---
title: "What makes an API RESTful?"
description: "It's more complicated than you'd think."
date: 2020-10-26T17:49:51-07:00
slug: "restful"
keywords: []
tags: ["web-development"]
stylesheet: "post.css"
location: "Lucknow, India"
draft: true
---
Believe it or not, most APIs you'll use will be _REST-like_, not _RESTful_. This is because the requirements for an API to be RESTful are actually quite strict. Let's go through the constraints.

## Using HTTP Capabilities

So what does an API need to do to be RESTful? Well:
- Design of resources (nouns), not methods or operations (verbs).
- Use of the uniform interface, defined by HTTP methods, which have well-specified semantics.
- Stateless communication between client and server.
- Use of loose coupling and independence of the requests.
- Use of HTTP return codes.
- Use of media-types.

## Resources
- https://www.geeksforgeeks.org/rest-api-architectural-constraints/
- https://api-university.com/api-lifecycle/api-design/rest/
- https://api-university.com/blog/rest-apis-with-hateoas/
- https://api-university.com/blog/richardson-maturity-model/