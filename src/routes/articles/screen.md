---
title: Super simple screen usage - Linux
date: '2025-06-27'
---

Ever had a long-running command or process on a Linux server, and you need to close your terminal without killing it? That's where `screen` comes in handy.

It lets you create virtual terminal sessions that can be detached and reattached later. Super useful!

## 1. Install screen

Most Linux distros have it, but if not:

```bash
sudo apt install screen
# or for Fedora/RHEL
sudo dnf install screen
```

## 2. Start a new screen session

Just type `screen` and hit Enter. You'll get a fresh terminal.

```bash
screen
```

Now, anything you run in this terminal will keep going even if you disconnect.

## 3. Detach from a session

This is the magic part. To leave your session running in the background and close your current terminal window (or just go back to your main shell):

Press `Ctrl+a` then `d` (that's Control-A, then release A and press D).

You'll see a message like `[detached from ...]`.

## 4. List active sessions

Forgot what sessions you have running? No problem:

```bash
screen -ls
```

This will show you a list, something like:

```
There are screens on:
	12345.pts-0.myhost	(Detached)
	54321.pts-1.myhost	(Detached)
2 Sockets in /run/screen/S-username.
```

The numbers (e.g., `12345`) are the session IDs.

## 5. Reattach to a session

To jump back into a detached session:

If you only have one session:

```bash
screen -r
```

If you have multiple, use the session ID:

```bash
screen -r 12345
```

## 6. Kill a session

When you're done with a session and want to close it completely, just type `exit` inside the screen session:

```bash
exit
```

Or, if you're outside and want to kill a specific detached session:

```bash
screen -X -S 12345 quit
```

That's it! Simple, right? No more broken processes when your SSH connection drops.