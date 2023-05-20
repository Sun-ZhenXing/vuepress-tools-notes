import{_ as l,r as e,o as i,c as p,b as s,d as n,a as c,e as o}from"./app-0737dd7e.js";const r={},d=s("h1",{id:"推荐阅读",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#推荐阅读","aria-hidden":"true"},"#"),n(" 推荐阅读")],-1),t={href:"https://www.sqlsec.com/2018/05/termux.html",target:"_blank",rel:"noopener noreferrer"},v=o(`<details class="hint-container details"><summary>打印样式优化</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#9CDCFE;">document</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">head</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">insertAdjacentHTML</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;beforeend&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">\`&lt;style&gt;</span></span>
<span class="line"><span style="color:#CE9178;">@media print {</span></span>
<span class="line"><span style="color:#CE9178;">    #page-header,</span></span>
<span class="line"><span style="color:#CE9178;">    #aside-content,</span></span>
<span class="line"><span style="color:#CE9178;">    #post-comment,</span></span>
<span class="line"><span style="color:#CE9178;">    #rightside,</span></span>
<span class="line"><span style="color:#CE9178;">    #footer,</span></span>
<span class="line"><span style="color:#CE9178;">    div.tag_share,</span></span>
<span class="line"><span style="color:#CE9178;">    div.post-reward,</span></span>
<span class="line"><span style="color:#CE9178;">    #pagination,</span></span>
<span class="line"><span style="color:#CE9178;">    div.relatedPosts,</span></span>
<span class="line"><span style="color:#CE9178;">    div.post-copyright,</span></span>
<span class="line"><span style="color:#CE9178;">    #post &gt; hr {</span></span>
<span class="line"><span style="color:#CE9178;">        display: none !important;</span></span>
<span class="line"><span style="color:#CE9178;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">    figure {</span></span>
<span class="line"><span style="color:#CE9178;">        page-break-inside: avoid;</span></span>
<span class="line"><span style="color:#CE9178;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">    #post {</span></span>
<span class="line"><span style="color:#CE9178;">        width: 100%;</span></span>
<span class="line"><span style="color:#CE9178;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">    #content-inner {</span></span>
<span class="line"><span style="color:#CE9178;">        display: block;</span></span>
<span class="line"><span style="color:#CE9178;">        margin: 0;</span></span>
<span class="line"><span style="color:#CE9178;">        max-width: 100%;</span></span>
<span class="line"><span style="color:#CE9178;">        padding: 0;</span></span>
<span class="line"><span style="color:#CE9178;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">    code[class*=&quot;language-&quot;] {</span></span>
<span class="line"><span style="color:#CE9178;">        white-space: pre-wrap;</span></span>
<span class="line"><span style="color:#CE9178;">    }</span></span>
<span class="line"><span style="color:#CE9178;">}</span></span>
<span class="line"><span style="color:#CE9178;">&lt;/style&gt;\`</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function m(u,y){const a=e("ExternalLinkIcon");return i(),p("div",null,[d,s("p",null,[s("a",t,[n("Termux 高级终端安装使用配置教程"),c(a)]),n("，如果需要打印此文章可以将下面的 JS 脚本注入页面，用于优化样式。")]),v])}const E=l(r,[["render",m],["__file","recommend.html.vue"]]);export{E as default};
