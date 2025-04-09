---
title: Super simple venv usage - Linux
date: '2025-04-09'
---

Just like conda, venv is a way to keep your environments separate from each other.

It comes with Python, so first we need that.

## 1. Install Python

In a terminal:

```bash
sudo apt install python3.11
```

## 2. Create a new environment

The environment will be stored in a file structure in the location you create it, so first change directory to where you want the environment to be, then set it up like so:

```bash
python -m venv comfy
```

The 'comfy' can be whatever you want as that's the name of the environment.

## 3. Activate the environment

Make sure you're in the directory with your environment then simply;

```bash
source comfy/bin/activate
```
You'll now see the name of your environment in brackets, so you know it's working:

```bash
(comfy) username@hostname:~$
```

Now any packages your install will be within this environment only.

## 4. Deactivating your environment

Simply type:

```bash
deactivate
```

## 5. Deleting environment completely

Like I said at the beginning, the venv is just stored in a dicrectory, so deleting that direction deletes the environment and all the packages as well.

```bash
rm -rf comfy
```


And that's it! Quick environments you can build or teardown at will.
Before I knew about these I manged the main environment on my computer. Now I can just mangle venvs until I get it right!



