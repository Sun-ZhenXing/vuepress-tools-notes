import{_ as r,M as n,p as c,q as p,R as a,N as s,V as l,t as e,a1 as i}from"./framework-8980b429.js";const d={},u=a("h1",{id:"docker-部署-minecraft-pe-服务器",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#docker-部署-minecraft-pe-服务器","aria-hidden":"true"},"#"),e(" Docker 部署 Minecraft PE 服务器")],-1),_={class:"table-of-contents"},h=a("div",{class:"hint-container warning"},[a("p",{class:"hint-container-title"},"待补充"),a("p",null,"部分信息不详细，需要补充。")],-1),k=a("h2",{id:"_1-下载程序并创建容器",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-下载程序并创建容器","aria-hidden":"true"},"#"),e(" 1. 下载程序并创建容器")],-1),m={href:"https://www.minecraft.net/zh-hans/download/server/bedrock",target:"_blank",rel:"noopener noreferrer"},f=i(`<p>创建容器：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> mc-pe <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">19132</span>:19132/udp <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">19133</span>:19133/udp <span class="token punctuation">\\</span>
    <span class="token parameter variable">--volume</span> <span class="token string">&quot;<span class="token environment constant">$PWD</span>/mincraft-pe&quot;</span>:/root <span class="token punctuation">\\</span>
    ubuntu:20.04
</code></pre></div><p>将下载的文件放到 <code>$PWD/mincraft-pe</code> 下面，然后将启动命令作为服务运行。</p><p>其运行命令为：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span>. ./bedrock_server
</code></pre></div>`,5);function v(b,g){const t=n("router-link"),o=n("ExternalLinkIcon");return c(),p("div",null,[u,a("nav",_,[a("ul",null,[a("li",null,[s(t,{to:"#_1-下载程序并创建容器"},{default:l(()=>[e("1. 下载程序并创建容器")]),_:1})])])]),h,k,a("p",null,[e("在 "),a("a",m,[e("基岩版服务器下载页面"),s(o)]),e(" 下载基岩版 Linux 程序。")]),f])}const w=r(d,[["render",v],["__file","minecraft-pe-server.html.vue"]]);export{w as default};