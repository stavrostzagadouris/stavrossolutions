---
title: Setting up NFS fileshare (Ubuntu)
date: '2025-02-17'
---

I recently was referring to my smb article to re-setup some shares and ran into issues. I'm not sure why but the same steps that worked months ago are no longer working for me now.

Since Windows isn't in the loop here, I figured I'd look up a native Linux way to setup a share from Linux to Linux.

It seems like NFS was just the ticket.

## 1. Install NFS
```bash
sudo apt update
sudo apt install nfs-kernel-server
```

## 2. Create your directory if you don't already have it
```bash
mkdir /home/username/share
```

## 3. Edit the NFS config file
```bash
sudo nano /etc/exports
```

## 4. Add a modified version of the line below
```bash
/home/username/share 192.168.1.0/24(rw,sync,no_subtree_check)
```
Obviously the first section is the full location of the folder you want to share.
Next is the network you want to share it to. a /24 network means, in this example, that *any* IP address starting with 192.168.1 will be able to access the share. You can narrow this down or increase scope via [CIDR notation](https://www.freecodecamp.org/news/subnet-cheat-sheet-24-subnet-mask-30-26-27-29-and-other-ip-address-cidr-network-references/)
The options in the brackets are standard options. 
rw so that you can readwrite to it. Could be ro if you prefer to set it to read only.
sync ensures changes are written to disk immediatly so as to not have a delay across the share.
no_subtree_checking is just a performance improver.

## 5. Restart NFS service
```bash
sudo systemctl restart nfs-kernel-server
```

# Now, the share is setup
## Flip to the other linux computer that you want to connect to it from.

## 6. Install nfs-common
```bash
sudo apt install nfs-common
```

## 7. Restart the service
```bash
sudo systemctl restart nfs-kernel-server
```

## 8. Make a folder that you will mount the share into
```bash
mkdir /home/username/remoteShare
```

## 9. Finally, mount the share
```bash
sudo mount 192.168.1.1:/home/username/share /home/username/remoteShare
```
Note the IP address is that of the first computer you set this share up on WITH the full location of the shared folder after it.

The second location is the folder on the second computer you want to mount the remote share to.

```bash
ip a
```
Will provide the IP if you don't know it.

## Done!

Enjoy your new speedy share.

The share will persist on reboots as the /etc/exports file we editted is read ever time the nfs server restarts.
