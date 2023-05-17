import{_ as r,r as e,o as p,c as l,b as s,a as n,w as i,d as a,f as d,e as o}from"./app-bd1d9ffa.js";const k={},u=s("h1",{id:"docker-compose-入门指南",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#docker-compose-入门指南","aria-hidden":"true"},"#"),a(" Docker Compose 入门指南")],-1),m={class:"table-of-contents"},_=s("h2",{id:"_1-安装-docker-compose",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-安装-docker-compose","aria-hidden":"true"},"#"),a(" 1. 安装 Docker Compose")],-1),h={href:"https://github.com/docker/compose/releases/latest",target:"_blank",rel:"noopener noreferrer"},b=o('<p>从 GitHub 下载：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">compose_version</span><span class="token operator">=</span>v2.16.0\n<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/docker/compose/releases/download/<span class="token variable">${compose_version}</span>/docker-compose-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">`</span></span>-<span class="token variable"><span class="token variable">`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">`</span></span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose\n</code></pre></div>',2),v=o(`<p>建立软链接，并查看版本：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
<span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/docker-compose /usr/bin/docker-compose
<span class="token function">docker-compose</span> version
</code></pre></div>`,2);function f(g,x){const t=e("router-link"),c=e("ExternalLinkIcon");return p(),l("div",null,[u,s("nav",m,[s("ul",null,[s("li",null,[n(t,{to:"#_1-安装-docker-compose"},{default:i(()=>[a("1. 安装 Docker Compose")]),_:1})])])]),_,s("p",null,[a("可用在官方仓库查看其最新版本 "),s("a",h,[a("GitHub"),n(c)]),a("。")]),b,d(" 不要加入国内镜像！因为不可靠，暂时不考虑使用国内镜像。 "),v])}const N=r(k,[["render",f],["__file","get-started.html.vue"]]);export{N as default};
