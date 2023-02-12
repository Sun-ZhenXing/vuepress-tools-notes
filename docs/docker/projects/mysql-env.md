---
title: Docker 搭建 MySQL 环境
description: Docker 搭建 MySQL 环境
---

# Docker 搭建 MySQL 环境

[[TOC]]

```bash
docker pull mysql:8.0.32
docker run -itd \
    --name mysql80 \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=root_password \
    -e TZ=Asia/Shanghai \
    mysql:8.0.32
```

进入容器：

```bash
docker exec -it mysql80 /bin/bash
```
