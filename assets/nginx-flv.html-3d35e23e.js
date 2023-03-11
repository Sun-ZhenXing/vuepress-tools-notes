import{_ as d,M as c,p as k,q as v,R as n,N as e,V as s,t as a,a1 as r}from"./framework-546207d5.js";const m={},g=n("h1",{id:"docker-部署-rtmp-流媒体服务器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-部署-rtmp-流媒体服务器","aria-hidden":"true"},"#"),a(" Docker 部署 RTMP 流媒体服务器")],-1),b=n("p",null,"Docker 部署 RTMP 流媒体服务器，在一端使用 RTMP 协议推流，并在前端播放直播内容。",-1),h={class:"table-of-contents"},f=n("h2",{id:"_1-创建-docker-容器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-创建-docker-容器","aria-hidden":"true"},"#"),a(" 1. 创建 Docker 容器")],-1),_=n("p",null,"拉取镜像：",-1),x=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"docker"),a(` pull ubuntu:20.04
`)])])],-1),y=n("p",null,"创建 Docker 容器：",-1),w=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"docker"),a(" run "),n("span",{class:"token parameter variable"},"-itd"),a(),n("span",{class:"token punctuation"},"\\"),a(`
    `),n("span",{class:"token parameter variable"},"--name"),a(" nginx-flv "),n("span",{class:"token punctuation"},"\\"),a(`
    `),n("span",{class:"token parameter variable"},"-p"),a(),n("span",{class:"token number"},"1935"),a(":1935 "),n("span",{class:"token punctuation"},"\\"),a(`
    `),n("span",{class:"token parameter variable"},"-p"),a(),n("span",{class:"token number"},"8089"),a(":8089 "),n("span",{class:"token punctuation"},"\\"),a(`
    ubuntu:20.04 `),n("span",{class:"token punctuation"},"\\"),a(`
    /bin/bash
`)])])],-1),q=n("p",null,"拉取镜像：",-1),z=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"docker"),a(` pull centos:7.9.2009
`)])])],-1),P=n("p",null,"创建 Docker 容器：",-1),D=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"docker"),a(" run "),n("span",{class:"token parameter variable"},"-itd"),a(),n("span",{class:"token punctuation"},"\\"),a(`
    `),n("span",{class:"token parameter variable"},"--name"),a(" nginx-flv "),n("span",{class:"token punctuation"},"\\"),a(`
    `),n("span",{class:"token parameter variable"},"-p"),a(),n("span",{class:"token number"},"1935"),a(":1935 "),n("span",{class:"token punctuation"},"\\"),a(`
    `),n("span",{class:"token parameter variable"},"-p"),a(),n("span",{class:"token number"},"8089"),a(":8089 "),n("span",{class:"token punctuation"},"\\"),a(`
    centos:7.9.2009 `),n("span",{class:"token punctuation"},"\\"),a(`
    /bin/bash
`)])])],-1),C=r(`<p>然后进入容器：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> nginx-flv /bin/bash
</code></pre></div><p>下面的命令都在容器内执行。</p><h2 id="_2-源码编译" tabindex="-1"><a class="header-anchor" href="#_2-源码编译" aria-hidden="true">#</a> 2. 源码编译</h2>`,4),E=n("p",null,"请先配置好镜像源，然后更新并安装包：",-1),$=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"apt"),a(` update

`),n("span",{class:"token function"},"apt"),a(),n("span",{class:"token function"},"install"),a(" gcc "),n("span",{class:"token function"},"wget"),a(),n("span",{class:"token function"},"unzip"),a(),n("span",{class:"token function"},"make"),a(`
`),n("span",{class:"token function"},"apt"),a(),n("span",{class:"token function"},"install"),a(` openssl libssl-dev
`),n("span",{class:"token function"},"apt"),a(),n("span",{class:"token function"},"install"),a(` libpcre3 libpcre3-dev
`),n("span",{class:"token function"},"apt"),a(),n("span",{class:"token function"},"install"),a(` zlib1g-dev
`)])])],-1),A=n("p",null,"请先配置好镜像源，然后更新并安装包：",-1),I=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[a(`yum update

yum `),n("span",{class:"token function"},"install"),a(` gcc
yum `),n("span",{class:"token function"},"install"),a(` pcre pcre-devel
yum `),n("span",{class:"token function"},"install"),a(` openssl openssl-devel
yum `),n("span",{class:"token function"},"install"),a(),n("span",{class:"token function"},"wget"),a(),n("span",{class:"token function"},"unzip"),a(`
`)])])],-1),T={href:"http://nginx.org/",target:"_blank",rel:"noopener noreferrer"},N=r(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://nginx.org/download/nginx-1.23.3.tar.gz
<span class="token function">wget</span> https://github.com/winshining/nginx-http-flv-module/archive/refs/heads/master.zip
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.23.3.tar.gz
<span class="token function">unzip</span> master.zip

<span class="token builtin class-name">cd</span> nginx-1.23.3
./configure --with-http_ssl_module --with-http_secure_link_module --add-module<span class="token operator">=</span><span class="token punctuation">..</span>/nginx-http-flv-module-master
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre></div><p>下面修改 <code>/usr/local/nginx/conf/nginx.conf</code>：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span> auto</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">8089</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /flv</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">flv_live</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">chunked_transfer_encoding</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>

            <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">&#39;Access-Control-Allow-Origin&#39;</span> <span class="token string">&#39;*&#39;</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">&#39;Access-Control-Allow-Credentials&#39;</span> <span class="token string">&#39;true&#39;</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">rtmp_auto_push</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">rtmp</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">1935</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">notify_method</span> get</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/access.log</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">chunk_size</span> <span class="token number">4096</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">application</span> live</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">live</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">allow</span> publish all</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">allow</span> play all</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">drop_idle_publisher</span> <span class="token number">20s</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试、启动 Nginx：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/log/nginx
/usr/local/nginx/sbin/nginx <span class="token parameter variable">-t</span>
/usr/local/nginx/sbin/nginx s reload
</code></pre></div><h2 id="_3-直播推流" tabindex="-1"><a class="header-anchor" href="#_3-直播推流" aria-hidden="true">#</a> 3. 直播推流</h2><p>可以将下面的 <code>\${IP}</code> 替换为你的 IP 地址。推送视频 <code>test.mp4</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ffmpeg <span class="token parameter variable">-re</span> <span class="token parameter variable">-i</span> test.mp4 <span class="token parameter variable">-c</span> copy <span class="token parameter variable">-f</span> flv <span class="token string">&quot;rtmp://<span class="token variable">\${IP}</span>:1935/live/test&quot;</span>
</code></pre></div><p>拉取直播：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ffplay <span class="token string">&quot;rtmp://<span class="token variable">\${IP}</span>:1935/live/test&quot;</span>
</code></pre></div><p>推送摄像头内容：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ffmpeg <span class="token parameter variable">-f</span> dshow <span class="token parameter variable">-i</span> <span class="token assign-left variable">video</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${Your_Camera}</span>&quot;</span>:audio<span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${Your_Audio}</span>&quot;</span> <span class="token parameter variable">-vcodec</span> libx264 <span class="token parameter variable">-acodec</span> aac <span class="token parameter variable">-f</span> flv <span class="token string">&quot;rtmp://<span class="token variable">\${IP}</span>:1935/live/test&quot;</span>
</code></pre></div><p>将视频和音频设备名称填在上方命令的视频和音频位置上即可。</p><div class="hint-container tip"><p class="hint-container-title">查看摄像头</p><p>查看视频和音频设备：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ffmpeg <span class="token parameter variable">-list_devices</span> <span class="token boolean">true</span> <span class="token parameter variable">-f</span> dshow <span class="token parameter variable">-i</span> dummy
</code></pre></div><p>播放摄像头当前内容：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ffplay <span class="token parameter variable">-f</span> dshow <span class="token parameter variable">-i</span> <span class="token assign-left variable">video</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${Your_Camera}</span>&quot;</span>
</code></pre></div><p>也可以同时播放麦克风的内容，但最好戴上耳机，不然可能产生回声：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ffplay <span class="token parameter variable">-f</span> dshow <span class="token parameter variable">-i</span> <span class="token assign-left variable">video</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${Your_Camera}</span>&quot;</span>:audio<span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${Your_Audio}</span>&quot;</span>
</code></pre></div></div><p>测试代码如下，保存为 <code>index.html</code>：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>FLV Player<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcss.com/flv.js/1.6.2/flv.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>videoElement<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 80%</span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>controls<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">if</span> <span class="token punctuation">(</span>flvjs<span class="token punctuation">.</span><span class="token function">isSupported</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> videoElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;videoElement&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">var</span> flvPlayer <span class="token operator">=</span> flvjs<span class="token punctuation">.</span><span class="token function">createPlayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;flv&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://\${IP}:8089/flv?app=live&amp;stream=test&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      flvPlayer<span class="token punctuation">.</span><span class="token function">attachMediaElement</span><span class="token punctuation">(</span>videoElement<span class="token punctuation">)</span>
      flvPlayer<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      flvPlayer<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-使用-dockerfile" tabindex="-1"><a class="header-anchor" href="#_4-使用-dockerfile" aria-hidden="true">#</a> 4. 使用 Dockerfile</h2><p>推荐使用 <code>Dockerfile</code>，下载源代码，保存上述配置文件为 <code>nginx.conf</code>，然后构建。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-Lj</span> <span class="token parameter variable">-o</span> nginx-1.23.3.tar.gz http://nginx.org/download/nginx-1.23.3.tar.gz
<span class="token function">curl</span> <span class="token parameter variable">-Lj</span> <span class="token parameter variable">-o</span> nginx-http-flv-module-master.zip https://github.com/winshining/nginx-http-flv-module/archive/refs/heads/master.zip
</code></pre></div><p>下面是使用 Ubuntu 镜像为例的 <code>Dockerfile</code> 文件：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> ubuntu:20.04</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">COPY</span> nginx-1.23.3.tar.gz .</span>
<span class="token instruction"><span class="token keyword">COPY</span> nginx-http-flv-module-master.zip .</span>

<span class="token instruction"><span class="token keyword">RUN</span> apt update &amp;&amp; apt upgrade -y <span class="token operator">\\</span>
    &amp;&amp; apt install -y gcc wget unzip make tar <span class="token operator">\\</span>
    &amp;&amp; apt install -y openssl libssl-dev <span class="token operator">\\</span>
    &amp;&amp; apt install -y libpcre3 libpcre3-dev <span class="token operator">\\</span>
    &amp;&amp; apt install -y zlib1g-dev <span class="token operator">\\</span>
    &amp;&amp; tar -zxvf nginx-1.23.3.tar.gz <span class="token operator">\\</span>
    &amp;&amp; unzip nginx-http-flv-module-master.zip <span class="token operator">\\</span>
    &amp;&amp; rm nginx-http-flv-module-master.zip -rf <span class="token operator">\\</span>
    &amp;&amp; rm nginx-1.23.3.tar.gz -rf <span class="token operator">\\</span>
    &amp;&amp; cd nginx-1.23.3 <span class="token operator">\\</span>
    &amp;&amp; ./configure --with-http_ssl_module --with-http_secure_link_module --add-module=../nginx-http-flv-module-master <span class="token operator">\\</span>
    &amp;&amp; make <span class="token operator">\\</span>
    &amp;&amp; make install <span class="token operator">\\</span>
    &amp;&amp; cd ..</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 8089 1935</span>

<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;/usr/local/nginx/sbin/nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令构建并启动：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> nginx-flv:v1 <span class="token builtin class-name">.</span>
<span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> nginx-flv <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token environment constant">$PWD</span>/nginx.conf:/usr/local/nginx/conf/nginx.conf <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token environment constant">$PWD</span>/log:/var/log/nginx <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">1935</span>:1935 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">8089</span>:8089 <span class="token punctuation">\\</span>
    nginx-flv:v1
</code></pre></div>`,23);function O(R,Y){const t=c("router-link"),i=c("Tabs"),u=c("ExternalLinkIcon");return k(),v("div",null,[g,b,n("nav",h,[n("ul",null,[n("li",null,[e(t,{to:"#_1-创建-docker-容器"},{default:s(()=>[a("1. 创建 Docker 容器")]),_:1})]),n("li",null,[e(t,{to:"#_2-源码编译"},{default:s(()=>[a("2. 源码编译")]),_:1})]),n("li",null,[e(t,{to:"#_3-直播推流"},{default:s(()=>[a("3. 直播推流")]),_:1})]),n("li",null,[e(t,{to:"#_4-使用-dockerfile"},{default:s(()=>[a("4. 使用 Dockerfile")]),_:1})])])]),f,e(i,{id:"12",data:[{title:"Ubuntu 20.04"},{title:"CentOS 7.9.2009"}],"tab-id":"sys"},{tab0:s(({title:p,value:l,isActive:o})=>[_,x,y,w]),tab1:s(({title:p,value:l,isActive:o})=>[q,z,P,D]),_:1},8,["data"]),C,e(i,{id:"44",data:[{title:"Ubuntu 20.04"},{title:"CentOS 7.9.2009"}],"tab-id":"sys"},{tab0:s(({title:p,value:l,isActive:o})=>[E,$]),tab1:s(({title:p,value:l,isActive:o})=>[A,I]),_:1},8,["data"]),n("p",null,[a("编译 Nginx 和 HTTP-FLV，"),n("a",T,[a("Nginx 官网"),e(u)]),a(" 可以查看最新版本：")]),N])}const M=d(m,[["render",O],["__file","nginx-flv.html.vue"]]);export{M as default};
