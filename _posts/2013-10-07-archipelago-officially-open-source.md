---
layout: post
title: 'Archipelago: officially open source'
date: '2013-10-07T03:10:00.000-07:00'
author: Constantinos Venetsanopoulos
tags: 
modified_time: '2014-05-29T02:26:34.517-07:00'
blogger_id: tag:blogger.com,1999:blog-8518489485419439663.post-8736793615908354375
blogger_orig_url: http://synnefo-software.blogspot.com/2013/10/archipelago-officially-open-source.html
---

Hello everybody,

We are pleased to announce that today we are releasing our custom storage layer, Archipelago, as open source software under a [2-clause BSD license](http://opensource.org/licenses/BSD-2-Clause). Archipelago has been running in production for over half a year without problems, so after a substantial cleanup we decided to open it up to the public.<!--break-->

Archipelago is a new storage layer that decouples Volume and File operations/logic from the actual underlying storage technology, used to store data. It provides a unified way to provision, handle and present Volumes and Files independently of the storage backend. It also implements thin clones, snapshots, and deduplication, and has pluggable drivers for different backend storage technologies. It was primarily designed to solve problems that arise on large scale cloud environments. Archipelago is written in C.

Please check out the official documentation:  
[http://www.synnefo.org/docs/archipelago/latest](http://www.synnefo.org/docs/archipelago/latest)


You can try it out for yourself, following the instructions found here:  
[http://www.synnefo.org/docs/archipelago/latest/archipelago_deploy.html](http://www.synnefo.org/docs/archipelago/latest/archipelago_deploy.html)

You can also find the code here:  
[https://code.grnet.gr/git/archipelago](https://code.grnet.gr/git/archipelago)


Debian packages can be found on our apt repository under unstable. Add the following to your sources to use them:


`deb http://apt.dev.grnet.gr unstable/`  
`deb-src http://apt.dev.grnet.gr unstable/`  

Finally, on the apt repository, we provide an Archipelago ExtStorage provider, for those that want to use Archipelago with [Ganeti](http://code.google.com/p/ganeti/).

We hope Archipelago is going to prove useful to others as it did to us.

As always, for comments, questions, or bug reports feel free to contact us at:  
synnefo@googlegroups.com

Enjoy,

the Synnefo team