import{_ as r,M as o,p as l,q as i,R as a,N as s,V as t,t as n,a1 as p}from"./framework-35149b8f.js";const d={},u=a("h1",{id:"docker-搭建深度学习环境",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#docker-搭建深度学习环境","aria-hidden":"true"},"#"),n(" Docker 搭建深度学习环境")],-1),k=a("p",null,"每一篇论文都可以使用不同的操作系统、Python 环境、CUDA 版本和其他依赖，为了复现论文或炼丹，通常需要大量的配置。如果能将 CUDA 驱动和 cuDNN 驱动都安装在不同容器中就可以做到每一个项目都是独立环境。",-1),h=a("p",null,"通过上一篇的远程 Docker 连接，我们可以调用远程 Docker 容器开发的能力了。本文将驱动 NVIDIA GPU 来提供 3D 加速或 CUDA 支持的 Docker 环境。",-1),v={class:"table-of-contents"},g=p(`<h2 id="_1-安装-nvidia-显卡驱动" tabindex="-1"><a class="header-anchor" href="#_1-安装-nvidia-显卡驱动" aria-hidden="true">#</a> 1. 安装 NVIDIA 显卡驱动</h2><p>条件：</p><ul><li>主机是 x86_64 架构计算机</li><li>主机拥有 CUDA 支持的 NVIDIA 显卡</li><li>主机安装 Ubuntu 20.04 或更高的系统，建议选择最稳定的，例如当前 Ubuntu 22 并未完全得到第三方支持，等到 Ubuntu 22 被各类生态支持后可以选择 Ubuntu 22</li></ul><p>必须要在主机上安装显卡驱动，但是不需要安装 CUDA 驱动和 cuDNN。</p><p>如果你的主机镜像中已经包含了 NVIDIA 镜像，请忽略这一步。</p><h3 id="_1-1-禁用-nouveau-驱动" tabindex="-1"><a class="header-anchor" href="#_1-1-禁用-nouveau-驱动" aria-hidden="true">#</a> 1.1 禁用 Nouveau 驱动</h3><p>在安装驱动之前需要禁用 Nouveau 驱动，可以通过下面的命令检查当前系统是否正在使用 Nouveau 驱动：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>lspci <span class="token operator">|</span> <span class="token function">grep</span> nouveau
</code></pre></div><p>编辑文件 <code>/etc/modprobe.d/blacklist.conf</code>，如果没有则创建，末尾加入两行：</p><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>blacklist nouveau
options nouveau modeset=0
</code></pre></div><p>更新配置，然后重启：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> update-initramfs <span class="token parameter variable">-u</span>
<span class="token function">sudo</span> <span class="token function">reboot</span>
</code></pre></div><p>重启后检查 Nouveau 驱动是否被禁用：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>lspci <span class="token operator">|</span> <span class="token function">grep</span> nouveau
</code></pre></div><p>如果没有内容则正常。</p><h3 id="_1-2-从-nvidia-官网下载安装" tabindex="-1"><a class="header-anchor" href="#_1-2-从-nvidia-官网下载安装" aria-hidden="true">#</a> 1.2 从 NVIDIA 官网下载安装</h3>`,16),b={href:"https://www.nvidia.cn/Download/index.aspx?lang=cn",target:"_blank",rel:"noopener noreferrer"},_=p(`<table><thead><tr><th>配置项</th><th>配置示例值</th></tr></thead><tbody><tr><td>产品类型</td><td>GeForce</td></tr><tr><td>产品系列</td><td>GeForce RTX 40 Series</td></tr><tr><td>产品家族</td><td>NVIDIA GeForce RTX 4090</td></tr><tr><td>操作系统</td><td>Linux 64-bit</td></tr><tr><td>下载类型</td><td>生产分支生</td></tr><tr><td>语言</td><td>English (US)</td></tr></tbody></table><p>点击搜索，同意协议后自动下载。</p><p>下载后运行即可：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">bash</span> ./NVIDIA-Linux-x86_64-xxx.xx.xx.run
</code></pre></div><p>安装时可以选择自动配置 Xorg，安装完成后检查驱动是否加载：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nvidia-smi
</code></pre></div><p>其中 <code>CUDA Version: xx.x</code> 表示你可以安装的最高版本的 CUDA，而不是你已安装的 CUDA 驱动版本。</p><h2 id="_2-安装-nvidia-docker2-相关组件" tabindex="-1"><a class="header-anchor" href="#_2-安装-nvidia-docker2-相关组件" aria-hidden="true">#</a> 2. 安装 nvidia-docker2 相关组件</h2><p>安装前确保 Docker 被正确安装。</p><p>加入软件镜像源：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">distribution</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">.</span> /etc/os-release<span class="token punctuation">;</span><span class="token builtin class-name">echo</span> $ID$VERSION_ID<span class="token variable">)</span></span> <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-L</span> https://nvidia.github.io/nvidia-docker/gpgkey <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> - <span class="token punctuation">\\</span>
    <span class="token operator">&amp;&amp;</span> <span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-L</span> https://nvidia.github.io/nvidia-docker/<span class="token variable">$distribution</span>/nvidia-docker.list <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/nvidia-docker.list
</code></pre></div><p>更新并安装：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nvidia-docker2
</code></pre></div><p>安装过程将自动安装 NVIDIA Container Toolkit。</p><p><code>default-runtime</code> 配置可以让 <code>docker run</code> 默认使用 nvidia-docker 组件提供的环境。此时 <code>/etc/docker/daemon.json</code> 配置如下：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;default-runtime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nvidia&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;runtimes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;nvidia&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nvidia-container-runtime&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;runtimeArgs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>如果你不修改配置，也可以在 <code>docker run</code> 时使用 <code>--runtime=nvidia</code> 来指定运行时。</p><p>重启 Docker 来应用：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre></div><p>现在，拉取镜像来测试是否可用：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> <span class="token parameter variable">--gpus</span> all nvidia/cuda:11.4.0-base-ubuntu20.04 nvidia-smi
</code></pre></div><p>如果正确打印了配置参数则表示正确。</p><h2 id="_3-使用镜像" tabindex="-1"><a class="header-anchor" href="#_3-使用镜像" aria-hidden="true">#</a> 3. 使用镜像</h2><p>创建容器命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nvidia-docker run -it<span class="token punctuation">\\</span>
    <span class="token parameter variable">--runtime</span><span class="token operator">=</span>nvidia<span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token operator">&lt;</span>宿主机绝对路径目录<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>容器内目录<span class="token operator">&gt;</span><span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> <span class="token operator">&lt;</span>容器名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>镜像名<span class="token operator">&gt;</span><span class="token punctuation">\\</span>
    /bin/bash
</code></pre></div>`,25);function f(m,x){const e=o("router-link"),c=o("ExternalLinkIcon");return l(),i("div",null,[u,k,h,a("nav",v,[a("ul",null,[a("li",null,[s(e,{to:"#_1-安装-nvidia-显卡驱动"},{default:t(()=>[n("1. 安装 NVIDIA 显卡驱动")]),_:1}),a("ul",null,[a("li",null,[s(e,{to:"#_1-1-禁用-nouveau-驱动"},{default:t(()=>[n("1.1 禁用 Nouveau 驱动")]),_:1})]),a("li",null,[s(e,{to:"#_1-2-从-nvidia-官网下载安装"},{default:t(()=>[n("1.2 从 NVIDIA 官网下载安装")]),_:1})])])]),a("li",null,[s(e,{to:"#_2-安装-nvidia-docker2-相关组件"},{default:t(()=>[n("2. 安装 nvidia-docker2 相关组件")]),_:1})]),a("li",null,[s(e,{to:"#_3-使用镜像"},{default:t(()=>[n("3. 使用镜像")]),_:1})])])]),g,a("p",null,[n("访问驱动下载的官方网站："),a("a",b,[n("https://www.nvidia.cn/Download/index.aspx?lang=cn"),s(c)]),n("，然后选择你的显卡。")]),_])}const I=r(d,[["render",f],["__file","deeplearning-env.html.vue"]]);export{I as default};
