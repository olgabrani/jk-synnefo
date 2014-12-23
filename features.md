---
layout: page
title: Features
permalink: /screenshots/
subnav:
    - title: Screenshots
      url: '/screenshots/'
    - title: Screencasts
      url: '/screencasts/'
    - title: User facing Features
      url: '/user-features/'
    - title: Backend Features
      url: '/backend-features/'

sections:
    - img: snf-vms_actions.jpg
      text: View your VMs or create new ones
      alt: Create a VM
      url: '/screenshot-create-a-vm/'
    - img: snf-networks.jpg
      text: Connect your VMs using private networks
      alt: How to use private networks
      url: '/screenshot-network/'
    - img: snf-storage.jpg
      text: Storage service interface
      alt: Use storage service
      url: '/screenshot-storage/'
    - img: snf-dashboard.jpg
      text: Service Dashboard
      alt: Your Dashboard
      url: '/screenshot-dashboard/'
    - img: snf-profile.jpg
      text: User profile
      alt: Profile options
      url: '/screenshot-profile/'
    - img: snf-api.jpg
      text: API access
      alt: Service API access
      url: '/screenshot-api/'
    - img: snf-usage.jpg
      text: Resources usage info
      alt: Synnefo Usage Tab
      url: '/screenshot-usage/'

---


<ul class="small-block-grid-1 large-block-grid-2 screenshot-links">
{% for s in page.sections %}
    <li>

        <a href="{{site.baseurl}}/assets/{{s.img}}" data-lightbox="lightbox" data-title="{{s.alt}}">
            <span>&nbsp;</span>
            <img src="{{site.baseurl}}/assets/{{s.img}}" alt="{{s.alt}}">
        </a>
        <p>{{ s.text }}</p>
    </li>
{% endfor %}
</ul>
