import{_ as t,r as c,o as r,c as l,b as a,a as n,w as o,d as e,e as d}from"./app-bd1d9ffa.js";const p={},i=a("h1",{id:"基于-wsl-2-的-docker-配置说明",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#基于-wsl-2-的-docker-配置说明","aria-hidden":"true"},"#"),e(" 基于 WSL 2 的 Docker 配置说明")],-1),h={class:"table-of-contents"},u=d('<h2 id="_1-修改容器配置" tabindex="-1"><a class="header-anchor" href="#_1-修改容器配置" aria-hidden="true">#</a> 1. 修改容器配置</h2><p>容器配置一般在 <code>\\\\wsl.localhost\\docker-desktop-data\\data\\docker\\containers\\${ID}\\hostconfig.json</code> 位置，其中 <code>${ID}</code> 为此容器的 ID。</p><p>查看 Docker 容器的 ID 可使用下面的命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> inspect <span class="token variable">${name}</span> <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token string">&quot;{{.ID}}&quot;</span>\n</code></pre></div><p>其中 <code>${name}</code> 为容器的 ID 或名称。</p><h2 id="_1-1-修改共享内存" tabindex="-1"><a class="header-anchor" href="#_1-1-修改共享内存" aria-hidden="true">#</a> 1.1 修改共享内存</h2><p>在创建容器时指定共享内存大小：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> --shm-size<span class="token operator">=</span><span class="token string">&quot;1g&quot;</span> ubuntu\n</code></pre></div><p>一般训练的时候对共享内存需求很大，所以我们需要修改共享内存，最合理的共享内存大小是电脑内存的 25% 然后四舍五入到整数的数值。</p><p>查看共享内存大小：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">df</span> <span class="token parameter variable">-lh</span> <span class="token operator">|</span> <span class="token function">grep</span> shm\n</code></pre></div><p>找到上述配置文件，然后修改 <code>shm_size</code> 条目的值即可，单位是 KB。</p>',12);function _(k,f){const s=c("router-link");return r(),l("div",null,[i,a("nav",h,[a("ul",null,[a("li",null,[n(s,{to:"#_1-修改容器配置"},{default:o(()=>[e("1. 修改容器配置")]),_:1})]),a("li",null,[n(s,{to:"#_1-1-修改共享内存"},{default:o(()=>[e("1.1 修改共享内存")]),_:1})])])]),u])}const m=t(p,[["render",_],["__file","wsl-docker-config.html.vue"]]);export{m as default};
