---
title: Docker 部署 Minecraft PE 服务器
description: Docker 部署 Minecraft PE 服务器
---

# Docker 部署 Minecraft PE 服务器

[[TOC]]

::: warning 待补充

部分信息不详细，需要补充。

:::

## 1. 下载程序并创建容器

在 [基岩版服务器下载页面](https://www.minecraft.net/zh-hans/download/server/bedrock) 下载基岩版 Linux 程序。

创建容器：

```bash
docker run -d \
    --name mc-pe \
    -p 19132:19132/udp \
    -p 19133:19133/udp \
    --volume "$PWD/mincraft-pe":/root \
    ubuntu:20.04
```

将下载的文件放到 `$PWD/mincraft-pe` 下面，然后将启动命令作为服务运行。

其运行命令为：

```bash
LD_LIBRARY_PATH=. ./bedrock_server
```
