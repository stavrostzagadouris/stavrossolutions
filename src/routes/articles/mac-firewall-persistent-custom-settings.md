---
title: Mac Firewall - Persistent Custom Settings
date: '2026-05-07'
---

macOS uses **PF (Packet Filter)** as its default firewall system. While the "Stealth Mode" in System Settings is fine for basic users, power users often need custom rules for port forwarding, specific IP blocking, or network lab environments.

My usecase was, I wanted to lock a Mac down to only be reachable from my Tailscale network.

This guide covers how to create rules, enable the firewall, and ensure they survive a reboot.

---

## 1. Create Your Rule File

PF rules live in `.conf` files. You *can* edit the system's default `/etc/pf.conf`, but it's safer to create your own anchor file to avoid being overwritten by macOS updates.

Create a directory for your custom rules:

```bash
sudo mkdir -p /etc/pf.anchors
sudo nano /etc/pf.anchors/com.user.custom
```

### Basic Rule Examples

```text
# Block all incoming traffic from a specific IP
block in from 192.168.1.50 to any

# Allow traffic on a specific port (e.g., 8080)
pass in proto tcp from any to any port 8080

# Block everything by default, allow specific traffic (Advanced)
# block all
# pass out all
```

### BONUS my Tailscale settings to allow IN only from tailnet

```bash
# Macros
int_if = "utun4"
phys_if = "en0"

# Options
set skip on lo0

# 1. Default Policy: Block everything coming IN, but allow everything OUT
block in all
pass out all

# 2. The VIP Lane: Allow all traffic coming IN from Tailscale
pass in on $int_if all

# 3. Specific LAN exceptions (Optional)
# If you use a physical keyboard/monitor, you don't need this.
# But if you want to SSH from a local computer NOT on Tailscale,
# uncomment the line below:
# pass in on $phys_if proto tcp from any to any port 22

# 4. Tailscale Handshake (Essential)
# Allow Tailscale peers to find you via the physical wire
pass in on $phys_if proto udp from any to any port 41641
```
---

## 2. Test and Enable the Firewall

Always validate your syntax before committing. A single typo in a firewall config can lock you out of your own machine.

### Syntax Check

```bash
sudo pfctl -vnf /etc/pf.anchors/com.user.custom
```

If there are no errors, you'll see the rules printed back out.

### Manual Enable

To turn on the firewall and load your rules immediately:

```bash
sudo pfctl -e -f /etc/pf.anchors/com.user.custom
```

- `-e`: Enable PF.
- `-f`: Load rules from the specified file.

---

## 3. Making It Persistent (Auto-Start)

By default, PF resets on reboot. To make it stick, we use a `LaunchDaemon`.

### Create the LaunchDaemon Plist

```bash
sudo nano /Library/LaunchDaemons/com.user.pfctl.plist
```

### Paste This Configuration

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.user.pfctl</string>
    <key>ProgramArguments</key>
    <array>
        <string>/sbin/pfctl</string>
        <string>-e</string>
        <string>-f</string>
        <string>/etc/pf.anchors/com.user.custom</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>StandardErrorPath</key>
    <string>/var/log/pfctl.err.log</string>
</dict>
</plist>
```

### Set Permissions and Load

```bash
sudo chown root:wheel /Library/LaunchDaemons/com.user.pfctl.plist
sudo chmod 644 /Library/LaunchDaemons/com.user.pfctl.plist
sudo launchctl load /Library/LaunchDaemons/com.user.pfctl.plist
```

---

## 4. Confirming the Status

After a reboot (or loading the daemon), verify that PF is actually filtering traffic.

### Check if PF is Running

```bash
sudo pfctl -s info
```

Look for `Status: Enabled`.

### View Active Rules

```bash
sudo pfctl -s rules
```

This lists every rule currently enforced. If you see your custom rules here, you're done.

### Check for Errors

```bash
cat /var/log/pfctl.err.log
```

---

**Note:** To disable your custom setup at any time:

```bash
sudo launchctl unload /Library/LaunchDaemons/com.user.pfctl.plist
```

Once again, a how to for myself that I hope others find useful.
