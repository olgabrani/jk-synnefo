---
layout: post
title: Synnefo Live CD Released
date: '2013-08-23T09:38:00.000-07:00'
author: Alex Pyrgiotis
tags: 
modified_time: '2013-08-26T07:05:45.646-07:00'
blogger_id: tag:blogger.com,1999:blog-8518489485419439663.post-1847046110273460865
blogger_orig_url: http://synnefo-software.blogspot.com/2013/08/synnefo-live-cd-released.html
---


Hello everybody,

We have some exciting news for all of you that want to try out our latest Synnefo software: οur team has managed to bundle it into something as small as a USB stick. That's right, there is now a Debian-based, Live CD edition of Synnefo which can be deployed from your server or even your home computer!<!--break-->

The key features of this Live CD are:

1.   It just works!
2.   The ability to create and run Virtual Machines depending either on Debian Wheezy (included), one of our  [pre-configured images](https://code.grnet.gr/projects/snf-image/wiki#Sample-Images) or [one of your own](http://www.synnefo.org/docs/snf-image-creator/latest/).
3.   Create private virtual networks and connect your Virtual Machines.
4.   Test [Archipelago](/2013/02/11/we-are-happy-to-announce-that-synnefo_11/), our new ultra-fast volume layer.
5.   Use Pithos, our storage service based on the OpenStack Object Storage API.

Moreover, we have stayed true to the plug-and-play nature of Live CDs, meaning that you will be able to experience Synnefo straight from the Live CD, without installing it or doing any configurations to your machine.

So, grab a copy (1,3GB, .iso image) from the [Synnefo page](http://www.synnefo.org/) (or directly from [here](https://pithos.okeanos.grnet.gr/public/IDFck5pGeDGIYtsvngTvd4)), boot it and experience all the latest features of Synnefo!

For those unfamiliar with the Live CD process, you can follow the instructions below:

1.   Burn the image either to a DVD or USB medium. The image file is ready to be burnt in a DVD but, for those that want to write it in a USB stick, there are several ways, depending on your Operating System:
    For Linux, you can use dd:  
    `dd if=/path/to/Synnefo-LiveCD.iso of=/dev/sd*  bs=4M sync`  
    where /path/to/ is probably your Downloads folder and /dev/sd* your **unmounted** USB device.  
    For Windows, you can use one of the programs in [this list](https://wiki.archlinux.org/index.php/USB_Installation_Media#On_Windows).

2.   Plug your Live DVD or USB and change the boot sequence in BIOS/UEFI to primarily boot from DVD or USB.  
3.   Once the Live DVD or USB has booted, choose the "Default" option and in less than a minute, you will be greeted with a Firefox session that will give you a brief description of your live environment. From there on, you can freely experiment with Synnefo.

Caveats:

1.   Only 64-bit CPUs that have virtual extensions are supported.
2.   Since this is a Live CD, the VMs' disk storage will also reside in RAM. This typically means that you can create only a small amount of VMs. VMs created with Archipelago however, are far less constricted by this.  
3.   The Debian image is Squeeze, so the latest Nvidia/AMD GPUs may not be supported.

Finally, note that the Live CD is still work in progress. If you find any bugs or want to leave some feedback, you can contact us at synnefo{at}googlegroups{dot}com.

Enjoy,  
the Synnefo team