import{_ as t,r as n,o,c,b as a,a as r,w as d,d as e,e as p}from"./app-bd1d9ffa.js";const i={},l=a("h1",{id:"apt-使用代理",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#apt-使用代理","aria-hidden":"true"},"#"),e(" APT 使用代理")],-1),u={class:"hint-container warning"},h=a("p",{class:"hint-container-title"},"注意",-1),_=p(`<h2 id="apt-代理" tabindex="-1"><a class="header-anchor" href="#apt-代理" aria-hidden="true">#</a> APT 代理</h2><p>一次性使用：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token parameter variable">-o</span> Acquire::socks::proxy<span class="token operator">=</span><span class="token string">&quot;socks5://127.0.0.1:10808/&quot;</span> update
</code></pre></div><p>保存配置到文件：</p><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>Acquire::socks::proxy &quot;socks5://127.0.0.1:1080/&quot;;
</code></pre></div><p>可保存到 <code>/etc/apt/apt.conf.d/</code> 下的任意文件即可。</p>`,6);function f(g,x){const s=n("Badge");return o(),c("div",null,[l,a("div",u,[h,a("p",null,[r(s,{type:"danger"},{default:d(()=>[e("TODO")]),_:1}),e(" 需要更多的用法以解决各种不适用情况。")])]),_])}const m=t(i,[["render",f],["__file","use-proxy.html.vue"]]);export{m as default};
