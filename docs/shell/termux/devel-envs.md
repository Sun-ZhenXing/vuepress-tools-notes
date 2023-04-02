# 开发环境

## 1. C/C++

目前没有对 GCC 的支持，有对 Clang 的支持：

```bash
pkg install clang
```

如果需要使用 CMake，可以安装 CMake：

```bash
pkg install cmake
```

## 2. Python

### 2.1 Python3

默认安装了 Python3 最新版本。

```bash
pkg install python
```

### 2.2 Python2

Python 2 已经不再维护，但是有些软件还是需要 Python 2 的支持，所以可以安装 Python 2：

```bash
pkg install python2
```

### 2.3 Python3 常见库

由于直接使用 `pip` 安装一些 C 扩展库会出现问题，所以 Termux 提供了一些常见的 Python 库，下面的库可以直接使用 `pkg install` 安装：

| 库名                      | 说明            |
| ------------------------- | --------------- |
| `python-apsw`             | `apsw`          |
| `python-apt`              | Python 下的 APT |
| `python-bcrypt`           | `bcrypt`        |
| `python-cryptography`     | `cryptography`  |
| `python-ensurepip-wheels` | `ensurepip`     |
| `python-lameenc`          | `lameenc`       |
| `python-numpy`            | NumPy           |
| `python-numpy-static`     | NumPy 静态库    |
| `python-pillow`           | Pillow          |
| `python-pip`              | `pip`           |
| `python-static`           | Python 静态库   |
| `python-tkinter`          | `tkinter`       |
| `python-tldp`             | `tldp`          |
| `python-torch`            | PyTorch         |
| `python-torch-static`     | PyTorch 静态库  |
| `python-torchvision`      | `torchvision`   |
| `python-xcbgen`           | `xcbgen`        |
| `python-xlib`             | `xlib`          |

## 3. Java

目前仅支持 OpenJDK 17：

```bash
pkg install openjdk-17
```

## 4. Node.js

推荐安装 Node.js LTS 版本：

```bash
pkg install nodejs-lts
```

## 5. MariaDB

目前仅支持 MariaDB，不过大部分命令兼容 MySQL：

```bash
pkg install mariadb

# 初始化
mysql_install_db

# 启动
nohup mysqld &

# 退出
pkill mysqld
```

## 6. Nginx

参见 [共享文件：使用 Nginx](./share-file.md#_1-2-使用-nginx)。

```bash
pkg install nginx
```

## 7. Golang

```bash
pkg install golang
```

## 8. Rust

```bash
pkg install rust
```
