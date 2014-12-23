---
layout: post
title: Synnefo Architecture
date: '2014-02-26T06:55:00.000-08:00'
author: Constantinos Venetsanopoulos
tags: 
modified_time: '2014-02-26T06:58:44.427-08:00'
thumbnail: http://3.bp.blogspot.com/-G2OzTPts5iw/Uw3uxjCPwnI/AAAAAAAAADw/TkXUxRvWgOE/s72-c/synnefo_architecture1.png
blogger_id: tag:blogger.com,1999:blog-8518489485419439663.post-353967149076468102
blogger_orig_url: http://synnefo-software.blogspot.com/2014/02/synnefo-architecture.html
---


Hello everybody,

On a [previous post](/2013/04/23/synnefo-services-and-rest-apis/), almost a year ago, we described the services and REST APIs of Synnefo.  <!--break-->
Today, we have 2 new diagrams that show Synnefo's layered approach and overall architecture in more detail. First, we extended the diagram from the previous post that presented the zoom-out view, to include all layers from the hypervisor up to the clients (Web UI or command line). We also updated the API layer to reflect the complete OpenStack compatibility that has been included in the latest version. We have now fully integrated Neutron, Cinder and Keystone  along with the previously implemented Nova, Glance and Swift:

{% include lightbox-img.html img_name="synnefo_architecture1.png" img_alt="Synnefo Architecture" %}

The second diagram is created from scratch and zooms in to unveil the whole internal Synnefo architecture, showing all Synnefo components and the interconnections between them:

{% include lightbox-img.html img_name="synnefo_architecture2.png" img_alt="Synnefo Architecture" %}

Note that in the left part (Compute/Network) the cloud layer (Synnefo) interacts with the cluster layer (Ganeti clusters) only via HTTP in the effect path and only via AMQP in the update path. The cluster layer does not access any DB, allowing us to scale linearly by adding new nodes on a Ganeti cluster or new Ganeti clusters altogether, even in geographically distinct locations. 

Also note, that with Archipelago one can operate over multiple storage technologies transparently, without the need to change anything on the upper layers, may these be Ganeti or Pithos.


Just to give you a preview on what's coming next, along with many new features, starting v0.16, Pithos will become a thin layer on top of Archipelago or in other words Archipelago will become the backend for Pithos. This will allow for 2 things:

*   Complete unification of cloud storage as seen by the upper layers
*   Complete abstraction of the actual data store underneath

So, hope you find the above interesting and hope the diagrams help everybody to understand the Synnefo architecture a little better.  
Thanks,  
Constantinos
