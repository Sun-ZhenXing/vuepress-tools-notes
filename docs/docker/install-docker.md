# Docker 安装

[[TOC]]

## 1. Debian/Ubuntu Docker 安装

### 1.1 自动安装

这是推荐做法，例如使用阿里云镜像进行安装：

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

或者使用国内 DaoCloud 镜像：

```bash
curl -sSL https://get.daocloud.io/docker | sh
```

### 1.2 手动安装

如果已经安装过旧版本的 Docker，请先卸载：

```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
```

在新主机上首次安装 Docker 之前，需要设置 Docker 仓库。之后，您可以从仓库安装和更新 Docker。

```bash
sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common
```

下面进行安装：

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

### 1.3 可选：给普通用户配置权限

```bash
sudo sed -i s/SocketMode=0660/SocketMode=0666/g /usr/lib/systemd/system/docker.socket
sudo systemctl daemon-reload
sudo systemctl restart docker.socket
```

## 2. CentOS/RedHat Docker 安装

## 3. Windows Docker 安装

## 4. MacOS Docker 安装
