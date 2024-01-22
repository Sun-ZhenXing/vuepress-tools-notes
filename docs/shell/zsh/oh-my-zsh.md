# oh-my-zsh 指南

[[TOC]]

## 1. 安装

[oh-my-zsh](https://ohmyz.sh/) 是一个开源的 zsh 配置管理框架，提供了丰富的插件和主题。

在 [oh-my-zsh](https://ohmyz.sh/) 官方网站所使用的安装方法：

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

国内推荐使用清华镜像：[^1]

[^1]: ohmyzsh Git，清华大学开源软件镜像站，<https://mirrors.tuna.tsinghua.edu.cn/help/ohmyzsh.git/>

```bash
git clone https://mirrors.tuna.tsinghua.edu.cn/git/ohmyzsh.git
cd ohmyzsh/tools
REMOTE=https://mirrors.tuna.tsinghua.edu.cn/git/ohmyzsh.git sh install.sh
```

如果已经安装了 oh-my-zsh，用下面的命令切换到镜像：

```bash
git -C $ZSH remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/ohmyzsh.git
git -C $ZSH pull
```

## 2. 问题

遇到更新失败：

```bash
omz update
```

出现无法连接 GitHub 的错误。原因是 [GitHub 已经不支持不安全的 Git 协议](https://github.blog/2021-09-01-improving-git-protocol-security-github/)，需要修改远程地址：

```bash
cd $ZSH
git remote set-url origin "https://github.com/ohmyzsh/ohmyzsh.git"
omz update
```
