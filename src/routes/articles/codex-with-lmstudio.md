---
title: Running Codex CLI with a Local LM Studio Model - WSL
date: '2025-10-23'
---

## 1. Install wsl if you haven't already, then start it

```bash
wsl --install
wsl
```

## 2. Stag install of Node.js

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

## 3. Quick then install Node.js for real this time

```bash
nvm install 22
```

## 4. Install and run codex

```bash
npm i -g @openai/codex
codex
```

The first time it will prompt you to log in with your OpenAI account. As long as you don't configure an api key, you'll just be on the free version **BUT that doesn't matter as we'll be making a config to bypass openai and just use LM Studio anyway.**

## 4. Configure Codex to point at LM Studio

Exit codex (Ctrl‑C), then edit the configuration file:
(we had to run it once to create this dir)

```bash
notepad ~/.codex/config.toml
```

Add a provider and profile section that points to your local LM Studio instance. Replace `1234` with whatever port you’re using but by default LM Studio is 1234.

```bash
[model_providers.lms]
name = "LM Studio"
base_url = "http://localhost:1234/v1"

[profiles.lms]
model_provider = "lms"
model = "lms"
```

Of course edit the base_url to your lm studio servers address.

> **Tip** – The part after `profiles.` can be anything you like; Codex will always use whatever model is currently loaded in LM Studio.

## 5. Run Codex with the new profile

```bash
codex --profile lms
```

## 6. Bonus, run VScode alongsize codex

Ensure you have VS code installed in your Windows environment first.

Then in WSL simply start up code in the directory you just started codex up in:

```bash
code .
```

Now you'll be able to see when codex makes changes to your code in realtime within VScode.

## 7. Done
You’re now using a private, free local model via LM Studio!
So cool.

The trick now is... can you load a smart enought model to make it useful :p

Have fun.

## 8. Secret point 8
Note.. in my personal use, I'm finding Cline extension in VScode to work a billion times better than Codex.
Maybe codex is good when hooked up to expensive models, but not when hooked up to gpt-oss-20b, qwen-coder-30b, or even gpt-oss-120b.

Cline how-to incoming soon TM.
