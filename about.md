---
layout: page
title: About
permalink: /about/
subnav:
    - title: Overview
      url: '/about/'
    - title: Timeline
      url: '/timeline/'

---

Synnefo is a complete open source cloud stack written in Python that provides Compute, Network, Image, Volume and Storage services, similar to the ones offered by AWS. Synnefo manages multiple [Ganeti](http://code.google.com/p/ganeti) clusters at the backend for handling of low-level VM operations and uses [Archipelago](http://www.synnefo.org/docs/archipelago/latest/) to unify cloud storage. To boost 3rd-party compatibility, Synnefo exposes the OpenStack APIs to users.

<div class="operations-inner">
    <ul class="mobile-hidden">
        <li>
            <div class="box">
              <h2>GOOGLE GANETI</h2>
              <p>maturity, <br>robustness<br>at the backend</p>
              <span class="sign">+</span>
          </div>
        </li>
        <li>
          <div class="box">
              <h2>OPENSTACK APIs </h2>
              <p>compatibility, simplicity<br>at the frontend</p>
              <span class="sign"><img src="{{ "/assets/arrow.png" | prepend: site.baseurl }}" alt="->"></span>
          </div>
        </li>
        <li>
          <div class="box">
              <h2>SYNNEFO</h2>
              <p>production-ready, scalable,<br>open source cloud software</p>
          </div>
        </li>
    </ul>   
    <div class="mobile-only">
        <h2>GOOGLE GANETI</h2>
        <p>maturity, robustness<br>at the backend</p>
        <span class="sign">+</span>
        <h2>OPENSTACK APIs </h2>
        <p>compatibility, simplicity<br>at the frontend</p>
        <span class="sign"><img src="{{ "/assets/arrow-down.png" | prepend: site.baseurl }}" alt="->"></span>
        <h2>SYNNEFO</h2>
        <p>production-ready, scalable layered<br>open source cloud software</p>
    </div>              
</div>

This is an overview of the Synnefo services:

![Synnefo Services]({{ "/assets/synnefo_services.png" | prepend: site.baseurl }})

Synnefo keeps a clear separation between the traditional cluster management layer and the cloud layer. This unique design approach leads to a completely layered architecture.

![Synnefo Architecture]({{ "/assets/architecture.png" | prepend: site.baseurl }})

The layered approach for both the Compute and the Storage service boosts production readiness, maintainability and upgradability. The modular design allows for linear scalability, gradual extensibility and ease of operations.
This is an overview of the Synnefo architecture showing the major components on each layer:

![Synnefo Layers]({{ "/assets/about1.png" | prepend: site.baseurl }})


