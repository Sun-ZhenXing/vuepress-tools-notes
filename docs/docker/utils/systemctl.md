# Docker 内替换 systemctl

[[TOC]]

## 1. 问题背景

Docker 只是提供了进程隔离，而不是真正的虚拟机。Docker 容器的入口代替了 Linux 的 `init` 进程，所以也没有 `systemd` 等服务。Docker 应用一般都是单容器单应用，一般也不使用 `systemctl` 进行管理，如常见的 Nginx、MySQL 等在官方镜像中都是直接提供的，相互独立运行。

我们常常需要对一些历史应用进行容器化，但是有一些应用依赖于 `systemctl` 命令进行管理。由于在 Docker 容器内部一般是不提供 `systemctl` 命令的，这对应用的容器化造成阻碍。因此需要在容器内部模拟 `systemctl` 命令。

## 2. 解决方案

### 2.1 修改应用

最好的方法是找到应用依赖 `systemctl` 命令的原因，然后修改应用的启动代码，将其生命周期托管给 Docker 本身。但这种方式需要针对具体应用进行修改，需要较大的成本。

### 2.2 模拟 systemctl

如果应用难以修改，可以模拟 `systemctl` 命令本身。开源项目 [gdraheim/docker-systemctl-replacement](https://github.com/gdraheim/docker-systemctl-replacement) 实现了 `systemctl` 命令的大部分功能，可以直接使用，一般也很少遇到问题。

在 Debian/Ubutnu 系统中，直接使用下面的命令来安装 `docker-systemctl-replacement`，安装后效果一致：

```bash
apt install -y systemctl
```

在编写 `Dockerfile` 时，通常需要将入口换为 `systemctl` 命令，例如：

```dockerfile
CMD ["systemctl", "-1"]
```

作者也提供了一些示例，可以参考 [gdraheim/docker-systemctl-images](https://github.com/gdraheim/docker-systemctl-images)。

另外也可以通过 `pip` 安装使用：

```bash
pip install docker-systemctl-replacement
```

其他系统可以下载源码直接使用。前提是需要提供 Python（2.x 和 3.x 都可以），例如安装 Python 2 版本：

```bash
curl -o /bin/systemctl https://raw.githubusercontent.com/gdraheim/docker-systemctl-replacement/master/files/docker/systemctl.py
chmod +x /bin/systemctl
```

安装 Python 3 版本：

```bash
curl -o /bin/systemctl https://raw.githubusercontent.com/gdraheim/docker-systemctl-replacement/master/files/docker/systemctl3.py
chmod +x /bin/systemctl
```

注意，`docker-systemctl-replacement` 在行为上并不等同于 `systemctl` 命令，只是提供了相似的命令行接口，具体差异见 [项目文档](https://github.com/gdraheim/docker-systemctl-replacement#problems-with-systemd-in-docker)。
