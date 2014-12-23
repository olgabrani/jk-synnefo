---
layout: post
title: Synnefo v0.15 Released
date: '2014-03-11T09:43:00.000-07:00'
author: Constantinos Venetsanopoulos
tags: [release]
modified_time: '2014-03-11T09:49:47.659-07:00'
blogger_id: tag:blogger.com,1999:blog-8518489485419439663.post-9144119592650327306
blogger_orig_url: http://synnefo-software.blogspot.com/2014/03/synnefo-v015-released.html
---

Hello Synnefo users,

we are happy to announce that Synnefo v0.15 is out!

This release brings major new features and significant bug fixes across Synnefo.

It focuses mostly on Networking and the changes there affect the whole stack, so you will also see new exciting things on your Web UI
<!--break-->
Note that starting v0.15, Ganeti nodes do not need to have access to the Pithos DB anymore, so this means that Ganeti clusters are now completely separated from the upper Synnefo layer, boosting scalability and security. Additionally, it is now really easy to have Ganeti clusters on geographically distinct locations.

More features are also included, copying/pasting from the NEWS file:

**Cyclades**


*   Networking: Major improvements in the Network Service. This release introduces a complete implementation of the OpenStack Networking (Neutron) API v2.0, with distinct /networks, /ports, /subnets, and /floatingips API endpoints, replacing the old Cyclades /networks API.

*   Networking: Support the creation of arbitrary L2/L3 network topologies, with IPv4-only, dual IPv4/IPv6 or IPv6-only functionality.

*   Networking: Simplify network administration, support forced networking configurations, e.g., a permanent management network across VMs.

*   Networking: Introduce new CLI management commands for handling networks, subnets, and ports.

*   Networking: Support management of floating IPs as a distinct resource in Cyclades. Users may create new IPs from admin-defined IP pools, attach them to and detach them from VMs arbitrarily, and eventually release them.

*   Compute: Support server resize, by changing server Flavors. Extend the API and UI accordingly. Support fine-grained, per-flavor control of resize and create actions ("allow_create" flavor attribute).

*   Compute: Support finer-grained accounting of "Active CPUs", "Active RAM" resources, in addition to "CPUs", "RAM". Active resources are those of running VMs. This allows the administrator to limit currently used VM resources to only a subset of the total allocated resources.

*   Compute: Support NIC hotplugging. Allow addition and removal of NICs on running VMs, without a reboot, to support on-the-fly network reconfiguration, e.g., allocation of floating IPs, without the need for NAT.

*   Compute: Speed up server reconciliation, by performing operations in parallel, across Ganeti backends.

*   Compute: Support running snf-vncauthproxy in distinct machine, with control channel over TCP. This simplifies firewalling.

*   UI: Numerous UI improvements, especially wrt Networking: Better handling of multiple NICs per server, with multiple IPv4 and IPv6 addresses per NIC. Introduce distinct "IP addresses" view. The "Create New Machine" wizard has also been extended to support on-the-fly networking configuration of a new machine.

*   UI: Introduce distinct "SSH key" view.

*   UI: Make Google fonts base URL configurable, to support running in networks isolated from the public Internet.

*   UI: Support consistent display of pending actions, e.g., "Shutting Down...", or "Destroying...". Previously, they were reset upon page reload.

*   UI: Support arbitrary groupings of public networks, based on their name.

*   Quota: Support quota enforcement through new 'enforce-resource-cyclades' management command with fine-grained, per-resource actions, to bring current per-user resource usage within specified limits.

*   Statistics: Export basic statistics at the /admin/stats/detail API endpoint. Also make them available at the CLI.

*   Administration: Support mixed DRBD/Archipelago-based Ganeti backends. Previously, a Ganeti cluster was defined as Archipelago-only explicitly.

**Pithos**

*   API: Numerous bugfixes and improvements across the codebase. Improve handling of various corner cases, with better error reporting.

*   UI: Support separate view/unsafe domain, for increased security. Users may download their files from a specific view domain, distinct from the API domain, to prevent malicious user content from accessing cookies and other sensitive data set at the level of the API domain. This uses newly-introduced support for OAuth2 tokens in Astakos.

**Astakos**

*   Projects: Improved project handling: Better logging of project, application, and membership actions.

*   Account API: The Account API has been extended to allow full programmatic handling of projects.

*   Authentication: Remove obsolete /account/v1.0/authenticate call in favor of the standard POST /identity/v2.0/tokens Keystone API call.

*   Authentication: Support OAuth 2.0 Authorization Code Grant, generate and validate OAuth 2.0 access token. This is used by Pithos to support distinct API and view/unsafe domains.

*   Authentication: Support arbitrary attributes as unique identifiers, e.g., eduPersonTargetedId, or ePPN, by extracting them from the ``REMOTE_USER`` header. Also fill third-party signup form fields automatically.

*   Administration: Introduce numerous new admin commands at the CLI, simplify resource and user management commands.

*   Resources: Finer-grained resource control, with individual setting of resource visibility in the API, the UI, and Projects.

*   Statistics: Export basic statistics at the /admin/stats/detail API endpoint. Also make them available at the CLI.

**Synnefo-wide**

*   Burnin tests: Significant improvements to the Synnefo Continuous Integration mechanism (snf-burnin). It has been extended to also test the Pithos storage service.

*   Administration: Better error logging, and reporting across Synnefo. Admins are notified by default, via email, whenever an unhandled exception occurs in a Synnefo worker.

*   Administration: Ganeti nodes no longer access the Pithos DB at all. Previously, read-only access was required to support spawning VMs from Images on Pithos. As of v0.15, Ganeti nodes only need read-only access to the Pithos block store (NFS or RADOS).

Upgrading to v0.15 is definitely recommended. You can find the corresponding upgrade notes [here](http://www.synnefo.org/docs/synnefo/latest/upgrade/upgrade-0.15.html).

As always feedback is highly appreciated.

Enjoy, 
on behalf of the Synnefo team, 
Constantinos