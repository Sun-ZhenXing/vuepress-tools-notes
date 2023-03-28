# 开始使用 Vim

[[TOC]]

::: tip 在线交互学习

[OpenVim](https://www.openvim.com/) 是一个交互式 Vim 教程，可以在线学习 Vim 的基本操作。

:::

## 1. 安装 Vim

### 1.1 Linux/Unix

流行的 Linux 系统或者 Mac 基本上都提供了 Vim 的发行版本，如果这些不满足需求也可以使用源码编译安装。

### 1.2 Windows

Windows 安装 Vim 可以首先下载 Git，然后在 Git Bash 中使用 Vim，如果需要在 CMD 中使用 Vim，可以将 Git 的工具路径（如 `D:\Program\Git\usr\bin`）放到环境变量 `PATH` 中。

### 1.3 源码编译安装

克隆仓库：

```bash
git clone https://github.com/vim/vim.git --depth 1
```

编译代码，并安装：

```bash
cd vim/src

# 如果之前编译过，清空构建
# make distclean

make
sudo make install
```

## 2. 基本操作
