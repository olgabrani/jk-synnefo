---
layout: post
title: Synnefo v0.14 Released
date: '2013-07-08T04:21:00.001-07:00'
author: Constantinos Venetsanopoulos
tags: [release]
modified_time: '2013-07-08T05:12:59.225-07:00'
blogger_id: tag:blogger.com,1999:blog-8518489485419439663.post-548241588343717381
blogger_orig_url: http://synnefo-software.blogspot.com/2013/07/synnefo-v014-released.html
---


Hello Synnefo users,

we are happy to announce that Synnefo v0.14 is out!<!--break-->

Synnefo v0.14 was not planned to be a major-features release, but rather one concerning compatibility and uniformity issues regarding the way different components are handled and how they interact with each other. However, during the above process, it came out that to achieve what we targeted, we had to refactor some parts of the code and abstract others, so at the end some important changes actually happened.

In v0.14 we standardize on the URL patterns across all Synnefo components, we clearly distinguish components (e.g.: Astakos, Cyclades, Pithos) from services (e.g.: Keystone, Account, Compute, Image, Quota, Object Store), introduce a new, generic way to register components/services/resources, and update the APIs to be compatible with the latest corresponding OpenStack specifications.

Also, since v0.14, Synnefo is branding neutral. All '~okeanos' and 'GRNET' references have been removed and we have additionally introduced a new component: snf-branding, which enables Synnefo users to easily adapt a Synnefo installation to their company's/organization's visual identity.

Finally, we introduce a new tool called 'snf-deploy' which automatically deploys Synnefo. As a first step, we provide a new guide that explains how to use the tool to deploy the whole Synnefo stack on one node in few minutes time.

Specifically, copy/pasting from the NEWS file:


### Synnefo-wide

*   Standardize URLs for Synnefo Components
*   Impose structure and naming conventions to all URL related settings. Make each component deployable under a user-configurable &lt;COMPONENT&gt;_BASE_URL. Each API (compute, image, etc.) is deployable under a developer-configurable prefix beneath BASE_URL
*   Branding customization support across Synnefo frontend components
*   Ability to adapt the Astakos, Pithos and Cyclades Web UI to a company’s visual identity This is possible using the snf-branding component, which is automatically installed on the nodes running the API servers for Astakos, Pithos and Cyclades
*   Create a JSON-exportable definition document for each Synnefo Component (Astakos, Cyclades, Pithos, etc.) that consolidates APIs (services), resources, and other standardized properties (e.g. default URL prefixes)
*   Implement common client for communication with Astakos and proper error handling

### Astakos

*   Redesign of the accounting system (quotaholder) and integration into Astakos
*   Implementation of the Κeystone API call POST /tokens
*   Specified the API call allong with a procedure to register a Synnefo component (e.g. Cyclades) along with the services it provides (e.g. Compute, Image, Network) and the resources it handles (e.g. vcpu, ram)
*   Astakos specific API calls are moved under ‘/account/v1.0’
*   Support API calls for quotas, commissions and resources</li><li>Improve user activation process<
*   Improve limit of pending applications by making it a quotable resource
*   Added fine grain user auth provider’s policies
*   Overhauling of Astakos management commands for usability and uniformity

### Cyclades

*   Speed up private network creation, by creating a network on a Ganeti backend only when a server connects to that network
*   Rename management commands for commissions and resources for uniformity with other services
*   Synchronize Cyclades API with Openstack Compute v2.0 API

### Pithos
*   Various minor fixes

### Tools
*   Introduce the 'snf-deploy' tool, which automatically deploys Synnefo on a number of nodes

Synnefo v0.14 doesn't support Ganeti 2.7 as originally planned, since Ganeti 2.7 was not yet officially released at the time when Synnefo v0.14 was out. Hope to have it officially supported at the next version of Synnefo.

As always, any kind of feedback is highly appreciated.

Enjoy,  
the Synnefo team