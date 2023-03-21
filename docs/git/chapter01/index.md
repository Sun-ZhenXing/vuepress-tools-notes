# Git  基础

## 1. Git 的起源

Git 是目前世界上最先进的分布式版本控制系统。

Linux 系统源码受到越来越多的关注，并接收来自全世界不同贡献者的提交。管理 Linux 源码是艰难的过程，需要比较各种不同版本的提交，Linux 的作者 Linus 花了两周时间自己用 C 写了一个分布式版本控制系统，这就是 Git！用于解决 Linux 源代码管理的问题。

::: tip 为什么使用分布式版本控制系统？

集中式版本控制系统最大的问题就是必须联网才能工作，分布式版本控制系统每个人都有一份副本。

和集中式版本控制系统相比，分布式版本控制系统的安全性要高很多，因为每个人电脑里都有完整的版本库，某一个人的电脑坏掉了不要紧，随便从其他人那里复制一个就可以了。而集中式版本控制系统的中央服务器要是出了问题，所有人都没法干活了。

:::

## 2. Git 安装和配置

使用命令安装：

::: code-tabs#shell

@tab Debian/Ubuntu

```bash
sudo apt-get install git
```

@tab RedHat

```bash
sudo yum install git
```

:::

Windows 用户直接去 [官网下载安装包](https://git-scm.com/downloads) 即可。

Git 全局设置：

```bash
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```
