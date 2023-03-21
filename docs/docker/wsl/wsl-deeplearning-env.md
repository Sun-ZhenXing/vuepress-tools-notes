# WSL2 中搭建深度学习环境

在 [Docker 搭建深度学习环境](../projects/deeplearning-env.md) 一文中，我们使用 Ubuntu 搭建了 Docker 下的深度学习环境。而 WSL2 同样也提供了完整的 CUDA 支持，我们可以在 Windows 下享受 Linux 环境下的优势。

[[TOC]]

## 1. WSL2 进行深度学习的最佳实践

【Q】为什么使用 Docker 进行深度学习？

【A】WSL2 Docker 内执行速度大约为 Ubuntu 主机的 80%，带来了一些性能牺牲。但是 Docker 的优势远比这点损失来的多：

- 随时启动和停止一个环境
- 环境与主机隔离，主机可以正在做别的事情
- 同时运行多个环境，并分配 GPU
- 随意切换 CUDA 版本
- 随时备份和恢复一个环境，可将镜像迁移到不同机器上运行

【Q】为什么使用 WSL2 进行深度学习？

【A】可以同时使用 Linux 的训练环境和 Windows 的便捷界面，而且互不影响，可以协同工作。

【Q】如果我的数据集较大（或者在外置磁盘中），应该如何操作？

【A】创建容器时使用 `-v host_path:container_path` 挂载路径，Windows 和 Docker 容器可共享此路径，这样可以直接在 Windows 下操作文件，然后在容器内训练，建议所有深度学习的容器都挂载同一个位置，方便共享数据。详细操作见下文。

【Q】如果我想使用 TensorBoard 或者 Jupyter 怎么办？

【A】映射端口即可，见下文。如果你希望使用 Matplotlib 等绘图工具，建议在 Jupyter 中进行。

【Q】如果我希望使用 IDE 在容器内开发程序，并进行调试，应该怎么做？

【A】例如使用 VS Code 开发，需要安装 Docker 和远程开发插件。请参考 [VS Code 使用 Docker](../projects/vscode-use-docker.md)。同样的 PyCharm 和其他 JetBrain 系列 IDE 也支持容器内开发。推荐使用挂载到 Windows 下的路径进行开发，然后使用远程开发能力，在 Windows 下实时预览生成结果。

【Q】我在创建容器之后想修改容器的配置，如增加挂载和映射端口应该怎么做？

【A】请参考 [基于 WSL2 的 Docker 配置说明](./wsl-docker-config.md)。

【Q】如果我想快速存取文件，例如取出权重文件，或指定测试文件，但是这个路径不在共享路径下怎么办？

【A】使用 `docker cp` 复制文件，可以从主机复制到容器，也可以从容器复制到主机。

还可以开启 HTTP 服务或者 FTP 服务，可以互相访问内容。容器可以直接读取主机监听的端口，从而可以直接 `wget` 下载主机的文件。开启 HTTP 服务：

```bash
python -m http.server 8000
```

也有许多的第三方软件，可在不同环境共享文件。

【Q】如果需要不同的依赖环境，有哪些做法？

【A】大致可有下面两种做法：

1. 在不同的容器内进行开发，PyTorch 拉取 PyTorch 镜像，TensorFlow 拉取 TensorFlow 镜像，可以拉取各种不同版本的镜像，单独来开发，环境全部相互隔离。缺点是占用空间较大，不过这点空间和训练集相比可以忽略。
2. 在同一个基础容器（指 CUDA 容器，普通容器不行）内使用 Miniconda 创建虚拟环境开发，好处是操作简单，占用小。缺点是无法隔离 CUDA、cuDNN 等环境，不过影响不大，因为现代框架支持性较好，可提供不同版本的框架。

各种不同的镜像拉取示例：

```bash
docker pull tensorflow/tensorflow:2.11.0
docker pull pytorch/pytorch:1.13.1-cuda11.6-cudnn8-runtime
docker pull nvidia/cuda:11.8.0-base-ubuntu22.04
```

如果本地网络较差，可使用代理拉取，也可以配置 Docker 镜像，或者在云端拉取然后将打包回传到本地。

【Q】Docker 没有 GUI，因此无法使用 `cv2.imshow`，有时还不能导入 `cv2`，怎么解决？

无法导入 OpenCV 时，确保 OpenCV 的安装顺序，或者只安装有 `-headless` 后缀的版本。

