import{_ as i,r as p,o as l,c,b as n,a as e,w as t,d as s,e as o}from"./app-bd1d9ffa.js";const d={},r=n("h1",{id:"共享文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#共享文件","aria-hidden":"true"},"#"),s(" 共享文件")],-1),u={class:"table-of-contents"},v=o(`<h2 id="_1-开启-http-服务" tabindex="-1"><a class="header-anchor" href="#_1-开启-http-服务" aria-hidden="true">#</a> 1. 开启 HTTP 服务</h2><h3 id="_1-1-使用-python" tabindex="-1"><a class="header-anchor" href="#_1-1-使用-python" aria-hidden="true">#</a> 1.1 使用 Python</h3><p>Python3 自带 HTTP 服务器，但速度慢于下面要介绍的 Nginx 和 <code>http-server</code> 服务器程序。</p><p>安装 Python3：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>pkg <span class="token function">install</span> python
</code></pre></div><p>启动服务器：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>python <span class="token parameter variable">-m</span> http.server <span class="token number">8888</span>
</code></pre></div><h3 id="_1-2-使用-nginx" tabindex="-1"><a class="header-anchor" href="#_1-2-使用-nginx" aria-hidden="true">#</a> 1.2 使用 Nginx</h3><p>Nginx 是目前速度最快的服务器程序之一。如果没有使用过 Nginx，您可以在网络上查找 Nginx 的资料，有大量配置 Nginx 的视频和文章。</p><p>安装 Nginx 的命令如下：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>pkg <span class="token function">install</span> nginx
</code></pre></div><p>配置方式和传统的 Nginx 没有差别，除了配置文件在 <code>/data/data/com.termux/files/usr/etc/nginx/</code> 目录下面。</p><h3 id="_1-3-使用-http-server" tabindex="-1"><a class="header-anchor" href="#_1-3-使用-http-server" aria-hidden="true">#</a> 1.3 使用 http-server</h3><p><code>http-server</code> 是基于 Node.js 的 Web 文件服务器，所以需要安装 Node.js：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 Node.js</span>
pkg <span class="token function">install</span> nodejs-lts

<span class="token comment"># 安装 http-server</span>
<span class="token function">npm</span> i <span class="token parameter variable">-g</span> http-server
</code></pre></div><p>启动服务器：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>http-server
</code></pre></div><h2 id="_2-ftp-服务" tabindex="-1"><a class="header-anchor" href="#_2-ftp-服务" aria-hidden="true">#</a> 2. FTP 服务</h2><h3 id="_2-1-sftp-服务器" tabindex="-1"><a class="header-anchor" href="#_2-1-sftp-服务器" aria-hidden="true">#</a> 2.1 SFTP 服务器</h3><p>首先需要安装下面的组件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>pkg <span class="token function">install</span> openssh
pkg <span class="token function">install</span> pure-ftpd
</code></pre></div><p>为了能远程登录，需要知道用户名和密码，并开启 SSH 服务：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 ip 地址</span>
<span class="token function">ip</span> addr

<span class="token comment"># 查看用户名</span>
<span class="token function">whoami</span>

<span class="token comment"># （可选）修改密码，重复输入两遍即可</span>
<span class="token function">passwd</span>

<span class="token comment"># 启动 ssh  服务</span>
sshd

<span class="token comment"># 启动 SFTP 服务</span>
pure-ftpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后可以在同一个局域网下，使用 SFTP 协议登录手机 IP。用户名为 <code>$(whoami)</code>，密码为刚才修改的密码，端口为 <code>8022</code>。登录成功即可远程管理手机上全部文件（必须是有权限的文件）。</p><p>使用 SFTP 协议复制、删除、移动文件的速度很快，实测传输超过 30 MB/s，快于 HTTP 服务器。</p><p><code>Ctrl+C</code> 即可中断服务，然后关闭 SSH 服务：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pkill</span> sshd
</code></pre></div><h2 id="_3-第三方应用" tabindex="-1"><a class="header-anchor" href="#_3-第三方应用" aria-hidden="true">#</a> 3. 第三方应用</h2><h3 id="_3-1-kodbox" tabindex="-1"><a class="header-anchor" href="#_3-1-kodbox" aria-hidden="true">#</a> 3.1 KodBox</h3><p>KodBox 是一款企业网盘应用，提供有限的免费支持版本，能满足大部分场景的个人文件管理需求。</p><p>需要安装 Nginx 和 PHP 扩展：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>pkg <span class="token function">install</span> nginx
pkg <span class="token function">install</span> php
pkg <span class="token function">install</span> php-fpm
</code></pre></div><p>然后安装 KodBox，例如安装到 <code>/kod</code> 目录下：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> kodbox <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> kodbox
<span class="token function">wget</span> https://static.kodcloud.com/update/download/kodbox.1.37.zip
<span class="token function">unzip</span> kodbox.1.37.zip <span class="token parameter variable">-d</span> <span class="token variable">$PREFIX</span>/share/nginx/html/kod
</code></pre></div><p>下面配置 Nginx 解析 PHP 文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> <span class="token variable">$PREFIX</span>/etc/php-fpm.d/www.conf
</code></pre></div><p>将 <code>listen = /data/data/com.termux/files/usr/var/run/php-fpm.sock</code> 修改为 <code>listen = 127.0.0.1:9000</code> 即可。</p><p>现在配置 Nginx：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> <span class="token variable">$PREFIX</span>/etc/nginx/nginx.conf
</code></pre></div><p>如果不了解 Nginx 如何配置 PHP 解析，可以参考下面的配置示例。</p><details class="hint-container details"><summary>Nginx 配置示例</summary><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  auto</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">8080</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   /data/data/com.termux/files/usr/share/nginx/html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm index.php</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   /data/data/com.termux/files/usr/share/nginx/html</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token directive"><span class="token keyword">location</span> ~ \\.php$</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>           html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">fastcgi_pass</span>   127.0.0.1:9000</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">fastcgi_index</span>  index.php</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">fastcgi_param</span>  SCRIPT_FILENAME  /data/data/com.termux/files/usr/share/nginx/html<span class="token variable">$fastcgi_script_name</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">include</span>        fastcgi_params</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>下面打开页面 <code>http://localhost:8080/kod/</code> 即可访问 KodBox。</p>`,42);function k(h,m){const a=p("router-link");return l(),c("div",null,[r,n("nav",u,[n("ul",null,[n("li",null,[e(a,{to:"#_1-开启-http-服务"},{default:t(()=>[s("1. 开启 HTTP 服务")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#_1-1-使用-python"},{default:t(()=>[s("1.1 使用 Python")]),_:1})]),n("li",null,[e(a,{to:"#_1-2-使用-nginx"},{default:t(()=>[s("1.2 使用 Nginx")]),_:1})]),n("li",null,[e(a,{to:"#_1-3-使用-http-server"},{default:t(()=>[s("1.3 使用 http-server")]),_:1})])])]),n("li",null,[e(a,{to:"#_2-ftp-服务"},{default:t(()=>[s("2. FTP 服务")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#_2-1-sftp-服务器"},{default:t(()=>[s("2.1 SFTP 服务器")]),_:1})])])]),n("li",null,[e(a,{to:"#_3-第三方应用"},{default:t(()=>[s("3. 第三方应用")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#_3-1-kodbox"},{default:t(()=>[s("3.1 KodBox")]),_:1})])])])])]),v])}const g=i(d,[["render",k],["__file","share-file.html.vue"]]);export{g as default};
