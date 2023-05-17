import{_ as e,r as t,o as i,c,b as a,d as s,a as o,e as l}from"./app-bd1d9ffa.js";const r={},p=a("h1",{id:"git-高级",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#git-高级","aria-hidden":"true"},"#"),s(" Git 高级")],-1),d=a("h2",{id:"_1-忽略文件",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-忽略文件","aria-hidden":"true"},"#"),s(" 1. 忽略文件")],-1),g=a("p",null,"有些时候，你必须把某些文件放到 Git 工作目录中，但又不能提交它们，比如保存了数据库密码的配置文件。",-1),h=a("p",null,[s("在 Git 工作区的根目录下创建一个 "),a("code",null,".gitignore"),s(" 文件，然后把要忽略的文件名填进去，Git 就会自动忽略这些文件。")],-1),u={class:"hint-container info"},v=a("p",{class:"hint-container-title"},"最佳实践",-1),b=a("code",null,".gitignore",-1),m={href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"},k=l(`<p>忽略文件的原则是：</p><ol><li>忽略操作系统自动生成的文件，比如缩略图等</li><li>忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如 Java 编译产生的 <code>.class</code> 文件</li><li>忽略你自己的带有敏感信息的配置文件，比如存放口令的配置文件</li></ol><p>可以使用通配符确定文件或文件夹的名称：</p><div class="language-gitignore line-numbers-mode" data-ext="gitignore"><pre class="language-gitignore"><code><span class="token comment"># Windows 下自动生成</span>
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
</code></pre></div><h2 id="_2-放弃提交" tabindex="-1"><a class="header-anchor" href="#_2-放弃提交" aria-hidden="true">#</a> 2. 放弃提交</h2><p>放弃上一次提交：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD^
<span class="token comment"># 或者可以</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD~1
</code></pre></div><p>放弃若干次提交，<code>~</code> 后的数字代表你想放弃的次数：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD~2
</code></pre></div><details class="hint-container details"><summary>放弃提交示例</summary><p>放弃提交，保留 Add：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD^
</code></pre></div><p>暂存修改：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> stash
</code></pre></div><p>签出历史提交：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token operator">&lt;</span>commit_id<span class="token operator">&gt;</span>
</code></pre></div><p>最后恢复工作进度：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> stash pop
</code></pre></div></details><h2 id="_3-高级克隆" tabindex="-1"><a class="header-anchor" href="#_3-高级克隆" aria-hidden="true">#</a> 3. 高级克隆</h2><h3 id="_3-1-指定克隆深度" tabindex="-1"><a class="header-anchor" href="#_3-1-指定克隆深度" aria-hidden="true">#</a> 3.1 指定克隆深度</h3><p><code>--depth</code> 选项用于指定克隆深度，即保留之前多少次提交，一般克隆项目只用于测试或部署而不需要开发，就不需要保留历史，因为克隆历史需要占用大量网络资源，也会占用不必要的空间：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">--depth</span> <span class="token number">1</span> https://github.com/python/cpython.git
</code></pre></div><h3 id="_3-2-指定分支" tabindex="-1"><a class="header-anchor" href="#_3-2-指定分支" aria-hidden="true">#</a> 3.2 指定分支</h3><p><code>--branch</code> 用于指定分支，如果只需要单个分支也可以使用 <code>--single-branch</code> 选项，默认将选择 <code>origin</code> 分支。</p><h2 id="_4-指定标签" tabindex="-1"><a class="header-anchor" href="#_4-指定标签" aria-hidden="true">#</a> 4. 指定标签</h2><p>可以给某个提交号加标签，即将 tag 绑定到 commit 上：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-a</span> v1.2 9fceb02 <span class="token parameter variable">-m</span> <span class="token string">&quot;Release v1.2&quot;</span>
</code></pre></div><p>打上 tag 后需要将 tag 上传到远程仓库：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin v1.2
</code></pre></div><p>如果需要上传全部的 tag，可以一次性上传全部：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin <span class="token parameter variable">--tags</span>
</code></pre></div>`,29);function _(f,x){const n=t("ExternalLinkIcon");return i(),c("div",null,[p,d,g,h,a("div",u,[v,a("p",null,[s("各种常用的 "),b,s(" 文件在 "),a("a",m,[s("GitHub"),o(n)]),s(" 可以参考，可以根据工程性质直接复制它们。另外有很多工程初始化就加上了这个文件，例如 Vue 项目创建时。")])]),k])}const A=e(r,[["render",_],["__file","index.html.vue"]]);export{A as default};
