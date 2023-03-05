import{_ as t,M as e,p,q as l,R as a,N as n,V as r,t as s,a1 as i}from"./framework-546207d5.js";const d={},k=a("h1",{id:"docker-compose-入门指南",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#docker-compose-入门指南","aria-hidden":"true"},"#"),s(" Docker Compose 入门指南")],-1),u={class:"table-of-contents"},m=a("h2",{id:"_1-安装-docker-compose",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-安装-docker-compose","aria-hidden":"true"},"#"),s(" 1. 安装 Docker Compose")],-1),b={href:"https://github.com/docker/compose/releases/latest",target:"_blank",rel:"noopener noreferrer"},v=i('<p>从 GitHub 下载：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">compose_version</span><span class="token operator">=</span>v2.16.0\n<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/docker/compose/releases/download/<span class="token variable">${compose_version}</span>/docker-compose-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">`</span></span>-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">`</span></span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose\n</code></pre></div><p>从国内镜像下载：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">compose_version</span><span class="token operator">=</span>v2.16.0\n<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://get.daocloud.io/docker/compose/releases/download/<span class="token variable">${compose_version}</span>/docker-compose-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">`</span></span>-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">`</span></span> <span class="token operator">&gt;</span> /usr/local/bin/docker-compose\n</code></pre></div><p>建立软链接，并查看版本：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose\n<span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/docker-compose /usr/bin/docker-compose\n<span class="token function">docker-compose</span> version\n</code></pre></div>',6);function _(h,f){const o=e("router-link"),c=e("ExternalLinkIcon");return p(),l("div",null,[k,a("nav",u,[a("ul",null,[a("li",null,[n(o,{to:"#_1-安装-docker-compose"},{default:r(()=>[s("1. 安装 Docker Compose")]),_:1})])])]),m,a("p",null,[s("可用在官方仓库查看其最新版本 "),a("a",b,[s("GitHub"),n(c)]),s("。")]),v])}const x=t(d,[["render",_],["__file","get-started.html.vue"]]);export{x as default};
