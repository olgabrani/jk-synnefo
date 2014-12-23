---
layout: post
title: Synnefo v0.16 Released
date: '2014-12-19T03:45:00.001-07:00'
author: Constantinos Venetsanopoulos
tags: [release]
modified_time: '2014-12-19T03:47:33.256-07:00'
---

Hello Synnefo users,

we are happy to announce that Synnefo v0.16 is out!

This release brings major new features and significant bug fixes across the whole Synnefo stack. It focuses mostly on Storage (with the previous v0.15 focusing on Networking) and introduces completely new functionality regarding Volume management. <!--break-->Thus, you will see a new tab popping up on your Web UI right next to your VMs tab, which will allow you to manage your Virtual Disks.

Synnefo v0.16 also introduces a brand new Administrator's Web Interface, which helps the administrator manage users and resources from a central point and have an overall view of the running service.

Finally, a major change on Synnefo v0.16 is that Archipelago becomes the single backend for Pithos, making it a prerequisite for every Synnefo installation starting this version.

Many other features are also included, copying/pasting from the NEWS file:

### Synnefo-wide

* Administrator Dashboard: Synnefo 0.16 features a new, integrated Web-based UI for managing Synnefo users and resources. It allows the administrator to  view, filter, modify, and produce stats for all Synnefo resources. This new interface will eventually replace the old read-only helpdesk interface, which  has been obsoleted and will be removed in Synnefo 0.17.

* Pool projects: Projects have been upgraded to a new unified `pool project` type in Synnefo 0.16. Resources get assigned to projects, and project members  may reserve resources from individual projects for their own use. Users may  choose the project where a new resource be charged (e.g., a new Cyclades VM or  a new IP address), and re-assign them freely. Pre-0.16 projects are a subset  of pool projects, with per-user constraints on resource consumption. 

* Management command logging: All Synnefo management commands and their outputs are individually logged, which may prove very useful for debugging and  auditing purposes.

* Archipelago has been adopted as the single backend for Pithos. It is a  unified access layer supporting NFS or Ceph/RADOS-based storage. Current Pithos installations  over NFS can be migrated seamlessly to Pithos over  Archipelago over NFS, please see the Synnefo upgrade notes and the  Archipelago Administrator's Guide for more details. Cyclades VMs continue to run over all Ganeti-supported disk templates, including DRBD, LVM, Ceph/RBD, and Archipelago.

* Various bug fixes and performance improvements. Please see the Synnefo  `Changelog` for a complete list.

### Cyclades

* Storage: Major improvements in VM storage handling.  This release introduces a complete implementation of the OpenStack Block Storage  (Cinder) API v2.0, with distinct /volumes, /snapshots/, /types API endpoints.

* Storage: You can now add and remove virtual disks to and from VMs, even when they are powered on, with hot-(un)plugging.

* Storage: You can now snapshot running VMs to files on Pithos, provided  their storage is backed by Archipelago. New snapshots appear in Pithos and
are manage-able as Pithos files.

* Storage: You can now spawn new VMs from pre-existing snapshots, regardless  of their disk template, e.g., you can use an existing snapshot to spawn a
DRBD VM. If the new VM is to be based on Archipelago, its creation is a thin
clone and completes in seconds.  
PLEASE NOTE: Snapshot support is a work-in-progress, and Archipelago does not  yet perform garbage collection on snapshot deletion. This will be fixed in
Synnefo 0.17.

* Console: Support noVNC-based console for an HTML5-based UI to serve consoles over VNC, with HTTPS encryption. This removes the need for a working
Java Runtime  Environment in the client's browser.

* Console: Support multiple console types, including VNC over raw TCP sockets  and VNC over Websockets, with optional encryption.

* Projects: Supports arbitrary (re-)assignment of Cyclades resources to  individual projects.

* Admin: Support end-to-end checking of the Ganeti-to-Synnefo update path, including all intermediate daemons and the Message Queue.
* Numerous bug fixes, performance improvements and improved usability in management commands.

### Pithos


* Pithos has been refactored to use Archipelago as its single unified storage backend. Individual storage types (e.g., NFS, or RADOS) are handled by
Archipelago itself.

* Snapshots: Snapshots created from Cyclades VMs on Archipelago are now  presented as files on Pithos and may be downloaded via the Pithos UI.

Upgrading to v0.16 is highly recommended. Please see the corresponding
upgrade notes for v0.16 on the Synnefo documentation.

So, try it out and report back! As always, feedback is highly appreciated.

Enjoy.