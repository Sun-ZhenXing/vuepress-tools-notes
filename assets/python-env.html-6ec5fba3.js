import{_ as i,r as p,o as l,c as o,b as n,a as e,w as t,d as a,e as c}from"./app-bd1d9ffa.js";const r={},u=n("h1",{id:"docker-搭建基本-python-环境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-搭建基本-python-环境","aria-hidden":"true"},"#"),a(" Docker 搭建基本 Python 环境")],-1),d={class:"table-of-contents"},m=c(`<h2 id="_1-python-官方镜像" tabindex="-1"><a class="header-anchor" href="#_1-python-官方镜像" aria-hidden="true">#</a> 1. Python 官方镜像</h2><p>如果需要立即可用的 Python 可从 Python 镜像查找。例如：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull python:3.10.10-alpine3.17
</code></pre></div><p>下文将基于 Ubuntu 22.04。</p><h2 id="_2-ubuntu-创建-python-环境" tabindex="-1"><a class="header-anchor" href="#_2-ubuntu-创建-python-环境" aria-hidden="true">#</a> 2. Ubuntu 创建 Python 环境</h2><p>创建容器：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span><span class="token operator">=</span>auto-reg <span class="token punctuation">\\</span>
    ubuntu:22.04 <span class="token punctuation">\\</span>
    /bin/bash

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> auto-reg /bin/bash
</code></pre></div><p>进入容器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span>

<span class="token comment"># 可选，使用镜像源</span>
<span class="token function">mv</span> /etc/apt/sources.list /etc/apt/sources.list.bak
<span class="token builtin class-name">echo</span> <span class="token string">&#39;deb http://mirrors.aliyun.com/ubuntu/ jammy main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse
&#39;</span> <span class="token operator">&gt;</span> /etc/apt/sources.list

<span class="token function">apt</span> update
<span class="token function">apt</span> upgrade <span class="token parameter variable">-y</span>

<span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> python3-pip

<span class="token comment"># 使用镜像更新 pip</span>
python3 <span class="token parameter variable">-m</span> pip <span class="token function">install</span> <span class="token parameter variable">-i</span> https://pypi.tuna.tsinghua.edu.cn/simple <span class="token parameter variable">--upgrade</span> pip
pip3 config <span class="token builtin class-name">set</span> global.extra-index-url <span class="token string">&quot;https://pypi.tuna.tsinghua.edu.cn/simple/ https://mirrors.aliyun.com/pypi/simple/ https://repo.huaweicloud.com/repository/pypi/simple/ https://mirrors.bfsu.edu.cn/pypi/web/simple/&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">执行脚本示例</p><p>复制本地代码并进入后台运行：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> test_code.zip auto-reg:/root
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> auto-reg /bin/bash
</code></pre></div><p>进入容器后，执行下面的命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">unzip</span>
<span class="token comment"># 安装所需依赖</span>
<span class="token function">unzip</span> test_code.zip <span class="token parameter variable">-d</span> test_code
<span class="token function">rm</span> test_code.zip
<span class="token builtin class-name">cd</span> test_code
pip3 <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt
<span class="token function">nohup</span> python3 reg_with_email.py <span class="token operator">&amp;</span>
</code></pre></div></div>`,10);function b(h,v){const s=p("router-link");return l(),o("div",null,[u,n("nav",d,[n("ul",null,[n("li",null,[e(s,{to:"#_1-python-官方镜像"},{default:t(()=>[a("1. Python 官方镜像")]),_:1})]),n("li",null,[e(s,{to:"#_2-ubuntu-创建-python-环境"},{default:t(()=>[a("2. Ubuntu 创建 Python 环境")]),_:1})])])]),m])}const y=i(r,[["render",b],["__file","python-env.html.vue"]]);export{y as default};
