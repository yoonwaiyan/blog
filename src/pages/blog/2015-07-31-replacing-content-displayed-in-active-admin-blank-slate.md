---
templateKey: blog-post
title: Replacing Content Displayed in Active Admin Blank Slate
date: '2015-07-31 14:17:23'
description: >-
  There are tons of Active Admin workarounds available in the net but there are
  very limited resource on manipulating the content to be displayed in the blank
  slate. One of it is the StackOverflow question which is not what I want.
---

All I want is to replace/manipulate the content as displayed inside the blank slate instead of customizing it in per-page basis: Remove the "Create new" link.

<img src="https://s3.amazonaws.com/waiyanyoon.com/blank_slate_before.png" alt="Before monkey patching">

There's a question that was asked in Google Groups but it's been few years but yet received any response, so I decided to create a monkey patch by overriding Active Admin source code. The code is placed in the /config/initializer folder of my Rails project as `blank_slate.rb` so that the project loads up the patch file without any configuration to load up a lib folder.

<script src="https://gist.github.com/yoonwaiyan/75caf90aa5c355eb3484.js"></script>

By patching the `render_blank_slate` function and removing the join between the blank slate message and the "Create One" link as returned in `blank_slate_link`.

<img src="https://s3.amazonaws.com/waiyanyoon.com/blank_slate_after.png" alt="After monkey patching">
