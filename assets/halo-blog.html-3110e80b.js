import{_ as t,M as p,p as c,q as o,R as s,t as n,N as e,a1 as i}from"./framework-35c50e38.js";const l={},r=s("h1",{id:"halo-博客搭建",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#halo-博客搭建","aria-hidden":"true"},"#"),n(" Halo 博客搭建")],-1),d={href:"https://halo.run/",target:"_blank",rel:"noopener noreferrer"},k=s("p",null,"Halo 现在有版本 1.x 和 2.x，这两者并不兼容，插件生态有区别，可以根据需求选择。",-1),u={href:"https://docs.halo.run/getting-started/install/docker-compose/",target:"_blank",rel:"noopener noreferrer"},v=i(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> ~/halo <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> ~/halo
</code></pre></div><p>复制上述文档中的 <code>docker-compose.yml</code> 文件到当前目录。</p><p>可以选择和 MySQL、PostgreSQL 配置项目：</p><ul><li><code>--halo.external-url=https://example.com/</code>：配置访问地址，如果不配置无法使用</li><li><code>--spring.r2dbc.password=...</code>：配置数据库密码，两个地方都需要改</li><li><code>--halo.security.initializer.superadminusername=admin</code>：配置管理员用户名</li><li><code>--halo.security.initializer.superadminpassword=...</code>：配置管理员密码</li></ul><p>然后配置一个 Nginx 反向代理，在宿主机上可用的配置如下：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">user</span> www-data</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">worker_processes</span> auto</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">768</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">128m</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> www.example.com example.com</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">return</span> <span class="token number">301</span> https://example.com<span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> www.example.com</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">ssl_certificate</span> cert/example.com.pem</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">ssl_certificate_key</span> cert/example.com.key</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">return</span> <span class="token number">301</span> https://example.com<span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span> example.com</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">ssl_certificate</span> cert/example.com.pem</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">ssl_certificate_key</span> cert/example.com.key</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8090</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(b,_){const a=p("ExternalLinkIcon");return c(),o("div",null,[r,s("p",null,[s("a",d,[n("Halo"),e(a)]),n(" 是个人博客系统。")]),k,s("p",null,[n("建议 "),s("a",u,[n("使用 Docker Compose 部署 Halo"),e(a)]),n("。")]),v])}const w=t(l,[["render",m],["__file","halo-blog.html.vue"]]);export{w as default};
