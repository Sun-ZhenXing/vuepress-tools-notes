import{_ as d,M as n,p as a,q as t,N as c,a1 as e}from"./framework-35c50e38.js";const l={},s=e(`<h1 id="mermaid-git-图" tabindex="-1"><a class="header-anchor" href="#mermaid-git-图" aria-hidden="true">#</a> Mermaid Git 图</h1><nav class="table-of-contents"><ul></ul></nav><p>Git 图形是不同分支上的 Git 提交和 Git 操作（命令）的图形化表示。</p><p>这类图表对开发者和开发团队分享他们的 Git 分支策略特别有帮助。例如，它使人们更容易直观地了解 Git 流程的工作原理。</p><p>Mermaid可以渲染Git图</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gitGraph
   commit
   commit
   branch develop
   checkout develop
   commit
   commit
   checkout main
   merge develop
   commit
   commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=e("<p>在 Mermaid 中，我们支持基本的 Git 操作：</p><ul><li><code>commit</code>：表示在当前分支上的一个新的提交</li><li><code>branch</code>：创建并切换到一个新的分支，将其设置为当前分支</li><li><code>checkout</code>：签出一个现有的分支，并将其设置为当前分支</li><li><code>merge</code>：将一个现有的分支合并到当前分支上</li></ul><p>在这些关键的 Git 命令的帮助下，你将能够在 Mermaid 中非常容易和快速地绘制一个 Git 图。实体名称通常是大写的，尽管在这方面没有公认的标准，而且在 Mermaid 中也没有要求。</p>",3);function m(o,v){const i=n("Mermaid");return a(),t("div",null,[s,c(i,{id:"mermaid-16",code:"eJxLzyxxL0osyOBSUFBIzs/NzSxBZSUVJeYlZyikpJal5uQXgOUyUpOz80tLUMSw6ISry03MzAMJ5KYWpafi1QUAdpostw=="}),r])}const p=d(l,[["render",m],["__file","gitgraph.html.vue"]]);export{p as default};
