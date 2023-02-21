import{_ as a,p as s,q as n,a1 as e}from"./framework-8980b429.js";const t={},p=e(`<h1 id="docker-搭建-mysql-环境" tabindex="-1"><a class="header-anchor" href="#docker-搭建-mysql-环境" aria-hidden="true">#</a> Docker 搭建 MySQL 环境</h1><nav class="table-of-contents"><ul></ul></nav><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql:8.0.32
<span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> mysql80 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root_password <span class="token punctuation">\\</span>
    <span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span>Asia/Shanghai <span class="token punctuation">\\</span>
    mysql:8.0.32
</code></pre></div><p>进入容器：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql80 /bin/bash
</code></pre></div>`,5),c=[p];function l(o,r){return s(),n("div",null,c)}const d=a(t,[["render",l],["__file","mysql-env.html.vue"]]);export{d as default};
