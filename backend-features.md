---
layout: page
title: Features
permalink: /backend-features/
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

<div class="row">
    <div class="columns medium-2 text-center">
        <img src="{{ '/assets/icon-compute.png' | prepend: site.baseurl }}" alt="">
    </div>
    <div class="columns medium-10">
        <h2>Compute Service</h2>
        <ul class="disc">
            <li>Synnefo manages multiple Ganeti clusters in the backend</li>
            <li>Support for VM live migrations with or without shared storage</li>
            <li>Support for multiple storage backends: LVM, DRBD, Files on local/shared dir, RBD (Ceph/RADOS), Archipelago</li>
            <li>Simple interface to plug into SAN/NAS</li>
            <li>Easy integration into existing infrastructure using hooks</li>
            <li>Linearly scalable by dynamic addition of Ganeti clusters</li>
        </ul>
    </div>
</div>
<div class="row">
    <div class="columns medium-2 text-center">
        <img src="{{ '/assets/icon-network.png' | prepend: site.baseurl }}" alt="">
    </div>
    <div class="columns medium-10">
        <h2>Network Service</h2>
        <ul class="disc">
            <li>Full IPv4/IPv6 support for Public and Private networks</li>
            <li>Scale to thousands of isolated private L2 segments over single VLAN</li>
            <li>Support for multiple networking configurations in the backend</li>
        </ul>
    </div>
</div>
<div class="row">
    <div class="columns medium-2 text-center">
        <img src="{{ '/assets/icon-storage.png' | prepend: site.baseurl }}" alt="">
    </div>
    <div class="columns medium-10">
        <h2>Storage Service</h2>
        <ul class="disc">
            <li>Files are collections of blocks</li>
            <li>Content-based addressing for blocks</li>
            <li>Partial file transfers, deduplication, efficient syncing</li>
            <li>Single store for Files, /assets, VM disks when using NFS, RBD or Archipelago</li>
        </ul>
    </div>
</div>
<div class="row">
    <div class="columns medium-2 text-center">
        <img src="{{ '/assets/icon-image.png' | prepend: site.baseurl }}" alt="">
    </div>
    <div class="columns medium-10">

        <h2>Image Service</h2>
        <ul class="disc">
            <li>Secure Image deployment inside a VM</li>
            <li>All customization done by Synnefo with no need for special tools inside the Image</li>
            <li>Efficient syncing and sharing as files</li>
        </ul>
    </div>
</div>

