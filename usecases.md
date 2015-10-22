---
layout: page
title: Usecases
permalink: /usecases/
---

{% for u in site.data.usecases %}
<div class="row">
    <div class="columns medium-3">
        <a href="{{ u.url }}" title="{{ u.title }}" target="_blank">
            <img src="{{ u.img_src | prepend: site.baseurl }}" alt="{{ u.title }}"/>
        </a>
    </div>
    <div class="columns medium-9">
        <h2><a href="{{ u.url }}" title="{{ u.title }}" target="_blank">{{ u.title }}</a></h2>
        <p>{{u.description}}</p>
    </div>
</div>
{% endfor %}

