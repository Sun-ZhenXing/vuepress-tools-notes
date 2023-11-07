# Docker 使用 GUI 应用

[[TOC]]

## 1. Docker 如何使用 GUI 应用

Linux 环境下的桌面应用程序通常使用 X11 或 Wayland 作为显示服务器。Docker 容器默认只能运行命令行应用程序，因此需要额外的配置才能运行 GUI 应用程序。

有一些技术可以让 Docker 容器运行 GUI 应用程序，例如 VNC、X11、Wayland 等。[^1]

[^1]: 在 Docker for Windows 中运行 GUI 程序，<https://www.cnblogs.com/larva-zhh/p/10531824.html>

- 使用 X11 服务器，让远程 X11 应用运行在本地 X11 服务器上
- 使用 SSH X11 Forwarding 技术，让远程 X11 应用运行在本地 X11 服务器上
- 使用 VNC 虚拟桌面
- 使用远程桌面协议 RDP 等
- 使用 [X11 Docker](https://github.com/mviereck/x11docker)，这是一个专门用于运行 GUI 应用的 Docker 技术

本文介绍最简单的方式，也就是使 Docker 内的 X11 应用共享到本地 X11 服务器上。

## 2. 使用 X11 服务器

### 2.1 原生 Linux

许多 Linux 都带有 X11 服务器，安装也非常方便。以 Ubuntu 22.04 为例，安装 X11 服务器：

```bash
sudo apt install x11-xserver-utils
```

宿主开放 X11 服务器的权限：

```bash
xhost +
```

### 2.2 Windows

WSL2 现在支持 [WSLg](https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/gui-apps) 技术。因此 Windows 支持通过 WSL2 运行 Linux GUI 应用程序（如 X11 和 Wayland），并且提供了完全集成的桌面体验。注意，这种方法仅适用于 WSL2，不支持 WSL1。[^2]

[^2]: 在适用于 Linux 的 Windows 子系统上运行 Linux GUI 应用，微软，<https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/gui-apps>

在此之前，我们通常使用 [VcXsrv](https://sourceforge.net/projects/vcxsrv/) 等 Windows 下的 X11 服务器来运行 Linux GUI 应用程序。如果想了解更多可以阅读 [Run GUI app in linux docker container on windows host](https://dev.to/darksmile92/run-gui-app-in-linux-docker-container-on-windows-host-4kde) 这篇文章。

通过实际测试，发现使用 VcXsrv 比较卡顿，运行一些大的应用程序会长时间无响应。而 WSL2 直接运行更快速，但稳定性不高。

### 2.3 Mac OS

Mac OS 也可以使用 X11 服务器，但是需要安装 XQuartz。可以参考 [在 MacOS 上运行 Docker GUI 程序](https://bjjdkp.github.io/post/running-guis-with-docker-on-macos/) 这篇文章来操作。

## 3. 创建一个番茄钟容器

中国大陆建议使用清华源构建镜像。

::: code-tabs

@tab 官方源

```dockerfile
FROM ubuntu:22.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt update && \
    apt upgrade -y && \
    apt install gnome-shell-pomodoro -y && \
    apt clean

CMD ["gnome-pomodoro"]
```

@tab 清华源

```dockerfile
FROM ubuntu:22.04

ARG DEBIAN_FRONTEND=noninteractive

ENV TZ=Asia/Shanghai

RUN echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse" > /etc/apt/sources.list && \
    echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse" >> /etc/apt/sources.list && \
    echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse" >> /etc/apt/sources.list && \
    echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse" >> /etc/apt/sources.list && \
    apt update && \
    apt upgrade -y && \
    apt install gnome-shell-pomodoro -y && \
    apt clean

CMD ["gnome-pomodoro"]
```

:::

下面构建镜像：

```bash
docker build -t pomodoro .
```

运行容器：

```bash
docker run -it \
  --rm \
  -v /etc/localtime:/etc/localtime:ro \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -e DISPLAY=unix$DISPLAY \
  --name pomodoro \
  pomodoro
```

运行后，会弹出一个番茄钟的窗口。

<!-- 
## 4. 安装完整的 Ubuntu 桌面

如果需要完整的 Ubuntu 桌面，可以使用下面的 Dockerfile：

```dockerfile
FROM ubuntu:22.04

ARG DEBIAN_FRONTEND=noninteractive

ENV TZ=Asia/Shanghai

RUN echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse" > /etc/apt/sources.list && \
    echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse" >> /etc/apt/sources.list && \
    echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse" >> /etc/apt/sources.list && \
    echo "deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse" >> /etc/apt/sources.list && \
    apt update && \
    apt upgrade -y && \
    apt install ubuntu-desktop -y && \
    apt clean

CMD ["gnome-session"]
```

构建并运行容器：

```bash
docker build -t ubuntu-desktop .
docker run -it \
  -v /etc/localtime:/etc/localtime:ro \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -e DISPLAY=unix$DISPLAY \
  --name ubuntu-desktop \
  ubuntu-desktop \
  bash
``` -->
