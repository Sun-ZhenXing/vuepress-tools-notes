# Debian 系统操作合集

[[TOC]]

## Node.js

Node.js 18：

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Node.js 20：

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

设置镜像和使用 `corepack`：

```bash
npm config set registry https://registry.npmmirror.com/
sudo corepack enable
corepack prepare pnpm@latest --activate
corepack prepare yarn@stable --activate
```

使用 `pnpm` 安装常见工具：

```bash
pnpm setup
source ~/.bashrc
pnpm config set registry https://registry.npmmirror.com/
pnpm add -g http-server
```

## Docker

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

Docker Compose 现在已经是 Docker 的一部分，不需要单独安装。

```bash
echo "alias docker-compose='docker compose'" >> ~/.bashrc
source ~/.bashrc
```

## MySQL

先到 [MySQL APT](https://dev.mysql.com/downloads/repo/apt/) 源上确认信息，然后将你得到的文件链接替换下面的链接，即替换 `mysql-apt-config_0.8.25-1_all.deb`：

```bash
wget https://dev.mysql.com/get/mysql-apt-config_0.8.25-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.25-1_all.deb
rm mysql-apt-config_0.8.25-1_all.deb

sudo apt update
sudo apt-get install mysql-server
```

## OpenJDK

默认版本：

```bash
sudo apt install default-jdk
```

OpenJDK 11：

```bash
sudo apt install openjdk-11-jdk
```

OpenJDK 17：

```bash
sudo apt install openjdk-17-jdk
```
