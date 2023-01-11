import{_ as i,M as p,p as o,q as c,R as n,N as e,V as t,t as s,a1 as l}from"./framework-35149b8f.js";const r={},d=n("h1",{id:"docker-安装-wordpress",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-安装-wordpress","aria-hidden":"true"},"#"),s(" Docker 安装 WordPress")],-1),u={class:"table-of-contents"},v=l(`<h2 id="_1-docker-创建容器" tabindex="-1"><a class="header-anchor" href="#_1-docker-创建容器" aria-hidden="true">#</a> 1. Docker 创建容器</h2><p>确保已经安装 Docker，如果没有安装请搜索在你的系统上安装 Docker，当前测试系统是 Debian 11.5。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 MySQL 5.7</span>
<span class="token function">docker</span> container run <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> wordpressdb <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">MYSQL_DATABASE</span><span class="token operator">=</span>wordpress <span class="token punctuation">\\</span>
  mysql:5.7

<span class="token comment"># 安装 WordPress，把文件保存在当前路径的 ./wordpress 路径下</span>
<span class="token comment"># 将 8081 可以改为你需要暴露的端口</span>
<span class="token function">docker</span> container run <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">8081</span>:80 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> wordpress <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">WORDPRESS_DB_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--link</span> wordpressdb:mysql <span class="token punctuation">\\</span>
  <span class="token parameter variable">--volume</span> <span class="token string">&quot;<span class="token environment constant">$PWD</span>/wordpress&quot;</span>:/var/www/html <span class="token punctuation">\\</span>
  wordpress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后编辑 <code>./wordpress/wp-config.php</code> 文件中的用户名和密码：</p><div class="language-php" data-ext="php"><pre class="language-php"><code><span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;DB_NAME&#39;</span><span class="token punctuation">,</span> <span class="token function">getenv_docker</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;WORDPRESS_DB_NAME&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;wordpress&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;DB_USER&#39;</span><span class="token punctuation">,</span> <span class="token function">getenv_docker</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;WORDPRESS_DB_USER&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;root&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">define</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;DB_PASSWORD&#39;</span><span class="token punctuation">,</span> <span class="token function">getenv_docker</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;WORDPRESS_DB_PASSWORD&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;123456&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>打开地址即可即可使用 WordPress。</p><h2 id="_2-修改最大上传限制" tabindex="-1"><a class="header-anchor" href="#_2-修改最大上传限制" aria-hidden="true">#</a> 2. 修改最大上传限制</h2><p>修改的 PHP 配置，进入容器：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> wordpress /bin/bash
</code></pre></div><p>下面的命令执行在 Docker 容器内：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/etc/php/

<span class="token comment"># 查看默认最大限制</span>
<span class="token function">cat</span> php.ini-production <span class="token operator">|</span> <span class="token function">grep</span> upload_max_filesize
<span class="token function">cat</span> php.ini-production <span class="token operator">|</span> <span class="token function">grep</span> post_max_size
<span class="token function">cat</span> php.ini-production <span class="token operator">|</span> <span class="token function">grep</span> memory_limit

<span class="token comment"># 生成 php.ini</span>
<span class="token function">cp</span> php.ini-production php.ini
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/upload_max_filesize = 2M/upload_max_filesize = 128M/g&quot;</span> php.ini
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/post_max_size = 8M/post_max_size = 256M/g&quot;</span> php.ini
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/memory_limit = 128M/memory_limit = 512M/g&quot;</span> php.ini
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重启 WordPress 镜像：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> restart wordpress
</code></pre></div><p>现在已经配置完成了，打开地址即可访问，上传限制也可以该为你设定的其他值。</p><h2 id="_3-wordpress-容器内安装-vim" tabindex="-1"><a class="header-anchor" href="#_3-wordpress-容器内安装-vim" aria-hidden="true">#</a> 3. WordPress 容器内安装 Vim</h2><div class="hint-container danger"><p class="hint-container-title">修改系统库</p><p>在 WordPress 容器内安装 <code>vim</code> 可能会遇到修改系统库 <code>libtinfo5</code> 的问题。<code>libtinfo5</code> 是系统基础库，修改可能触发系统崩溃。</p></div><p>不建议更改容器内的设定，如果你一定需要的话可以按照下面设定进行：</p><p>进入容器：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> wordpress /bin/bash
</code></pre></div><p>下面的操作都在容器中进行。</p><p>先修改软件镜像源，可以使用下面的命令修改为清华源：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mv</span> /etc/apt/sources.list /etc/apt/sources.list-bak
<span class="token builtin class-name">echo</span> <span class="token string">&#39;
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch main non-free contrib
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-updates main non-free contrib
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-backports main non-free contrib
deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch main non-free contrib
deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-updates main non-free contrib
deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-backports main non-free contrib
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security/ stretch/updates main non-free contrib
deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security/ stretch/updates main non-free contrib
&#39;</span> <span class="token operator">&gt;</span> /etc/apt/sources.list
<span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试安装 <code>vim</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">vim</span>
</code></pre></div><p>如果报错提示 <code>libtinfo5</code> 版本不对，重新安装 <code>libtinfo5</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> libtinfo5 --allow-remove-essential
<span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> ncurses-base
<span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">vim</span>
</code></pre></div>`,26);function k(m,b){const a=p("router-link");return o(),c("div",null,[d,n("nav",u,[n("ul",null,[n("li",null,[e(a,{to:"#_1-docker-创建容器"},{default:t(()=>[s("1. Docker 创建容器")]),_:1})]),n("li",null,[e(a,{to:"#_2-修改最大上传限制"},{default:t(()=>[s("2. 修改最大上传限制")]),_:1})]),n("li",null,[e(a,{to:"#_3-wordpress-容器内安装-vim"},{default:t(()=>[s("3. WordPress 容器内安装 Vim")]),_:1})])])]),v])}const g=i(r,[["render",k],["__file","install-wordpress.html.vue"]]);export{g as default};
