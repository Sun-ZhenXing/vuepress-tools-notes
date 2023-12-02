# 7-Zip

[[TOC]]

## 1. 7-Zip 安装

7-Zip 是一个开源的压缩软件，支持 Windows 和 Linux。

Windows 版本可以在 [官方下载地址](https://www.7-zip.org/download.html) 中下载，然后将安装的位置加入路径。

Debian/Ubuntu:

```bash
sudo apt install p7zip-full
```

查看已安装的 7-Zip 版本：

```bash
7z
```

## 2. 7-Zip 使用

使用 7-Zip 压缩文件：

```bash
7z a $输出文件名称 $输入文件名称
```

解压缩文件：

```bash
7z x $输入文件名称
```
