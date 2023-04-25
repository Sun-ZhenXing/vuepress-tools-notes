# Halo 博客搭建

[Halo](https://halo.run/) 是个人博客系统。

Halo 现在有版本 1.x 和 2.x，这两者并不兼容，插件生态有区别，可以根据需求选择。

建议 [使用 Docker Compose 部署 Halo](https://docs.halo.run/getting-started/install/docker-compose/)。

```bash
mkdir ~/halo && cd ~/halo
```

复制上述文档中的 `docker-compose.yml` 文件到当前目录。

可以选择和 MySQL、PostgreSQL 配置项目：
- `--halo.external-url=https://example.com/`：配置访问地址，如果不配置无法使用
- `--spring.r2dbc.password=...`：配置数据库密码，两个地方都需要改
- `--halo.security.initializer.superadminusername=admin`：配置管理员用户名
- `--halo.security.initializer.superadminpassword=...`：配置管理员密码

然后配置一个 Nginx 反向代理，在宿主机上可用的配置如下：

```nginx
user www-data;
worker_processes auto;

events {
    worker_connections 768;
}

http {
    client_max_body_size 128m;
    server {
        listen 80;
        server_name www.example.com example.com;
        return 301 https://example.com$request_uri;
    }
    server {
        listen 443 ssl;
        server_name www.example.com;
        ssl_certificate cert/example.com.pem;
        ssl_certificate_key cert/example.com.key;
        return 301 https://example.com$request_uri;
    }
    server {
        listen 443 ssl;
        server_name example.com;
        ssl_certificate cert/example.com.pem;
        ssl_certificate_key cert/example.com.key;
        location / {
            proxy_pass http://localhost:8090;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
}
```
