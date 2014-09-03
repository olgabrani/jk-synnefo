---
layout: page
title: Features
permalink: /screencasts/
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
sections:
    - height: 488
      id: 33A6MMlUdxKc
      text: How to create and connect to a Synnefo VM
    - height: 366
      id: vx8cINYV-oo
      text: How to connect to your Synnefo VM from a Linux host machine
    - height: 488
      id: IVJRNXb4hcE
      text: View how to connect to your Windows or Linux Synnefo VM from your Windows host machine.
    - height: 366
      id: EZwwEzL7b8o
      text: See how you can bring your VMs closer, using virtual private networks.
    - height: 488
      id: pgNWY5Thsk4
      text: Find out how you can store your files online, share them with friends and access them anytime, from anywhere, simply, securely and fast.




---

{% for s in page.sections %}
<div class="iframe-wrap" data-height="{{ s.height }}">
    <iframe width="100%" src="https://www.youtube.com/embed/{{ s.id }}" frameborder="0" allowfullscreen class="set-height"></iframe>
    <p>{{ s.text }}</p>
</div>
{% endfor %}
