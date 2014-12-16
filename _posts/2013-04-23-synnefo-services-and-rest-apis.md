---
layout: post
title: Synnefo Services and REST APIs
date: '2013-04-23T07:52:00.000-07:00'
author: Constantinos Venetsanopoulos
tags: 
modified_time: '2013-04-23T08:33:03.408-07:00'
thumbnail: http://3.bp.blogspot.com/-PzyuoUx9jPI/UXafl4-iE2I/AAAAAAAAACQ/QSrMYEnp98Q/s72-c/synnefo_api.png
blogger_id: tag:blogger.com,1999:blog-8518489485419439663.post-5252252579163716673
blogger_orig_url: http://synnefo-software.blogspot.com/2013/04/synnefo-services-and-rest-apis.html
---


Today, we'll see an overview of the Synnefo Services and the RESTful APIs that enable Synnefo to talk to the outside world and vice versa.

Synnefo has three (3) basic components that provide all its Services. These components are:<!--break-->

*   Cyclades: Compute, Network, Image, Block Storage Service
*   Pithos: File/Object Storage Service
*   Astakos: Identity, Quotas Service

Synnefo exposes the OpenStack APIs for most of its operations. Also, extensions have been written for advanced operations wherever needed, and minor changes for things that were missing or change frequently. Specifically:

![Synnefo API]({{ "/assets/synnefo_api.png" | prepend: site.baseurl }})

The following diagram shows the layered approach of Synnefo and the various APIs for each Service. The corresponding Synnefo component that implements each Service also appears in the diagram:

![Synnefo layers]({{ "/assets/synnefo_layers_all.png" | prepend: site.baseurl }})

As shown above, the Synnefo Web UI is a standalone Javascript client that speaks the Synnefo APIs. There is also an intuitive command line client called [kamaki](http://www.synnefo.org/docs/kamaki/latest/index.html), that speaks the APIs and can be used to access Synnefo. Furthermore, one can use the kamaki library for programmatic access.

To learn more about the APIs, please take a look at the detailed [Developer's Guide](http://www.synnefo.org/docs/synnefo/latest/dev-guide.html). If you want to learn more about the Synnefo architecture, please take a look at the [official documentation](http://www.synnefo.org/docs).