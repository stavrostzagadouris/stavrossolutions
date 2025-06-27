---
title: Working with Services - Ubuntu
date: '2025-01-29'
---

I always forget how to create custom services and even how to start/restart etc.. since I do it so rarely.

Instead of scouring my command history or re-googling I'll put my reminders below.

## Common Commands

Did you make a service but you forgot what you called it? List all your services:

```bash
sudo systemctl list-units --type=service --all
```

Check status of your service:
```bash
sudo systemctl status yourapp.service
```

Restart your service:
```bash
sudo systemctl restart yourapp.service
```

Check logs of your service:
```bash
journalctl -u yourapp.service
```

## Creating your own service

Say you've got a script that you want to run as a service instead of via cron or manually, you can set it up as a service instead and control it as such. So for example, if it ever dies it will come back on it's own or a multitude of other 'service-y' things I'm not aware of. (I just wanted the resilience/self-healing aspect of a service, personally)

1. Create the Service file (nano is the example here but use vi or whatever you like):
```bash
sudo nano /etc/systemd/system/wheatley-webapp.service
```
2. Add the following configuration to the new .service file. Here's an example:
```bash
[Unit]
Description=Start Wheatley Web App
After=network.target

[Service]
Type=simple
WorkingDirectory=/home/stavros/github/Multi-AI-Web-Stream
ExecStart=/home/stavros/wheatles/bin/python webapp.py
StandardOutput=append:/tmp/wheatleyWeb.log
StandardError=append:/tmp/wheatleyWeb.log
Restart=always
User=stavros

[Install]
WantedBy=multi-user.target
```
Exec start being what you want to execute.
Restart lets you control if it will restart aftering dying or stopping

3. Now with our service setup, we need to reload the systemd so that it picks up the changes:
```bash
sudo systemctl daemon-reload
```
4. You can now start your service:
```bash
sudo systemctl start wheatley-webapp.service
```

5. if you want it starting on boot:
```bash
sudo systemctl enable wheatley-webapp.service
```

You can check service status or logs via the commands at the beginning of this article.

Now you have a script that will run at boot and restart if it dies. 

Congrats 🍻



