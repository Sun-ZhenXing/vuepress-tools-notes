import{_ as o,r as p,o as c,c as t,b as s,a as e,w as l,d as a,e as r}from"./app-5a7fdd32.js";const i={},d=s("h1",{id:"系统信息",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#系统信息","aria-hidden":"true"},"#"),a(" 系统信息")],-1),D={class:"table-of-contents"},h=r(`<h2 id="_1-查看系统概述信息" tabindex="-1"><a class="header-anchor" href="#_1-查看系统概述信息" aria-hidden="true">#</a> 1. 查看系统概述信息</h2><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">systeminfo</span></span>
<span class="line"></span></code></pre></div><p>可以输出为表格、列表或者 CSV 的格式，为了程序读取方便，可以使用 CSV 格式输出。</p><p>为了防止乱码，可以先设置编码为 UTF-8。</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">chcp</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">65001</span></span>
<span class="line"><span style="color:#DCDCAA;">systeminfo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">/fo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">csv</span><span style="color:#D4D4D4;"> &gt; </span><span style="color:#CE9178;">systeminfo.csv</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-查看系统详细信息" tabindex="-1"><a class="header-anchor" href="#_2-查看系统详细信息" aria-hidden="true">#</a> 2. 查看系统详细信息</h2><div class="hint-container warning"><p class="hint-container-title">过时信息</p><p>在 Windows 10 21H1 及以后的系统中，<code>wmic</code> 被声明为过时的命令，不再推荐使用。可以使用 PowerShell for WMI 替代。</p><p>查看 PowerShell for WMI 的可用命令：</p><div class="language-powershell" data-ext="powershell"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">Get-Command</span><span style="color:#D4D4D4;"> -Noun WMI*</span></span>
<span class="line"></span></code></pre></div></div><p><code>wmic</code> 是 Windows Management Instrumentation Command-line 的缩写，是一个命令行工具，可以用来获取系统信息。<code>wmic</code> 不支持 UTF-8 编码。</p><p>下面是一些常用的命令。</p><p>获取系统信息：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">wmic</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">os</span></span>
<span class="line"></span></code></pre></div><p>获取 CPU 核心数：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">wmic</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">cpu</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">get</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">NumberOfCores</span></span>
<span class="line"></span></code></pre></div><p>获取 CPU 逻辑处理器数：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">wmic</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">cpu</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">get</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">NumberOfLogicalProcessors</span></span>
<span class="line"></span></code></pre></div><p>获取内存信息：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">wmic</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">memorychip</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">get</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">capacity</span></span>
<span class="line"></span></code></pre></div>`,17);function y(u,C){const n=p("router-link");return c(),t("div",null,[d,s("nav",D,[s("ul",null,[s("li",null,[e(n,{to:"#_1-查看系统概述信息"},{default:l(()=>[a("1. 查看系统概述信息")]),_:1})]),s("li",null,[e(n,{to:"#_2-查看系统详细信息"},{default:l(()=>[a("2. 查看系统详细信息")]),_:1})])])]),h])}const m=o(i,[["render",y],["__file","systeminfo.html.vue"]]);export{m as default};