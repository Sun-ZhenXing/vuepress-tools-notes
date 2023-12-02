# 🚀 Docker 常用命令汇总

[[TOC]]

## 1. 安装 Docker

Debian/Ubuntu 系统安装 Docker CE：

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

# 更新 Docker Daemon 配置，使得无需 sudo
sudo sed -i s/SocketMode=0660/SocketMode=0666/g /usr/lib/systemd/system/docker.socket
sudo systemctl daemon-reload
sudo systemctl restart docker.socket
```

定义 Docker Compose 别名：

```bash
echo "alias docker-compose='docker compose'" >> ~/.bashrc
source ~/.bashrc
```

## 2. Docker 镜像和容器

查看所有镜像：

```bash
docker ps -a
```

查看所有容器：

```bash
docker images
```

将容器提交为镜像：

```bash
docker commit $container_id $image_name[:$tag]
```

将镜像导出为 `.tar` 文件：

```bash
docker save -o $filename.tar $image_name[:$tag]
```

从 `.tar` 文件导入镜像：

```bash
docker load -i $filename.tar
```

删除镜像：

```bash
docker rmi $image_name[:$tag]
```

删除容器：

```bash
docker rm $container_id
```

使用指定 `Dockerfile` 构建镜像：

```bash
docker build -t $image_name[:$tag] $path_to_dockerfile
```

## 3. Docker Compose

查看 Docker Compose 版本：

```bash
docker compose version
```

启动 Docker Compose 构建后台应用：

```bash
docker compose up -d
```

删除 Docker Compose 构建的应用：

```bash
docker compose down
```

## 4. Docker 清理

清理所有未使用的镜像、容器、网络和卷：

```bash
docker system prune -a
```

清理所有未使用的镜像、容器和网络：

```bash
docker system prune
```

强制清理构建缓存：

```bash
docker builder prune -a -f
```

强制清理无标签镜像：

```bash
docker image prune -a -f
```
