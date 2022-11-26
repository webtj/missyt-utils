import{_ as s,c as n,o as a,a as l}from"./app.88d7fbcb.js";const C=JSON.parse('{"title":"\u{1F955} \u6D4F\u89C8\u5668\u4E8B\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"Event.on","slug":"event-on","link":"#event-on","children":[]},{"level":2,"title":"Event.off","slug":"event-off","link":"#event-off","children":[]}],"relativePath":"guide/browser/Event.md","lastUpdated":1669479768000}'),p={name:"guide/browser/Event.md"},o=l(`<h1 id="\u{1F955}-\u6D4F\u89C8\u5668\u4E8B\u4EF6" tabindex="-1">\u{1F955} \u6D4F\u89C8\u5668\u4E8B\u4EF6 <a class="header-anchor" href="#\u{1F955}-\u6D4F\u89C8\u5668\u4E8B\u4EF6" aria-hidden="true">#</a></h1><blockquote><p>\u6D4F\u89C8\u5668\u4E8B\u4EF6\u6CE8\u518C\u3001\u6CE8\u9500</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">var</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">event</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u4E8B\u4EF6\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">property</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">function</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">on</span><span style="color:#676E95;"> \u7ED1\u5B9A\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">property</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">function</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">off</span><span style="color:#676E95;"> \u89E3\u7ED1\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">example</span></span>
<span class="line"><span style="color:#676E95;"> * import { Event } from &#39;missyt-utils&#39;;</span></span>
<span class="line"><span style="color:#676E95;"> * Event.on(document.querySelector(&#39;.col&#39;), &#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#676E95;"> *  console.log(&#39;click&#39;);</span></span>
<span class="line"><span style="color:#676E95;"> * });</span></span>
<span class="line"><span style="color:#676E95;"> * eveEventnt.off(document.querySelector(&#39;.col&#39;), &#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#676E95;"> * console.log(&#39;click&#39;);</span></span>
<span class="line"><span style="color:#676E95;"> * });</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Event</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">missyt-utils</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="event-on" tabindex="-1">Event.on <a class="header-anchor" href="#event-on" aria-hidden="true">#</a></h2><blockquote><p>\u4E8B\u4EF6\u6CE8\u518C</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">function</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">on</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u4E8B\u4EF6\u76D1\u542C</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">Element</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">el</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">type</span><span style="color:#676E95;"> \u4E8B\u4EF6\u7C7B\u578B</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">EventListenerOrEventListenerObject</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">listener</span><span style="color:#676E95;"> \u4E8B\u4EF6\u76D1\u542C\u51FD\u6570</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">boolean | AddEventListenerOptions</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">options</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">returns</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">example</span></span>
<span class="line"><span style="color:#676E95;"> * Event.on(document, &#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#676E95;"> *  console.log(&#39;click&#39;);</span></span>
<span class="line"><span style="color:#676E95;"> * });</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"></span></code></pre></div><h2 id="event-off" tabindex="-1">Event.off <a class="header-anchor" href="#event-off" aria-hidden="true">#</a></h2><blockquote><p>\u4E8B\u4EF6\u6CE8\u9500</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">function</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">off</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u4E8B\u4EF6\u79FB\u9664</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">Element</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">el</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">type</span><span style="color:#676E95;"> \u4E8B\u4EF6\u7C7B\u578B</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">EventListenerOrEventListenerObject</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">listener</span><span style="color:#676E95;"> \u4E8B\u4EF6\u76D1\u542C\u51FD\u6570</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">boolean | EventListenerOptions</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">options</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">returns</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">example</span></span>
<span class="line"><span style="color:#676E95;"> * Event.off(document, &#39;click&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#676E95;"> * console.log(&#39;click&#39;);</span></span>
<span class="line"><span style="color:#676E95;"> * });</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function t(c,r,y,F,i,D){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
