# Docker 部署 Minecraft PE 服务器

[[TOC]]

## 1. 下载程序并创建容器

在 [基岩版服务器下载页面](https://www.minecraft.net/zh-hans/download/server/bedrock) 下载基岩版 Linux 程序。

创建容器：

```bash
docker run -d \
    --name mc-pe \
    -p 19132:19132/udp \
    -p 19133:19133/udp \
    --volume "$PWD/mincraft-pe":/root \
    ubuntu:20.04
```

将下载的文件放到 `$PWD/mincraft-pe` 下面，然后将启动命令作为服务运行。

其运行命令为：

```bash
LD_LIBRARY_PATH=. ./bedrock_server
```

## 2. MC 服务器管理

本节使用 MCSManager 来创建管理器。

有用的链接：

- GitHub 地址：<https://github.com/MCSManager/MCSManager>
- 项目主页：<https://mcsmanager.com/>
- 项目文档：<https://docs.mcsmanager.com/>

Linux 下安装构建：

```bash
sudo su
wget -qO- https://gitee.com/mcsmanager/script/raw/master/setup.sh | bash
exit
```

执行后会自动运行守护进程，将服务器程序加入守护进程列表，并监听 23333 端口。

确保你的服务器防火墙开启了端口 `23333`，登录 `http://<your-ip>:23333`，管理服务器程序。

### 2.1 基岩版构建

如果需要下载基岩版服务器，到 [官方网站](https://www.minecraft.net/zh-hans/download/server/bedrock)，直接下载，注意不要跳转到网易我的世界。

当前最新版本地址：<https://minecraft.azureedge.net/bin-linux/bedrock-server-1.18.31.04.zip> （2022-04-28）。

解压即为服务器程序。如果你希望启动单个实例，并在服务器上直接可用，启动命令如下，这只支持 Ubuntu：

```bash
LD_LIBRARY_PATH=. ./bedrock_server
```

在 Ubuntu 下直接运行时，可以设置默认选项，然后将退出方式设置为 `^C` 即可，配置好端口、防火墙等。

如果需要在 CentOS 等系统中运行，需要使用 Docker 。你可以在上面的管理工具中配置 Docker，这也需要编写 `Dockerfile` 。

编写类似下面的 `Dockerfile`，注意下方代码仅供参考，需要结合自身服务器进行配置：

```dockerfile
FROM ubuntu

COPY bedrock-server-1.18.12.01.zip /server/

WORKDIR /server

RUN cd /server \
    && apt-get -y install openssl unzip \
    && unzip bedrock-server-1.18.12.01.zip

CMD sh ./bedrock_server

EXPOSE 19132 19133
```

可以构建镜像以备使用：

```bash
docker build -t nginx:mc_bedrock18_12 .
```

当你下次需要一个新的游戏实例时，可以使用 `docker run` 产生一个新的容器，关于 Docker 的详细信息本文不过多介绍。

### 2.2 Java 版本等构建

构建过程基本一致，将启动命令

```bash
./bedrock_server
```

替换为

```bash
java -jar server.jar
```

即可，其他配置自行选择。
