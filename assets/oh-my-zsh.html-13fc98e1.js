import{_ as c,r as e,o as r,c as p,b as s,a as n,w as i,d as a,e as o}from"./app-d51d1d5c.js";const h={},d=s("h1",{id:"oh-my-zsh-指南",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#oh-my-zsh-指南","aria-hidden":"true"},"#"),a(" Oh-My-Zsh 指南")],-1),u={class:"table-of-contents"},D=o(`<h2 id="问题集合" tabindex="-1"><a class="header-anchor" href="#问题集合" aria-hidden="true">#</a> 问题集合</h2><p>更新失败：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">omz</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">update</span></span>
<span class="line"></span></code></pre></div>`,3),_={href:"https://github.blog/2021-09-01-improving-git-protocol-security-github/",target:"_blank",rel:"noopener noreferrer"},y=o(`<div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">cd</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$ZSH</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">remote</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">set-url</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">origin</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;https://github.com/ohmyzsh/ohmyzsh.git&quot;</span></span>
<span class="line"><span style="color:#DCDCAA;">omz</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">update</span></span>
<span class="line"></span></code></pre></div>`,1);function m(C,b){const t=e("router-link"),l=e("ExternalLinkIcon");return r(),p("div",null,[d,s("nav",u,[s("ul",null,[s("li",null,[n(t,{to:"#问题集合"},{default:i(()=>[a("问题集合")]),_:1})])])]),D,s("p",null,[a("出现无法连接 GitHub 的错误。原因是 "),s("a",_,[a("GitHub 已经不支持不安全的 Git 协议"),n(l)]),a("，需要修改远程地址：")]),y])}const E=c(h,[["render",m],["__file","oh-my-zsh.html.vue"]]);export{E as default};