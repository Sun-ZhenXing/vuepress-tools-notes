import{_ as c,r as i,o,c as p,b as s,a as e,w as l,d as n,e as d}from"./app-c6e9f3a7.js";const t={},r=s("h1",{id:"虚拟磁盘管理",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#虚拟磁盘管理","aria-hidden":"true"},"#"),n(" 虚拟磁盘管理")],-1),u=s("p",null,[n("本文全部基于 "),s("code",null,".vhdx"),n(" 文件。")],-1),v={class:"table-of-contents"},h=d(`<h2 id="1-压缩虚拟磁盘" tabindex="-1"><a class="header-anchor" href="#1-压缩虚拟磁盘" aria-hidden="true">#</a> 1. 压缩虚拟磁盘</h2><p>虚拟磁盘文件不会自动释放空间，如果你删除了很多文件，则需要手动压缩磁盘文件。</p><p><code>.vhdx</code> 文件压缩：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#6A9955;"># 关闭 WSL</span></span>
<span class="line"><span style="color:#DCDCAA;">wsl</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--shutdown</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 磁盘管理</span></span>
<span class="line"><span style="color:#DCDCAA;">diskpart</span></span>
<span class="line"></span></code></pre></div><p>在磁盘管理中进行如下操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#6A9955;"># 选择磁盘文件</span></span>
<span class="line"><span style="color:#C586C0;">select</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">vdisk</span><span style="color:#D4D4D4;"> file=</span><span style="color:#CE9178;">&quot;...\\ext4.vhdx&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 压缩虚拟磁盘文件</span></span>
<span class="line"><span style="color:#DCDCAA;">compact</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">vdisk</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 卸载虚拟磁盘，如出错可忽略</span></span>
<span class="line"><span style="color:#DCDCAA;">detach</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">vdisk</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 退出</span></span>
<span class="line"><span style="color:#DCDCAA;">exit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="2-卸载虚拟磁盘" tabindex="-1"><a class="header-anchor" href="#2-卸载虚拟磁盘" aria-hidden="true">#</a> 2. 卸载虚拟磁盘</h2><p><code>.vhdx</code> 文件卸载：</p><ol><li>设备管理器：卸载虚拟磁盘驱动器</li><li>磁盘管理器：刷新/分离 VHD</li></ol>`,9);function D(_,b){const a=i("router-link");return o(),p("div",null,[r,u,s("nav",v,[s("ul",null,[s("li",null,[e(a,{to:"#1-压缩虚拟磁盘"},{default:l(()=>[n("1. 压缩虚拟磁盘")]),_:1})]),s("li",null,[e(a,{to:"#2-卸载虚拟磁盘"},{default:l(()=>[n("2. 卸载虚拟磁盘")]),_:1})])])]),h])}const m=c(t,[["render",D],["__file","vhd.html.vue"]]);export{m as default};
