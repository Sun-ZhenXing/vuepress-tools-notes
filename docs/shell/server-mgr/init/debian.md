# Debian 服务器初始化

本文使用 **Debian 11 (bullseye)** 操作系统，使用阿里云测试。

[[TOC]]

## 1. ECS 服务器操作初始化

### 1.1 安装基础工具

```bash
apt update
apt upgrade -y
apt install sudo gnupg apt-transport-https ca-certificates
apt install vim wget curl git zip unzip tar -y
```

指定别名：

```bash
echo "alias ll='ls -alF'" >> ~/.bashrc
echo "alias la='ls -A'" >> ~/.bashrc
echo "alias l='ls -CF'" >> ~/.bashrc
source ~/.bashrc
```

### 1.2 新建用户

新建 `admin` 用户，方便权限管理：

```bash
useradd -r -m -s /bin/bash admin
# 如果提示输入密码则输入密码
# 如果没有提示则使用下面的命令修改密码
# passwd admin

# 设置 sudo 免密码
visudo

# 将下面这一行放到 %sudo 下面
# admin   ALL=(ALL:ALL) NOPASSWD: ALL
# 保存并退出：^O，回车，^X

# 进入 admin 用户
su admin
cd
```

然后再次指定别名：

```bash
echo "alias ll='ls -alF'" >> ~/.bashrc
echo "alias la='ls -A'" >> ~/.bashrc
echo "alias l='ls -CF'" >> ~/.bashrc
source ~/.bashrc
```

### 1.3 安装 Docker

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

# 将当前用户加入docker用户组
sudo gpasswd -a ${USER} docker

# 更新 Docker Daemon 配置，使得后续 docker 操作无需 sudo
sudo sed -i s/SocketMode=0660/SocketMode=0666/g /usr/lib/systemd/system/docker.socket
sudo systemctl daemon-reload
sudo systemctl restart docker.socket
```

Docker 已经全面停止了 Docker Compose V1 的支持，并且已经集成了 Docker Compose V2，只需要指定别名即可：

```bash
echo "alias docker-compose='docker compose'" >> ~/.bashrc
source ~/.bashrc
```

下面进入 root 用户操作：

```bash
sudo su
```

定义别名：

```bash
echo "alias docker-compose='docker compose'" >> ~/.bashrc
source ~/.bashrc
```

### 1.4 使用 Swap 文件

查看服务器是否提供了 Swap 分区：

```bash
free -h
```

如果没有提供 Swap 分区，可以使用下面的命令创建 Swap 文件：

```bash
# 4096000 = 4G，如果需要可以修改为其他数值
dd if=/dev/zero of=/var/swap bs=1024 count=4096000
mkswap /var/swap
chmod 0600 /var/swap
swapon /var/swap
echo "/var/swap swap swap defaults 0 0" >> /etc/fstab
```

## 2. 轻量应用服务器

### 2.1 安装基础工具

指定别名：

```bash
echo "alias ll='ls -alF'" >> ~/.bashrc
echo "alias la='ls -A'" >> ~/.bashrc
echo "alias l='ls -CF'" >> ~/.bashrc
echo "alias docker-compose='docker compose'" >> ~/.bashrc
source ~/.bashrc
```

进入 `admin` 用户：

```bash
su admin
```

安装基础工具：

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install sudo gnupg apt-transport-https ca-certificates
sudo apt install sudo vim wget curl git zip unzip tar -y
```

再次执行上述指定别名的命令。

### 2.2 安装 Docker

安装 Docker：

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

# 将当前用户加入docker用户组
sudo gpasswd -a ${USER} docker

# 更新 Docker Daemon 配置，使得后续 docker 操作无需 sudo
sudo sed -i s/SocketMode=0660/SocketMode=0666/g /usr/lib/systemd/system/docker.socket
sudo systemctl daemon-reload
sudo systemctl restart docker.socket

# 指定 Docker Compose 别名
echo "alias docker-compose='docker compose'" >> ~/.bashrc
source ~/.bashrc
```

### 2.3 使用 Swap 文件

进入 root 用户：

```bash
sudo su
```

查看服务器是否提供了 Swap 分区：

```bash
free -h
```

如果没有提供 Swap 分区，可以使用下面的命令创建 Swap 文件：

```bash
# 4096000 = 4G，如果需要可以修改为其他数值
dd if=/dev/zero of=/var/swap bs=1024 count=4096000
mkswap /var/swap
chmod 0600 /var/swap
swapon /var/swap
echo "/var/swap swap swap defaults 0 0" >> /etc/fstab
```
