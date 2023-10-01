# 临时记录

[[TOC]]

::: warning TODO 计划

- [ ] 健康检查 healthy
- [ ] 重启策略 restart

:::

## 1. 容器网络

将容器的网络绑定到指定网络，并使用别名：

```bash
docker network connect --alias docs alex-data-core_default alex-docs
```

## 2. 容器内检查容器 ID

以下命令作用于容器内。查看 `/proc/self/cgroup` 文件，其中包含容器 ID。

```bash
cat /proc/self/cgroup
```

得到 ID 信息：

```bash
head -1 /proc/self/cgroup | cut -d/ -f3
```

得到 12 位 ID：

```bash
head -1 /proc/self/cgroup | cut -d/ -f3 | cut -c1-12
```

## 3. 在容器内获取主机 Docker 信息

可用使用主机的 Docker API，然后使用任意 Docker 客户端即可。

```bash
docker run -d \
    --name ub22 \
    -v /var/run/docker.sock:/var/run/docker.sock \
    python:3.10.12-bullseye
```

此时在容器内安装 Python 版本的 Docker 客户端 `docker`：

```bash
pip install docker
```

使用 Python 代码获取主机 Docker 信息：

```python
import docker

client = docker.from_env()

# 获取主机 Docker 版本
print(client.version())

# 获取全部容器名称
for container in client.containers.list():
    print(container.name)

# 获取主机镜像列表
for image in client.images.list():
    print(image.tags)
```

## 4. 容器 Health Check

- 使用 [autoheal](https://github.com/willfarrell/docker-autoheal) 自动重启容器
- `docker-compose` 的健康检查
