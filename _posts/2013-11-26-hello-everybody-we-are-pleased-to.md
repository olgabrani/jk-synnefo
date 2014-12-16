---
layout: post
title: Synnefo v0.14.10 Released
date: '2013-11-26T03:19:00.000-08:00'
author: Constantinos Venetsanopoulos
tags: 
modified_time: '2013-11-26T03:20:14.243-08:00'
blogger_id: tag:blogger.com,1999:blog-8518489485419439663.post-229270281575781534
blogger_orig_url: http://synnefo-software.blogspot.com/2013/11/hello-everybody-we-are-pleased-to.html
---

Hello everybody, 

we are pleased to announce that today we released Synnefo v0.14.10. <!--break-->

You can find the Debian packages on our apt repository ([apt.dev.grnet.gr](http://apt.dev.grnet.gr/wheezy/)) under wheezy. 

You can also check out the upgrade notes here: [http://www.synnefo.org/docs/synnefo/latest/upgrade/upgrade-0.14.10.html](http://www.synnefo.org/docs/synnefo/latest/upgrade/upgrade-0.14.10.html)

As you may already know from a previous email on the list: [https://groups.google.com/forum/#!topic/synnefo/rjUMyZTJmWU](https://groups.google.com/forum/#%21topic/synnefo/rjUMyZTJmWU)

Synnefo v0.14.10 is the second transitional package that will help you to smoothly upgrade to Debian Wheezy. Synnefo v0.14.0 is not compatible with Ganeti 2.6 any more, so you will also need Ganeti 2.8 to proceed. You can find the corresponding Ganeti package (snf-ganeti) on our apt repository too. The version you need is: 

2.8.2+snapshot1+b64v1+hotplug3+ippoolfix+rapifix+netxen+lockfix2-1~wheezy 

The patches: hotplug3, ippoolfix, rapifix and netxen are already merged in the official upstream and will be part of Ganeti 2.10. So, we just backported them in this package. The patches: b64v1, lockfix2 are two small patches that fix some minor issues. The patch: snapshot1 implements some new functionality regarding snapshots which is not used currently by Synnefo v0.14.0, so the codepath is actually inactive, but is there to get stress tested in our production deployment. 

So, go ahead, give them a try and please report back any problems or bugs you may find.

Enjoy,  
from behalf of the Synnefo team,  
Constantinos 