```bash
pip3 install opencv-python
pip3 install opencv-contrib-python
pip3 install opencv-python-headless
pip3 install opencv-contrib-python-headless
```

无法显示图片，这个除非有图形界面，使用 `cv2.imwrite`，然后在 Windows 下查看即可。

【Q】如果希望备份整个开发环境，应该怎么办？

【A】Docker 可将容器导出为镜像，镜像可以随时备份为文件，可以迁移到其他电脑或其他任何环境。使用 `docker commit` 可导出容器为镜像，`docker save` 可将镜像压缩为一个文件。还可以使用 Docker Hub 共享镜像到社区。

如果你希望把整个 WSL2 都备份了，可以使用 `wsl --export` 来导出为一个文件，详情见 [迁移 Docker 的位置](./migrate-docker-location.md)。

## 2. 条件准备

- 主机是现代 CPU 且是 x86 架构，安装有现代的 NVIDIA 显卡
- 需要 Windows 10 以上并安装有 WSL2。如果不了解如何安装可参考网络
- 首先需要安装 Docker Desktop，这同时会安装 WSL2 的两个容器 `docker-desktop-data` 和 `docker-desktop`

## 3. 如何使用

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

## 4. 安装 CUDA 容器

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

## 5. 在容器内安装深度学习环境

更新镜像源（以阿里云为例）：

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
pip3 install opencv-python
pip3 install opencv-contrib-python
pip3 install opencv-python-headless
pip3 install opencv-contrib-python-headless
```

安装 PyTorch：

```bash
pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu116
```

（可选）安装 YOLOv8 环境：

```bash
pip3 install ultralytics
```

测试 YOLOv8 在 3070Ti 上的速度：

```log
admin@f292841cc5bf:~$ yolo predict model=yolov8x.pt source="bus.jpg"
Ultralytics YOLOv8.0.34 🚀 Python-3.8.10 torch-1.13.1+cu116 CUDA:0 (NVIDIA GeForce RTX 3070 Ti Laptop GPU, 8192MiB)
YOLOv8x summary (fused): 268 layers, 68200608 parameters, 0 gradients, 257.8 GFLOPs

image 1/1 /home/admin/bus.jpg: 640x480 5 persons, 1 bicycle, 1 bus, 32.4ms
Speed: 9.3ms pre-process, 32.4ms inference, 2.3ms postprocess per image at shape (1, 3, 640, 640)
admin@f292841cc5bf:~$ yolo predict model=yolov8x.pt source="bus.jpg"
Ultralytics YOLOv8.0.34 🚀 Python-3.8.10 torch-1.13.1+cu116 CUDA:0 (NVIDIA GeForce RTX 3070 Ti Laptop GPU, 8192MiB)
YOLOv8x summary (fused): 268 layers, 68200608 parameters, 0 gradients, 257.8 GFLOPs

image 1/1 /home/admin/bus.jpg: 640x480 5 persons, 1 bicycle, 1 bus, 32.1ms
Speed: 2.0ms pre-process, 32.1ms inference, 2.0ms postprocess per image at shape (1, 3, 640, 640)
admin@f292841cc5bf:~$ yolo predict model=yolov8s.pt source="bus.jpg"
Ultralytics YOLOv8.0.34 🚀 Python-3.8.10 torch-1.13.1+cu116 CUDA:0 (NVIDIA GeForce RTX 3070 Ti Laptop GPU, 8192MiB)
YOLOv8s summary (fused): 168 layers, 11156544 parameters, 0 gradients, 28.6 GFLOPs

image 1/1 /home/admin/bus.jpg: 640x480 4 persons, 1 bus, 13.0ms
Speed: 1.9ms pre-process, 13.0ms inference, 2.3ms postprocess per image at shape (1, 3, 640, 640)
admin@f292841cc5bf:~$ yolo predict model=yolov8n.pt source="bus.jpg"
Ultralytics YOLOv8.0.34 🚀 Python-3.8.10 torch-1.13.1+cu116 CUDA:0 (NVIDIA GeForce RTX 3070 Ti Laptop GPU, 8192MiB)
YOLOv8n summary (fused): 168 layers, 3151904 parameters, 0 gradients, 8.7 GFLOPs

image 1/1 /home/admin/bus.jpg: 640x480 4 persons, 1 bus, 1 stop sign, 10.5ms
Speed: 2.3ms pre-process, 10.5ms inference, 2.1ms postprocess per image at shape (1, 3, 640, 640)
```
