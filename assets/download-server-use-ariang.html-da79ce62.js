import{_ as p,M as r,p as l,q as o,R as a,N as e,V as t,t as n,a1 as c}from"./framework-d3922052.js";const i={},d=a("h1",{id:"docker-搭载-ariang-服务器",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#docker-搭载-ariang-服务器","aria-hidden":"true"},"#"),n(" Docker 搭载 AriaNg 服务器")],-1),u={class:"table-of-contents"},k=c(`<h2 id="_1-创建容器" tabindex="-1"><a class="header-anchor" href="#_1-创建容器" aria-hidden="true">#</a> 1. 创建容器</h2><p>拉取镜像：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull p3terx/aria2-pro
<span class="token function">docker</span> pull p3terx/ariang
</code></pre></div><p>创建 Aria2 容器，将 <code>&lt;rpc_password&gt;</code> 改为你自定义的 RPC 密码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> aria2 <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span> unless-stopped <span class="token punctuation">\\</span>
    --log-opt max-size<span class="token operator">=</span>1m <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">UMASK_SET</span><span class="token operator">=</span>022 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">RPC_SECRET</span><span class="token operator">=</span><span class="token operator">&lt;</span>rpc_password<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">RPC_PORT</span><span class="token operator">=</span><span class="token number">6800</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">LISTEN_PORT</span><span class="token operator">=</span><span class="token number">6888</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">16800</span>:6800 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">16888</span>:6888 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">16888</span>:6888/udp <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token environment constant">$HOME</span>/config:/config <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token environment constant">$HOME</span>/downloads:/downloads <span class="token punctuation">\\</span>
    p3terx/aria2-pro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建 AriaNg 下载客户端：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> ariang <span class="token punctuation">\\</span>
    --log-opt max-size<span class="token operator">=</span>1m <span class="token punctuation">\\</span>
    <span class="token parameter variable">--restart</span> unless-stopped <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">16880</span>:6880 <span class="token punctuation">\\</span>
    p3terx/ariang
</code></pre></div><h2 id="_2-配置设置" tabindex="-1"><a class="header-anchor" href="#_2-配置设置" aria-hidden="true">#</a> 2. 配置设置</h2><h3 id="_2-1-配置-rpc-设置" tabindex="-1"><a class="header-anchor" href="#_2-1-配置-rpc-设置" aria-hidden="true">#</a> 2.1 配置 RPC 设置</h3><p>打开 <code>http://&lt;ip&gt;:16880/</code>，然后点击 AriaNg 设置，点击 RPC。</p><p>将 Aria2 RPC 地址的端口号改为 <code>16800</code>，然后填写 Aria2 RPC 秘钥（即你自定义的密码）。</p><p>刷新页面即可看到已连接。现在可以进行离线下载了。</p><h3 id="_2-2-配置百度网盘直链下载设置" tabindex="-1"><a class="header-anchor" href="#_2-2-配置百度网盘直链下载设置" aria-hidden="true">#</a> 2.2 配置百度网盘直链下载设置</h3><p>要下载百度网盘直链，需要：</p><ol><li>将 Aria2 设置 / HTTP / 自定义 User Agent 设置为 <code>netdisk;PC</code>（此配置项可参考最新解析工具）</li><li>（建议）将单服务器最大连接数设置为 <code>4</code></li></ol>`,15);function v(m,b){const s=r("router-link");return l(),o("div",null,[d,a("nav",u,[a("ul",null,[a("li",null,[e(s,{to:"#_1-创建容器"},{default:t(()=>[n("1. 创建容器")]),_:1})]),a("li",null,[e(s,{to:"#_2-配置设置"},{default:t(()=>[n("2. 配置设置")]),_:1}),a("ul",null,[a("li",null,[e(s,{to:"#_2-1-配置-rpc-设置"},{default:t(()=>[n("2.1 配置 RPC 设置")]),_:1})]),a("li",null,[e(s,{to:"#_2-2-配置百度网盘直链下载设置"},{default:t(()=>[n("2.2 配置百度网盘直链下载设置")]),_:1})])])])])]),k])}const _=p(i,[["render",v],["__file","download-server-use-ariang.html.vue"]]);export{_ as default};