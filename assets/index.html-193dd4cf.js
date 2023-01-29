import{_ as s,M as t,p as c,q as o,R as a,N as i,V as l,t as n,a1 as r}from"./framework-d3922052.js";const d={},p=a("h1",{id:"vim",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vim","aria-hidden":"true"},"#"),n(" Vim")],-1),m={class:"table-of-contents"},h=r(`<h2 id="编译安装-vim" tabindex="-1"><a class="header-anchor" href="#编译安装-vim" aria-hidden="true">#</a> 编译安装 Vim</h2><p>克隆仓库：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/vim/vim.git <span class="token parameter variable">--depth</span> <span class="token number">1</span>
</code></pre></div><p>编译代码，并安装：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> vim/src

<span class="token comment"># 如果之前编译过，清空构建</span>
<span class="token comment"># make distclean</span>

<span class="token function">make</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre></div>`,5);function u(_,k){const e=t("router-link");return c(),o("div",null,[p,a("nav",m,[a("ul",null,[a("li",null,[i(e,{to:"#编译安装-vim"},{default:l(()=>[n("编译安装 Vim")]),_:1})])])]),h])}const f=s(d,[["render",u],["__file","index.html.vue"]]);export{f as default};
