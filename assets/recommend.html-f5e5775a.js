import{_ as i,r as a,o as d,c as l,b as n,d as e,a as t,e as c}from"./app-bd1d9ffa.js";const r={},v=n("h1",{id:"推荐阅读",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#推荐阅读","aria-hidden":"true"},"#"),e(" 推荐阅读")],-1),o={href:"https://www.sqlsec.com/2018/05/termux.html",target:"_blank",rel:"noopener noreferrer"},u=c(`<details class="hint-container details"><summary>打印样式优化</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span><span class="token string">&#39;beforeend&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;style&gt;
@media print {
    #page-header,
    #aside-content,
    #post-comment,
    #rightside,
    #footer,
    div.tag_share,
    div.post-reward,
    #pagination,
    div.relatedPosts,
    div.post-copyright,
    #post &gt; hr {
        display: none !important;
    }

    figure {
        page-break-inside: avoid;
    }

    #post {
        width: 100%;
    }

    #content-inner {
        display: block;
        margin: 0;
        max-width: 100%;
        padding: 0;
    }

    code[class*=&quot;language-&quot;] {
        white-space: pre-wrap;
    }
}
&lt;/style&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function m(p,b){const s=a("ExternalLinkIcon");return d(),l("div",null,[v,n("p",null,[n("a",o,[e("Termux 高级终端安装使用配置教程"),t(s)]),e("，如果需要打印此文章可以将下面的 JS 脚本注入页面，用于优化样式。")]),u])}const g=i(r,[["render",m],["__file","recommend.html.vue"]]);export{g as default};
