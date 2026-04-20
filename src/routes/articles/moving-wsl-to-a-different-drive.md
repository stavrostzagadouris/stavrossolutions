---
title: Moving WSL to a different drive
date: '2026-04-20'
---

My main NVMe was filling up, so I moved my WSL install off to my D drive which had plenty of space. Here's how I did it without losing a thing.

## Prerequisites

Run PowerShell as Administrator. Make sure your target drive has enough room for the `.tar` backup — you'll need that temporarily.

## Step 1: Find your distro name

```powershell
wsl --list --verbose
```

Grab the name from the `NAME` column (e.g. `Ubuntu`, `Ubuntu-22.04`). You'll use it for the rest of this.

## Step 2: Shut it down

```powershell
wsl --shutdown
```

No WSL processes running in the background. That's important.

## Step 3: Export

```powershell
wsl --export Ubuntu D:\wsl_backup.tar
```

This packages the entire Linux filesystem into a single tar file. Takes a few minutes depending on how big your install is.

## Step 4: Unregister the old one

Wait for Step 3 to finish. Once that `.tar` is sitting safely on your D drive, unregister the original install. This is the part that reclaims your NVMe space:

```powershell
wsl --unregister Ubuntu
```

## Step 5: Import to the new drive

Create a folder for it and import the backup:

```powershell
wsl --import Ubuntu D:\WSL\Ubuntu D:\wsl_backup.tar
```

WSL will extract and create a new `.vhdx` right there.

## Step 6: Set your default user

New imports log in as `root` by default. Fix that by editing the WSL config:

```powershell
wsl -d Ubuntu -u root
```

Once you're at the Linux prompt:

```bash
echo -e "[user]\ndefault=stavros" >> /etc/wsl.conf
```

Exit back to PowerShell with `exit`.

## Step 7: Final restart and cleanup

```powershell
wsl --shutdown
```

Open WSL normally — it should log in as your user now. Everything should be intact. Once you're sure, delete the backup tar:

```powershell
Remove-Item D:\wsl_backup.tar
```

There! Done.
