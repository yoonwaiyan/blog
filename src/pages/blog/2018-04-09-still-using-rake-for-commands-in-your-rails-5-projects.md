---
templateKey: blog-post
title: Still Using Rake for Commands in Your Rails 5 Projects?
date: 2018-04-09T09:01:45.524Z
description: >-
  This is a small tip on using Rails commands in breeze for your Rails 5
  projects.
---
While it's programmed in my brain to use `rake` commands for migrations and tasks, I find it very useful to use `rails` command instead of `rake` which is introduced since Rails 5 to unify the use of rails commands. Using `rake` commands in Rails projects normally cause errors because of the bundler version:

```shell
$ rake jobs:workoff
rake aborted!
Gem::LoadError: You have already activated rake 12.3.1, but your Gemfile requires rake 12.3.0. Prepending `bundle exec` to your command may solve this.
/Users/waiyanyoon/Documents/workspace/project/config/boot.rb:3:in `<top (required)>'
/Users/waiyanyoon/Documents/workspace/project/config/application.rb:1:in `require_relative'
/Users/waiyanyoon/Documents/workspace/project/config/application.rb:1:in `<top (required)>'
/Users/waiyanyoon/Documents/workspace/project/Rakefile:4:in `<top (required)>'

Caused by:
LoadError: cannot load such file -- bundler/setup
/Users/waiyanyoon/Documents/workspace/project/config/boot.rb:3:in `<top (required)>'
/Users/waiyanyoon/Documents/workspace/project/config/application.rb:1:in `require_relative'
/Users/waiyanyoon/Documents/workspace/project/config/application.rb:1:in `<top (required)>'
/Users/waiyanyoon/Documents/workspace/project/Rakefile:4:in `<top (required)>'
(See full trace by running task with --trace)
```

So now I replaced my `rake` commands to use `rails` instead for all my commands:

```shell
$ rails jobs:workoff
```

Now I can easily prevent the error above.
