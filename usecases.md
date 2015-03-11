---
layout: page
title: Usecases
permalink: /usecases/
layoutCls: usecases
---

<ul>
{% for u in site.data.usecases %}
    <li>
        <div class="img-wrap">
            <a href="{{ u.url }}" title="{{ u.title }}" target="_blank">
                <img src="{{ u.img_src | prepend: site.baseurl }}" alt="{{ u.title }}"/>
            </a>
        </div>
        <h2><a href="{{ u.url }}" title="{{ u.title }}" target="_blank">{{ u.title }}</a></h2>
        <p>{{u.description}}</p>
    </li>
{% endfor %}
</ul>

