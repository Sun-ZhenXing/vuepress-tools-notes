# VS Code 使用 Docker

[[TOC]]

## 1. 开始使用

现在，我们可以在 Windows 或 Mac OS 上使用 Docker，不过需要 Docker Desktop 来管理 Docker 容器。而且 Windows 现在已经默认将 WSL 2 作为 Docker 宿主，其效率远高于安装一个完整的虚拟机。

VS Code 等开发工具提供了扩展，让你可以使用本地 Docker Desktop 服务。你可以创建容器化应用、将应用部署到容器以及调试容器上运行的应用。[^1]

[^1]: 教程：使用 Visual Studio Code 创建和共享 Docker 应用，Microsoft，<https://learn.microsoft.com/zh-cn/visualstudio/docker/tutorials/docker-tutorial>

现在，当我们安装 Docker 之后，创建一个示例容器：

```bash
docker run -dp 80:80 docker/getting-started
```

打开 `http://localhost/tutorial/` 可以看到 Docker 文档。

为了使用 VS Code 的 Docker 功能，需要 VS Code 先安装下列扩展，新版本的 VS Code 已经默认安装：
- `ms-azuretools.vscode-docker`
- `ms-vscode-remote.remote-containers`

::: tip 安装扩展

安装扩展的命令是：

```bash
code --install-extension <Extension_ID>
```

需求确保 `code` 命令在路径上，Windows 上需要手动添加，路径在安装目录的 `bin/` 下，类似于 `C:\Program Files\Microsoft VS Code\bin`。

:::

在 VS Code 的 Docker 侧边栏中有容器、镜像、仓库、网络、卷、上下文和帮助信息。可以创建、删除和管理所有容器和镜像。

## 2. 容器内开发

我们可以在容器内使用 VS Code 远程功能进行开发。

在此之前，需要有一个正在运行的容器，例如上面的 `docker/getting-started`。

首先在 VS Code 中使用 `Dev containers: attach to running container` 命令（或者在状态栏中点击绿色的 Remote 按钮，再点击此命令），将打开一个新的 VS Code 窗口，这里可以对容器进行各种操作，并且会自动打开一个 Shell 窗口。

此时 VS Code 还将在容器内自动安装 VS Code 组件以支持远程开发。

在容器内输入命令：

```bash
cd
mkdir workspace
```

然后在 VS Code 中选择打开文件夹，，打开刚创建的文件夹 `workspace` 即可进行开发。

需要注意的是，有一些插件需要安装在容器内才能工作。

## 3. 创建应用容器

下面从 项目开始：

```bash
git clone https://github.com/docker/getting-started.git --depth 1
cd getting-started/app
code .
```

创建 `Dockerfile` 文件：

```dockerfile
FROM node:18.13.0-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "/app/src/index.js"]
```

可以直接使用 VS Code，右键 `Dockerfile` 文件或者使用命令：

```bash
docker build -t getting-started .
```

镜像构建完成后，使用此镜像启动容器：

```bash
docker run -dp 3000:3000 getting-started
```

打开 `http://localhost:3000` 查看效果。
