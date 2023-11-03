import{_ as e,r as l,o,c as p,b as t,d as a,a as d,w as c,e as s}from"./app-dc4e475d.js";const r={},i=s(`<h1 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h1><h2 id="1-cc" tabindex="-1"><a class="header-anchor" href="#1-cc" aria-hidden="true">#</a> 1. C/C++</h2><h3 id="11-clang" tabindex="-1"><a class="header-anchor" href="#11-clang" aria-hidden="true">#</a> 1.1 Clang</h3><p>目前没有对 GCC 的支持，有对 Clang 的支持：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">clang</span></span>
<span class="line"></span></code></pre></div><h3 id="12-cmake" tabindex="-1"><a class="header-anchor" href="#12-cmake" aria-hidden="true">#</a> 1.2 CMake</h3><p>如果需要使用 CMake，可以安装 CMake：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">cmake</span></span>
<span class="line"></span></code></pre></div><h2 id="2-python" tabindex="-1"><a class="header-anchor" href="#2-python" aria-hidden="true">#</a> 2. Python</h2><h3 id="21-python3" tabindex="-1"><a class="header-anchor" href="#21-python3" aria-hidden="true">#</a> 2.1 Python3</h3><p>默认安装了 Python3 最新版本。</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">python</span></span>
<span class="line"></span></code></pre></div><h3 id="22-python2" tabindex="-1"><a class="header-anchor" href="#22-python2" aria-hidden="true">#</a> 2.2 Python2</h3><p>Python 2 已经不再维护，但是有些软件还是需要 Python 2 的支持，所以可以安装 Python 2：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">python2</span></span>
<span class="line"></span></code></pre></div><h3 id="23-python3-常见库" tabindex="-1"><a class="header-anchor" href="#23-python3-常见库" aria-hidden="true">#</a> 2.3 Python3 常见库</h3><p>由于直接使用 <code>pip</code> 安装一些 C 扩展库会出现问题，所以 Termux 提供了一些常见的 Python 库，下面的库可以直接使用 <code>pkg install</code> 安装：</p><table><thead><tr><th>库名</th><th>说明</th></tr></thead><tbody><tr><td><code>python-apsw</code></td><td><code>apsw</code></td></tr><tr><td><code>python-apt</code></td><td>Python 下的 APT</td></tr><tr><td><code>python-bcrypt</code></td><td><code>bcrypt</code></td></tr><tr><td><code>python-cryptography</code></td><td><code>cryptography</code></td></tr><tr><td><code>python-ensurepip-wheels</code></td><td><code>ensurepip</code></td></tr><tr><td><code>python-lameenc</code></td><td><code>lameenc</code></td></tr><tr><td><code>python-numpy</code></td><td>NumPy</td></tr><tr><td><code>python-numpy-static</code></td><td>NumPy 静态库</td></tr><tr><td><code>python-pillow</code></td><td>Pillow</td></tr><tr><td><code>python-pip</code></td><td><code>pip</code></td></tr><tr><td><code>python-static</code></td><td>Python 静态库</td></tr><tr><td><code>python-tkinter</code></td><td><code>tkinter</code></td></tr><tr><td><code>python-tldp</code></td><td><code>tldp</code></td></tr><tr><td><code>python-torch</code></td><td>PyTorch</td></tr><tr><td><code>python-torch-static</code></td><td>PyTorch 静态库</td></tr><tr><td><code>python-torchvision</code></td><td><code>torchvision</code></td></tr><tr><td><code>python-xcbgen</code></td><td><code>xcbgen</code></td></tr><tr><td><code>python-xlib</code></td><td><code>xlib</code></td></tr></tbody></table><h2 id="3-java" tabindex="-1"><a class="header-anchor" href="#3-java" aria-hidden="true">#</a> 3. Java</h2><h3 id="31-openjdk" tabindex="-1"><a class="header-anchor" href="#31-openjdk" aria-hidden="true">#</a> 3.1 OpenJDK</h3><p>目前仅支持 OpenJDK 17：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">openjdk-17</span></span>
<span class="line"></span></code></pre></div><h3 id="32-java-常见工具" tabindex="-1"><a class="header-anchor" href="#32-java-常见工具" aria-hidden="true">#</a> 3.2 Java 常见工具</h3><p>还有一些常见的工具：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">maven</span></span>
<span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">gradle</span></span>
<span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">ant</span></span>
<span class="line"></span></code></pre></div><h3 id="33-kotlin" tabindex="-1"><a class="header-anchor" href="#33-kotlin" aria-hidden="true">#</a> 3.3 Kotlin</h3><p>同样支持 Kotlin：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">kotlin</span></span>
<span class="line"></span></code></pre></div><h2 id="4-其他常见语言环境" tabindex="-1"><a class="header-anchor" href="#4-其他常见语言环境" aria-hidden="true">#</a> 4. 其他常见语言环境</h2><h3 id="41-nodejs" tabindex="-1"><a class="header-anchor" href="#41-nodejs" aria-hidden="true">#</a> 4.1 Node.js</h3><p>推荐安装 Node.js LTS 版本：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">nodejs-lts</span></span>
<span class="line"></span></code></pre></div><h3 id="42-golang" tabindex="-1"><a class="header-anchor" href="#42-golang" aria-hidden="true">#</a> 4.2 Golang</h3><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">golang</span></span>
<span class="line"></span></code></pre></div><h3 id="43-rust" tabindex="-1"><a class="header-anchor" href="#43-rust" aria-hidden="true">#</a> 4.3 Rust</h3><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">rust</span></span>
<span class="line"></span></code></pre></div><h3 id="44-ruby" tabindex="-1"><a class="header-anchor" href="#44-ruby" aria-hidden="true">#</a> 4.4 Ruby</h3><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">ruby</span></span>
<span class="line"></span></code></pre></div><h3 id="45-php" tabindex="-1"><a class="header-anchor" href="#45-php" aria-hidden="true">#</a> 4.5 PHP</h3><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">php</span></span>
<span class="line"></span></code></pre></div><h3 id="46-perl" tabindex="-1"><a class="header-anchor" href="#46-perl" aria-hidden="true">#</a> 4.6 Perl</h3><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">perl</span></span>
<span class="line"></span></code></pre></div><h3 id="47-lua" tabindex="-1"><a class="header-anchor" href="#47-lua" aria-hidden="true">#</a> 4.7 Lua</h3><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">lua54</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">liblua54</span></span>
<span class="line"></span></code></pre></div><h3 id="48-haskell" tabindex="-1"><a class="header-anchor" href="#48-haskell" aria-hidden="true">#</a> 4.8 Haskell</h3><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">ghc</span></span>
<span class="line"></span></code></pre></div><h3 id="49-swift" tabindex="-1"><a class="header-anchor" href="#49-swift" aria-hidden="true">#</a> 4.9 Swift</h3><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">swift</span></span>
<span class="line"></span></code></pre></div><h2 id="5-web-开发工具" tabindex="-1"><a class="header-anchor" href="#5-web-开发工具" aria-hidden="true">#</a> 5. Web 开发工具</h2><h3 id="51--nginx" tabindex="-1"><a class="header-anchor" href="#51--nginx" aria-hidden="true">#</a> 5.1 Nginx</h3>`,50),h=s(`<div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">nginx</span></span>
<span class="line"></span></code></pre></div><h3 id="52-mariadb" tabindex="-1"><a class="header-anchor" href="#52-mariadb" aria-hidden="true">#</a> 5.2 MariaDB</h3><p>目前仅支持 MariaDB，不过大部分命令兼容 MySQL：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">mariadb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 初始化</span></span>
<span class="line"><span style="color:#DCDCAA;">mysql_install_db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 启动</span></span>
<span class="line"><span style="color:#DCDCAA;">nohup</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">mysqld</span><span style="color:#D4D4D4;"> &amp;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 退出</span></span>
<span class="line"><span style="color:#DCDCAA;">pkill</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">mysqld</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="53-redis" tabindex="-1"><a class="header-anchor" href="#53-redis" aria-hidden="true">#</a> 5.3 Redis</h3><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">pkg</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">redis</span></span>
<span class="line"></span></code></pre></div>`,6);function y(D,u){const n=l("RouterLink");return o(),p("div",null,[i,t("p",null,[a("参见 "),d(n,{to:"/shell/termux/share-file.html#_1-2-%E4%BD%BF%E7%94%A8-nginx"},{default:c(()=>[a("共享文件：使用 Nginx")]),_:1}),a("。")]),h])}const E=e(r,[["render",y],["__file","devel-envs.html.vue"]]);export{E as default};
