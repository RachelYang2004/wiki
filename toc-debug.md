---
layout: default
title: TOC Debug (Inline)
nav_exclude: true
permalink: /toc-debug/
---

# TOC Debug (Inline)

This page is a **sanity check**: it generates a right-side TOC panel **from inside the page content** (no `head_custom.html` needed).

## Section A
Some text.

### A.1
More text.

#### A.1.a
Even more text.

## Section B
Some text.

### B.1
More text.

## Section C
Some text.

<hr>

<div id="fs-inline-toc-badge" style="
position:fixed;left:12px;bottom:12px;z-index:99999;
font:12px/1.2 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
background:rgba(10,10,12,.85);border:1px solid #8641A9;padding:6px 8px;border-radius:8px;color:#fff;
">fs inline toc: loaded</div>

<style>
  #fs-inline-toc{
    position:fixed; right:16px; top:120px;
    z-index:99998;
    width:280px;
    max-height: calc(100vh - 160px);
    overflow:auto;
    background:rgba(12,12,14,.92);
    border:1px solid rgba(134,65,169,.65);
    border-left:4px solid #8641A9;
    border-radius:12px;
    padding:12px 12px 10px 12px;
    box-shadow: 0 12px 32px rgba(0,0,0,.35);
  }
  #fs-inline-toc .title{ font-weight:600; font-size:13px; color:#E9E3F4; margin:0 0 10px 0; }
  #fs-inline-toc .meta{ font-size:11px; opacity:.75; margin:0 0 10px 0; }
  #fs-inline-toc ul{ list-style:none; padding:0; margin:0; }
  #fs-inline-toc li{ margin:6px 0; line-height:1.25; }
  #fs-inline-toc li.l3{ margin-left:12px; opacity:.95; }
  #fs-inline-toc li.l4{ margin-left:22px; opacity:.9; }
  #fs-inline-toc a{ color:#C9B7E8; text-decoration:none; }
  #fs-inline-toc a:hover{ color:#8641A9; }
</style>

<aside id="fs-inline-toc" aria-label="TOC Debug Panel">
  <div class="title">TOC Debug Panel (Inline)</div>
  <div class="meta" id="fs-inline-meta"></div>
  <ul id="fs-inline-list"></ul>
</aside>

<script>
(function(){
  function pickMain(){
    return document.querySelector('#main-content')
      || document.querySelector('main.main-content')
      || document.querySelector('.main-content')
      || document.querySelector('article')
      || document.querySelector('main');
  }
  function slugify(s){
    return (s||'').trim().toLowerCase()
      .replace(/\s+/g,'-')
      .replace(/[^a-z0-9\-\u00A0-\uFFFF]/g,'');
  }
  function ensureId(el){
    if (el.id && el.id.trim()) return el.id;
    let base = slugify(el.textContent) || 'section';
    let id = base, n = 2;
    while (document.getElementById(id)) id = base + '-' + (n++);
    el.id = id;
    return id;
  }

  function build(){
    const main = pickMain();
    const meta = document.getElementById('fs-inline-meta');
    const list = document.getElementById('fs-inline-list');

    if (!main){
      meta.textContent = 'Main container: NOT FOUND';
      list.innerHTML = '<li>Could not find main content container.</li>';
      return;
    }
    const selector = 'h2, h3, h4';
    const headings = Array.from(main.querySelectorAll(selector)).filter(h => !h.closest('nav, aside, footer'));

    meta.textContent = 'Headings found: ' + headings.length;
    list.innerHTML = headings.length ? '' : '<li>No headings found.</li>';

    headings.forEach(h => {
      const tag = (h.tagName||'').toLowerCase();
      const id = ensureId(h);
      const li = document.createElement('li');
      li.className = tag === 'h2' ? 'l2' : tag === 'h3' ? 'l3' : 'l4';
      const a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = h.textContent;
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    build();
    requestAnimationFrame(() => requestAnimationFrame(build));
    setTimeout(build, 800);
  });
})();
</script>
