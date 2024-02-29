import{_ as c,r as p,o as r,c as D,b as s,a as n,w as l,d as a,e as t}from"./app-DBeBKcYQ.js";const i={},d=s("h1",{id:"docker-安装-mac-os",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#docker-安装-mac-os"},[s("span",null,"Docker 安装 Mac OS")])],-1),y={class:"table-of-contents"},h=t(`<h2 id="1-准备条件" tabindex="-1"><a class="header-anchor" href="#1-准备条件"><span>1. 准备条件</span></a></h2><p>下面的操作需要在 Linux 系统中进行，如果你的系统是 Windows，可以使用 WSL2 或者虚拟机。</p><p>由于 Mac OS 系统较大，安装需要足够大的空间，建议准备 30 GB 以上的空间用于存放软件。</p><blockquote><p>在 WSL2 中，下面的准备可以跳过，目前 WSL2 已经默认支持了 X11 和 KVM。</p></blockquote><p>需要支持硬件虚拟化（使用 KVM），查看：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">grep</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-Eoc</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;(vmx|svm)&#39;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">/proc/cpuinfo</span></span>
<span class="line"></span></code></pre></div>`,6),u={href:"https://github.com/sickcodes/Docker-OSX",target:"_blank",rel:"noopener noreferrer"},E=t(`<div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">sudo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">apt</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">qemu-kvm</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">libvirt-daemon-system</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">libvirt-clients</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">bridge-utils</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">virtinst</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">virt-manager</span></span>
<span class="line"></span></code></pre></div><p>查看 KVM 是否安装成功：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">sudo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">systemctl</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">is-active</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">libvirtd</span></span>
<span class="line"></span></code></pre></div><p>如果返回 <code>active</code>，则表示安装成功。</p><h2 id="2-docker-安装-mac-os" tabindex="-1"><a class="header-anchor" href="#2-docker-安装-mac-os"><span>2. Docker 安装 Mac OS</span></a></h2><p>可以先拉取合适的镜像：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">pull</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">sickcodes/docker-osx:latest</span></span>
<span class="line"></span></code></pre></div><p>默认拉取的镜像是 Catalina (Mac OS 10.x)，当前可供选择的镜像如下：</p><table><thead><tr><th>镜像</th><th>版本</th></tr></thead><tbody><tr><td><code>sickcodes/docker-osx:big-sur</code></td><td>Big Sur (Mac OS 11.x)</td></tr><tr><td><code>sickcodes/docker-osx:monterey</code></td><td>Monterey (Mac OS 12.x)</td></tr><tr><td><code>sickcodes/docker-osx:ventura</code></td><td>Ventura (Mac OS 13.x)</td></tr></tbody></table>`,9),C={href:"https://github.com/sickcodes/Docker-OSX",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>使用下面的命令可以启动 Mac OS：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">run</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-it</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">--device</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">/dev/kvm</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">--name</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">docker-osx</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">-p</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">50922</span><span style="color:#CE9178;">:10022</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">-v</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">/tmp/.X11-unix:/tmp/.X11-unix</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">-e</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">DISPLAY=</span><span style="color:#9CDCFE;">$DISPLAY</span><span style="color:#D4D4D4;"> </span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">sickcodes/docker-osx:latest</span></span>
<span class="line"></span></code></pre></div><p>此时会弹出一个窗口，等待一段时间后，会进入 Mac OS 的安装界面。</p><h2 id="3-初始化-mac-os" tabindex="-1"><a class="header-anchor" href="#3-初始化-mac-os"><span>3. 初始化 Mac OS</span></a></h2><p>在 QEMU 中，使用 <code>Ctrl + Alt + F</code> 可以切换显示全屏。</p><p>第一次进入后需要使用 <strong>Disk Utility</strong> 对磁盘进行格式化，然后安装系统。</p><p>点击 <strong>Erase</strong> 进行格式化，将第一块磁盘（最大的一块）格式化为 <strong>APFS</strong>（或其他 Mac OS 支持的磁盘格式），然后退出磁盘工具，选择 <strong>Reinstall macOS</strong>，然后选择刚刚格式化的磁盘进行安装。</p><p>等待 20 分钟左右，就可以进入 Mac OS 系统了。</p><h2 id="4-安装软件" tabindex="-1"><a class="header-anchor" href="#4-安装软件"><span>4. 安装软件</span></a></h2><p>第一次使用开发工具，需要安装 Xcode Command Line Tools：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">xcode-select</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--install</span></span>
<span class="line"></span></code></pre></div><p>使用清华镜像安装 Oh My Zsh：<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">clone</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">https://mirrors.tuna.tsinghua.edu.cn/git/ohmyzsh.git</span></span>
<span class="line"><span style="color:#DCDCAA;">cd</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">ohmyzsh/tools</span></span>
<span class="line"><span style="color:#9CDCFE;">REMOTE</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">https://mirrors.tuna.tsinghua.edu.cn/git/ohmyzsh.git</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">sh</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install.sh</span></span>
<span class="line"></span></code></pre></div><p>下面安装 Homebrew：<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p>在 <code>~/.zshrc</code> 中添加下面的代码：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">HOMEBREW_API_DOMAIN</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/api&quot;</span></span>
<span class="line"><span style="color:#569CD6;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">HOMEBREW_BOTTLE_DOMAIN</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles&quot;</span></span>
<span class="line"><span style="color:#569CD6;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">HOMEBREW_BREW_GIT_REMOTE</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git&quot;</span></span>
<span class="line"><span style="color:#569CD6;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">HOMEBREW_CORE_GIT_REMOTE</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git&quot;</span></span>
<span class="line"><span style="color:#569CD6;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">HOMEBREW_PIP_INDEX_URL</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;https://pypi.tuna.tsinghua.edu.cn/simple&quot;</span></span>
<span class="line"></span></code></pre></div><p>然后刷新：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">source</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">~/.zshrc</span></span>
<span class="line"></span></code></pre></div><p>然后使用镜像安装 Homebrew：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">clone</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--depth=1</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/install.git</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">brew-install</span></span>
<span class="line"><span style="color:#DCDCAA;">/bin/bash</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">brew-install/install.sh</span></span>
<span class="line"><span style="color:#DCDCAA;">rm</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-rf</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">brew-install</span></span>
<span class="line"></span></code></pre></div><p>执行更新，测试安装是否成功：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">brew</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">update</span></span>
<span class="line"></span></code></pre></div><hr class="footnotes-sep">`,23),g={class:"footnotes"},k={class:"footnotes-list"},m={id:"footnote1",class:"footnote-item"},_={href:"https://mirrors.tuna.tsinghua.edu.cn/help/ohmyzsh.git/",target:"_blank",rel:"noopener noreferrer"},f=s("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),x={id:"footnote2",class:"footnote-item"},A={href:"https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/",target:"_blank",rel:"noopener noreferrer"},v=s("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function M(O,S){const o=p("router-link"),e=p("ExternalLinkIcon");return r(),D("div",null,[d,s("nav",y,[s("ul",null,[s("li",null,[n(o,{to:"#1-准备条件"},{default:l(()=>[a("1. 准备条件")]),_:1})]),s("li",null,[n(o,{to:"#2-docker-安装-mac-os"},{default:l(()=>[a("2. Docker 安装 Mac OS")]),_:1})]),s("li",null,[n(o,{to:"#3-初始化-mac-os"},{default:l(()=>[a("3. 初始化 Mac OS")]),_:1})]),s("li",null,[n(o,{to:"#4-安装软件"},{default:l(()=>[a("4. 安装软件")]),_:1})])])]),h,s("p",null,[a("安装 KVM 管理软件（以 Debian/Ubuntu 为例，其他系统参见 "),s("a",u,[a("GitHub 项目主页文档"),n(e)]),a("）：")]),E,s("p",null,[a("详情见 "),s("a",C,[a("GitHub 项目主页"),n(e)]),a("。")]),b,s("section",g,[s("ol",k,[s("li",m,[s("p",null,[a("ohmyzsh Git，清华大学开源软件镜像站，"),s("a",_,[a("https://mirrors.tuna.tsinghua.edu.cn/help/ohmyzsh.git/"),n(e)]),a(),f])]),s("li",x,[s("p",null,[a("Homebrew / Linuxbrew 镜像使用帮助，清华大学开源软件镜像站，"),s("a",A,[a("https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/"),n(e)]),a(),v])])])])])}const B=c(i,[["render",M],["__file","mac-osx.html.vue"]]);export{B as default};