# VS Code 插件

[[TOC]]

## 1. VS Code 插件

安装插件最简单的方法是直接在市场中搜索。不过也可以使用命令安装：

```bash
code --install-extension <插件ID|插件文件路径>
```

卸载插件：

```bash
code --uninstall-extension <插件ID>
```

查询已安装的插件：

```bash
code --list-extensions
```

如果需要包含版本，加上 `--show-versions` 标志即可：

```bash
code --list-extensions --show-versions
```

手动备份插件配置（加上 `--show-versions` 包含版本）：

```bash
code --list-extensions > extensions-list.txt
```

恢复备份：

```bash
awk '{ print "code --install-extension " $1; }' extensions-list.txt | sh -
```

::: info 如何在 Windows 使用 Linux GNU 工具

安装 Git 后将 Git 携带的 GNU 软件路径（如 `C:\Program Files\Git\usr\bin`）加入路径即可。

:::

作者的 `extensions-list.txt` 文件可在 [GitHub 仓库](https://github.com/Sun-ZhenXing/vuepress-tools-notes/tree/main/docs/vscode/extensions-list.txt) 中找到。

## 2. 插件收藏夹

::: tip 完善推荐表

欢迎任何开发者完善此页面。

:::

### 2.1 MarkDown

| 插件 ID                                                | 功能                                |
| ------------------------------------------------------ | ----------------------------------- |
| `yzhang.markdown-all-in-one`                           | 集成 MarkDown 编辑器                |
| `mushan.vscode-paste-image`                            | `Ctrl + Alt + V` 粘贴剪切板上的图片 |
| `bierner.markdown-mermaid`                             | Mermaid 预览                        |
| `shd101wyy.markdown-preview-enhanced`                  |                                     |
| `bpruitt-goddard.mermaid-markdown-syntax-highlighting` |                                     |
| `bierner.markdown-emoji`                               |                                     |

### 2.2 Git

| 插件 ID                   | 功能 |
| ------------------------- | ---- |
| `donjayamanne.githistory` |      |
| `eamodio.gitlens`         |      |
| `mhutchie.git-graph`      |      |
| `waderyan.gitblame`       |      |

### 2.3 C++

| 插件 ID                             | 功能                |
| ----------------------------------- | ------------------- |
| `ms-vscode.cpptools-extension-pack` | C++ 扩展包          |
| `jeff-hykin.better-cpp-syntax`      | C++ 语言支持增强    |
| `ms-vscode.cmake-tools`             | 提供 CMake 工具支持 |
| `twxs.cmake`                        | CMake 语法支持      |

### 2.4 智能代码生成

| 插件 ID                | 功能                                                |
| ---------------------- | --------------------------------------------------- |
| `Blackboxapp.blackbox` | 免费的智能代码补全，用于代替 Copilot                |
| `GitHub.copilot`       | GitHub 最火的 AI 代码工具 Copilot，价格为 $10 / mon |

### 2.5 GLSL

| 插件 ID                       | 功能          |
| ----------------------------- | ------------- |
| `raczzalan.webgl-glsl-editor` | GLSL 语言支持 |

### 2.6 XML 支持

| 插件 ID              | 功能 |
| -------------------- | ---- |
| `DotJoshJohnson.xml` |      |
| `redhat.vscode-xml`  |      |


### 2.7 PDF 支持

| 插件 ID          | 功能     |
| ---------------- | -------- |
| `tomoki1207.pdf` | 预览 PDF |

### 2.8 前端

| 插件 ID                  | 功能     |
| ------------------------ | -------- |
| `dbaeumer.vscode-eslint` | ESLint   |
| `Vue.volar`              | Vue 支持 |

### 2.9 Docker 与远程开发

| 插件 ID                              | 功能                |
| ------------------------------------ | ------------------- |
| `ms-azuretools.vscode-docker`        | Docker 管理支持     |
| `ms-vscode-remote.remote-containers` | Docker 容器开发支持 |
| `ms-vscode-remote.remote-ssh`        | SSH 支持            |
| `ms-vscode-remote.remote-wsl`        | WSL 支持            |
| `ms-vscode.remote-explorer`          | 远程文件浏览        |

### 2.9 其他

| 插件 ID                                 | 功能       |
| --------------------------------------- | ---------- |
| `ms-vscode.hexeditor`                   | HEX 编辑器 |
| `Cardinal90.multi-cursor-case-preserve` | 智能多光标 |
