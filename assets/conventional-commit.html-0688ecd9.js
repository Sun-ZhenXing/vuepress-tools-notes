import{_ as s,r as a,o as r,c,b as t,a as l,w as o,d as e,e as i}from"./app-dc4e475d.js";const p={},y=t("h1",{id:"约定式提交",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#约定式提交","aria-hidden":"true"},"#"),e(" 约定式提交")],-1),h={class:"table-of-contents"},g=t("h2",{id:"1-基本格式",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#1-基本格式","aria-hidden":"true"},"#"),e(" 1. 基本格式")],-1),x={class:"hint-container info"},f=t("p",{class:"hint-container-title"},"约定式提交",-1),_={href:"https://www.conventionalcommits.org/zh-hans/v1.0.0/",target:"_blank",rel:"noopener noreferrer"},u={href:"http://semver.org/lang/zh-CN",target:"_blank",rel:"noopener noreferrer"},m=i(`<div class="language-yaml" data-ext="yml"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">&lt;type&gt;[optional scope]</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&lt;description&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">optional body</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">optional footer(s)</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span></code></pre></div><p>大致分为三个部分（使用空行分割）：</p><ol><li>标题行：必填，描述主要修改类型和内容</li><li>主题内容：描述为什么修改，做了什么样的修改，以及开发的思路等等</li><li>页脚注释：放 <strong>BREAKING CHANGE</strong> 或 <strong>Closed Issues</strong></li></ol><h2 id="2-提交的类型" tabindex="-1"><a class="header-anchor" href="#2-提交的类型" aria-hidden="true">#</a> 2. 提交的类型</h2><table><thead><tr><th style="text-align:center;">类型</th><th style="text-align:left;">内容</th></tr></thead><tbody><tr><td style="text-align:center;"><code>feat</code></td><td style="text-align:left;">新功能、新特性</td></tr><tr><td style="text-align:center;"><code>fix</code></td><td style="text-align:left;">修改 Bug</td></tr><tr><td style="text-align:center;"><code>perf</code></td><td style="text-align:left;">更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）</td></tr><tr><td style="text-align:center;"><code>refactor</code></td><td style="text-align:left;">代码重构（重构，在不影响代码内部行为、功能下的代码修改）</td></tr><tr><td style="text-align:center;"><code>docs</code></td><td style="text-align:left;">文档修改</td></tr><tr><td style="text-align:center;"><code>style</code></td><td style="text-align:left;">代码格式修改（例如分号修改）</td></tr><tr><td style="text-align:center;"><code>test</code></td><td style="text-align:left;">测试用例新增、修改</td></tr><tr><td style="text-align:center;"><code>build</code></td><td style="text-align:left;">影响项目构建或依赖项修改</td></tr><tr><td style="text-align:center;"><code>revert</code></td><td style="text-align:left;">恢复上一次提交</td></tr><tr><td style="text-align:center;"><code>ci</code></td><td style="text-align:left;">持续集成相关文件修改</td></tr><tr><td style="text-align:center;"><code>chore</code></td><td style="text-align:left;">其他修改（不在上述类型中的修改）</td></tr><tr><td style="text-align:center;"><code>release</code></td><td style="text-align:left;">发布新版本</td></tr><tr><td style="text-align:center;"><code>workflow</code></td><td style="text-align:left;">工作流相关文件修改</td></tr></tbody></table><h2 id="3-其他部分" tabindex="-1"><a class="header-anchor" href="#3-其他部分" aria-hidden="true">#</a> 3. 其他部分</h2><table><thead><tr><th style="text-align:center;">部分</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;"><code>scope</code></td><td style="text-align:left;">commit 影响的范围，比如：<code>route</code>、<code>component</code>、<code>utils</code>、<code>build</code> 等</td></tr><tr><td style="text-align:center;"><code>subject</code></td><td style="text-align:left;">commit 的概述</td></tr><tr><td style="text-align:center;"><code>body</code></td><td style="text-align:left;">commit 具体修改内容，可以分为多行</td></tr><tr><td style="text-align:center;"><code>footer</code></td><td style="text-align:left;">一些备注，通常是 <strong>BREAKING CHANGE</strong> 或修复的 Bug 的链接</td></tr></tbody></table>`,7);function b(D,v){const n=a("router-link"),d=a("ExternalLinkIcon");return r(),c("div",null,[y,t("nav",h,[t("ul",null,[t("li",null,[l(n,{to:"#1-基本格式"},{default:o(()=>[e("1. 基本格式")]),_:1})]),t("li",null,[l(n,{to:"#2-提交的类型"},{default:o(()=>[e("2. 提交的类型")]),_:1})]),t("li",null,[l(n,{to:"#3-其他部分"},{default:o(()=>[e("3. 其他部分")]),_:1})])])]),g,t("div",x,[f,t("p",null,[e("可阅读 "),t("a",_,[e("约定式提交中文文档"),l(d)]),e("。")])]),t("p",null,[e("约定式提交规范是一种基于提交信息的轻量级约定。它提供了一组简单规则来创建清晰的提交历史；这更有利于编写自动化工具。通过在提交信息中描述功能、修复和破坏性变更，使这种惯例与 "),t("a",u,[e("SemVer"),l(d)]),e(" 相互对应。")]),m])}const k=s(p,[["render",b],["__file","conventional-commit.html.vue"]]);export{k as default};
