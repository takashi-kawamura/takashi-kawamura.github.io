---
title: "Publications"
permalink: /publications/
---

<div class="section-block">
<h2><span class="lang-ja">論文</span><span class="lang-en">Papers</span></h2>
<h3><span class="lang-ja">出版済み</span><span class="lang-en">Published</span></h3>

<ul class="pub-list">
{% for p in site.data.publications %}
  <li class="pub-item">
    <span class="pub-year">{{ p.year }}</span>
    <span class="pub-detail">
      <span class="pub-journal">{{ p.journal }}</span><br>
      {{ p.authors }} {{ p.title }}
      {% if p.doi %}<br><a class="pub-doi" href="https://doi.org/{{ p.doi }}" target="_blank">DOI: {{ p.doi }}</a>{% endif %}
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
    <li class="pres-item">
      <span class="pres-date">{{ pr.date }}</span>
      <span class="pres-detail">
        <span class="pres-type">[{% if pr.type == "oral" %}<span class="lang-ja">口頭</span><span class="lang-en">Oral</span>{% else %}<span class="lang-ja">ポスター</span><span class="lang-en">Poster</span>{% endif %}]</span>
        <span class="lang-ja">{{ pr.venue.ja }}</span><span class="lang-en">{{ pr.venue.en }}</span> —
        <span class="lang-ja">{{ pr.authors.ja }}</span><span class="lang-en">{{ pr.authors.en }}</span>,
        <span class="lang-ja">{{ pr.title.ja }}</span><span class="lang-en">{{ pr.title.en }}</span>
        {% if pr.award %}<span class="pres-award">★ <span class="lang-ja">{{ pr.award.ja }}</span><span class="lang-en">{{ pr.award.en }}</span></span>{% endif %}
      </span>
    </li>
  {% endfor %}
  </ul>
  {% endif %}
{% endfor %}
</div>
