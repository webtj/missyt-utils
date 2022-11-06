import{_ as s,c as n,o as a,a as l}from"./app.1f67bb86.js";const C=JSON.parse('{"title":"\u{1F955} \u968F\u673A\u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"getRandomColor","slug":"getrandomcolor","link":"#getrandomcolor","children":[]},{"level":2,"title":"getRandomInt","slug":"getrandomint","link":"#getrandomint","children":[]},{"level":2,"title":"getRandomString","slug":"getrandomstring","link":"#getrandomstring","children":[]}],"relativePath":"guide/Random.md","lastUpdated":1667742708000}'),o={name:"guide/Random.md"},p=l(`<h1 id="\u{1F955}-\u968F\u673A\u51FD\u6570" tabindex="-1">\u{1F955} \u968F\u673A\u51FD\u6570 <a class="header-anchor" href="#\u{1F955}-\u968F\u673A\u51FD\u6570" aria-hidden="true">#</a></h1><h2 id="getrandomcolor" tabindex="-1">getRandomColor <a class="header-anchor" href="#getrandomcolor" aria-hidden="true">#</a></h2><blockquote><p>\u968F\u673A16\u8FDB\u5236\u989C\u8272</p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">funcs</span><span style="color:#676E95;"> getRandomColor</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> \u968F\u673A\u5341\u516D\u8FDB\u5236\u989C\u8272</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> color </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getRandomColor</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//#2e849a</span></span>
<span class="line"></span></code></pre></div><h2 id="getrandomint" tabindex="-1">getRandomInt <a class="header-anchor" href="#getrandomint" aria-hidden="true">#</a></h2><blockquote><p>\u83B7\u53D6\u8303\u56F4\u5185\u968F\u673A\u6574\u6570</p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">funcs</span><span style="color:#676E95;"> getRandomInt</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">Integer</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">min</span><span style="color:#676E95;"> \u6700\u5C0F\u503C</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">Integer</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">max</span><span style="color:#676E95;"> \u6700\u5927\u503C</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">Integer</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> \u968F\u673A\u8303\u56F4\u5185\u6570\u503C</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getRandomInt</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//25</span></span>
<span class="line"></span></code></pre></div><h2 id="getrandomstring" tabindex="-1">getRandomString <a class="header-anchor" href="#getrandomstring" aria-hidden="true">#</a></h2><blockquote><p>\u83B7\u53D6\u968F\u673A\u957F\u5EA6\u5B57\u7B26\u4E32</p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">funcs</span><span style="color:#676E95;"> getRandomString</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">Integer</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">length</span><span style="color:#676E95;"> \u751F\u6210\u7684\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u9ED8\u8BA416</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">String</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> \u968F\u673A\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getRandomString</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//78d1z5zj</span></span>
<span class="line"></span></code></pre></div>`,10),e=[p];function t(r,c,y,i,d,D){return a(),n("div",null,e)}const A=s(o,[["render",t]]);export{C as __pageData,A as default};
