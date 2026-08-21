---
title: "Publications"
permalink: /publications/
---

<div class="section-block">
<h2><span class="lang-ja">論文</span><span class="lang-en">Papers</span></h2>

{% assign submitted = site.data.publications | where: "status", "submitted" %}
{% if submitted.size > 0 %}
<h3><span class="lang-ja">投稿中</span><span class="lang-en">Submitted</span></h3>
<ul class="pub-list">
{% for p in submitted %}
  <li class="pub-item">
    <span class="pub-detail">
      {{ p.authors }} ({{ p.year }}). {{ p.title }}, {% if p.journal %}<span class="pub-journal">{{ p.journal }}</span>, {% endif %}submitted.
    </span>
  </li>
{% endfor %}
</ul>
{% endif %}

{% assign published = site.data.publications | where: "status", "published" %}
<h3><span class="lang-ja">出版済み</span><span class="lang-en">Published</span></h3>
<ul class="pub-list">
{% for p in published %}
  <li class="pub-item">
    <span class="pub-detail">
      {{ p.authors }} ({{ p.year }}). {{ p.title }} <span class="pub-journal">{{ p.journal }}</span>, {{ p.pages }}.
      {% if p.doi %}<a class="pub-doi" href="https://doi.org/{{ p.doi }}" target="_blank">doi: {{ p.doi }}</a>{% endif %}
    </span>
  </li>
{% endfor %}
</ul>
</div>

<div class="section-block">
<h2><span class="lang-ja">発表</span><span class="lang-en">Presentations</span></h2>

{% assign categories = "international,domestic,workshop" | split: "," %}
{% for cat in categories %}
  {% assign items = site.data.presentations | where: "category", cat %}
  {% if items.size > 0 %}
  <h3>
    {% case cat %}
    {% when "international" %}<span class="lang-ja">国際学会</span><span class="lang-en">International Conferences</span>
    {% when "domestic" %}<span class="lang-ja">国内学会</span><span class="lang-en">Domestic Conferences</span>
    {% when "workshop" %}<span class="lang-ja">ワークショップ等</span><span class="lang-en">Workshops</span>
    {% endcase %}
  </h3>
  <ul class="pres-list">
  {% for pr in items %}
    {% assign date_parts = pr.date | split: "." %}
    {% assign pr_year = date_parts[0] %}
    {% assign pr_month = date_parts[1] | plus: 0 %}
    <li class="pres-item">
      <span class="pres-detail">
        {{ pr.authors }}, {{ pr.title }}, {{ pr.venue }}, {{ pr.city }},
        {% if pr.lang == "en" %}
          {% assign month_names = "January,February,March,April,May,June,July,August,September,October,November,December" | split: "," %}
          {% assign pr_month_index = pr_month | minus: 1 %}
          {{ month_names[pr_month_index] }} {{ pr_year }},
          <span class="pres-type">{% if pr.type == "oral" %}Oral{% else %}Poster{% endif %}</span>.
        {% else %}
          {{ pr_year }}年{{ pr_month }}月,
          <span class="pres-type">{% if pr.type == "oral" %}口頭{% else %}ポスター{% endif %}</span>.
        {% endif %}
        {% if pr.award %}<span class="pres-award">★ <span class="lang-ja">{{ pr.award.ja }}</span><span class="lang-en">{{ pr.award.en }}</span></span>{% endif %}
      </span>
    </li>
  {% endfor %}
  </ul>
  {% endif %}
{% endfor %}
</div>
