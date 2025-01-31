---
title: Super duper basic git commands
date: '2025-01-30'
---

These are dead simple commands to use github at the most basic levels, which is currently apparently all I do.

For example, right now I'm writing this post in neovim on Ubuntu. I'm going to save out of it and need to commit this change to github in order for Cloudflare to update this website and post this article. However I totally forgot how to commit from terminal. I normally do this in vscode, but sometimes I want to go turbo-cool-guy and do it from terminal.

So, once I'm done this article I'm going to need to:

1. Stage my changes
```bash
git add [your file name here]
```
OR
```bash
git add .
```
To just stage all changes in the current dir and subdir.

2. Commit the changes
```bash
git commit -m "your commit message, something like _added new super simple git article_"
```

3. Finally, push the changes to github!
```bash
git push origin main

There, perfect. Now I know remember how to do it again and this article being posted is proof of that!

