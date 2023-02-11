---
title: WSL2 中搭建深度学习环境
description: WSL2 中搭建深度学习环境
---

# WSL2 中搭建深度学习环境

在 [Docker 搭建深度学习环境](../projects/deeplearning-env.md) 一文中，我们使用 Ubuntu 搭建了 Docker 下的深度学习环境。而 WSL2 同样也提供了完整的 CUDA 支持，我们可以在 Windows 下享受 Linux 环境下的优势。

[[TOC]]

## 1. 为什么使用 Docker

WSL2 Docker 内执行速度大约为 Ubuntu 主机的 80%，带来了一些性能牺牲。但是 Docker 的优势远比这点损失来的多：

- 随时启动和停止一个环境
- 环境与主机隔离，主机可以正在做别的事情
- 同时运行多个环境，并分配 GPU
- 随意切换 CUDA 版本
- 随时备份和恢复一个环境，可将镜像迁移到不同机器上运行

## 2. 如何使用

条件：

- 主机是现代 CPU 且是 x86 架构，安装有现代的 NVIDIA 显卡
- 需要 Windows 10 以上并安装有 WSL2。如果不了解如何安装可参考网络
- 首先需要安装 Docker Desktop，这同时会安装 WSL2 的两个容器 `docker-desktop-data` 和 `docker-desktop`

现在我们在主机查看 NVIDIA 显卡信息：

```bash
nvidia-smi
```

得到 CUDA 版本，这个版本是你可以安装 CUDA 的最高版本，CUDA 是向下兼容的，因此可以使用比这更小的版本。

::: info 升级显卡驱动

如果你的 CUDA 版本小于 11.6 就建议升级显卡驱动了，PyTorch 即将取消 Python 3.7 和 CUDA 11.6 的支持（自 2023/2/1 开始，见 [官方博客](https://pytorch.org/blog/deprecation-cuda-python-support/)），显卡驱动安装最新版通常不会出问题。

:::

其次：

- **不需要** 在 Windows 上安装 CUDA 驱动
- **不需要** 在 Windows 上安装 cuDNN 组件
- **不需要** 在 WSL2 内安装显卡驱动或其他
- **不需要** 在容器内安装 CUDA 或其他

这就是全部了，如果上述条件都满足就可以使用 PyTorch、TensorFlow 或任何你需要的环境继续了？

这是因为 WSL2 内核支持的 Docker 已经支持 `--gpus` 了（Docker 版本大于 19.03 即可），再也不需要 `nvidia-docker2` 来工作了。

## 3. 安装 CUDA 容器

拉取 CUDA 11.6 Ubuntu 20.04 镜像（也可以直接拉取 PyTorch 镜像）：

```bash
docker pull nvidia/cuda:11.6.0-base-ubuntu20.04
```

创建容器，可指定参数：

- 如果需要读外部数据请挂载目录或磁盘，如 `-v /mnt/d/docker_shared:/shared_data`（WSL2 内的磁盘路径为 `/mnt/c`、`/mnt/d`，对应 C、D 盘）
- 如果需要使用 Jupyter Notebook 请映射端口，如 `-p 8888:8888`
- 如果机器有多个显卡，可以指定其序号 `--gpus 1,3`，一块 GPU 只能分配到一个正在运行的容器内

```bash
docker run -itd \
    --gpus all \
    --name ub-cu11.6 \
    nvidia/cuda:11.6.0-base-ubuntu20.04 /bin/bash
```

创建一个更复杂的容器：

```bash
docker run -itd \
    -v /mnt/d/docker_shared:/shared_data \
    -p 8888:8888 \
    --gpus all \
    --name ub-cu11.6 \
    nvidia/cuda:11.6.0-base-ubuntu20.04 /bin/bash
```

进入容器：

```bash
docker exec -it ub-cu11.6 /bin/bash
```

现在和 Linux 系统一致了。

## 4. 在容器内安装深度学习环境

更新镜像源：

```bash
mv /etc/apt/sources.list /etc/apt/sources.list-bak
echo 'deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse' > /etc/apt/sources.list
```

配置镜像后，下列操作基本为满速，十几分钟即可安装完成全部依赖。

安装工具：

```bash
apt update
apt upgrade -y
apt install sudo vim wget curl git zip unzip tar -y

apt install python3-pip
```

（可选）添加用户，并将用户可执行文件加入 PATH：

```bash
useradd -r -m -s /bin/bash admin
# 如果提示输入密码则输入密码
# 如果没有提示则使用下面的命令修改密码
passwd admin

su admin
cd
echo 'export PATH="/home/admin/.local/bin:$PATH"' > ~/.bashrc
source ~/.bashrc
```

安装 Python 环境和常见依赖：

```bash
python3 -m pip install -i https://pypi.tuna.tsinghua.edu.cn/simple --upgrade pip

# 配置负载均衡的 PyPI 镜像，可快速选择较快的镜像源
pip3 config set global.extra-index-url "https://pypi.tuna.tsinghua.edu.cn/simple/ https://mirrors.aliyun.com/pypi/simple/ https://repo.huaweicloud.com/repository/pypi/simple/ https://mirrors.bfsu.edu.cn/pypi/web/simple/"
pip3 install opencv-python-headless
```

安装 PyTorch：

```bash
pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu116
```

（可选）安装 YOLOv8 环境：

```bash
pip3 install ultralytics
pip3 uninstall opencv-python
pip3 uninstall opencv-python-headless
pip3 install opencv-python-headless
```
