---
layout: post
title: Synnefo team @ Xen Hackathon 2013
date: '2013-05-13T04:22:00.002-07:00'
author: Constantinos Venetsanopoulos
tags: 
modified_time: '2013-05-13T04:25:57.524-07:00'
blogger_id: tag:blogger.com,1999:blog-8518489485419439663.post-5659454874971564290
blogger_orig_url: http://synnefo-software.blogspot.com/2013/05/synnefo-team-xen-hackathon-2013.html
---


This year's [Xen Hackathon](http://blog.xen.org/index.php/2013/03/07/google-hosted-xen-hackathon-may-16-17-dublin/) will be kindly hosted by Google and will take place at Google's Dublin offices.<!--break-->

Six months ago, we thought that since Synnefo uses [Ganeti](https://code.google.com/p/ganeti/) at the backend and Ganeti already supported Xen as the underlying hypervisor, why not try to port Synnefo to use Xen too? What would that mean and what would that take to happen?

It would mean that anybody running Ganeti with Xen, would be able to just install Synnefo on top of their current deployment, and have their own public or private cloud. Nice.

And how could we do that? Since Synnefo keeps clear separation between the cluster management layer and the cloud layer, the changes should have been minimal and only few components should get affected. Indeed, after some design discussions it came out that only two Synnefo components should be ported:

*   snf-image: Ganeti OS Definition that handles image deployment and customization
*   snf-network: component that handles the host's networking after a NIC is up

snf-image has already been ported [since v0.8](https://github.com/grnet/snf-image/blob/develop/ChangeLog#L98) and now supports Xen. snf-network is even easier to port, but to do so we need some additional Ganeti support.

To implement such support in Ganeti, we introduced [the corresponding topic](http://wiki.xen.org/wiki/Hackathon/March2013#Port_Synnefo_to_Xen) at this year's Xen Hackathon. Dimitris and Stratos from the Synnefo team will be [attending](http://wiki.xen.org/wiki/Hackathon/March2013#Confirmed_Attendees) the hachathon to handle the job :)

So, if anybody of you is willing to help, or just want to meet the guys from the team, or learn more about Synnefo, feel free to fire up a conversation at the event. They will be more than happy to chat with you. You can also reach them at:

Dimitris: [dimara@grnet.gr](mailto:dimara@grnet.gr)  
Stratos: [psomas@grnet.gr](mailto:psomas@grnet.gr)