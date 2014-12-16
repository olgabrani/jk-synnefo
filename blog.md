---
layout: page
title: Blog
permalink: /blog/
---


{% for post in site.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p class="author">
    <span class="date">Posted on {{ post.date | date_to_long_string }}</span>
  </p>
  {{ post.content | split:'<!--break-->' | first }}
   {% if post.content contains '<!--break-->' %}
  <p><a href="{{ post.url }}" class="button">Read more</a></p>
   {% endif %}
{% endfor %}