---
layout: default
title: Atlas
---
# Atlas
<div class="grid">
{% for item in site.atlas %}
  <div class="card">
    <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
    {% if item.excerpt %}<p>{{ item.excerpt | strip_html | truncate: 140 }}</p>{% endif %}
    {% if item.tags %}{% for t in item.tags %}<span class="tag">{{ t }}</span>{% endfor %}{% endif %}
  </div>
{% endfor %}
</div>
