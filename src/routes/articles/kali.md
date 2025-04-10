---
title: Ephemeral Kali in Docker - Windows
date: '2025-03-07'
---

The title says Windows but the cool thing about Docker is it doesn't really matter. When complete, this docker will run in any host OS.
This tutorial uses windows for the setup but would translate pretty well to other OS's.

The end goal of this article is to have you running a Kali docker from terminal that will be fully fledged, and optionally customized how you want it, ready to spin up at a moments notice.

Then whenever you quit, it reverts to the state it was in before you started.

I'll show you how to 'save' the state too so you can get it all configured the way you like first.

## 1. Download docker desktop and run it as admin
*I'm not a Docker pro, like many of these articles, I know enough to get it going and start learning. This is to say maybe you can do this without the full desktop app but I haven't looked into it as I do like to cheat sometimes and use the gui to manage deletion of containers/images -- don't tell anyone..*

Scroll down to Download Docker Desktop:
[https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

Download and run the exe. It needs to be run as admin, so if your user account isn't, right click and run as admin to ensure it will work.

## 2. Start it up (as admin too), when the install is complete

Start Docker desktop just to the point where it's up and running.

Now that Docker is installed, open up your Terminal or powershell or whatever you prefer. 

We're going to do the rest of the setup here.

## 3. Setting up Kali 

To download the latest Kali Linux image, run the following command:

```terminal
docker pull kalilinux/kali-rolling
```

This will quickly download a tiny image of Kali that we'll use as our base.

## 4. Run the Kali image

To run the image, use the following command:

```terminal
docker run -it kalilinux/kali-rolling /bin/bash 
```

The *-it* flag means you want an interactive terminal to pop up as well. Docker will let you run images in the background. Here we're specifying that we want to hop right into it when it's done.

*kalilinux/kali-rolling* is the name of the image.

*/bin/bash* is the command to execute once powered up, which is just the terminal for Kali in this case.

## 5. Load it up with tools

This image does not include all the tools Kali normally does, instead expecting you to personalize it and pick and choose what you want to add.

In my case, I just want everything, sooooo, lets update the package manager, and then install the standard Kali suite.

```terminal
apt update
apt install kali-linux-default
```

This could take a few minutes to finish.

When it's done, it's probably a good idea to upgrade all packages too while we're at it.

```terminal
apt update && apt upgrade -y
```

Change the root user password. Not something you'd normally need but with Kali it lets you use it's tools easier

```bash
passwd root
```

The old default used to be 'toor', but use whatever you like.

## 6. Save your custom version of this Kali image

The way Docker would work by default is that if you were to type `` exit `` and leave, your image will revert back to what it was when you first started, and none of the packages would be there the next time you fire it up.

Not ideal.

So when your Kali image is populated with programs and updated, open another terminal tab, because we're now going to commit these changes to a custom image and run *that* image going forward.

## 7. Saving your custom version of this Kali image, for real this time

List your running containers as you'll need the container ID for the next steps.

```terminal
docker ps
```

Note the container ID of your running kali. Better yet, highlight and copy it by just right clicking anywhere after it's highlighted. You won't see any confirmation, but the highlighted portion is now waiting on your clipboard to be pasted again later by once again just right-clicking.

Now we're going commit your changes to a new image. In the example below, we're naming the container 'fullKali'. You choose whatever you want:

```terminal
docker commit <container id of running kali without the angle braces> fullkali
```

*This could take a while depending on the speed of the drive in your computer.*

## 8. Out with the old Kali...

When it's done you'll just be waiting back at the command prompt.

Back in your original terminal window, exit your Kali image:

```terminal
exit
```

## 9. ...and in with the new.
 
Now whenever you want to run your full kali install: 

```terminal
docker run --cpuset-cpus="0-7" --privileged --cap-add=NET_ADMIN -v /c/docker/tools:/tools -it --network host --entrypoint /sbin/init trentkali3
```

Note the --cap-add=NET_ADMIN gives the container network admin to let it run tools like nmap.
--cpuset-cpus="0-7" sets how many CPU cores it has access to
--privileged gives it the permissions needed for it's tools to run
-v stands for volumes and in this case I'm mounting a folder '/tools' in Kali to a local folder 'c:docker/tools' on the host computer
-it means interactive terminal, so it will switch straight to the running Kali after pressing enter
--network host uses the hosts IP directly to let it use DNS properly, may or may not need this yourself.
--entrypoint /sbin/init is required for some kali tools to run

**Once you're in, you need to login. Since you set the root users password earlier, login as root.**

Now you've got a fully featured (albeit gui-less) Kali at your fingertips, ready to boot up at a moments notice!

To quit out of your kali instance when you're done, since we booted it with /sbin/init, you need to shut it right down or the container will continue to run in the background after you close it.
So:
```bash
shutdown -h now
```

## 10. Keeping your Docker environment clean

I'm still new to Docker and I find I end up collecting a whole tonne of containers (created every time you run a image) and images (in our case Kali here, and the custom one we just made, but it can be specific tools or other flavors of Linux) that I no longer need.

Here are a few commands to keep the inevitable sprawl under control.

### List and Remove all stopped containers

To list all containers:
```terminal
docker ps -a
``` 

To remove all stopped containers:
```terminal
docker container prune
```

### List and Remove image files completely

You *may* want to get rid of that original Kali image we downloaded, or others in the future.
If so:

```terminal
docker rmi kalilinux/kali-rolling
```

To list other images:
```terminal
docker images
```


So there you have it. Dead simple example of getting a linux environment up and running in docker, customized and saved, and with the knowledge to keep your environment clean going forward.
