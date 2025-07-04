---
title: Super simple screen usage - Linux
date: '2025-06-27'
---

Sometimes when ssh'ing into a linux box, you do something that you'd like to continue doing later BUT you don't want to risk a disconnect of the ssh and lose insight into what you were doing, or lose the process altogether.

In these cases you can use 'screen' to create a session you can reconnect to at any time.

So the idea is you:
1. ssh in
2. setup a screen session (see below)
3. now you can close this terminal window and reconnect later from a completely different device if you wish and reconnect to that exact 'screen'
4. you can also have scripts setup to run at boot in their own screens so that you can hop into them to see what they're doing

## 1. Install screen

Most Linux distros have it, but if not:

```bash
sudo apt install screen
# or for Fedora/RHEL
sudo dnf install screen
```

## 2. Start a new screen session

Simply:

```bash
screen
```

Now, anything you run in this terminal will keep going even if you disconnect.

## 3. Detach from a session

If you want to use this same terminal for something else now without affecting the first thing you were doing, you can disconnect from the screen and do something else.

Press `Ctrl+a` then `d` 
It's kind of wierd, but it works if you hold control while pressing A. Then release control and A, then just press D. It's like it's waiting for that command to come through.

You'll see a message like `[detached from ...]`.

## 4. List active sessions

If you come back a day later and want to reconnect. You can list all active session with:

```bash
screen -ls
```

This will show you a list, something like:

```
There are screens on:
	12345.pts-0.myhost	(Detached)
	54321.pts-1.myhost	(Detached)
```

The numbers (e.g., `12345`) are the session IDs and are what's needed to reconnect in the next step

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

That's it! Super helpful and easy.