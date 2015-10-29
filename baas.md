---
layout: page
title: BaaS
permalink: /baas/
service: BaaS
---

<div class="row">
    <div class="columns medium-2 text-center">
        <img src="{{ '/assets/baas.png' | prepend: site.baseurl }}">
    </div>
    <div class="columns medium-10">
        <h2>General</h2>
        <p>{{ page.service }} (Backup as a Service) is a service provided to Synnefo users in order to backup their data to Pithos Storage. It supports encrypted, incremental backups in a space and bandwidth-efficient way through a <strong>Graphical User Interface (GUI)</strong> as well as a <strong>Command Line Interface (CLI)</strong>.  </p>

        <p> {{ page.service }} uses <a href="http://duplicity.nongnu.org/" title="">duplicity</a> as the backend.</p>
        
        <h2>Downloads</h2>

        <p>You can download {{ page.service }} for BaaS for Linux, Windows and Mac OS X platforms</p>

        <a class="button download fixed-w" 
           title="windows64" 
           href="https://pithos.okeanos.grnet.gr/public/rciylizFmNOfe8XCfd26U6" 
           download>
           {{ page.service }} for Windows 64bit
        </a>
        <br>
        <a class="button download fixed-w" 
           title="linux64" 
           href="https://pithos.okeanos.grnet.gr/public/uKBNVn3UPpZ4lEBbVixMC1" 
           download>
           {{ page.service }} for Linux 64bit
        </a>
        <br>
        <a class="button download fixed-w"
           title="linux32" 
           href="https://pithos.okeanos.grnet.gr/public/zzjPTLI0YrY3GQjWFq3FW5" 
           download>
           {{ page.service }} for Linux 32bit
        </a>
        <br>
        <a class="button download fixed-w" 
           title="windows64" 
           href="https://pithos.okeanos.grnet.gr/public/6XjxdndahvFAZJ67rlC1S" 
           download>
           {{ page.service }} for Mac OS X 64bit
        </a>
        <br>

        <h2>Documentation</h2>

        <p><a href="https://www.synnefo.org/docs/baas/latest">Official {{ page.service }} documentation</a>
    </div>
</div>
