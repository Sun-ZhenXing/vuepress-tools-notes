# Docker 安装 KodExplorer

[[TOC]]

## 1. 安装

KodExplorer 是一个开源的 Web 文件管理器，提供了在线文件管理、文件预览、编辑、上传和下载等功能。

```bash
docker run -d \
    --name kodexplorer \
    -p 9000:80 \
    -v $PWD/kodexplorer/data:/var/www/html \
    kodcloud/kodexplorer
```
