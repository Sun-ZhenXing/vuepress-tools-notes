---
title: 基于 WSL2 的 Docker 配置说明
description: 基于 WSL2 的 Docker 配置说明
---

# 基于 WSL2 的 Docker 配置说明

[[TOC]]

## 1. 修改容器配置

容器配置一般在 `\\wsl.localhost\docker-desktop-data\data\docker\containers\${ID}\hostconfig.json` 位置，其中 `${ID}` 为此容器的 ID。

查看 Docker 容器的 ID 可使用下面的命令：

```bash
docker inspect ${name} --format="{{.ID}}"
```

其中 `${name}` 为容器的 ID 或名称。

## 1.1 修改共享内存

在创建容器时指定共享内存大小：

```bash
docker run -itd --shm-size="1g" ubuntu
```

一般训练的时候对共享内存需求很大，所以我们需要修改共享内存，最合理的共享内存大小是电脑内存的 25% 然后四舍五入到整数的数值。

查看共享内存大小：

```bash
df -lh | grep shm
```

找到上述配置文件，然后修改 `shm_size` 条目的值即可，单位是 KB。
