---
layout: page
title: About
permalink: /timeline/
parent: /about/
subnav:
    - title: Overview
      url: '/about/'
    - title: Timeline
      url: '/timeline/'


---
 
 
## Oct 2016
 Synnefo v0.18.1 released with many new features. Modifying user e-mails from the admin panel, Sentry, multiple eventd instances and automatic ganeti master failover detection are now supported. This release includes several improvements on project management and quota policy enforcement, performance optimizations of pithos object listing queries and various admin panel enhancements.
 

## Apr 2016
Synnefo v0.17 released with major new features: new pithos UI web application, cyclades support for detachable volumes, shared resources among members of a project, support for LDAP authentication.

## Jul 2015
Synnefo v0.16.2 released with several UI improvements and bug fixes. 

## Feb 2015 
Synnefo v0.16.1 gets released. This release is targeted towards stability including various bug fixes and improvements.

## Nov 2014
Synnefo v0.16 gets released, with a lot of new features. Support for multiple
disks (volumes) per VM is added, a brand new administrator dashboard is
introduced and a complete redesign of the Projects mechanism allows more
flexibility. Finally, Archipelago becomes a prereq for Pithos, which also
brings the long awaited Snapshot functionality, a way to create a snapshot of
any disk of a Cyclades VM and save it to Pithos.

## May 2014
Synnefo v0.15.2 gets released, being the first version to <a href="http://synnefo-software.blogspot.gr/2014/05/synnefo-comes-to-centos.html" title="">support CentOS 6.5</a>, alongside Debian Wheezy and also the first version to support Ganeti 2.10.

## Mar 2014
Synnefo v0.15 gets released with many new features, with a direction towards 
networking. Most notable are: Floating 
IPs, implementation of the <a href="http://docs.openstack.org/api/openstack-network/2.0/content/" title="">Neutron API</a>, NIC hotplugging,
creation of IPv6 only networks and the ability for VM resizing (CPU and RAM).


## Nov 2013
Synnefo v0.14.8 and v0.14.9 get released. These two versions support both 
Debian Wheezy and Debian Squeeze to help the migration from Squeeze to Wheezy.<br>
On the end of November, Synnefo v0.14.10 gets released, supporting only Debian
Wheezy, while at the same time being the first release that supports the newer 
Ganeti 2.8.

## Jun 2013
Synnefo v0.14 gets released with many new features. Since this version, Synnefo is branding neutral (all remaining ~okeanos references are removed). It also gets a branding mechanism and the <a href="http://www.synnefo.org/docs/synnefo/latest/admin-guide.html#branding" title="Synnefo documentation" target="_blank">corresponding documentation</a>, so that others can adapt it to their branding identity.

## Apr 2013 
Synnefo v0.13 gets released, after a huge cleanup and code refactoring. All separate components are merged under the single Synnefo repository. This is the first release as a unified project, containing all parts.

## Jan 2013
The software behind the ~okeanos service, Synnefo, gets an official website and goes public: <a href="http://www.synnefo.org/" title="">www.synnefo.org</a>

## Dec 2012
Software cleanup and removal of ~okeanos hardcoded references inside Synnefo.

## Apr 2012
The software behind ~okeanos resides on three separate repositories:
<ul>
    <li>Astakos: the Identity service</li>
    <li>Cyclades: the Compute/Network/Image service</li>
    <li>Pithos: the File/Object Storage service</li>
</ul>
Decide to refer to the whole software stack as Synnefo, which means 'Cloud' in Greek, and start writing the first version of the <a href="http://www.synnefo.org/docs/synnefo/latest/index.html" target="_blank" title="Visit Synnefo Documentation">Synnefo documentation</a>.

## Mar 2012
~okeanos enters the public alpha2 phase (v0.9). The new Pithos is completely integrated as part of ~okeanos and now acts as the unified store for Images and Files.

## Nov 2011
The new rewritten Pithos goes public alpha, as part of ~okeanos. It is marketed Pithos+ and the old Pithos remains as a separate service. It provides syncing and sharing capabilities for files, and also native syncing clients for Mac OS X, iPhone, iPad and Windows.

## Jul 2011
~okeanos goes public alpha (v0.5.2.1). This version includes the Identity, Compute, Network and a primitive Image service.

## May 2011
GRNET decides to rewrite Pithos from scratch in-house, make it part of the ~okeanos service and also add syncing (Dropbox-like) capabilities to it. Implementation of the new version of Pithos starts.

## Oct 2010
After evaluating all current solutions, open source and proprietary, GRNET decides to base the service on <a href="https://code.google.com/p/ganeti/" target="_blank" title="Google Ganeti Code">Google Ganeti</a> and to design and implement all missing parts in-house. Implementation of the Compute Service of ~okeanos starts.

## Jun 2010
GRNET decides to provide a complete, AWS-like cloud service (Compute/Network/Volume/Image/Storage) called <a href="https://okeanos.grnet.gr/home/" target="_blank" title="~okeanos homepage">~okeanos</a>,
open to the whole Greek academic and research community. Additionally the need arises for non-volatile/elastic VMs, but rather persistent cloud servers.

## May 2009
Pithos goes public beta.

## Jan 2007
GRNET decides to out-source the project and implementation starts.

## Nov 2006
<a href="https://www.grnet.gr/en" target="_blank" title="Greek Research & Technology Network">GRNET</a> decides to provide a Cloud Storage Service called Pithos, open to the whole Greek academic and research community. The service would feature 50GB of storage space for everybody!
	
