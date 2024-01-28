import{_ as e,r as p,o as c,c as t,b as s,a as n,w as l,d as o,e as r}from"./app-THZs9_px.js";const D={},d=s("h1",{id:"-docker-常用命令汇总",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#-docker-常用命令汇总"},[s("span",null,"🚀 Docker 常用命令汇总")])],-1),i={class:"table-of-contents"},y=r(`<h2 id="1-安装-docker" tabindex="-1"><a class="header-anchor" href="#1-安装-docker"><span>1. 安装 Docker</span></a></h2><p>Debian/Ubuntu 系统安装 Docker CE：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">curl</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-fsSL</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">https://get.docker.com</span><span style="color:#D4D4D4;"> | </span><span style="color:#DCDCAA;">bash</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-s</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">--mirror</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">Aliyun</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 更新 Docker Daemon 配置，使得无需 sudo</span></span>
<span class="line"><span style="color:#DCDCAA;">sudo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">sed</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-i</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">s/SocketMode=</span><span style="color:#B5CEA8;">0660</span><span style="color:#CE9178;">/SocketMode=</span><span style="color:#B5CEA8;">0666</span><span style="color:#CE9178;">/g</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">/usr/lib/systemd/system/docker.socket</span></span>
<span class="line"><span style="color:#DCDCAA;">sudo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">systemctl</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">daemon-reload</span></span>
<span class="line"><span style="color:#DCDCAA;">sudo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">systemctl</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">restart</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">docker.socket</span></span>
<span class="line"></span></code></pre></div><p>定义 Docker Compose 别名：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;alias docker-compose=&#39;docker compose&#39;&quot;</span><span style="color:#D4D4D4;"> &gt;&gt; </span><span style="color:#CE9178;">~/.bashrc</span></span>
<span class="line"><span style="color:#DCDCAA;">source</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">~/.bashrc</span></span>
<span class="line"></span></code></pre></div><h2 id="2-docker-镜像和容器" tabindex="-1"><a class="header-anchor" href="#2-docker-镜像和容器"><span>2. Docker 镜像和容器</span></a></h2><p>查看所有镜像：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">ps</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-a</span></span>
<span class="line"></span></code></pre></div><p>查看所有容器：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">images</span></span>
<span class="line"></span></code></pre></div><p>将容器提交为镜像：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">commit</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$container_id</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$image_name</span><span style="color:#CE9178;">[:</span><span style="color:#9CDCFE;">$tag</span><span style="color:#CE9178;">]</span></span>
<span class="line"></span></code></pre></div><p>将镜像导出为 <code>.tar</code> 文件：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">save</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-o</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$filename</span><span style="color:#CE9178;">.tar</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$image_name</span><span style="color:#CE9178;">[:</span><span style="color:#9CDCFE;">$tag</span><span style="color:#CE9178;">]</span></span>
<span class="line"></span></code></pre></div><p>从 <code>.tar</code> 文件导入镜像：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">load</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-i</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$filename</span><span style="color:#CE9178;">.tar</span></span>
<span class="line"></span></code></pre></div><p>删除镜像：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">rmi</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$image_name</span><span style="color:#CE9178;">[:</span><span style="color:#9CDCFE;">$tag</span><span style="color:#CE9178;">]</span></span>
<span class="line"></span></code></pre></div><p>删除容器：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">rm</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$container_id</span></span>
<span class="line"></span></code></pre></div><p>使用指定 <code>Dockerfile</code> 构建镜像：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">build</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-t</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$image_name</span><span style="color:#CE9178;">[:</span><span style="color:#9CDCFE;">$tag</span><span style="color:#CE9178;">]</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$path_to_dockerfile</span></span>
<span class="line"></span></code></pre></div><h2 id="3-docker-compose" tabindex="-1"><a class="header-anchor" href="#3-docker-compose"><span>3. Docker Compose</span></a></h2><p>查看 Docker Compose 版本：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">compose</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">version</span></span>
<span class="line"></span></code></pre></div><p>启动 Docker Compose 构建后台应用：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">compose</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">up</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-d</span></span>
<span class="line"></span></code></pre></div><p>删除 Docker Compose 构建的应用：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">compose</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">down</span></span>
<span class="line"></span></code></pre></div><h2 id="4-docker-清理" tabindex="-1"><a class="header-anchor" href="#4-docker-清理"><span>4. Docker 清理</span></a></h2><p>清理所有未使用的镜像、容器、网络和卷：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">system</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">prune</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-a</span></span>
<span class="line"></span></code></pre></div><p>清理所有未使用的镜像、容器和网络：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">system</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">prune</span></span>
<span class="line"></span></code></pre></div><p>强制清理构建缓存：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">builder</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">prune</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-a</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-f</span></span>
<span class="line"></span></code></pre></div><p>强制清理无标签镜像：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">docker</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">image</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">prune</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-a</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-f</span></span>
<span class="line"></span></code></pre></div>`,38);function C(E,k){const a=p("router-link");return c(),t("div",null,[d,s("nav",i,[s("ul",null,[s("li",null,[n(a,{to:"#1-安装-docker"},{default:l(()=>[o("1. 安装 Docker")]),_:1})]),s("li",null,[n(a,{to:"#2-docker-镜像和容器"},{default:l(()=>[o("2. Docker 镜像和容器")]),_:1})]),s("li",null,[n(a,{to:"#3-docker-compose"},{default:l(()=>[o("3. Docker Compose")]),_:1})]),s("li",null,[n(a,{to:"#4-docker-清理"},{default:l(()=>[o("4. Docker 清理")]),_:1})])])]),y])}const u=e(D,[["render",C],["__file","command.html.vue"]]);export{u as default};
