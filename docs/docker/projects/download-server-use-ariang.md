---
title: Docker 搭载 AriaNg 下载服务器
description: Docker 搭载 AriaNg 下载服务器
---

# Docker 搭载 AriaNg 服务器

[[TOC]]

## 1. 创建容器

拉取镜像：

```bash
docker pull p3terx/aria2-pro
docker pull p3terx/ariang
```

创建 Aria2 容器，将 `<rpc_password>` 改为你自定义的 RPC 密码：

```bash
docker run -d \
    --name aria2 \
    --restart unless-stopped \
    --log-opt max-size=1m \
    -e UMASK_SET=022 \
    -e RPC_SECRET=<rpc_password> \
    -e RPC_PORT=6800 \
    -e LISTEN_PORT=6888 \
    -p 16800:6800 \
    -p 16888:6888 \
    -p 16888:6888/udp \
    -v $HOME/config:/config \
    -v $HOME/downloads:/downloads \
    p3terx/aria2-pro
```

创建 AriaNg 下载客户端：

```bash
docker run -d \
    --name ariang \
    --log-opt max-size=1m \
    --restart unless-stopped \
    -p 16880:6880 \
    p3terx/ariang
```

## 2. 配置设置

### 2.1 配置 RPC 设置

打开 `http://<ip>:16880/`，然后点击 AriaNg 设置，点击 RPC。

将 Aria2 RPC 地址的端口号改为 `16800`，然后填写 Aria2 RPC 秘钥（即你自定义的密码）。

刷新页面即可看到已连接。现在可以进行离线下载了。

### 2.2 配置百度网盘直链下载设置

要下载百度网盘直链，需要：
1. 将 Aria2 设置 / HTTP / 自定义 User Agent 设置为 `netdisk;PC`（此配置项可参考最新解析工具）
2. （建议）将单服务器最大连接数设置为 `4`
