# Docker 搭建 MySQL 环境

[[TOC]]

## 1. 基本使用

将 `root_password` 替换为自己的密码，然后执行以下命令：

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

## 2. 权限问题

外部无法连接，报错：

```bash
Access denied for user 'root'@'172.17.0.1' (using password: YES)")
```

原因：容器内部的 MySQL 服务没有对外部连接授权，需要授权。

如果没有创建容器或需要新建容器，可以指定 `MYSQL_ROOT_HOST` 的值为 `%`，这样容器内部的 MySQL 服务就会对外部连接授权。

```bash
docker run -itd \
    --name mysql80 \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=root_password \
    -e MYSQL_ROOT_HOST=% \
    -e TZ=Asia/Shanghai \
    mysql:8.0.32
```

如果已经创建了容器，可以通过以下命令授权：

::: code-tabs#mysql

@tab MySQL 5.7

```sql
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

@tab MySQL 8.0

```sql
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
```

:::
