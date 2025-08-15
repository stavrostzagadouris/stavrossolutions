---
title: SSH Keys for Passwordless Login - Windows Linux Mac
date: '2025-08-14'
---

I haven't had much of a use case within my own home lab for ssh keys, but recently I had to setup an easy way for others to use them.

As a reference, this is how it's done. It's quite simple.

The idea is that with a key, you can stop worrying about anyone bruteforcing your password because that's not even an avenue in to your server. An attacker would need your private key and your passphrase to that key.

You keep your private key on your 'client' machine, and then your 'public' key goes on the server. Then you can ssh to the server without using your account password. You can even configure your server to not even accept password attempts (ideal) and use keys only.

## 1. Generating your SSH keys

### On Windows (using Powershell)

Open up Powershell and run this command:

```bash
ssh-keygen -t rsa -b 4096
```

It will ask you where to save the key. The default location is good (`C:\Users\yourUsername\.ssh\id_rsa`). It will also ask for a passphrase, which is an extra layer of security. You can leave it blank if you want but ideally set this so that even a stolen private key wouldn't provide access to your server.

### On Linux and macOS

Open a terminal and run:

```bash
ssh-keygen -t rsa -b 4096
```

Accept the default location (`/home/your_username/.ssh/id_rsa` on Linux, or `/Users/your_username/.ssh/id_rsa` on macOS) and set a passphrase.

## 2. Copying your public key to the server

Now you need to get your public key onto the server you want to SSH into.

### The easy way (if you have `ssh-copy-id`)

If your local machine has the `ssh-copy-id` command (common on Linux and macOS), you can use this one-liner:

```bash
ssh-copy-id username@yourServerIP
```

It will prompt you for your password one last time, and then it will copy the key for you.

### The manual way

If you don't have `ssh-copy-id` (like on Windows), you'll need to do it manually.

First, display your public key on your local machine.

On Windows (Powershell):
```bash
cat C:\Users\yourUsername\.ssh\id_rsa.pub
```

On Linux and macOS:
```bash
cat ~/.ssh/id_rsa.pub
```

Copy the entire output of that command. It should start with `ssh-rsa` and end with your email address or hostname.

Now, SSH into your server with your password, like you normally would:

```bash
ssh username@yourServerIP
```

Once you're in, you need to add the public key to a file called `~/.ssh/authorized_keys`. If the `.ssh` directory or the `authorized_keys` file don't exist, you'll need to create them. The permissions must be set correctly or it will refuse to work, so don't skip the chmod commands

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Now, open the `authorized_keys` file with your favorite editor 'nano' is the easiest, or vi if you're a bad enough dude:

```bash
nano ~/.ssh/authorized_keys
```

Paste your public key into this file, save it, and exit. (ctrl-o, ctrl-x in nano)

## 3. Log in with your key

```bash
ssh username@your_server_ip
```

Note how now it will either let you right in (if you didn't set a passphrase) or ask you for your passphrase if you did.

## 4. Disable password login

Now you can configure your sshd service to not even allow password logins at all:

**Important:** Before you do this, make sure you can log in with your SSH key from a separate terminal session. If you disable password login and your key doesn't work, you will be locked out! This is not a worry of course if you have physical access to the server.

### 1.  SSH into your server (using your key, preferably).

### 2.  Open the SSH config file:

```bash
sudo nano /etc/ssh/sshd_config
```

### 3.  Find the following lines and make sure they are set as shown. You might need to uncomment them (remove the `#` at the beginning of the line).

```bash
PubkeyAuthentication yes
PasswordAuthentication no
ChallengeResponseAuthentication no
```

Save the file and exit the editor (ctrl+o, ctrl-x in nano)

### 4.  Restart the SSH service to apply the changes.

```bash
sudo systemctl restart sshd
```

Now, your server will only accept SSH connections that use a key. Anyone trying to connect with just a password will be denied.

This doesn't affect local login to the actual box. You'll still be able to use your local username/password combination to log into it when you're standing right infront of it.s