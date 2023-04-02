# 虚拟环境

## 1. Docker

Termux 支持 Docker 客户端，但不支持 Docker Daemon，因此无法直接在 Termux 中运行 Docker 容器。

```bash
pkg install docker
```

安装 Docker 客户端后，可以通过配置 Containerd 来运行远程的 Docker 容器。
