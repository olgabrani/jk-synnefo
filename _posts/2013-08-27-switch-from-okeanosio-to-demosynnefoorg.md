---
layout: post
title: Switch from okeanos.io to demo.synnefo.org
date: '2013-08-27T12:26:00.000-07:00'
author: Alex Pyrgiotis
tags: [news]
modified_time: '2013-09-10T06:14:25.634-07:00'
blogger_id: tag:blogger.com,1999:blog-8518489485419439663.post-4266443073331643355
blogger_orig_url: http://synnefo-software.blogspot.com/2013/08/switch-from-okeanosio-to-demosynnefoorg.html
---


Hello Synnefo users,

You may have noticed that lately, we have been trying to separate the Synnefo software from the IaaS service it powers, [~okeanos](https://okeanos.grnet.gr/). The latest step towards this direction is the rename of our demo deployment of Synnefo. The demo has been called okeanos.io for a while now and has now changed to demo.synnefo.org. <!--break-->Also, to ease the transition, the okeanos.io URLs now point to the synnefo.org page.

What does this change mean to you? Well, mainly two things have changed:

1.   The NAT gateway of your VMs has now changed from gate.okeanos.io to gate.demo.synnefo.org. This change affects the hostname you SSH to.  
2.   The authorization URL that grants API access has changed to `https://accounts.demo.synnefo.org/identity/v2.0/.` 

This is especially important for all the users that have been using kamaki. These users will need to do the following:

1.   Get the correct authentication URL and token from your [API access](https://accounts.demo.synnefo.org/ui/api_access) page.  
2.   Create (or edit) an entry to your .kamakirc like the following:


`[cloud "demo"]`    
`url = https://accounts.demo.synnefo.org/identity/v2.0/`    
`token = myT0k3n==`

3) Check if you can authenticate with your credentials:

`kamaki user authenticate --cloud demo`  

For any problems or questions, you can consult our [community](http://www.synnefo.org/community) page.