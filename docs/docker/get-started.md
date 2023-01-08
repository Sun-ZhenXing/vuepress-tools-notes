---
title: 开始使用
description: 开始使用
---

# 开始使用

## 1. 使用 Ubuntu 镜像

拉取最新的的 Ubuntu 镜像：

```bash
docker pull ubuntu:latest
```

查看镜像：

```bash
sudo docker images
```

使用镜像创建容器，并运行：

```bash
docker run -itd --name ubuntu-test ubuntu
```
