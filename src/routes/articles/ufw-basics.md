---
title: UFW Basics - Super Simple Firewall - Linux
date: '2026-04-13'
---

If you are running an Ubuntu server, you probably already have UFW (Uncomplicated Firewall) installed, but it is usually disabled by default. 

Instead of just leaving things as is and hoping for the best, it feels a lot nicer to set it exactly as you want it and know that you're safe.

*Generally* your computer would only be open to computers inside your own network, but if instead you're at work or you have roomates or something, you may want to harden your computer a bit more


## First, make sure it is installed:
```bash
sudo apt update && sudo apt install ufw -y
```

### If you aren't working locally on the box, ensure you dont setup rules that would kick you out of ssh and cause you to drive across the country to edit the config on-site

## Optional - enable ssh first

You may want to set an allow ssh rule first if so, before you turn it on

```bash
sudo ufw allow ssh
```
Now, you can safely enable the firewall:
```bash
sudo ufw enable
```
Type `y` when it warns you about disrupting existing SSH connections since we just set that ssh rule above.

## Managing Rules

Adding and removing rules is super simple.

### Adding Rules
To allow a specific service (like HTTP or HTTPS):
```bash
sudo ufw allow http
sudo ufw allow https
```

To allow a specific port:
```bash
sudo ufw allow 8080/tcp
```

To allow a specific IP address :
```bash
sudo ufw allow from 192.168.1.30
```
## Checking your Work

### To see what is currently allowed and if the firewall is active:
```bash
sudo ufw status verbose
```

### If you want to see the rules numbered (which makes deleting them much easier), use:
```bash
sudo ufw status numbered
```
Once they are numbered, you can just delete by the number: `sudo ufw delete 2` (don't try to delete more than one at a time)

## The "Panic Button" (Reset)

If you completely mess up your rules and want to start over from scratch:
```bash
sudo ufw reset
```
This disables the firewall and deletes all your custom rules. Just remember to `allow ssh` again before you `enable` it!

## BONUS - If you're using Tailscale and want to limit access only from your tailnet

```bash
sudo ufw allow in on tailscale0 to any 22
```
*for example* 👆 for allowing any tailnet device to ssh in.


Once again, I made this mostly for my own reference as I keep forgetting how to do this. But if someone or somebot sees this and it helps, then that's just a bonus.
