---
title: Automounting NTFS drive with RW in Ubuntu
date: '2024-08-28'
---

This may be niche, but I had to do it today.

I have a NTFS drive filled with files that I wanted mounted in Ubuntu at boot, full RW. I'd prefer a native format, but this is the largest drive I own so I  have no where to temporarily store it..

Here's how I did it so I can refer back if I ever have to do it again:

1. Find the block ID of your NTFS drive, then copy it:
```bash
sudo blkid
```

2. Next, modify fstab:
```bash
sudo nano /etc/fstab
```

3. Add a new line using your block ID from before:
```bash
UUID=your-uuid /mnt/ntfs ntfs defaults 0 0
```
ctrl-o to write changes and leave.

4. Next, make the mount point folder you just referred to:
```bash
sudo mkdir -p /mnt/ntfs
```

5. Then mount the drive:
```bash
sudo mount -a
```

With that line in your fstab, it will remount at reboot.