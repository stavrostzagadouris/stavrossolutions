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

You’re now using a private, free local model via LM Studio!
So cool.

The trick now is... can you load a smart enought model to make it useful :p

> It's generally decided that currently Qwen-coder-30b is the best currently.

Have fun.
