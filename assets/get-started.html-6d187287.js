import{_ as a,p as s,q as n,a1 as e}from"./framework-d3922052.js";const t={},p=e(`<h1 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用" aria-hidden="true">#</a> 开始使用</h1><h2 id="_1-使用-ubuntu-镜像" tabindex="-1"><a class="header-anchor" href="#_1-使用-ubuntu-镜像" aria-hidden="true">#</a> 1. 使用 Ubuntu 镜像</h2><p>拉取最新的的 Ubuntu 镜像：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull ubuntu:latest
</code></pre></div><p>查看镜像：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre></div><p>使用镜像创建容器，并运行：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span> ubuntu-test ubuntu
</code></pre></div><h2 id="_2-更多操作速记" tabindex="-1"><a class="header-anchor" href="#_2-更多操作速记" aria-hidden="true">#</a> 2. 更多操作速记</h2><p>如果一个容器停止运行了，可以手动启动它：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start <span class="token operator">&lt;</span>container_name<span class="token operator">|</span>ID<span class="token operator">&gt;</span>
</code></pre></div><p>如果需要进入容器内的终端，可以执行 <code>bash</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>container_name<span class="token operator">|</span>ID<span class="token operator">&gt;</span> /bin/bash
</code></pre></div><p>也可以手动停止一个容器：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop <span class="token operator">&lt;</span>container_name<span class="token operator">|</span>ID<span class="token operator">&gt;</span>
</code></pre></div><p>从文件中导入镜像：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> load <span class="token parameter variable">--input</span> <span class="token operator">&lt;</span>image_file<span class="token operator">&gt;</span>.tar.gz
</code></pre></div><p>复制容器内的文件到主机：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> <span class="token operator">&lt;</span>container_name<span class="token operator">|</span>ID<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>file_path<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>host_path<span class="token operator">&gt;</span>
</code></pre></div><p>复制主机文件到容器：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> <span class="token operator">&lt;</span>host_file<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>container_name<span class="token operator">|</span>ID<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>container_path<span class="token operator">&gt;</span>
</code></pre></div>`,21),o=[p];function c(r,l){return s(),n("div",null,o)}const i=a(t,[["render",c],["__file","get-started.html.vue"]]);export{i as default};