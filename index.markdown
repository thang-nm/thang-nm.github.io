---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<div class="home">
  <div class="info">
    <h1 class="title">@thang-nm</h1>
    <h3>I code and crack!</h3>
  </div>

  <div class="masonry">
    {%- for post in site.posts -%}
      <div class="article">
        <div class="thumb">
          <a class="post-link" href="{{ post.url | relative_url }}">
            <img src="{{ post.thumbnail }}">
          </a>
        </div>
        <a class="post-link" href="{{ post.url | relative_url }}">
          <h2 class="title">{{ post.title }}</h2>
        </a>
        <p class="description">{{ post.description }}</p>
      </div>
    {%- endfor -%}
  </div>
</div>

<script type="text/javascript" src="/assets/js/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="/assets/js/macy.js"></script>
<script type="text/javascript" src="/assets/js/script.js"></script>
