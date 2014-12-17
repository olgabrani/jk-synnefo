---
layout: post
title: Synnefo comes to CentOS!
date: '2014-05-22T02:52:00.000-07:00'
author: Constantinos Venetsanopoulos
tags: [news]
modified_time: '2014-05-22T02:52:08.039-07:00'
blogger_id: tag:blogger.com,1999:blog-8518489485419439663.post-6662980026449980029
blogger_orig_url: http://synnefo-software.blogspot.com/2014/05/synnefo-comes-to-centos.html
---

Hello everybody,   

As you may already know, Synnefo was initially developed for and deployed on Debian (in the same way [Ganeti](http://code.google.com/p/ganeti/) is).
However, since more and more users have been asking to try it out on their own RPM-based distros, we decided to take the time and help them out.
So, today, we are happy to announce that starting Synnefo v0.15.1, alongside Debian packages, we will also be officially providing RPM packages for the whole Synnefo stack.<!--break--> This will be done via our new yum repository:
[http://yum.dev.grnet.gr](http://yum.dev.grnet.gr/)

The first officially supported RPM-based distro, on which we have extensively tested the packages, is CentOS 6.5! For CentOS 6.5, we also provide a new, step by step Installation Guide, describing how to setup the whole Synnefo stack on two nodes. You can find the [CentOS guide](https://www.synnefo.org/docs/synnefo/latest/install-guide-centos.html) in the [official Synnefo documentation](https://www.synnefo.org/docs/synnefo/latest/index.html#synnefo-guides).

Since all the hard work of resolving dependencies, creating packages that existed for Debian but not for Red Hat, and finding out all the little details has been done once for CentOS, we believe that it is now pretty easy for you to have Synnefo running on other RPM-based distros, such as RHEL, Fedora, Scientific Linux, etc., in the near future, too.

As we mention in the CentOS guide, to be able to download and install all Synnefo components you just need to add the GRNET repo on your installation. You can do this by running:

`# yum localinstall https://dev.grnet.gr/files/grnet-repo.rpm`  
`# yum update`

So, go ahead and try everything out!
As always, any kind of feedback or bug report is highly appreciated.

Enjoy,  
on behalf of the Synnefo team,  
Constantinos 