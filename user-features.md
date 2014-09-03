---
layout: page
title: Features
permalink: /user-features/
layoutCls: x-wide
parent: /screenshots/
subnav:
    - title: Screenshots
      url: '/screenshots/'
    - title: Screencasts
      url: '/screencasts/'
    - title: User facing Features
      url: '/user-features/'
    - title: Backend Features
      url: '/backend-features/'
---

<div class="clearfix">
    <div class="lt">
        <img src="{{ '/assets/icon-compute.png' | prepend: site.baseurl}}" alt="">
    </div>
    <div class="rt">
        <h2>Compute Service</h2>
        <ul>
        <li>Support for all major Windows Server and Linux distributions</li>
        <li>Spawning VMs from custom Images</li>
        <li>Dynamic file injection upon creation</li>
        <li>CPU and Network statistics per VM</li>
        <li>Easy and secure out-of-band access through the Web UI</li>
        <li>Programmatic access via the OpenStack Compute API</li>
        </ul>
    </div>
</div>
<div class="clearfix">
    <div class="lt">
        <img src="{{ '/assets/icon-network.png' | prepend: site.baseurl }}" alt="">
    </div>
    <div class="rt">
        <h2>Network Service</h2>
        <ul>
            <li>Public networking with full IPv4/IPv6 support</li>
            <li>Different firewall options for the Public network</li>
            <li>Isolated Private networks with automatic or manual IP allocation</li>
            <li>Programmatic access via extensions of the OpenStack Compute API</li>
        </ul>
    </div>
</div>
<div class="clearfix">
    <div class="lt">
        <img src="{{ '/assets/icon-storage.png' | prepend: site.baseurl }}" alt="">
    </div>
    <div class="rt">
        <h2>Storage Service</h2>
        <ul>
            <li>Sharing between users and groups</li>
            <li>Syncing with native Windows and Mac OS X clients</li>
            <li>Programmatic access via the OpenStack Object Storage API + extensions</li>
        </ul>
    </div>
</div>
<div class="clearfix">
    <div class="lt">
        <img src="{{ '/assets/icon-image.png' | prepend: site.baseurl }}" alt="">
    </div>
    <div class="rt">

        <h2>Image Service</h2>
        <ul class="disc">
            <li>Images are just files in the Storage Service</li>
            <li>Images can be shared with other users</li>
            <li>Support for custom, user-provided /assets</li>
            <li>Creation, upload, registration tool</li>
            <li>Programmatic access via the OpenStack Glance API</li>
        </ul>
    </div>
</div>
<div class="clearfix">
    <div class="lt">
        <img src="{{ '/assets/icon-identity.png' | prepend: site.baseurl }}" alt="">
    </div>
    <div class="rt">

        <h2>Identity Service</h2>
        <ul class="disc">
            <li>User management</li>
            <li>Multiple login methods (username/password, LDAP/AD, Google, Twitter, Linkedin)</li>
            <li>Multiple user moderation methods</li>
            <li>Quota system to handle virtual resources of the Compute/Storage service</li>
            <li>Virtual resources Usage tab</li>
            <li>Create and Join Projects to share virtual resources</li>
        </ul>
    </div>
</div>

