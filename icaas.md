---
layout: page
title: ICaaS
permalink: /icaas/
service: ICaaS
---

<div class="row">
    <div class="columns medium-2 text-center">
        <img src="{{ '/assets/icaas.png' | prepend: site.baseurl }}">
    </div>
    <div class="columns medium-10">
        <h2>General</h2>
        <p>{{ page.service }} (Image Creation as a Service) is a service to be used in combination with
        a Synnefo deployment to easily import and
        register external OS Images on it.<br>
        The main source of OS images that {{ page.service }}
        works with is the <a href="https://bitnami.com">Bitnami</a> Project.</p>
        <p>With the use of {{ page.service }}, Synnefo users can easily deploy
        VMs that have a great variety of freely available, high quality, open 
        source web applications pre-installed.</p>
        <p>The service is developed in <a href="https://www.python.org/">Python</a> using the
        <a href="http://flask.pocoo.org/">Flask</a> microframework.</p>
        <h2>Downloads</h2>

        <p>You can download the {{ page.service }} client for Windows and Linux platforms:</p>

        <a class="button download fixed-w" 
           title="linux64" 
           href="https://pithos.okeanos.grnet.gr/public/YO7zbSF9Se1BKbDl2wLuX3" 
           download>
           {{ page.service }} for Linux 64bit
        </a>
        <br>

        <a class="button download fixed-w" 
           title="windows64" 
           href="https://pithos.okeanos.grnet.gr/public/R3RQUMgxL3F5P4rlpWFlE" 
           download>
           {{ page.service }} for Windows 64bit
        </a>
        <br>

        <h2>Documentation</h2>

        <p><a href="https://www.synnefo.org/docs/icaas/latest">Official {{ page.service }} documentation</a>
    </div>
</div>
