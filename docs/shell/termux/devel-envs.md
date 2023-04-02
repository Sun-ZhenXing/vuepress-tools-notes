# 开发环境

## 1. C/C++

### 1.1 Clang

目前没有对 GCC 的支持，有对 Clang 的支持：

```bash
pkg install clang
```

### 1.2 CMake

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

### 3.1 OpenJDK

目前仅支持 OpenJDK 17：

```bash
pkg install openjdk-17
```

### 3.2 Java 常见工具

还有一些常见的工具：

```bash
pkg install maven
pkg install gradle
pkg install ant
```

### 3.3 Kotlin

同样支持 Kotlin：

```bash
pkg install kotlin
```

## 4. 其他常见语言环境

### 4.1 Node.js

推荐安装 Node.js LTS 版本：

```bash
pkg install nodejs-lts
```

### 4.2 Golang

```bash
pkg install golang
```

### 4.3 Rust

```bash
pkg install rust
```

### 4.4 Ruby

```bash
pkg install ruby
```

### 4.5 PHP

```bash
pkg install php
```

### 4.6 Perl

```bash
pkg install perl
```

### 4.7 Lua

```bash
pkg install lua54 liblua54
```

### 4.8 Haskell

```bash
pkg install ghc
```

### 4.9 Swift

```bash
pkg install swift
```

## 5. Web 开发工具

### 5.1  Nginx

参见 [共享文件：使用 Nginx](./share-file.md#_1-2-使用-nginx)。

```bash
pkg install nginx
```

### 5.2 MariaDB

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

### 5.3 Redis

```bash
pkg install redis
```
