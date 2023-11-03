import{_ as n,r as l,o as t,c as o,b as s,a as c,w as p,d as a,e as r}from"./app-dc4e475d.js";const d={},i=s("h1",{id:"开始使用-wsl2",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#开始使用-wsl2","aria-hidden":"true"},"#"),a(" 开始使用 WSL2")],-1),h={class:"table-of-contents"},u=r(`<h2 id="1-安装" tabindex="-1"><a class="header-anchor" href="#1-安装" aria-hidden="true">#</a> 1. 安装</h2><p>如果系统支持，可以尝试命令安装：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">wsl</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--install</span></span>
<span class="line"></span></code></pre></div><p>也可以到商店中下载任意一个 Linux 发行版即可，如 Ubuntu、Debian、Kali 等。</p><p>安装后运行即可，第一次运行可能会要求输入用户名和密码。</p><p>如果提示内核版本过低等问题，可以直接更新内核：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">wsl</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--update</span></span>
<span class="line"></span></code></pre></div><p>其他有关 WSL2 的问题可以参考帮助命令：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">wsl</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--help</span></span>
<span class="line"></span></code></pre></div><p>进入默认 Linux 系统：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">wsl</span></span>
<span class="line"></span></code></pre></div>`,11);function _(D,b){const e=l("router-link");return t(),o("div",null,[i,s("nav",h,[s("ul",null,[s("li",null,[c(e,{to:"#1-安装"},{default:p(()=>[a("1. 安装")]),_:1})])])]),u])}const k=n(d,[["render",_],["__file","get-started.html.vue"]]);export{k as default};