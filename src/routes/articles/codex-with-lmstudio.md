---
title: Running Codex CLI with a Local LM Studio Model
date: '2025-10-23'
---

I've been playing more with agentic things and this can run up your api bills quickly. So I wanted to see how to connect it to lm-studio local models.

It's a lot quicker than I ever would have imagined. 

Below is how I did it, mostly for myself to re-read later when I need it, but  if it helps someone else, that's a bonus!

## 1. Install Node.js and npm

If you don’t already have `npm`, grab it from the official site:

[nodejs installer](https://nodejs.org/)


## 2. Install Codex CLI

```bash
npm i -g @openai/codex
```

## 3. Run Codex and login once

Start the tool:

```bash
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

You’re now using a private, free local model via LM Studio!
So cool.

The trick now is... can you load a smart enought model to make it useful :p
It's tricky. I've been mostly playing with GPT-OSS-20B. I'd bet Qwen3 Coder 30b would work nicely as well but maybe the OSS model would be better as it's actually from openai too...

Anyway. Have fun.
