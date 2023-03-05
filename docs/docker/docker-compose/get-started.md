---
title: Docker Compose 入门指南
description: Docker Compose 入门指南
---

# Docker Compose 入门指南

[[TOC]]

## 1. 安装 Docker Compose

可用在官方仓库查看其最新版本 [GitHub](https://github.com/docker/compose/releases/latest)。

从 GitHub 下载：

```bash
export compose_version=v2.16.0
sudo curl -L https://github.com/docker/compose/releases/download/${compose_version}/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```

从国内镜像下载：

```bash
export compose_version=v2.16.0
curl -L https://get.daocloud.io/docker/compose/releases/download/${compose_version}/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
```

建立软链接，并查看版本：

```bash
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
docker-compose version
```
