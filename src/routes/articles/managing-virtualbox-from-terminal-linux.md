---
title: Simple VirtualBox management from Terminal — Linux
date: '2026-08-11'
---

---

I needed to start a VM from terminal today and I thought I better write down how I did that for myself for later. 

## Quick Reference Cheat Sheet

There's a bunch more commands in the help or elsewhere. This is meant to be dead-simple.

| Task | Command |
|---|---|
| List all VMs | `VBoxManage list vms` |
| List running VMs | `VBoxManage list runningvms` |
| Show VM details | `VBoxManage showvminfo "VM"` |
| Modify RAM | `VBoxManage modifyvm "VM" --memory 4096` |
| Modify CPUs | `VBoxManage modifyvm "VM" --cpus 4` |
| Start VM (GUI) | `VBoxManage startvm "VM"` |
| Start VM (headless) | `VBoxManage startvm "VM" --type headless` |
| Graceful shutdown | `VBoxManage controlvm "VM" acpipowerbutton` |
| Force stop | `VBoxManage controlvm "VM" poweroff` |
| Pause | `VBoxManage controlvm "VM" pause` |
| Resume | `VBoxManage controlvm "VM" resume` |
| Save state | `VBoxManage controlvm "VM" savestate` |
| Reset | `VBoxManage controlvm "VM" reset` |
| Delete VM | `VBoxManage unregistervm "VM" --delete` |

---

I'd prefer to do more complicated things in the GUI. But even with just the above this makes it easy to at least get them going when you only have ssh access for whatever reason.
