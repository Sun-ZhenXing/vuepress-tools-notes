# 使用 DockerHub

[[TOC]]

## Docker 镜像的后缀含义

| 后缀     | 含义           |
| -------- | -------------- |
| bookworm | Debian 12      |
| bullseye | Debian 11      |
| buster   | Debian 10      |
| stretch  | Debian 9       |
| alpine   | Alpine Linux   |
| bionic   | Ubuntu 18.04   |
| focal    | Ubuntu 20.04   |
| jammy    | Ubuntu 22.04   |
| windows  | Windows Server |
| slim     | 精简版本       |

注：
- `slim` 表示最小安装包，仅包含需要运行指定容器的特定工具集
- Alpine Linux 是一个轻量级的 Linux 发行版，它的镜像大小只有 5MB 左右，因此在 Docker 容器化的应用中得到了广泛的应用
