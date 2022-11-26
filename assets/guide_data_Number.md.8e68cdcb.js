import{_ as s,c as n,o as a,a as l}from"./app.88d7fbcb.js";const u=JSON.parse('{"title":"\u{1F955} Number\u6570\u636E\u5904\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"toFixed","slug":"tofixed","link":"#tofixed","children":[]},{"level":2,"title":"toThousands","slug":"tothousands","link":"#tothousands","children":[]},{"level":2,"title":"numberToPercent","slug":"numbertopercent","link":"#numbertopercent","children":[]},{"level":2,"title":"percentToNumber","slug":"percenttonumber","link":"#percenttonumber","children":[]},{"level":2,"title":"scientificToNumber","slug":"scientifictonumber","link":"#scientifictonumber","children":[]}],"relativePath":"guide/data/Number.md","lastUpdated":1669479768000}'),p={name:"guide/data/Number.md"},o=l(`<h1 id="\u{1F955}-number\u6570\u636E\u5904\u7406" tabindex="-1">\u{1F955} Number\u6570\u636E\u5904\u7406 <a class="header-anchor" href="#\u{1F955}-number\u6570\u636E\u5904\u7406" aria-hidden="true">#</a></h1><h2 id="tofixed" tabindex="-1">toFixed <a class="header-anchor" href="#tofixed" aria-hidden="true">#</a></h2><blockquote><p>\u4FDD\u7559\u5C0F\u6570\u4F4D\u6570\uFF0C\u56DB\u820D\u4E94\u5165</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">function</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">toFixed</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u4FDD\u7559\u5C0F\u6570\u4F4D\u6570\uFF0C\u56DB\u820D\u4E94\u5165</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#676E95;"> \u6570\u5B57</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">fixed</span><span style="color:#676E95;"> \u4FDD\u7559\u5C0F\u6570\u4F4D\u6570,\u9ED8\u8BA42\u4F4D</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">returns</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> \u8FD4\u56DE\u5904\u7406\u540E\u7684\u6570\u5B57</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">example</span></span>
<span class="line"><span style="color:#676E95;"> * toFixed(1.23756,2) //1.23</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"></span></code></pre></div><h2 id="tothousands" tabindex="-1">toThousands <a class="header-anchor" href="#tothousands" aria-hidden="true">#</a></h2><blockquote><p>\u6570\u5B57\u8F6C\u5343\u5206\u4F4D</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">function</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">toThousands</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u6570\u5B57\u8F6C\u5343\u5206\u4F4D</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#676E95;"> \u6570\u5B57</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">returns</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> \u8FD4\u56DE\u5343\u5206\u4F4D\u6570\u5B57</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">example</span></span>
<span class="line"><span style="color:#676E95;"> * toThousands(123456789) //123,456,789</span></span>
<span class="line"><span style="color:#676E95;"> * toThousands(123456789.123) //123,456,789.123</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"></span></code></pre></div><h2 id="numbertopercent" tabindex="-1">numberToPercent <a class="header-anchor" href="#numbertopercent" aria-hidden="true">#</a></h2><blockquote><p>\u6570\u5B57\u8F6C\u767E\u5206\u6BD4</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">function</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">numberToPercent</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u6570\u5B57\u8F6C\u767E\u5206\u6BD4</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#676E95;"> \u6570\u5B57</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">fixed</span><span style="color:#676E95;"> \u4FDD\u7559\u5C0F\u6570\u4F4D\u6570,\u9ED8\u8BA42\u4F4D</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">returns</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> \u8FD4\u56DE\u767E\u5206\u6BD4</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">example</span></span>
<span class="line"><span style="color:#676E95;"> * numberToPercent(0.123456,2) //12.35%</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"></span></code></pre></div><h2 id="percenttonumber" tabindex="-1">percentToNumber <a class="header-anchor" href="#percenttonumber" aria-hidden="true">#</a></h2><blockquote><p>\u767E\u5206\u6BD4\u8F6C\u6570\u5B57</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">function</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">percentToNumber</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u767E\u5206\u6BD4\u8F6C\u6570\u5B57</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">percent</span><span style="color:#676E95;"> \u767E\u5206\u6BD4</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">returns</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> \u8FD4\u56DE\u6570\u5B57\u6216\u8005\u539F\u503C</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">example</span></span>
<span class="line"><span style="color:#676E95;"> * percentToNumber(&#39;12.35%&#39;) //0.1235</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"></span></code></pre></div><h2 id="scientifictonumber" tabindex="-1">scientificToNumber <a class="header-anchor" href="#scientifictonumber" aria-hidden="true">#</a></h2><blockquote><p>\u79D1\u5B66\u8BA1\u6570\u6CD5\u8F6C\u6570\u5B57</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">function</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">scientificToNumber</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">description</span><span style="color:#676E95;"> \u79D1\u5B66\u8BA1\u6570\u6CD5\u8F6C\u6570\u5B57</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#676E95;"> \u79D1\u5B66\u8BA1\u6570\u6CD5</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">returns</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> \u8FD4\u56DE\u6570\u5B57\u6216\u8005\u539F\u503C</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">example</span></span>
<span class="line"><span style="color:#676E95;"> * scientificToNumber(&#39;1.23456e+7&#39;) //12345600</span></span>
<span class="line"><span style="color:#676E95;"> * scientificToNumber(&#39;1.23456e-7&#39;) //0.000000123456</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"></span></code></pre></div>`,16),e=[o];function c(t,r,y,i,F,E){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{u as __pageData,d as default};
