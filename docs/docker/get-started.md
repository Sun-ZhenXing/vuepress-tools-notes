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
docker images
```

使用镜像创建容器，并运行：

```bash
docker run -itd --name ubuntu-test ubuntu
```

## 2. 更多操作速记

如果一个容器停止运行了，可以手动启动它：

```bash
docker start <container_name|ID>
```

如果需要进入容器内的终端，可以执行 `bash`：

```bash
docker exec -it <container_name|ID> /bin/bash
```

也可以手动停止一个容器：

```bash
docker stop <container_name|ID>
```

从文件中导入镜像：

```bash
docker load --input <image_file>.tar.gz
```

复制容器内的文件到主机：

```bash
docker cp <container_name|ID>:<file_path> <host_path>
```

复制主机文件到容器：

```bash
docker cp <host_file> <container_name|ID>:<container_path>
```
