import{_ as e,r as o,o as l,c as p,b as s,a as t,w as c,d as a,e as r}from"./app-cc07cb32.js";const D={},d=s("h1",{id:"云服务器创建-swap-分区",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#云服务器创建-swap-分区","aria-hidden":"true"},"#"),a(" 云服务器创建 swap 分区")],-1),i={class:"table-of-contents"},u=r(`<h2 id="_1-debian-ubuntu-系统" tabindex="-1"><a class="header-anchor" href="#_1-debian-ubuntu-系统" aria-hidden="true">#</a> 1. Debian/Ubuntu 系统</h2><p>许多云服务器提供商默认不提供 swap 分区，需要自行创建。</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">sudo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">su</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">dd</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">if=/dev/zero</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">of=/var/swap</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">bs=</span><span style="color:#B5CEA8;">1024</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">count=</span><span style="color:#B5CEA8;">4096000</span></span>
<span class="line"><span style="color:#DCDCAA;">mkswap</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">/var/swap</span></span>
<span class="line"><span style="color:#DCDCAA;">chmod</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">0600</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">/var/swap</span></span>
<span class="line"><span style="color:#DCDCAA;">swapon</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">/var/swap</span></span>
<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;/var/swap swap swap defaults 0 0&quot;</span><span style="color:#D4D4D4;"> &gt;&gt; </span><span style="color:#CE9178;">/etc/fstab</span></span>
<span class="line"></span></code></pre></div>`,3);function y(C,_){const n=o("router-link");return l(),p("div",null,[d,s("nav",i,[s("ul",null,[s("li",null,[t(n,{to:"#_1-debian-ubuntu-系统"},{default:c(()=>[a("1. Debian/Ubuntu 系统")]),_:1})])])]),u])}const b=e(D,[["render",y],["__file","swap.html.vue"]]);export{b as default};
