import{_ as t,o as d,c as e,e as o}from"./app-dc4e475d.js";const r={},a=o(`<h1 id="vs-code-如何" tabindex="-1"><a class="header-anchor" href="#vs-code-如何" aria-hidden="true">#</a> VS Code 如何</h1><h2 id="1-常用设置" tabindex="-1"><a class="header-anchor" href="#1-常用设置" aria-hidden="true">#</a> 1. 常用设置</h2><table><thead><tr><th>设置项目</th><th>功能</th></tr></thead><tbody><tr><td><code>editor.renderWhitespace</code></td><td>显示空白符号</td></tr><tr><td><code>editor.bracketPairColorization.enabled</code></td><td>括号彩色高亮</td></tr><tr><td><code>editor.guides.bracketPairs</code></td><td>括号配对高亮</td></tr><tr><td><code>editor.inlineSuggest.enabled</code></td><td>行内提示</td></tr><tr><td><code>workbench.startupEditor</code></td><td>启动时打开的文件</td></tr><tr><td><code>terminal.integrated.defaultProfile.windows</code></td><td>默认终端</td></tr><tr><td><code>markdown.preview.doubleClickToSwitchToEditor</code></td><td>双击切换到编辑器</td></tr><tr><td><code>markdown.preview.scrollEditorWithPreview</code></td><td>预览时滚动编辑器</td></tr><tr><td><code>terminal.integrated.cursorStyle</code></td><td>光标样式</td></tr></tbody></table><h2 id="2-设置快捷键" tabindex="-1"><a class="header-anchor" href="#2-设置快捷键" aria-hidden="true">#</a> 2. 设置快捷键</h2><p>按快捷键 <code>Ctrl + K + S</code> 或者打开 <strong>文件(F)</strong> -&gt; <strong>首选项</strong> -&gt; <strong>键盘快捷方式</strong>（<code>Ctrl + K Ctrl + S</code>），可以打开键盘快捷键设置界面，需要的功能搜索即可。</p><p>有一些常用功能没有指定快捷键，可以手动设置，例如我常用的快捷键设置。</p><table><thead><tr><th>功能</th><th>快捷键</th></tr></thead><tbody><tr><td>Python: 运行 Python 文件</td><td><code>Ctrl + D + R</code></td></tr><tr><td>转换为 Kebab Case</td><td><code>Ctrl + D + K</code></td></tr><tr><td>转换为首字母大写</td><td><code>Ctrl + D + T</code></td></tr><tr><td>转换为大写</td><td><code>Ctrl + D + U</code></td></tr><tr><td>转换为小写</td><td><code>Ctrl + D + L</code></td></tr><tr><td>转换为驼峰大小写</td><td><code>Ctrl + D + C</code></td></tr></tbody></table><p>搜索 <strong>用户</strong> 可以看到自定义的全部快捷键。</p><h2 id="3-对比文件" tabindex="-1"><a class="header-anchor" href="#3-对比文件" aria-hidden="true">#</a> 3. 对比文件</h2><p>以前我们对比文件通常需要购买昂贵的软件，现在 VS Code 已经内置了对比文件的功能，可以直接使用。</p><p>打开两个文件，在 <strong>资源管理器</strong> 中右键一个文件，选择 <strong>选择以进行比较</strong>，然后选择另一个文件右键，选择 <strong>与已选项目进行比较</strong>，就可以看到两个文件的对比了。</p><p>同样支持命令行操作：</p><div class="language-bash" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">code</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-d</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">file1</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">file2</span></span>
<span class="line"></span></code></pre></div><p>不过这可能会自动打开一个新的 VS Code 窗口。</p><h2 id="4-使用代理" tabindex="-1"><a class="header-anchor" href="#4-使用代理" aria-hidden="true">#</a> 4. 使用代理</h2><p>VS Code 内置了代理设置，可以在 <strong>文件(F)</strong> -&gt; <strong>首选项</strong> -&gt; <strong>设置</strong>（<code>Ctrl + ,</code>）中搜索 <code>proxy</code>，可以看到代理设置。</p><p>在命令行启动 VS Code 时，如果设置了 <code>HTTP_PROXY</code> 或者 <code>HTTPS_PROXY</code> 环境变量，VS Code 会自动使用代理。</p><p>另外，如果您在使用 GitHub Copilot 时遇到了问题，可以尝试设置代理。只需要设置 <code>HTTP_PROXY</code> 变量即可。</p>`,18),c=[a];function s(n,l){return d(),e("div",null,c)}const h=t(r,[["render",s],["__file","how-to.html.vue"]]);export{h as default};
