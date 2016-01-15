---
layout: page
title: BaaS
permalink: /baas/
service: BaaS
version: 0.1.0-rc2
---

<div class="row">
    <div class="columns medium-2 text-center">
        <img src="{{ '/assets/baas.png' | prepend: site.baseurl }}">
    </div>
    <div class="columns medium-10">
        <h2>General</h2>
        <p>{{ page.service }} (Backup as a Service) is a service provided to Synnefo users in order to backup their data to Pithos Storage. It supports encrypted, incremental backups in a space and bandwidth-efficient way through a user-friendly <strong>Graphical User Interface (GUI)</strong>.  </p>

        <p> {{ page.service }} uses <a href="http://duplicity.nongnu.org/" title="">duplicity</a> as the backend.</p>

        <h2>Documentation</h2>

        <p><a href="https://www.synnefo.org/docs/baas/latest">Official {{ page.service }} documentation</a></p>

        
        <h2>Downloads</h2>

        <p>You can download {{ page.service }} (version {{ page.version }}) for Linux, Windows and Mac OS X platforms</p>

        <a class="button download fixed-w" 
           title="windows64" 
           href="https://cdn.synnefo.org/baas-latest-win64.zip"
           download>
           {{ page.service }} for Windows 64bit
        </a>
        <br>
        <a class="button download fixed-w" 
           title="linux64" 
           href="https://cdn.synnefo.org/baas-latest-linux64.tar.gz"
           download>
           {{ page.service }} for Linux 64bit
        </a>
        <br>
        <a class="button download fixed-w" 
           title="windows64" 
           href="https://cdn.synnefo.org/baas-latest-osx64.zip" 
           download>
           {{ page.service }} for Mac OS X 64bit
        </a>
        <br>
    </div>
</div>
