---
layout: post
title: Synnefo v0.13 Released
date: '2013-04-11T07:50:00.000-07:00'
author: Constantinos Venetsanopoulos
tags: 
modified_time: '2013-04-11T07:50:17.802-07:00'
blogger_id: tag:blogger.com,1999:blog-8518489485419439663.post-1712124351168132287
blogger_orig_url: http://synnefo-software.blogspot.com/2013/04/synnefo-v013-released.html
---

Hello Synnefo users,  

we are happy to announce that Synnefo v0.13 is finally out!  
During this release cycle, which took a long time indeed, we made some major changes in Synnefo. The biggest one was that we merged most of the Synnefo components in a single repository allowing for a more uniform approach and aligned versioning. 
The Synnefo repository now includes the following components: snf-common, snf-webproject, snf-astakos-app, snf-pithos-app, snf-pithos-backend, snf-cyclades-app, snf-cyclades-gtools, snf-stats-app, snf-quotaholder, snf-tools.  <!--break-->
The snf-pithos-webclient was left out, since it is going to be rewritten and merged into an all new web UI that is coming for v0.15.  
We also left out the components that are standalone and can be used independently from Synnefo. These being: snf-image, snf-network, snf-vncauthproxy, nfdhcpd, snf-cloudcms.  

Also during the merge, many components underwent heavy refactoring to allow for new features to come in this release and in the future.  
Thus, a number of  new features were introduced in v0.13. Copy/Pasting from the NEWS file: 

### Synnefo-wide

*   Support for pooling throughout Synnefo
*   Pooled Django DB connections, Pithos backend connections, HTTP connections using single `objpool` package
*   Improved management commands
*   Unified codebase for output of tables in JSON, CSV
*   Bring most of Synnefo code inside a single, unified repository
*   support automatic Python and Debian package builds for individual commits
*   with automatic version generation
*   Overhauling of Synnefo settings: renames and refactoring, for increased uniformity (in progress)
*   Deployment: Standardize on gunicorn, with gevent-based workers and use of Green threads throughout Synnefo
*   Documentation: New scale-out guide, with distinct node roles, for mass Synnefo deployments

### Astakos (Identity Management)

*   Support multiple authentication methods
*   Classic (username/password), Shibboleth, LDAP/Active Directory, Google, Twitter, LinkedIn
*   Users can enable/disable auth methods, and switch between them
*   Introduce a UUID as a global identifier for users, throughout Synnefo
*   The UUID remains constant as the user enables/disables login methods
*   Allow users to modify their email address freely
*   Per-user, per-resource accounting mechanism (quotaholder)
*   Full quota support, with per-user, per-resource quotas, based on quotaholder
*   Projects: Users can create and join Projects
*   Projects grant extra resources to their members
*   UI Enhancements for quotas and projects
*   distinct Usage tab, showing usage of individual resources
*   Project management UI
*   New Overview page

### Cyclades (Compute)

*   Commission resources on quotaholder/Astakos
*   Support mass creation of flavors
*   Support for the ExtStorage disk template in Ganeti
*   Query and report quotas in the UI
*   Pass VM configuration parameters over a VM-side API (`vmapi`)
*   Do not pass sensitive data as Ganeti OS parameters
*   Keep sensitive data in memory caches (memcached) and never allow them to hit the disk
*   Display additional backend information in helpdesk machines list
*   Allow helpdesk users to search for an account using a known machine id
*   Helpdesk actions are now logged using the synnefo's common login infrastructure

### Pithos (Storage)

*   Support storage of blocks on a RADOS backend, for Archipelago
*   Rewritten support for public URLs, with admin-selectable length

### Tools

*   Extend snf-burnin to include testing of Pithos functionality

For a preview of what's coming in next major releases (we will be posting a detailed roadmap soon):  
We are planning for a stable v0.14 in which we will be focusing on code cleanup, documentation and stabilazation without introduction of major features. We hope to have v0.14 work out-of-the-box with the stock Ganeti 2.7 once its officially out, so there will be no need for applying patches or custom Ganeti builds.  
Finally, for v0.15 we have some nice new features already on the way that we will announce in a following post.   

We are looking forward to your feedback,  
the Synnefo team