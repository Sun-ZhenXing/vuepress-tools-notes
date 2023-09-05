import{_ as o,r as p,o as c,c as t,b as s,d as n,a as l,e}from"./app-d51d1d5c.js";const r={},i=s("h1",{id:"gitmoji",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#gitmoji","aria-hidden":"true"},"#"),n(" gitmoji")],-1),D={href:"https://gitmoji.dev/",target:"_blank",rel:"noopener noreferrer"},d=e(`<div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">commit</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-m</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;:bug: Fix ...&quot;</span></span>
<span class="line"></span></code></pre></div><p>这样我们可以看到 <code>🐛 Fix ...</code> 这样的信息。各种不同表情的含义可以直接在上面的网站上看到。</p><h2 id="扩展功能" tabindex="-1"><a class="header-anchor" href="#扩展功能" aria-hidden="true">#</a> 扩展功能</h2>`,3),y={href:"https://github.com/carloscuesta/gitmoji-cli",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"gitmoji-cli",-1),u=e(`<div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">i</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-g</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">gitmoji-cli</span></span>
<span class="line"></span></code></pre></div><p>如果需要引用该项目的所有表情，可以：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">i</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">gitmojis</span></span>
<span class="line"></span></code></pre></div><p>这样可以得到包含所有表情信息的数组：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">gitmojis</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;gitmojis&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">gitmojis</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">[</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">emoji:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;🎨&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">entity:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;&amp;#x1f3a8;&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">code:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;:art:&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">description:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Improve structure / format of the code.&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;art&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">semver:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">null</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function v(C,h){const a=p("ExternalLinkIcon");return c(),t("div",null,[i,s("p",null,[n("提交时使用表情是个好主意。访问 "),s("a",D,[n("gitmoji.dev"),l(a)]),n(" 来查看更多内容。")]),d,s("p",null,[n("可以安装 "),s("a",y,[m,l(a)]),n(" 来尝试更花哨的功能：")]),u])}const b=o(r,[["render",v],["__file","gitmoji.html.vue"]]);export{b as default};