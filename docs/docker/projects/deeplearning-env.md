---
title: Docker 搭建深度学习环境
description: Docker 搭建深度学习环境
---

# Docker 搭建深度学习环境

每一篇论文都可以使用不同的操作系统、Python 环境、CUDA 版本和其他依赖，为了复现论文或炼丹，通常需要大量的配置。如果能将 CUDA 驱动和 cuDNN 驱动都安装在不同容器中就可以做到每一个项目都是独立环境。

通过上一篇的远程 Docker 连接，我们可以调用远程 Docker 容器开发的能力了。本文将驱动 NVIDIA GPU 来提供 3D 加速或 CUDA 支持的 Docker 环境。

[[TOC]]

## 1. 安装 NVIDIA 显卡驱动

条件：
- 主机是 x86_64 架构计算机
- 主机拥有 CUDA 支持的 NVIDIA 显卡
- 主机安装 Ubuntu 20.04 或更高的系统，建议选择最稳定的，例如当前 Ubuntu 22 并未完全得到第三方支持，等到 Ubuntu 22 被各类生态支持后可以选择 Ubuntu 22

必须要在主机上安装显卡驱动，但是不需要安装 CUDA 驱动和 cuDNN。

如果你的主机镜像中已经包含了 NVIDIA 驱动，请忽略这一步。但是这通常不是最新的，可以通过更新驱动提高 CUDA 兼容版本。

### 1.1 禁用 Nouveau 驱动

在安装驱动之前需要禁用 Nouveau 驱动，可以通过下面的命令检查当前系统是否正在使用 Nouveau 驱动：

```bash
lspci | grep nouveau
```

编辑文件 `/etc/modprobe.d/blacklist.conf`，如果没有则创建，末尾加入两行：

```conf
blacklist nouveau
options nouveau modeset=0
```

更新配置，然后重启：

```bash
sudo update-initramfs -u
sudo reboot
```

重启后检查 Nouveau 驱动是否被禁用：

```bash
lspci | grep nouveau
```

如果没有内容则正常。

### 1.2 从 NVIDIA 官网下载安装

访问驱动下载的官方网站：<https://www.nvidia.cn/Download/index.aspx?lang=cn>，然后选择你的显卡。


| 配置项   | 配置示例值              |
| -------- | ----------------------- |
| 产品类型 | GeForce                 |
| 产品系列 | GeForce RTX 40 Series   |
| 产品家族 | NVIDIA GeForce RTX 4090 |
| 操作系统 | Linux 64-bit            |
| 下载类型 | 生产分支生              |
| 语言     | English (US)            |

点击搜索，同意协议后自动下载。

下载后运行即可：

```bash
sudo bash ./NVIDIA-Linux-x86_64-xxx.xx.xx.run
```

安装时可以选择自动配置 Xorg，安装完成后检查驱动是否加载：

```bash
nvidia-smi
```

其中 `CUDA Version: xx.x` 表示你可以安装的最高版本的 CUDA，而不是你已安装的 CUDA 驱动版本。

## 2. 安装 nvidia-docker2 相关组件

安装前确保 Docker 被正确安装。

加入软件镜像源：

```bash
distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \
    && curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add - \
    && curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
```

更新并安装：

```bash
sudo apt-get update
sudo apt-get install -y nvidia-docker2
```

安装过程将自动安装 NVIDIA Container Toolkit。

`default-runtime` 配置可以让 `docker run` 默认使用 nvidia-docker 组件提供的环境。此时 `/etc/docker/daemon.json` 配置如下：

```json
{
    "default-runtime": "nvidia",
    "runtimes": {
        "nvidia": {
            "path": "nvidia-container-runtime",
            "runtimeArgs": []
        }
    }
}
```

如果你不修改配置，也可以在 `docker run` 时使用 `--runtime=nvidia` 来指定运行时。

重启 Docker 来应用：

```bash
sudo systemctl restart docker
```

现在，拉取镜像来测试是否可用：

```bash
docker run -it --rm --gpus all nvidia/cuda:11.6.0-base-ubuntu20.04 nvidia-smi
```

如果正确打印了配置参数则表示正确。

## 3. 使用镜像

可以使用 `nvidia-docker` 来创建容器命令：

```bash
nvidia-docker run -it\
    --runtime=nvidia\
    -v <宿主机绝对路径目录>:<容器内目录>\
    --name <容器名> <镜像名>\
    /bin/bash
```

我们使用正常的方式创建容器，后台运行：

```bash
docker run -itd \
    --gpus all \
    --name ub-cu11.6 \
    nvidia/cuda:11.6.0-base-ubuntu20.04
```

然后进入容器：

```bash
docker exec -it ub-cu11.6 /bin/bash
```

安装基础工具：

```bash
apt update
apt upgrade -y
apt install sudo vim wget curl git zip unzip tar -y
```

添加用户：

```bash
useradd -r -m -s /bin/bash admin
# 如果提示输入密码则输入密码
# 如果没有提示则使用下面的命令修改密码
passwd admin
```

安装 Miniconda3：

```bash
su admin
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash ./Miniconda3-latest-Linux-x86_64.sh -b
echo 'export PATH="/home/admin/miniconda3/bin:$PATH"' > ~/.bashrc
source ~/.bashrc

conda init bash
exit
```

然后继续进入 `admin` 环境，就会自动进入 `conda (base)` 环境：

```bash
su admin
```
