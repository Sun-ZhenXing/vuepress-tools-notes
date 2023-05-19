# Docker 配置远程连接

作者通过 Windows 10 远程连接 Ubuntu 服务器内的 Docker，可以使用 VS Code/JetBrains IDE 的远程开发能力，从而可以快速切换 Docker 容器进行开发。

下面的方法适用于 Debian/Ubuntu 服务器，也可能适用于更多系统，但只在 Ubuntu 上进行测试过。客户端可以是任意支持 Docker 的系统。

下面介绍两种方法来配置 Docker 远程连接，建议只采用第二种方法。

[[TOC]]

## 1. 使用 HTTP/TCP 协议

::: danger 警告！

此方式将端口暴露出来，除非在安全的内部网络中，否则绝不应该使用此方法，此方式将暴露 root 权限。

:::

下面的操作需要远程和本地端都安装 Docker，本地至少安装 Docker 客户端。

### 1.1 配置服务端

修改文件 `/usr/lib/systemd/system/docker.service`，将 `ExecStart` 这一行注释：

```properties
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
```

然后写入下面这一行：

```properties
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H fd:// --containerd=/run/containerd/containerd.sock
```

然后重启服务：

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```

下面可以远程访问这个端口了，访问 `http://<your_ip>:2375/info` 可以看到 JSON 信息。

### 1.2 配置客户端

可以使用两种方法进行连接。例如你的服务器暴露地址为 `tcp://192.168.0.110:2375`，请将其替换为自己的 IP 地址。

第一种是直接暴露出变量，`docker` 会自动检测。这种方式适合临时使用。

::: code-tabs#shell

@tab Linux

```bash
export DOCKER_HOST=tcp://192.168.0.110:2375
```

@tab Windows

```bash
set DOCKER_HOST=tcp://192.168.0.110:2375
```

:::

下面的 `docker` 命令将自动选择 Context。

第二种方法是创建一个新的 Context，这种方式适合长期使用，例如创建一个名为 `my-remote` 的 Context：

```bash
docker context create\
    --description "local vm docker test"\
    --docker "host=tcp://192.168.0.110:2375"\
    my-remote
```

其中 `--description "..."` 是可选的描述。然后使用这个 Context：

```bash
docker context use my-remote
docker info
```

下面就可以正常使用了。

## 2. 使用 SSH 隧道连接

第一种方案仅适用于本地网络或者内部的安全网络，否则将暴露 root 权限，导致服务器被入侵。

这一种方案将使 Docker 直接连接到远程的 Docker Daemon，使用 SSH 确保安全。通常来说，Docker Daemon 只能通过 Unix Domain Socket 进行连接，但是通过 SSH 隧道可以连接另一台机器上的 Docker Daemon。Docker 官方文档也提供了相关功能描述。

连接之前，需要配置好 SSH 免密登录账户，并且该账户需要有访问 Docker Unix Domain Socket 的权限。

### 2.1 配置用户权限

下面的操作在服务端进行。

如果你使用 root 用户进行连接，请跳过此步骤。但建议不要使用 root 用户来创建此连接。

由于需要账户有访问 Docker Unix Domain Socket 的权限，可以创建新用户然后授权。

查看是否有 `docker` 组：

```bash
groups
```

如果没有，添加 `docker` 组：

```bash
sudo groupadd docker
```

简单起见，我们可以在默认用户上赋予权限，创建新用户同理：

```bash
sudo usermod -a -G docker $USER
```

下面查看 Docker Socket 权限：

```bash
cat /usr/lib/systemd/system/docker.socket
```

默认情况下，有这样的设置 `SocketMode=0660`，可以将其改为 `0666` 来授权给普通用户。

设置完成后重启：

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker.socket
```

设置完成后，默认用户访问 Docker 资源不需要加上 `sudo` 了，如果不配置下面的操作也无法进行。

### 2.1 创建自动登录的 SSH 连接

下面的操作在客户端进行。

如果你的系统已经有了密钥对，可以直接复制到远程服务器的 SSH 公钥列表中。否则，先生成密钥对：

```bash
ssh-keygen
```

回车两次，生成下面的文件：

- `~/.ssh/id_rsa`
- `~/.ssh/id_rsa.pub`

将 `id_rsa.pub` 文件的内容复制到远程服务器的 `~/.ssh/authorized_keys` 内即可。

现在可以直接登录远程服务器了：

```bash
ssh <user>@<ip>
```

### 2.3 远程连接

<!-- markdownlint-disable MD051 -->

可以参考 [1.2 配置客户端](#_1-2-配置客户端)，只需要将 URL 替换为 `ssh://<user>@<ip>` 即可。
