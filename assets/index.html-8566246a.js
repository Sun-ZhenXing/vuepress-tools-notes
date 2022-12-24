import{_ as a,M as i,p as t,q as o,R as n,t as s,N as c,a1 as l}from"./framework-35149b8f.js";const r={},d=n("h1",{id:"git-高级",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-高级","aria-hidden":"true"},"#"),s(" Git 高级")],-1),p=n("h2",{id:"_1-忽略文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-忽略文件","aria-hidden":"true"},"#"),s(" 1. 忽略文件")],-1),g=n("p",null,"有些时候，你必须把某些文件放到 Git 工作目录中，但又不能提交它们，比如保存了数据库密码的配置文件。",-1),v=n("p",null,[s("在 Git 工作区的根目录下创建一个 "),n("code",null,".gitignore"),s(" 文件，然后把要忽略的文件名填进去，Git 就会自动忽略这些文件。")],-1),u={class:"custom-container info"},m=n("p",{class:"custom-container-title"},"最佳实践",-1),k=n("code",null,".gitignore",-1),b={href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"},h=l(`<p>忽略文件的原则是：</p><ol><li>忽略操作系统自动生成的文件，比如缩略图等</li><li>忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如 Java 编译产生的 <code>.class</code> 文件</li><li>忽略你自己的带有敏感信息的配置文件，比如存放口令的配置文件</li></ol><p>可以使用通配符确定文件或文件夹的名称：</p><div class="language-gitignore line-numbers-mode" data-ext="gitignore"><pre class="language-gitignore"><code><span class="token comment"># Windows 下自动生成</span>
<span class="token entry string">Thumbs.db</span>
<span class="token entry string">ehthumbs.db</span>
<span class="token entry string">Desktop.ini</span>

<span class="token comment"># Mac 下自动生成</span>
<span class="token entry string">.DS_Store</span>

<span class="token comment"># 编译目标</span>
<span class="token entry string">dist</span>

<span class="token comment"># 编译中间结果</span>
<span class="token entry string"><span class="token operator">*</span>.py<span class="token regex">[cdo]</span></span>

<span class="token comment"># 其他配置文件和二进制文件</span>
<span class="token entry string"><span class="token operator">*</span>.so</span>
<span class="token entry string"><span class="token operator">*</span>.egg</span>
<span class="token entry string"><span class="token operator">*</span>.egg-info</span>

<span class="token comment"># 秘钥等信息</span>
<span class="token entry string">secret_key.key</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的文件被 <code>.gitignore</code> 忽略了，可以使用下面的命令强制加入，这不是推荐做法：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-f</span> Application.class
</code></pre></div><p>使用 <code>git check-ignore</code> 检查规则是否有错误：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> check-ignore
</code></pre></div><p>如果不希望使用强制添加，又希望有例外情况使用 <code>!</code> 加入即可：</p><div class="language-gitignore" data-ext="gitignore"><pre class="language-gitignore"><code><span class="token entry string"><span class="token operator">!</span>.gitignore</span>
<span class="token entry string"><span class="token operator">!</span>Application.class</span>
</code></pre></div>`,10);function _(f,x){const e=i("ExternalLinkIcon");return t(),o("div",null,[d,p,g,v,n("div",u,[m,n("p",null,[s("各种常用的 "),k,s(" 文件在 "),n("a",b,[s("GitHub"),c(e)]),s(" 可以参考，可以根据工程性质直接复制它们。另外有很多工程初始化就加上了这个文件，例如 Vue 项目创建时。")])]),h])}const G=a(r,[["render",_],["__file","index.html.vue"]]);export{G as default};
