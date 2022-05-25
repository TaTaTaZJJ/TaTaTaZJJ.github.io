import{_ as a}from"./Tip.1aee295d.js";import{g as t,o,c as p,b as e,a as c,w as u,h as r,i as l}from"./app.a48edf9b.js";var k="/assets/vscode-c.3ddaa8ab.png",i="/assets/vscode-nativedebug.4190fb24.png",q="/assets/vscode-task.04e60e69.png",d="/assets/task-new.00ab58fc.png";const g={class:"prose prose-sm m-auto text-left"},m=r('<h2>VSCode\u63D2\u4EF6\u548C\u8BBE\u7F6E</h2><p>\u4E2A\u4EBA\u63A8\u8350\u8FD9\u4E9B\u63D2\u4EF6</p><h3>C\u8BED\u6CD5\u9AD8\u4EAE</h3><p>\u5FC5\u5907\uFF0C\u9AD8\u4EAE\u80FD\u8BA9\u4F60\u7684\u4EE3\u7801\u53EF\u8BFB\u6027\u66F4\u9AD8\u3002 <img src="'+k+'" alt="vscode-c"></p><h3>\u8C03\u8BD5</h3><p>\u53EF\u9009\uFF0C\u5982\u679C\u4F60\u6539\u52A8\u6216\u8005\u65B0\u589E\u4E86\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD9\u63D2\u4EF6\u53EF\u4EE5\u66F4\u6709\u6548\u7684\u5E2E\u4F60\u5904\u7406\u8C03\u8BD5\u3002 <img src="'+i+'" alt="vscode-nativedebug"></p><h3>\u6D41\u7A0B\u7BA1\u7406</h3><p>\u53EF\u9009\uFF0C\u53EF\u89C6\u5316\u6307\u4EE4\uFF0C <img src="'+q+`" alt="vscode-task"></p><p>\u5728\u6839\u76EE\u5F55\u65B0\u5EFA<code>.vscode</code>\u6587\u4EF6\u5939\uFF0C\u7136\u540E\u5728\u8BE5\u6587\u4EF6\u5939\u91CC\u65B0\u5EFA<code>task.json</code>\uFF0C\u5185\u5BB9\u8303\u672C\u5982\u4E0B\uFF1A</p><pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>
 <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0&quot;</span><span class="token punctuation">,</span>
 <span class="token property">&quot;tasks&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
   <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Build Debug&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shell&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;make&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;DINFO=1&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;-j$(nproc)&quot;</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">&quot;problemMatcher&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;$gcc&quot;</span>
   <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
   <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Build Release&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shell&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;make&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;-j$(nproc)&quot;</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">&quot;problemMatcher&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;$gcc&quot;</span>
   <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><p>\u7136\u540E\u5C31\u53EF\u4EE5\u5728vscode\u7684\u5DE6\u4E0B\u89D2\u4EFB\u52A1\u680F\u91CC\u7684\u770B\u5230\u8FD9\u4E2A\u6307\u4EE4\uFF0C\u4EE5\u540E\u76F4\u63A5\u8FD0\u884C\u5C31\u4E0D\u9700\u8981\u6253\u8FD9\u4E48\u957F\u7684\u6307\u4EE4\u91CC\u3002 <img src="`+d+'" alt="task-new"></p>',11),_=l("\u8C03\u8BD5\u7684\u65F6\u5019\u9009\u62E9Build Debug, \u53D1\u5E03\u7684\u65F6\u5019\u53EF\u4EE5\u9009\u62E9Build Release\u7F16\u8BD1\u3002"),C={title:"VSCode\u63D2\u4EF6\u548C\u8BBE\u7F6E",meta:[{property:"og:title",content:"VSCode\u63D2\u4EF6\u548C\u8BBE\u7F6E"}]},S={setup(h,{expose:s}){return t({title:"VSCode\u63D2\u4EF6\u548C\u8BBE\u7F6E",meta:[{property:"og:title",content:"VSCode\u63D2\u4EF6\u548C\u8BBE\u7F6E"}]}),s({frontmatter:{title:"VSCode\u63D2\u4EF6\u548C\u8BBE\u7F6E",meta:[{property:"og:title",content:"VSCode\u63D2\u4EF6\u548C\u8BBE\u7F6E"}]}}),(v,b)=>{const n=a;return o(),p("div",g,[m,e("p",null,[c(n,null,{default:u(()=>[_]),_:1})])])}}};export{S as default,C as frontmatter};
