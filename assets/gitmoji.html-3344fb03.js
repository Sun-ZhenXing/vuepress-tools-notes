import{_ as o,M as p,p as i,q as c,R as n,t as s,N as e,a1 as t}from"./framework-35149b8f.js";const r={},l=n("h1",{id:"gitmoji",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitmoji","aria-hidden":"true"},"#"),s(" gitmoji")],-1),d={href:"https://gitmoji.dev/",target:"_blank",rel:"noopener noreferrer"},u=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;:bug: Fix ...&quot;</span>
</code></pre></div><p>这样我们可以看到 <code>🐛 Fix ...</code> 这样的信息。各种不同表情的含义可以直接在上面的网站上看到。</p><h2 id="扩展功能" tabindex="-1"><a class="header-anchor" href="#扩展功能" aria-hidden="true">#</a> 扩展功能</h2>`,3),m={href:"https://github.com/carloscuesta/gitmoji-cli",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"gitmoji-cli",-1),v=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> gitmoji-cli
</code></pre></div><p>如果需要引用该项目的所有表情，可以：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i gitmojis
</code></pre></div><p>这样可以得到包含所有表情信息的数组：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> gitmojis <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;gitmojis&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gitmojis<span class="token punctuation">)</span>

<span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;🎨&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">entity</span><span class="token operator">:</span> <span class="token string">&#39;&amp;#x1f3a8;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;:art:&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;Improve structure / format of the code.&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;art&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">semver</span><span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function g(h,b){const a=p("ExternalLinkIcon");return i(),c("div",null,[l,n("p",null,[s("提交时使用表情是个好主意。访问 "),n("a",d,[s("gitmoji.dev"),e(a)]),s(" 来查看更多内容。")]),u,n("p",null,[s("可以安装 "),n("a",m,[k,e(a)]),s(" 来尝试更花哨的功能：")]),v])}const f=o(r,[["render",g],["__file","gitmoji.html.vue"]]);export{f as default};
