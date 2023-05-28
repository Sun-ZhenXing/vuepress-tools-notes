import{_ as e,r as l,o,c as p,b as s,a as c,w as i,d as n,e as r}from"./app-5a7fdd32.js";const t={},d=s("h1",{id:"添加用户",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#添加用户","aria-hidden":"true"},"#"),n(" 添加用户")],-1),u={class:"table-of-contents"},D=r(`<h2 id="_1-debian-ubuntu-系统" tabindex="-1"><a class="header-anchor" href="#_1-debian-ubuntu-系统" aria-hidden="true">#</a> 1. Debian/Ubuntu 系统</h2><p>下面以添加 <code>admin</code> 用户为例。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#6A9955;"># 在 root 用户下执行</span></span>
<span class="line"><span style="color:#DCDCAA;">useradd</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-r</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-m</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-s</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">/bin/bash</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 如果没有提示设置密码，可以设置密码</span></span>
<span class="line"><span style="color:#DCDCAA;">passwd</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 添加到 sudo 组</span></span>
<span class="line"><span style="color:#DCDCAA;">usermod</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-aG</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">sudo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 切换到 admin 用户</span></span>
<span class="line"><span style="color:#DCDCAA;">su</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">admin</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function b(m,v){const a=l("router-link");return o(),p("div",null,[d,s("nav",u,[s("ul",null,[s("li",null,[c(a,{to:"#_1-debian-ubuntu-系统"},{default:i(()=>[n("1. Debian/Ubuntu 系统")]),_:1})])])]),D])}const _=e(t,[["render",b],["__file","add-user.html.vue"]]);export{_ as default};