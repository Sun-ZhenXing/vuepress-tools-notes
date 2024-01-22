# VS Code 如何

## 1. 常用设置

| 设置项目                                       | 功能             |
| ---------------------------------------------- | ---------------- |
| `editor.renderWhitespace`                      | 显示空白符号     |
| `editor.bracketPairColorization.enabled`       | 括号彩色高亮     |
| `editor.guides.bracketPairs`                   | 括号配对高亮     |
| `editor.inlineSuggest.enabled`                 | 行内提示         |
| `workbench.startupEditor`                      | 启动时打开的文件 |
| `terminal.integrated.defaultProfile.windows`   | 默认终端         |
| `markdown.preview.doubleClickToSwitchToEditor` | 双击切换到编辑器 |
| `markdown.preview.scrollEditorWithPreview`     | 预览时滚动编辑器 |
| `terminal.integrated.cursorStyle`              | 光标样式         |

## 2. 设置快捷键

按快捷键 `Ctrl + K + S` 或者打开 **文件(F)** -> **首选项** -> **键盘快捷方式**（`Ctrl + K Ctrl + S`），可以打开键盘快捷键设置界面，需要的功能搜索即可。

有一些常用功能没有指定快捷键，可以手动设置，例如我常用的快捷键设置。

| 功能                     | 快捷键         |
| ------------------------ | -------------- |
| 转换为 Kebab Case        | `Ctrl + D + K` |
| 转换为首字母大写         | `Ctrl + D + T` |
| 转换为大写               | `Ctrl + D + U` |
| 转换为小写               | `Ctrl + D + L` |
| 转换为驼峰大小写         | `Ctrl + D + C` |
| 对导入进行排序           | `Ctrl + D + S` |
| Python: 运行 Python 文件 | `Ctrl + D + R` |

搜索 **用户** 可以看到自定义的全部快捷键。

## 3. 对比文件

以前我们对比文件通常需要购买昂贵的软件，现在 VS Code 已经内置了对比文件的功能，可以直接使用。

打开两个文件，在 **资源管理器** 中右键一个文件，选择 **选择以进行比较**，然后选择另一个文件右键，选择 **与已选项目进行比较**，就可以看到两个文件的对比了。

同样支持命令行操作：

```bash
code -d file1 file2
```

不过这可能会自动打开一个新的 VS Code 窗口。

VS Code 内使用了 Monaco Editor，这是一个非常优秀的编辑器，作者也通过 Monaco Editor 开发了一个 [在线的对比文件的页面](https://tools.alexsun.top/diff)，可以直接访问测试。

## 4. 使用代理

VS Code 内置了代理设置，可以在 **文件(F)** -> **首选项** -> **设置**（`Ctrl + ,`）中搜索 `proxy`，可以看到代理设置。

在命令行启动 VS Code 时，如果设置了 `HTTP_PROXY` 或者 `HTTPS_PROXY` 环境变量，VS Code 会自动使用代理。

另外，如果您在使用 GitHub Copilot 时遇到了问题，可以尝试设置代理。只需要设置 `HTTP_PROXY` 变量即可。
