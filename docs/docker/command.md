# 🚀 命令汇总

[[TOC]]

## 1. 常用命令

下面的命令适用于 Debian/Ubuntu 系统。

建议安装系统 **Debian 11 (bullseye)**。

### 1.1 安装基础工具

```bash
apt update
apt upgrade -y
apt install sudo vim wget curl git zip unzip tar -y
```

### 1.2 新建用户

新建 `admin` 用户，方便权限管理：

```bash
useradd -r -m -s /bin/bash admin
# 如果提示输入密码则输入密码
# 如果没有提示则使用下面的命令修改密码
passwd admin

# 设置 sudo 免密码
visudo

# 将下面这一行放到 %sudo 下面
# admin   ALL=(ALL:ALL) NOPASSWD: ALL
# 保存并退出：^O，回车，^X

# 进入 admin 用户
su admin
cd
```

### 1.3 安装 Docker

```bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

# 更新 Docker Daemon 配置，使得无需 sudo
sudo sed -i s/SocketMode=0660/SocketMode=0666/g /usr/lib/systemd/system/docker.socket
sudo systemctl daemon-reload
sudo systemctl restart docker.socket
```

安装 Docker Compose，在 [GitHub Release](https://github.com/docker/compose/releases) 上可以查看 Docker Compose 的最新版本。

```bash
export compose_version=v2.20.3
sudo curl -L https://github.com/docker/compose/releases/download/${compose_version}/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
docker-compose version
```

如果 GitHub Release 下载缓慢可以尝试使用 [GitHub Release 加速站点](https://doget.nocsdn.com/)。
