import{_ as r,r as o,o as l,c,b as e,a as d,w as n,d as t,e as a}from"./app-bd1d9ffa.js";const h={},v=e("h1",{id:"vs-code-插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vs-code-插件","aria-hidden":"true"},"#"),t(" VS Code 插件")],-1),u={class:"table-of-contents"},m=a(`<h2 id="_1-vs-code-插件" tabindex="-1"><a class="header-anchor" href="#_1-vs-code-插件" aria-hidden="true">#</a> 1. VS Code 插件</h2><p>安装插件最简单的方法是直接在市场中搜索。不过也可以使用命令安装：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>code --install-extension <span class="token operator">&lt;</span>插件ID<span class="token operator">|</span>插件文件路径<span class="token operator">&gt;</span>
</code></pre></div><p>卸载插件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>code --uninstall-extension <span class="token operator">&lt;</span>插件ID<span class="token operator">&gt;</span>
</code></pre></div><p>查询已安装的插件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>code --list-extensions
</code></pre></div><p>如果需要包含版本，加上 <code>--show-versions</code> 标志即可：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>code --list-extensions --show-versions
</code></pre></div><p>手动备份插件配置（加上 <code>--show-versions</code> 包含版本）：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>code --list-extensions <span class="token operator">&gt;</span> extensions-list.txt
</code></pre></div><p>恢复备份：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;{ print &quot;code --install-extension &quot; $1; }&#39;</span> extensions-list.txt <span class="token operator">|</span> <span class="token function">sh</span> -
</code></pre></div><div class="hint-container info"><p class="hint-container-title">如何在 Windows 使用 Linux GNU 工具</p><p>安装 Git 后将 Git 携带的 GNU 软件路径（如 <code>C:\\Program Files\\Git\\usr\\bin</code>）加入路径即可。</p></div>`,14),b={class:"hint-container details"},p=e("summary",null,"作者的插件列表",-1),_=e("code",null,"extensions-list.txt",-1),g={href:"https://github.com/Sun-ZhenXing/vuepress-tools-notes/tree/main/docs/vscode/extensions-list.txt",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>afzalsayed96.icones
antfu.iconify
antfu.unocss
bierner.markdown-mermaid
bradlc.vscode-tailwindcss
cheshirekow.cmake-format
christian-kohler.path-intellisense
DavidAnson.vscode-markdownlint
dbaeumer.vscode-eslint
donjayamanne.githistory
DotJoshJohnson.xml
EditorConfig.EditorConfig
esbenp.prettier-vscode
GitHub.copilot-labs
GitHub.copilot-nightly
GitHub.heygithub
GitHub.remotehub
github.vscode-github-actions
golang.go
idleberg.icon-fonts
jeff-hykin.better-cpp-syntax
josetr.cmake-language-support-vscode
ms-azuretools.vscode-docker
MS-CEINTL.vscode-language-pack-zh-hans
ms-dotnettools.vscode-dotnet-runtime
ms-python.black-formatter
ms-python.isort
ms-python.python
ms-python.vscode-pylance
ms-toolsai.jupyter
ms-toolsai.jupyter-keymap
ms-toolsai.jupyter-renderers
ms-toolsai.vscode-jupyter-cell-tags
ms-toolsai.vscode-jupyter-slideshow
ms-vscode-remote.remote-containers
ms-vscode-remote.remote-ssh
ms-vscode-remote.remote-ssh-edit
ms-vscode-remote.remote-wsl
ms-vscode.azure-repos
ms-vscode.cmake-tools
ms-vscode.cpptools
ms-vscode.cpptools-extension-pack
ms-vscode.cpptools-themes
ms-vscode.hexeditor
ms-vscode.remote-explorer
ms-vscode.remote-repositories
mushan.vscode-paste-image
naumovs.color-highlight
PKief.material-icon-theme
quicktype.quicktype
raczzalan.webgl-glsl-editor
tomoki1207.pdf
twxs.cmake
Vue.volar
Vue.vscode-typescript-vue-plugin
yzhang.markdown-all-in-one
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x=a('<h2 id="_2-插件收藏夹" tabindex="-1"><a class="header-anchor" href="#_2-插件收藏夹" aria-hidden="true">#</a> 2. 插件收藏夹</h2><div class="hint-container tip"><p class="hint-container-title">完善推荐表</p><p>欢迎任何开发者完善此页面。</p></div><h3 id="_2-1-markdown" tabindex="-1"><a class="header-anchor" href="#_2-1-markdown" aria-hidden="true">#</a> 2.1 MarkDown</h3><table><thead><tr><th>插件 ID</th><th>功能</th></tr></thead><tbody><tr><td><code>yzhang.markdown-all-in-one</code></td><td>集成 MarkDown 编辑器</td></tr><tr><td><code>mushan.vscode-paste-image</code></td><td><code>Ctrl + Alt + V</code> 粘贴剪切板上的图片</td></tr><tr><td><code>bierner.markdown-mermaid</code></td><td>Mermaid 预览</td></tr><tr><td><code>shd101wyy.markdown-preview-enhanced</code></td><td></td></tr><tr><td><code>bpruitt-goddard.mermaid-markdown-syntax-highlighting</code></td><td></td></tr><tr><td><code>bierner.markdown-emoji</code></td><td></td></tr></tbody></table><h3 id="_2-2-git" tabindex="-1"><a class="header-anchor" href="#_2-2-git" aria-hidden="true">#</a> 2.2 Git</h3><table><thead><tr><th>插件 ID</th><th>功能</th></tr></thead><tbody><tr><td><code>donjayamanne.githistory</code></td><td></td></tr><tr><td><code>eamodio.gitlens</code></td><td></td></tr><tr><td><code>mhutchie.git-graph</code></td><td></td></tr><tr><td><code>waderyan.gitblame</code></td><td></td></tr></tbody></table><h3 id="_2-3-c" tabindex="-1"><a class="header-anchor" href="#_2-3-c" aria-hidden="true">#</a> 2.3 C++</h3><table><thead><tr><th>插件 ID</th><th>功能</th></tr></thead><tbody><tr><td><code>ms-vscode.cpptools-extension-pack</code></td><td>C++ 扩展包</td></tr><tr><td><code>jeff-hykin.better-cpp-syntax</code></td><td>C++ 语言支持增强</td></tr><tr><td><code>ms-vscode.cmake-tools</code></td><td>提供 CMake 工具支持</td></tr><tr><td><code>twxs.cmake</code></td><td>CMake 语法支持</td></tr></tbody></table><h3 id="_2-4-智能代码生成" tabindex="-1"><a class="header-anchor" href="#_2-4-智能代码生成" aria-hidden="true">#</a> 2.4 智能代码生成</h3><table><thead><tr><th>插件 ID</th><th>功能</th></tr></thead><tbody><tr><td><code>Blackboxapp.blackbox</code></td><td>免费的智能代码补全，用于代替 Copilot</td></tr><tr><td><code>GitHub.copilot</code></td><td>GitHub 最火的 AI 代码工具 Copilot，价格为 $10 / mon</td></tr></tbody></table><h3 id="_2-5-glsl" tabindex="-1"><a class="header-anchor" href="#_2-5-glsl" aria-hidden="true">#</a> 2.5 GLSL</h3><table><thead><tr><th>插件 ID</th><th>功能</th></tr></thead><tbody><tr><td><code>raczzalan.webgl-glsl-editor</code></td><td>GLSL 语言支持</td></tr></tbody></table><h3 id="_2-6-xml-支持" tabindex="-1"><a class="header-anchor" href="#_2-6-xml-支持" aria-hidden="true">#</a> 2.6 XML 支持</h3><table><thead><tr><th>插件 ID</th><th>功能</th></tr></thead><tbody><tr><td><code>DotJoshJohnson.xml</code></td><td></td></tr><tr><td><code>redhat.vscode-xml</code></td><td></td></tr></tbody></table><h3 id="_2-7-pdf-支持" tabindex="-1"><a class="header-anchor" href="#_2-7-pdf-支持" aria-hidden="true">#</a> 2.7 PDF 支持</h3><table><thead><tr><th>插件 ID</th><th>功能</th></tr></thead><tbody><tr><td><code>tomoki1207.pdf</code></td><td>预览 PDF</td></tr></tbody></table><h3 id="_2-8-前端" tabindex="-1"><a class="header-anchor" href="#_2-8-前端" aria-hidden="true">#</a> 2.8 前端</h3><table><thead><tr><th>插件 ID</th><th>功能</th></tr></thead><tbody><tr><td><code>dbaeumer.vscode-eslint</code></td><td>ESLint</td></tr><tr><td><code>Vue.volar</code></td><td>Vue 支持</td></tr></tbody></table><h3 id="_2-9-docker-与远程开发" tabindex="-1"><a class="header-anchor" href="#_2-9-docker-与远程开发" aria-hidden="true">#</a> 2.9 Docker 与远程开发</h3><table><thead><tr><th>插件 ID</th><th>功能</th></tr></thead><tbody><tr><td><code>ms-azuretools.vscode-docker</code></td><td>Docker 管理支持</td></tr><tr><td><code>ms-vscode-remote.remote-containers</code></td><td>Docker 容器开发支持</td></tr><tr><td><code>ms-vscode-remote.remote-ssh</code></td><td>SSH 支持</td></tr><tr><td><code>ms-vscode-remote.remote-wsl</code></td><td>WSL 支持</td></tr><tr><td><code>ms-vscode.remote-explorer</code></td><td>远程文件浏览</td></tr></tbody></table><h3 id="_2-9-其他" tabindex="-1"><a class="header-anchor" href="#_2-9-其他" aria-hidden="true">#</a> 2.9 其他</h3><table><thead><tr><th>插件 ID</th><th>功能</th></tr></thead><tbody><tr><td><code>ms-vscode.hexeditor</code></td><td>HEX 编辑器</td></tr><tr><td><code>Cardinal90.multi-cursor-case-preserve</code></td><td>智能多光标</td></tr></tbody></table>',22);function f(y,w){const s=o("router-link"),i=o("ExternalLinkIcon");return l(),c("div",null,[v,e("nav",u,[e("ul",null,[e("li",null,[d(s,{to:"#_1-vs-code-插件"},{default:n(()=>[t("1. VS Code 插件")]),_:1})]),e("li",null,[d(s,{to:"#_2-插件收藏夹"},{default:n(()=>[t("2. 插件收藏夹")]),_:1}),e("ul",null,[e("li",null,[d(s,{to:"#_2-1-markdown"},{default:n(()=>[t("2.1 MarkDown")]),_:1})]),e("li",null,[d(s,{to:"#_2-2-git"},{default:n(()=>[t("2.2 Git")]),_:1})]),e("li",null,[d(s,{to:"#_2-3-c"},{default:n(()=>[t("2.3 C++")]),_:1})]),e("li",null,[d(s,{to:"#_2-4-智能代码生成"},{default:n(()=>[t("2.4 智能代码生成")]),_:1})]),e("li",null,[d(s,{to:"#_2-5-glsl"},{default:n(()=>[t("2.5 GLSL")]),_:1})]),e("li",null,[d(s,{to:"#_2-6-xml-支持"},{default:n(()=>[t("2.6 XML 支持")]),_:1})]),e("li",null,[d(s,{to:"#_2-7-pdf-支持"},{default:n(()=>[t("2.7 PDF 支持")]),_:1})]),e("li",null,[d(s,{to:"#_2-8-前端"},{default:n(()=>[t("2.8 前端")]),_:1})]),e("li",null,[d(s,{to:"#_2-9-docker-与远程开发"},{default:n(()=>[t("2.9 Docker 与远程开发")]),_:1})]),e("li",null,[d(s,{to:"#_2-9-其他"},{default:n(()=>[t("2.9 其他")]),_:1})])])])])]),m,e("details",b,[p,e("p",null,[t("作者的 "),_,t(" 文件可在 "),e("a",g,[t("GitHub 仓库"),d(i)]),t(" 中找到。")]),k]),x])}const C=r(h,[["render",f],["__file","extension.html.vue"]]);export{C as default};
