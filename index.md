---
layout: default
bodyClass: page-home
title: Unredacted Word
displayTitle: " "
excerpt: >
  Unredacted Word: publisher of words, code & data. Our new edition of The Society of the Spectacle is out now 💥.
---

<div class="aesthetics fullbleed">
  <p class="centered">
    <span class="cursor">█</span>
    Unredacted <s>Word</s>: publisher of words, code &amp; data.
  </p>
</div>

{% for item in site.data.catalog %}
  {% assign sku = item[1].sku %}
  <h2 class="text-gradient">
    {% if item[1].hidden != true %}
      <a href="{{ item[1].url }}">{{ item[1].name }}</a>
    {% endif %}
  </h2>
  
  {% if item[1].hidden != true %}
    {% include product-table.html sku=sku showFeatures="False" %}
  {% endif %}
{% endfor %}

## Sales

We are able to send our goods directly to you, as ebooks, web books, and print
copies. We very much hope that you will buy directly from us whenever possible, and
we will do our very best to make sure that you receive them in the way that you
need, as quickly as possible.
