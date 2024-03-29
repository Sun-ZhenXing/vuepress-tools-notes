# Docker 部署 RTMP 流媒体服务器

Docker 部署 RTMP 流媒体服务器，在一端使用 RTMP 协议推流，并在前端播放直播内容。

[[TOC]]

## 1. 创建 Docker 容器

::: tabs#sys

@tab Ubuntu 20.04

拉取镜像：

```bash
docker pull ubuntu:20.04
```

创建 Docker 容器：

```bash
docker run -itd \
    --name nginx-flv \
    -p 1935:1935 \
    -p 8089:8089 \
    ubuntu:20.04 \
    /bin/bash
```

@tab CentOS 7.9.2009

拉取镜像：

```bash
docker pull centos:7.9.2009
```

创建 Docker 容器：

```bash
docker run -itd \
    --name nginx-flv \
    -p 1935:1935 \
    -p 8089:8089 \
    centos:7.9.2009 \
    /bin/bash
```

:::

然后进入容器：

```bash
docker exec -it nginx-flv /bin/bash
```

下面的命令都在容器内执行。

## 2. 源码编译

::: tabs#sys

@tab Ubuntu 20.04

请先配置好镜像源，然后更新并安装包：

```bash
apt update

apt install gcc wget unzip make
apt install openssl libssl-dev
apt install libpcre3 libpcre3-dev
apt install zlib1g-dev
```

@tab CentOS 7.9.2009

请先配置好镜像源，然后更新并安装包：

```bash
yum update

yum install gcc
yum install pcre pcre-devel
yum install openssl openssl-devel
yum install wget unzip
```

:::

编译 Nginx 和 HTTP-FLV，[Nginx 官网](http://nginx.org/) 可以查看最新版本：

```bash
wget http://nginx.org/download/nginx-1.23.3.tar.gz
wget https://github.com/winshining/nginx-http-flv-module/archive/refs/heads/master.zip
tar -zxvf nginx-1.23.3.tar.gz
unzip master.zip

cd nginx-1.23.3
./configure --with-http_ssl_module --with-http_secure_link_module --add-module=../nginx-http-flv-module-master
make
make install
```

下面修改 `/usr/local/nginx/conf/nginx.conf`：

```nginx
worker_processes auto;

events {
    worker_connections  1024;
}

http {
    server {
        listen 8089;
        location /flv {
            flv_live on;
            chunked_transfer_encoding on;

            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Credentials' 'true';
        }
    }
}
rtmp_auto_push on;
rtmp {
    server {
        listen 1935;
        notify_method get;
        access_log  /var/log/nginx/access.log;
        chunk_size 4096;
        application live {
            live on;
            allow publish all;
            allow play all;
            drop_idle_publisher 20s;
        }
    }
}
```

测试、启动 Nginx：

```bash
mkdir -p /var/log/nginx
/usr/local/nginx/sbin/nginx -t
/usr/local/nginx/sbin/nginx s reload
```

## 3. 直播推流

可以将下面的 `${IP}` 替换为你的 IP 地址。推送视频 `test.mp4`：

```bash
ffmpeg -re -i test.mp4 -c copy -f flv "rtmp://${IP}:1935/live/test"
```

拉取直播：

```bash
ffplay "rtmp://${IP}:1935/live/test"
```

推送摄像头内容：

```bash
ffmpeg -f dshow -i video="${Your_Camera}":audio="${Your_Audio}" -vcodec libx264 -acodec aac -f flv "rtmp://${IP}:1935/live/test"
```

将视频和音频设备名称填在上方命令的视频和音频位置上即可。

::: tip 查看摄像头

查看视频和音频设备：

```bash
ffmpeg -list_devices true -f dshow -i dummy
```

播放摄像头当前内容：

```bash
ffplay -f dshow -i video="${Your_Camera}"
```

也可以同时播放麦克风的内容，但最好戴上耳机，不然可能产生回声：

```bash
ffplay -f dshow -i video="${Your_Camera}":audio="${Your_Audio}"
```

:::

测试代码如下，保存为 `index.html`：

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>FLV Player</title>
</head>

<body>
  <script src="https://cdn.bootcss.com/flv.js/1.6.2/flv.min.js"></script>
  <video id="videoElement" style="width: 80%" controls="controls"></video>
  <script>
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById('videoElement')
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'http://${IP}:8089/flv?app=live&stream=test'
      })
      flvPlayer.attachMediaElement(videoElement)
      flvPlayer.load()
      flvPlayer.play()
    }
  </script>
</body>

</html>
```

## 4. 使用 Dockerfile

推荐使用 `Dockerfile`，下载源代码，保存上述配置文件为 `nginx.conf`，然后构建。

```bash
curl -Lj -o nginx-1.23.3.tar.gz http://nginx.org/download/nginx-1.23.3.tar.gz
curl -Lj -o nginx-http-flv-module-master.zip https://github.com/winshining/nginx-http-flv-module/archive/refs/heads/master.zip
```

下面是使用 Ubuntu 镜像为例的 `Dockerfile` 文件：

```dockerfile
FROM ubuntu:20.04
WORKDIR /app

COPY nginx-1.23.3.tar.gz .
COPY nginx-http-flv-module-master.zip .

RUN apt update && apt upgrade -y \
    && apt install -y gcc wget unzip make tar \
    && apt install -y openssl libssl-dev \
    && apt install -y libpcre3 libpcre3-dev \
    && apt install -y zlib1g-dev \
    && tar -zxvf nginx-1.23.3.tar.gz \
    && unzip nginx-http-flv-module-master.zip \
    && rm nginx-http-flv-module-master.zip -rf \
    && rm nginx-1.23.3.tar.gz -rf \
    && cd nginx-1.23.3 \
    && ./configure --with-http_ssl_module --with-http_secure_link_module --add-module=../nginx-http-flv-module-master \
    && make \
    && make install \
    && cd ..

EXPOSE 8089 1935

CMD ["/usr/local/nginx/sbin/nginx", "-g", "daemon off;"]
```

执行命令构建并启动：

```bash
docker build -t nginx-flv:v1 .
docker run -itd \
    --name nginx-flv \
    -v $PWD/nginx.conf:/usr/local/nginx/conf/nginx.conf \
    -v $PWD/log:/var/log/nginx \
    -p 1935:1935 \
    -p 8089:8089 \
    nginx-flv:v1
```
