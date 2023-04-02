# 共享文件

[[TOC]]

## 1. 开启 HTTP 服务

### 1.1 使用 Python

Python3 自带 HTTP 服务器，但速度慢于下面要介绍的 Nginx 和 `http-server` 服务器程序。

安装 Python3：

```bash
pkg install python
```

启动服务器：

```bash
python -m http.server 8888
```

### 1.2 使用 Nginx

Nginx 是目前速度最快的服务器程序之一。如果没有使用过 Nginx，您可以在网络上查找 Nginx 的资料，有大量配置 Nginx 的视频和文章。

安装 Nginx 的命令如下：

```bash
pkg install nginx
```

配置方式和传统的 Nginx 没有差别，除了配置文件在 `/data/data/com.termux/files/usr/etc/nginx/` 目录下面。

### 1.3 使用 http-server

`http-server` 是基于 Node.js 的 Web 文件服务器，所以需要安装 Node.js：

```bash
# 安装 Node.js
pkg install nodejs-lts

# 安装 http-server
npm i -g http-server
```

启动服务器：

```bash
http-server
```

## 2. FTP 服务

### 2.1 SFTP 服务器

首先需要安装下面的组件：

```bash
pkg install openssh
pkg install pure-ftpd
```

为了能远程登录，需要知道用户名和密码，并开启 SSH 服务：

```bash
# 查看 ip 地址
ip addr

# 查看用户名
whoami

# （可选）修改密码，重复输入两遍即可
passwd

# 启动 ssh  服务
sshd

# 启动 SFTP 服务
pure-ftpd
```

然后可以在同一个局域网下，使用 SFTP 协议登录手机 IP。用户名为 `$(whoami)`，密码为刚才修改的密码，端口为 `8022`。登录成功即可远程管理手机上全部文件（必须是有权限的文件）。

使用 SFTP 协议复制、删除、移动文件的速度很快，实测传输超过 30 MB/s，快于 HTTP 服务器。

`Ctrl+C` 即可中断服务，然后关闭 SSH 服务：

```bash
pkill sshd
```

## 3. 第三方应用

### 3.1 KodBox

KodBox 是一款企业网盘应用，提供有限的免费支持版本，能满足大部分场景的个人文件管理需求。

需要安装 Nginx 和 PHP 扩展：

```bash
pkg install nginx
pkg install php
pkg install php-fpm
```

然后安装 KodBox，例如安装到 `/kod` 目录下：

```bash
mkdir kodbox && cd kodbox
wget https://static.kodcloud.com/update/download/kodbox.1.37.zip
unzip kodbox.1.37.zip -d $PREFIX/share/nginx/html/kod
```

下面配置 Nginx 解析 PHP 文件。

```bash
vim $PREFIX/etc/php-fpm.d/www.conf
```

将 `listen = /data/data/com.termux/files/usr/var/run/php-fpm.sock` 修改为 `listen = 127.0.0.1:9000` 即可。

现在配置 Nginx：

```bash
vim $PREFIX/etc/nginx/nginx.conf
```

如果不了解 Nginx 如何配置 PHP 解析，可以参考下面的配置示例。

::: details Nginx 配置示例

```nginx
worker_processes  auto;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       8080;
        server_name  localhost;
        location / {
            root   /data/data/com.termux/files/usr/share/nginx/html;
            index  index.html index.htm index.php;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /data/data/com.termux/files/usr/share/nginx/html;
        }

        location ~ \.php$ {
            root           html;
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME  /data/data/com.termux/files/usr/share/nginx/html$fastcgi_script_name;
            include        fastcgi_params;
        }
    }
}
```

:::

下面打开页面 `http://localhost:8080/kod/` 即可访问 KodBox。
