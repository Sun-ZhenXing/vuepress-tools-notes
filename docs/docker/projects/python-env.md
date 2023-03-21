# Docker 搭建基本 Python 环境

[[TOC]]

## 1. Python 官方镜像

如果需要立即可用的 Python 可从 Python 镜像查找。例如：

```bash
docker pull python:3.10.10-alpine3.17
```

下文将基于 Ubuntu 22.04。

## 2. Ubuntu 创建 Python 环境

创建容器：

```bash
docker run -itd \
    --name=auto-reg \
    ubuntu:22.04 \
    /bin/bash

docker exec -it auto-reg /bin/bash
```

进入容器：

```bash
cd

# 可选，使用镜像源
mv /etc/apt/sources.list /etc/apt/sources.list.bak
echo 'deb http://mirrors.aliyun.com/ubuntu/ jammy main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse
' > /etc/apt/sources.list

apt update
apt upgrade -y

apt install -y python3-pip

# 使用镜像更新 pip
python3 -m pip install -i https://pypi.tuna.tsinghua.edu.cn/simple --upgrade pip
pip3 config set global.extra-index-url "https://pypi.tuna.tsinghua.edu.cn/simple/ https://mirrors.aliyun.com/pypi/simple/ https://repo.huaweicloud.com/repository/pypi/simple/ https://mirrors.bfsu.edu.cn/pypi/web/simple/"
```

::: info 执行脚本示例

复制本地代码并进入后台运行：

```bash
docker cp test_code.zip auto-reg:/root
docker exec -it auto-reg /bin/bash
```

进入容器后，执行下面的命令：

```bash
apt install -y unzip
# 安装所需依赖
unzip test_code.zip -d test_code
rm test_code.zip
cd test_code
pip3 install -r requirements.txt
nohup python3 reg_with_email.py &
```

:::
