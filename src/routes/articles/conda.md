---
title: Super simple miniconda setup (Windows)
date: '2025-02-22'
---

When I first started playing with python and making scripts, I didn't realize I was gumming up my main systems environment with packages and variables etc.

Luckily a friend pointed me toward miniconda and venv.

The idea is that with python scripts for example, they need packages like 'openai' or 'beautifulsoup'. Sometimes they're very picky about what versions they need and it can get messy if you install the wrong one(s). 

It would be so much easier if you could just wipe the whole environment and start again. And that's the whole point with miniconda and venv.

When I'm on Windows I use miniconda, and when I'm in Linux (I tend to use Ubuntu) I use venv.

I'll go over miniconda in this article, but only at the most basic level, simply installing and setting up/deteling a new environment. 

There is way much more functionality I've never gotten into personally, so I can't write on that yet, but even just knowing how to create and delete environments will make your python/comfyui/personal projects so much easier to manage. 

They can even all have their own environment.

# Miniconda

## 1. Install Miniconda
Use this link to download miniconda: [https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe]{https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe}
Run through the standard install process.

## 2. Open up Terminal or Powershell7

Note your modified terminal in Powershell:
![Base environment](/img/base.png "Base environment")

'(base)' means this is your main systems environment. We don't want to use this one. 

## 3. Now we need to make a new environment for your project

Let's make a new environment for our comfyui setup.
```ps
conda create -n comfy python=3.11
```
You can specify the python version you want right in the create command as I did above, or you don't need to install python at all. Depends on what you're doing.

## 4. We have a new environment we can hop into now

Now, activate the miniconda environment you just created:
```ps
conda activate comfy
```

You'll notice your prompt has changed to reflect the environment you're in:
![Comfy environment](/img/comfy.png "Comfy environment")

## 5. Go ahead and install what you need in this environment

This is a perfectly clean environment to start, it only has Python 3.11.

Generally with projects you can now clone them from githup pand pip install -r requirmements.txt to install all the packages listed in the requirements.txt into the environment.

The important part to realize is that any packages you install are contained in this environment.

If you ever screw up or want to start over just delete the environment and start again. Speaking of deleting..

## 6. Deactivating and deleting environments

To deactivate, simply:
```ps
conda deactivate
```

To delete your environment completely:
```ps
conda remove --name comfy --all
```

So that's enough to get you started. There are more resources if you so desire. 
Here's Anaconda's cheatsheet if you like as well:
[https://docs.conda.io/projects/conda/en/4.6.0/_downloads/52a95608c49671267e40c689e0bc00ca/conda-cheatsheet.pdf]{https://docs.conda.io/projects/conda/en/4.6.0/_downloads/52a95608c49671267e40c689e0bc00ca/conda-cheatsheet.pdf}