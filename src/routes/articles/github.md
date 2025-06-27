---
title: Installing git and github and signing in via terminal - Ubuntu
date: '2024-09-02'
---

<!-- ![colorful wire design](/src/routes/pictures/wires.jpg/ "Wires") -->

I have horrible luck, or my old servers motherboard is on the way out and eating drives one by one. Either way, I've been rebuilding it a lot lately until today I just replaced it.

As I rebuild, I'm making guides of what I'm doing so if I have to rebuild again, I don't have to remember what I did!

Maybe it'll help you too.


## 1. In terminal, to install github and git:
```bash
sudo apt install git gh
```

## 2. Run the following to authenticate to your github
```bash
gh auth login
```
## 3. When prompted, select Github, https, login with a browser.

The terminal will give you a code and you can login on a completely different computer if need be, just in case you don't have a gui on the server you're currently doing this on.

## 4. Done.

Now you can git clone your private repo's or commit to your repos since you're now logged in properly.